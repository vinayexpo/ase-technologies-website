import type { CSSProperties } from "react";

/**
 * Original artwork for the service sub-pages. Each service gets its own
 * composition — none of them reuse the stage carousel illustrations.
 */

function delay(ms: number) {
  return { "--d": `${ms}ms` } as CSSProperties;
}

/** Search: a results page with a magnifier over the top listing. */
export function SeoPageArt() {
  return (
    <svg className="pa" viewBox="0 0 400 400" aria-hidden="true" focusable="false">
      <rect className="pa-fill-bright pa-stroke" x="30" y="50" width="290" height="290" rx="18" />

      <rect className="pa-fill-soft" x="54" y="74" width="242" height="38" rx="19" />
      <circle className="pa-stroke" cx="76" cy="93" r="9" />
      <line className="pa-soft" x1="82" y1="99" x2="90" y2="107" />
      <line className="pa-soft" x1="106" y1="93" x2="196" y2="93" strokeWidth={6} />

      <rect className="pa-fill-primary pa-pop" x="54" y="132" width="5" height="54" rx="2.5" style={delay(200)} />
      <line className="pa-line pa-rise" x1="72" y1="144" x2="212" y2="144" strokeWidth={7} style={delay(260)} />
      <line className="pa-soft pa-rise" x1="72" y1="164" x2="264" y2="164" style={delay(320)} />
      <line className="pa-soft pa-rise" x1="72" y1="178" x2="196" y2="178" style={delay(360)} />

      <line className="pa-soft pa-rise" x1="54" y1="208" x2="172" y2="208" strokeWidth={6} style={delay(420)} />
      <line className="pa-soft pa-rise" x1="54" y1="228" x2="238" y2="228" style={delay(460)} />

      <line className="pa-soft pa-rise" x1="54" y1="258" x2="150" y2="258" strokeWidth={6} style={delay(520)} />
      <line className="pa-soft pa-rise" x1="54" y1="278" x2="210" y2="278" style={delay(560)} />
      <line className="pa-soft pa-rise" x1="54" y1="298" x2="168" y2="298" style={delay(600)} />

      <g className="pa-pop" style={delay(700)}>
        <circle className="pa-fill-bright pa-stroke" cx="300" cy="180" r="54" />
        <circle className="pa-stroke" cx="300" cy="180" r="36" />
        <line className="pa-line" x1="326" y1="206" x2="362" y2="242" strokeWidth={10} />
      </g>

      <g className="pa-pop" style={delay(900)}>
        <rect className="pa-fill-primary" x="286" y="70" width="86" height="34" rx="17" />
        <text className="pa-text" x="329" y="93" textAnchor="middle">
          +18%
        </text>
      </g>
    </svg>
  );
}

