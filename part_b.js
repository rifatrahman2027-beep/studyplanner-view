// Routine ar Countdown panel
export const PART_B = `<!-- ROUTINE -->
<div class="panel" data-k="routine" hidden>
<div style="position:relative;display:flex;flex-direction:column;gap:9px;height:100%">
<div class="si" style="font-size:20px;font-weight:800;margin-bottom:2px">Daily Routine</div>
<div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:9px 16px">
<div class="si" style="animation-delay:.15s;display:flex;align-items:center;gap:12px;padding:11px 14px;border-radius:12px;background:rgba(34,197,94,.2)"><span style="font-size:13px;font-weight:700;color:#86efac;width:48px">06:00</span>Wake up · quick revision</div>
<div class="si" style="animation-delay:.3s;display:flex;align-items:center;gap:12px;padding:11px 14px;border-radius:12px;background:rgba(96,165,250,.2)"><span style="font-size:13px;font-weight:700;color:#93c5fd;width:48px">08:00</span>Physics class</div>
<div class="si" style="animation-delay:.45s;display:flex;align-items:center;gap:12px;padding:11px 14px;border-radius:12px;background:rgba(52,211,153,.18)"><span style="font-size:13px;font-weight:700;color:#6ee7b7;width:48px">11:00</span>Problem practice</div>
<div class="si" style="animation-delay:.6s;display:flex;align-items:center;gap:12px;padding:11px 14px;border-radius:12px;background:rgba(255,255,255,.08)"><span style="font-size:13px;font-weight:700;color:#d1fae5;width:48px">14:00</span>Lunch · rest</div>
<div class="si" style="animation-delay:.75s;display:flex;align-items:center;gap:12px;padding:11px 14px;border-radius:12px;background:rgba(251,191,36,.16)"><span style="font-size:13px;font-weight:700;color:#fcd34d;width:48px">16:00</span>Chemistry study</div>
<div class="si" style="animation-delay:.9s;display:flex;align-items:center;gap:12px;padding:11px 14px;border-radius:12px;background:rgba(251,113,133,.16)"><span style="font-size:13px;font-weight:700;color:#fda4af;width:48px">20:00</span>Mock test</div>
</div>
<div class="fx" style="animation-delay:1.2s;margin-top:4px;display:flex;align-items:center;gap:10px;font-size:13px;color:#c8e6d4"><span class="pop" style="animation-delay:1.3s;padding:5px 12px;border-radius:99px;background:rgba(251,191,36,.16);color:#fcd34d;font-weight:700">Reminder</span>Alarm and notification before every block</div>
<div aria-hidden="true" style="position:absolute;left:-6px;right:-6px;height:2px;background:linear-gradient(90deg,transparent,#fbbf24,transparent);animation:sweep 4.6s linear both;top:6%;opacity:.9"></div>
</div>
</div>

<!-- COUNTDOWN -->
<div class="panel" data-k="countdown" hidden>
<div style="display:flex;flex-direction:column;gap:16px;height:100%;justify-content:center">
<div class="fx" style="display:flex;align-items:center;justify-content:space-between"><div><div style="font-size:12px;font-weight:700;color:#a7c9b6">NEXT EXAM</div><div style="font-size:22px;font-weight:800">Time until the exam</div></div>
<div class="pop" style="animation-delay:1s;display:flex;align-items:center;gap:8px;padding:7px 14px;border-radius:99px;background:rgba(251,191,36,.16);color:#fcd34d;font-size:13px;font-weight:700"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9 M13.7 21a2 2 0 0 1-3.4 0"></path></svg>Reminder on</div></div>
<div style="display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px">
<div class="pop" style="animation-delay:.15s;padding:18px 8px;border-radius:16px;background:rgba(255,255,255,.08);text-align:center"><div style="font-size:44px;font-weight:800;line-height:1;font-variant-numeric:tabular-nums"><span data-live="d">00</span></div><div style="margin-top:8px;font-size:12px;color:#a7c9b6;font-weight:600">DAYS</div></div>
<div class="pop" style="animation-delay:.3s;padding:18px 8px;border-radius:16px;background:rgba(255,255,255,.08);text-align:center"><div style="font-size:44px;font-weight:800;line-height:1;font-variant-numeric:tabular-nums"><span data-live="h">00</span></div><div style="margin-top:8px;font-size:12px;color:#a7c9b6;font-weight:600">HOURS</div></div>
<div class="pop" style="animation-delay:.45s;padding:18px 8px;border-radius:16px;background:rgba(255,255,255,.08);text-align:center"><div style="font-size:44px;font-weight:800;line-height:1;font-variant-numeric:tabular-nums"><span data-live="m">00</span></div><div style="margin-top:8px;font-size:12px;color:#a7c9b6;font-weight:600">MINUTES</div></div>
<div class="pop" style="animation-delay:.6s;padding:18px 8px;border-radius:16px;background:rgba(251,191,36,.16);text-align:center;animation-name:popIn,glow;animation-duration:.55s,2s;animation-iteration-count:1,infinite"><div style="font-size:44px;font-weight:800;line-height:1;color:#fcd34d;font-variant-numeric:tabular-nums"><span data-live="s">00</span></div><div style="margin-top:8px;font-size:12px;color:#fcd34d;font-weight:600">SECONDS</div></div>
</div>
<div class="fx" style="animation-delay:.9s;display:flex;gap:10px;flex-wrap:wrap;font-size:13px;color:#c8e6d4"><span style="padding:6px 12px;border-radius:99px;background:rgba(255,255,255,.08)">Home screen widget</span><span style="padding:6px 12px;border-radius:99px;background:rgba(255,255,255,.08)">Live wallpaper</span><span style="padding:6px 12px;border-radius:99px;background:rgba(255,255,255,.08)">Alarm + vibration</span></div>
</div>
</div>

`;
