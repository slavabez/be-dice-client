import React from "react";
import { RouteComponentProps } from "@reach/router";

interface RVProps extends RouteComponentProps {
  roomId?: string;
}

const RoomView: React.FC<RVProps> = props => {
  return (
    <div>
      <h1>Room View ({props.roomId})</h1>
    </div>
  );
};

export default RoomView;
