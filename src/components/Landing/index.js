import React, { useContext } from "react";
import { GlobalContext } from "../../stores/global";
import {
  CentredFlex,
  LargeTitle,
  LargeText,
  TextContent,
  LargeButtonLink
} from "../shared";
import Modal from "../Modal";

const LandingPage = () => {
  const { store, dispatch } = useContext(GlobalContext);

  return (
    <CentredFlex>
      <TextContent data-testid="landing-section">
        <LargeTitle data-testid="landing-header">
          I'm the Landing Page
        </LargeTitle>
        <Modal id="portal">
          <h1>HELLO</h1>
        </Modal>
        <LargeText>
          Bonus Eventus (BE-dice) is an online dice room. You can create room
          and a simple profile, invite your friends and roll various dice
          together..
        </LargeText>
        <LargeButtonLink to="/profile" data-testid="landing-button">
          Let's roll!
        </LargeButtonLink>
      </TextContent>
    </CentredFlex>
  );
};

export default LandingPage;
