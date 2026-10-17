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
  document.head.appendChild(style);

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
        <div class="actions"><a class="button primary" href="#about">Explore the project</a><a class="button" href="https://github.com/Suomisaundi-United" rel="noopener noreferrer">GitHub organization ↗</a></div>
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
})();
