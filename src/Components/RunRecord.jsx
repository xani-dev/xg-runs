import "../Styles/RunRecord.css";
const RunRecord = (props) => {
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
            </tr>
          </thead>
          <tbody>
            {props.runsData.map((run, index) => (
              <tr className="run-item" key={index}>
                <td>{run.date.toLocaleDateString()}</td>
                <td>{run.type}</td>
                <td>{run.pace}</td>
                <td>{run.bpm}</td>
                <td>{run.weather}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RunRecord;
