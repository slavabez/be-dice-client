import React, { useContext } from "react";
import { GlobalContext, CONNECT, DISCONNECT } from "../../stores/global";
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

  return (
    <CentredFlex>
      <TextContent>
        <LargeTitle>Settings</LargeTitle>
        <Button onClick={handleConnect}>Connect</Button>
        <br />
        <Button onClick={handleDisconnect}>Disconnect</Button>
        <br />
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
