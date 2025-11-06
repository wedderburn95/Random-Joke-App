import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./app.css";

function App() {
  const [joke, setJoke] = useState(null);

  const getJoke = async () => {
    const res = await fetch("http://localhost:4000/api/joke");
    const data = await res.json();
    setJoke(data);
  };

  return (
    <div className="container">
      <h1>Random Jokes</h1>
      <button onClick={getJoke}>Get Joke</button>
      {joke && (
        <p>{joke.setup ? `${joke.setup} - ${joke.delivery}` : joke.joke}</p>
      )}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
