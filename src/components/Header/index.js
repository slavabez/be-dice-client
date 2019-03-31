import React, { Component } from "react";
import styled from "styled-components";
import ProfileControls from "./ProfileControls";
import ConnectionManager from "../Settings/ConnectionManager";

import { beDarkGreen } from "../shared";


const Wrapper = styled.header`
  width: 100%;
  background-color: ${beDarkGreen};
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
`;

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Inner>
          <ConnectionManager />
          <ProfileControls />
        </Inner>
      </Wrapper>
    );
  }
}

export default Header;
