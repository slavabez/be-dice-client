import React from "react";
import styled from "styled-components";

import buttons from "../helpers/dice";

const Wrapper = styled.div`
  grid-area: dice-buttons;
  overflow-x: auto;
  display: flex;
`;

const DieButton = styled.button`
  font-size: 2rem;
  padding: 1rem;
`;

const DiceButtons: React.FC = () => {
  const initRoll = (roll: string) => {
    console.log(`Rolled a ${roll}...`);
  };

  return (
    <Wrapper>
      {buttons.map(b => (
        <DieButton
          key={b.name}
          onClick={() => {
            initRoll(b.roll);
          }}
        >
          {b.name}
        </DieButton>
      ))}
    </Wrapper>
  );
};

export default DiceButtons;
