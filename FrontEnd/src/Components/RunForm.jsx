import { useState } from "react";
import "../Styles/RunForm.css";

import { getCity, getCurrentWeather } from "../api/Weather";

const RunForm = (props) => {
  const [runDate, setRunDate] = useState("");
  const [runType, setRunType] = useState("");
  const [runPace, setRunPace] = useState("");
  const [runBPM, setRunBPM] = useState("");
  const [runLocation, setRunLocation] = useState("");

  const [runWeather, setRunWeather] = useState("");
  const [runCity, setRunCity] = useState("");

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

  const runLocationHandler = (event) => {
    setRunLocation(event.target.value);
  };

  const cityValidation = async (event) => {
    const cityData = await getCity(event.target.value);
    console.log("hello from" , cityData.LocalizedName, cityData.Key);
    setRunCity(cityData.LocalizedName)

    const runWeatherHandler = await getCurrentWeather(cityData.Key);
    console.log(runWeatherHandler);
    setRunWeather(runWeatherHandler.WeatherIcon)
  };

  

  const submitHandler = (event) => {
    event.preventDefault();
    // if(!runLocation)return
    const runData = {
      date: new Date(runDate),
      type: runType,
      pace: runPace,
      bpm: runBPM,
      location: runLocation,
      city: runCity,
      weather: runWeather,
    };
    props.onSaveRunData(runData);

    setRunDate("");
    setRunType("");
    setRunPace("");
    setRunBPM("");
    setRunLocation("");
    setRunCity("");
  };

  return (
    <>
      <div className="login-box">
        <h2>My Run Today :</h2>

        <form onSubmit={submitHandler}>
          <div className="user-box">
            <input
              type="text"
              value={runLocation}
              name="location"
              id="location"
              placeholder="Where did you run today?"
              onChange={runLocationHandler}
              onBlur={cityValidation}
            />
            <label>Location</label>
          </div>
          <div className="user-box">
            <input
              type="date"
              value={runDate}
              name="date"
              id="date"
              onChange={runDateHandler}
            />
            <label>Date:</label>
          </div>
          <div className="user-box">
            <select
              value={runType}
              id="run-type"
              name="run-type"
              onChange={runTypeHandler}
            >
              <option value="" disabled selected hidden>
                Select Run Type
              </option>
              <option value="Recovery">Recovery Run</option>
              <option value="Speed">Speed Run</option>
              <option value="Long Run">Long Run</option>
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
