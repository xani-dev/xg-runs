import { useEffect, useState } from "react";

import NewRun from "../Components/NewRun";
import RunRecord from "./RunRecord";

import "../Styles/RunTable.css";

import { getRuns, newRun, deleteRun } from "../api/API";

const DUMMY_RUNS = [
  {
    date: new Date(2022, 4, 1),
    type: "Recovery",
    pace: "10'20\"",
    bpm: 159,
    weather: "☁️",
    id: 999,
  },
  {
    date: new Date(2022, 4, 2),
    type: "Long Run",
    pace: "10'01\"",
    bpm: 168,
    weather: "☀️",
    id: 1,
  },
  {
    date: new Date(2022, 4, 4),
    type: "Speed",
    pace: "9'40\"",
    bpm: 163,
    weather: "🌧️",
    id: 2,
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
    id: 3,
  },
];
const RunTable = () => {
  const [allRuns, setAllRuns] = useState(DUMMY_RUNS);

  const fetchRuns = async () => {
    const res = await getRuns();
    if (res === undefined) {
      setAllRuns(DUMMY_RUNS);
    } else {
      setAllRuns(res);
    }
    console.log(res);
  };

  useEffect(() => {
    fetchRuns();
  }, []);

  const addRunHandler = async (run) => {
    await newRun(run);
    setAllRuns((prevRuns) => {
      return [run, ...prevRuns];
    });
  };

  const deleteRunHandler = async (event) => {

    //  DB functions
    let runID = event.target.id;
    await deleteRun(runID);

    // UI functions
    const runIndex = allRuns.findIndex(run => {
       return run.id === runID;
    });
    let runsCopy = [...allRuns];
    runsCopy.splice(runIndex, 1);
    setAllRuns(runsCopy);
  };

  return (
    <>
      <NewRun onAddRun={addRunHandler} />
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Location</th>
              <th>Run Type</th>
              <th>Pace</th>
              <th>Avg. BPM</th>
              <th>Weather</th>
              <th>Delete</th>
            </tr>
          </thead>
          <RunRecord runsData={allRuns} onDeleteRun={deleteRunHandler} />
        </table>
      </div>
    </>
  );
};

export default RunTable;
