const API_BASE_URL = "http://localhost:3000/api/tasks";

export const fetchTasks = async () => {
  try {
    const response = await fetch(API_BASE_URL, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error("Error fetching data");
    }

    const data = await response.json();
    return data.rows;
  } catch (error) {
    console.error(error);
    throw error; //
  }
};

export const deleteTaskRequest = async (taskId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${taskId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    // Si la eliminación fue exitosa, puedes devolver algún mensaje o indicador.
    return "Tarea eliminada con éxito";
  } catch (error) {
    console.error("Error deleting task:", error);
    throw error;
  }
};

export const updateTask = async (taskId, updatedTaskData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${taskId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTaskData),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    // Si la actualización fue exitosa, puedes devolver algún mensaje o indicador.
    return "Tarea actualizada con éxito";
  } catch (error) {
    console.error("Error updating task:", error);
    throw error;
  }
};

export const createTask = async (newTaskData) => {
  try {
    const response = await fetch(API_BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTaskData),
    });
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    // Si la creación fue exitosa, puedes devolver algún mensaje o indicador.
    return "Nueva tarea creada con éxito";
  } catch (error) {
    console.error("Error creating task:", error);
    throw error;
  }
};
