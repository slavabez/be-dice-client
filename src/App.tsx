import * as React from "react";
import useInterval from "./hooks/useInterval";

interface AppState {
  name: string;
  count: number;
}

const initialState: AppState = {
  name: "Jon",
  count: 0
};

const BeDiceApp: React.FC = () => {
  const [state, setState] = React.useState(initialState);

  useInterval(() => {
    setState({ name: "Jon", count: state.count + 1 });
  }, 1000);

  return (
    <div>
      {state.name}, count: {state.count}
    </div>
  );
};

export default BeDiceApp;
