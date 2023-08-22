/* eslint-disable react/prop-types */
// TaskList.js

import TaskCard from "./TaskCard";

const TaskList = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskCard key={index} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
