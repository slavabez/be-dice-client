import React, { useState } from "react";
import { RouteComponentProps } from "@reach/router";

import {
  CreateButton,
  CreateRoomForm,
  CreateRoomInput,
  DateSpan,
  JoinRoomWrapper,
  Name,
  NumOfUsers,
  RoomList,
  RoomListItem,
  Wrapper
} from "./styled";
import { getTimeFromDate } from "../../utilities/date";

interface RSProps extends RouteComponentProps {}

const fakeRooms = [
  {
    name: "lol",
    users: [],
    history: [],
    createdAt: Date.now(),
    numOfUsers: 2
  },
  {
    name: "TestRoom",
    users: [],
    history: [],
    createdAt: Date.now(),
    numOfUsers: 2
  },
  {
    name: "No u lol",
    users: [],
    history: [],
    createdAt: Date.now(),
    numOfUsers: 0
  }
];

const RoomSelection: React.FC<RSProps> = () => {
  const [roomName, setRoomName] = useState("");

  const handleRoomCreate = (e: React.FormEvent) => {
    e.preventDefault();
    setRoomName("");
  };

  const renderRoomList = () => {
    if (fakeRooms.length === 0) {
      return <p>There are no rooms online, go ahead and create one</p>;
    } else {
      return fakeRooms.map(r => (
        <RoomListItem key={r.name}>
          <Name>
            {r.name}{" "}
            <NumOfUsers>
              {r.numOfUsers ? `${r.numOfUsers} user(s)` : `empty`}
            </NumOfUsers>
          </Name>

          <DateSpan>{getTimeFromDate(r.createdAt)}</DateSpan>
        </RoomListItem>
      ));
    }
  };

  return (
    <Wrapper>
      <CreateRoomForm onSubmit={handleRoomCreate}>
        <h1>Create a room</h1>
        <CreateRoomInput
          type="text"
          required
          minLength={3}
          maxLength={16}
          value={roomName}
          placeholder="New room name"
          onChange={e => {
            setRoomName(e.target.value);
          }}
        />
        <CreateButton
          aria-label="Create a new dice room and join it"
          type="submit"
        >
          Add & join
        </CreateButton>
      </CreateRoomForm>
      <JoinRoomWrapper>
        <h1>Join a room</h1>
        <RoomList>{renderRoomList()}</RoomList>
      </JoinRoomWrapper>
    </Wrapper>
  );
};

export default RoomSelection;
