import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import SocketIO from "socket.io-client";
import {
  GlobalContext,
  SET_API_VERSION,
  SET_API_STATUS
} from "../../stores/global";

import Icon from "../../utilities/Icon";

import logo from "../../assets/logo_white_small.png";

const connectedColor = "#37ec37";
const disconnectedColor = "#a00707";
const API_URL = "https://test.api.be-dice.com";

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
  console.log("CM Rendered");

  const [state, setState] = useState({
    connection: null
  });

  const { store, dispatch } = useContext(GlobalContext);

  // Runs when api status changes (i.e. connect/disconnect)
  useEffect(() => {
    console.log("doConnect hook ran...", store.doConnect);
    if (store.doConnect) {
      // Initiate the connection unless one is open

      if (state.connection && state.connection.connected) {
        console.warn("Called doConnect when already connected");
        return;
      }
      const connection = SocketIO.connect(API_URL);

      // Register all the event listeners for the connection
      connection.on("connect", () => {
        console.log("Connected to API, requesting version");
        connection.emit("server.version");
        dispatch({
          type: SET_API_STATUS,
          payload: true
        });
      });

      connection.on("server.version", v => {
        dispatch({
          type: SET_API_VERSION,
          payload: {
            version: v.version,
            url: API_URL
          }
        });
      });

      connection.on("disconnect", () => {
        console.log("Disconnected from the API");
        dispatch({
          type: SET_API_STATUS,
          payload: false
        });
      });

      setState({ connection });
    } else {
      // Close the connection, if open
      console.log("Closing the connection");
      if (state.connection) {
        state.connection.close();
      }
      setState({ connection: state.connection });
    }

    // If for whatever reason the component is dismounted, close the connection
    return function cleanUp() {
      if (state.connection) {
        state.connection.close();
      }
    };
  }, [store.doConnect]);

  return (
    <Wrapper>
      <Inside>
        <img src={logo} alt="Be-dice.com logo" />
        <Info>
          <Icon
            icon="chain_link"
            title={store.apiStatus ? "Connected" : "Disconnected"}
            color={store.apiStatus ? connectedColor : disconnectedColor}
            onClick={() => {
              console.log(state.connection);
            }}
          />{" "}
          API v {store.apiVersion.version}
        </Info>
      </Inside>
    </Wrapper>
  );
};

export default ConnectionManager;
