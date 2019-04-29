import React from "react";
import styled from "styled-components";

const Wrapper = styled.main`
  grid-area: main-view;
`;

const MainView: React.FC = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default MainView;
