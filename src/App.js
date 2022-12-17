import "./App.css";
import "./assets/main.css";
import Home from "./Home";
import { Route, NavLink, HashRouter } from "react-router-dom";
import PokeDex from "./PokeDex";

function App() {
  return (
    <HashRouter>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/pokedex" component={PokeDex} />
      </div>
    </HashRouter>
  );
}

export default App;
