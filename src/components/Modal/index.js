import React, { useContext } from "react";
import styled from "styled-components";
import Icon from "../../utilities/Icon";
import { GlobalContext, MODAL_MESSAGE } from "../../stores/global";
import Portal from "./Portal";
import { absolute } from "../../utilities/position";

export const ModalWrapper = styled.div`
  ${absolute()};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalCard = styled.div`
  position: relative;
  min-width: 320px;
  z-index: 10;
  background-color: white;
  padding: 1.5rem;
`;

export const Background = styled.div`
  ${absolute()};
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.3;
`;

const CloseButton = styled.button`
  ${absolute()};
  background: transparent;
  border: none;
  padding: 10px;
`;

const Modal = () => {
  const { store, dispatch } = useContext(GlobalContext);

  const close = () => {
    dispatch({
      type: MODAL_MESSAGE,
      payload: null
    });
  };

  return (
    <Portal id="portal">
      <ModalWrapper>
        <ModalCard>
          <CloseButton onClick={close}>
            <Icon />
          </CloseButton>
          {store.modalMessage}
        </ModalCard>
        <Background onClick={close} />
      </ModalWrapper>
    </Portal>
  );
};

export default Modal;
