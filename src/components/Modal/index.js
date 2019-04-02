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
`;

const ModalCard = styled.div`
  position: relative;
  min-width: 320px;
  z-index: 10;
  margin-bottom: 100px;
`;

const Modal = () => {
  return <Portal />;
};

export default Modal;
