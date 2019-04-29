import React from "react";
import styled from "styled-components";
import { RouteComponentProps, Link } from "@reach/router";

interface WelcomeProps extends RouteComponentProps {}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: flex-start;

  h1 {
    color: ${p => p.theme.main};
    margin: 2rem 0;
    font-size: 2.5rem;
    font-weight: 700;
  }

  p {
    font-size: 1.25rem;
    margin: 0 1rem;
    text-align: center;
  }

  a {
    font-size: 1.5rem;
    background-color: ${p => p.theme.secondary};
    color: white;
    cursor: pointer;
    border-style: none;
    padding: 0.5rem 2rem;
    border-radius: 1.5rem;
    margin: 1rem;
    text-decoration: none;
  }
`;

const Welcome: React.FC<WelcomeProps> = () => {
  return (
    <Wrapper>
      <h1>Welcome</h1>
      <p>
        Be-Dice is an online dice rolling platform. Create dice-rooms for your
        friends and roll dice together in real time.
      </p>
      <Link to="/character">Let's roll</Link>
    </Wrapper>
  );
};

export default Welcome;
