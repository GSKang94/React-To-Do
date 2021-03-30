import uniqid from "uniqid";
import { VscDiffRemoved } from "react-icons/vsc";

function Overview({ taskList, deleteTask }) {
  return (
    <ol>
      {taskList.map((task, i) => (
        <li key={uniqid()}>
          {task}
          <VscDiffRemoved id={i} onClick={deleteTask} />
        </li>
      ))}
    </ol>
  );
}

export default Overview;
