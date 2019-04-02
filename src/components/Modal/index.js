import React from "react";
import styled from "styled-components";

import Portal from "./Portal";

const ModalWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalCard = styled.div`
  position: relative;
  min-width: 320px;
  z-index: 10;
  margin-bottom: 100px;
  background-color: white;
`;

const Modal = ({ children }) => {
  return (
    <Portal id="portal">
      <ModalWrapper>
        <ModalCard>{children}</ModalCard>
      </ModalWrapper>
    </Portal>
  );
};

export default Modal;
