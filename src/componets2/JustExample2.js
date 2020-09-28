import React, { Component } from "react";

export default class JustExample extends Component {
  constructor(props) {
    super(props);
    this.state = { time: 0 };
  }
  componentDidMount() {
    this.updateInterval = setInterval(() => {
      this.setState({ time: this.state.time + 1 });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.updateInterval);
  }

  render() {
    return (
      <div>
        <h1>{this.state.time}</h1>
      </div>
    );
  }
}
