// dynamic svg images
export function CompletionIcon(props) {
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
      <g className="stars">
        <g className={stars > 0 ? 'complete' : 'incomplete'}>
          <polygon class="outer" points="96.8,68.9 81,82 65.2,68.9 81,26.2 " />
          <polygon
            class="inner"
            points="93.5,68.2 81,78.5 68.6,68.2 81,34.5 "
          />
        </g>
        <g className={stars > 1 ? 'complete' : 'incomplete'}>
          <polygon
            class="outer"
            points="63.7,72 79.4,85.1 79.4,95.7 32.7,114 "
          />
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
      </g>
    </svg>
  );
}
export function FragmentIcon(props) {
  let { color } = props;
  return (
    <svg viewBox="0 0 100 100">
      <g class="ring rotate-center right">
        <path
          class="inner"
          d="M50,0C22.4,0,0,22.4,0,50s22.4,50,50,50c27.6,0,50-22.4,50-50S77.6,0,50,0z M50,91C27.4,91,9,72.6,9,50
		C9,27.4,27.4,9,50,9s41,18.3,41,41C91,72.6,72.6,91,50,91z"
        />
        <path
          class="outer"
          d="M38.2,93.5C22.9,89.3,10.8,77.3,6.6,62h1.1c2.3,0,4.2-1.9,4.2-4.2V42.5c0-2.3-1.9-4.2-4.2-4.2H6.5
			c4.1-15.5,16.3-27.6,31.7-31.8V1.4C16.3,6.7,0,26.5,0,50c0,23.5,16.3,43.3,38.2,48.6V93.5z"
        />
        <path
          class="outer"
          d="M61.8,1.4v5.1c15.4,4.2,27.6,16.4,31.7,31.8h-1.3c-2.3,0-4.2,1.9-4.2,4.2v15.3c0,2.3,1.9,4.2,4.2,4.2h1.2
			c-4.2,15.3-16.3,27.3-31.6,31.5v5.1C83.7,93.3,100,73.5,100,50C100,26.5,83.7,6.7,61.8,1.4z"
        />
      </g>
      <g id="credits">
        <polygon
          className={`${color}-icon`}
          points="60.4,43 50.5,16.3 40.7,43 50.5,51.2 	"
        />
        <polygon
          className={`${color}-icon`}
          points="61.3,44.9 55.2,50 61.7,55.4 62.7,56.2 62.3,57.4 60.2,63.1 80.8,71.1 	"
        />
        <polygon
          className={`${color}-icon`}
          points="38.6,56.2 39.6,55.4 46,50.1 39.7,44.9 20.4,71.1 41.1,63 39.1,57.5 	"
        />
        <polygon
          className={`${color}-icon`}
          points="53.6,51.1 51.7,52.6 50.5,53.6 49.3,52.6 47.6,51.2 40.8,56.8 50.7,83.4 60.5,56.8 	"
        />
      </g>
    </svg>
  );
}
// static svg images
export const team = (
  <svg viewBox="0 0 100 86.9">
    <g className="team-icon symbol">
      <circle class="primary" cx="58.1" cy="26.3" r="8.3" />
      <path
        class="primary"
        d="M66.4,46.5c0,7.1-5.9,12.8-8.3,12.8c-2.8,0-8.3-5.7-8.3-12.8s3.7-10.7,8.3-10.7S66.4,39.4,66.4,46.5z"
      />
      <circle class="secondary" cx="43.4" cy="30.2" r="9.8" />
      <path
        class="secondary"
        d="M53.3,54.3c0,8.4-7,15.2-9.8,15.2c-3.4,0-9.8-6.8-9.8-15.2s4.4-12.7,9.8-12.7S53.3,45.9,53.3,54.3z"
      />
    </g>
    team
    <g className="ring">
      <g>
        <polygon
          class="inner"
          points="76.5,61 68.3,75.2 31.7,75.2 13.4,43.4 21.3,29.6 11.3,23.9 0,43.4 25,86.7 75,86.7 86.5,66.8 		"
        />
        <polygon
          class="inner"
          points="23.5,25.8 31.7,11.7 68.3,11.7 86.6,43.4 78.7,57.2 88.7,63 100,43.4 75,0.1 25,0.1 13.5,20.1 		"
        />
      </g>
      <g>
        <path
          class="outer"
          d="M85.9,28.1l8.9,15.6L72.2,82.4h-7.1c0-1.8-1.5-3.3-3.4-3.3H38.9c-1.8,0-3.3,1.4-3.4,3.2h-8.2l-8.9-15.6
			l-3.9,2.2l10.2,17.8l50,0.3L100,43.7L89.8,25.9L85.9,28.1z"
        />
        <path
          class="outer"
          d="M14.1,58.8L5.2,43.2L27.8,4.5h7.7c0,1.8,1.5,3.3,3.4,3.3h22.8c1.8,0,3.3-1.4,3.4-3.2h7.5l8.9,15.6l3.9-2.2
			L75.2,0.3L25.2,0L0,43.2L10.2,61L14.1,58.8z"
        />
      </g>
    </g>
    <text transform="matrix(1 0 0 1 15.8295 76.9881)" class="text">
      Team
    </text>
  </svg>
);
export const home = (
  <svg viewBox="0 0 100 86.9">
    <g className="home-icon symbol">
      <polygon
        class="primary"
        points="50,18.4 56.2,37.5 76.3,37.5 60,49.3 66.3,68.4 50,56.5 33.8,68.4 40,49.3 23.7,37.5 43.8,37.5 	"
      />
      <polygon
        class="secondary"
        points="50.1,43.4 50.1,43.2 50,18.4 56.2,37.5 	"
      />
      <polygon
        class="secondary"
        points="48.2,48.2 48.1,48.3 33.7,68.5 39.9,49.3 	"
      />
      <polygon
        class="secondary"
        points="47.5,45.2 47.3,45.1 23.7,37.5 43.8,37.6 	"
      />
      <polygon
        class="secondary"
        points="52.4,45.3 52.6,45.2 76.2,37.5 59.9,49.3 	"
      />
      <polygon
        class="secondary"
        points="51.4,48.3 51.6,48.4 66.2,68.4 50,56.6 	"
      />
      <path class="primary" d="M61.4,39.1" />
    </g>
    <g className="ring">
      <g>
        <polygon
          class="inner"
          points="76.5,61 68.3,75.2 31.7,75.2 13.4,43.4 21.3,29.6 11.3,23.9 0,43.4 25,86.7 75,86.7 86.5,66.8 		"
        />
        <polygon
          class="inner"
          points="23.5,25.8 31.7,11.7 68.3,11.7 86.6,43.4 78.7,57.2 88.7,63 100,43.4 75,0.1 25,0.1 13.5,20.1 		"
        />
      </g>
      <g>
        <path
          class="outer"
          d="M85.9,28.1l8.9,15.6L72.2,82.4h-7.1c0-1.8-1.5-3.3-3.4-3.3H38.9c-1.8,0-3.3,1.4-3.4,3.2h-8.2l-8.9-15.6
        l-3.9,2.2l10.2,17.8l50,0.3L100,43.7L89.8,25.9L85.9,28.1z"
        />
        <path
          class="outer"
          d="M14.1,58.8L5.2,43.2L27.8,4.5h7.7c0,1.8,1.5,3.3,3.4,3.3h22.8c1.8,0,3.3-1.4,3.4-3.2h7.5l8.9,15.6l3.9-2.2
        L75.2,0.3L25.2,0L0,43.2L10.2,61L14.1,58.8z"
        />
      </g>
    </g>
    <text transform="matrix(1 0 0 1 11.655 76.9881)" class="text">
      Home
    </text>
  </svg>
);
export const fight = (
  <svg viewBox="0 0 100 86.9">
    <g className="fight-icon symbol">
      <g>
        <polygon
          class="secondary"
          points="51.3,71 57.1,70.1 53.8,49.8 47.4,50.9 49.7,69.1 		"
        />

        <rect
          x="41.5"
          y="51.1"
          transform="matrix(0.9869 -0.1614 0.1614 0.9869 -7.9449 8.8984)"
          class="secondary"
          width="18.6"
          height="4.5"
        />
        <polygon
          class="primary"
          points="41.3,52.6 39.7,50.1 58.1,47.1 59.7,49.6 		"
        />
        <polygon
          class="secondary"
          points="41.9,57 40.3,54.5 39.6,50.1 41.2,52.6 		"
        />
        <path
          class="secondary"
          d="M51.1,27.4L49.3,16c0,0-8.7,2.7-6.7,14.8s3.1,19.1,3.1,19.1l4.4-0.7"
        />
        <path
          class="primary"
          d="M55.2,48.3l-3.3-21.1l-2.2,0.4l-1-5.9c0,0-2.7,2.2-1.9,9.2l1.7,2.5l-1,2.6c1,6.4,2.3,13.3,2.3,13.3"
        />
        <path
          class="transparent"
          d="M50.7,27.5l-1.9-11.6c0,0-8.2,2.9-6.2,15S45.7,50,45.7,50"
        />
      </g>
    </g>
    <g className="ring">
      <g>
        <polygon
          class="inner"
          points="76.5,61 68.3,75.2 31.7,75.2 13.4,43.4 21.3,29.6 11.3,23.9 0,43.4 25,86.7 75,86.7 86.5,66.8 		"
        />
        <polygon
          class="inner"
          points="23.5,25.8 31.7,11.7 68.3,11.7 86.6,43.4 78.7,57.2 88.7,63 100,43.4 75,0.1 25,0.1 13.5,20.1 		"
        />
      </g>
      <g>
        <path
          class="outer"
          d="M85.9,28.1l8.9,15.6L72.2,82.4h-7.1c0-1.8-1.5-3.3-3.4-3.3H38.9c-1.8,0-3.3,1.4-3.4,3.2h-8.2l-8.9-15.6
        l-3.9,2.2l10.2,17.8l50,0.3L100,43.7L89.8,25.9L85.9,28.1z"
        />
        <path
          class="outer"
          d="M14.1,58.8L5.2,43.2L27.8,4.5h7.7c0,1.8,1.5,3.3,3.4,3.3h22.8c1.8,0,3.3-1.4,3.4-3.2h7.5l8.9,15.6l3.9-2.2
        L75.2,0.3L25.2,0L0,43.2L10.2,61L14.1,58.8z"
        />
      </g>
    </g>
    <text transform="matrix(1 0 0 1 15.9638 76.9881)" class="text">
      Fight
    </text>
  </svg>
);
export const store = (
  <svg viewBox="0 0 100 86.9">
    <g className="store-icon symbol">
      <path
        class="secondary"
        d="M34,27.4v32.1h32V27.4H34z M61.3,54.7H38.7V32.1h22.6C61.3,32.1,61.3,54.7,61.3,54.7z"
      />
      <g>
        <rect x="42.1" y="19" class="primary" width="6.6" height="7" />
        <rect x="42.1" y="60.9" class="primary" width="6.6" height="7.5" />
        <rect x="42.1" y="33.4" class="primary" width="6.6" height="20.1" />
        <rect x="52.1" y="33.4" class="primary" width="6.6" height="20.1" />
        <rect x="52.1" y="60.9" class="primary" width="6.6" height="7.5" />
        <rect x="52.1" y="19" class="primary" width="6.6" height="7" />
      </g>
    </g>
    <g className="ring">
      <g>
        <polygon
          class="inner"
          points="76.5,61 68.3,75.2 31.7,75.2 13.4,43.4 21.3,29.6 11.3,23.9 0,43.4 25,86.7 75,86.7 86.5,66.8 		"
        />
        <polygon
          class="inner"
          points="23.5,25.8 31.7,11.7 68.3,11.7 86.6,43.4 78.7,57.2 88.7,63 100,43.4 75,0.1 25,0.1 13.5,20.1 		"
        />
      </g>
      <g>
        <path
          class="outer"
          d="M85.9,28.1l8.9,15.6L72.2,82.4h-7.1c0-1.8-1.5-3.3-3.4-3.3H38.9c-1.8,0-3.3,1.4-3.4,3.2h-8.2l-8.9-15.6
        l-3.9,2.2l10.2,17.8l50,0.3L100,43.7L89.8,25.9L85.9,28.1z"
        />
        <path
          class="outer"
          d="M14.1,58.8L5.2,43.2L27.8,4.5h7.7c0,1.8,1.5,3.3,3.4,3.3h22.8c1.8,0,3.3-1.4,3.4-3.2h7.5l8.9,15.6l3.9-2.2
        L75.2,0.3L25.2,0L0,43.2L10.2,61L14.1,58.8z"
        />
      </g>
    </g>
    <text transform="matrix(1 0 0 1 14.5627 76.9881)" class="text">
      Store
    </text>
  </svg>
);
export default {
  CompletionIcon,
  FragmentIcon,
  team,
  home,
  fight,
  store,
};
