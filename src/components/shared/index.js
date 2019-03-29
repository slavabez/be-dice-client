import styled from "styled-components";
import { Link } from "react-router-dom";

export const beGreen = "#00D0AE";
export const beDarkGreen = "#05927b";

export const avatars = [
  "/images/rogue_100.png",
  "/images/sorcerer_100.png",
  "/images/paladin_100.png",
  "/images/warlock_100.png",
  "/images/monk_100.png",
  "/images/cleric_100.png",
  "/images/bard_100.png"
];

export const profileColors = [
  "#FF87C3",
  "#FF5364",
  "#FF6D4E",
  "#FFCE48",
  "#85D560",
  "#00CFAD",
  "#00C1EA",
  "#219CEE",
  "#B692EF",
  "#626262"
];

export const CentredFlex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 900px;
  text-align: center;
  padding: 0 1rem;
  color: ${beDarkGreen};
`;

export const LargeTitle = styled.h1`
  font-size: 2rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 3rem;
    margin: 1.5rem;
  }
`;

export const LargeText = styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 2rem;
    margin: 1.5rem 1.5rem 2rem;
  }
`;

export const SmallText = styled.p`
  font-size: 1.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;

  @media (min-width: 768px) {
    font-size: 1.3rem;
    margin: 0.5rem 0.5rem 1rem;
  }
`;

export const LargeButtonLink = styled(Link)`
  width: fit-content;
  align-self: center;
  background-color: ${beGreen};
  font-family: Dosis, sans-serif;
  font-size: 1.5rem;
  text-align: center;
  padding: 0.5rem 2rem;
  border-radius: 2rem;
  border-image: initial;
  text-decoration: none;
  color: white;
`;

export const Button = styled.button`
  width: fit-content;
  align-self: center;
  background-color: ${beGreen};
  font-family: Dosis, sans-serif;
  font-size: 1.5rem;
  text-align: center;
  padding: 0.5rem 2rem;
  border-radius: 2rem;
  border-image: initial;
  text-decoration: none;
  color: white;
  border: none;
  cursor: pointer;
`;
