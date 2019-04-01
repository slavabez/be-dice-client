import React from "react";
import ReactDOM from "react-dom";
import usePortal from "./usePortal";

const Modal = ({ children }) => {
  const target = usePortal("portal");
  return ReactDOM.createPortal(children, target);
};
