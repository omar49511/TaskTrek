const Tracker = () => {
  const colors = ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"];

  // Genera valores de ejemplo para los tiles
  const generateValues = () => {
    const values = {};
    for (let i = 1; i <= 365; i++) {
      const date = new Date(2022, 7, i); // Comienza en agosto (mes 7)
      const dateString = date.toISOString().split("T")[0];
      values[dateString] = Math.floor(Math.random() * colors.length) + 1;
    }
    return values;
  };

  const values = generateValues();

  return (
    <div className="w-full overflow-x-auto bg-black text-white">
      <table className="w-full table-fixed">
        <thead>
          <tr>
            <th className="w-1/12"></th>
            <th className="w-1/12">Agosto</th>
            <th className="w-1/12">Septiembre</th>
            <th className="w-1/12">Agosto</th>
            <th className="w-1/12">Septiembre</th>
            <th className="w-1/12">Agosto</th>
            <th className="w-1/12">Septiembre</th>
            <th className="w-1/12">Agosto</th>
            <th className="w-1/12">Septiembre</th>
            <th className="w-1/12">Agosto</th>
            <th className="w-1/12">Septiembre</th>
            <th className="w-1/12">Agosto</th>
            <th className="w-1/12">Septiembre</th>
            {/* ... Agrega los meses restantes */}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 7 }, (_, index) => (
            <tr className="grid grid-cols-12" key={index}>
              <td className="w-1/12 text-center font-semibold">
                {index === 0 ? "L" : index === 6 ? "D" : ""}
              </td>
              <td
                className={`w-1/12 ${
                  colors[values[`2022-08-${index + 1}`] - 1]
                }`}
              >
                <div className="w-4 h-4 mx-auto rounded bg-blue-700 "></div>
              </td>
              <td
                className={`w-1/12 ${
                  colors[values[`2022-09-${index + 1}`] - 1]
                }`}
              >
                <div className="w-4 h-4 mx-auto rounded bg-blue-700 "></div>
              </td>

              <td
                className={`w-1/12 ${
                  colors[values[`2022-09-${index + 1}`] - 1]
                }`}
              >
                <div className="w-4 h-4 mx-auto rounded bg-blue-700 "></div>
              </td>
              {/* ... Agrega las celdas para los meses restantes */}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-2">
        <div className="flex space-x-2">
          {colors.map((color, index) => (
            <div
              key={index}
              className="w-4 h-4 rounded-md"
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
        <div className="text-sm text-gray-600">
          <span>Menos</span>
          <span className="mx-2">—</span>
          <span>Más</span>
        </div>
      </div>
    </div>
  );
};

export default Tracker;
