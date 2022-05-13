import { useState } from "react";
import "../Styles/RunForm.css";

const RunForm = (props) => {
  const [runDate, setRunDate] = useState("");
  const [runType, setRunType] = useState("");
  const [runPace, setRunPace] = useState("");
  const [runBPM, setRunBPM] = useState("");

  const runDateHandler = (event) => {
    setRunDate(event.target.value);
  };

  const runTypeHandler = (event) => {
    setRunType(event.target.value);
  };

  const runPaceHandler = (event) => {
    setRunPace(event.target.value);
  };

  const runBPMHandler = (event) => {
    setRunBPM(event.target.value);
  };

  const submitHandler = (event) => {
   
    event.preventDefault();
   
    const runData = {
      date: new Date(runDate),
      type: runType,
      pace: runPace,
      bpm: runBPM,
    };
    console.log(runData);
    setRunDate('');
    setRunType('');
    setRunPace('');
    setRunBPM('');
  };
  return (
    <>
      <div className="login-box">
        <h2>My Run Today :</h2>

        <form onSubmit={submitHandler}>
          <div className="user-box">
            <input
              type="datetime-local"
              value={runDate}
              name="date"
              id="date"
              onChange={runDateHandler}
            />
            <label>Date:</label>
          </div>
          <div className="user-box">
            <select value={runType} id="run-type" name="run-type" onChange={runTypeHandler}>
            <option value="" disabled selected hidden>Select Run Type</option>
              <option value="recovery">Recovery Run</option>
              <option value="speed">Speed Run</option>
              <option value="long">Long Run</option>
            </select>
            <label>Run Type</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              value={runPace}
              name="pace"
              id="pace"
              placeholder="min/mile"
              onChange={runPaceHandler}
            />
            <label>Pace</label>
          </div>
          <div className="user-box">
            <input
              type="text"
              value={runBPM}
              name="bpm"
              id="bpm"
              placeholder="BPM"
              onChange={runBPMHandler}
            ></input>
            <label>Avg. BPM:</label>
          </div>

          <div className="actions-container">
            <button type="submit">Go! 🏃‍♀️</button>
            <button onClick={props.onCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default RunForm;
