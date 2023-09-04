import { Link } from "react-router-dom";
import { useTasks } from "../../context/TaskContext";
/* eslint-disable react/prop-types */
const TaskCard = ({ task }) => {
  const { deleteTask } = useTasks();

  const getPriorityLabel = (priority) => {
    switch (priority) {
      case 1:
        return "Baja";
      case 2:
        return "Media";
      case 3:
        return "Alta";
      default:
        return "Desconocida";
    }
  };

  const formatDeadline = (dateString) => {
    const date = new Date(dateString);
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short",
    };
    return date.toLocaleString("es-MX", options);
  };

  const formattedDeadline = formatDeadline(task.deadline);

  return (
    <Link to={`/edit/${task.task_id}`}>
      <div
        className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200 hover:bg-gray-100 flex items-center justify-between"
        draggable="true"
      >
        <h2 className="text-lg font-semibold mb-2">{task.title}</h2>
        <p className="text-gray-600 mb-4">{task.description}</p>
        <div className="flex items-center justify-between">
          <span
            className={`text-white px-2 py-1 rounded text-xs ${
              task.priority === 1
                ? "bg-blue-500"
                : task.priority === 2
                ? "bg-purple-500"
                : task.priority === 3
                ? "bg-red-500"
                : ""
            }`}
          >
            {getPriorityLabel(task.priority)}
          </span>
          <button
            onClick={() => deleteTask(task.task_id)}
            className="
          bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded
          "
          >
            Eliminar
          </button>
          <span className="text-gray-400 text-xs">{formattedDeadline}</span>
        </div>
        <button
          type="button"
          className="ml-auto box-content rounded-none border-none p-1 text-warning-900 opacity-50 hover:text-warning-900 hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
          data-te-alert-dismiss
          aria-label="Close"
        >
          <span className="w-[1em] focus:opacity-100 disabled:pointer-events-none disabled:select-none disabled:opacity-25 [&.disabled]:pointer-events-none [&.disabled]:select-none [&.disabled]:opacity-25">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
      </div>
    </Link>
  );
};

export default TaskCard;
