import styled from "styled-components";

export const AppWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 4fr;
  grid-template-rows: 1fr 6fr;
  grid-template-areas:
    "logo top-controls"
    "main-view main-view";

  font-family: "Dosis", sans-serif;

  div,
  main {
    // border: 1px solid black;
  }

  @media (orientation: landscape) {
    grid-template-columns: 1fr 5fr;
    grid-template-rows: 1fr 3fr;
    grid-template-areas:
      "logo top-controls"
      "main-view main-view";
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 6fr;
    grid-template-rows: 1fr 6fr;
    grid-template-areas:
      "logo top-controls top-controls"
      "main-view main-view main-view";
  }
`;
