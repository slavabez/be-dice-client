import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  grid-area: dice-buttons;
  overflow-x: auto;
  display: flex;
`;

const DieButton = styled.button`
  font-size: 2rem;
  padding: 1rem;
`;

const DiceButtons = () => {
  return (
    <Wrapper>
      <DieButton>d4</DieButton>
      <DieButton>d6</DieButton>
      <DieButton>d8</DieButton>
      <DieButton>d10</DieButton>
      <DieButton>d12</DieButton>
      <DieButton>d20</DieButton>
      <DieButton>d%</DieButton>
    </Wrapper>
  );
};

export default DiceButtons;