/** Social: a wall of posts, one of them lit. */
export function SocialPageArt() {
  const tiles = [
    { x: 30, y: 40, fill: "pa-fill-soft" },
    { x: 146, y: 40, fill: "pa-fill-primary" },
    { x: 262, y: 40, fill: "pa-fill-soft" },
    { x: 30, y: 156, fill: "pa-fill-soft" },
    { x: 146, y: 156, fill: "pa-fill-soft" },
    { x: 262, y: 156, fill: "pa-fill-bright" },
    { x: 30, y: 272, fill: "pa-fill-bright" },
    { x: 146, y: 272, fill: "pa-fill-soft" },
    { x: 262, y: 272, fill: "pa-fill-soft" },
  ];

  return (
    <svg className="pa" viewBox="0 0 400 400" aria-hidden="true" focusable="false">
      {tiles.map((tile, index) => (
        <rect
          key={`${tile.x}-${tile.y}`}
          className={`${tile.fill} pa-stroke pa-pop`}
          x={tile.x}
          y={tile.y}
          width="100"
          height="100"
          rx="18"
          style={delay(120 + index * 70)}
        />
      ))}

      <g className="pa-pop" style={delay(260)}>
        <path
          className="pa-fill-ink"
          d="M196 62c-9 0-16 7-16 16 0 12 16 28 16 28s16-16 16-28c0-9-7-16-16-16zm0 22a6 6 0 110-12 6 6 0 010 12z"
        />
      </g>

      <g className="pa-pop" style={delay(460)}>
        <path
          className="pa-stroke"
          d="M176 186h30a8 8 0 018 8v14a8 8 0 01-8 8h-14l-10 10v-10h-16a8 8 0 01-8-8v-14a8 8 0 018-8z"
        />
      </g>

      <g className="pa-pop" style={delay(560)}>
        <circle className="pa-fill-ink" cx="300" cy="206" r="16" />
      </g>

      <g className="pa-rise" style={delay(660)}>
        <line className="pa-line" x1="52" y1="300" x2="104" y2="300" strokeWidth={7} />
        <line className="pa-soft" x1="52" y1="322" x2="108" y2="322" />
        <line className="pa-soft" x1="52" y1="340" x2="88" y2="340" />
      </g>

      <g className="pa-rise" style={delay(760)}>
        <line className="pa-soft" x1="168" y1="300" x2="224" y2="300" strokeWidth={6} />
        <line className="pa-soft" x1="168" y1="322" x2="212" y2="322" />
      </g>

      <g className="pa-pop pa-pulse" style={delay(880)}>
        <circle className="pa-fill-primary" cx="312" cy="322" r="20" />
      </g>
    </svg>
  );
}

/** Web: three devices and a cursor. */
export function WebPageArt() {
  return (
    <svg className="pa" viewBox="0 0 400 400" aria-hidden="true" focusable="false">
      <g className="pa-rise" style={delay(100)}>
        <rect className="pa-fill-bright pa-stroke" x="24" y="70" width="250" height="176" rx="14" />
        <line className="pa-soft" x1="24" y1="98" x2="274" y2="98" />
        <circle className="pa-fill-ink" cx="42" cy="84" r="5" />
        <circle className="pa-fill-ink" cx="58" cy="84" r="5" />
        <circle className="pa-fill-ink" cx="74" cy="84" r="5" />
        <rect className="pa-fill-soft" x="44" y="118" width="120" height="18" rx="9" />
        <rect className="pa-fill-soft" x="44" y="150" width="200" height="14" rx="7" />
        <rect className="pa-fill-soft" x="44" y="176" width="160" height="14" rx="7" />
        <rect className="pa-fill-primary" x="44" y="204" width="74" height="24" rx="12" />
      </g>

      <g className="pa-pop" style={delay(420)}>
        <rect className="pa-fill-bright pa-stroke" x="250" y="150" width="118" height="176" rx="16" />
        <line className="pa-soft" x1="272" y1="186" x2="346" y2="186" />
        <line className="pa-soft" x1="272" y1="210" x2="330" y2="210" />
        <rect className="pa-fill-soft" x="272" y="232" width="74" height="52" rx="8" />
        <rect className="pa-fill-primary" x="272" y="294" width="50" height="18" rx="9" />
      </g>

      <g className="pa-pop" style={delay(560)}>
        <rect className="pa-fill-bright pa-stroke" x="60" y="214" width="76" height="140" rx="16" />
        <line className="pa-soft" x1="80" y1="244" x2="116" y2="244" />
        <rect className="pa-fill-soft" x="80" y="264" width="36" height="44" rx="8" />
        <circle className="pa-fill-ink" cx="98" cy="330" r="9" />
      </g>

      <g className="pa-pop" style={delay(760)}>
        <path className="pa-fill-ink" d="M330 250l26 8-12 10 6 16-9 4-6-16-11 9z" />
      </g>

      <g className="pa-pop" style={delay(900)}>
        <rect className="pa-fill-primary" x="300" y="60" width="78" height="34" rx="17" />
        <text className="pa-text" x="339" y="83" textAnchor="middle">
          98
        </text>
      </g>
    </svg>
  );
}

