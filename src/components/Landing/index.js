import React, { Component } from "react";
import {
  CenteredFlex,
  LargeTitle,
  LargeText,
  TextContent,
  LargeButtonLink
} from "../shared";

class LandingPage extends Component {
  componentDidMount() {
    console.log(process.env.REACT_APP_BE_SERVER);
  }

  render() {
    return (
      <CenteredFlex>
        <TextContent data-testid="landing-section">
          <LargeTitle data-testid="landing-header">
            I'm the Landing Page
          </LargeTitle>
          <LargeText>
            Bonus Eventus (BE-dice) is an online dice room. You can create room
            and a simple profile, invite your friends and roll various dice
            together..
          </LargeText>
          <LargeButtonLink to="/profile" data-testid="landing-button">
            Let's roll!
          </LargeButtonLink>
        </TextContent>
      </CenteredFlex>
    );
  }
}

export default LandingPage;
