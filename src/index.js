import React, { Component } from "react";
import ReactDOM from "react-dom";
import Reuse from "../src/app";

import "./styles.css";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "aaaa"
    };
  }

  componentDidMount() {
    setTimeout(() => this.rendeTest("xxx"), 1000);

    setTimeout(() => {
      this.rendeTest("ssa");
    }, 4000);
  }

  rendeTest(props) {
    this.setState({
      data: props
    });
  }

  render() {
    return (
      <div>
        <Reuse data={this.state.data} static={"hello"} />
        <Reuse data={this.state.data} static={"hi"} />
      </div>
    );
  }
}

ReactDOM.render(<Test />, document.getElementById("root"));
