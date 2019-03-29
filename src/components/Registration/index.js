import React, { Component } from "react";
import { CentredFlex, LargeText, TextContent } from "../shared";
import CharacterCreation from "./CharacterCreation";

class RegistrationPage extends Component {
  render() {
    return (
      <CentredFlex data-testid="registration-section">
        <TextContent>
          <LargeText>Choose how you will be seen</LargeText>
        </TextContent>
        <CharacterCreation />
      </CentredFlex>
    );
  }
}

export default RegistrationPage;
