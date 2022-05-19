

import "../Styles/RunRecord.css";



const RunRecord = (props) => {
  const dateOptions = { month: "long", day: "numeric", year: "numeric" };

  return (
    <>
      <tbody>
        {props.runsData.map((run, index) => (
          <tr className="run-item" key={index}>
            <td>{run.date.toLocaleDateString("en-us", dateOptions)}</td>
            <td>{run.type}</td>
            <td>{run.pace}</td>
            <td>{run.bpm}</td>
            <td>{run.weather}</td>
            <td id={index} onClick={props.onDeleteRun}>x</td>
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default RunRecord;
