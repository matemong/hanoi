import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

const colorLookup = ["red", "orange", "yellow", "green", "blue"];

function App() {
  const [towers, setTowers] = useState([[5, 4, 3, 2, 1], [], []]);
  const [selectedTowerIndex, setSelectedTowerIndex] = useState<
    number | undefined
  >();

  function handleClickedTower(clickedTowerIndex: number) {
    if (selectedTowerIndex !== undefined) {
      const selectedTower = towers[selectedTowerIndex];
      const clickedTower = towers[clickedTowerIndex];

      if (
        selectedTower[selectedTower.length - 1] >
        clickedTower[clickedTower.length - 1]
      ) {
        setSelectedTowerIndex(undefined);
        return;
      }
      if (selectedTower.length === 0) {
        setSelectedTowerIndex(undefined);
        return;
      }
      const newTowers = [...towers];

      const poppedDisc = newTowers[selectedTowerIndex].pop();
      newTowers[clickedTowerIndex].push(poppedDisc!);
      setTowers(newTowers);
      setSelectedTowerIndex(undefined);

      if (clickedTower.length === 5 && clickedTowerIndex === 2) {
        alert("Victory royale");
      }
    } else {
      setSelectedTowerIndex(clickedTowerIndex);
    }
  }

  return (
    <div className="App">
      <div className="towers">
        {towers.map((discs, towerIndex) => (
          <div
            key={towerIndex}
            className={
              "tower " + (selectedTowerIndex === towerIndex ? "selected" : "")
            }
            onClick={() => handleClickedTower(towerIndex)}
          >
            <div className="line"></div>
            <div className="discs">
              {discs.map((discNumber) => {
                const color = colorLookup[discNumber - 1];
                return (
                  <div
                    key={discNumber}
                    className="disc"
                    style={{
                      width: `${discNumber * 25 + 25}px`,
                      backgroundColor: `${color}`,
                    }}
                  ></div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
