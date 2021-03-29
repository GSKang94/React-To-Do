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
    }));
  }

  render() {
    const { taskList } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
        <Overview newTask={taskList} />
      </>
    );
  }
}
export default App;
