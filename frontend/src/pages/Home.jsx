import { useState, useEffect } from "react";
import TaskList from "../components/TaskCard/TaskList";

function Home() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/tasks", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Data from API:", data);
        setTasks(data.rows); // Establecer solo la propiedad 'rows' en el estado
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Lista de Tareas</h1>
      <TaskList tasks={tasks} /> {/* Pasar 'tasks' como prop */}
    </div>
  );
}

export default Home;
