import { useState } from "react";

import NewRun from "../Components/NewRun";
import RunRecord from "./RunRecord";

import "../Styles/RunTable.css";

const DUMMY_RUNS  = [
  {
    date: new Date(2022, 4, 1),
    type: "Recovery",
    pace: "10'20\"",
    bpm: 159,
    weather: "☁️",
    id: 0
  },
  {
    date: new Date(2022, 4, 2),
    type: "Long Run",
    pace: "10'01\"",
    bpm: 168,
    weather: "☀️",
    id: 1
  },
  {
    date: new Date(2022, 4, 4),
    type: "Speed",
    pace: "9'40\"",
    bpm: 163,
    weather: "🌧️",
    id: 2
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
    id: 3
  },
];
const RunTable = () => {
  const [runs, setRuns] = useState(DUMMY_RUNS);

  const addRunHandler = (run) => {
    setRuns((prevRuns)=> {
      return [run, ...prevRuns]
    });
  };

  const deleteRunHandler = (index) => {
    let runIndex = index.target.id;
    let runsCopy = [...runs]
    runsCopy.splice(runIndex, 1);
    setRuns(runsCopy);
    console.log('original array: ',runs)
    console.log('row selected:', runIndex);
    console.log('new array: ', runsCopy)
  }


  return (
    <>
    <NewRun onAddRun={addRunHandler}/>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Run Type</th>
              <th>Pace</th>
              <th>Avg. BPM</th>
              <th>Weather</th>
              <th>Delete</th>
            </tr>
          </thead>
          <RunRecord 
          runsData={runs} onDeleteRun={deleteRunHandler}/>
        </table>
      </div>
    </>
  );
};

export default RunTable;
