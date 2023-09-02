/* eslint-disable react/prop-types */
// TaskList.js

import TaskCard from "./TaskCard";

const TaskList = ({ tasks }) => {
  function renderMain() {
    if (tasks.length === 0) {
      return <p>No hay tareas</p>;
    }
    return tasks.map((task) => <TaskCard key={task.task_id} task={task} />);
  }

  return <div>{renderMain()}</div>;
};

export default TaskList;
