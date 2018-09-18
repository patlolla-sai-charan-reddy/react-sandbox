import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

console.log("React", React);

/* functional Component - no data manipulation

class based component - data and state management


*/

function App() {
  return <li>hello</li>;
}

class Hey extends React.Component {
  constructor() {
    super();
    this.state = {
      data: ""
    };
  }
  componentDidMount() {
    this.setState({
      data: "sai"
    });
  }
  render() {
    return (
      <div>
        <li>{this.state.data}</li>
        <li>{this.props.data}</li>
      </div>
    );
  }
}

class Apps extends React.Component {
  constructor() {
    super();
  }
  render() {
    return <Hey data={"hello"} />;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Apps />, rootElement);
