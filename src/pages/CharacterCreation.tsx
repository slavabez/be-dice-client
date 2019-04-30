import React, { useState } from "react";
import styled from "styled-components";
import { RouteComponentProps } from "@reach/router";

import { avatars, colors } from "../utilities/character";

interface CCProps extends RouteComponentProps {}
interface AvatarProps {
  isSelected: boolean;
}
interface ColorItemProps {
  isSelected: boolean;
  color: string;
}

const Wrapper = styled.form`
  max-width: 90%;
  align-self: flex-start;
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
    margin: 1rem;
    font-size: 2rem;
    font-weight: 700;
  }

  @media (min-width: 600px) {
    align-items: center;
  }
`;

const Preview = styled.div`
  border: 5px solid ${p => p.color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;

  h2 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
    color: ${p => p.color};
    font-weight: 700;
  }
  @media (min-width: 600px) {
    min-width: 350px;
  }
`;
const PreviewAvatar = styled.img`
  border: 5px solid ${p => p.color};
  border-radius: 50%;
  margin: 0.5rem;
  width: 100px;
  height: 100px;
  @media (min-width: 600px) {
    width: 150px;
    height: 150px;
  }
`;
const Avatars = styled.div`
  display: flex;
  overflow-x: auto;
  margin: 0.5rem 0;
`;
const Avatar = styled.button`
  padding: 0;
  border: 5px solid
    ${(p: AvatarProps) => (p.isSelected ? "black" : "transparent")};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.3rem;
  background: none;

  img {
    height: 60px;
    width: 60px;
  }
`;

const Colors = styled.div`
  display: flex;
  overflow: auto;
  flex-wrap: nowrap;
  margin: 0.5rem 0;
`;
const Color = styled.button`
  min-width: 50px;
  height: 50px;
  margin: 0.3rem;
  background-color: ${(p: ColorItemProps) => p.color};
  border: 4px solid
    ${(p: ColorItemProps) => (p.isSelected ? "black" : "transparent")};
  border-radius: 50%;
`;

const NameInput = styled.input`
  justify-self: center;
  width: 80%;
  text-align: center;
  font-size: 1.5rem;
  padding: 0.5rem;
  border-style: none none solid;
  border-image: initial;
  border-bottom: 1px solid ${p => p.color || "grey"};
  align-self: center;
  margin: 0.5rem;
`;

const Submit = styled.button`
  align-self: center;
  width: 80%;
  background-color: ${p => p.color || "grey"};
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  color: white;
  border: none;
  border-radius: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const CharacterCreation: React.FC<CCProps> = () => {
  const [avatar, setAvatar] = useState({
    name: "Empty",
    src: "/images/none_100.png",
    large: "/images/none_100.png"
  });
  const [color, setColor] = useState(colors[0]);
  const [name, setName] = useState("Player");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <h1>Choose your profile</h1>
      <Preview color={color.hex}>
        <PreviewAvatar
          src={avatar.large}
          alt={`Selected avatar: ${avatar.name}`}
          color={color.hex}
        />
        <h2>{name}</h2>
      </Preview>
      <Avatars>
        {avatars.map(a => (
          <Avatar
            onClick={() => {
              setAvatar(a);
            }}
            key={a.name}
            isSelected={avatar.name === a.name}
          >
            <img src={a.src} alt={`Select ${a.name} avatar`} />
          </Avatar>
        ))}
      </Avatars>
      <Colors>
        {colors.map(c => (
          <Color
            onClick={() => {
              setColor(c);
            }}
            key={c.hex}
            color={c.hex}
            isSelected={c.hex === color.hex}
          />
        ))}
      </Colors>
      <NameInput
        type="text"
        maxLength={16}
        minLength={3}
        required
        color={color.hex}
        value={name}
        onChange={e => {
          setName(e.target.value);
        }}
      />
      <Submit type="submit" color={color.hex}>
        Continue
      </Submit>
    </Wrapper>
  );
};

export default CharacterCreation;
