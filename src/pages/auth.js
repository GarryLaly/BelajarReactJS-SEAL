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
      // const formData = new FormData();
      // formData.append("username", username);
      // formData.append("password", password);

      // const response = await axios.post(
      //   "https://8340fa0f-4afd-43b9-8593-2a23fcfa580c.mock.pstmn.io/login",
      //   formData
      // );

      // ini untuk raw json
      const response = await axios.post(
        "https://8340fa0f-4afd-43b9-8593-2a23fcfa580c.mock.pstmn.io/login",
        {
          email: username,
          password,
        }
      );

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
      <div>{result.message}</div>

      <br />
      <br />
      {/* <h5>Result:</h5>
      <div>{JSON.stringify(result)}</div> */}
    </div>
  );
};

export default Auth;
