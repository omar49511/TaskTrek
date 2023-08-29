/* eslint-disable react/prop-types */
const TaskCard = ({ task }) => {
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
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 border border-gray-200">
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
        <span className="text-gray-400 text-xs">{formattedDeadline}</span>
      </div>
    </div>
  );
};

export default TaskCard;