/** Content: an open spread, set and photographed. */
export function ContentPageArt() {
  return (
    <svg className="pa" viewBox="0 0 400 400" aria-hidden="true" focusable="false">
      <g className="pa-pop" style={delay(100)}>
        <path
          className="pa-fill-bright pa-stroke"
          d="M30 70 L200 60 L200 340 L30 330 Z"
        />
        <path className="pa-fill-bright pa-stroke" d="M200 60 L370 70 L370 330 L200 340 Z" />
      </g>

      <g className="pa-pop" style={delay(260)}>
        <text className="pa-display" x="54" y="140">
          A
        </text>
      </g>

      <g>
        <line className="pa-line pa-draw" x1="92" y1="112" x2="176" y2="110" strokeWidth={7} style={delay(400)} />
        <line className="pa-line pa-draw" x1="54" y1="150" x2="176" y2="148" strokeWidth={7} style={delay(460)} />
        <line className="pa-soft pa-draw" x1="54" y1="176" x2="170" y2="174" style={delay(520)} />
        <line className="pa-soft pa-draw" x1="54" y1="196" x2="176" y2="194" style={delay(560)} />
        <line className="pa-soft pa-draw" x1="54" y1="216" x2="150" y2="214" style={delay(600)} />
        <line className="pa-soft pa-draw" x1="54" y1="248" x2="176" y2="246" style={delay(660)} />
        <line className="pa-soft pa-draw" x1="54" y1="268" x2="162" y2="266" style={delay(700)} />
        <line className="pa-soft pa-draw" x1="54" y1="288" x2="176" y2="286" style={delay(740)} />
      </g>

      <g className="pa-pop" style={delay(820)}>
        <rect className="pa-fill-primary" x="224" y="96" width="122" height="104" rx="8" />
      </g>

      <g>
        <line className="pa-line pa-draw" x1="224" y1="228" x2="330" y2="228" strokeWidth={7} style={delay(900)} />
        <line className="pa-soft pa-draw" x1="224" y1="250" x2="318" y2="250" style={delay(950)} />
        <line className="pa-soft pa-draw" x1="224" y1="270" x2="336" y2="270" style={delay(990)} />
        <line className="pa-soft pa-draw" x1="224" y1="290" x2="296" y2="290" style={delay(1030)} />
      </g>

      <g className="pa-pop pa-pulse" style={delay(1150)}>
        <circle className="pa-fill-ink" cx="340" cy="316" r="18" />
        <line className="pa-fill-bright" x1="332" y1="316" x2="348" y2="316" strokeWidth={4} />
      </g>
    </svg>
  );
}

/** Brand: an identity board — card, chips and a mark. */
export function BrandPageArt() {
  return (
    <svg className="pa" viewBox="0 0 400 400" aria-hidden="true" focusable="false">
      <g className="pa-pop" style={delay(120)}>
        <rect className="pa-fill-bright pa-stroke" x="30" y="56" width="220" height="132" rx="14" />
        <circle className="pa-fill-ink" cx="76" cy="98" r="20" />
        <rect className="pa-fill-primary" x="88" y="86" width="26" height="26" rx="6" />
        <line className="pa-soft" x1="56" y1="150" x2="148" y2="150" strokeWidth={6} />
        <line className="pa-soft" x1="56" y1="168" x2="112" y2="168" />
      </g>

      <g className="pa-pop" style={delay(320)}>
        <rect className="pa-fill-ink" x="278" y="56" width="96" height="96" rx="48" />
        <path className="pa-fill-bright" d="M318 74l14 30 32 4-24 22 6 32-28-16-28 16 6-32-24-22 32-4z" />
      </g>

      <g>
        <rect className="pa-fill-primary pa-pop" x="30" y="216" width="72" height="72" rx="12" style={delay(480)} />
        <rect className="pa-fill-soft pa-pop" x="116" y="216" width="72" height="72" rx="12" style={delay(540)} />
        <rect className="pa-fill-ink pa-pop" x="202" y="216" width="72" height="72" rx="12" style={delay(600)} />
        <rect className="pa-stroke pa-pop" x="288" y="216" width="72" height="72" rx="12" style={delay(660)} />
      </g>

      <g className="pa-pop" style={delay(760)}>
        <text className="pa-display" x="30" y="360">
          Aa
        </text>
        <line className="pa-soft" x1="140" y1="318" x2="250" y2="318" strokeWidth={6} />
        <line className="pa-soft" x1="140" y1="342" x2="226" y2="342" />
        <line className="pa-soft" x1="140" y1="364" x2="244" y2="364" />
      </g>
    </svg>
  );
}

