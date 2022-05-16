import { useState } from "react";
import RunForm from "./RunForm";
import "../Styles/AddRunButton.css";

const NewRun = (props) => {
  const [inEditMode, setInEditMode] = useState(false);

  const saveRunDataHandler = (enteredRunData) => {
    const runData = {
      ...enteredRunData,
    };
    props.onAddRun(runData);
  };

  const startEditingHandler = () => {
    setInEditMode(true);
  };

  const stopEditingHandler = () => {
    setInEditMode(false);
  };

  return (
    <>
      <div>
        {!inEditMode && <button onClick={startEditingHandler}>Add Run</button>}
        {inEditMode && (
          <RunForm
            onSaveRunData={saveRunDataHandler}
            onCancel={stopEditingHandler}
          />
        )}
      </div>
    </>
  );
};

export default NewRun;
