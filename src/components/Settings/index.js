import React, { useContext } from "react";
import styled from "styled-components";
import { GlobalContext, initialState, reducer } from "../../stores/global";
import { CentredFlex, LargeTitle, TextContent, SmallText } from "../shared";

const Settings = () => {
  const { store, dispatch } = useContext(GlobalContext);

  return (
    <CentredFlex>
      <TextContent>
        <LargeTitle>Settings</LargeTitle>
        <SmallText>API Status: {}</SmallText>
        <SmallText>API URL: {}</SmallText>
        <SmallText>API Version: {}</SmallText>
      </TextContent>
    </CentredFlex>
  );
};

export default Settings;
