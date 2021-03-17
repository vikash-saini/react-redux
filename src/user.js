import React from "react";
import Guest from "./guest";

class User extends React.Component {
  render() {
    return (
      <div>
        <h2>User Componenet</h2>
        <div>
        <Guest/>
        </div>
      </div>
    );
  }
}

export default User;
