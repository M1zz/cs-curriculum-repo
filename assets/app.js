/* ── ANALYTICS HELPER ─────────────────────────────────────── */
function ga(event, params) {
  if (typeof gtag === 'function') gtag('event', event, params);
}

/* ── HELPERS ──────────────────────────────────────────────── */
function esc(s) {
  return String(s).replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c])
  );
}

function escRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/* ── RENDER ALL DYNAMIC CONTENT ────────────────────────────── */
function renderAll(stages) {
  const heroFlow = document.getElementById('heroFlow');
  const stageNav = document.getElementById('stageNav');
  const main = document.getElementById('main');

  heroFlow.innerHTML = '';
  stageNav.innerHTML = '';
  main.innerHTML = '';

  /* Hero flow cards */
  stages.forEach(stage => {
    const card = document.createElement('a');
    card.href = `#${stage.id}`;
    card.className = 'flow-card';
    card.style.cssText = `background:var(--${stage.id}bg);border-color:var(--${stage.id}bd)`;
    card.innerHTML = `
      <div class="flow-card-num" style="color:var(--${stage.id})">STAGE ${stage.n}</div>
      <span class="flow-card-ico">${stage.ico}</span>
      <div class="flow-card-title" style="color:var(--${stage.id})">${esc(stage.title)}</div>
    `;
    card.addEventListener('click', () => {
      ga('hero_card_click', { stage_id: stage.id, stage_title: stage.title });
    });
    heroFlow.appendChild(card);
  });

  /* Stage nav */
  stages.forEach(stage => {
    const btn = document.createElement('button');
    btn.className = 'nav-btn';
    btn.dataset.id = stage.id;
    btn.innerHTML = `<span class="nav-dot" style="background:var(--${stage.id})"></span>S${stage.n} ${stage.ico}`;
    btn.addEventListener('click', () => {
      document.getElementById(stage.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      ga('stage_nav_click', { stage_id: stage.id, stage_title: stage.title });
    });
    stageNav.appendChild(btn);
  });

  /* Main content */
  stages.forEach(stage => {
    const section = document.createElement('section');
    section.className = `stage ${stage.theme}`;
    section.id = stage.id;

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
            <span class="why-label">${t('whyLabel')}</span>
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

    const linkHTML = stage.link ? `<a href="${stage.link}" target="_blank" rel="noopener" class="stage-link">${t('learnLink')}</a>` : '';
    const bottomLinkHTML = stage.link ? `
      <div class="stage-bottom-link">
        <a href="${stage.link}" target="_blank" rel="noopener" class="stage-link">${t('learnLink')}</a>
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
          const feedbackText = t('quizFeedback').replace('{id}', ch.id).replace('{title}', esc(ch.title));
          const feedbackHTML = a.correct
            ? ''
            : `<a href="#${ch.id}" class="quiz-chapter-link">${feedbackText}</a>`;
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
              <span class="scenario-num">${t('quizScenario')}</span>
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
            <span class="stage-quiz-ico">${t('quizIco')}</span>
            <div>
              <div class="stage-quiz-title">${t('quizTitle').replace('{n}', stage.n)}</div>
              <div class="stage-quiz-desc">${t('quizDesc')}</div>
            </div>
          </div>
          ${quizItems}
        </div>`;
    }

    const gapHTML = stage.gap ? `
      <div class="growth-card gap-card">
        <div class="growth-label">${t('gapLabel')}</div>
        <p class="growth-text">${esc(stage.gap)}</p>
      </div>` : '';

    const nextHTML = stage.next ? `
      <div class="growth-card next-card">
        <div class="growth-label">${t('nextLabel')}</div>
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
            <div class="meta-label">${t('problemLabel')}</div>
            ${esc(stage.problem)}
          </div>
          <div class="meta-box solve">
            <div class="meta-label">${t('solveLabel')}</div>
            ${esc(stage.solve)}
          </div>
        </div>
      </div>
      <div class="growth-section">
        <div class="growth-card status-card">
          <div class="growth-label">${t('statusLabel')}</div>
          <div class="stage-progress">
            ${stages.map((s, i) => `<div class="progress-step ${i < parseInt(stage.n) ? 'done' : ''} ${s.id === stage.id ? 'current' : ''}"><span class="progress-ico">${s.ico}</span><span class="progress-n">S${s.n}</span></div>`).join('')}
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

    /* Community banner — before Stage 1 */
    if (stage.id === 's1') {
      const banner = document.createElement('div');
      banner.className = 'mid-banner';
      banner.innerHTML = `
        <div class="mid-banner-inner">
          <div class="mid-banner-text">
            <span class="mid-banner-emoji">💬</span>
            <div>
              <p class="mid-banner-title">혼자 공부하려고 하나요?</p>
              <p class="mid-banner-sub">같은 커리큘럼을 함께 시작하는 iOS 개발자들이 있습니다.</p>
            </div>
          </div>
          <div class="mid-banner-actions">
            <a href="https://open.kakao.com/o/pkdN2Oli" target="_blank" rel="noopener" class="mid-banner-btn" data-cta="KakaoTalk_banner">같이 시작하기</a>
            <a href="https://leeo25.substack.com/" target="_blank" rel="noopener" class="mid-banner-link" data-cta="Substack_banner">뉴스레터 구독 →</a>
          </div>
        </div>`;
      banner.querySelectorAll('[data-cta]').forEach(el => {
        el.addEventListener('click', () => {
          ga('mid_banner_click', { cta_name: el.dataset.cta, url: el.href });
        });
      });
      main.appendChild(banner);
    }

    main.appendChild(section);

    /* Chapter accordion toggle */
    section.querySelectorAll('.chapter-header').forEach(header => {
      header.addEventListener('click', () => {
        const chapter = header.closest('.chapter');
        const isOpening = !chapter.classList.contains('open');
        chapter.classList.toggle('open');
        const chapterId = chapter.id;
        const chapterTitle = header.querySelector('.ch-title')?.textContent;
        if (isOpening) {
          ga('chapter_open', { chapter_id: chapterId, chapter_title: chapterTitle, stage_id: stage.id });
        } else {
          ga('chapter_close', { chapter_id: chapterId, chapter_title: chapterTitle, stage_id: stage.id });
        }
      });
    });

    /* Open first chapter by default */
    section.querySelector('.chapter')?.classList.add('open');

    /* Quiz interaction handler */
    section.querySelectorAll('.scenario-options').forEach(group => {
      const scenario = group.dataset.scenario;
      const ch = stage.chapters.find(c => c.id === scenario);
      group.querySelectorAll('.option-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          group.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
          const resultPanel = document.getElementById('result-' + scenario);
          resultPanel.classList.add('visible');
          const choice = btn.dataset.choice;
          const isCorrect = ch?.quiz?.answer?.[choice]?.correct ?? null;
          ga('quiz_attempt', { chapter_id: scenario, stage_id: stage.id, choice, is_correct: isCorrect });
        });
      });
    });

    /* Stage link click */
    section.querySelectorAll('.stage-link').forEach(link => {
      link.addEventListener('click', () => {
        ga('stage_link_click', { stage_id: stage.id, stage_title: stage.title, url: link.href });
      });
    });

    /* Sources expand (근거 펼쳐보기) */
    section.querySelectorAll('details.graph-sources').forEach(details => {
      details.addEventListener('toggle', () => {
        if (details.open) ga('sources_expand', { stage_id: stage.id });
      });
    });
  });

  /* Re-observe stages for scroll reveal */
  document.querySelectorAll('.stage').forEach(s => observer.observe(s));

  /* Re-bind anchor scroll */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* ── APPLY i18n TO STATIC HTML ─────────────────────────────── */
function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (val && val !== key) el.textContent = val;
  });
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const val = t(key);
    if (val && val !== key) el.innerHTML = val;
  });
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    const parts = el.getAttribute('data-i18n-attr').split(':');
    const attr = parts[0], key = parts[1];
    const val = t(key);
    if (val && val !== key) el.setAttribute(attr, val);
  });
  /* Update html lang */
  document.documentElement.lang = currentLang === 'en' ? 'en' : 'ko';
  /* Update title */
  const titleEl = document.querySelector('title[data-i18n]');
  if (titleEl) {
    const val = t(titleEl.getAttribute('data-i18n'));
    if (val) document.title = val;
  }
}

/* ── INTERSECTION OBSERVER (stage nav + scroll reveal) ────── */
const _stageViewed = new Set();
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      const id = entry.target.id;
      document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.id === id);
      });
      if (!_stageViewed.has(id)) {
        _stageViewed.add(id);
        const stageTitle = entry.target.querySelector('.stage-title')?.textContent;
        ga('stage_view', { stage_id: id, stage_title: stageTitle });
      }
    }
  });
}, { threshold: 0.08, rootMargin: '-100px 0px -30% 0px' });

/* ── INITIAL RENDER ────────────────────────────────────────── */
renderAll(getStages());
applyI18n();

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
    if (searchInput._lastQuery) ga('search_clear', { last_term: searchInput._lastQuery });
    searchInput._lastQuery = '';
    return;
  }
  searchInput._lastQuery = q;

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

  const unit = t('searchUnit');
  const none = t('searchNone');
  searchCount.textContent = total ? `${total}${unit}` : none;

  clearTimeout(searchInput._gaTimer);
  searchInput._gaTimer = setTimeout(() => {
    if (q) ga('search', { search_term: q, result_count: total });
  }, 1000);
});

/* ── GRAPH COMPARISON TABS ────────────────────────────────── */
document.querySelectorAll('.compare-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.compare-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.graph-panel').forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('graph-' + tab.dataset.graph)?.classList.add('active');
    ga('graph_tab_switch', { tab_name: tab.dataset.graph });
  });
});

/* ── CTA CLICK TRACKING ───────────────────────────────────── */
const ctaMap = [
  { selector: 'a[href*="youtube.com"]',          name: 'YouTube' },
  { selector: 'a[href*="inflearn.com"]',          name: 'Inflearn' },
  { selector: 'a[href*="substack.com"]',          name: 'Substack' },
  { selector: 'a[href*="open.kakao.com"]',        name: 'KakaoTalk' },
  { selector: 'a[href*="LeeoNote"]',              name: 'Blog' },
];
ctaMap.forEach(({ selector, name }) => {
  document.querySelectorAll(selector).forEach(el => {
    el.addEventListener('click', () => {
      ga('cta_click', { cta_name: name, cta_url: el.href });
    });
  });
});

/* ── THEME TOGGLE ────────────────────────────────────────── */
const themeToggle = document.getElementById('themeToggle');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
}

const saved = localStorage.getItem('theme');
if (saved) {
  applyTheme(saved);
}

themeToggle.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
  ga('theme_change', { theme: next });
});

/* ── LANGUAGE SWITCH TRACKING ─────────────────────────────── */
document.querySelector('.lang-toggle')?.addEventListener('click', () => {
  const to = document.documentElement.lang === 'ko' ? 'en' : 'ko';
  ga('language_switch', { to });
});

/* ── SCROLL DEPTH TRACKING ────────────────────────────────── */
const _scrollDepths = new Set();
window.addEventListener('scroll', () => {
  const scrolled = window.scrollY + window.innerHeight;
  const total = document.documentElement.scrollHeight;
  const pct = Math.floor((scrolled / total) * 100);
  [25, 50, 75, 90].forEach(depth => {
    if (pct >= depth && !_scrollDepths.has(depth)) {
      _scrollDepths.add(depth);
      ga('scroll_depth', { depth_percent: depth });
    }
  });
}, { passive: true });

/* ── SECTION VIEW FUNNEL ─────────────────────────────────── */
const _sectionViewed = new Set();
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id || entry.target.className.split(' ')[0];
      if (!_sectionViewed.has(id)) {
        _sectionViewed.add(id);
        ga('section_view', { section_id: id });
      }
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.hero, .compare, .cs-map, .community-section').forEach(s => sectionObserver.observe(s));

/* ── TIME ON PAGE TRACKING ───────────────────────────────── */
const _pageStart = Date.now();
const _timeMilestones = new Set();
setInterval(() => {
  const sec = Math.floor((Date.now() - _pageStart) / 1000);
  [30, 60, 180, 300].forEach(m => {
    if (sec >= m && !_timeMilestones.has(m)) {
      _timeMilestones.add(m);
      ga('time_on_page', { seconds: m });
    }
  });
}, 10000);

/* ── SUBSTACK IFRAME INTERACTION ─────────────────────────── */
document.querySelectorAll('.hero-subscribe iframe').forEach(iframe => {
  iframe.addEventListener('load', () => {
    ga('substack_embed_load', { location: 'hero' });
  });
});
window.addEventListener('blur', () => {
  const active = document.activeElement;
  if (active && active.tagName === 'IFRAME' && active.closest('.hero-subscribe')) {
    ga('substack_embed_interact', { location: 'hero' });
  }
});

