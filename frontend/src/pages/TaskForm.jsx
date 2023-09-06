import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";
import { useParams } from "react-router-dom";

function TaskForm() {
  const { formData, changeTask, submitTask, fetchSingleTask } = useTasks();
  const params = useParams();
  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await fetchSingleTask(params.id);
        const taskData = task.rows[0]; // Obtiene el primer objeto dentro de "rows"
        console.log(taskData);
        const formatDeadline = (dateString = taskData.deadline) => {
          const date = new Date(dateString);
          const year = date.getFullYear();
          const month = (date.getMonth() + 1).toString().padStart(2, "0");
          const day = date.getDate().toString().padStart(2, "0");

          return `${year}-${month}-${day}`;
        };

        changeTask({ target: { name: "title", value: taskData.title } });
        changeTask({
          target: { name: "description", value: taskData.description },
        });
        changeTask({ target: { name: "deadline", value: formatDeadline() } });
        changeTask({ target: { name: "priority", value: taskData.priority } });
        changeTask({
          target: { name: "completed", value: taskData.completed },
        });
      }
    };
    loadTask();
  }, []);

  return (
    <div className="w-full max-w-screen-lg mx-auto p-4">
      <form onSubmit={submitTask}>
        <div className="space-y-12">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="title"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Title
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={changeTask}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label
                htmlFor="deadline"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Deadline
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  id="deadline"
                  name="deadline"
                  value={formData.deadline}
                  onChange={changeTask}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="description"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Description
              </label>
              <div className="mt-2">
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={changeTask}
                  rows="3"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="priority"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Priority
              </label>
              <div className="mt-2">
                <select
                  id="priority"
                  name="priority"
                  value={formData.priority}
                  onChange={changeTask}
                  className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                >
                  <option value="1">Baja</option>
                  <option value="2">Media</option>
                  <option value="3">Alta</option>
                </select>
              </div>
            </div>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2">
            Guardar Tarea
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
