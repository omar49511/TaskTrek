import { useState } from "react";

function DataTable() {
  const [pageSize, setPageSize] = useState(10); // Estado para la cantidad de elementos a mostrar
  const [currentPage, setCurrentPage] = useState(1);

  // Datos de prueba
  const data = [
    {
      id: 1,
      priority: "High",
      title: "Título 1",
      date: "16 de septiembre del 2023",
    },
    {
      id: 2,
      priority: "Medium",
      title: "Título 2",
      date: "17 de septiembre del 2023",
    },
    {
      id: 3,
      priority: "Low",
      title: "Título 3",
      date: "18 de septiembre del 2023",
    },

    // Agrega más datos de prueba aquí
  ];

  // Función para cambiar la página actual
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Calcular el índice de inicio y final para mostrar solo los elementos de la página actual
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between mb-4">
        <div className="flex items-center space-x-2">
          <input type="checkbox" className="form-checkbox" />
          <button className="px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            <i className="material-symbols-outlined">add_circle</i>
          </button>
          <button className="px-3 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            <i className="material-symbols-outlined">update</i>
          </button>
          <button className="px-3 py-2 bg-red-500 text-white rounded hover:bg-red-600">
            <i className="material-symbols-outlined">delete</i>
          </button>
        </div>
        <div className="relative">
          <input
            type="text"
            className="border rounded-lg pl-8 pr-4 py-2 w-64 focus:ring focus:ring-blue-400 focus:border-blue-400"
            placeholder="Search..."
          />
          <i className="material-symbols-outlined absolute top-3 left-3 text-gray-400">
            search
          </i>
        </div>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="py-2"></th>
            <th className="py-2">Prioridad</th>
            <th className="py-2">Título</th>
            <th className="py-2">Fecha</th>
          </tr>
        </thead>
        <tbody>
          {data.slice(startIndex, endIndex).map((item, index) => (
            <tr
              key={item.id}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
            >
              <td>
                <input type="checkbox" className="form-checkbox" />
              </td>
              <td>
                <span className="w-4 h-4 rounded-full bg-green-500 inline-block"></span>
              </td>
              <td>{item.title}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="footer-tools mt-4">
        <div className="list-items">
          Show{" "}
          <select
            name="pageSize"
            id="pageSize"
            value={pageSize}
            onChange={(e) => setPageSize(parseInt(e.target.value))}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>{" "}
          entries
        </div>
        <div className="pages">
          <ul className="flex space-x-2">
            {Array.from(
              { length: Math.ceil(data.length / pageSize) },
              (_, i) => (
                <li key={i}>
                  <button
                    className={`px-3 py-2 rounded ${
                      currentPage === i + 1
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                    onClick={() => handlePageChange(i + 1)}
                  >
                    {i + 1}
                  </button>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DataTable;
