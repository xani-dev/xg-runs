const Input = (props) => {
  return (
    <>
      <button type="button">Add record</button>
      <div className="login-box">
        <h2>My Run Today :</h2>

        <form>
          <div className="user-box">
            <select id="run-type" name="run-type">
              <option value="recovery">Recovery Run</option>
              <option value="speed">Speed Run</option>
              <option value="long">Long Run</option>
            </select>
          </div>
          <div className="user-box">
            <input
              type="text"
              name="pace"
              id="pace"
              placeholder="min/mile"
            ></input>
            <label>Pace</label>
          </div>
          <div className="user-box">
            <input type="text" name="bpm" id="bpm" placeholder="BPM"></input>
            <label>Avg. BPM:</label>
          </div>
          <div className="user-box">
            <input type="datetime-local" name="date" id="date" />
            <label>Date:</label>
          </div>
          <a >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Go! 🏃‍♀️
          </a>
          <a >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Cancel
          </a>
        </form>
      </div>
    </>
  );
};

export default Input;
