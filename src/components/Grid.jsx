import React, { useState } from 'react';
import GridBlock from './GridBlock';
import '../styles/gridStyles.css';

export default function Grid(props) {
  const [active, setActive] = useState({ x: 1, y: 2 });
  const range = {
    movement: 2,
  };
  const field = {
    barriers: [
      { x: 3, y: 3 },
      { x: 3, y: 4 },
    ],
    width: 4,
    height: 4,
  };
  const onCellClick = (location) => {
    console.log('location');
  };
  let grid = [];
  for (let i = 0; i < field.height; i++) {
    const row = [];
    for (let j = 0; j < field.width; j++) {
      const cellLocation = { x: i, y: j };
      row.push(
        <GridBlock
          key={`r${i}_c${j}`}
          position={cellLocation}
          onCellClick={onCellClick}
          active={matchLocation(cellLocation, active)}
          // highlight={checkAdjacent(active, cellId, range.movement)}
          barrier={isBarrier(cellLocation, field.barriers)}
          // value={showMoves(cellId, active, range, field)}
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
// function showMoves(cellId, activeId, range, field) {
//   const cellLocation = getLocation(cellId);
//   const activeLocation = getLocation(activeId);
//   const isBlocker = field.boxes.includes(cellId);
//   let distance = 0;
//   for (let i = 0; i < field.boxes.length; i++) {
//     // return `${checkInline(activeId, cellId)}`;
//     if (checkAdjacent(field.boxes[i], cellId, 1)) {
//       // return `${checkAdjacent(field.boxes[i], activeId, 1)}`;
//       if (!isBlocker && cellId != activeId && checkInline(activeId, cellId)) {
//         return `${blockIsVertical(field.boxes[i], activeId)}`;
//       }
//     }
//   }
//   distance =
//     distance +
//     Math.abs(cellLocation.column - activeLocation.column) +
//     Math.abs(cellLocation.row - activeLocation.row);
//   return isBlocker ? 'N/A' : distance;
// }

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
