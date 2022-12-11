import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

function Home() {
  const [text, setText] = useState("");
  const [isReady, setIsReady] = useState(false);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      switch (event.target.value) {
        case "Ready!":
          setText(event.target.value);
          setIsReady(true);
        default:
          break;
      }
    }
  };

  const handleChange = (event) => {
    if (event.target.value === "") setIsReady(false);
    setText(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Link to="/pokedex">
          <img
            hidden={!isReady}
            src="https://www.freeiconspng.com/uploads/file-pokeball-png-0.png"
            className="App-logo"
            alt="logo"
            style={{ padding: "10px" }}
          />
        </Link>
        <p className="text-white">Are you ready to be a pokemon master?</p>
        <div className="container">
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={text}
            onKeyDown={handleKeyDown}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <span hidden={isReady} style={{ color: "red" }}>
            I am not ready yet!
          </span>
        </div>
      </header>
    </div>
  );
}

export default Home;
