function Overview({ taskList }) {
  return (
    <ol>
      {taskList.map((task, i) => (
        <li key={i}>{task}</li>
      ))}
    </ol>
  );
}

export default Overview;
