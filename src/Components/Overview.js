import uniqid from "uniqid";
import { VscDiffRemoved } from "react-icons/vsc";

function Overview({ taskList, deleteTask, taskDeleted }) {
  return (
    <ol className="overview">
      {taskList.map((task, i) => (
        <li className={taskDeleted ? "fadeOut" : null} key={uniqid()}>
          {task}
          <VscDiffRemoved id={i} onClick={deleteTask} className="remove-btn" />
        </li>
      ))}
    </ol>
  );
}

export default Overview;
// className="fadeOut"
