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

    const whyHTML = ch.why ? `
        <div class="why-box">
          <span class="why-label">💡 왜 여기서?</span>
          <p class="why-text">${esc(ch.why)}</p>
        </div>` : '';

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
            ${whyHTML}
            <div class="topics">${topicsHTML}</div>
          </div>
        </div>
      </div>`;
  });

  const linkHTML = stage.link ? `<a href="${stage.link}" target="_blank" rel="noopener" class="stage-link">학습하러 가기 →</a>` : '';
  const bottomLinkHTML = stage.link ? `
    <div class="stage-bottom-link">
      <a href="${stage.link}" target="_blank" rel="noopener" class="stage-link">학습하러 가기 →</a>
    </div>` : '';

  /* Build stage quiz section */
  let stageQuizHTML = '';
  const quizChapters = stage.chapters.filter(ch => ch.quiz);
  if (quizChapters.length > 0) {
    const quizItems = quizChapters.map(ch => {
      const q = ch.quiz;
      const optionsHTML = q.options.map(opt => `
        <button class="option-btn" data-choice="${esc(opt.key)}">
          <span class="option-label">${esc(opt.label)}</span>
          <div>
            <div class="option-title">${esc(opt.title)}</div>
            <div class="option-desc">${esc(opt.desc)}</div>
          </div>
        </button>`).join('');

      const resultsHTML = Object.keys(q.answer).map(key => {
        const a = q.answer[key];
        const cardClass = a.correct ? 'right' : 'wrong';
        const barClass = a.correct ? 'fast' : 'slow';
        const feedbackHTML = a.correct
          ? ''
          : `<a href="#${ch.id}" class="quiz-chapter-link">📖 ${ch.id} ${esc(ch.title)}에 대해 더 학습이 필요합니다. 학습하러 가시겠습니까?</a>`;
        return `
          <div class="result-card ${cardClass}">
            <div class="result-tag">${a.tag}</div>
            <div class="result-code"><code>${a.code}</code></div>
            <div class="result-effect">
              <div class="effect-bar">
                <span class="effect-label">${a.effectLabel}</span>
                <div class="bar-track">
                  <div class="bar-fill ${barClass}" style="width:${a.effectWidth}"></div>
                </div>
                <span class="effect-value">${a.effectValue}</span>
              </div>
              <p class="result-body">${a.body}</p>
              ${feedbackHTML}
            </div>
          </div>`;
      }).join('');

      return `
        <div class="stage-quiz-item">
          <div class="quiz-chapter-ref">${ch.ico} ${esc(ch.id)} ${esc(ch.title)}</div>
          <div class="scenario-header">
            <span class="scenario-num">💡 실전 상황</span>
            <h3 class="scenario-q">${q.q}</h3>
          </div>
          <div class="scenario-options" data-scenario="${esc(ch.id)}">
            ${optionsHTML}
          </div>
          <div class="scenario-result" id="result-${esc(ch.id)}">
            ${resultsHTML}
          </div>
        </div>`;
    }).join('');

    stageQuizHTML = `
      <div class="stage-quiz-section">
        <div class="stage-quiz-header">
          <span class="stage-quiz-ico">🧪</span>
          <div>
            <div class="stage-quiz-title">STAGE ${stage.n} 실전 퀴즈</div>
            <div class="stage-quiz-desc">위 내용을 이해했는지 확인해 보세요.</div>
          </div>
        </div>
        ${quizItems}
      </div>`;
  }

  const gapHTML = stage.gap ? `
    <div class="growth-card gap-card">
      <div class="growth-label">⚠️ 하지만 아직</div>
      <p class="growth-text">${esc(stage.gap)}</p>
    </div>` : '';

  const nextHTML = stage.next ? `
    <div class="growth-card next-card">
      <div class="growth-label">→ 다음 단계가 필요한 이유</div>
      <p class="growth-text">${esc(stage.next)}</p>
    </div>` : '';

  section.innerHTML = `
    <div class="stage-header" data-n="${stage.n}">
      <div>
        <div class="stage-tag">STAGE ${stage.n} ${stage.analogy ? '· ' + stage.analogy : ''}</div>
        <div class="stage-title">${stage.ico} ${esc(stage.title)}</div>
        ${linkHTML}
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
    <div class="growth-section">
      <div class="growth-card status-card">
        <div class="growth-label">✅ 이 단계를 마친 당신은</div>
        <div class="stage-progress">
          ${STAGES.map((s, i) => `<div class="progress-step ${i < parseInt(stage.n) ? 'done' : ''} ${s.id === stage.id ? 'current' : ''}"><span class="progress-ico">${s.ico}</span><span class="progress-n">S${s.n}</span></div>`).join('')}
        </div>
        <p class="growth-text">${esc(stage.status)}</p>
      </div>
      ${gapHTML}
      ${nextHTML}
    </div>
    <div class="chapters">${chaptersHTML}</div>
    ${stageQuizHTML}
    ${bottomLinkHTML}
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

  /* Quiz interaction handler */
  section.querySelectorAll('.scenario-options').forEach(group => {
    const scenario = group.dataset.scenario;
    group.querySelectorAll('.option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        group.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        const resultPanel = document.getElementById('result-' + scenario);
        resultPanel.classList.add('visible');
      });
    });
  });
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

/* ── GRAPH COMPARISON TABS ────────────────────────────────── */
document.querySelectorAll('.compare-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.compare-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.graph-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('graph-' + tab.dataset.graph)?.classList.add('active');
  });
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

/* ── THEME TOGGLE ────────────────────────────────────────── */
const themeToggle = document.getElementById('themeToggle');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

// Restore saved theme or default to light
const saved = localStorage.getItem('theme');
if (saved) {
  applyTheme(saved);
}

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  applyTheme(current === 'dark' ? 'light' : 'dark');
});
