import React from "react";
import { Component } from "./react/react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  setCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        {this.state.count}
        <button onClick={this.setCount}>+++++</button>
      </div>
    );
  }
}

export default App;
