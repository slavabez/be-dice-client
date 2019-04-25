import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import { bright } from "./styled/theme";
import Logo from "./components/Logo";
let selectedTheme = bright;

const AppWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr 5fr 1fr;
  grid-template-areas:
    "logo top-controls"
    "roll-journal roll-journal"
    "dice-buttons dice-buttons";

  font-family: "Dosis", sans-serif;

  div {
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

const TopControls = styled.div`
  grid-area: top-controls;
`;
const DiceButtons = styled.div`
  grid-area: dice-buttons;
`;
const RollJournal = styled.div`
  grid-area: roll-journal;
`;

const BeDiceApp: React.FC = () => {
  return (
    <ThemeProvider theme={selectedTheme}>
      <AppWrapper>
        <Logo />
        <TopControls>Top Controls</TopControls>
        <DiceButtons>Dice Icons</DiceButtons>
        <RollJournal>Roll Journal And Members</RollJournal>
      </AppWrapper>
    </ThemeProvider>
  );
};

export default BeDiceApp;
