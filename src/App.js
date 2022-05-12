import "../src/Styles/App.css";
import InputForm from "../src/Components/InputForm";
import RunRecord from "./Components/RunRecord";
import AddRunButton from "./Components/Button";

function App() {
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
    <div className="App">
      <AddRunButton />
      <RunRecord runsData={runs} />
      {/* <InputForm /> */}
    </div>
  );
}

export default App;
