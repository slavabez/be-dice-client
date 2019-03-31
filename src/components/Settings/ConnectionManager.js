import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../stores/global";

import StatusSVG from "../shared/ChainLink";

import logo from "../../assets/logo_white_small.png";

const connectedColor = "#37ec37";
const disconnectedColor = "#a00707";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 50px;
  overflow: hidden;
  position: relative;

  img {
    height: 50px;
    width: auto;
  }
`;

const Inside = styled.div`
  height: 100px;
  position: relative;
  top: 0;
  transition: all ease 0.5s;

  &:hover {
    top: -50px;
  }
`;

const Info = styled.span`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  text-align: center;
  font-size: 0.75rem;
  color: white;
`;

const ConnectionManager = () => {
  const [state, setState] = useState({
    connection: null
  });

  const { store, dispatch } = useContext(GlobalContext);

  // Runs when api status changes (i.e. connect/disconnect)
  useEffect(() => {
    console.log("Use effect ran");
  }, [store.apiStatus]);

  return (
    <Wrapper>
      <Inside>
        <img src={logo} alt="Be-dice.com logo" />
        <Info>
          <StatusSVG
            title={store.apiStatus ? "Connected" : "Disconnected"}
            color={store.apiStatus ? connectedColor : disconnectedColor}
          />{" "}
          API v x.x.x
        </Info>
      </Inside>
    </Wrapper>
  );
};

export default ConnectionManager;
