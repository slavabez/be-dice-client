import React, { useContext } from "react";
import styled from "styled-components";
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

const Loading = () => {
  const { store } = useContext(GlobalContext);

  return (
    <Portal id="loading">
      <ModalWrapper zIndex="20">
        <LoadingWrapper>
          <Icon icon="cog" color={beGreen} />
        </LoadingWrapper>

        <Background />
      </ModalWrapper>
    </Portal>
  );
};

export default Loading;
