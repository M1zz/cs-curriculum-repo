/* ── HELPERS ──────────────────────────────────────────────── */
function esc(s) {
  return String(s).replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])
  );
}

function escRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/* ── BUILD HERO FLOW CARDS ───────────────────────────────── */
const heroFlow = document.getElementById('heroFlow');
STAGES.forEach(stage => {
  const card = document.createElement('a');
  card.href = `#${stage.id}`;
  card.className = 'flow-card';
  card.style.cssText = `background:var(--${stage.id}bg);border-color:var(--${stage.id}bd)`;
  card.innerHTML = `
    <div class="flow-card-num" style="color:var(--${stage.id})">STAGE ${stage.n}</div>
    <span class="flow-card-ico">${stage.ico}</span>
    <div class="flow-card-title" style="color:var(--${stage.id})">${esc(stage.title)}</div>
  `;
  heroFlow.appendChild(card);
});

/* ── BUILD STAGE NAV ─────────────────────────────────────── */
const stageNav = document.getElementById('stageNav');
STAGES.forEach(stage => {
  const btn = document.createElement('button');
  btn.className = 'nav-btn';
  btn.dataset.id = stage.id;
  btn.innerHTML = `<span class="nav-dot" style="background:var(--${stage.id})"></span>S${stage.n} ${stage.ico}`;
  btn.addEventListener('click', () => {
    document.getElementById(stage.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
  stageNav.appendChild(btn);
});

/* ── BUILD MAIN CONTENT ──────────────────────────────────── */
const main = document.getElementById('main');

STAGES.forEach(stage => {
  const section = document.createElement('section');
  section.className = `stage ${stage.theme}`;
  section.id = stage.id;

  /* Stage header */
  let chaptersHTML = '';
  stage.chapters.forEach(ch => {
    let topicsHTML = '';
    ch.topics.forEach(topic => {
      const searchText = [topic.name, topic.sub, ...topic.details].join(' ');
      topicsHTML += `
        <div class="topic" data-search="${esc(searchText)}">
          <div class="topic-left">
            <div class="topic-name">${esc(topic.name)}</div>
            <div class="topic-sub">${esc(topic.sub)}</div>
          </div>
          <div class="topic-right">
            <ul class="detail-list">
              ${topic.details.map(d => `<li>${esc(d)}</li>`).join('')}
            </ul>
          </div>
        </div>`;
    });

    chaptersHTML += `
      <div class="chapter" id="${ch.id}">
        <div class="chapter-header">
          <span class="ch-id">${esc(ch.id)}</span>
          <span class="ch-ico">${ch.ico}</span>
          <div class="ch-info">
            <div class="ch-title">${esc(ch.title)}</div>
            <div class="ch-trigger">${esc(ch.trigger)}</div>
          </div>
          <svg class="ch-chevron" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
        <div class="chapter-body">
          <div class="chapter-inner">
            <div class="topics">${topicsHTML}</div>
          </div>
        </div>
      </div>`;
  });

  section.innerHTML = `
    <div class="stage-header" data-n="${stage.n}">
      <div>
        <div class="stage-tag">STAGE ${stage.n}</div>
        <div class="stage-title">${stage.ico} ${esc(stage.title)}</div>
      </div>
      <div class="stage-meta">
        <div class="meta-box problem">
          <div class="meta-label">😤 마주치는 문제</div>
          ${esc(stage.problem)}
        </div>
        <div class="meta-box solve">
          <div class="meta-label">🎯 배워서 해결</div>
          ${esc(stage.solve)}
        </div>
      </div>
    </div>
    <div class="chapters">${chaptersHTML}</div>
  `;

  main.appendChild(section);

  /* Chapter accordion toggle */
  section.querySelectorAll('.chapter-header').forEach(header => {
    header.addEventListener('click', () => {
      header.closest('.chapter').classList.toggle('open');
    });
  });

  /* Open first chapter by default */
  section.querySelector('.chapter')?.classList.add('open');
});

/* ── INTERSECTION OBSERVER (stage nav + scroll reveal) ────── */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      const id = entry.target.id;
      document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.id === id);
      });
    }
  });
}, { threshold: 0.08, rootMargin: '-100px 0px -30% 0px' });

document.querySelectorAll('.stage').forEach(s => observer.observe(s));

/* ── SEARCH ──────────────────────────────────────────────── */
const searchInput = document.getElementById('searchInput');
const searchCount = document.getElementById('searchCount');

function clearHighlights() {
  document.querySelectorAll('mark').forEach(m => {
    m.replaceWith(document.createTextNode(m.textContent));
  });
}

function highlight(el, re) {
  el.querySelectorAll('.topic-name, .topic-sub, .detail-list li').forEach(node => {
    node.innerHTML = node.textContent.replace(re, m => `<mark>${m}</mark>`);
  });
}

searchInput.addEventListener('input', () => {
  const q = searchInput.value.trim();
  clearHighlights();

  if (!q) {
    searchCount.textContent = '';
    document.querySelectorAll('.stage, .chapter, .topic').forEach(el => {
      el.classList.remove('hidden');
    });
    return;
  }

  const re = new RegExp(escRe(q), 'gi');
  let total = 0;

  document.querySelectorAll('.stage').forEach(stage => {
    let stageMatch = false;

    stage.querySelectorAll('.chapter').forEach(ch => {
      let chMatch = false;

      ch.querySelectorAll('.topic').forEach(topic => {
        const text = topic.dataset.search || '';
        const matches = text.toLowerCase().includes(q.toLowerCase());

        if (matches) {
          chMatch = true;
          stageMatch = true;
          total++;
          topic.classList.remove('hidden');
          highlight(topic, re);
        } else {
          topic.classList.add('hidden');
        }
      });

      ch.classList.toggle('hidden', !chMatch);
      if (chMatch) ch.classList.add('open');
    });

    stage.classList.toggle('hidden', !stageMatch);
  });

  searchCount.textContent = total ? `${total}개` : '없음';
});

/* ── SMOOTH ANCHOR SCROLL (offset for sticky bar) ─────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
