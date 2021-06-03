import React, { useState } from 'react';
import GridBlock from './GridBlock';
import '../styles/gridStyles.css';

export default function Grid(props) {
  const [active, setActive] = useState({ x: 0, y: 0 });
  const range = 1;
  const field = {
    barriers: [
      { x: 0, y: 1 },
      { x: 1, y: 1 },
    ],
    width: 4,
    height: 6,
  };
  let grid = [];
  let candidates = findOpenPositions(active, field, range);
  const onCellClick = (location) => {
    candidates = findOpenPositions(location, field, range);
    if (!isBarrier(location, field.barriers)) {
      setActive(location);
    }
  };
  for (let i = 0; i < field.height; i++) {
    const row = [];
    for (let j = 0; j < field.width; j++) {
      const cellLocation = { x: j, y: i };
      row.push(
        <GridBlock
          key={`r${i}_c${j}`}
          position={cellLocation}
          onCellClick={onCellClick}
          active={matchLocation(cellLocation, active)}
          barrier={isBarrier(cellLocation, field.barriers)}
          highlight={isBarrier(cellLocation, candidates)}
        />
      );
    }
    grid.push(
      <div key={`row${i}`} className="gridRow">
        {row}
      </div>
    );
  }
  return (
    <div className="gameBoard" key={'gameboard'}>
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
  return candidates;
}
function checkNear(location, field) {
  const candidates = [];
  for (let x_inc = -1; x_inc <= 1; x_inc++) {
    if (location.x + x_inc >= 0 && location.x + x_inc <= field.width) {
      const point = { x: location.x + x_inc, y: location.y };
      if (
        !isBarrier(point, field.barriers) &&
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
        !isBarrier(point, field.barriers) &&
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
function isBarrier(location, locationList) {
  for (let i = 0; i < locationList.length; i++) {
    if (matchLocation(location, locationList[i])) {
      return true;
    }
  }
  return false;
}
