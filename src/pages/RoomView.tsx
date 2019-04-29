import React from "react";
import { RouteComponentProps } from "@reach/router";

interface RVProps extends RouteComponentProps {}

const RoomView: React.FC<RVProps> = () => {
  return (
    <div>
      <h1>Room View</h1>
    </div>
  );
};

export default RoomView;
