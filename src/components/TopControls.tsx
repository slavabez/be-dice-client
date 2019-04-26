import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  grid-area: top-controls;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const ExitButton = styled.button`
  font-size: 1rem;
  background-color: rgb(255, 110, 80);
  color: white;
  cursor: pointer;
  border-style: none;
  padding: 0.5rem 1rem;
  border-radius: 1.5rem;
`;

const TopControls = () => {
  return (
    <Wrapper>
      <ExitButton>Exit room</ExitButton>
      <button>Character</button>
    </Wrapper>
  );
};

export default TopControls;
