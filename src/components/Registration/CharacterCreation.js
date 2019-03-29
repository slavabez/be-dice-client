import React, { useContext, useState } from "react";
import styled from "styled-components";
import { GlobalContext, SET_CURRENT_USER } from "../../stores/global";
import { avatars, profileColors } from "../shared";
import Avatar from "./Avatar";
import Color from "./Color";
import CharacterPreview from "./CharacterPreview";
import characterStore from "../../stores/character";

const Wrapper = styled.form`
  width: 100%;
  display: grid;

  grid-template-areas:
    "p"
    "a"
    "c"
    "n"
    "b";

  @media (min-width: 768px) {
    grid-template-areas:
      "p a"
      "p c"
      "p n"
      "b b";

    max-width: 900px;
  }
`;

const Avatars = styled.div`
  grid-area: a;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const Colors = styled.div`
  grid-area: c;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 1rem;
`;

const NameInput = styled.input`
  grid-area: n;
  margin-top: 1rem;
  justify-self: center;
  width: 80%;
  padding: 0.5rem;
  border: none;
  border-bottom: 1px solid ${props => props.color || "grey"};
  text-align: center;
  font-size: 1.5rem;

  :focus {
    outline: none;
    border-bottom: 4px solid ${props => props.color || "grey"};
  }

  @media (min-width: 768px) {
    width: 100%;
  }
`;

const Submit = styled.button`
  grid-area: b;
  justify-self: center;
  width: 80%;
  background-color: ${props => props.color || "grey"};
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  color: white;
  border: none;
  border-radius: 0.5rem;
  margin-top: 1rem;

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

const CharacterCreation = () => {
  const initialState = {
    selectedAvatar: "/images/none_100.png",
    selectedName: "Player",
    selectedColor: profileColors[0]
  };

  const [state, setState] = useState(initialState);

  const { dispatch } = useContext(GlobalContext);

  const { selectedAvatar, selectedName, selectedColor } = state;

  const setAvatar = avatar => {
    setState(os => ({ ...os, selectedAvatar: avatar }));
  };

  const setColor = color => {
    setState(os => ({ ...os, selectedColor: color }));
  };

  const setName = name => {
    setState(os => ({ ...os, selectedName: name }));
  };

  const submitCharacter = e => {
    e.preventDefault();
    // characterStore.register({
    //   avatar: selectedAvatar,
    //   name: selectedName,
    //   color: selectedColor
    // });

    dispatch({
      type: SET_CURRENT_USER,
      payload: {
        avatar: selectedAvatar,
        name: selectedName,
        color: selectedColor
      }
    });
  };

  const renderAvatars = () => {
    return avatars.map(a => (
      <Avatar
        src={a}
        key={a}
        handleSelect={setAvatar}
        selected={a === selectedAvatar}
      />
    ));
  };

  const renderColors = () => {
    return profileColors.map(c => (
      <Color
        color={c}
        key={c}
        handleSelect={setColor}
        selected={c === selectedColor}
      />
    ));
  };

  return (
    <Wrapper onSubmit={submitCharacter} data-testid="character-form">
      <CharacterPreview
        avatar={selectedAvatar}
        color={selectedColor}
        name={selectedName}
      />
      <Avatars data-testid="character-avatars">{renderAvatars()}</Avatars>
      <Colors data-testid="character-colors">{renderColors()}</Colors>
      <NameInput
        type="text"
        onChange={e => {
          setName(e.target.value);
        }}
        value={selectedName}
        maxLength="12"
        minLength="3"
        required
        color={selectedColor}
        data-testid="character-name-input"
      />
      <Submit
        type="submit"
        color={selectedColor}
        data-testid="character-submit-button"
      >
        Join a room
      </Submit>
    </Wrapper>
  );
};

export default CharacterCreation;
