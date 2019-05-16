import React, { createContext, useState } from "react";

const initialState = {
  allRooms: [],
  currentRoom: null
};

export const RoomContext = createContext(initialState);

export function RoomProvider(props) {
  const [rooms, setRooms] = useState(initialState.allRooms);
  const [currentRoom, setCurrentRoom] = useState(null);

  return <RoomContext.Provider value={{rooms, setRooms, currentRoom, setCurrentRoom}}>
    {props.children}
  </RoomContext.Provider>
}
