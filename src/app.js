import React, { Component } from "react";
import ReactDOM from "react-dom";

class Reuse extends Component {
  render() {
    return (
      <h1>
        {this.props.static} {this.props.data}
      </h1>
    );
  }
}

export default Reuse;
