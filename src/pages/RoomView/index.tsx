import React, { useState } from "react";
import styled from "styled-components";
import { RouteComponentProps } from "@reach/router";
import posed from "react-pose";
import { Room } from "./interfaces";

import { colors, avatars } from "../../utilities/character";
import dice from "../../utilities/dice";
import SVG from "../../utilities/SVGs";

interface RVProps extends RouteComponentProps {
  roomId?: string;
}

const roomInfo: Room = {
  name: "Lol",
  createdAt: Date.now() - 60 * 60 * 1000,
  history: [
    {
      author: {
        avatar: avatars[1].thumb,
        color: colors[2].hex,
        name: "Jonathan"
      },
      createdAt: Date.now() - 30 * 60 * 1000,
      rollString: "1d20",
      rolls: [
        {
          order: 1,
          result: 13,
          sides: 20
        }
      ],
      total: 13
    },
    {
      author: {
        avatar: avatars[2].thumb,
        color: colors[4].hex,
        name: "Stephen"
      },
      createdAt: Date.now() - 20 * 60 * 1000,
      rollString: "2d6",
      rolls: [
        {
          order: 1,
          result: 3,
          sides: 6
        },
        {
          order: 2,
          result: 4,
          sides: 6
        }
      ],
      total: 7
    }
  ],
  numOfUsers: 2,
  users: [
    {
      avatar: avatars[2],
      color: colors[4],
      id: "someid",
      name: "Stephen"
    },
    {
      avatar: avatars[1],
      color: colors[2],
      id: "someotherid",
      name: "Jonathan"
    }
  ]
};

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DiceSection = styled.div`
  overflow: auto;
  display: flex;
  max-width: 90%;
`;

export const DiceButton = styled.button`
  margin: 0.2rem;

  img {
    width: 50px;
  }
`;

export const RoomSection = styled.div`
  display: flex;
  max-width: 100%;
  overflow: hidden;
  width: 100%;
`;

export const RoomInfoPanel = styled.div`
  display: flex;
  align-items: flex-start;
`;

interface FadingPanelProps {
  isFaded: boolean;
}

export const HistoryPanel = styled.div`
  flex-grow: 1;
  opacity: ${(p: FadingPanelProps) => (p.isFaded ? 0.7 : 1)};
`;

export const RoomPlayers = styled.div``;

export const Player = styled.div``;

export const RollsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const Roll = styled.div`
  display: flex;
  align-items: center;
`;

const CollapsibleRoomInfoPanel = posed.div({
  closed: { width: 0, opacity: 0, zIndex: -1 },
  open: { width: "auto", opacity: 1, zIndex: 0 }
});

export const MenuOpenButton = styled.button``;

const RoomView: React.FC<RVProps> = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Wrapper>
      <DiceSection>
        {dice.map(d => (
          <DiceButton key={d.name}>
            <img src={d.image} alt={d.name} />
            <p>{d.name}</p>
          </DiceButton>
        ))}
      </DiceSection>
      <RoomSection>
        <RoomInfoPanel>
          <CollapsibleRoomInfoPanel pose={menuOpen ? "open" : "closed"}>
            <h1>{roomInfo.name}</h1>
            <button>Leave</button>
            <RoomPlayers>
              {roomInfo.users.map(p => (
                <Player key={p.id}>
                  <img src={p.avatar.thumb} alt={p.name} />
                  <p>{p.name}</p>
                </Player>
              ))}
            </RoomPlayers>
          </CollapsibleRoomInfoPanel>
          <MenuOpenButton onClick={() => setMenuOpen(!menuOpen)}>
            <SVG name="menu" />
          </MenuOpenButton>
        </RoomInfoPanel>
        <HistoryPanel isFaded={menuOpen}>
          <RollsWrapper>
            {roomInfo.history.map(r => (
              <Roll key={r.createdAt.toString()}>
                <img src={r.author.avatar} alt={r.author.name} />
                <p>{r.rollString}</p>
                <p>Total: {r.total}</p>
                <p>Rolls: {r.rolls.map(r => r.result).join(" + ")}</p>
              </Roll>
            ))}
          </RollsWrapper>
        </HistoryPanel>
      </RoomSection>
    </Wrapper>
  );
};

export default RoomView;