/** SaaS: an application window with live data. */
export function SaasPageArt() {
  return (
    <svg className="pa" viewBox="0 0 400 400" aria-hidden="true" focusable="false">
      <g className="pa-pop" style={delay(100)}>
        <rect className="pa-fill-bright pa-stroke" x="28" y="56" width="344" height="288" rx="18" />
        <rect className="pa-fill-soft" x="28" y="56" width="96" height="288" rx="18" />
        <rect className="pa-fill-soft" x="104" y="56" width="20" height="288" />
      </g>

      <g className="pa-rise" style={delay(300)}>
        <circle className="pa-fill-primary" cx="56" cy="86" r="9" />
        <line className="pa-soft" x1="76" y1="86" x2="106" y2="86" strokeWidth={5} />
        <line className="pa-soft" x1="44" y1="122" x2="100" y2="122" strokeWidth={5} />
        <line className="pa-soft" x1="44" y1="152" x2="88" y2="152" strokeWidth={5} />
        <line className="pa-soft" x1="44" y1="182" x2="104" y2="182" strokeWidth={5} />
        <line className="pa-soft" x1="44" y1="212" x2="76" y2="212" strokeWidth={5} />
      </g>

      <g className="pa-rise" style={delay(420)}>
        <line className="pa-line" x1="140" y1="92" x2="238" y2="92" strokeWidth={7} />
        <line className="pa-soft" x1="140" y1="112" x2="196" y2="112" />
      </g>

      <g className="pa-pop" style={delay(520)}>
        <rect className="pa-fill-primary" x="290" y="78" width="62" height="26" rx="13" />
        <rect className="pa-stroke" x="290" y="114" width="62" height="26" rx="13" />
      </g>

      <g className="pa-rise" style={delay(640)}>
        <rect className="pa-fill-soft" x="140" y="150" width="212" height="120" rx="10" />
        <line className="pa-soft" x1="152" y1="252" x2="340" y2="252" />
      </g>

      <g>
        <line
          className="pa-line pa-draw"
          x1="152"
          y1="232"
          x2="196"
          y2="196"
          strokeWidth={5}
          style={delay(800)}
        />
        <line
          className="pa-line pa-draw"
          x1="196"
          y1="196"
          x2="240"
          y2="214"
          strokeWidth={5}
          style={delay(880)}
        />
        <line
          className="pa-line pa-draw"
          x1="240"
          y1="214"
          x2="284"
          y2="172"
          strokeWidth={5}
          style={delay(960)}
        />
        <line
          className="pa-line pa-draw"
          x1="284"
          y1="172"
          x2="336"
          y2="186"
          strokeWidth={5}
          style={delay(1040)}
        />
        <circle className="pa-fill-primary pa-pop" cx="336" cy="186" r="8" style={delay(1120)} />
      </g>

      <g className="pa-rise" style={delay(1180)}>
        <rect className="pa-fill-soft" x="140" y="292" width="96" height="12" rx="6" />
        <rect className="pa-fill-soft" x="248" y="292" width="104" height="12" rx="6" />
      </g>
    </svg>
  );
}
