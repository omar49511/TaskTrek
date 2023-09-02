import { useState, createContext, useContext } from "react";
import { fetchTasks, deleteTaskRequest, createTask } from "../api/task.api";

export const TaskContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskContextProvider");
  }
  return context;
};

// eslint-disable-next-line react/prop-types
export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const fetchTask = async () => {
    try {
      const tasks = await fetchTasks();
      setTasks(tasks);
    } catch (error) {
      console.error("Error al obtener tareas:", error);
    }
  };
  const initialFormData = {
    title: "",
    description: "",
    deadline: "",
    priority: 1,
    completed: false,
  };
  const [formData, setData] = useState(initialFormData);

  const changeTask = (e) => {
    const { name, value, type, checked } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const submitTask = async (e) => {
    e.preventDefault();
    try {
      const response = await createTask(formData);
      // Manejar la respuesta de createTask aquí si es necesario
      console.log("Respuesta de la API:", response);
      // Restablecer el formulario después de crear la tarea
      setData(initialFormData);
    } catch (error) {
      console.error("Error al enviar los datos:", error);
    }
  };

  const deleteTask = async (taskId) => {
    try {
      const response = await deleteTaskRequest(taskId);
      console.log(response);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      // Si la eliminación fue exitosa, puedes devolver algún mensaje o indicador.
      return "Tarea eliminada con éxito";
    } catch (error) {
      return error;
    }
  };

  return (
    <TaskContext.Provider
      value={{ tasks, fetchTask, deleteTask, formData, changeTask, submitTask }}
    >
      {children}
    </TaskContext.Provider>
  );
};
