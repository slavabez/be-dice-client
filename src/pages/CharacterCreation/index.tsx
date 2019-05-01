import React, { useState } from "react";
import { RouteComponentProps, navigate } from "@reach/router";

import {
  Avatar,
  Avatars,
  Color,
  Colors,
  NameInput,
  Preview,
  PreviewAvatar,
  Submit,
  Wrapper
} from "./styled";

import { avatars, colors } from "../../utilities/character";

interface CCProps extends RouteComponentProps {}

const CharacterCreation: React.FC<CCProps> = () => {
  const [avatar, setAvatar] = useState({
    name: "Empty",
    src: "/images/none_100.png",
    thumb: "/images/none_100.png"
  });
  const [color, setColor] = useState(colors[0]);
  const [name, setName] = useState("Player");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const character = {
      avatar: avatar.src,
      name,
      color: color.hex
    };
    console.log("Char created", character);
    // Do things
    navigate("/rooms");
  };

  return (
    <Wrapper onSubmit={handleSubmit}>
      <h1>Choose your profile</h1>
      <Preview color={color.hex}>
        <PreviewAvatar
          src={avatar.src}
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
            aria-pressed={avatar.name === a.name}
            aria-label={`Select ${a.name} avatar`}
            type="button"
          >
            <img src={a.thumb} alt={`${a.name} avatar`} />
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
            role="button"
            aria-pressed={avatar.name === c.name}
            aria-label={`Select ${c.name} color`}
            type="button"
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
