import CalendarHeatmap from "react-calendar-heatmap";
import "react-calendar-heatmap/dist/styles.css";

// eslint-disable-next-line react/prop-types
const ActivityTable = ({ activityData }) => {
  return (
    <div className="mx-auto w-full">
      <CalendarHeatmap
        showWeekdayLabels={true}
        startDate={new Date(new Date().getFullYear(), 0, 1)}
        endDate={new Date(new Date().getFullYear(), 11, 31)}
        values={activityData}
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          return `color-github-${value.count} tip`;
        }}
      />
    </div>
  );
};

export default ActivityTable;
