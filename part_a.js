// Page-er upor-er ongsho (header, headline, Exam/Quiz/Plan panel)
import { LOGO } from './logo.js';
export const PART_A = `</style>
</head>
<body>
<div class="root" style="position:relative;min-height:min(100vh,960px);width:100%;background:#04140f;color:#f2fbf6;font-family:'Plus Jakarta Sans','Hind Siliguri',system-ui,sans-serif;overflow:hidden;display:flex;flex-wrap:wrap">

<!-- ambient background -->
<div aria-hidden="true" style="position:absolute;inset:0;pointer-events:none;overflow:hidden">
<div class="orb1" style="position:absolute;left:-140px;top:-160px;width:560px;height:560px;border-radius:50%;background:radial-gradient(circle,rgba(22,163,74,.55),rgba(22,163,74,0) 70%)"></div>
<div class="orb2" style="position:absolute;right:-120px;bottom:-180px;width:600px;height:600px;border-radius:50%;background:radial-gradient(circle,rgba(59,130,246,.38),rgba(59,130,246,0) 70%)"></div>
<div class="orb1" style="position:absolute;left:38%;bottom:-120px;width:380px;height:380px;border-radius:50%;background:radial-gradient(circle,rgba(251,191,36,.18),rgba(251,191,36,0) 70%)"></div>
<div style="position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);background-size:56px 56px"></div>
</div>

<!-- LEFT: showcase -->
<section class="lcol" style="position:relative;flex:1 1 440px;min-width:0;padding:36px 48px 32px 64px;display:flex;flex-direction:column;gap:22px;justify-content:center">

<div class="fx" style="display:flex;align-items:center;gap:14px;max-width:760px">
<img src="${LOGO}" alt="Study Planner logo" style="width:52px;height:52px;border-radius:14px;box-shadow:0 8px 24px rgba(22,163,74,.5)">
<div style="font-weight:800;font-size:20px;letter-spacing:.2px">Study Planner</div>
</div>

<div class="fx" style="animation-delay:.1s">
<h1 style="margin:0;font-size:46px;line-height:1.1;font-weight:800;letter-spacing:-1px">Study smarter.<br>Stay <span style="color:#fbbf24">locked in.</span></h1>
<p style="margin:14px 0 0;font-size:17px;line-height:1.6;color:#c8e6d4;max-width:560px">Exam, quiz, plan, routine, countdown ar AppLock — shob ek jaygay. <span style="font-family:'Hind Siliguri',sans-serif">পড়াশোনা হোক গোছানো, মনোযোগ থাকুক অটুট।</span></p>
</div>

<!-- stage -->
<div class="fx" style="animation-delay:.2s;position:relative;max-width:760px">
<div class="fl" aria-hidden="true" style="position:absolute;right:-18px;top:-22px;z-index:3;padding:8px 14px;border-radius:99px;background:#fbbf24;color:#2a1a00;font-size:13px;font-weight:700;box-shadow:0 10px 24px rgba(251,191,36,.35)">Live preview</div>
<div class="stagebox" style="position:relative;height:340px;border-radius:24px;background:linear-gradient(160deg,rgba(255,255,255,.1),rgba(255,255,255,.04));border:1px solid rgba(255,255,255,.14);box-shadow:0 30px 80px rgba(0,0,0,.45);overflow:hidden;backdrop-filter:blur(14px)">
<!-- window bar -->
<div style="height:40px;display:flex;align-items:center;gap:8px;padding:0 18px;border-bottom:1px solid rgba(255,255,255,.08)">
<span style="width:10px;height:10px;border-radius:50%;background:#fb7185"></span><span style="width:10px;height:10px;border-radius:50%;background:#fbbf24"></span><span style="width:10px;height:10px;border-radius:50%;background:#34d399"></span>
<span style="margin-left:12px;font-size:12px;font-weight:600;color:#a7c9b6"><span id="cname">study-planner / exam</span></span>
</div>

<div class="pad" style="position:absolute;left:0;right:0;top:40px;bottom:0;padding:22px 26px">

<!-- EXAM -->
<div class="panel" data-k="exam" hidden>
<div style="display:flex;gap:22px;height:100%">
<div style="flex:1.5;display:flex;flex-direction:column;gap:14px;min-width:0">
<div class="si" style="display:flex;justify-content:space-between;align-items:center">
<div><div style="font-size:12px;color:#a7c9b6;font-weight:600">MOCK EXAM</div><div style="font-size:20px;font-weight:800">Physics · Model Test</div></div>
<div style="display:flex;align-items:center;gap:8px;padding:8px 14px;border-radius:99px;background:rgba(251,191,36,.14);color:#fcd34d;font-weight:700;font-size:15px;font-variant-numeric:tabular-nums"><span style="width:8px;height:8px;border-radius:50%;background:#fbbf24;animation:blink 1s infinite"></span><span data-live="exam">00</span></div>
</div>
<div class="si" style="animation-delay:.15s;padding:14px 16px;border-radius:14px;background:rgba(255,255,255,.07)">
<div style="display:flex;justify-content:space-between;font-size:13px;color:#c8e6d4;margin-bottom:8px"><span>Question 12 of 40</span><span>30%</span></div>
<div style="height:8px;border-radius:9px;background:rgba(255,255,255,.12);overflow:hidden"><div class="bar" style="width:30%;height:100%;border-radius:9px;background:linear-gradient(90deg,#22c55e,#60a5fa);animation-delay:.4s"></div></div>
</div>
<div style="display:flex;flex-direction:column;gap:10px">
<div class="si" style="animation-delay:.3s;display:flex;justify-content:space-between;font-size:13px"><span>Physics</span><span style="color:#c8e6d4">Strong</span></div>
<div style="height:7px;border-radius:9px;background:rgba(255,255,255,.1);overflow:hidden"><div class="bar" style="width:86%;height:100%;background:#34d399;animation-delay:.6s"></div></div>
<div class="si" style="animation-delay:.4s;display:flex;justify-content:space-between;font-size:13px"><span>Chemistry</span><span style="color:#c8e6d4">Improving</span></div>
<div style="height:7px;border-radius:9px;background:rgba(255,255,255,.1);overflow:hidden"><div class="bar" style="width:64%;height:100%;background:#60a5fa;animation-delay:.8s"></div></div>
<div class="si" style="animation-delay:.5s;display:flex;justify-content:space-between;font-size:13px"><span>Math</span><span style="color:#c8e6d4">Needs practice</span></div>
<div style="height:7px;border-radius:9px;background:rgba(255,255,255,.1);overflow:hidden"><div class="bar" style="width:42%;height:100%;background:#fbbf24;animation-delay:1s"></div></div>
</div>
</div>
<div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px">
<div style="position:relative;width:150px;height:150px">
<svg width="150" height="150" viewBox="0 0 150 150" role="img" aria-label="Score ring">
<circle cx="75" cy="75" r="62" fill="none" stroke="rgba(255,255,255,.1)" stroke-width="12"></circle>
<circle cx="75" cy="75" r="62" fill="none" stroke="#4ade80" stroke-width="12" stroke-linecap="round" stroke-dasharray="390" transform="rotate(-90 75 75)" style="--len:390;--to:70;animation:draw 2s .4s cubic-bezier(.3,.7,.2,1) both"></circle>
</svg>
<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center"><div style="font-size:32px;font-weight:800">82%</div><div style="font-size:12px;color:#a7c9b6">Score</div></div>
</div>
<div class="pop" style="animation-delay:1.6s;padding:6px 12px;border-radius:99px;background:rgba(52,211,153,.16);color:#6ee7b7;font-size:12px;font-weight:700">Result ready</div>
</div>
</div>
</div>

<!-- QUIZ -->
<div class="panel" data-k="quiz" hidden>
<div style="display:flex;flex-direction:column;gap:14px;height:100%">
<div style="display:flex;align-items:center;gap:14px">
<div style="font-size:12px;font-weight:700;color:#a7c9b6">QUIZ · Q3</div>
<div style="flex:1;height:6px;border-radius:9px;background:rgba(255,255,255,.1);overflow:hidden"><div style="height:100%;width:100%;background:#fbbf24;transform-origin:left;animation:shrink 5s linear both"></div></div>
<div class="pop" style="animation-delay:2.2s;padding:5px 12px;border-radius:99px;background:rgba(251,191,36,.16);color:#fcd34d;font-size:12px;font-weight:700">Streak 5</div>
</div>
<div class="fx" style="font-size:22px;font-weight:800;line-height:1.3">Which law is given by F = ma?</div>
<div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px">
<div class="si" style="animation-delay:.2s"><div style="display:flex;align-items:center;gap:12px;padding:14px 16px;border-radius:14px;border:1.5px solid rgba(255,255,255,.14);background:rgba(255,255,255,.07);animation:wrong 3.4s both"><b style="width:28px;height:28px;border-radius:8px;background:rgba(255,255,255,.12);display:flex;align-items:center;justify-content:center;font-size:13px">A</b>Newton's first law</div></div>
<div class="si" style="animation-delay:.3s"><div style="display:flex;align-items:center;gap:12px;padding:14px 16px;border-radius:14px;border:1.5px solid #34d399;background:rgba(255,255,255,.07);animation:correct 3.4s both"><b style="width:28px;height:28px;border-radius:8px;background:rgba(255,255,255,.12);display:flex;align-items:center;justify-content:center;font-size:13px">B</b>Newton's second law<svg class="pop" style="animation-delay:1.9s;margin-left:auto" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#34d399" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5 9-10"></path></svg></div></div>
<div class="si" style="animation-delay:.4s"><div style="display:flex;align-items:center;gap:12px;padding:14px 16px;border-radius:14px;border:1.5px solid rgba(255,255,255,.14);background:rgba(255,255,255,.07)"><b style="width:28px;height:28px;border-radius:8px;background:rgba(255,255,255,.12);display:flex;align-items:center;justify-content:center;font-size:13px">C</b>Ohm's law</div></div>
<div class="si" style="animation-delay:.5s"><div style="display:flex;align-items:center;gap:12px;padding:14px 16px;border-radius:14px;border:1.5px solid rgba(255,255,255,.14);background:rgba(255,255,255,.07)"><b style="width:28px;height:28px;border-radius:8px;background:rgba(255,255,255,.12);display:flex;align-items:center;justify-content:center;font-size:13px">D</b>Hooke's law</div></div>
</div>
<div class="fx" style="animation-delay:2.3s;padding:12px 16px;border-radius:14px;background:rgba(52,211,153,.12);color:#a7f3d0;font-size:14px">Correct. Force equals mass times acceleration.</div>
</div>
</div>

<!-- PLAN -->
<div class="panel" data-k="plan" hidden>
<div style="display:flex;gap:22px;height:100%">
<div style="flex:1.6;display:flex;flex-direction:column;gap:10px;min-width:0">
<div class="si" style="display:flex;justify-content:space-between;align-items:baseline"><div style="font-size:20px;font-weight:800">30-Week Plan · Week 4</div><div style="font-size:12px;color:#a7c9b6">Today's tasks</div></div>
<div style="height:8px;border-radius:9px;background:rgba(255,255,255,.12);overflow:hidden"><div class="bar" style="width:100%;height:100%;background:linear-gradient(90deg,#22c55e,#34d399);animation-duration:4.4s;animation-delay:.4s"></div></div>
<div class="si" style="animation-delay:.2s;display:flex;align-items:center;gap:12px;padding:12px 14px;border-radius:12px;background:rgba(255,255,255,.07)"><span style="width:22px;height:22px;border-radius:7px;border:2px solid rgba(255,255,255,.35);animation:checkFill .3s 1s both;display:flex;align-items:center;justify-content:center"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#06281b" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="stroke-dasharray:24;animation:draw .3s 1.1s both;--len:24"><path d="M5 12l5 5 9-10"></path></svg></span>Physics · Chapter 3 notes</div>
<div class="si" style="animation-delay:.3s;display:flex;align-items:center;gap:12px;padding:12px 14px;border-radius:12px;background:rgba(255,255,255,.07)"><span style="width:22px;height:22px;border-radius:7px;border:2px solid rgba(255,255,255,.35);animation:checkFill .3s 2s both;display:flex;align-items:center;justify-content:center"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#06281b" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="stroke-dasharray:24;animation:draw .3s 2.1s both;--len:24"><path d="M5 12l5 5 9-10"></path></svg></span>Chemistry · Organic revision</div>
<div class="si" style="animation-delay:.4s;display:flex;align-items:center;gap:12px;padding:12px 14px;border-radius:12px;background:rgba(255,255,255,.07)"><span style="width:22px;height:22px;border-radius:7px;border:2px solid rgba(255,255,255,.35);animation:checkFill .3s 3s both;display:flex;align-items:center;justify-content:center"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#06281b" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="stroke-dasharray:24;animation:draw .3s 3.1s both;--len:24"><path d="M5 12l5 5 9-10"></path></svg></span>Math · 20 practice problems</div>
<div class="si" style="animation-delay:.5s;display:flex;align-items:center;gap:12px;padding:12px 14px;border-radius:12px;background:rgba(255,255,255,.07)"><span style="width:22px;height:22px;border-radius:7px;border:2px solid rgba(255,255,255,.35);animation:checkFill .3s 4s both;display:flex;align-items:center;justify-content:center"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#06281b" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="stroke-dasharray:24;animation:draw .3s 4.1s both;--len:24"><path d="M5 12l5 5 9-10"></path></svg></span>Biology · Weekly mock test</div>
</div>
<div style="flex:1;display:flex;flex-direction:column;gap:10px;justify-content:center">
<div class="si" style="font-size:12px;font-weight:700;color:#a7c9b6">THIS WEEK</div>
<div style="display:grid;grid-template-columns:repeat(7,minmax(0,1fr));gap:6px">
<div class="pop" style="animation-delay:.3s;aspect-ratio:1;border-radius:9px;background:#34d399"></div>
<div class="pop" style="animation-delay:.4s;aspect-ratio:1;border-radius:9px;background:#34d399"></div>
<div class="pop" style="animation-delay:.5s;aspect-ratio:1;border-radius:9px;background:#34d399"></div>
<div class="pop" style="animation-delay:.6s;aspect-ratio:1;border-radius:9px;background:#22c55e;animation-name:popIn,glow;animation-duration:.55s,2s;animation-iteration-count:1,infinite"></div>
<div class="pop" style="animation-delay:.7s;aspect-ratio:1;border-radius:9px;background:rgba(255,255,255,.12)"></div>
<div class="pop" style="animation-delay:.8s;aspect-ratio:1;border-radius:9px;background:rgba(255,255,255,.12)"></div>
<div class="pop" style="animation-delay:.9s;aspect-ratio:1;border-radius:9px;background:rgba(255,255,255,.12)"></div>
</div>
<div class="fx" style="animation-delay:1s;font-size:13px;color:#c8e6d4;line-height:1.5">Pick a 30-week, 50-day or custom plan and follow it day by day.</div>
</div>
</div>
</div>

`;
  
