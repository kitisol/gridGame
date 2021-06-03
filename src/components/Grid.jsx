import React, { useState } from "react";
import GridBlock from "./GridBlock";
import "../styles/gridStyles.css";

export default function Grid(props) {
  const defaultStart = {
    name: undefined,
    movement: -1,
    team: undefined,
    location: { x: -1, y: -1 },
  };
  const [selectedPlayer, setSelectedPlayer] = useState(defaultStart);
  const [players, setPlayers] = useState({
    p1: {
      name: "Testy",
      id: 'p1',
      movement: 2,
      team: "blue",
      location: {
        x: 0,
        y: 0,
      },
    },
    p2: {
      name: "Besty",
      id: 'p2',
      movement: 3,
      team: "blue",
      location: {
        x: 1,
        y: 0,
      },
    },
    p3: {
      name: "Ready",
      id: 'p3',
      movement: 3,
      team: "red",
      location: {
        x: 3,
        y: 5,
      },
    },
    p4: {
      name: "Rusty",
      id: 'p4',
      movement: 1,
      team: "red",
      location: {
        x: 2,
        y: 5,
      },
    },
  });
  const field = {
    barriers: [
      { x: 0, y: 1 },
      { x: 1, y: 1 },
      { x: 2, y: 4 },
      { x: 3, y: 4 },
    ],
    width: 4,
    height: 6,
  };
  let grid = [];
  let candidates = findOpenPositions(
    selectedPlayer.location,
    field,
    selectedPlayer.movement
  );
  const onCellClick = (location, cell) => {
    if (cell.type === "player") {
      if (matchLocation(cell.data.location, selectedPlayer.location)) {
        setSelectedPlayer(defaultStart);
      } 
      else {
        setSelectedPlayer(cell.data);
      }
    } else if (locationInList(location, candidates)) {
      setSelectedPlayer(prevState => {
        return { ...prevState, location: location }
      });
      setPlayers(prevState => {
        return { ...prevState, [selectedPlayer.id]: {...prevState[selectedPlayer.id], location: location} }
      });
    }
    else {
      setSelectedPlayer(defaultStart);
    }
  };
  for (let i = 0; i < field.height; i++) {
    const row = [];
    for (let j = 0; j < field.width; j++) {
      const cellLocation = { x: j, y: i };
      const cellContent = determineCellType(cellLocation, players, field);
      row.push(
        <GridBlock
          key={`r${i}_c${j}`}
          position={cellLocation}
          onCellClick={onCellClick}
          active={matchLocation(cellLocation, selectedPlayer.location)}
          highlight={locationInList(cellLocation, candidates)}
          cellType={cellContent}
        />
      );
    }
    grid.push(
      <div key={`row${i}`} className='gridRow'>
        {row}
      </div>
    );
  }
  return (
    <div className='gameBoard' key={"gameboard"}>
      {grid}
    </div>
  );
}
function findOpenPositions(location, field, range) {
  let candidates = [location];
  for (let i = 0; i < range; i++) {
    candidates.forEach((candidate) => {
      candidates = candidates.concat(checkNear(candidate, field));
    });
  }
  const shortList = [] 
  candidates.forEach(item => {
    if(!locationInList(item, shortList) && !matchLocation(location, item)){
      shortList.push(item)
    }
  })
  return shortList;
}
function checkNear(location, field) {
  const candidates = [];
  for (let x_inc = -1; x_inc <= 1; x_inc++) {
    if (location.x + x_inc >= 0 && location.x + x_inc < field.width) {
      const point = { x: location.x + x_inc, y: location.y };
      if (
        !locationInList(point, field.barriers) &&
        !matchLocation(location, point)
      ) {
        candidates.push(point);
      }
    }
  }
  for (let y_inc = -1; y_inc <= 1; y_inc++) {
    if (location.y + y_inc >= 0 && location.y + y_inc < field.height) {
      const point = { x: location.x, y: location.y + y_inc };
      if (
        !locationInList(point, field.barriers) &&
        !matchLocation(location, point)
      ) {
        candidates.push(point);
      }
    }
  }
  return candidates;
}
function matchLocation(locationA, locationB) {
  return locationA.x === locationB.x && locationA.y === locationB.y;
}
function locationInList(location, locationList) {
  for (let i = 0; i < locationList.length; i++) {
    if (matchLocation(location, locationList[i])) {
      return true;
    }
  }
  return false;
}
function determineCellType(location, players, field) {
  const playerList = Object.keys(players);
  let cellContent = { type: "cell" };
  if (locationInList(location, field.barriers)) {
    cellContent = { type: "barrier", data: "" };
  }
  for (let i = 0; i < playerList.length; i++) {
    const player = players[playerList[i]];
    if (matchLocation(location, player.location)) {
      cellContent = { type: "player", data: player };
    }
  }
  return cellContent;
}
