import React, { useContext } from "react";
import {
  GlobalContext,
  CONNECT,
  DISCONNECT,
  MODAL_MESSAGE,
  SHOW_LOADING,
  UPDATE_LOADING_PROGRESS,
  STOP_LOADING
} from "../../stores/global";
import {
  CentredFlex,
  LargeTitle,
  TextContent,
  SmallText,
  Button
} from "../shared";

const Settings = () => {
  const { store, dispatch } = useContext(GlobalContext);

  const handleConnect = () => {
    dispatch({
      type: CONNECT
    });
  };

  const handleDisconnect = () => {
    dispatch({
      type: DISCONNECT
    });
  };

  const showModal = () => {
    dispatch({
      type: MODAL_MESSAGE,
      payload: (
        <TextContent>
          <LargeTitle>Hello</LargeTitle>
          <SmallText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
            asperiores sit assumenda exercitationem alias tenetur rem mollitia,
            beatae doloremque voluptatem unde error aliquam, officia obcaecati
            eius aliquid voluptatibus dolores id.
          </SmallText>
        </TextContent>
      )
    });
  };

  const showLoading = () => {
    setTimeout(() => {
      dispatch({
        type: SHOW_LOADING
      });
    }, 2000);
    setTimeout(() => {
      dispatch({
        type: STOP_LOADING
      });
    }, 5000);
  };

  return (
    <CentredFlex>
      <TextContent>
        <LargeTitle>Settings</LargeTitle>
        <Button onClick={handleConnect}>Connect</Button>
        <br />
        <Button onClick={handleDisconnect}>Disconnect</Button>
        <br />
        <Button onClick={showModal}>Show Modal</Button>
        <br />
        <Button onClick={showLoading}>Show Loading</Button>
        <SmallText>
          API Status: {store.apiStatus ? `connected` : `disconnected`}
        </SmallText>
        <SmallText>API URL: {store.apiVersion.url}</SmallText>
        <SmallText>API Version: {store.apiVersion.version}</SmallText>
      </TextContent>
    </CentredFlex>
  );
};

export default Settings;
