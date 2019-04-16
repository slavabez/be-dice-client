import { createContext } from "react";

const initialState = {
  allRooms: [],
  currentRoom: null
};

export const roomContext = createContext(initialState);
