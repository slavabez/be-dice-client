import React from "react";
import { RouteComponentProps } from "@reach/router";

interface CCProps extends RouteComponentProps {}

const CharacterCreation: React.FC<CCProps> = () => {
  return (
    <div>
      <h1>Character Creation</h1>
    </div>
  );
};

export default CharacterCreation;
