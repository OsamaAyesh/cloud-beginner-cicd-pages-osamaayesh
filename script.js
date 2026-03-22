/**
 * script.js — Pipeline Simulation
 * Cloud CI/CD Deployment  |  Osama Ayesh
 */

'use strict';

/* ── Pipeline messages ──────────────────────────────────────────── */
const PIPELINE_STEPS = [
  { type: 'info',    text: 'Workflow triggered on push to main',         delay: 0    },
  { type: 'cmd',     text: 'actions/checkout@v4',                        delay: 600  },
  { type: 'run',     text: 'Setting up runner environment…',             delay: 1200 },
  { type: 'run',     text: 'Checking files…',                            delay: 2000 },
  { type: 'run',     text: 'Validating project structure…',              delay: 2800 },
  { type: 'run',     text: 'Building project…',                          delay: 3700 },
  { type: 'warn',    text: 'No test suite detected — skipping tests.',   delay: 4500 },
  { type: 'run',     text: 'Deploying to GitHub Pages…',                 delay: 5200 },
  { type: 'run',     text: 'Pushing artifacts to gh-pages branch…',      delay: 6100 },
  { type: 'run',     text: 'Verifying live deployment…',                 delay: 7000 },
  { type: 'success', text: 'Deployment موفق ✅  — Site is live!',        delay: 7900 },
];

/* ── DOM refs ───────────────────────────────────────────────────── */
const btn            = document.getElementById('run-pipeline-btn');
const terminal       = document.getElementById('pipeline-output');
const terminalBody   = document.getElementById('terminal-body');

/* ── Helpers ────────────────────────────────────────────────────── */
/**
 * Returns the current time as HH:MM:SS for the terminal timestamp.
 * @returns {string}
 */
function timestamp() {
  return new Date().toLocaleTimeString('en-GB', { hour12: false });
}

/**
 * Creates and appends a single log line to the terminal body.
 * @param {string} type  - CSS modifier (info | run | success | warn | cmd)
 * @param {string} text  - Message text
 */
function appendLog(type, text) {
  const line = document.createElement('div');
  line.className = `log-line log--${type}`;

  const ts  = document.createElement('span');
  ts.className = 'log-timestamp';
  ts.textContent = timestamp();

  const msg = document.createElement('span');
  msg.className = 'log-text';
  msg.textContent = text;

  line.appendChild(ts);
  line.appendChild(msg);
  terminalBody.appendChild(line);

  /* Keep the terminal scrolled to the bottom */
  terminal.scrollTop = terminal.scrollHeight;
}

/**
 * Appends an animated blinking cursor line at the end of the terminal.
 * @returns {HTMLElement} The cursor element so it can be removed later.
 */
function appendCursor() {
  const line = document.createElement('div');
  line.className = 'log-line log--cmd';

  const ts = document.createElement('span');
  ts.className = 'log-timestamp';
  ts.textContent = timestamp();

  const cursor = document.createElement('span');
  cursor.className = 'cursor';

  line.appendChild(ts);
  line.appendChild(cursor);
  terminalBody.appendChild(line);
  terminal.scrollTop = terminal.scrollHeight;

  return line;
}

/* ── Main simulation function ───────────────────────────────────── */
function runPipelineSimulation() {
  /* Prevent double-click runs */
  btn.disabled = true;
  btn.classList.add('is-running');
  btn.querySelector('.btn-icon').textContent = '⏳';
  btn.setAttribute('aria-expanded', 'true');

  /* Clear previous output and show terminal */
  terminalBody.innerHTML = '';
  terminal.classList.add('is-visible');

  /* Track timeout IDs so we can abort if needed */
  const timers = [];

  /* Schedule each log line */
  PIPELINE_STEPS.forEach(({ type, text, delay }) => {
    const id = setTimeout(() => appendLog(type, text), delay);
    timers.push(id);
  });

  /* Add cursor after first message appears */
  let cursorEl = null;
  const cursorStart = setTimeout(() => {
    cursorEl = appendCursor();
  }, 400);
  timers.push(cursorStart);

  /* On completion: remove cursor, re-enable button */
  const lastDelay = PIPELINE_STEPS[PIPELINE_STEPS.length - 1].delay + 700;
  const doneId = setTimeout(() => {
    if (cursorEl) cursorEl.remove();
    btn.disabled = false;
    btn.classList.remove('is-running');
    btn.querySelector('.btn-icon').textContent = '▶';
    btn.setAttribute('aria-expanded', 'false');
  }, lastDelay);
  timers.push(doneId);
}

/* ── Event listener ─────────────────────────────────────────────── */
btn.addEventListener('click', runPipelineSimulation);
