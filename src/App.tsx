import * as React from "react";
import styled from "styled-components";

const AppWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr 5fr 1fr;
  grid-template-areas:
    "logo top-controls"
    "roll-journal roll-journal"
    "dice-buttons dice-buttons";

  div {
    border: 1px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  @media (orientation: landscape) {
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-rows: 1fr 3fr;
    grid-template-areas:
      "logo top-controls top-controls"
      "roll-journal roll-journal dice-buttons";
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 6fr;
    grid-template-rows: 1fr 1fr 5fr;
    grid-template-areas:
      "logo top-controls top-controls"
      "dice-buttons dice-buttons dice-buttons"
      "roll-journal roll-journal roll-journal";
  }
`;

const Logo = styled.div`
  grid-area: logo;
  background-color: rgba(255, 0, 0, 0.05);
`;
const TopControls = styled.div`
  grid-area: top-controls;
  background-color: rgba(255, 255, 0, 0.05);
`;
const DiceButtons = styled.div`
  grid-area: dice-buttons;
  background-color: rgba(255, 0, 255, 0.05);
`;
const RollJournal = styled.div`
  grid-area: roll-journal;
  background-color: rgba(0, 255, 255, 0.05);
`;

const BeDiceApp: React.FC = () => {
  return (
    <AppWrapper>
      <Logo>Logo</Logo>
      <TopControls>Top Controls</TopControls>
      <DiceButtons>Dice Icons</DiceButtons>
      <RollJournal>Roll Journal And Members</RollJournal>
    </AppWrapper>
  );
};

export default BeDiceApp;
