import * as React from "react";
import { ThemeProvider } from "styled-components";

import ContextProvider from "./stores";
import { bright } from "./styled/theme";
import { CharacterCreation, RoomSelection, RoomView, Welcome } from "./pages";
import { Logo, TopControls, MainView, TransitionRouter } from "./components";
import { AppWrapper } from "./styled/App";
let selectedTheme = bright;

const BeDiceApp: React.FC = () => {
  return (
    <ContextProvider>
      <ThemeProvider theme={selectedTheme}>
        <AppWrapper>
          <Logo />
          <TopControls />
          <MainView>
            <TransitionRouter>
              <Welcome path="/" />
              <CharacterCreation path="/character" />
              <RoomSelection path="/rooms" />
              <RoomView path="/room/:roomId" />
            </TransitionRouter>
          </MainView>
        </AppWrapper>
      </ThemeProvider>
    </ContextProvider>
  );
};

export default BeDiceApp;
