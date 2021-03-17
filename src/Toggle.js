import React from "react";
import { connect } from "react-redux";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    };
  }
  handleClick = () => {
    this.setState({
      toggle: !this.state.toggle,
    });
  };
  render() {
    return (
      <div>
        <h2>Toggle</h2>
        {this.props.count}
        {/* <button onClick={this.handleClick}>
          {this.state.toggle ? "ON" : "OFF"}
        </button> */}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { count: state.count };
}

export default connect(mapStateToProps)(Toggle);
