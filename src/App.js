import React, { Component } from "react";
import Overview from "./Components/Overview";
import "./App.scss";
import { MdAddBox } from "react-icons/md";

class App extends Component {
  constructor() {
    super();
    this.state = {
      task: "",
      taskList: [],
      taskNumber: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
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
  handleDelete(e) {
    let newList = [...this.state.taskList];
    newList.splice(e.target.id, 1);
    this.setState({
      taskList: newList,
    });
  }

  render() {
    const { taskList, task } = this.state;
    return (
      <div className="container">
        <h1>To-Do List</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={task}
            onChange={this.handleChange}
            required
          />
          <button type="submit">
            <MdAddBox className="add-icon" />
          </button>
        </form>
        <Overview taskList={taskList} deleteTask={this.handleDelete} />
      </div>
    );
  }
}
export default App;
