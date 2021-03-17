import React from "react";
import logo from "./logo.svg";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Counter from "./Counter";
import Phonebook from "./Phonebook";
import Toggle from "./Toggle";
import BoardContainer from "./components/Board/BoardContainer";
import DragContainer from "./DragContainer";
import "./App.css";
import User from "./user";

export const MyContext = React.createContext();
function App() {
  const [state, setState] = React.useState({ name: "Rahul" });
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/toggle">Toggle</Link>
            </li>
            <li>
              <Link to="/counter">Counter</Link>
            </li>
            <li>
              <Link to="/phonebook">Phonebook</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/toggle" component={Toggle}></Route>
            <Route exact path="/counter" component={Counter}></Route>
            <Route exact path="/phonebook" component={Phonebook}></Route>
          </Switch>
        </div>
      </Router>
      <MyContext.Provider value={state.name}>
        <div className="container">
          <BoardContainer />
          <User />
        </div>
      </MyContext.Provider>
    </div>
  );
}

export default App;
