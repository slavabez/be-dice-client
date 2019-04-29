import React from "react";
import { RouteComponentProps } from "@reach/router";

interface WelcomeProps extends RouteComponentProps {}

const Welcome: React.FC<WelcomeProps> = () => {
  return (
    <div>
      <h1>Welcome</h1>
    </div>
  );
};

export default Welcome;
