import { useState, createContext, useContext } from "react";
import {
  fetchTasks,
  deleteTaskRequest,
  createTask,
  fetchTaskById,
  updateTask,
} from "../api/task.api";

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
    const tasks = await fetchTasks();
    setTasks(tasks);
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

  const fetchSingleTask = async (taskId) => {
    try {
      const task = await fetchTaskById(taskId);
      return task;
    } catch (error) {
      console.error("Error fetching single task:", error);
      throw error;
    }
  };

  const updateSingleTask = async (taskId, updatedTaskData) => {
    try {
      const response = await updateTask(taskId, updatedTaskData);
      // Manejar la respuesta de la actualización aquí si es necesario
      console.log("Respuesta de la API para actualizar la tarea:", response);
    } catch (error) {
      console.error("Error al actualizar la tarea:", error);
      throw error;
    }
  };

  const deleteTask = async (taskId) => {
    const response = await deleteTaskRequest(taskId);
    console.log(response);
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        fetchTask,
        deleteTask,
        formData,
        changeTask,
        submitTask,

        fetchSingleTask,
        updateSingleTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
