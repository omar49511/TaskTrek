import TaskList from "../components/TaskCard/TaskList";

const tasks = [
  {
    title: "Hacer compras",
    description: "Comprar víveres y productos de limpieza.",
    status: "Pendiente",
    date: "2023-08-21",
  },
  {
    title: "Escribir informe",
    description: "Preparar informe mensual para el equipo.",
    status: "En Progreso",
    date: "2023-08-22",
  },
  // Agrega más tareas aquí
];

function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Lista de Tareas</h1>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default Home;
