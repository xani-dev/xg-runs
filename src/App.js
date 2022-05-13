import "../src/Styles/App.css";
import NewRun from "../src/Components/NewRun";

import RunTable from "./Components/RunTable";

function App() {
  return (
    <div className="App">
      <RunTable />
      <NewRun />
    </div>
  );
}

export default App;
