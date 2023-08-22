/* eslint-disable react/prop-types */
const TaskCard = ({ task }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200">
      <h2 className="text-lg font-semibold mb-2">{task.title}</h2>
      <p className="text-gray-600 mb-4">{task.description}</p>
      <div className="flex items-center justify-between">
        <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
          {task.status}
        </span>
        <span className="text-gray-400 text-xs">{task.date}</span>
      </div>
    </div>
  );
};

export default TaskCard;
