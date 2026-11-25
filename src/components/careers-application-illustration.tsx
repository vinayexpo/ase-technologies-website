export function CareersApplicationIllustration() {
  return (
    <svg
      className="careers-application-illustration mt-8 block w-full max-w-[410px] overflow-visible sm:mt-10 lg:mt-12"
      viewBox="0 0 480 360"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <style>{`
        @keyframes careers-card-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-9px); }
        }
        @keyframes careers-badge-float {
          0%, 100% { transform: translateY(0) rotate(-5deg); }
          50% { transform: translateY(-7px) rotate(-2deg); }
        }
        @keyframes careers-check-float {
          0%, 100% { transform: translateY(0) rotate(4deg); }
          50% { transform: translateY(7px) rotate(1deg); }
        }
        @keyframes careers-sparkle {
          0%, 100% { opacity: .45; transform: scale(.85); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        .careers-art-card { animation: careers-card-float 5s ease-in-out infinite; }
        .careers-art-upload { animation: careers-badge-float 4.2s ease-in-out infinite; }
        .careers-art-check { animation: careers-check-float 4.8s ease-in-out infinite; }
        .careers-art-sparkle { transform-box: fill-box; transform-origin: center; animation: careers-sparkle 2.8s ease-in-out infinite; }
        .careers-art-sparkle-delay { animation-delay: 1.1s; }
        @media (prefers-reduced-motion: reduce) {
          .careers-art-card, .careers-art-upload, .careers-art-check, .careers-art-sparkle { animation: none; }
        }
      `}</style>

      <circle cx="240" cy="180" r="143" fill="#F7F1E3" />
      <circle cx="240" cy="180" r="120" stroke="#E9DFC8" strokeDasharray="3 9" />
      <path
        d="M75 270c28-22 49-20 70-2m192-171c22 8 39 22 51 42"
        stroke="#D8C89F"
        strokeLinecap="round"
        strokeWidth="2"
      />

      <g className="careers-art-card">
        <rect x="145" y="43" width="190" height="270" rx="22" fill="#E9DFC8" opacity=".55" />
        <rect x="137" y="35" width="190" height="270" rx="22" fill="#FFFEFB" stroke="#D8D1C2" strokeWidth="1.5" />
        <rect x="157" y="55" width="52" height="7" rx="3.5" fill="#D9A128" />
        <rect x="157" y="69" width="31" height="4" rx="2" fill="#E5DED0" />

        <circle cx="177" cy="119" r="22" fill="#F7E8BB" />
        <path d="M166 123c0-7 5-12 11-12s11 5 11 12v4h-22v-4Z" fill="#B77436" />
        <circle cx="177" cy="106" r="7" fill="#D99B62" />
        <rect x="210" y="104" width="93" height="7" rx="3.5" fill="#34332F" />
        <rect x="210" y="119" width="69" height="5" rx="2.5" fill="#A4A098" />
        <rect x="210" y="130" width="82" height="5" rx="2.5" fill="#E1DDD4" />

        <rect x="157" y="160" width="150" height="1.5" rx=".75" fill="#E9E4DA" />
        <rect x="157" y="177" width="71" height="5" rx="2.5" fill="#D9A128" />
        <rect x="157" y="189" width="143" height="4" rx="2" fill="#E1DDD4" />
        <rect x="157" y="199" width="126" height="4" rx="2" fill="#E1DDD4" />
        <rect x="157" y="209" width="136" height="4" rx="2" fill="#E1DDD4" />

        <rect x="157" y="230" width="57" height="5" rx="2.5" fill="#D9A128" />
        <rect x="157" y="242" width="143" height="4" rx="2" fill="#E1DDD4" />
        <rect x="157" y="252" width="118" height="4" rx="2" fill="#E1DDD4" />
        <rect x="157" y="272" width="54" height="17" rx="8.5" fill="#F8EBCB" />
        <rect x="165" y="278" width="38" height="5" rx="2.5" fill="#A16A19" />
      </g>

      <g className="careers-art-upload">
        <rect x="55" y="183" width="96" height="88" rx="20" fill="#FFFEFB" stroke="#E5D8B9" strokeWidth="1.5" />
        <circle cx="103" cy="220" r="22" fill="#F8EBCB" />
        <path d="M103 231v-20m0 0-8 8m8-8 8 8" stroke="#9D691C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" />
        <path d="M88 235h30" stroke="#9D691C" strokeLinecap="round" strokeWidth="3" />
        <rect x="80" y="248" width="46" height="5" rx="2.5" fill="#D7D1C6" />
      </g>

      <g className="careers-art-check">
        <rect x="323" y="105" width="102" height="72" rx="18" fill="#FFFEFB" stroke="#E5D8B9" strokeWidth="1.5" />
        <circle cx="350" cy="141" r="15" fill="#E3F0E7" />
        <path d="m343 141 5 5 10-11" stroke="#478366" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" />
        <rect x="373" y="133" width="37" height="5" rx="2.5" fill="#34332F" />
        <rect x="373" y="144" width="27" height="4" rx="2" fill="#D7D1C6" />
      </g>

      <g className="careers-art-sparkle" fill="#D9A128">
        <path d="m365 52 3 8 8 3-8 3-3 8-3-8-8-3 8-3 3-8Z" />
      </g>
      <g className="careers-art-sparkle careers-art-sparkle-delay" fill="#D9A128">
        <path d="m106 103 2.5 6.5 6.5 2.5-6.5 2.5-2.5 6.5-2.5-6.5-6.5-2.5 6.5-2.5 2.5-6.5Z" />
      </g>
      <circle cx="387" cy="232" r="4" fill="#D9A128" opacity=".65" />
      <circle cx="84" cy="148" r="3" fill="#D9A128" opacity=".55" />
    </svg>
  );
}
