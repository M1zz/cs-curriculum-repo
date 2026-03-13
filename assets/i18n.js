const UI = {
  ko: {
    // Meta
    metaDesc: '앱을 만들다 마주치는 문제를 해결하며 컴퓨터 공학을 배우는 Top-Down 커리큘럼. 개발자리 Leeo의 iOS 개발자를 위한 컴퓨터 공학 로드맵.',
    ogTitle: '앱 개발자를 위한 컴퓨터 공학 커리큘럼 — 개발자리',
    ogDesc: '변화가 빠른 세상에서 바닥부터 쌓아올리는 건 너무 느립니다. 먼저 만들고, 부딪히고, 그때 필요한 지식을 깊이 파는 생존을 위한 Top-Down 어프로치입니다.',
    pageTitle: '앱 개발자를 위한 컴퓨터 공학 커리큘럼 — 개발자리',

    // Hero
    heroLabel: '개발자리 · Top-Down 컴퓨터 공학 Curriculum',
    heroTitle: '앱 개발자를 위한<br><em>컴퓨터 공학</em><br>지식',
    heroSub: '변화가 빠른 세상에서 바닥부터 쌓아올리는 건 너무 느립니다.<br>먼저 만들고, 부딪히고, 그때 필요한 지식을 깊이 파는<br>생존을 위한 Top-Down 어프로치입니다.',
    heroReq: '시작하려면 <strong>Mac</strong>과 <strong>Xcode</strong>만 있으면 됩니다.',
    btnCurriculum: '커리큘럼 보기',
    btnCsMap: '전공 과목 매칭 보기 →',

    // Graph section
    graphTitle: '왜 Top-Down인가?',
    tabTopDown: 'Top-Down의 강점',
    tabBottomUp: 'Bottom-Up의 강점',
    graphDescTD: '실무 적용력 기준으로, Top-Down은 주어진 시간 안에 필요한 역량에 도달합니다.',
    graphDescBU: '하지만 대학 커리큘럼 순서가 주는 장점도 분명히 존재합니다.',
    yHigh: '높음',
    yLow: '낮음',
    yLabel: '실무 적용력',
    deadlineH: '요구되는 역량 수준',
    deadlineV: '남은 시간',
    xStart: '시작',
    x6mo: '6개월',
    x1yr: '1년',
    x2yr: '2년',
    x4yr: '4년+',
    legendTD: 'Top-Down — 앱을 만들며 필요한 것부터',
    legendBU_td: 'Bottom-Up — 기초 이론부터 차근차근',
    legendDeadline: '남은 시간 — 나에게 주어진 시간과 요구 역량',
    legendBU: 'Bottom-Up — 대학 커리큘럼 순서',
    legendTD_bu: 'Top-Down — 실무 중심 학습',

    // TD insights
    insightAppTitle: '앱을 만들 수 있는 시점',
    insightAppBody: 'Top-Down은 첫 달부터 동작하는 앱을 만듭니다.<br>Bottom-Up은 자료구조를 배우는 중입니다.',
    insightDebugTitle: '문제 해결 능력',
    insightDebugBody: '실제 버그를 잡아본 사람이 디버깅을 압니다.<br>교과서 예제만으로는 실전 감각이 생기지 않습니다.',
    insightSurvivalTitle: '생존과 수익',
    insightSurvivalBody: '빠르게 결과물을 내야 살아남는 시대입니다.<br>완벽한 준비보다 빠른 실행이 기회를 만듭니다.',
    sourcesToggle: '📎 근거 펼쳐보기',

    // TD sources
    sourcePBL: '<strong>PBL 메타분석</strong> — 66개 연구, 190개 효과값 분석. 프로젝트 기반 학습이 동기부여·만족도·협업 능력에서 유의미하게 높음 <em>(Frontiers in Psychology, 2023)</em>',
    sourceFastAI: '<strong>fast.ai 사례</strong> — 1강부터 최신 모델을 돌리고, 점차 원리를 벗겨가는 Top-Down 방식. 가장 널리 쓰이는 딥러닝 코스 <em>(Jeremy Howard)</em>',
    sourcePBLDuration: '<strong>PBL 최적 기간</strong> — 9~18주가 측정 가능한 학습 성과의 최적 구간 <em>(ScienceDirect, 2025 메타분석)</em>',

    // BU insights
    insightFoundationTitle: '탄탄한 기초 체력',
    insightFoundationBody: 'OS, 컴퓨터구조, 알고리즘을 체계적으로 쌓으면<br>어떤 기술이 와도 본질을 꿰뚫을 수 있습니다.',
    insightDeepTitle: '깊은 이해',
    insightDeepBody: 'Top-Down은 "왜?"를 나중에 채우지만,<br>Bottom-Up은 처음부터 원리를 이해하고 넘어갑니다.',
    insightHybridTitle: '그래서 이 커리큘럼은',
    insightHybridBody: 'Top-Down으로 빠르게 시작하되,<br>각 단계에서 필요한 기초를 <strong>깊이 있게</strong> 다룹니다.',

    // BU sources
    sourceCogLoad: '<strong>인지부하 이론</strong> — 초보자에게는 가이드된 예제가 자유 탐색보다 효과적. 비구조적 문제풀이는 작업 기억을 과부하시킴 <em>(Sweller, 1988)</em>',
    sourceExpertise: '<strong>전문성 역전 효과</strong> — 초보자에게 좋은 교수법이 숙련자에게는 오히려 해가 됨. 최적 방법은 학습자 수준에 따라 달라짐 <em>(Kalyuga et al., 2007)</em>',
    sourceDiscovery: '<strong>순수 발견학습 실패</strong> — 50년간의 실증 데이터가 비가이드 발견학습을 지지하지 않음. Top-Down도 스캐폴딩이 있어야 작동 <em>(Mayer, 2004)</em>',
    sourceSpiral: '<strong>나선형 커리큘럼</strong> — 같은 주제를 점점 깊이 있게 반복하는 하이브리드 접근이 가장 효과적 <em>(Bruner, 1960)</em>',

    // CS Map
    csMapTitle: '대학 전공 과목은 어디에?',
    csMapDesc: '컴퓨터 공학 전공 과목들이 이 커리큘럼의 어느 단계에서 다뤄지는지 한눈에 확인할 수 있습니다.',
    csS1: '🛠 S1 일단 만든다',
    csS2: '🐢 S2 왜 이렇게 느려?',
    csS3: '🍝 S3 코드가 스파게티',
    csS4: '💀 S4 앱이 죽는다',
    csS5: '🌐 S5 서버 데이터',
    csS6: '🧊 S6 UI가 멈춘다',
    csS7: '🧪 S7 코드가 맞는지',
    csS8: '🔭 S8 더 깊이',
    csS9: '🧮 S9 수학',
    // CS courses
    course_progBasic: '프로그래밍 기초',
    course_swDev: '소프트웨어 개발 입문',
    course_ds: '자료구조',
    course_algo: '알고리즘',
    course_oop: '객체지향 프로그래밍',
    course_swEng: '소프트웨어 공학',
    course_design: '디자인 패턴',
    course_sysProg: '시스템 프로그래밍',
    course_progLang: '프로그래밍 언어론',
    course_network: '컴퓨터 네트워크',
    course_db: '데이터베이스',
    course_security: '정보보안',
    course_osConcurrency: '운영체제 (동시성)',
    course_graphics: '컴퓨터 그래픽스',
    course_testing: '소프트웨어 테스팅',
    course_projMgmt: '소프트웨어 프로젝트 관리',
    course_compArch: '컴퓨터 구조',
    course_os: '운영체제',
    course_compiler: '컴파일러',
    course_discreteMath: '이산수학',
    course_linearAlg: '선형대수',
    course_probStat: '확률과 통계',

    // Search
    searchPlaceholder: '검색... (예: ARC, async, Codable)',
    searchUnit: '개',
    searchNone: '없음',

    // Footer
    footerBrand: '개발자리',
    footerTagline: 'Top-Down 컴퓨터 공학 Curriculum',
    footerCopy: '© 2026 개발자리 · Leeo. All rights reserved.',

    // Theme
    themeLabel: '테마 전환',

    // App.js dynamic strings
    whyLabel: '💡 왜 여기서?',
    learnLink: '학습하러 가기 →',
    quizScenario: '💡 실전 상황',
    quizTitle: 'STAGE {n} 실전 퀴즈',
    quizDesc: '위 내용을 이해했는지 확인해 보세요.',
    quizFeedback: '📖 {id} {title}에 대해 더 학습이 필요합니다. 학습하러 가시겠습니까?',
    gapLabel: '⚠️ 하지만 아직',
    nextLabel: '→ 다음 단계가 필요한 이유',
    problemLabel: '😤 마주치는 문제',
    solveLabel: '🎯 배워서 해결',
    statusLabel: '✅ 이 단계를 마친 당신은',
    quizIco: '🧪',
  },
  en: {
    // Meta
    metaDesc: 'A Top-Down CS curriculum that teaches computer science by solving real problems encountered while building apps. By Leeo, for iOS developers.',
    ogTitle: 'CS Curriculum for App Developers — Leeo',
    ogDesc: 'Building from scratch is too slow in a fast-changing world. Build first, hit walls, then dig deep into the knowledge you need — a survival-oriented Top-Down approach.',
    pageTitle: 'CS Curriculum for App Developers — Leeo',

    // Hero
    heroLabel: 'Leeo · Top-Down CS Curriculum',
    heroTitle: 'Computer Science<br><em>Knowledge</em><br>for App Developers',
    heroSub: 'Building from scratch is too slow in a fast-changing world.<br>Build first, hit walls, then dig deep into what you need —<br>a survival-oriented Top-Down approach.',
    heroReq: 'All you need is a <strong>Mac</strong> and <strong>Xcode</strong> to get started.',
    btnCurriculum: 'View Curriculum',
    btnCsMap: 'See Course Mapping →',

    // Graph section
    graphTitle: 'Why Top-Down?',
    tabTopDown: 'Top-Down Strengths',
    tabBottomUp: 'Bottom-Up Strengths',
    graphDescTD: 'In terms of practical skills, Top-Down reaches the required competency within the given timeframe.',
    graphDescBU: 'However, the traditional university curriculum order has clear advantages too.',
    yHigh: 'High',
    yLow: 'Low',
    yLabel: 'Practical Skills',
    deadlineH: 'Required Competency',
    deadlineV: 'Time Left',
    xStart: 'Start',
    x6mo: '6 months',
    x1yr: '1 year',
    x2yr: '2 years',
    x4yr: '4 years+',
    legendTD: 'Top-Down — Start with what you need to build',
    legendBU_td: 'Bottom-Up — Start from foundational theory',
    legendDeadline: 'Time Left — Available time & required competency',
    legendBU: 'Bottom-Up — University curriculum order',
    legendTD_bu: 'Top-Down — Practice-oriented learning',

    // TD insights
    insightAppTitle: 'Time to First App',
    insightAppBody: 'Top-Down builds a working app from month one.<br>Bottom-Up is still learning data structures.',
    insightDebugTitle: 'Problem-Solving Skills',
    insightDebugBody: 'Those who\'ve fixed real bugs know how to debug.<br>Textbook examples alone don\'t build practical intuition.',
    insightSurvivalTitle: 'Survival & Revenue',
    insightSurvivalBody: 'In an era where you need to ship fast to survive,<br>quick execution creates more opportunities than perfect preparation.',
    sourcesToggle: '📎 Show Sources',

    // TD sources
    sourcePBL: '<strong>PBL Meta-analysis</strong> — Analysis of 66 studies with 190 effect sizes. Project-based learning significantly higher in motivation, satisfaction, and collaboration <em>(Frontiers in Psychology, 2023)</em>',
    sourceFastAI: '<strong>fast.ai Case</strong> — Run cutting-edge models from lesson 1, gradually peeling back the principles. The most widely-used deep learning course <em>(Jeremy Howard)</em>',
    sourcePBLDuration: '<strong>Optimal PBL Duration</strong> — 9-18 weeks is the optimal window for measurable learning outcomes <em>(ScienceDirect, 2025 meta-analysis)</em>',

    // BU insights
    insightFoundationTitle: 'Strong Fundamentals',
    insightFoundationBody: 'When you systematically build OS, architecture, and algorithms,<br>you can see through the essence of any new technology.',
    insightDeepTitle: 'Deep Understanding',
    insightDeepBody: 'Top-Down fills in the "why" later,<br>while Bottom-Up understands principles from the start.',
    insightHybridTitle: 'So This Curriculum...',
    insightHybridBody: 'Starts fast with Top-Down,<br>but covers the necessary fundamentals <strong>in depth</strong> at each stage.',

    // BU sources
    sourceCogLoad: '<strong>Cognitive Load Theory</strong> — For novices, guided examples are more effective than free exploration. Unstructured problem-solving overloads working memory <em>(Sweller, 1988)</em>',
    sourceExpertise: '<strong>Expertise Reversal Effect</strong> — Teaching methods good for novices can harm experts. Optimal methods vary by learner level <em>(Kalyuga et al., 2007)</em>',
    sourceDiscovery: '<strong>Pure Discovery Learning Failure</strong> — 50 years of empirical data doesn\'t support unguided discovery learning. Top-Down also needs scaffolding to work <em>(Mayer, 2004)</em>',
    sourceSpiral: '<strong>Spiral Curriculum</strong> — A hybrid approach that revisits topics with increasing depth is most effective <em>(Bruner, 1960)</em>',

    // CS Map
    csMapTitle: 'Where Are the University Courses?',
    csMapDesc: 'See which CS university courses are covered at each stage of this curriculum.',
    csS1: '🛠 S1 Just Build It',
    csS2: '🐢 S2 Why So Slow?',
    csS3: '🍝 S3 Spaghetti Code',
    csS4: '💀 S4 App Crashes',
    csS5: '🌐 S5 Server Data',
    csS6: '🧊 S6 UI Freezes',
    csS7: '🧪 S7 Is It Correct?',
    csS8: '🔭 S8 Going Deeper',
    csS9: '🧮 S9 Math',
    // CS courses
    course_progBasic: 'Intro to Programming',
    course_swDev: 'Software Development',
    course_ds: 'Data Structures',
    course_algo: 'Algorithms',
    course_oop: 'Object-Oriented Programming',
    course_swEng: 'Software Engineering',
    course_design: 'Design Patterns',
    course_sysProg: 'Systems Programming',
    course_progLang: 'Programming Languages',
    course_network: 'Computer Networks',
    course_db: 'Databases',
    course_security: 'Information Security',
    course_osConcurrency: 'Operating Systems (Concurrency)',
    course_graphics: 'Computer Graphics',
    course_testing: 'Software Testing',
    course_projMgmt: 'Software Project Management',
    course_compArch: 'Computer Architecture',
    course_os: 'Operating Systems',
    course_compiler: 'Compilers',
    course_discreteMath: 'Discrete Mathematics',
    course_linearAlg: 'Linear Algebra',
    course_probStat: 'Probability & Statistics',

    // Search
    searchPlaceholder: 'Search... (e.g., ARC, async, Codable)',
    searchUnit: '',
    searchNone: 'None',

    // Footer
    footerBrand: 'Leeo',
    footerTagline: 'Top-Down CS Curriculum',
    footerCopy: '© 2026 Leeo. All rights reserved.',

    // Theme
    themeLabel: 'Toggle theme',

    // App.js dynamic strings
    whyLabel: '💡 Why Here?',
    learnLink: 'Start Learning →',
    quizScenario: '💡 Real-World Scenario',
    quizTitle: 'STAGE {n} Quiz',
    quizDesc: 'Check if you understood the content above.',
    quizFeedback: '📖 You need more study on {id} {title}. Want to learn more?',
    gapLabel: '⚠️ But Still...',
    nextLabel: '→ Why You Need the Next Stage',
    problemLabel: '😤 Problems You Face',
    solveLabel: '🎯 What You Learn to Solve',
    statusLabel: '✅ After This Stage, You Can...',
    quizIco: '🧪',
  }
};

// Current language
let currentLang = localStorage.getItem('lang') || 'ko';

function t(key) {
  return UI[currentLang]?.[key] || UI['ko'][key] || key;
}

function getStages() {
  return currentLang === 'en' && typeof STAGES_EN !== 'undefined' ? STAGES_EN : STAGES;
}
