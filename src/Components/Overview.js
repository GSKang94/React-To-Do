import uniqid from "uniqid";
import { VscDiffRemoved } from "react-icons/vsc";

function Overview({ taskList, deleteTask }) {
  return (
    <ol className="overview">
      {taskList.map((task, i) => (
        <li key={uniqid()}>
          {task}
          <VscDiffRemoved id={i} onClick={deleteTask} className="remove-btn" />
        </li>
      ))}
    </ol>
  );
}

export default Overview;
