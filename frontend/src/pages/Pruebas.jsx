import ActivityTable from "../components/ActivityTable/ActivityTable"; // Ajusta la ruta según la ubicación de tu componente

const Pruebas = () => {
  const activityData = [
    { date: "2023-08-01", count: 3 },
    { date: "2023-08-02", count: 1 },
    // ... more activity data
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold mb-4">Activity Tracking</h1>
      <ActivityTable activityData={activityData} />
    </div>
  );
};

export default Pruebas;
