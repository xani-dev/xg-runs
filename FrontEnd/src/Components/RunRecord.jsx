import "../Styles/RunRecord.css";

import WeatherInfo from "./WeatherInfo";

const RunRecord = (props) => {
  const dateOptions = { month: "long", day: "numeric", year: "numeric" };

  return (
    <>
      <tbody>
        {props.runsData.map((run, id) => (
          <tr className="run-item" key={id}>
            <td>
              {new Date(run.tempDate).toLocaleString("en-us", dateOptions)}
            </td>
            <td>{run.location}</td>
            <td>{run.type}</td>
            <td>{run.pace}</td>
            <td>{run.bpm}</td>
            <td>
              {" "}
              <WeatherInfo iconNumber={run.weather} />
            </td>
            <td id={run.id} onClick={props.onDeleteRun}>
              x
            </td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default RunRecord;
