import React from "react";
import styled from "styled-components";
import { Link } from "@reach/router";

const Wrapper = styled.div`
  grid-area: top-controls;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

// const ExitButton = styled.button`
//   font-size: 1rem;
//   background-color: rgb(255, 110, 80);
//   color: white;
//   cursor: pointer;
//   border-style: none;
//   padding: 0.5rem 1rem;
//   border-radius: 1.5rem;
// `;

const TopControls = () => {
  return (
    <Wrapper>
      <Link to="/">W</Link>
      <Link to="/character">CC</Link>
      <Link to="/rooms">RS</Link>
      <Link to="/room/lol">IR</Link>
    </Wrapper>
  );
};

export default TopControls;
