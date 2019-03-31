import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Door from "../shared/DoorSvg";
import Cog from "../shared/Cog";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    margin: 0.2rem;
    padding: 0.2rem;
    cursor: pointer;
    background-color: transparent;
    color: white;
    border: 2px solid white;
    border-radius: 0.5rem;
    font-size: 1rem;
  }
`;

/* const SmallAvatar = styled.img`
  border-radius: 50%;
  border: 4px solid ${props => props.color};
`; */

const ProfileControls = () => {
  return (
    <Wrapper>
      <Door />
      {/* <SmallAvatar src={avatar} color={color} /> */}
      <Link to="/settings">
        <Cog />
      </Link>
    </Wrapper>
  );
};

export default ProfileControls;
