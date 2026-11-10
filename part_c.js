// AppLock panel, tabs, download button, script
export const PART_C = `<!-- APPLOCK -->
<div class="panel" data-k="applock" hidden>
<div style="display:flex;gap:22px;height:100%">
<div style="flex:1.2;display:flex;flex-direction:column;gap:9px;min-width:0">
<div class="si" style="font-size:20px;font-weight:800;margin-bottom:2px">AppLock · Focus mode</div>
<div class="si" style="animation-delay:.15s;display:flex;align-items:center;gap:12px;padding:10px 14px;border-radius:12px;background:rgba(255,255,255,.07)"><span style="width:30px;height:30px;border-radius:9px;background:rgba(96,165,250,.3);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:13px">S</span><span style="flex:1">Social media</span><span style="width:42px;height:24px;border-radius:99px;background:rgba(255,255,255,.2);animation:trackOn .3s 1s both;padding:3px"><span style="display:block;width:18px;height:18px;border-radius:50%;background:#fff;animation:knob .3s 1s both"></span></span></div>
<div class="si" style="animation-delay:.3s;display:flex;align-items:center;gap:12px;padding:10px 14px;border-radius:12px;background:rgba(255,255,255,.07)"><span style="width:30px;height:30px;border-radius:9px;background:rgba(251,113,133,.3);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:13px">G</span><span style="flex:1">Games</span><span style="width:42px;height:24px;border-radius:99px;background:rgba(255,255,255,.2);animation:trackOn .3s 1.8s both;padding:3px"><span style="display:block;width:18px;height:18px;border-radius:50%;background:#fff;animation:knob .3s 1.8s both"></span></span></div>
<div class="si" style="animation-delay:.45s;display:flex;align-items:center;gap:12px;padding:10px 14px;border-radius:12px;background:rgba(255,255,255,.07)"><span style="width:30px;height:30px;border-radius:9px;background:rgba(251,191,36,.3);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:13px">V</span><span style="flex:1">Videos</span><span style="width:42px;height:24px;border-radius:99px;background:rgba(255,255,255,.2);animation:trackOn .3s 2.6s both;padding:3px"><span style="display:block;width:18px;height:18px;border-radius:50%;background:#fff;animation:knob .3s 2.6s both"></span></span></div>
<div class="si" style="animation-delay:.6s;display:flex;align-items:center;gap:12px;padding:10px 14px;border-radius:12px;background:rgba(255,255,255,.07)"><span style="width:30px;height:30px;border-radius:9px;background:rgba(52,211,153,.3);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:13px">C</span><span style="flex:1">Chat apps</span><span style="width:42px;height:24px;border-radius:99px;background:rgba(255,255,255,.2);animation:trackOn .3s 3.4s both;padding:3px"><span style="display:block;width:18px;height:18px;border-radius:50%;background:#fff;animation:knob .3s 3.4s both"></span></span></div>
</div>
<div style="flex:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px">
<div style="position:relative;width:120px;height:120px;display:flex;align-items:center;justify-content:center">
<span aria-hidden="true" style="position:absolute;inset:0;border-radius:50%;border:2px solid #4ade80;animation:pulseRing 2.2s ease-out infinite"></span>
<span aria-hidden="true" style="position:absolute;inset:0;border-radius:50%;border:2px solid #4ade80;animation:pulseRing 2.2s ease-out .9s infinite"></span>
<div style="width:84px;height:84px;border-radius:50%;background:linear-gradient(160deg,#22c55e,#166534);display:flex;align-items:center;justify-content:center;box-shadow:0 10px 30px rgba(22,163,74,.55)"><svg style="animation:shake .8s 3.6s both" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 11h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1z M8 11V8a4 4 0 0 1 8 0v3"></path></svg></div>
</div>
<div style="font-size:26px;font-weight:800;font-variant-numeric:tabular-nums"><span data-live="focus">00</span></div>
<div class="pop" style="animation-delay:3.7s;padding:7px 14px;border-radius:12px;background:rgba(251,113,133,.16);color:#fda4af;font-size:12px;font-weight:700;text-align:center">Locked while you study</div>
</div>
</div>
</div>

</div>
</div>
</div>

<!-- tabs -->
<div class="fx" style="animation-delay:.3s;max-width:760px">
<div class="tabs" role="tablist" aria-label="Features" style="display:grid;grid-template-columns:repeat(6,minmax(0,1fr));gap:10px">
<button type="button" class="tabbtn" role="tab" aria-selected="false" data-i="0" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:7px;min-height:66px;padding:11px 6px 12px;border-radius:14px;border:1px solid rgba(255,255,255,.14);color:#f2fbf6;cursor:pointer;font-size:13px;font-weight:700;overflow:hidden"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z M14 3v5h5 M9 14l2 2 4-4"></path></svg><span>Exam</span><span class="prog" aria-hidden="true" hidden style="position:absolute;left:0;bottom:0;height:3px;width:100%;background:#fbbf24;transform-origin:left;animation:grow 5s linear both"></span></button><button type="button" class="tabbtn" role="tab" aria-selected="false" data-i="1" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:7px;min-height:66px;padding:11px 6px 12px;border-radius:14px;border:1px solid rgba(255,255,255,.14);color:#f2fbf6;cursor:pointer;font-size:13px;font-weight:700;overflow:hidden"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.7.4-1 .9-1 1.7 M12 17h.01"></path></svg><span>Quiz</span><span class="prog" aria-hidden="true" hidden style="position:absolute;left:0;bottom:0;height:3px;width:100%;background:#fbbf24;transform-origin:left;animation:grow 5s linear both"></span></button><button type="button" class="tabbtn" role="tab" aria-selected="false" data-i="2" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:7px;min-height:66px;padding:11px 6px 12px;border-radius:14px;border:1px solid rgba(255,255,255,.14);color:#f2fbf6;cursor:pointer;font-size:13px;font-weight:700;overflow:hidden"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3v4 M16 3v4 M4 9h16 M5 5h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1z M9 15l2 2 4-4"></path></svg><span>Plan</span><span class="prog" aria-hidden="true" hidden style="position:absolute;left:0;bottom:0;height:3px;width:100%;background:#fbbf24;transform-origin:left;animation:grow 5s linear both"></span></button><button type="button" class="tabbtn" role="tab" aria-selected="false" data-i="3" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:7px;min-height:66px;padding:11px 6px 12px;border-radius:14px;border:1px solid rgba(255,255,255,.14);color:#f2fbf6;cursor:pointer;font-size:13px;font-weight:700;overflow:hidden"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z M12 7v5l3 2"></path></svg><span>Routine</span><span class="prog" aria-hidden="true" hidden style="position:absolute;left:0;bottom:0;height:3px;width:100%;background:#fbbf24;transform-origin:left;animation:grow 5s linear both"></span></button><button type="button" class="tabbtn" role="tab" aria-selected="false" data-i="4" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:7px;min-height:66px;padding:11px 6px 12px;border-radius:14px;border:1px solid rgba(255,255,255,.14);color:#f2fbf6;cursor:pointer;font-size:13px;font-weight:700;overflow:hidden"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3h12 M6 21h12 M7 3c0 5 3 6 5 9-2 3-5 4-5 9 M17 3c0 5-3 6-5 9 2 3 5 4 5 9"></path></svg><span>Countdown</span><span class="prog" aria-hidden="true" hidden style="position:absolute;left:0;bottom:0;height:3px;width:100%;background:#fbbf24;transform-origin:left;animation:grow 5s linear both"></span></button><button type="button" class="tabbtn" role="tab" aria-selected="false" data-i="5" style="position:relative;display:flex;flex-direction:column;align-items:center;gap:7px;min-height:66px;padding:11px 6px 12px;border-radius:14px;border:1px solid rgba(255,255,255,.14);color:#f2fbf6;cursor:pointer;font-size:13px;font-weight:700;overflow:hidden"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 11h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1z M8 11V8a4 4 0 0 1 8 0v3"></path></svg><span>AppLock</span><span class="prog" aria-hidden="true" hidden style="position:absolute;left:0;bottom:0;height:3px;width:100%;background:#fbbf24;transform-origin:left;animation:grow 5s linear both"></span></button>
</div>
<div style="margin-top:16px;min-height:52px">
<div style="font-size:18px;font-weight:800"><span id="ctitle">Exam</span></div>
<div style="margin-top:4px;font-size:14px;line-height:1.55;color:#c8e6d4"><span id="cdesc"></span></div>
</div>
</div>

</section>

<!-- RIGHT: login -->
<section class="rcol" style="position:relative;flex:0 1 520px;min-width:0;display:flex;align-items:center;justify-content:center;padding:36px 48px 36px 24px;min-height:720px">
<div class="fx" style="animation-delay:.25s;width:100%;max-width:440px;padding:38px 36px 30px;border-radius:28px;background:linear-gradient(170deg,rgba(255,255,255,.13),rgba(255,255,255,.05));border:1px solid rgba(255,255,255,.18);box-shadow:0 40px 90px rgba(0,0,0,.5);backdrop-filter:blur(20px)">
<a class="dl4" id="dl" href="/download" rel="noopener" aria-label="Download the App" style="display:flex;flex-direction:column;align-items:center;gap:26px;padding:46px 10px;text-decoration:none;color:#fff">
<span aria-hidden="true" style="position:relative;width:120px;height:120px;display:flex;align-items:center;justify-content:center">
<span style="position:absolute;inset:0;border-radius:50%;border:2px solid #fbbf24;animation:pulseRing 2.4s ease-out infinite"></span>
<span style="position:absolute;inset:0;border-radius:50%;border:2px solid #fbbf24;animation:pulseRing 2.4s ease-out .8s infinite"></span>
<span style="position:absolute;inset:0;border-radius:50%;border:2px solid #fbbf24;animation:pulseRing 2.4s ease-out 1.6s infinite"></span>
<span class="fl" style="position:relative;width:104px;height:104px;border-radius:50%;background:linear-gradient(160deg,#fde68a,#fbbf24 55%,#f59e0b);display:flex;align-items:center;justify-content:center;box-shadow:0 14px 40px rgba(251,191,36,.5)">
<svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#2a1a00" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><g style="animation:dlArrow 1.4s ease-in-out infinite"><path d="M12 3v11 M7.5 9.5L12 14l4.5-4.5"></path></g><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"></path></svg>
</span>
</span>
<span id="dltext" style="font-size:32px;font-weight:800;letter-spacing:-.5px;text-align:center">Download the App</span>
<span aria-hidden="true" style="width:180px;height:6px;border-radius:9px;background:rgba(255,255,255,.14);overflow:hidden"><span style="display:block;height:100%;width:100%;border-radius:9px;background:linear-gradient(90deg,#fbbf24,#fde68a);transform-origin:left;animation:grow 2.6s ease-in-out infinite"></span></span>
</a>
</div>
</section>

</div>

<script>
(function(){
var F=[
["exam","study-planner / exam","Exam","Take timed mock exams, track every subject and see your result the moment you finish."],
["quiz","study-planner / quiz","Quiz","Quick questions with instant feedback. Build a streak and remember more."],
["plan","study-planner / plan","Plan","Follow a 30-week or 50-day plan. Tick off tasks and watch your progress fill up."],
["routine","study-planner / routine","Routine","Set your daily blocks from morning to night, with a reminder before each one."],
["countdown","study-planner / countdown","Student time countdown","See exactly how much time is left for your exam, live, down to the second."],
["applock","study-planner / applock","AppLock","Lock distracting apps during study time so your focus stays unbroken."]];
var panels=[].slice.call(document.querySelectorAll('.panel')),tabs=[].slice.call(document.querySelectorAll('.tabbtn'));
var act=0,age=0,tick=0,TARGET=new Date(2027,2,1,9,0,0).getTime();
function pad(n){return String(n).padStart(2,'0')}
function live(){
 var ex=5400-(tick%5400),fs=1499-(tick%1500),df=Math.max(0,Math.floor((TARGET-Date.now())/1000));
 var v={exam:pad(Math.floor(ex/3600))+':'+pad(Math.floor(ex%3600/60))+':'+pad(ex%60),
  d:String(Math.floor(df/86400)),h:pad(Math.floor(df%86400/3600)),m:pad(Math.floor(df%3600/60)),s:pad(df%60),
  focus:pad(Math.floor(fs/60))+':'+pad(fs%60)};
 [].forEach.call(document.querySelectorAll('[data-live]'),function(e){e.textContent=v[e.dataset.live]});
}
function show(i){
 act=i;age=0;
 panels.forEach(function(p){p.hidden=p.dataset.k!==F[i][0]});
 tabs.forEach(function(t,j){var on=j===i;t.classList.toggle('on',on);t.setAttribute('aria-selected',on);var pr=t.querySelector('.prog');pr.hidden=true;if(on){void pr.offsetWidth;pr.hidden=false}});
 document.getElementById('cname').textContent=F[i][1];
 document.getElementById('ctitle').textContent=F[i][2];
 document.getElementById('cdesc').textContent=F[i][3];
 live();
}
tabs.forEach(function(t){t.addEventListener('click',function(){show(+t.dataset.i)})});
show(0);
setInterval(function(){tick++;age++;if(age>=5)show((act+1)%F.length);else live()},1000);
var dl=document.getElementById('dl'),dt=document.getElementById('dltext');
dl.addEventListener('click',function(){dt.textContent='Starting download...';setTimeout(function(){dt.textContent='Download the App'},3500)});
})();
</script>
</body>
</html>
`;
  
