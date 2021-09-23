import React, { createRef, useState } from 'react';
import { CompletionIcon, home, store, fight, team } from '../assets/svgs';

import '../styles/gradients.css';
import '../styles/iconStyles.css';
import '../styles/battleSelectStyles.css';
import userData from '../assets/data';

export default function BattleSelect(props) {
  const svgRef = createRef();
  const [dimensions, setDimensions] = useState({ width: 1, hieght: 1 });
  const [windowSize, setWindowSize] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  React.useEffect(() => {
    function handleResize() {
      setWindowSize({ height: window.innerHeight, width: window.innerWidth });
    }
    window.addEventListener('resize', handleResize);
    return (_) => {
      window.removeEventListener('resize', handleResize);
    };
  });

  React.useEffect(() => {
    if (svgRef.current) {
      const { current } = svgRef;
      const boundingRect = current.getBoundingClientRect();
      const { width, height } = boundingRect;
      setDimensions({ width: Math.round(width), height: Math.round(height) });
    }
  }, [svgRef.current, windowSize]);
  const battleList = userData.levels.map((battle) => {
    return (
      <button className="d-flex battle-listing button-clear">
        <div className="battle-icon">
          <CompletionIcon stars={battle.stars} />
        </div>
        <div className="d-flex vertical-center battle-text">
          <div>
            <div className="battle-title"> {battle.title} </div>
            <div className="battle-details"> {battle.details} </div>
          </div>
        </div>
      </button>
    );
  });
  return (
    <div>
      <div className="background blue-gradient">
        <div className="background blue-radial-gradient"></div>
      </div>
      <div className="primary container">
        <svg className="fancyBorderBox" viewBox="0 0 100 200">
          <polygon points="0,2 90,2 98,10 98,198 8,198 0,192" ref={svgRef} />
          <polygon
            className="fancyBorder"
            points="2,0 65,0 65,4 96,4 96,55 100,55 100,200, 45,200 45,196 2,196"
          />
        </svg>
        <div
          className="content container"
          style={{
            width: dimensions.width + 'px',
            height: dimensions.height + 'px',
          }}
        >
          <div className="header">
            <div className="title">TRAINING</div>
            <div className="subTitle">SIMULATIONS</div>
          </div>
          <div className="body">
            {' '}
            {battleList} <div style={{ height: '60px' }}></div>
          </div>
        </div>
        <div className="bottom-nav" style={{ width: `100%` }}>
          <div style={{ width: `${dimensions.width}px`, margin: 'auto' }}>
            <NavBar />
          </div>
        </div>
      </div>
    </div>
  );
}

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
