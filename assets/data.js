/* ── CURRICULUM DATA ──────────────────────────────────────── */
const STAGES = [
  {
    id: 's1', n: '1', ico: '🛠', title: '일단 만든다',
    color: 'var(--s1)', theme: 's1-theme',
    problem: '아무것도 없다 — 화면에 뭔가를 띄우고 싶다',
    solve: 'SwiftUI 기본, 상태 관리, 화면 전환, Swift 필수 문법',
    link: 'https://m1zz.github.io/cs-swiftUI/',
    analogy: '🛹 스케이트보드',
    status: '동작하는 앱을 만들 수 있다. 화면을 구성하고, 버튼을 눌러 상태를 바꾸고, 데이터를 목록으로 보여줄 수 있다. 할 일 앱 정도는 혼자 만들어 낼 수 있는 상태.',
    gap: '데이터가 100개만 넘어도 느려지는 이유를 모른다. Array, Dictionary, Set 중 뭘 써야 하는지 감으로 고른다. "일단 동작은 하는데 왜 느린지 모르겠다"는 상태.',
    next: '스케이트보드로 목적지에 갈 수는 있지만, 오르막길에서 멈춘다. 속도가 필요하다.',
    chapters: [
      {
        id: '1-1', ico: '📱', title: '화면에 뭔가 띄우기',
        trigger: '"Hello World"를 앱에서 보고 싶다',
        why: '모든 학습은 첫 성공 경험에서 시작된다. 이론이 아니라 화면이 먼저여야 "계속하고 싶다"는 동기가 생긴다. 아무것도 없는 상태에서 시작해 빌드 성공 버튼을 누르는 그 순간이 커리큘럼 전체의 출발점이다.',
        topics: [
          { name: 'SwiftUI 첫 화면', sub: 'View, body, preview', details: ['ContentView — 앱 시작점, struct가 View를 채택하는 구조', 'Text, Image, Button — 가장 자주 쓰는 3가지', 'VStack, HStack, ZStack — 화면을 쌓는 3가지 방향', 'modifier 체이닝 — .font(), .foregroundColor(), .padding()', 'Xcode Previews — 빌드 없이 실시간 UI 확인'] },
          { name: '레이아웃 시스템', sub: '내 맘대로 안 되는 이유', details: ['frame — 크기 직접 지정, maxWidth: .infinity', 'padding vs offset — 여백 추가 vs 위치 이동', 'Spacer — 남은 공간 채우기', 'GeometryReader — 부모 크기 읽어서 반응형으로', 'alignment — 정렬 기준점, 왜 기대와 다르게 동작하는가'] },
          { name: '앱 구조 이해', sub: '@main, App, Scene, View', details: ['@main — 진입점 마킹, App 프로토콜 채택', 'WindowGroup — 기본 Scene', 'View 계층 — 부모/자식 관계가 레이아웃에 미치는 영향', '실기기 vs 시뮬레이터 — 성능 차이가 나는 이유'] },
        ]
      },
      {
        id: '1-2', ico: '🔄', title: '버튼 누르면 화면이 바뀌게',
        trigger: '버튼을 눌렀는데 텍스트가 안 바뀐다',
        why: '"버튼을 눌렀는데 왜 바뀌지 않지?" — 이 질문을 직접 경험한 후에야 상태 관리의 필요성이 진짜가 된다. 1-1에서 화면을 띄웠다면, 첫 번째 벽은 반드시 여기서 나온다. 문제를 만나기 전에 해법을 가르치지 않는다.',
        topics: [
          { name: '@State의 본질', sub: '왜 그냥 var가 아닌가', details: ['SwiftUI 렌더링 루프 — 상태 변화 → View 재생성', '@State — View가 소유하는 값, 변경 시 자동 재렌더', '@Binding — 부모의 State를 자식이 읽고 쓰기', '단방향 데이터 흐름 — 상태는 항상 위에서 아래로', '왜 View 안에서 직접 var를 바꿔도 반영이 안 되는가'] },
          { name: '사용자 입력', sub: 'TextField, Toggle, Slider', details: ['TextField + @State String 연결', 'Toggle — Bool 상태에 바인딩', 'Slider — 범위 내 실수 값 선택', 'Picker — 목록 선택, Segmented 스타일', '키보드 타입 설정, 완료 버튼 처리'] },
          { name: '리스트와 네비게이션', sub: '데이터를 목록으로 보여주기', details: ['List + ForEach — 배열을 목록으로 렌더링', 'Identifiable — 각 항목을 식별하는 방법', 'onDelete — 스와이프 삭제', 'NavigationStack + NavigationLink — 화면 이동', 'Sheet, Alert — 모달과 다이얼로그'] },
          { name: '첫 완성 앱', sub: '할 일 앱 처음부터 끝까지', details: ['Todo struct 설계 — id, title, isCompleted', '@State [Todo] — 추가/삭제/완료 토글', 'UserDefaults + Codable — 재시작 후에도 데이터 유지', 'Sheet로 새 할 일 입력 화면 연결', 'Empty State — 목록이 비었을 때 안내 화면'] },
        ]
      },
      {
        id: '1-3', ico: '🗂', title: '여러 화면과 공유 상태',
        trigger: '화면이 2개인데 데이터를 어떻게 공유하는가',
        why: '2개의 화면이 되는 순간 데이터 공유 문제가 터진다. 1-2에서 1개 화면의 상태를 다뤘다면, 이제 화면 간 데이터 흐름이라는 다음 질문이 자연스럽게 나온다. @StateObject, @EnvironmentObject는 이 문제 없이는 존재 이유를 설명할 수 없다.',
        topics: [
          { name: '화면 전환 패턴', sub: 'NavigationStack, Sheet, FullScreenCover', details: ['NavigationStack + NavigationLink — 스택 기반 이동', 'NavigationPath — 프로그래밍 방식 화면 이동', 'sheet vs fullScreenCover — 차이와 선택 기준', 'dismiss — 화면 닫기'] },
          { name: '공유 상태 관리', sub: '화면이 바뀌어도 데이터 유지', details: ['@StateObject — 참조 타입 상태 생성 및 소유', '@ObservedObject — 외부 StateObject 구독', '@Observable (iOS 17+) — 더 단순한 새 방법', '@EnvironmentObject — 깊은 계층에 상태 전달', 'ObservableObject + @Published — 변경 감지 메커니즘'] },
          { name: 'TabView', sub: '하단 탭 바 앱 구성', details: ['TabView + tabItem — 아이콘과 레이블', '탭별 독립 NavigationStack', 'Programmatic 탭 전환 — @State로 선택 탭 제어'] },
        ]
      },
      {
        id: '1-4', ico: '✏️', title: '막히는 Swift 문법',
        trigger: '컴파일 에러가 나는데 왜 나는지 모른다',
        why: '앱을 만들면서 이미 옵셔널 에러, 클로저 경고, 인덱스 오류를 만났다. 맥락이 생긴 지금 배우는 것과 처음부터 문법책을 읽는 것의 차이가 바로 여기서 드러난다. "왜 이 문법이 필요한가"의 답을 이미 몸으로 알고 있다.',
        topics: [
          { name: '타입과 옵셔널', sub: '"must be unwrapped" 에러 해결', details: ['let vs var, 타입 추론 vs 명시', 'nil — "값이 없음"을 표현하는 방법', 'if let / guard let — 안전한 언래핑', '옵셔널 체이닝 ?. — nil 전파 막기', 'nil 병합 ?? — 기본값 / 강제 언래핑 ! 언제 써도 되는가'] },
          { name: '컬렉션 핵심', sub: '"Index out of range" 에러 해결', details: ['Array — 순서 있는 목록, 인덱스 주의', 'Dictionary — 키 조회 결과가 옵셔널인 이유', 'Set — 중복 없음, contains 성능', 'map, filter, forEach — 반복 대신 선언적으로'] },
          { name: '클로저 읽기', sub: '{ } 코드가 왜 이렇게 생겼는가', details: ['기본 문법 — { 파라미터 in 본문 }', '후행 클로저 — 마지막 파라미터를 밖으로', '단축 인자명 $0, $1', '[weak self] — 언제 필요한가, 언제 없어도 되는가'] },
        ]
      },
    ]
  },
  {
    id: 's2', n: '2', ico: '🐢', title: '"왜 이렇게 느려?"',
    color: 'var(--s2)', theme: 's2-theme',
    problem: '목록에 데이터가 많아지니 스크롤이 버벅인다 / 검색 결과가 늦게 뜬다',
    solve: '자료구조 선택 기준, 알고리즘 복잡도, 올바른 컬렉션 사용',
    link: 'https://m1zz.github.io/swift-data-structures/',
    analogy: '🛹 더 빠른 스케이트보드',
    status: '느린 코드를 찾아서 고칠 수 있다. Array 대신 Dictionary를 쓰면 왜 빨라지는지 설명할 수 있다. Big-O를 읽고, Instruments로 병목을 찾는다. 코딩 테스트 기초 문제를 풀 수 있다.',
    gap: '기능이 늘면서 코드가 스파게티가 된다. 파일 하나가 1000줄이 넘고, 수정하면 다른 곳이 깨진다. "빠르지만 읽을 수 없는 코드"가 되어간다.',
    next: '속도는 얻었지만, 커브를 돌 수 없다. 구조가 필요하다.',
    chapters: [
      {
        id: '2-1', ico: '🔬', title: '느린 이유를 숫자로 보기',
        trigger: '"느리다"는 감각을 측정 가능한 수치로 바꾸고 싶다',
        why: '"느리다"는 감각만으로는 아무것도 고칠 수 없다. 자료구조와 알고리즘을 배우기 전에 Big-O와 Instruments로 수치화하는 법부터 배워야 한다. 도구 없이 원인을 찾으러 가는 건 지도 없이 보물을 찾는 것과 같다.',
        topics: [
          { name: 'Big-O 복잡도', sub: '입력이 커질수록 얼마나 느려지는가', details: ['O(1) — Dictionary 조회, 아무리 커도 같은 시간', 'O(n) — Array 선형 탐색, 데이터에 비례', 'O(n²) — 이중 루프, 10만 건에서 폭발', 'O(log n) — 이진 탐색, 반씩 줄이기', 'O(n log n) — 정렬의 이론적 최솟값'] },
          { name: 'Instruments 실전', sub: 'CPU 병목 눈으로 찾기', details: ['Time Profiler — 함수별 CPU 사용 시간', 'Hangs — 메인 스레드 블로킹 감지', 'SwiftUI 재렌더링 횟수 확인', 'O(n²) 코드를 O(n)으로 바꾸는 실습'] },
        ]
      },
      {
        id: '2-2', ico: '📦', title: '올바른 자료구조 고르기',
        trigger: 'Array.contains가 너무 느리다 / 중간 삽입이 느리다',
        topics: [
          { name: 'Array 내부 동작', sub: '왜 중간 삽입이 끝 추가보다 느린가', details: ['동적 배열 — 꽉 차면 2배 확장하는 메커니즘', 'append O(1) amortized vs insert(at:) O(n)', 'contains O(n) — 처음부터 끝까지 다 봄', 'ContiguousArray — 메모리 연속 보장, 캐시 효율', '언제 Array를 다른 구조로 바꿔야 하는가'] },
          { name: 'Dictionary & Set', sub: 'O(1) 탐색의 비밀', details: ['해시 함수 — 키를 버킷 번호로 변환', '해시 충돌 — O(1)이 "평균"인 이유', 'Hashable 구현 — 커스텀 타입을 키로 쓰기', 'Set.contains — Array보다 100배 빠른 이유', '실전: 중복 제거, 빠른 포함 여부 확인'] },
          { name: '스택과 큐', sub: 'undo/redo, 작업 대기열 구현', details: ['Stack(LIFO) — 뒤로 가기, undo 시스템', 'Queue(FIFO) — 다운로드 대기열, 순서 보장', 'Priority Queue — 중요한 것 먼저 (Heap 기반)', '직접 구현 vs Swift Collections 패키지'] },
          { name: '트리 구조', sub: '계층 데이터와 자동완성', details: ['이진 탐색 트리 — 정렬 데이터에서 O(log n)', 'Heap — 최솟값/최댓값 O(1) 접근', 'Trie — 자동완성 검색어 직접 구현', '그래프 — 인접리스트 vs 인접행렬', 'BFS/DFS — 연결된 항목 탐색 (추천, 경로)'] },
        ],
        why: '2-1에서 느린 지점을 찾았다. 이제 "왜 느린가"를 알아야 한다. 대부분의 성능 문제는 잘못된 자료구조 선택에서 비롯된다 — Array.contains가 느린 이유, Dictionary가 빠른 이유를 모르면 측정만 하고 고치지 못한다.',
      },
      {
        id: '2-3', ico: '⚡', title: '알고리즘으로 성능 개선',
        trigger: '정렬, 검색 기능을 효율적으로 만들고 싶다',
        why: '올바른 자료구조를 골랐다면 그것을 어떻게 탐색하고 정렬하는가가 남는다. 자료구조와 알고리즘은 같은 동전의 양면 — 자료구조를 먼저 이해해야 알고리즘이 왜 그렇게 설계됐는지 납득된다.',
        topics: [
          { name: '정렬', sub: '언제 어떤 정렬이 빠른가', details: ['삽입 정렬 — 거의 정렬된 데이터엔 가장 빠름', '합병 정렬 — 안정 정렬 필요 시', '퀵 정렬 — 평균 O(n log n), Swift sort() 내부 알고리즘', '커스텀 정렬 — sort { $0.date > $1.date }'] },
          { name: '탐색', sub: '검색 기능 성능 높이기', details: ['이진 탐색 — 정렬된 배열에서 O(log n)', '하한/상한 탐색 — 범위 조건 구현', '실전: 검색 필터 O(n²) → O(n) 개선 과정'] },
          { name: '핵심 패러다임', sub: '복잡한 로직을 체계적으로 접근', details: ['동적 프로그래밍 — 중복 계산 제거 (캐싱)', '그리디 — 매 순간 최선 선택', '투 포인터 — O(n²)를 O(n)으로', '분할 정복 — 큰 문제를 절반으로 쪼개기', 'Swift 코딩테스트 환경 — 백준/프로그래머스'] },
        ]
      },
    ]
  },
  {
    id: 's3', n: '3', ico: '🍝', title: '"코드가 스파게티가 됐다"',
    color: 'var(--s3)', theme: 's3-theme',
    problem: '기능이 늘자 파일이 1000줄 / 수정하면 다른 곳이 깨진다 / 재사용이 안 된다',
    solve: 'OOP, SOLID, 프로토콜, 디자인 패턴, 아키텍처, 모듈화',
    analogy: '🚲 자전거',
    status: '코드를 책임 단위로 나눌 수 있다. MVVM으로 구조를 잡고, 프로토콜로 의존성을 분리한다. 수정해도 다른 곳이 안 깨지는 코드를 짠다. 팀 프로젝트에서 PR 리뷰를 줄 수 있는 수준.',
    gap: '앱이 크래시가 나는데 원인을 모른다. deinit이 안 불리고, 메모리가 계속 늘어간다. 구조는 좋은데 앱이 죽는다.',
    next: '자전거를 탈 수 있게 됐다. 하지만 체인이 끊어지면 고칠 줄 모른다.',
    chapters: [
      {
        id: '3-1', ico: '🧩', title: '책임을 나누는 방법',
        trigger: '함수 하나가 200줄 / 같은 코드가 3군데에 복붙돼 있다',
        why: '스파게티 코드의 근본 원인은 책임 분리 실패다. 패턴보다 원칙이 먼저여야 한다 — OOP와 SOLID를 모르면 디자인 패턴을 써도 또 다른 방식의 스파게티가 된다. 지금 이 챕터는 S3 전체의 사상적 기반이다.',
        topics: [
          { name: 'OOP 4원칙 실전', sub: '이론이 아닌 실제 코드 개선', details: ['캡슐화 — 외부에서 몰라도 되는 것 숨기기 (private)', '상속 — 코드 재사용, 언제 상속이 독이 되는가', '다형성 — 같은 메서드명, 타입에 따라 다른 동작', '추상화 — 복잡한 것을 단순하게 보이게', '1000줄 파일을 300줄로 줄이는 리팩터링 실습'] },
          { name: 'SOLID 원칙', sub: '수정해도 다른 곳이 안 깨지는 코드', details: ['S — 클래스가 바뀌는 이유는 하나여야 (단일 책임)', 'O — 새 기능 추가 시 기존 코드 수정 없이 (개방/폐쇄)', 'L — 자식은 부모를 완전히 대체할 수 있어야 (리스코프)', 'I — 거대한 프로토콜 대신 작은 프로토콜 여러 개 (인터페이스 분리)', 'D — 구현이 아닌 추상에 의존 (의존성 역전)'] },
          { name: '프로토콜 지향', sub: '상속 없이 기능 조합하기', details: ['Protocol = 할 수 있는 것의 명세', 'Protocol Extension — 기본 구현으로 중복 제거', 'Composition — 여러 프로토콜 조합 vs 깊은 상속', 'any vs some Protocol — 언제 무엇을', 'associatedtype — 프로토콜의 Generic'] },
          { name: 'Generic', sub: '타입만 다른 중복 코드 한번에 처리', details: ['Generic 함수 — <T>로 타입 추상화', '제약 조건 — where T: Equatable', 'Generic struct/class — Stack<Element> 구현', 'Opaque Type (some) — 구체 타입 숨기면서 성능 유지'] },
        ]
      },
      {
        id: '3-2', ico: '📐', title: '검증된 설계 패턴 적용',
        trigger: '화면 전환 코드가 View에 있다 / 의존성이 사방으로 얽혔다',
        why: '3-1에서 책임 분리의 원칙을 이해했다. 이제 수십 년간 검증된 해법인 패턴으로 구체화할 차례다. 원칙 없이 패턴을 먼저 외우면 "이걸 언제 써야 하는가"를 모른다 — 원칙이 패턴을 선택하는 기준이 된다.',
        topics: [
          { name: '생성 패턴', sub: '객체 만드는 방식을 표준화', details: ['Factory — 생성 로직을 한 곳에 모으기', 'Builder — 단계적으로 조립, SwiftUI ViewBuilder', 'Singleton — 왜 테스트를 어렵게 만드는가', 'Dependency Injection — 외부에서 주입받는 것의 장점'] },
          { name: '행동 패턴', sub: '객체 간 통신 정리', details: ['Observer — @Published, Combine, NotificationCenter 비교', 'Strategy — 알고리즘을 런타임에 교체하기', 'Command — 작업을 객체로 표현, undo/redo', 'State — 상태에 따라 행동이 달라지는 객체', 'Coordinator — 화면 전환 책임 분리'] },
          { name: '아키텍처 패턴', sub: '앱 전체 구조를 어떻게 잡을 것인가', details: ['MVC — UIKit 기본, 왜 Massive ViewController가 되는가', 'MVVM — ViewModel로 로직 분리, 테스트 가능하게', 'Repository — 데이터 소스를 추상화하는 레이어', 'Clean Architecture — 의존성 방향 원칙', 'TCA — The Composable Architecture 입문'] },
        ]
      },
      {
        id: '3-3', ico: '🏗', title: '프로젝트 구조와 코드 품질',
        trigger: '파일이 100개가 됐는데 어디 있는지 모른다',
        why: '함수·클래스 단위 설계를 할 줄 알게 됐다. 이제 시야를 프로젝트 전체로 넓힐 때다. 파일이 100개가 넘으면 "잘 짠 클래스"만으로는 부족하다 — 어떻게 나누고 어디에 두는가라는 구조 문제가 시작된다.',
        topics: [
          { name: '모듈화', sub: '피처별로 코드 분리', details: ['SPM — 라이브러리로 분리하고 GitHub에 배포', '멀티 타겟 — 앱/위젯/익스텐션 코드 공유', '레이어드 아키텍처 — Presentation / Domain / Data', '의존성 방향 — 어느 모듈이 어느 모듈을 알아야 하는가'] },
          { name: '코드 컨벤션', sub: '일관된 스타일로 가독성 높이기', details: ['SwiftLint — 규칙 기반 스타일 자동 검사', 'SwiftFormat — 자동 포매팅', 'Naming — 타입, 함수, 변수 이름 짓는 원칙', 'MARK: — 코드 섹션 구분'] },
          { name: '리팩터링', sub: '기존 코드를 안전하게 개선하기', details: ['코드 냄새(Code Smell) — 리팩터링이 필요한 징후들', '함수 추출, 이름 바꾸기, 조건 단순화', '테스트 없이 리팩터링하면 안 되는 이유', '레거시 UIKit → SwiftUI 점진적 마이그레이션'] },
        ]
      },
    ]
  },
  {
    id: 's4', n: '4', ico: '💀', title: '"앱이 죽는다"',
    color: 'var(--s4)', theme: 's4-theme',
    problem: 'EXC_BAD_ACCESS 크래시 / 메모리 경고 후 강제 종료 / deinit이 불리지 않는다',
    solve: 'ARC 원리, 순환 참조, weak/unowned, Instruments, 에러 처리',
    analogy: '🚲 정비할 줄 아는 자전거',
    status: '메모리 누수를 찾아서 고칠 수 있다. ARC를 이해하고, weak/unowned를 정확히 쓴다. Instruments로 Leak을 잡고, 에러를 우아하게 처리한다. 크래시 없는 안정적인 앱을 만들 수 있다.',
    gap: '오프라인에서만 동작하는 앱이다. 서버 데이터를 가져오고 싶은데 URLSession이 복잡하게 생겼다. JSON을 파싱하고 로컬에 저장하는 방법을 모른다.',
    next: '자전거는 완벽해졌다. 하지만 혼자 힘으로만 간다. 엔진이 필요하다.',
    chapters: [
      {
        id: '4-1', ico: '🧠', title: '메모리가 어떻게 관리되는가',
        trigger: '앱이 실행 중 메모리 경고 후 죽는다',
        why: 'iOS 크래시의 상당수는 메모리 문제에서 온다. weak를 쓰라는 말을 따르기 전에 왜 써야 하는지를 먼저 알아야 한다. ARC 원리를 모르면 순환 참조를 만들어도 왜 위험한지 체감할 수 없다.',
        topics: [
          { name: 'Stack vs Heap', sub: '데이터가 어디에 저장되는가', details: ['Stack — 함수 호출 시 자동 할당/해제, 빠름', 'Heap — 동적 할당, 개발자(ARC)가 관리', 'struct → Stack, class → Heap (조건부)', 'Escape 분석 — 컴파일러의 Heap 할당 최소화', 'Stack overflow — 무한 재귀가 크래시를 일으키는 이유'] },
          { name: 'ARC 동작 원리', sub: '어떻게 자동으로 해제되는가', details: ['Retain Count — 참조 추가 +1, 해제 -1', 'Count가 0 → deinit 호출 → 메모리 반환', 'ARC가 컴파일 타임에 삽입하는 retain/release', 'deinit — 해제 시점 직접 확인하는 디버깅 팁', 'GC와의 차이 — 런타임 오버헤드 없음, 예측 가능'] },
          { name: '강한 참조 순환', sub: '"왜 deinit이 불리지 않는가"', details: ['A가 B를, B가 A를 strong 참조 → 영원히 해제 안 됨', 'ViewModel ↔ 클로저 순환 — 가장 흔한 패턴', 'Delegate 패턴에서의 순환 참조', 'Memory Graph Debugger — 순환 참조 시각적 확인'] },
          { name: 'weak / unowned', sub: '순환 참조를 끊는 방법', details: ['weak — 참조 카운트 안 올림, 자동 nil', 'unowned — nil 없다고 보장, 잘못 쓰면 크래시', '[weak self] capture list — 클로저의 순환 끊기', '언제 weak, 언제 unowned — 선택 기준', 'Delegate는 왜 반드시 weak var인가'] },
        ]
      },
      {
        id: '4-2', ico: '🔍', title: '크래시 원인 찾고 고치기',
        trigger: 'Thread 1: EXC_BAD_ACCESS — 어디가 문제인지 모른다',
        why: '4-1에서 메모리 원리를 이해했다. 이론은 실전 도구 앞에서 완성된다. Instruments와 에러 처리 패턴은 원리를 알아야 의미 있게 읽힌다 — 순서가 바뀌면 도구만 배우고 원인은 모르게 된다.',
        topics: [
          { name: 'Instruments 실전', sub: '메모리 누수와 크래시 원인 찾기', details: ['Leaks — 해제 안 된 객체 목록', 'Allocations — 시간에 따른 메모리 증가 확인', 'Memory Graph — 살아있는 객체 그래프 탐색', '실습: 의도적 누수 → 찾기 → 고치기'] },
          { name: '값 타입 최적화', sub: 'Array 복사가 실제로 느리지 않은 이유', details: ['Copy-on-Write(COW) — 수정 전까지 복사를 지연', 'isKnownUniquelyReferenced — 공유 여부 확인', 'struct가 유리한 경우 vs class가 유리한 경우'] },
          { name: '에러 처리 완전 정복', sub: '크래시 대신 우아하게 실패하기', details: ['throws / try / do-catch — 복구 가능한 에러', 'Result<Success, Failure> — 에러를 값으로 다루기', 'assert / precondition / fatalError — 불가능 상태 표현', 'defer — 어떤 경로로 나가도 반드시 실행'] },
        ]
      },
      {
        id: '4-3', ico: '🔢', title: '컴퓨터가 숫자와 문자를 다루는 방법',
        trigger: '금액 계산이 틀렸다 / 이모지 포함 문자열 길이가 이상하다',
        why: '메모리를 다루다 보면 반드시 비트 수준 문제를 만난다. "0.1 + 0.2가 왜 틀리는가", "이모지 글자 수가 왜 이상한가" — 이 의문이 생긴 지금이 가장 자연스러운 시점이다. S4 이전엔 이 질문 자체가 나오지 않는다.',
        topics: [
          { name: '정수 표현', sub: 'Int overflow가 일어나는 이유', details: ['2의 보수 — 음수를 비트로 표현하는 방법', 'Int8이 -128~127인 이유', 'Overflow 연산자 &+ — 의도적 오버플로우'] },
          { name: '부동소수점 함정', sub: '0.1 + 0.2 ≠ 0.3 인 이유', details: ['IEEE 754 — 실수를 비트로 표현하는 표준', 'Float vs Double — 정밀도 차이', '금액 계산에 Double 금지 — Decimal 사용'] },
          { name: '문자와 인코딩', sub: '이모지 글자 수가 왜 다르게 나오는가', details: ['Unicode — 전 세계 문자를 하나의 표준으로', 'UTF-8 — 가변 길이 인코딩', 'Swift String 인덱스가 Int가 아닌 이유', '이모지 = 여러 코드 포인트의 조합'] },
        ]
      },
    ]
  },
  {
    id: 's5', n: '5', ico: '🌐', title: '"서버 데이터가 필요하다"',
    color: 'var(--s5)', theme: 's5-theme',
    problem: 'API를 호출해서 JSON을 파싱하고 싶다 / 데이터를 앱에 저장하고 싶다',
    solve: 'HTTP, URLSession, Codable, 로컬 DB, 클라우드 동기화, 보안',
    analogy: '🛵 오토바이',
    status: '서버와 통신하는 앱을 만들 수 있다. REST API를 호출하고, JSON을 파싱하고, Core Data에 저장한다. 로그인, 토큰 관리, HTTPS 보안까지 구현한다. 실제 서비스 수준의 앱을 만들 수 있는 상태.',
    gap: '네트워크 요청 중 UI가 멈춘다. 이미지를 여러 장 불러오면 스크롤이 버벅인다. 메인 스레드가 뭔지, 왜 async/await을 써야 하는지 정확히 모른다.',
    next: '오토바이로 달릴 수 있다. 하지만 동시에 두 가지를 할 수 없다.',
    chapters: [
      {
        id: '5-1', ico: '📡', title: 'HTTP와 REST API',
        trigger: 'URLSession이 왜 이렇게 복잡하게 생겼는가',
        why: '로컬을 넘어 서버가 필요해졌다. URLSession의 모든 설계 결정 — 왜 async/await인가, 왜 URLRequest가 별도 객체인가 — 은 HTTP를 알아야 납득된다. 도구 전에 프로토콜이다.',
        topics: [
          { name: 'HTTP 완전 분석', sub: '요청과 응답이 어떻게 생겼는가', details: ['요청 구조 — Method, URL, Headers, Body', 'GET/POST/PUT/DELETE/PATCH — 각각의 의미', '상태 코드 — 200, 201, 400, 401, 403, 404, 500', 'RESTful 설계 — 리소스 기반 URL 설계 원칙', 'HTTP/2 vs HTTP/3 — iOS URLSession의 활용'] },
          { name: 'URLSession 심화', sub: 'iOS에서 네트워크 요청 처리', details: ['URLRequest — Method, Headers, Body 설정', 'DataTask, DownloadTask, UploadTask — 언제 무엇을', 'Background Session — 앱 종료 후 완료되는 다운로드', 'URLCache — 응답 캐싱 전략', 'async/await + URLSession — 현대적 네트워크 코드'] },
          { name: 'JSON 파싱', sub: 'Codable로 자동 변환', details: ['Codable = Encodable + Decodable', 'CodingKeys — JSON 키와 프로퍼티명 다를 때', 'Nested JSON — 중첩 구조 처리', 'API 에러 응답 파싱 — 성공/실패 분기', 'Custom Decoder — 복잡한 변환 직접 처리'] },
          { name: '네트워크 레이어 설계', sub: '중복 없고 테스트 가능한 구조', details: ['API Client Protocol — 테스트 시 Mock으로 교체', 'Endpoint enum — URL 조합을 타입 안전하게', 'Interceptor — 공통 헤더, 토큰 자동 갱신', 'Retry 로직 — 실패 시 재시도 전략'] },
        ]
      },
      {
        id: '5-2', ico: '💾', title: '데이터 영속성',
        trigger: '앱을 껐다 켜도 데이터가 살아있게 하고 싶다',
        why: '5-1에서 서버에서 데이터를 받았다. 자연스러운 다음 질문 — "앱을 껐다 켜도 남아있게 하려면?" 네트워크와 영속성은 항상 세트다. 받아온 데이터를 어디에 어떻게 저장하는가가 앱의 신뢰성을 결정한다.',
        topics: [
          { name: '저장소 선택 기준', sub: '무엇을 어디에 저장하는가', details: ['UserDefaults — 소량 설정값, Codable 커스텀 타입', 'Keychain — 패스워드, 토큰 등 민감한 정보', 'FileManager — 이미지, 문서, 바이너리', '크기 / 보안 / 동기화 필요 여부 — 선택 기준'] },
          { name: 'SQL 기초', sub: '구조화된 대량 데이터 다루기', details: ['SELECT, INSERT, UPDATE, DELETE', 'WHERE, ORDER BY, LIMIT', 'JOIN — 관계 있는 테이블 연결', 'INDEX — B-Tree 인덱스, 쿼리 속도 향상 원리', 'GRDB — Swift에서 SQLite 직접 다루기'] },
          { name: 'Core Data & SwiftData', sub: 'Apple 공식 로컬 데이터베이스', details: ['Entity, Attribute, Relationship 설계', 'NSFetchRequest + Predicate 조건 조회', 'SwiftData — @Model, @Query (iOS 17+)', 'Migration — 스키마 변경 시 데이터 유지', 'Core Data vs SwiftData 선택 기준'] },
          { name: '클라우드 동기화', sub: '여러 기기에서 같은 데이터', details: ['CloudKit — iCloud 연동', 'Firebase Firestore — 실시간 동기화', '오프라인 우선 — Local First 패턴', '충돌 해결 전략'] },
        ]
      },
      {
        id: '5-3', ico: '🔐', title: '네트워크 보안',
        trigger: 'HTTPS인데 왜 해킹당할 수 있나 / 토큰을 어디에 저장해야 하나',
        why: '데이터를 주고받고 저장할 줄 안다. 이제 "이게 안전한가?"가 반드시 따라온다. 보안은 기능 개발과 동시에 배우는 것이 아니라 기능이 완성된 직후 배워야 의미가 있다 — 지킬 것이 생겼을 때 잠금장치를 배운다.',
        topics: [
          { name: 'HTTPS와 TLS', sub: '안전한 통신의 원리', details: ['TLS 핸드셰이크 — 암호화 키 교환 과정', '인증서와 CA — 서버가 진짜인지 검증', 'SSL Pinning — MITM 공격 방어', 'App Transport Security — iOS의 강제 HTTPS'] },
          { name: '인증 구현', sub: 'OAuth, JWT, Biometric', details: ['OAuth 2.0 — 소셜 로그인 플로우', 'JWT — 토큰 구조, Access + Refresh 패턴', 'Keychain에 토큰 저장', 'Face ID / Touch ID — LocalAuthentication'] },
          { name: '암호화 기초', sub: 'CryptoKit 실전', details: ['대칭키(AES), 비대칭키(RSA), 해시(SHA-256)', 'CryptoKit — Swift 암호화 구현', 'API Key 코드 하드코딩 금지 — 노출 위험'] },
        ]
      },
    ]
  },
  {
    id: 's6', n: '6', ico: '🧊', title: '"UI가 버벅이고 앱이 멈춘다"',
    color: 'var(--s6)', theme: 's6-theme',
    problem: '네트워크 요청 중 화면이 얼어붙는다 / 스크롤 중 프레임 드랍이 생긴다',
    solve: '동시성(GCD, async/await, Actor), 렌더링 최적화, Combine',
    analogy: '🚗 자동차',
    status: '부드럽고 빠른 앱을 만들 수 있다. async/await로 비동기를 처리하고, Actor로 데이터 레이스를 방지한다. 렌더링을 최적화하고, Combine으로 복잡한 이벤트를 조합한다. 사용자가 체감하는 품질이 확 달라지는 단계.',
    gap: '"이 코드 수정해도 될까?" 두려움이 있다. 테스트가 없어서 배포할 때마다 긴장한다. 수동으로 빌드하고 수동으로 배포한다.',
    next: '자동차를 몰 수 있다. 하지만 보험도 없고, 정비소도 없다.',
    chapters: [
      {
        id: '6-1', ico: '⚙️', title: '왜 메인 스레드가 중요한가',
        trigger: 'URLSession 완료 후 UI 업데이트하니 퍼플 경고가 뜬다',
        why: 'S5에서 URLSession을 쓰기 시작하는 순간 메인 스레드 경고가 뜬다. 동시성은 네트워크 코드를 쓰는 개발자에게 선택이 아닌 필수다. S5 이전에 배우면 문제 없는 코드에서 왜 이게 필요한지 와닿지 않는다.',
        topics: [
          { name: '스레드 기초', sub: 'OS가 동시에 여러 일을 하는 방법', details: ['Process vs Thread — 독립 메모리 vs 공유 메모리', '메인 스레드 — UI 전담, 여기 막히면 앱 멈춤', '컨텍스트 스위칭 — 스레드 전환 비용', 'Race Condition — 두 스레드가 같은 데이터를 동시에 쓸 때', 'iOS RunLoop — 메인 스레드가 이벤트를 처리하는 방식'] },
          { name: 'GCD 완전 분석', sub: '스레드 풀을 자동 관리하는 방법', details: ['DispatchQueue.main — UI는 반드시 여기서', 'DispatchQueue.global(qos:) — 백그라운드', 'sync vs async — 현재 스레드를 블로킹하는가', 'serial vs concurrent — 순서 보장 vs 병렬', 'DispatchGroup, Semaphore, Barrier'] },
          { name: 'async/await', sub: '콜백 지옥 탈출', details: ['async 함수 — 비동기 결과를 동기처럼', 'await — 기다리지만 스레드는 안 막음', 'Task — 비동기 작업 생명주기', 'async let — 병렬 실행', 'withCheckedContinuation — 콜백 → async 변환'] },
          { name: 'Actor', sub: 'Data Race를 컴파일러가 막는 방법', details: ['Actor — 내부 상태에 직렬 접근 보장', 'MainActor — UI 업데이트 안전하게', 'Sendable — 스레드 안전 타입 마킹', 'GCD vs async/await — 같은 문제를 두 방식으로'] },
        ]
      },
      {
        id: '6-2', ico: '🎞', title: '렌더링 성능 최적화',
        trigger: 'LazyVStack인데도 스크롤이 버벅인다',
        why: '6-1에서 스레드를 이해했다. 이제 SwiftUI 렌더링 최적화로 범위를 넓힌다. 메인 스레드 개념 없이 "왜 재렌더링이 일어나는가"를 이해할 수 없다 — 동시성이 렌더링 최적화의 전제 조건이다.',
        topics: [
          { name: 'SwiftUI 렌더링', sub: '불필요한 재렌더링 막기', details: ['SwiftUI diff — 상태 변화 → View 재생성 조건', '@StateObject vs @ObservedObject — 생명주기 차이', 'Equatable — 같은 값이면 렌더링 스킵', 'LazyVStack vs List — 각각의 특성', 'identity, lifetime, dependency — SwiftUI 3원칙'] },
          { name: '이미지 최적화', sub: '메모리 폭발 없이 이미지 보여주기', details: ['다운샘플링 — ImageIO로 메모리 10배 절약', 'NSCache — 자동 해제 이미지 캐시', '이미지 포맷 — HEIC, WebP vs PNG/JPEG', 'Prefetching — 스크롤 전 미리 로드'] },
          { name: '앱 시작 속도', sub: '런치 타임 단축하기', details: ['Cold vs Warm Launch', 'dyld 링킹 — 동적 라이브러리 로딩 시간', 'Lazy Initialization — 필요할 때 초기화', 'MetricKit — 실제 사용자 런치 시간 측정'] },
        ]
      },
      {
        id: '6-3', ico: '🔄', title: 'Combine과 반응형 프로그래밍',
        trigger: '검색창 debounce 적용 / 여러 비동기 이벤트를 조합해야 한다',
        why: '비동기 이벤트가 여러 개 조합되면서 코드가 다시 복잡해진다. 그 복잡함을 직접 경험한 지금이 Combine을 배울 시점이다. async/await를 먼저 이해해야 Combine이 어떤 문제를 추가로 해결하는지 납득된다.',
        topics: [
          { name: 'Combine 기초', sub: '이벤트를 스트림으로 다루기', details: ['Publisher — 시간에 따라 값을 방출하는 스트림', 'Subscriber — 값을 받아 처리', 'Operator — map, filter, flatMap, combineLatest', '@Published — 프로퍼티 변경을 Publisher로', 'AnyCancellable — 구독 수명 관리'] },
          { name: 'Combine 실전', sub: '검색, 폼 유효성, 네트워크 체이닝', details: ['debounce — 타이핑 중 요청 줄이기', 'removeDuplicates — 중복 이벤트 제거', 'combineLatest — 여러 입력 합쳐서 유효성 검사', 'flatMap + URLSession — 비동기 체이닝', '에러 처리 — catch, retry, replaceError'] },
        ]
      },
    ]
  },
  {
    id: 's7', n: '7', ico: '🧪', title: '"내 코드가 맞는지 모르겠다"',
    color: 'var(--s7)', theme: 's7-theme',
    problem: '배포 후 버그 발견 / 수정할 때마다 다른 곳이 깨질까 두렵다 / 배포가 귀찮다',
    solve: '테스팅, TDD, CI/CD, 크래시 분석, 앱 수익화와 운영',
    analogy: '🚗 보험과 정비소가 있는 자동차',
    status: '테스트를 작성하고, CI/CD로 자동 배포한다. 크래시 리포트를 분석하고, 사용자 행동을 추적한다. 앱으로 수익을 낸다. 혼자서 앱을 만들고, 배포하고, 운영하고, 돈을 버는 완전한 독립 개발자.',
    gap: '"왜 이렇게 동작하는가"의 근본 원리를 모른다. CPU가 코드를 어떻게 실행하는지, 컴파일러가 무엇을 하는지, async/await이 OS 레벨에서 어떻게 구현되는지 설명할 수 없다.',
    next: '자동차를 잘 운전한다. 하지만 엔진이 어떻게 돌아가는지는 모른다.',
    chapters: [
      {
        id: '7-1', ico: '✅', title: '테스트 작성하기',
        trigger: '"이 코드 수정해도 되는데?" 라는 두려움을 없애고 싶다',
        why: '코드가 충분히 쌓였고, "수정해도 괜찮을까"라는 두려움이 생겼다. 그 두려움을 몸으로 경험한 지금이 테스트의 가치를 진심으로 이해할 수 있는 시점이다. 두려움 없이 테스트를 배우면 절차만 외우게 된다.',
        topics: [
          { name: '테스트 철학', sub: '테스트는 비용이 아닌 투자', details: ['테스트 없는 리팩터링 = 눈 감고 달리기', '테스트 피라미드 — Unit:Integration:E2E = 70:20:10', '무엇을 테스트해야 하는가 — 구현이 아닌 행동', '테스트 가능한 코드 설계 — 의존성 주입'] },
          { name: 'XCTest 실전', sub: '첫 Unit Test 작성', details: ['@testable import — 내부 타입 테스트', 'XCTAssertEqual, XCTAssertTrue, XCTAssertNil', 'setUp/tearDown — 각 테스트 전후 초기화', 'async 테스트 — await + XCTestExpectation'] },
          { name: 'Mock / Stub', sub: '네트워크 없이 네트워크 코드 테스트', details: ['Protocol 기반 DI — 실제 구현을 가짜로 교체', 'Mock — 행동을 검증하는 가짜 객체', 'Stub — 정해진 응답 반환', 'MockURLProtocol — 실제 네트워크 없이 API 테스트'] },
          { name: 'TDD 실습', sub: '테스트가 설계를 이끄는 방식', details: ['Red → Green → Refactor 사이클', 'Swift Testing — @Test, @Suite (WWDC 2024)', 'Parameterized Test — 여러 입력 한번에', '계산기 앱을 TDD로 처음부터 만들기'] },
        ]
      },
      {
        id: '7-2', ico: '🤖', title: '자동화와 CI/CD',
        trigger: '배포가 너무 귀찮다 / 팀원과 코드 합칠 때마다 충돌난다',
        why: '테스트가 있으면 자동화가 가능해진다. 테스트 없는 CI/CD는 실수를 자동화하는 것에 불과하다 — 순서가 중요하다. "코드를 올리면 자동으로 검증된다"는 신뢰는 7-1이 먼저여야 만들어진다.',
        topics: [
          { name: '버전 관리 심화', sub: 'Git을 제대로 쓰는 방법', details: ['Git 내부 동작 — Object, Tree, Commit, Branch', 'rebase vs merge — 히스토리 전략', 'Bisect — 버그가 들어온 커밋 찾기', 'Git Flow vs GitHub Flow vs Trunk Based'] },
          { name: 'CI/CD 파이프라인', sub: '코드 올리면 자동으로 빌드/테스트/배포', details: ['Xcode Cloud — 워크플로우 설정, 자동 TestFlight 업로드', 'GitHub Actions — iOS 빌드 자동화', 'Fastlane match — 인증서/프로파일 팀 공유', 'Fastlane Snapshot — 스크린샷 자동 촬영'] },
          { name: '코드 리뷰 문화', sub: '피드백을 주고받는 방법', details: ['좋은 PR — 설명, 체크리스트, 스크린샷', '리뷰어 관점 — 무엇을 봐야 하는가', '코드 리뷰의 온도 — 기술 토론 vs 인신공격', 'ADR — 중요 결정을 기록으로 남기기'] },
        ]
      },
      {
        id: '7-3', ico: '📊', title: '출시 후 운영과 수익화',
        trigger: '앱을 배포했다 — 이제 무엇을 봐야 하는가',
        why: '배포까지 자동화됐다. 이것이 커리큘럼의 완결이다 — 이제 실제 사용자 앞에서 앱을 운영하고, 크래시를 분석하고, 수익을 내는 단계다. 만드는 법을 배웠다면 운영하는 법으로 마무리하는 것이 자연스럽다.',
        topics: [
          { name: '크래시 분석', sub: '앱이 죽는 이유 파악', details: ['Crashlytics — 리포트, 영향받은 사용자 수', 'Xcode Organizer — Apple 공식 크래시 로그', 'Symbolication — 주소를 함수명으로 변환', '우선순위 결정 — 빈도 × 심각도'] },
          { name: '앱 분석', sub: '유저가 실제로 어떻게 쓰는가', details: ['Firebase Analytics — 이벤트 기반 행동 추적', 'Funnel Analysis — 어디서 이탈하는가', 'A/B 테스트 — Feature Flag로 실험 설계', 'Retention — 유저가 다시 돌아오는가'] },
          { name: '수익화', sub: '실제로 돈을 버는 방법', details: ['StoreKit 2 — IAP 구현 완전 분석', '소모품/비소모품/구독 — 각각 언제 쓰는가', 'RevenueCat — 구독 상태 관리', 'ASO — 검색 노출 최적화', '20개 앱 운영 경험 — 무엇이 실제로 팔리는가'] },
        ]
      },
    ]
  },
  {
    id: 's8', n: '8', ico: '🔭', title: '"더 깊이 알고 싶다"',
    color: 'var(--s8)', theme: 's8-theme',
    problem: '왜 이렇게 동작하는지 근본 원리가 궁금하다 / 시니어로 성장하고 싶다',
    solve: '컴퓨터 구조, OS 원리, 컴파일러, 수학적 기초, 언어 이론',
    analogy: '🚗 엔진을 이해하는 드라이버',
    status: 'CPU, OS, 컴파일러의 원리를 이해한다. 왜 그렇게 동작하는지 설명할 수 있고, 새로운 기술이 나와도 본질을 꿰뚫는다. 주니어를 가르칠 수 있고, 기술 의사결정의 근거를 댈 수 있다. 시니어 개발자.',
    gap: '',
    next: '',
    chapters: [
      {
        id: '8-1', ico: '💻', title: '컴퓨터는 어떻게 코드를 실행하는가',
        trigger: 'CPU 바운드 vs I/O 바운드가 뭔지 / M1이 왜 빠른지 궁금하다',
        why: '7개의 Stage를 거치며 iOS 개발의 전체를 경험했다. 이제 "왜 이렇게 동작하는가"라는 근본적인 질문이 생긴다. CPU가 코드를 어떻게 실행하는지 알면 지금까지 배운 async/await, 메모리, 성능의 모든 것이 다시 보인다.',
        topics: [
          { name: 'CPU 구조', sub: 'Fetch → Decode → Execute', details: ['ALU, 레지스터, 제어 장치', '클럭 속도, 파이프라이닝, Branch Prediction', 'Apple Silicon — Unified Memory의 의미', 'CPU 바운드 vs I/O 바운드 — async가 필요한 근본 이유'] },
          { name: '메모리 계층', sub: '왜 캐시가 성능에 결정적인가', details: ['레지스터 < L1 < L2 < RAM < SSD — 속도/크기 트레이드오프', '캐시 히트 vs 미스 — 코드 접근 패턴이 성능을 바꾸는 이유', '공간/시간 지역성 — 배열이 연결 리스트보다 빠른 이유', 'iOS Jetsam — 메모리 압박 시 앱이 종료되는 메커니즘'] },
          { name: '가상 메모리', sub: '각 앱이 독립된 공간을 갖는 방법', details: ['페이지와 페이지 테이블 — 가상→물리 주소 변환', '페이지 폴트 — 실제 메모리에 없을 때', 'iOS Dirty vs Clean Memory — 최적화 핵심', 'ASLR — 주소 랜덤화, 보안 효과'] },
        ]
      },
      {
        id: '8-2', ico: '🏃', title: '운영체제가 하는 일',
        trigger: 'GCD가 왜 이렇게 설계됐는지 / 백그라운드에서 앱이 죽는 이유가 궁금하다',
        why: 'CPU 구조를 알면 "그 위에서 OS가 무엇을 관리하는가"로 자연스럽게 연결된다. GCD의 QoS, 백그라운드 처리 한계, 스케줄러 — 지금까지 "그냥 그런 것"으로 받아들였던 것들의 근거가 여기서 보인다.',
        topics: [
          { name: '프로세스 관리', sub: '앱 실행부터 종료까지', details: ['프로세스 생명주기, 스케줄링 알고리즘', 'iOS QoS — .userInteractive에서 .background까지', 'iOS 앱 상태 전이 — Foreground/Background/Suspended', 'Background Task — 처리 시간 한계와 요청 방법'] },
          { name: '동기화 원리', sub: 'Mutex, Semaphore, Deadlock', details: ['Race Condition, Critical Section, Mutex', 'Semaphore — 동시 접근 개수 제한', 'Deadlock 발생 조건 4가지와 방지법', 'Actor 모델이 Mutex보다 나은 이유'] },
          { name: '파일 시스템', sub: 'iOS에서 파일이 어떻게 저장되는가', details: ['APFS — Copy-on-Write, 스냅샷, 암호화', 'iOS 샌드박스 — Documents/Library/Caches/tmp', 'iCloud 백업 포함/제외 설정'] },
        ]
      },
      {
        id: '8-3', ico: '🔧', title: '컴파일러와 언어 내부',
        trigger: 'Swift Macros 원리가 궁금하다 / 빌드가 왜 느린지 알고 싶다',
        why: 'OS를 알면 "내 Swift 코드가 어떻게 기계어가 되는가"가 궁금해진다. 컴파일러를 이해하면 타입 시스템, Macros, 빌드 최적화의 모든 설계 결정이 납득된다. 언어를 쓰는 사람에서 언어를 이해하는 사람으로 넘어가는 단계다.',
        topics: [
          { name: 'Swift 컴파일 과정', sub: '소스코드 → 바이너리까지', details: ['Lexing → Parsing → AST → Semantic Analysis', 'SIL — Swift Intermediate Language, 최적화 단계', 'LLVM → 기계어 생성'] },
          { name: 'Swift Macros', sub: '컴파일 타임 코드 생성', details: ['Macro = AST를 받아 AST를 반환하는 함수', '@Observable 내부에서 생성되는 코드', 'SwiftSyntax로 직접 Macro 만들기'] },
          { name: '빌드 최적화', sub: '빌드 시간 절반으로 줄이기', details: ['타입 추론 비용 — 복잡한 표현식이 느린 이유', 'Build Timing Summary — 느린 함수 찾기', 'Explicit Return Type, Module Caching'] },
          { name: '언어 이론', sub: 'Swift가 왜 이렇게 설계됐는가', details: ['타입 시스템 — 정적 vs 동적, 타입 추론의 원리', '함수형 패러다임 — 순수 함수, 불변성', 'Optional이 왜 모나드인가', 'Swift vs Kotlin vs Rust — 같은 문제를 다르게 푸는 방법'] },
        ]
      },
      {
        id: '8-4', ico: '🧮', title: '개발자를 위한 수학',
        trigger: '알고리즘 복잡도 증명 / 그래픽스 / ML 원리를 이해하고 싶다',
        why: '컴퓨터 과학의 모든 분야 뒤에는 수학이 있다. 알고리즘 증명, 그래픽스 변환, ML 원리 — 깊이 파고들수록 결국 수학으로 돌아온다. S8의 마지막 챕터인 이유는 여기서 배운 것들이 앞의 모든 것과 연결되기 때문이다.',
        topics: [
          { name: '이산수학', sub: '알고리즘의 수학적 기반', details: ['논리학 — 드모르간, 조건문 최적화', '집합론 — Set API와 연결', '수학적 귀납법 — 재귀 정확성 증명', '그래프 이론 — BFS/DFS의 수학적 배경'] },
          { name: '선형대수', sub: '그래픽스와 ML의 언어', details: ['벡터, 행렬 — 변환을 합성하는 수단', '이동/회전/스케일 행렬 — ARKit/SceneKit 변환', 'CoreML에서 행렬 연산이 쓰이는 곳'] },
          { name: '확률과 통계', sub: '데이터 기반 의사결정', details: ['A/B 테스트 통계적 유의성', '베이즈 정리 — 추천, 스팸 필터 원리', '기댓값 — 수익 모델 계산'] },
        ]
      },
    ]
  },
];
