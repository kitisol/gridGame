import React, { createRef, useEffect, useState } from 'react';
import '../styles/screenStyles.css';

export function NavBar() {
  return (
    <div className="d-flex content">
      <button className="icon button-clear">{home}</button>
      <button className="icon button-clear">{team}</button>
      <button className="icon button-clear">{fight}</button>
      <button className="icon button-clear">{store}</button>
    </div>
  );
}

export function LevelModal(props) {
  let { show } = props;
  if (show) {
    return <div className="level-modal test">hello world</div>;
  }
  return <div></div>;
}
export default function BattleSelect() {
  const svgRef = createRef();
  const [dimensions, setDimensions] = useState({ width: 1, hieght: 1 });
  const [windowSize, setWindowSize] = useState(window.innerHeight);

  const color = 'purple';
  React.useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerHeight);
    }
    window.addEventListener('resize', handleResize);
  });

  React.useEffect(() => {
    if (svgRef.current) {
      const { current } = svgRef;
      const boundingRect = current.getBoundingClientRect();
      const { width, height } = boundingRect;
      setDimensions({ width: Math.round(width), height: Math.round(height) });
    }
  }, [svgRef.current, windowSize]);

  const battleList = levels.map((battle) => {
    return (
      <button className="d-flex battle-listing button-clear">
        <div className="battle-icon">
          <CompletionIcon stars={battle.stars} />
        </div>
        <div className="d-flex vertical-center">
          <div className="battle-description">
            <div className="battle-title">{battle.title}</div>
            <div className="battle-details">{battle.details}</div>
          </div>
        </div>
      </button>
    );
  });
  return (
    <div className="background">
      <div className="container">
        <svg className="fancyBorderBox" viewBox="0 0 100 200">
          <polygon points="0,2 90,2 98,10 98,198 8,198 0,192" />
          <polygon
            ref={svgRef}
            className="fancyBorder"
            points="2,0 65,0 65,4 96,4 96,55 100,55 100,200, 45,200 45,196 2,196"
          />
        </svg>
        <div
          className="content"
          style={{ width: `calc(${dimensions.width}px - 7%)` }}
        >
          <div className="title">TRAINING</div>
          <div className="subTitle">SIMULATIONS</div>
          <div
            className="battle-list"
            style={{ height: `calc(${dimensions.height}px - 8rem)` }}
          >
            {battleList}
            <div style={{ height: '60px' }}></div>
          </div>
        </div>
      </div>
      <div
        className="bottom-nav"
        style={{ marginTop: '50px', width: `${dimensions.width}px` }}
      >
        <NavBar />
      </div>
      <div className="modal-container">
        <LevelModal show={true} dimensions={dimensions} />
      </div>
    </div>
  );
}
