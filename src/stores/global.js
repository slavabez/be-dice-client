import React from "react";

export const SET_API_VERSION = "SET_API_VERSION";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const SET_ROOMS = "SET_ROOMS";
export const SET_CURRENT_ROOM = "SET_CURRENT_ROOM";
export const LEAVE_ROOM = "LEAVE_ROOM";
export const ROOM_SOMEONE_LEFT = "ROOM_SOMEONE_LEFT";
export const ROOM_SOMEONE_JOINED = "ROOM_SOMEONE_JOINED";
export const ROOM_NEW_ROLL = "ROOM_NEW_ROLL";

export const GlobalContext = React.createContext({});

export const initialState = {
  apiVersion: null,
  currentUser: {},
  rooms: [],
  currentRoom: {}
};

export const reducer = (state, action) => {
  console.log("Received action ", action);
  switch (action.type) {
    case SET_API_VERSION: {
      return {
        ...state,
        apiVersion: action.payload
      };
    }

    case SET_CURRENT_USER: {
      return {
        ...state,
        currentUser: action.payload
      };
    }

    case SET_ROOMS: {
      return {
        ...state,
        rooms: action.rooms
      };
    }

    case SET_CURRENT_ROOM: {
      return {
        ...state,
        currentRoom: action.payload
      };
    }

    case LEAVE_ROOM: {
      return {
        ...state,
        currentRoom: null
      };
    }

    case ROOM_SOMEONE_JOINED: {
      let users = state.currentRoom.users;
      if (Array.isArray(users)) users.concat(action.payload);
      return {
        ...state,
        currentRoom: {
          ...state.currentRoom,
          users
        }
      };
    }

    case ROOM_SOMEONE_LEFT: {
      let users = state.currentRoom.users;
      if (Array.isArray(users)) {
        users = users.filter(u => u.id === action.payload);
      }
      return {
        ...state,
        currentRoom: {
          ...state.currentRoom,
          users
        }
      };
    }

    case ROOM_NEW_ROLL: {
      let rolls = state.currentRoom.history;
      if (Array.isArray(rolls)) rolls.concat(action.payload);
      return {
        ...state,
        currentRoom: {
          ...state.currentRoom,
          rolls
        }
      };
    }

    default:
      return state;
  }
};
