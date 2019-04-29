import * as React from "react";
import styled, { ThemeProvider } from "styled-components";
import { Router } from "@reach/router";

import { bright } from "./styled/theme";
import { CharacterCreation, RoomSelection, RoomView, Welcome } from "./pages";
import { Logo, TopControls, MainView } from "./components";
let selectedTheme = bright;

const AppWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr 6fr;
  grid-template-areas:
    "logo top-controls"
    "main-view main-view";

  font-family: "Dosis", sans-serif;

  div,
  main {
    border: 1px solid black;
  }

  @media (orientation: landscape) {
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 1fr 3fr;
    grid-template-areas:
      "logo top-controls"
      "main-view main-view";
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 6fr;
    grid-template-rows: 1fr 6fr;
    grid-template-areas:
      "logo top-controls top-controls"
      "main-view main-view main-view";
  }
`;

const BeDiceApp: React.FC = () => {
  return (
    <ThemeProvider theme={selectedTheme}>
      <AppWrapper>
        <Logo />
        <TopControls />
        <MainView>
          <Router>
            <Welcome path="/" />
            <CharacterCreation path="/character" />
            <RoomSelection path="/rooms" />
            <RoomView path="/room/:roomId" />
          </Router>
        </MainView>
      </AppWrapper>
    </ThemeProvider>
  );
};

export default BeDiceApp;
