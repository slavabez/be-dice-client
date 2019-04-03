import React, { useContext } from "react";
import styled from "styled-components";
import { Background, ModalWrapper } from "./index";
import { GlobalContext } from "../../stores/global";
import Portal from "./Portal";

const ProgressBar = styled.progress``;

const Loading = () => {
  const { store } = useContext(GlobalContext);

  return (
    <Portal id="loading">
      <ModalWrapper zIndex="20">
        <ProgressBar />
        <Background />
      </ModalWrapper>
    </Portal>
  );
};

export default Loading;
