import React from "react";

export const CONNECT = "CONNECT";
export const DISCONNECT = "DISCONNECT";
export const SET_API_VERSION = "SET_API_VERSION";
export const SET_API_STATUS = "SET_API_STATUS";
export const SET_CURRENT_USER = "SET_CURRENT_USER";
export const SET_ROOMS = "SET_ROOMS";
export const SET_CURRENT_ROOM = "SET_CURRENT_ROOM";
export const LEAVE_ROOM = "LEAVE_ROOM";
export const ROOM_SOMEONE_LEFT = "ROOM_SOMEONE_LEFT";
export const ROOM_SOMEONE_JOINED = "ROOM_SOMEONE_JOINED";
export const ROOM_NEW_ROLL = "ROOM_NEW_ROLL";

export const GlobalContext = React.createContext({});

export const initialState = {
  apiVersion: {
    version: "n/a",
    url: "n/a"
  },
  apiStatus: null,
  doConnect: false,
  currentUser: {},
  rooms: [],
  currentRoom: {}
};

export const reducer = (state, action) => {
  switch (action.type) {
    case CONNECT: {
      return {
        ...state,
        doConnect: true
      };
    }

    case DISCONNECT: {
      return {
        ...state,
        doConnect: false,
        apiVersion: {
          version: "n/a",
          url: "n/a"
        }
      };
    }

    case SET_API_VERSION: {
      return {
        ...state,
        apiVersion: action.payload
      };
    }

    case SET_API_STATUS: {
      return {
        ...state,
        apiStatus: action.payload
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
        rooms: action.payload
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
        users = users.filter(u => u.id !== action.payload);
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
      const newState = Object.assign({}, state);
      if (Array.isArray(newState.currentRoom.rolls))
        newState.currentRoom.rolls.push(action.payload);
      return newState;
    }

    default:
      return state;
  }
};
