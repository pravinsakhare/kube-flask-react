import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const callBackend = async () => {
    if (!name) return;
    const response = await fetch(
      `http://localhost:5000/api/hello?name=${name}`
    );
    const data = await response.json();
    setMessage(data.message);
  };

  return (
    <div className="app">
      <div className="card">
        <h2>👋 React + Flask App</h2>
        <p className="subtitle">Microservice running locally</p>

        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button onClick={callBackend}>Send to Backend</button>

        {message && <p className="response">{message}</p>}
      </div>
    </div>
  );
}

export default App;
