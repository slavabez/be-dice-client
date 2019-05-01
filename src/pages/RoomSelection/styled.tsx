import styled from "styled-components";

export const Wrapper = styled.div`
  width: 90%;
  align-self: flex-start;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin: 1rem 0;
    text-decoration: underline;
    color: ${p => p.theme.main};
  }

  @media (min-width: 800px) {
    flex-direction: row;
    align-items: baseline;
  }
`;

export const CreateButton = styled.button`
  background-color: ${p => p.theme.main || "grey"};
  padding: 0.5rem 1rem;
  font-size: 1.25rem;
  color: ${p => p.theme.mainContrast};
  border: none;
  border-radius: 0.5rem;
  margin-bottom: 3rem;
  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

export const CreateRoomForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CreateRoomInput = styled.input`
  width: 80%;
  text-align: center;
  font-size: 1.5rem;
  padding: 0.5rem 0.5rem 0;
  border-style: none none solid;
  border-image: initial;
  border-bottom: 2px solid ${p => p.theme.main || "grey"};
  align-self: center;
  margin: 0.5rem;

  &::placeholder {
    color: #b2bac1;
    font-style: italic;
  }
`;

export const JoinRoomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  width: 100%;
`;

export const RoomList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100%;
  max-width: 600px;
`;

export const RoomListItem = styled.button`
  margin: 0.25rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  background: none;
  font-size: 1.2rem;
`;

export const Name = styled.span`
  color: ${p => p.theme.main};
  font-weight: 700;
  font-size: 1.4rem;
`;
export const NumOfUsers = styled.span`
  color: ${p => p.theme.mainFaded};
  font-size: 1rem;
`;
export const DateSpan = styled.span`
  color: ${p => p.theme.mainFaded};
`;
