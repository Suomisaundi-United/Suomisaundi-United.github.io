/* Suomisaundi United — monolithic frontend, v0.1.0 */
(() => {
  'use strict';

  const style = document.createElement('style');
  style.textContent = `
    :root{color-scheme:dark;--bg:#0b1115;--surface:#142129;--text:#f2f7f5;--muted:#afc5c2;--accent:#93e8bc;--border:#2d464b;font-family:system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif}
    *{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:var(--bg);color:var(--text);min-height:100vh}
    a{color:var(--accent)}a:hover{text-decoration-thickness:2px}
    .wrap{width:min(1100px,calc(100% - 40px));margin:auto}
    header{border-bottom:1px solid var(--border);background:#101c22}
    .top{min-height:76px;display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap;padding:16px 0}
    .brand{font-weight:800;letter-spacing:.04em;text-decoration:none;color:var(--text)}
    nav{display:flex;gap:20px;flex-wrap:wrap}nav a{text-decoration:none;font-size:.94rem}
    .hero{padding:clamp(80px,13vw,155px) 0 95px;background:radial-gradient(ellipse at 80% 10%,#205343 0%,transparent 48%),linear-gradient(140deg,#101b23,#0b1115)}
    .eyebrow{color:var(--accent);text-transform:uppercase;letter-spacing:.2em;font-size:.8rem;font-weight:700}
    h1{font-size:clamp(3rem,9vw,7rem);line-height:.97;letter-spacing:-.06em;margin:18px 0 24px;max-width:900px}
    .lead{font-size:clamp(1.1rem,2.4vw,1.45rem);line-height:1.6;color:var(--muted);max-width:670px}
    .actions{display:flex;flex-wrap:wrap;gap:14px;margin-top:32px}
    .button{display:inline-block;padding:13px 20px;border:1px solid var(--accent);border-radius:8px;text-decoration:none;font-weight:650}
    .button.primary{background:var(--accent);color:#092016}
    section.info{padding:76px 0}h2{font-size:clamp(1.8rem,4vw,2.6rem);margin:0 0 18px}
    .intro{color:var(--muted);line-height:1.7;max-width:750px}
    .cards{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:18px;margin-top:30px}
    .card{background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:26px}
    .card h3{margin:0 0 12px}.card p{color:var(--muted);line-height:1.65;margin:0}
    footer{border-top:1px solid var(--border);padding:28px 0;color:var(--muted);font-size:.9rem}
    @media(max-width:720px){.cards{grid-template-columns:1fr}.hero{padding:80px 0}.top{align-items:flex-start}nav{gap:14px}}
  `;
  // Compact, edge-snapped site chrome; sticky header and bottom-anchored footer.
  style.textContent += `
    html{scroll-padding-top:52px;scroll-snap-type:y proximity}
    header{position:sticky;top:0;z-index:100;backdrop-filter:blur(12px);background:rgba(16,28,34,.94)}
    .top{min-height:42px;padding:5px 0;gap:12px}
    .brand{font-size:.83rem;line-height:1.2}
    nav{gap:14px}nav a{font-size:.79rem;line-height:1.3}
    footer{padding:8px 0;font-size:.76rem;line-height:1.35;margin-top:auto}
    main{flex:1}body{display:flex;flex-direction:column}
    .hero,section.info{scroll-snap-align:start;scroll-margin-top:52px}
    @media(max-width:720px){.top{min-height:40px;padding:6px 0}.brand{font-size:.75rem}nav{gap:10px}nav a{font-size:.74rem}}
  `;
  // Fixed bottom footer; reserve space to prevent content overlap.
  style.textContent += `
    :root{--footer-height:34px}
    body{padding-bottom:var(--footer-height)}
    footer{position:fixed;bottom:0;left:0;right:0;z-index:100;
      min-height:var(--footer-height);display:flex;align-items:center;
      background:rgba(16,28,34,.94);backdrop-filter:blur(12px);
      border-top:1px solid var(--border);padding:5px 0}
    footer .wrap{width:min(1100px,calc(100% - 40px))}
    section.info:last-child{scroll-margin-bottom:var(--footer-height)}
  `;
  // Orbitron is the sole visual font family across all site components.
  style.textContent += `
    @font-face{font-family:"Orbitron";src:url("./fonts/Orbitron-VariableFont_wght.ttf") format("truetype");font-style:normal;font-weight:400 900;font-display:swap}
    html,body,button,input,textarea,select,svg{font-family:"Orbitron",sans-serif!important}
    *{font-family:inherit}
  `;
  document.head.appendChild(style);

  // Public ID only; privileged actions require trusted Telegram verification.
  const TELEGRAM_ADMIN_USER_ID = '8047323497';

  const app = document.createElement('div');
  app.innerHTML = `
    <header><div class="wrap top">
      <a class="brand" href="#home">SUOMISAUNDI UNITED</a>
      <nav aria-label="Main navigation">
        <a href="#about">About</a><a href="#community">Community</a><a href="#project">Project</a>
      </nav>
    </div></header>
    <main id="home">
      <div class="hero"><div class="wrap">
        <div class="eyebrow">Music · Culture · Community</div>
        <h1>Suomisaundi<br>United.</h1>
        <p class="lead">An independent home for Suomisaundi: celebrating the sound, the artists, and the community around Finnish psychedelic music.</p>
        <div class="actions"></div>
      </div></div>
      <section class="info" id="about"><div class="wrap">
        <h2>A space for the sound</h2>
        <p class="intro">Suomisaundi United is taking shape. This website will provide a central place for information, connections, and future community initiatives related to Suomisaundi.</p>
        <div class="cards">
          <article class="card"><h3>Music</h3><p>Explore the distinct identity and creative spirit of Suomisaundi.</p></article>
          <article class="card" id="community"><h3>Community</h3><p>Make room for artists, listeners, and collaborators to connect as the project develops.</p></article>
          <article class="card" id="project"><h3>Development</h3><p>The website is in its initial phase. More features and content will be introduced progressively.</p></article>
        </div>
      </div></section>
    </main>
    <footer><div class="wrap">© ${new Date().getFullYear()} Suomisaundi United</div></footer>
  `;
  document.body.replaceChildren(app);

  // Ephemeral resource pool: a budget, not an eager 128 MiB allocation.
  const sessionPool = (() => {
    const limit = 128 * 1024 * 1024;
    const entries = new Map();
    let used = 0;
    return Object.freeze({
      limit,
      get used() { return used; },
      allocate(key, bytes) {
        if (typeof key !== 'string' || !key || entries.has(key) ||
            !Number.isSafeInteger(bytes) || bytes < 1 || bytes > limit - used) return false;
        try {
          entries.set(key, new Uint8Array(bytes));
          used += bytes;
          return true;
        } catch { return false; }
      },
      release(key) {
        const buffer = entries.get(key);
        if (!buffer) return false;
        used -= buffer.byteLength;
        entries.delete(key);
        return true;
      },
      clear() { entries.clear(); used = 0; }
    });
  })();
  window.addEventListener('pagehide', () => sessionPool.clear(), { once: true });

  // No user identifier, authentication token or sensitive information in cookies.
  const cookieName = 'suomisaundi_prefs';
  const readCookie = () => {
    try {
      const part = document.cookie.split('; ').find(x => x.startsWith(cookieName + '='));
      return part ? decodeURIComponent(part.slice(cookieName.length + 1)) : null;
    } catch { return null; }
  };
  const writeCookie = (value) => {
    try {
      document.cookie = cookieName + '=' + encodeURIComponent(value) +
        '; Path=/; Max-Age=2592000; SameSite=Lax; Secure';
      return readCookie() === value;
    } catch { return false; }
  };
  const storageKey = 'suomisaundi.preferences.v1';
  const readSaved = () => {
    try {
      const data = JSON.parse(localStorage.getItem(storageKey) || 'null');
      return data && typeof data === 'object' && data.consent === true ? data : null;
    } catch { return null; }
  };
  const save = (consent) => {
    if (consent) {
      try { localStorage.setItem(storageKey, JSON.stringify({ consent: true, version: 1 })); } catch {}
      writeCookie('accepted');
    } else {
      try { localStorage.removeItem(storageKey); } catch {}
      try { document.cookie = cookieName + '=; Path=/; Max-Age=0; SameSite=Lax; Secure'; } catch {}
    }
  };
  const existingConsent = readSaved()?.consent === true || readCookie() === 'accepted';
  const storagePanel = document.createElement('aside');
  storagePanel.id = 'storage-preferences';
  storagePanel.setAttribute('aria-label', 'Storage preferences');
  storagePanel.innerHTML = `
    <div class="wrap">
      <span id="storage-message">This site uses temporary browser memory. Optional preferences can be saved on this device.</span>
      <div class="storage-actions">
        <button id="storage-accept" type="button">Save preferences</button>
        <button id="storage-decline" type="button">Volatile only</button>
        <button id="storage-clear" type="button">Clear saved preferences</button>
      </div>
    </div>
  `;
  const storageStyles = document.createElement('style');
  storageStyles.textContent = `
    #storage-preferences{position:fixed;left:0;right:0;bottom:34px;z-index:99;
      background:#142129f5;border-top:1px solid var(--border);padding:10px 0;
      color:var(--text);font-size:.75rem;box-shadow:0 -8px 30px #0005}
    #storage-preferences .wrap{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}
    .storage-actions{display:flex;gap:8px;flex-wrap:wrap}
    .storage-actions button{font:inherit;cursor:pointer;background:#213b40;color:var(--text);
      border:1px solid var(--border);border-radius:5px;padding:6px 10px}
    .storage-actions button:focus-visible{outline:2px solid var(--accent)}
    @media(max-width:600px){#storage-preferences{font-size:.7rem}.storage-actions button{padding:5px 7px}}
  `;
  document.head.appendChild(storageStyles);
  document.body.appendChild(storagePanel);
  const message = storagePanel.querySelector('#storage-message');
  if (existingConsent) {
    message.textContent = 'Preferences are saved on this device. Session resources remain volatile.';
    storagePanel.querySelector('#storage-accept').hidden = true;
    storagePanel.querySelector('#storage-decline').hidden = true;
  }
  storagePanel.querySelector('#storage-accept').addEventListener('click', () => {
    save(true);
    storagePanel.remove();
  });
  storagePanel.querySelector('#storage-decline').addEventListener('click', () => {
    save(false);
    storagePanel.remove();
  });
  storagePanel.querySelector('#storage-clear').addEventListener('click', () => {
    save(false);
    storagePanel.remove();
  });
  // Explicitly expose the bounded pool for later monolithic modules, without persistent backing.
  Object.defineProperty(window, 'suomisaundiSessionPool', { value: sessionPool, configurable: false });

  // Cross-tab presence is local to this browser profile and origin, never global.
  const footerWrap = app.querySelector('footer .wrap');
  const localMetrics = document.createElement('span');
  localMetrics.id = 'local-session-metrics';
  localMetrics.setAttribute('role', 'status');
  localMetrics.setAttribute('aria-live', 'off');
  footerWrap.append(' · ', localMetrics);
  const metricsStyle = document.createElement('style');
  metricsStyle.textContent = `
    footer .wrap{display:flex;flex-wrap:wrap;align-items:center;gap:6px}
    #local-session-metrics{font-size:.7rem;white-space:normal}
  `;
  document.head.appendChild(metricsStyle);

  const sessionId = (globalThis.crypto?.randomUUID?.() || String(Date.now()) + '-' + Math.random().toString(36).slice(2));
  const channel = typeof BroadcastChannel !== 'undefined' ? new BroadcastChannel('suomisaundi-presence-v1') : null;
  const sessions = new Map();
  const budgetBytes = sessionPool.limit;
  const formatMiB = bytes => (bytes / 1048576).toFixed(1) + ' MiB';
  const updateMetrics = () => {
    const now = Date.now();
    for (const [id, entry] of sessions) if (now - entry.time > 18000) sessions.delete(id);
    sessions.set(sessionId, { time: now, reserved: budgetBytes, allocated: sessionPool.used });
    const count = sessions.size;
    const reserved = [...sessions.values()].reduce((sum, entry) => sum + entry.reserved, 0);
    const allocated = [...sessions.values()].reduce((sum, entry) => sum + entry.allocated, 0);
    localMetrics.textContent = 'Local sessions: ' + count +
      ' · Total pool capacity: ' + formatMiB(reserved) +
      ' · Allocated: ' + formatMiB(allocated);
  };
  const announce = () => {
    const data = { type: 'presence', id: sessionId, reserved: budgetBytes, allocated: sessionPool.used };
    channel?.postMessage(data);
    updateMetrics();
  };
  if (channel) {
    channel.onmessage = event => {
      const data = event.data;
      if (!data || typeof data !== 'object' || typeof data.id !== 'string' || data.id === sessionId) return;
      if (data.type === 'goodbye') sessions.delete(data.id);
      else if (data.type === 'presence' && data.reserved === budgetBytes &&
        Number.isSafeInteger(data.allocated) && data.allocated >= 0 && data.allocated <= budgetBytes) {
        sessions.set(data.id, { time: Date.now(), reserved: budgetBytes, allocated: data.allocated });
        if (data.reply) announce();
      }
      updateMetrics();
    };
    channel.postMessage({ type: 'presence', id: sessionId, reserved: budgetBytes, allocated: 0, reply: true });
  }
  announce();
  const heartbeat = setInterval(announce, 5000);
  const goodbye = () => {
    clearInterval(heartbeat);
    channel?.postMessage({ type: 'goodbye', id: sessionId });
    channel?.close();
  };
  window.addEventListener('pagehide', goodbye, { once: true });



  // Progressive browser capabilities: no external dependencies or separate assets.
  const capabilities = document.createElement('section');
  capabilities.className = 'info';
  capabilities.id = 'technology';
  capabilities.innerHTML = `
    <div class="wrap">
      <h2>Creative technology</h2>
      <p class="intro">Browser-native experiments with audio, graphics and compute. Each capability is checked independently.</p>
      <div class="cards">
        <article class="card"><h3>WebAssembly</h3><p id="wasm-status" role="status">Checking…</p></article>
        <article class="card"><h3>WebGPU</h3><p id="gpu-status" role="status">Checking…</p></article>
        <article class="card"><h3>Web Audio</h3><p id="audio-status" role="status">Ready to check.</p><button id="audio-toggle" type="button">Play tone</button></article>
      </div>
      <div class="card" style="margin-top:18px">
        <h3>Vector waveform · SVG</h3>
        <svg id="waveform" viewBox="0 0 800 150" role="img" aria-label="Animated vector waveform" style="display:block;width:100%;height:auto">
          <path id="wave-path" fill="none" stroke="#93e8bc" stroke-width="3" vector-effect="non-scaling-stroke"></path>
        </svg>
      </div>
    </div>
  `;
  app.querySelector('main').appendChild(capabilities);
  app.querySelector('nav').insertAdjacentHTML('beforeend', '<a href="#technology">Technology</a>');
  const status = (id, value) => { app.querySelector('#' + id).textContent = value; };

  // Tiny valid wasm module exporting answer() -> i32(42).
  (async () => {
    if (typeof WebAssembly === 'undefined') {
      status('wasm-status', 'Unavailable in this browser');
      return;
    }
    try {
      const bytes = new Uint8Array([0,97,115,109,1,0,0,0,1,5,1,96,0,1,127,3,2,1,0,7,10,1,6,97,110,115,119,101,114,0,0,10,6,1,4,0,65,42,11]);
      const result = await WebAssembly.instantiate(bytes);
      status('wasm-status', 'Available · computation test: ' + result.instance.exports.answer());
    } catch (error) {
      status('wasm-status', 'Available, but test failed');
      console.warn('Wasm test failed', error);
    }
  })();

  (async () => {
    if (!navigator.gpu || !window.isSecureContext) {
      status('gpu-status', 'Not available in this browser/context');
      return;
    }
    try {
      const adapter = await navigator.gpu.requestAdapter();
      status('gpu-status', adapter ? 'Available · GPU adapter detected' : 'No compatible GPU adapter');
    } catch (error) {
      status('gpu-status', 'Adapter request failed');
      console.warn('WebGPU check failed', error);
    }
  })();

  let audioContext = null;
  let oscillator = null;
  let gain = null;
  const audioButton = app.querySelector('#audio-toggle');
  if (!(window.AudioContext || window.webkitAudioContext)) {
    audioButton.disabled = true;
    status('audio-status', 'Unavailable in this browser');
  }
  audioButton.addEventListener('click', async () => {
    try {
      if (oscillator) {
        oscillator.stop();
        oscillator.disconnect();
        oscillator = null;
        if (gain) { gain.disconnect(); gain = null; }
        audioButton.textContent = 'Play tone';
        status('audio-status', 'Stopped');
        return;
      }
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      audioContext ||= new AudioContextClass();
      await audioContext.resume();
      oscillator = audioContext.createOscillator();
      gain = audioContext.createGain();
      oscillator.type = 'sine';
      oscillator.frequency.value = 220;
      gain.gain.value = 0.035;
      oscillator.connect(gain).connect(audioContext.destination);
      oscillator.start();
      audioButton.textContent = 'Stop tone';
      status('audio-status', 'Playing 220 Hz test tone');
    } catch (error) {
      status('audio-status', 'Audio could not start');
      console.warn('Web Audio failed', error);
    }
  });
  window.addEventListener('pagehide', () => {
    if (oscillator) oscillator.stop();
    if (audioContext) audioContext.close();
  }, { once: true });

  const wavePath = app.querySelector('#wave-path');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const drawWave = (time) => {
    const phase = reduceMotion ? 0 : time * 0.001;
    let path = '';
    for (let x = 0; x <= 800; x += 5) {
      const y = 75 + Math.sin(x * 0.025 + phase) * 29 + Math.sin(x * 0.064 - phase * 0.7) * 12;
      path += (x ? ' L ' : 'M ') + x + ' ' + y.toFixed(2);
    }
    wavePath.setAttribute('d', path);
    if (!reduceMotion && document.visibilityState === 'visible') requestAnimationFrame(drawWave);
  };
  requestAnimationFrame(drawWave);
  document.addEventListener('visibilitychange', () => {
    if (!reduceMotion && document.visibilityState === 'visible') requestAnimationFrame(drawWave);
  });

})();
