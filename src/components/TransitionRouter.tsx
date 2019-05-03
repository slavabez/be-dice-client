import React from "react";
import styled from "styled-components";
import { Router, Location } from "@reach/router";
import posed, { PoseGroup } from "react-pose";

const RoutesContainer = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

const StyledRouter = styled(Router)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TransitionRouter: React.FC = props => {
  return (
    <Location>
      {({ location }) => (
        <PoseGroup>
          <RoutesContainer key={location.key}>
            <StyledRouter location={location}>{props.children}</StyledRouter>
          </RoutesContainer>
        </PoseGroup>
      )}
    </Location>
  );
};

export default TransitionRouter;
