import React, { useContext, useState } from "react";
import styled from "styled-components";
import {
  GlobalContext,
  initialState,
  reducer,
  CONNECT
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
  const [state, setState] = useState({ connected: false });

  const handleConnect = () => {
    dispatch({
      type: CONNECT
    });
  };

  return (
    <CentredFlex>
      <TextContent>
        <LargeTitle>Settings</LargeTitle>
        <Button onClick={handleConnect}>Connect</Button>
        <SmallText>
          API Status: {state.connected ? `connected` : `disconnected`}
        </SmallText>
        <SmallText>API URL: {}</SmallText>
        <SmallText>API Version: {}</SmallText>
      </TextContent>
    </CentredFlex>
  );
};

export default Settings;
