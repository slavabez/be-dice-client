import React, { useContext } from "react";
import styled, { keyframes } from "styled-components";
import { Background, ModalWrapper } from "./index";
import { GlobalContext } from "../../stores/global";
import Portal from "./Portal";
import Icon from "../../utilities/Icon";
import { beGreen } from "../shared";

const ProgressBar = styled.progress``;

const LoadingWrapper = styled.div`
  z-index: 30;

  svg {
    height: 20rem;
    width: 20rem;
  }
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const IconWrap = styled.div`
  animation: ${rotate} 2s linear infinite;
`;

const Loading = () => {
  const { store } = useContext(GlobalContext);

  return (
    <Portal id="loading">
      <ModalWrapper zIndex="20">
        <LoadingWrapper>
          <IconWrap>
            <Icon icon="cog" color={beGreen} />
          </IconWrap>
        </LoadingWrapper>

        <Background />
      </ModalWrapper>
    </Portal>
  );
};

export default Loading;
