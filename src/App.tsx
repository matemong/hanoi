import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [towers, setTowers] = useState([3, 0, 0]);

  return (
    <div className="App">
      <div className="towers">
        {towers.map((towerHeight, index) => (
          <div key={index} className="tower">
            {towerHeight}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
