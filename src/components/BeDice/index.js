import React, { useReducer } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { GlobalContext, initialState, reducer } from "../../stores/global";
import Header from "../Header";
import Landing from "../Landing";
import Registration from "../Registration";
import RoomSelection from "../RoomSelection";
import RoomView from "../RoomView";
import { AppWrapper, MainView } from "./styled";
import ErrorBoundary from "../ErrorBoundary";

const BeDice = () => {
  const [store, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ store, dispatch }}>
      <AppWrapper>
        <ErrorBoundary>
          <Header />
          <Router>
            <MainView>
              <ul>
                <li>
                  <Link to="/">Landing</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/rooms">Rooms</Link>
                </li>
                <li>
                  <Link to={`/rooms/sample`}>Sample</Link>
                </li>
              </ul>
              <Route path="/" exact component={Landing} />
              <Route path="/profile" component={Registration} />
              <Route path="/rooms" exact component={RoomSelection} />
              <Route path="/rooms/:roomName" component={RoomView} />
            </MainView>
          </Router>
        </ErrorBoundary>
      </AppWrapper>
    </GlobalContext.Provider>
  );
};

export default BeDice;
