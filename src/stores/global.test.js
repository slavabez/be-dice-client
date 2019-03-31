import {
  GlobalContext,
  initialState,
  reducer,
  SET_API_VERSION,
  SET_CURRENT_USER,
  SET_ROOMS,
  SET_CURRENT_ROOM,
  LEAVE_ROOM,
  ROOM_SOMEONE_JOINED,
  ROOM_SOMEONE_LEFT,
  ROOM_NEW_ROLL
} from "./global";

const modelState = {
  apiVersion: "1.0.1",
  currentUser: {
    id: "asd9876asd97",
    avatar: "path/to/image.jpg",
    color: "#fa454f",
    name: "Aragorn"
  },
  rooms: [
    {
      name: "The Room",
      users: [
        {
          id: "12j3hg123",
          avatar: "path/to/pic.png",
          color: "#afafaf",
          name: "Pikachu"
        }
      ],
      createdAt: new Date()
    },
    {
      name: "Empty Room",
      users: [
        {
          id: "12js3hg123",
          avatar: "path/to/pic.png",
          color: "#afafaf",
          name: "Bulbasaur"
        },
        {
          id: "asd9876asd97",
          avatar: "path/to/image.jpg",
          color: "#fa454f",
          name: "Aragorn"
        }
      ],
      createdAt: new Date()
    }
  ],
  currentRoom: {
    name: "Empty Room",
    users: [
      {
        id: "12js3hg123",
        avatar: "path/to/pic.png",
        color: "#afafaf",
        name: "Bulbasaur"
      },
      {
        id: "asd9876asd97",
        avatar: "path/to/image.jpg",
        color: "#fa454f",
        name: "Aragorn"
      }
    ],
    createdAt: new Date(),
    history: [
      {
        total: 16
      },
      {
        total: 2
      },
      {
        total: 4
      },
      {
        total: 12
      },
      {
        total: 66
      },
      {
        total: 123
      }
    ]
  }
};

describe("Global state Reducer logic unit tests", () => {
  let r;
  let originalState;
  beforeEach(() => {
    // Reset the reducer
    r = reducer;
    originalState = Object.assign({}, modelState);
  });

  test(`${SET_API_VERSION} works`, () => {
    const newState = r(originalState, {
      type: SET_API_VERSION,
      payload: "1.1.5"
    });
    expect(newState).toEqual({ ...originalState, apiVersion: "1.1.5" });
  });

  test(`${SET_CURRENT_USER} works`, () => {
    const newUser = {
      avatar: "lol",
      name: "someName",
      color: "white"
    };
    const newState = r(originalState, {
      type: SET_CURRENT_USER,
      payload: newUser
    });
    expect(newState).toEqual({ ...originalState, currentUser: newUser });
  });

  test(`${SET_ROOMS} works`, () => {
    const newRooms = [];
    const newState = r(originalState, {
      type: SET_ROOMS,
      payload: newRooms
    });
    expect(newState.rooms).toHaveLength(0);
    expect(newState.rooms).toEqual([]);
  });

  test(`${SET_CURRENT_ROOM} works`, () => {
    const newRoom = Object.assign({}, modelState.rooms[0]);
    const newState = r(originalState, {
      type: SET_CURRENT_ROOM,
      payload: newRoom
    });
    const manualState = Object.assign({}, modelState);
    manualState.currentRoom = Object.assign({}, modelState.rooms[0]);
    expect(newState).toEqual(manualState);
  });

  test(`${LEAVE_ROOM} works`, () => {
    const newState = r(originalState, {
      type: LEAVE_ROOM
    });
    const manualState = Object.assign({}, modelState);
    manualState.currentRoom = null;
    expect(newState).toEqual(manualState);
  });

  test(`${ROOM_SOMEONE_JOINED} works`, () => {
    const newUser = {
      avatar: "hotline.png",
      color: "yellow",
      name: "Black and yellow"
    };
    const num = originalState.currentRoom.users.length;
    const newState = r(originalState, {
      type: ROOM_SOMEONE_JOINED,
      payload: newUser
    });
    const manualState = Object.assign({}, modelState);
    manualState.currentRoom.users.push(newUser);
    expect(newState).toEqual(manualState);
    expect(newState.currentRoom.users).toHaveLength(num + 1);
  });

  test(`${ROOM_SOMEONE_LEFT} works`, () => {
    const num = originalState.currentRoom.users.length;
    const newState = r(originalState, {
      type: ROOM_SOMEONE_LEFT,
      payload: "12js3hg123"
    });
    const manualState = Object.assign({}, modelState);
    manualState.currentRoom.users.shift();
    expect(newState).toEqual(manualState);
    expect(newState.currentRoom.users).toHaveLength(num - 1);
  });

  test(`${ROOM_NEW_ROLL} works`, () => {
    const num = originalState.currentRoom.history.length;
    const newState = r(originalState, {
      type: ROOM_NEW_ROLL,
      payload: { total: 100 }
    });
    const manualState = Object.assign({}, modelState);
    manualState.currentRoom.history.push({ total: 100 });
    expect(newState.currentRoom.history).toHaveLength(num + 1);
    expect(newState).toEqual(manualState);
  });
});
