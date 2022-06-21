import React, { useState } from "react";
import axios from "axios";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState("Empty");

  const actionLogin = async () => {
    try {
      setIsLoading(true);
      // untuk form-data dan x-www-form-urlencoded
      const formData = new FormData();
      formData.append("username", username);
      formData.append("password", password);

      const response = await axios.post(
        "http://localhost:8080/backend/login",
        formData
      );

      // ini untuk raw json
      // const response = await axios.post(
      //   "http://localhost:8080/backend/login",
      //   {
      //     username,
      //     password
      //   }
      // );

      setResult(response.data);
    } catch (e) {
      setResult(e.response.data);
      setIsLoading(false);
      console.error("error", e);
    }
  };

  return (
    <div>
      <div>
        <label>Username</label>
        <br />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label>Password</label>
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <button onClick={actionLogin}>Login</button>
      </div>

      <br />
      <br />
      <h5>Result:</h5>
      <div>{JSON.stringify(result)}</div>
    </div>
  );
};

export default Auth;
