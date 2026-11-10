// Study Planner Download Site (Cloudflare Worker)
// Ei file-er sathe lagbe: logo.js, style.js, part_a.js, part_b.js, part_c.js (ekoi repo-te)
//
// Worker -> Settings -> Variables and Secrets:
//   APK_URL    (Secret)  : APK-er asol link
//   APK_TOKEN  (Secret, optional) : private GitHub repo hole GitHub token
//   APK_NAME   (Text, optional)   : save hobe je naam e (default StudyPlanner.apk)
// Variable add korar por abar Deploy koro.
//
// Asol APK link kothao dekha jay na. Button shudhu /download e jay,
// ar Worker APK ta stream kore pathay.

import { LOGO } from './logo.js';
import { STYLE } from './style.js';
import { PART_A } from './part_a.js';
import { PART_B } from './part_b.js';
import { PART_C } from './part_c.js';

const PAGE_HEADERS = {
  'Content-Type': 'text/html; charset=utf-8',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'no-referrer',
};

const SECURITY = {
  'Cache-Control': 'no-store',
  'X-Content-Type-Options': 'nosniff',
  'Referrer-Policy': 'no-referrer',
};

async function fetchApk(env) {
  const base = {
    'User-Agent': 'Mozilla/5.0 (compatible; StudyPlannerDownload/1.0)',
    Accept: 'application/octet-stream,*/*',
  };
  const first = { ...base };
  if (env.APK_TOKEN) first.Authorization = 'Bearer ' + env.APK_TOKEN;

  // Redirect ta nijera dhori, jeno token onno host-e na jay (GitHub private asset -> storage link)
  let res = await fetch(env.APK_URL, { headers: first, redirect: 'manual' });
  let hops = 0;
  while (res.status >= 300 && res.status < 400 && res.headers.get('location') && hops < 5) {
    const next = new URL(res.headers.get('location'), env.APK_URL).toString();
    res = await fetch(next, { headers: base, redirect: 'manual' });
    hops++;
  }
  return res;
}

async function handleDownload(request, env) {
  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return new Response('Method not allowed', { status: 405, headers: { Allow: 'GET, HEAD', ...SECURITY } });
  }
  if (!env.APK_URL) {
    return new Response('Download is not configured yet.', { status: 503, headers: SECURITY });
  }

  let upstream;
  try {
    upstream = await fetchApk(env);
  } catch (e) {
    return new Response('Download is temporarily unavailable.', { status: 502, headers: SECURITY });
  }
  if (!upstream.ok || !upstream.body) {
    return new Response('Download is temporarily unavailable.', { status: 502, headers: SECURITY });
  }

  const name = String(env.APK_NAME || 'StudyPlanner.apk').replace(/[^A-Za-z0-9._-]/g, '_');
  const headers = new Headers(SECURITY);
  headers.set('Content-Type', 'application/vnd.android.package-archive');
  headers.set('Content-Disposition', 'attachment; filename="' + name + '"');
  const len = upstream.headers.get('content-length');
  if (len) headers.set('Content-Length', len);

  return new Response(request.method === 'HEAD' ? null : upstream.body, { status: 200, headers });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === '/download') return handleDownload(request, env);
    if (url.pathname === '/' || url.pathname === '/index.html') {
      if (request.method !== 'GET' && request.method !== 'HEAD') {
        return new Response('Method not allowed', { status: 405, headers: { Allow: 'GET, HEAD' } });
      }
      return new Response(request.method === 'HEAD' ? null : HTML, { status: 200, headers: PAGE_HEADERS });
    }
    return new Response('Not found', { status: 404 });
  },
};

const HEAD = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Study Planner</title>
<meta name="description" content="Exam, quiz, plan, routine, countdown and AppLock in one app.">
<meta name="theme-color" content="#04140f">
<link rel="icon" type="image/png" href="${LOGO}">
<link rel="apple-touch-icon" href="${LOGO}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;family=Hind+Siliguri:wght@400;500;600;700&amp;display=swap" rel="stylesheet">
<style>`;

const HTML = HEAD + STYLE + PART_A + PART_B + PART_C;
  
