import "./App.css";

import { DarkModeContextProvider } from "./context/DarkModeContext";
import { Counter } from "./components/Counter";
import { DarkMode } from "./components/DarkMode";

function App() {
  return (
    <div className="App">
      <DarkModeContextProvider>
        <Counter suffix=" thing" pluralString="s" />
        <br />
        <DarkMode />
      </DarkModeContextProvider>
    </div>
  );
}

export default App;
