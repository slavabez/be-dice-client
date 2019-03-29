import React, { createContext } from "react";
import io from "socket.io-client";


const url = `https://test.api.be-dice.com`;

const connection = io.connect(url);
connection.on("error", err => {
  console.error("Socket.IO connection error", err);
});

connection.on("connect", () => {
  // Things to do upon a successful connection
  connection.emit("server.version");
});

connection.on("server.version", data => {
  data.version &&
    console.log(
      `---- Connected to be-dice API version ${data.version} on ${url} ----`
    );
});

export default connection;
