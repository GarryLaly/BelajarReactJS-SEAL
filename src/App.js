import React, { useState } from "react";
import Button from "./components/Button";

const App = () => {
  const [taskList, setTaskList] = useState({
    data: [],
  });
  const [newTaskValue, setNewTaskValue] = useState("");

  const actionAddTask = () => {
    if (newTaskValue.trim() === "") {
      return false;
    }
    const newData = taskList.data;
    newData.push(newTaskValue);
    setTaskList({ data: newData });
    setNewTaskValue("");
  };

  return (
    <div>
      <br />
      <div>
        <input
          type="text"
          placeholder="Input Task Here..."
          value={newTaskValue}
          onChange={(e) => setNewTaskValue(e.target.value)}
        />
        <Button text="Add Task" onClick={actionAddTask} />
      </div>
      <div>
        <ul>
          {taskList.data.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
      <Button
        backgroundColor="#e74c3c"
        text="Clear"
        onClick={() => setTaskList({ data: [] })}
      />
      <Button
        text="Recommendation"
        onClick={() => setNewTaskValue("Task Rekomendasi")}
      />
    </div>
  );
};

export default App;
