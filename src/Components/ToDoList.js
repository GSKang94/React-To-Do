import ListItems from "./ListItems";

function ToDoList({ taskList, deleteTask }) {
  return (
    <ol className="ToDoList">
      {taskList.map((task, i) => (
        <ListItems key={i} task={task} index={i} deleteTask={deleteTask} />
      ))}
    </ol>
  );
}

export default ToDoList;
