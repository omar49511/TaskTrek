/* eslint-disable react/prop-types */
// TaskList.js

import TaskCard from "./TaskCard";

const TaskList = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task) => (
        <TaskCard key={task.task_id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
