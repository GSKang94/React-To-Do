import React, { Component } from "react";

class Overview extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { newTask } = this.props;
    return (
      <ul>
        {newTask.map((task) => (
          <li>{task}</li>
        ))}
      </ul>
    );
  }
}

export default Overview;
