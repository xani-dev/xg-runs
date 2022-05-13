// import useState from "react";

import "../Styles/RunRecord.css";
const RunRecord = (props) => {
  const dateOptions = { month: "long", day: "numeric", year: "numeric" };

  // const deleteHandler = () => {
  //   console.log('delete')
  // }
  // useState();

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
            {/* <td onClick={deleteHandler}>x</td> */}
          </tr>
        ))}
      </tbody>
    </>
  );
};

export default RunRecord;
