import { createContext } from "react";
import io from "socket.io-client";

const API_URL = "https://dev.api.be-dice.com";

const initialState = {
  socket: null,
  apiVersion: {
    version: "n/a",
    url: "n/a"
  },
  tryConnect: false,
  isConnected: false,
  connect: () => {
    initialState.socket = io.connect();
  }
};

export const connectionContext = createContext(initialState);
