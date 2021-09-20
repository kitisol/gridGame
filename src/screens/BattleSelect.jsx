import React, { createRef, useEffect, useState } from 'react';
import '../styles/screenStyles.css';

export function CompletionIcon(props) {
  console.log(props);
  let { stars } = props;
  return (
    <svg viewBox="0 0 160.3 160.3">
      <g className="ring">
        <path
          class="inner"
          d="M80.2,0C35.9,0,0,35.9,0,80.2s35.9,80.2,80.2,80.2c44.3,0,80.2-35.9,80.2-80.2S124.4,0,80.2,0z M80.2,145.8
		c-36.3,0-65.7-29.4-65.7-65.7s29.4-65.7,65.7-65.7s65.7,29.4,65.7,65.7S116.4,145.8,80.2,145.8z"
        />
        <path
          class="outer"
          d="M61.2,149.8c-24.6-6.7-43.9-26-50.7-50.5h1.7c3.7,0,6.7-3,6.7-6.7V68.2c0-3.7-3-6.7-6.7-6.7h-1.8
			c6.6-24.8,26.1-44.3,50.8-51V2.3C26.1,10.8,0,42.4,0,80.2s26.1,69.4,61.2,77.9V149.8z"
        />
        <path
          class="outer"
          d="M99.1,2.3v8.2c24.7,6.7,44.2,26.2,50.8,51h-2.1c-3.7,0-6.7,3-6.7,6.7v24.5c0,3.7,3,6.7,6.7,6.7h1.9
			c-6.7,24.5-26.1,43.8-50.7,50.5v8.2c35.1-8.5,61.2-40.2,61.2-77.9S134.2,10.8,99.1,2.3z"
        />
      </g>
      <g className={stars > 0 ? 'complete' : 'incomplete'}>
        <polygon class="outer" points="96.8,68.9 81,82 65.2,68.9 81,26.2 " />
        <polygon class="inner" points="93.5,68.2 81,78.5 68.6,68.2 81,34.5 " />
      </g>
      <g className={stars > 1 ? 'complete' : 'incomplete'}>
        <polygon class="outer" points="63.7,72 79.4,85.1 79.4,95.7 32.7,114 " />
        <polygon
          class="inner"
          points="63.8,76.2 76.2,86.5 76.3,94.9 39.4,109.4 "
        />
      </g>
      <g className={stars > 2 ? 'complete' : 'incomplete'}>
        <polygon
          class="outer"
          points="98.2,72 82.5,85.1 82.4,95.7 129.5,114 "
        />
        <polygon
          class="inner"
          points="97.5,75.2 85.1,85.5 85.1,93.9 121.9,108.4 "
        />
      </g>
    </svg>
  );
}

export default function BattleSelect() {
  const svgRef = createRef();
  const [dimensions, setDimensions] = useState({ width: 1, hieght: 1 });
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const levels = [
    {
      title: 'Basic Simulation',
      details: 'Level 1 – Movement',
      stars: 3,
    },
    {
      title: 'Basic Simulation',
      details: 'Level 2 – Obstacles',
      stars: 3,
    },
    {
      title: 'Basic Simulation',
      details: 'Level 3 – Area Affects',
      stars: 2,
    },
    {
      title: 'Basic Simulation',
      details: 'Level 4 – Space Station',
      stars: 1,
    },
    {
      title: 'Basic Simulation',
      details: 'Level 5 – Movement',
      stars: 1,
    },
    {
      title: 'Basic Simulation',
      details: 'Level 6 – Melee I',
      stars: 2,
    },
    {
      title: 'Basic Simulation',
      details: 'Level 7 – Melee II',
      stars: 1,
    },
    {
      title: 'Basic Simulation',
      details: 'Level 8 – Ranged I',
      stars: 1,
    },
    {
      title: 'Basic Simulation',
      details: 'Level 9 – Ranged II',
      stars: 1,
    },
    {
      title: 'Basic Simulation',
      details: 'Level 10 – Uniform & Tango',
      stars: 0,
    },
  ];
  React.useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
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
      <div className="d-flex battle-listing">
        <div className="battle-icon">
          <CompletionIcon stars={battle.stars} />
        </div>
        <div className="d-flex vertical-center">
          <div className="battle-description">
            <div className="battle-title">{battle.title}</div>
            <div className="battle-details">{battle.details}</div>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="background">
      <div className="container">
        <svg className="fancyBorderBox" viewBox="0 0 100 200" ref={svgRef}>
          <polygon points="0,2 90,2 98,10 98,198 8,198 0,192" />
          <polygon
            className="fancyBorder"
            points="2,0 65,0 65,4 96,4 96,55 100,55 100,200, 45,200 45,196 2,196"
          />
        </svg>
        <div className="content">
          <div className="title">TRAINING</div>
          <div className="subTitle">SIMULATIONS</div>
          <div
            className="battle-list"
            style={{ height: `${dimensions.height - 150}px` }}
          >
            {battleList}
          </div>
        </div>
      </div>
    </div>
  );
}
