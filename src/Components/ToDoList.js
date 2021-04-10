import ListItems from "./ListItems";
import uniqid from "uniqid";

function ToDoList({ taskList, deleteTask }) {
  return (
    <ol className="ToDoList">
      {taskList.map((task, i) => (
        <ListItems
          key={uniqid()}
          task={task}
          index={i}
          deleteTask={deleteTask}
        />
      ))}
    </ol>
  );
}

export default ToDoList;
