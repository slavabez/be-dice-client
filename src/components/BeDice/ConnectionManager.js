import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../../stores/global";

const ConnectionManager = () => {
  const [state, setState] = useState({
    connection: null
  });

  const { store, dispatch } = useContext(GlobalContext);

  // Runs when api status changes (i.e. connect/disconnect)
  useEffect(() => {
    console.log("Use effect ran");
  }, [store.apiStatus]);

  return <div />;
};

export default ConnectionManager;
