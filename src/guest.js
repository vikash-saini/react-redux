import React from "react";
import { MyContext } from "./App";

class Guest extends React.Component {
  render() {
    return (
      <div>
        <h2>Guest</h2>
        <MyContext.Consumer>{(data) => <h4>{data}</h4>}</MyContext.Consumer>
      </div>
    );
  }
}

export default Guest;
