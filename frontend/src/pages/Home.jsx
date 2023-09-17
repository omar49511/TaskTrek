import { useEffect } from "react";
import TaskList from "../components/TaskCard/TaskList";
import { useTasks } from "../context/TaskContext";
import DataTable from "../components/DataTable/DataTable";

function Home() {
  const { tasks, fetchTask } = useTasks();

  useEffect(() => {
    fetchTask();
  }, [fetchTask]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Lista de Tareas</h1>
      <TaskList tasks={tasks} /> {/* Pasar 'tasks' como prop */}
      <DataTable></DataTable>
    </div>
  );
}

export default Home;
