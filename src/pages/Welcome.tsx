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
    margin: 2rem 1rem;
    text-decoration: none;
  }

  @media (min-width: 600px) {
    max-width: 500px;

    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1.5rem;
    }

    a {
      font-size: 2rem;
    }
  }

  @media (min-width: 1000px) {
    max-width: 750px;

    h1 {
      font-size: 3.5rem;
    }

    p {
      font-size: 2rem;
    }

    a {
      font-size: 2.5rem;
    }
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
      <p>
        No registration needed, simply create a profile, join a room and start
        rolling dice
      </p>
      <Link aria-label="Create profile" to="/character">
        Let's roll
      </Link>
    </Wrapper>
  );
};

export default Welcome;
