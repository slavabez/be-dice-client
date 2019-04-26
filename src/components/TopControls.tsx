import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  grid-area: top-controls;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const TopControls = () => {
  return (
    <Wrapper>
      <button>Exit room</button>
      <button>Character</button>
    </Wrapper>
  );
};

export default TopControls;
