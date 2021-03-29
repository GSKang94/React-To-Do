import React, { Component } from "react";
import Overview from "./Components/Overview";

class App extends Component {
  constructor() {
    super();
    this.state = {
      task: "",
      taskList: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      task: e.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState((preState) => ({
      taskList: [...preState.taskList, preState.task],
      task: "",
    }));
  }

  render() {
    const { taskList, task } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={task}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Add task</button>
        </form>
        <Overview taskList={taskList} />
      </>
    );
  }
}
export default App;
