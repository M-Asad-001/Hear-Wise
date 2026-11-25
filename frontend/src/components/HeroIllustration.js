import { useId } from 'react';

/** A self-contained, responsive SVG illustration. Requires React 18+. */
export default function HeroIllustration({
  size = 500,
  className = '',
  title = 'A young woman peacefully listening through blue headphones',
  decorative = false,
}) {
  const instanceId = useId();
  const id = (name) => `hearwise-${instanceId}-${name}`;
  const paint = (name) => `url(#${id(name)})`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 600 650"
      width="600"
      height="650"
      className={className}
      role={decorative ? undefined : 'img'}
      aria-hidden={decorative ? true : undefined}
      aria-labelledby={decorative ? undefined : id('title')}
      focusable="false"
      style={{
        display: 'block',
        width: '100%',
        height: 'auto',
        maxWidth: size,
      }}
    >
      {!decorative && <title id={id('title')}>{title}</title>}

      <style>{`
        @keyframes hw-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-7px); } }
        @keyframes hw-wave { 0%,100% { opacity: .3; } 50% { opacity: 1; } }
        @keyframes hw-sparkle { 0%,100% { opacity: .35; transform: scale(.85); } 50% { opacity: 1; transform: scale(1.12); } }
        @keyframes hw-halo { 0%,100% { opacity: .85; } 50% { opacity: 1; } }
        @keyframes hw-shadow { 0%,100% { transform: scaleX(1); opacity: .17; } 50% { transform: scaleX(.94); opacity: .12; } }
        .hw-person { animation: hw-float 5s ease-in-out infinite; }
        .hw-wave path { animation: hw-wave 2.4s ease-in-out infinite; }
        @keyframes hw-wave-outer { 0%,100% { opacity: .15; } 50% { opacity: .55; } }
        .hw-wave path:nth-child(even) { animation-name: hw-wave-outer; animation-delay: .4s; }
        .hw-sparkle { transform-box: fill-box; transform-origin: center; animation: hw-sparkle 3.5s ease-in-out infinite; }
        .hw-sparkle:nth-child(even) { animation-delay: -.9s; }
        .hw-halo { animation: hw-halo 5s ease-in-out infinite; }
        .hw-shadow { transform-box: fill-box; transform-origin: center; animation: hw-shadow 5s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .hw-person, .hw-wave path, .hw-sparkle, .hw-halo, .hw-shadow { animation: none !important; }
        }

        @keyframes hw-head-sway { 0%,100% { transform: translateX(-3px) rotate(-3deg); } 50% { transform: translateX(3px) rotate(3deg); } }
        @keyframes hw-breath { 0%,100% { transform: scale(1); } 50% { transform: scale(1.015,1.009); } }
        @keyframes hw-hair-sway { 0%,100% { transform: rotate(-1deg); } 50% { transform: rotate(1deg); } }
        @keyframes hw-open { 0%,30%,36%,70%,100% { opacity: 0; } 40%,65% { opacity: 1; } }
        @keyframes hw-close { 0%,30%,36%,70%,100% { opacity: 1; } 40%,65% { opacity: 0; } }
        @keyframes hw-smile { 0%,100% { transform: scaleX(1); } 50% { transform: scaleX(1.08); } }
        @keyframes hw-ring { 0% { opacity: .65; transform: scale(.75); } 100% { opacity: 0; transform: scale(1.65); } }
        @keyframes hw-note { 0% { opacity: 0; transform: translateY(12px) rotate(-8deg); } 20%,65% { opacity: .85; } 100% { opacity: 0; transform: translateY(-55px) rotate(10deg); } }
        @keyframes hw-meter { 0%,100% { transform: scaleY(.3); } 50% { transform: scaleY(1); } }
        .hw-head { transform-origin: 300px 375px; animation: hw-head-sway 5s ease-in-out infinite; }
        .hw-breathe { transform-origin: 300px 610px; animation: hw-breath 3.5s ease-in-out infinite; }
        .hw-hair { transform-origin: 300px 280px; animation: hw-hair-sway 5s ease-in-out infinite; }
        .hw-earring-left,.hw-earring-right { animation: hw-earring-swing 2.5s ease-in-out infinite; }
        .hw-earring-left { transform-origin: 228px 329px; }
        .hw-earring-right { transform-origin: 374px 329px; animation-delay: -.5s; }
        @keyframes hw-earring-swing { 0%,100% { transform: rotate(-9deg); } 50% { transform: rotate(9deg); } }
        .hw-smile { transform-box: fill-box; transform-origin: center; animation: hw-smile 5s ease-in-out infinite; }
        .hw-open-eyes { opacity: 0; animation: hw-open 9s linear infinite; }
        .hw-closed-eyes { animation: hw-close 9s linear infinite; }
        .hw-led { animation: hw-wave 1.5s ease-in-out infinite; }
        .hw-ring { transform-box: fill-box; transform-origin: center; animation: hw-ring 2.8s ease-out infinite; }
        .hw-note { transform-box: fill-box; transform-origin: center; animation: hw-note 4s ease-in-out infinite; }
        .hw-meter { transform-box: fill-box; transform-origin: center; animation: hw-meter .9s ease-in-out infinite; }
        @keyframes hw-blob-drift { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(8px,-10px) scale(1.045); } }
        .hw-blob { transform-box: fill-box; transform-origin: center; animation: hw-blob-drift 9s ease-in-out infinite; }
        .hw-wave path { transform-box: fill-box; transform-origin: center; animation: hw-wave-expand 2.2s ease-in-out infinite; }
        .hw-wave path:nth-child(even) { animation-name: hw-wave-expand; animation-delay: -.65s; }
        @keyframes hw-wave-expand { 0%,100% { transform: scale(.85); opacity: .25; } 50% { transform: scale(1.12); opacity: .95; } }
        @media (prefers-reduced-motion: reduce) {
          .hw-blob,.hw-wave path { animation: none !important; }
          .hw-head,.hw-breathe,.hw-hair,.hw-earring-left,.hw-earring-right,.hw-smile,.hw-open-eyes,.hw-closed-eyes,.hw-led,.hw-ring,.hw-note,.hw-meter { animation: none !important; }
          .hw-ring,.hw-note { opacity: 0; }
        }
      `}</style>
      <defs>
        <linearGradient
          id={id('halo')}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#EAF1FC" />
          <stop offset="55%" stopColor="#F0F4FC" />
          <stop offset="100%" stopColor="#FAFCFE" />
        </linearGradient>

        <radialGradient
          id={id('light')}
          cx="38%"
          cy="28%"
          r="75%"
        >
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
        </radialGradient>

        <linearGradient
          id={id('hair')}
          x1="10%"
          y1="0%"
          x2="90%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#263143" />
          <stop offset="48%" stopColor="#111B2D" />
          <stop offset="100%" stopColor="#354052" />
        </linearGradient>

        <linearGradient
          id={id('hairLight')}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#96757A" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#96757A" stopOpacity="0" />
        </linearGradient>

        <linearGradient
          id={id('skin')}
          x1="15%"
          y1="15%"
          x2="95%"
          y2="90%"
        >
          <stop offset="0%" stopColor="#F8DCCC" />
          <stop offset="52%" stopColor="#F1C6B4" />
          <stop offset="100%" stopColor="#DEAA99" />
        </linearGradient>

        <linearGradient
          id={id('neck')}
          x1="0%"
          y1="0%"
          x2="85%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#CA9183" />
          <stop offset="55%" stopColor="#E8B8A6" />
          <stop offset="100%" stopColor="#F4D1BE" />
        </linearGradient>

        <radialGradient id={id('blush')}>
          <stop offset="0%" stopColor="#CC7881" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#CC7881" stopOpacity="0" />
        </radialGradient>

        <linearGradient
          id={id('blazer')}
          x1="10%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#FFFEFB" />
          <stop offset="55%" stopColor="#F3F0EB" />
          <stop offset="100%" stopColor="#E1DEE3" />
        </linearGradient>

        <linearGradient
          id={id('top')}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#C5B5CC" />
          <stop offset="100%" stopColor="#A293B3" />
        </linearGradient>

        <linearGradient
          id={id('headphones')}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#78B5FF" />
          <stop offset="50%" stopColor="#428DF5" />
          <stop offset="100%" stopColor="#2164DB" />
        </linearGradient>

        <linearGradient
          id={id('earcup')}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="85%"
        >
          <stop offset="0%" stopColor="#BBDFFF" />
          <stop offset="100%" stopColor="#6CAAF5" />
        </linearGradient>

        <linearGradient
          id={id('gold')}
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#E7CF9B" />
          <stop offset="100%" stopColor="#AD895B" />
        </linearGradient>
      </defs>

      {/* Reference-inspired pastel background */}
      <rect width="600" height="650" rx="24" fill={paint('halo')} />
      <g className="hw-blob" style={{ animationDelay: '-2s' }}><ellipse cx="315" cy="280" rx="236" ry="247" fill="#B9D9FC" opacity=".76" /></g>
      <g className="hw-blob" style={{ animationDelay: '-4s' }}><circle cx="180" cy="145" r="105" fill="#FFF0B5" opacity=".65" /></g>
      <g className="hw-blob" style={{ animationDelay: '-1s' }}><circle cx="493" cy="145" r="84" fill="#F4C6E4" opacity=".70" /></g>
      <g className="hw-blob" style={{ animationDelay: '-6s' }}><ellipse cx="149" cy="440" rx="132" ry="152" fill="#A9EEDC" opacity=".76" /></g>
      <g className="hw-blob" style={{ animationDelay: '-3s' }}><ellipse cx="466" cy="421" rx="127" ry="156" fill="#D5B5FA" opacity=".76" /></g>
      <ellipse className="hw-halo" cx="300" cy="300" rx="230" ry="260" fill={paint('light')} opacity=".35" />
      {[[145, 200, '#BD87F5'], [470, 80, '#F9BF36'], [514, 430, '#F9BF36'], [75, 345, '#F9BF36'], [560, 335, '#35CFA4']].map(([x, y, c], i) => (
        <g key={i} transform={`translate(${x} ${y})`}><path className="hw-sparkle" style={{ animationDelay: `${-i * .65}s` }} d="M0 -15 L4 -4 L15 0 L4 4 L0 15 L-4 4 L-15 0 L-4 -4Z" fill={c} /></g>
      ))}
      {[[171, 94, '#8CE8C8'], [490, 110, '#E779B9'], [102, 395, '#69A9F8'], [535, 280, '#C6A9F5']].map(([x, y, c], i) => (<circle key={i} className="hw-sparkle" cx={x} cy={y} r={i === 0 ? 9 : 6} fill={c} />))}
      <ellipse
        className="hw-shadow"
        cx="303"
        cy="611"
        rx="169"
        ry="12"
        fill="#C7C3D7"
        opacity="0.17"
      />

      {/* Subtle listening accents */}
      <g className="hw-wave"
        fill="none"
        stroke="#788BF5"
        strokeWidth="2.5"
        strokeLinecap="round"
      >
        <path d="M149 276Q132 297 149 318" opacity="0.7" />
        <path d="M134 266Q110 297 134 328" opacity="0.35" />
        <path d="M453 275Q470 297 453 319" opacity="0.7" />
        <path d="M469 264Q495 297 469 330" opacity="0.35" />
      </g>

      <g
        fill="none"
        stroke="#B8A3BA"
        strokeWidth="1.8"
        strokeLinecap="round"
      >
        <path className="hw-sparkle" d="M468 155v16m-8-8h16" />
        <path className="hw-sparkle" d="M117 424v12m-6-6h12" />
      </g>

      <circle className="hw-sparkle" cx="132" cy="174" r="5" fill="#DAB4B7" />
      <circle className="hw-sparkle" cx="507" cy="400" r="4" fill="#9FB5CF" />
      <circle
        className="hw-sparkle"
        cx="457"
        cy="452"
        r="7"
        fill="none"
        stroke="#D2C6DD"
        strokeWidth="1.8"
      />

      {/* Animated audio visualizer and floating musical notes */}
      <g fill="none" stroke="#788BF5" strokeWidth="1.6">
        <circle className="hw-ring" cx="200" cy="289" r="39" />
        <circle className="hw-ring" cx="400" cy="289" r="39" style={{ animationDelay: '-1.4s' }} />
      </g>
      <g fill="#428DF5" fontSize="25" fontFamily="Arial, sans-serif">
        <text fill="#F3B83D" className="hw-note" x="105" y="250">♪</text>
        <text fill="#B570F0" className="hw-note" x="480" y="230" style={{ animationDelay: '-1.5s' }}>♫</text>
        <text fill="#28BFA1" className="hw-note" x="450" y="405" style={{ animationDelay: '-2.7s' }}>♪</text>
      </g>
      <g fill="#788BF5" opacity="0.75">
        {[18, 32, 48, 28, 42, 22, 34].map((height, i) => (
          <rect key={i} className="hw-meter" x={91 + i * 9} y={370 - height / 2} width="5" height={height} rx="2.5" style={{ animationDelay: `${i * -0.13}s` }} />
        ))}
      </g>
      <g className="hw-person">
        {/* Hair behind the shoulders */}
        <path
          d="M188 252C174 199 199 141 250 116C293 94 345 104 380 142C415 179 414 232 413 283C412 331 410 370 424 411C443 455 433 489 406 500C382 510 362 491 347 475L252 479C235 505 208 510 187 496C162 479 173 445 183 409C195 367 180 326 188 252Z"
          fill={paint('hair')}
        />

        <path
          d="M210 227C190 309 213 353 199 415C189 451 186 474 205 488C174 473 188 439 190 411C205 339 180 284 210 227Z"
          fill={paint('hairLight')}
        />

        <path
          d="M386 223C408 301 385 355 405 420C416 455 415 479 399 490C432 478 414 436 412 413C394 345 422 281 386 223Z"
          fill={paint('hairLight')}
        />

        {/* Neck */}
        <path
          d="M274 365C279 390 278 410 260 429C279 451 326 452 346 430C329 413 326 389 333 365Z"
          fill={paint('neck')}
        />

        <path
          d="M278 383Q300 406 329 383L328 396Q301 417 278 397Z"
          fill="#AF7C75"
          opacity="0.14"
        />

        <g className="hw-breathe">
          {/* Tailored ivory blazer */}
          <path
            d="M132 608L143 506C147 474 176 454 220 443L263 426C280 439 322 439 339 426L382 443C426 454 451 479 458 514L470 608C377 629 231 629 132 608Z"
            fill={paint('blazer')}
            stroke="#D8D5DE"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />

          {/* Covered lavender top */}
          <path
            d="M264 423Q300 439 336 423L352 614Q300 622 248 615Z"
            fill={paint('top')}
          />

          <path
            d="M268 422Q300 435 332 422L336 438Q300 450 264 438Z"
            fill="#CBBED2"
          />

          <path
            d="M269 437Q300 448 332 437"
            fill="none"
            stroke="#9587A6"
            strokeWidth="1"
            opacity="0.45"
          />

          {/* Blazer lapels */}
          <path
            d="M257 431L230 439L219 478L248 476L236 500L291 559L272 456Z"
            fill="#FFFCF7"
            stroke="#DCD7DB"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />

          <path
            d="M343 431L372 439L383 479L353 476L365 500L307 559L329 456Z"
            fill="#FCF9F4"
            stroke="#DCD7DB"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />

          {/* Seams and pocket */}
          <path
            d="M291 559L300 619M181 503Q172 549 171 605M422 505Q433 550 435 605"
            fill="none"
            stroke="#D3CED6"
            strokeWidth="1.3"
            strokeLinecap="round"
          />

          <path
            d="M375 547L416 552L414 559L374 554Z"
            fill="#E1DBE2"
          />

          <path
            d="M375 547L416 552"
            stroke="#FCFAF7"
            strokeWidth="2"
          />

          <circle
            cx="318"
            cy="582"
            r="4.5"
            fill={paint('gold')}
          />
          <circle cx="318" cy="582" r="1.6" fill="#F4EDDF" />

        </g>
        <g className="hw-hair">
          {/* Hair resting over the blazer */}
          <path
            d="M204 280C186 326 200 377 189 418C179 451 185 477 210 485C227 491 241 481 246 468C225 475 214 459 221 438C235 392 225 350 233 304Z"
            fill={paint('hair')}
          />

          <path
            d="M387 280C405 323 391 373 407 419C419 451 414 477 392 486C376 493 362 483 357 469C377 476 386 460 379 439C364 393 374 350 367 305Z"
            fill={paint('hair')}
          />

          <g
            fill="none"
            stroke="#A17C82"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.22"
          >
            <path d="M208 328C205 373 214 395 203 434C196 457 203 472 215 475" />
            <path d="M387 332C390 371 380 401 394 436C401 457 395 471 385 476" />
          </g>

        </g>
        <g className="hw-head">
          {/* Ears */}
          <ellipse
            cx="224"
            cy="292"
            rx="15"
            ry="28"
            fill="#DDA592"
          />
          <ellipse
            cx="376"
            cy="292"
            rx="14"
            ry="27"
            fill="#DDA592"
          />

          {/* Face */}
          <path
            d="M220 232C220 184 250 163 298 162C345 162 376 192 376 239L370 292C367 332 341 373 303 388C269 381 241 349 228 313C222 293 219 261 220 232Z"
            fill={paint('skin')}
          />

          <path
            d="M234 264C232 305 250 347 278 366C245 350 230 319 226 287Z"
            fill="#FFFFFF"
            opacity="0.15"
          />

          <ellipse
            cx="249"
            cy="316"
            rx="23"
            ry="16"
            fill={paint('blush')}
          />
          <ellipse
            cx="350"
            cy="315"
            rx="22"
            ry="15"
            fill={paint('blush')}
          />

          {/* Soft eyebrows */}
          <path
            d="M243 254Q258 244 278 251M325 251Q341 245 354 252"
            fill="none"
            stroke="#5F4448"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Eyes gently open and close */}
          <g className="hw-closed-eyes">
            {/* Relaxed closed eyes */}
            <path
              d="M247 275Q262 284 277 275M325 275Q339 283 353 274"
              fill="none"
              stroke="#4F3941"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            <path
              d="M248 276L243 272M352 275L357 271"
              fill="none"
              stroke="#4F3941"
              strokeWidth="1.8"
              strokeLinecap="round"
            />

          </g>
          <g className="hw-open-eyes">
            <path d="M247 275Q262 263 277 275Q262 287 247 275ZM325 275Q339 263 353 274Q339 286 325 275Z" fill="#FFF9F4" stroke="#4F3941" strokeWidth="1.5" />
            <circle cx="262" cy="275" r="5" fill="#60464A" />
            <circle cx="339" cy="275" r="5" fill="#60464A" />
            <circle cx="260" cy="273" r="1.5" fill="white" />
            <circle cx="337" cy="273" r="1.5" fill="white" />
          </g>
          {/* Nose */}
          <path
            d="M301 281C301 293 295 306 298 311Q303 315 309 311"
            fill="none"
            stroke="#B77D72"
            strokeWidth="1.7"
            strokeLinecap="round"
          />

          <path
            d="M306 291L307 302"
            stroke="#FFEBDD"
            strokeWidth="2.6"
            strokeLinecap="round"
            opacity="0.6"
          />

          <g className="hw-smile">
            {/* Subtle rose smile */}
            <path
              d="M283 342C291 336 295 338 301 340C306 337 311 338 318 341C310 354 293 355 283 342Z"
              fill="#BF7C80"
            />

            <path
              d="M286 343Q302 347 315 342"
              fill="none"
              stroke="#8F5863"
              strokeWidth="1.2"
              strokeLinecap="round"
            />

            <path
              d="M296 349Q302 351 308 348"
              fill="none"
              stroke="#EDB3B1"
              strokeWidth="1.5"
              strokeLinecap="round"
            />

          </g>
          {/* Side-swept fringe */}
          <path
            d="M205 250C195 203 210 150 253 128C287 106 328 117 350 134C326 129 298 139 286 165C266 187 238 192 228 224L220 271C212 265 210 256 205 250Z"
            fill={paint('hair')}
          />

          <path
            d="M286 165C299 145 323 137 343 141C376 147 399 174 403 210L395 277L376 302C379 264 369 237 354 218C338 195 310 190 286 165Z"
            fill={paint('hair')}
          />

          <path
            d="M215 218C220 168 251 138 292 132C266 147 264 165 244 183C230 196 220 204 215 218Z"
            fill={paint('hairLight')}
          />

          <path
            d="M308 158C346 151 383 182 389 228C376 197 347 180 308 158Z"
            fill={paint('hairLight')}
          />

          <path
            d="M295 145Q311 133 329 132"
            fill="none"
            stroke="#A58386"
            strokeWidth="1.3"
            opacity="0.4"
            strokeLinecap="round"
          />

          <g className="hw-earrings">
            {/* Minimal gold earrings */}
            <g
              fill="none"
              stroke={paint('gold')}
              strokeWidth="2.8"
            >
              <g className="hw-earring-left"><ellipse
                cx="228"
                cy="337"
                rx="5.5"
                ry="9"
                transform="rotate(-12 228 337)"
              /></g>
              <g className="hw-earring-right"><ellipse
                cx="374"
                cy="337"
                rx="5.5"
                ry="9"
                transform="rotate(12 374 337)"
              /></g>
            </g>

          </g>
          {/* Padded headphone band */}
          <path
            d="M191 265C182 183 220 116 297 113C374 110 415 177 409 262"
            fill="none"
            stroke="#2B70E2"
            strokeWidth="18"
            strokeLinecap="round"
          />

          <path
            d="M191 260C183 182 222 119 297 117C372 114 413 179 409 258"
            fill="none"
            stroke={paint('headphones')}
            strokeWidth="11"
            strokeLinecap="round"
          />

          <path
            d="M212 175C229 142 261 123 297 122C333 121 367 140 387 173"
            fill="none"
            stroke="#E3EAF5"
            strokeWidth="1.8"
            opacity="0.65"
            strokeLinecap="round"
          />

          {/* Left headphone */}
          <g transform="rotate(8 203 289)">
            <rect
              x="208"
              y="249"
              width="20"
              height="78"
              rx="10"
              fill="#4D5B73"
            />
            <rect
              x="179"
              y="241"
              width="43"
              height="96"
              rx="21"
              fill={paint('headphones')}
            />
            <rect
              x="184"
              y="248"
              width="28"
              height="82"
              rx="14"
              fill={paint('earcup')}
            />
            <path
              d="M191 259V306"
              fill="none"
              stroke="#F5F8FC"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.7"
            />
            <path
              d="M216 258V319"
              fill="none"
              stroke="#637FA4"
              strokeWidth="1"
              opacity="0.6"
            />
            <circle className="hw-led" cx="199" cy="315" r="2" fill="#7C94B7" />
          </g>

          {/* Right headphone */}
          <g transform="rotate(-8 399 289)">
            <rect
              x="373"
              y="249"
              width="20"
              height="78"
              rx="10"
              fill="#4D5B73"
            />
            <rect
              x="379"
              y="241"
              width="43"
              height="96"
              rx="21"
              fill={paint('headphones')}
            />
            <rect
              x="389"
              y="248"
              width="28"
              height="82"
              rx="14"
              fill={paint('earcup')}
            />
            <path
              d="M397 259V306"
              fill="none"
              stroke="#F5F8FC"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.7"
            />
            <path
              d="M384 258V319"
              fill="none"
              stroke="#637FA4"
              strokeWidth="1"
              opacity="0.6"
            />
            <circle className="hw-led" cx="404" cy="315" r="2" fill="#7C94B7" />
          </g>
        </g>
      </g>
    </svg>
  );
}