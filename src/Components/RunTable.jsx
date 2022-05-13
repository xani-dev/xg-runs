import RunRecord from "./RunRecord";
import "../Styles/RunTable.css";

const RunTable = (props) => {
  const runs = [
    {
      date: new Date(2022, 4, 1),
      type: "Recovery",
      pace: "10'20\"",
      bpm: 159,
      weather: "☁️",
    },
    {
      date: new Date(2022, 4, 2),
      type: "Long Run",
      pace: "10'01\"",
      bpm: 168,
      weather: "☀️",
    },
    {
      date: new Date(2022, 4, 4),
      type: "Speed",
      pace: "9'40\"",
      bpm: 163,
      weather: "🌧️<",
    },
    {
      date: new Date(2022, 4, 7),
      type: "Recovery",
      pace: "11'04\"",
      bpm: 156,
      weather: "❄️",
    },
    {
      date: new Date(2022, 4, 11),
      type: "Recovery",
      pace: "9'33\"",
      bpm: 176,
      weather: "🌤️",
    },
  ];

  return (
    <>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Run Type</th>
              <th>Pace</th>
              <th>Avg. BPM</th>
              <th>Weather</th>
              {/* <th>Delete</th> */}
            </tr>
          </thead>
          <RunRecord runsData={runs} />
        </table>
      </div>
    </>
  );
};

export default RunTable;
