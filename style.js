// Page-er CSS
export const STYLE = `
body{margin:0;background:#04140f}
*{box-sizing:border-box}
button,input{font-family:inherit}
@keyframes fadeUp{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:none}}
@keyframes slideIn{from{opacity:0;transform:translateX(-26px)}to{opacity:1;transform:none}}
@keyframes popIn{0%{opacity:0;transform:scale(.4)}70%{transform:scale(1.12)}100%{opacity:1;transform:scale(1)}}
@keyframes grow{from{transform:scaleX(0)}to{transform:scaleX(1)}}
@keyframes shrink{from{transform:scaleX(1)}to{transform:scaleX(0)}}
@keyframes draw{from{stroke-dashoffset:var(--len,340)}to{stroke-dashoffset:var(--to,0)}}
@keyframes drift{0%,100%{transform:translate(0,0)}50%{transform:translate(30px,-40px)}}
@keyframes drift2{0%,100%{transform:translate(0,0)}50%{transform:translate(-40px,30px)}}
@keyframes floaty{0%,100%{transform:translateY(0)}50%{transform:translateY(-9px)}}
@keyframes pulseRing{0%{transform:scale(.7);opacity:.7}100%{transform:scale(1.6);opacity:0}}
@keyframes sweep{from{top:6%}to{top:94%}}
@keyframes correct{0%,35%{background:rgba(255,255,255,.07);border-color:rgba(255,255,255,.14)}50%,100%{background:rgba(52,211,153,.2);border-color:#34d399}}
@keyframes wrong{0%,60%{background:rgba(255,255,255,.07);border-color:rgba(255,255,255,.14)}75%,100%{background:rgba(251,113,133,.14);border-color:rgba(251,113,133,.5)}}
@keyframes checkFill{0%{background:transparent;border-color:rgba(255,255,255,.35)}100%{background:#34d399;border-color:#34d399}}
@keyframes knob{from{transform:translateX(0)}to{transform:translateX(18px)}}
@keyframes trackOn{from{background:rgba(255,255,255,.2)}to{background:#22c55e}}
@keyframes shake{0%,100%{transform:rotate(0)}20%{transform:rotate(-12deg)}40%{transform:rotate(10deg)}60%{transform:rotate(-6deg)}80%{transform:rotate(4deg)}}
@keyframes spin{to{transform:rotate(360deg)}}
@keyframes glow{0%,100%{box-shadow:0 0 0 0 rgba(251,191,36,.0)}50%{box-shadow:0 0 28px 2px rgba(251,191,36,.35)}}
@keyframes blink{0%,100%{opacity:1}50%{opacity:.25}}
@keyframes shimmer{0%{transform:translateX(-120%) skewX(-20deg)}60%,100%{transform:translateX(320%) skewX(-20deg)}}
@keyframes dlArrow{0%,100%{transform:translateY(-2px)}50%{transform:translateY(3px)}}
@keyframes borderFlow{to{background-position:260px 0}}
@keyframes btnPulse{0%{box-shadow:0 5px 0 #0f4a26,0 16px 34px rgba(22,163,74,.45),0 0 0 0 rgba(74,222,128,.55)}100%{box-shadow:0 5px 0 #0f4a26,0 16px 34px rgba(22,163,74,.45),0 0 0 18px rgba(74,222,128,0)}}
.cta2{animation:btnPulse 2.4s ease-out infinite;transition:transform .15s}
.cta2:hover{transform:translateY(-2px)}
.cta2:active{transform:translateY(4px);animation:none;box-shadow:0 1px 0 #0f4a26}
.cta2 .arr,.gbtn2 .arr{transition:transform .25s}
.cta2:hover .arr,.gbtn2:hover .arr{transform:translateX(4px)}
.gb2{transition:transform .2s}
.gb2:hover{transform:translateY(-2px)}
.cta2:focus-visible,.gbtn2:focus-visible{outline:3px solid #fbbf24;outline-offset:3px}
@media (max-width:1180px){
.lcol{padding:26px 18px 26px 26px !important;gap:16px !important}
.rcol{flex-basis:380px !important;padding:26px 22px 26px 4px !important;min-height:0 !important}
.lcol h1{font-size:34px !important}
.lcol p{font-size:15px !important}
.tabbtn{padding:8px 2px 9px !important;min-height:56px !important;font-size:10.5px !important;gap:5px !important;border-radius:11px !important}
.tabbtn svg{width:18px !important;height:18px !important}
.stagebox{height:380px !important}
.stagebox .pad{padding:16px 16px !important}
}
@media (max-width:959px){
.lcol{padding:24px 18px 8px !important}
.rcol{flex:1 1 100% !important;padding:8px 18px 36px !important;min-height:0 !important}
.rcol>div{max-width:none !important}
.lcol h1{font-size:32px !important}
.lcol>div{max-width:none !important}
}
@media (max-width:560px){
.tabs{grid-template-columns:repeat(3,minmax(0,1fr)) !important}
.tabbtn{font-size:12px !important;min-height:62px !important}
.stagebox{height:580px !important}
.pad .panel>div{flex-direction:column !important}
.pad div[style*="repeat(2,minmax"]{grid-template-columns:1fr !important}
}
@media (min-width:561px) and (orientation:portrait){
.root{min-height:100vh !important}
.lcol{flex:1 1 100% !important;padding:56px 56px 20px !important;gap:30px !important}
.lcol>div{max-width:none !important}
.lcol h1{font-size:64px !important}
.lcol p{font-size:20px !important}
.rcol{flex:1 1 100% !important;padding:10px 56px 70px !important;min-height:0 !important}
.rcol>div{max-width:none !important;min-height:420px}
.stagebox{height:540px !important}
.stagebox .pad{padding:26px 32px !important}
.tabbtn{min-height:88px !important;font-size:15px !important;gap:9px !important}
.tabbtn svg{width:26px !important;height:26px !important}
.tabs{gap:14px !important}
}
.dl4{transition:transform .25s}
.dl4:hover{transform:scale(1.04)}
.dl4:focus-visible{outline:3px solid #fbbf24;outline-offset:4px;border-radius:24px}
.dl2{transition:transform .2s,box-shadow .2s}
.dl2:hover{transform:translateY(-2px);box-shadow:0 12px 30px rgba(251,191,36,.28)}
.dl2:focus-visible{outline:3px solid #fff;outline-offset:3px}
.dl{transition:transform .2s}
.dl:hover{transform:translateY(-2px)}
.dl:focus-visible{outline:3px solid #fbbf24;outline-offset:3px}
.fx{animation:fadeUp .7s cubic-bezier(.2,.7,.2,1) both}
.si{animation:slideIn .6s cubic-bezier(.2,.7,.2,1) both}
.pop{animation:popIn .55s cubic-bezier(.2,.7,.2,1) both}
.bar{transform-origin:left center;animation:grow 1.6s cubic-bezier(.3,.7,.2,1) both}
.fl{animation:floaty 5s ease-in-out infinite}
.orb1{animation:drift 14s ease-in-out infinite}
.orb2{animation:drift2 17s ease-in-out infinite}
.tabbtn{transition:background .25s,border-color .25s,transform .25s}
.tabbtn:hover{background:rgba(255,255,255,.1);transform:translateY(-2px)}
.tabbtn:focus-visible,.cta:focus-visible,.gbtn:focus-visible,.eye:focus-visible,.inp:focus-visible,.lnk:focus-visible{outline:3px solid #fbbf24;outline-offset:2px}
.cta{transition:transform .2s,box-shadow .2s,background .2s}
.cta:hover{transform:translateY(-2px);box-shadow:0 12px 30px rgba(22,163,74,.5);background:#136f37}
.gbtn{transition:transform .2s,box-shadow .2s}
.gbtn:hover{transform:translateY(-2px);box-shadow:0 10px 26px rgba(0,0,0,.35)}
.inp{transition:border-color .2s,background .2s}
.inp:focus{border-color:#4ade80;background:rgba(255,255,255,.1)}
.inp::placeholder{color:#8fb5a0}
.lnk{color:#86efac;text-decoration:none}
.lnk:hover{text-decoration:underline}
@media (prefers-reduced-motion:reduce){*{animation-duration:.01ms !important;animation-iteration-count:1 !important;transition:none !important}}
.panel{height:100%}
.tabbtn{background:rgba(255,255,255,.06)}
.tabbtn svg{stroke:#d1fae5}
.tabbtn.on{background:rgba(34,197,94,.35)}
.tabbtn.on svg{stroke:#fcd34d}
[hidden]{display:none !important}
@media (max-width:560px){.panel[data-k="countdown"] [style*="font-size:44px"]{font-size:30px !important}}

`;
