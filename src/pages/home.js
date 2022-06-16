import React, { useState } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { globalStyles } from "../theme/globalStyles";

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

const Home = () => {
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
      <div style={globalStyles.row}>
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
      <h2>Float</h2>
      <div>
        <div
          style={{
            backgroundColor: "#ccc",
            width: 50,
            height: 50,
            margin: 5,
            float: "left",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "#ccc",
            width: 50,
            height: 50,
            margin: 5,
            float: "left",
          }}
        ></div>
        <div
          style={{
            backgroundColor: "#ccc",
            width: 50,
            height: 50,
            margin: 5,
            float: "right",
          }}
        ></div>
      </div>
      <div
        style={{
          backgroundColor: "#000",
          width: 50,
          height: 50,
          margin: 5,
          clear: "both",
        }}
      ></div>
      <br />
      <br />
      <h2>Flex</h2>
      <div
        style={{
          backgroundColor: "#666",
          flexDirection: "row",
          display: "flex",
          maxWidth: 200,
          margin: "auto",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#ccc",
            width: 50,
            height: 50,
            margin: 5,
          }}
        ></div>
        <div
          style={{
            backgroundColor: "#ccc",
            width: 50,
            height: 50,
            margin: 5,
          }}
        ></div>
        <div
          style={{
            backgroundColor: "#ccc",
            width: 50,
            height: 50,
            margin: 5,
          }}
        ></div>
        <div
          style={{
            backgroundColor: "#ccc",
            width: 50,
            height: 50,
            margin: 5,
          }}
        ></div>
        <div
          style={{
            backgroundColor: "#ccc",
            width: 50,
            height: 50,
            margin: 5,
          }}
        ></div>
        <div
          style={{
            backgroundColor: "#ccc",
            width: 50,
            height: 50,
            margin: 5,
          }}
        ></div>
      </div>
      <div
        style={{
          backgroundColor: "#000",
          width: 50,
          height: 50,
          margin: 5,
        }}
      ></div>

      <Wrapper>
        <Title>Hello World, this is my first styled component!</Title>
      </Wrapper>
    </div>
  );
};

export default Home;
