/* ── CURRICULUM DATA ──────────────────────────────────────── */
const STAGES = [
  {
    id: 's1', n: '1', ico: '🛠', title: '일단 만든다',
    color: 'var(--s1)', theme: 's1-theme',
    problem: '아무것도 없다 — 화면에 뭔가를 띄우고 싶다',
    solve: 'SwiftUI 기본, 상태 관리, 화면 전환, Swift 필수 문법',
    chapters: [
      {
        id: '1-1', ico: '📱', title: '화면에 뭔가 띄우기',
        trigger: '"Hello World"를 앱에서 보고 싶다',
        topics: [
          { name: 'SwiftUI 첫 화면', sub: 'View, body, preview', details: ['ContentView — 앱 시작점, struct가 View를 채택하는 구조', 'Text, Image, Button — 가장 자주 쓰는 3가지', 'VStack, HStack, ZStack — 화면을 쌓는 3가지 방향', 'modifier 체이닝 — .font(), .foregroundColor(), .padding()', 'Xcode Previews — 빌드 없이 실시간 UI 확인'] },
          { name: '레이아웃 시스템', sub: '내 맘대로 안 되는 이유', details: ['frame — 크기 직접 지정, maxWidth: .infinity', 'padding vs offset — 여백 추가 vs 위치 이동', 'Spacer — 남은 공간 채우기', 'GeometryReader — 부모 크기 읽어서 반응형으로', 'alignment — 정렬 기준점, 왜 기대와 다르게 동작하는가'] },
          { name: '앱 구조 이해', sub: '@main, App, Scene, View', details: ['@main — 진입점 마킹, App 프로토콜 채택', 'WindowGroup — 기본 Scene', 'View 계층 — 부모/자식 관계가 레이아웃에 미치는 영향', '실기기 vs 시뮬레이터 — 성능 차이가 나는 이유'] },
        ]
      },
      {
        id: '1-2', ico: '🔄', title: '버튼 누르면 화면이 바뀌게',
        trigger: '버튼을 눌렀는데 텍스트가 안 바뀐다',
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
        topics: [
          { name: '화면 전환 패턴', sub: 'NavigationStack, Sheet, FullScreenCover', details: ['NavigationStack + NavigationLink — 스택 기반 이동', 'NavigationPath — 프로그래밍 방식 화면 이동', 'sheet vs fullScreenCover — 차이와 선택 기준', 'dismiss — 화면 닫기'] },
          { name: '공유 상태 관리', sub: '화면이 바뀌어도 데이터 유지', details: ['@StateObject — 참조 타입 상태 생성 및 소유', '@ObservedObject — 외부 StateObject 구독', '@Observable (iOS 17+) — 더 단순한 새 방법', '@EnvironmentObject — 깊은 계층에 상태 전달', 'ObservableObject + @Published — 변경 감지 메커니즘'] },
          { name: 'TabView', sub: '하단 탭 바 앱 구성', details: ['TabView + tabItem — 아이콘과 레이블', '탭별 독립 NavigationStack', 'Programmatic 탭 전환 — @State로 선택 탭 제어'] },
        ]
      },
      {
        id: '1-4', ico: '✏️', title: '막히는 Swift 문법',
        trigger: '컴파일 에러가 나는데 왜 나는지 모른다',
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
    chapters: [
      {
        id: '2-1', ico: '🔬', title: '느린 이유를 숫자로 보기',
        trigger: '"느리다"는 감각을 측정 가능한 수치로 바꾸고 싶다',
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
        ]
      },
      {
        id: '2-3', ico: '⚡', title: '알고리즘으로 성능 개선',
        trigger: '정렬, 검색 기능을 효율적으로 만들고 싶다',
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
    chapters: [
      {
        id: '3-1', ico: '🧩', title: '책임을 나누는 방법',
        trigger: '함수 하나가 200줄 / 같은 코드가 3군데에 복붙돼 있다',
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
        topics: [
          { name: '생성 패턴', sub: '객체 만드는 방식을 표준화', details: ['Factory — 생성 로직을 한 곳에 모으기', 'Builder — 단계적으로 조립, SwiftUI ViewBuilder', 'Singleton — 왜 테스트를 어렵게 만드는가', 'Dependency Injection — 외부에서 주입받는 것의 장점'] },
          { name: '행동 패턴', sub: '객체 간 통신 정리', details: ['Observer — @Published, Combine, NotificationCenter 비교', 'Strategy — 알고리즘을 런타임에 교체하기', 'Command — 작업을 객체로 표현, undo/redo', 'State — 상태에 따라 행동이 달라지는 객체', 'Coordinator — 화면 전환 책임 분리'] },
          { name: '아키텍처 패턴', sub: '앱 전체 구조를 어떻게 잡을 것인가', details: ['MVC — UIKit 기본, 왜 Massive ViewController가 되는가', 'MVVM — ViewModel로 로직 분리, 테스트 가능하게', 'Repository — 데이터 소스를 추상화하는 레이어', 'Clean Architecture — 의존성 방향 원칙', 'TCA — The Composable Architecture 입문'] },
        ]
      },
      {
        id: '3-3', ico: '🏗', title: '프로젝트 구조와 코드 품질',
        trigger: '파일이 100개가 됐는데 어디 있는지 모른다',
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
    chapters: [
      {
        id: '4-1', ico: '🧠', title: '메모리가 어떻게 관리되는가',
        trigger: '앱이 실행 중 메모리 경고 후 죽는다',
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
        topics: [
          { name: 'Instruments 실전', sub: '메모리 누수와 크래시 원인 찾기', details: ['Leaks — 해제 안 된 객체 목록', 'Allocations — 시간에 따른 메모리 증가 확인', 'Memory Graph — 살아있는 객체 그래프 탐색', '실습: 의도적 누수 → 찾기 → 고치기'] },
          { name: '값 타입 최적화', sub: 'Array 복사가 실제로 느리지 않은 이유', details: ['Copy-on-Write(COW) — 수정 전까지 복사를 지연', 'isKnownUniquelyReferenced — 공유 여부 확인', 'struct가 유리한 경우 vs class가 유리한 경우'] },
          { name: '에러 처리 완전 정복', sub: '크래시 대신 우아하게 실패하기', details: ['throws / try / do-catch — 복구 가능한 에러', 'Result<Success, Failure> — 에러를 값으로 다루기', 'assert / precondition / fatalError — 불가능 상태 표현', 'defer — 어떤 경로로 나가도 반드시 실행'] },
        ]
      },
      {
        id: '4-3', ico: '🔢', title: '컴퓨터가 숫자와 문자를 다루는 방법',
        trigger: '금액 계산이 틀렸다 / 이모지 포함 문자열 길이가 이상하다',
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
    chapters: [
      {
        id: '5-1', ico: '📡', title: 'HTTP와 REST API',
        trigger: 'URLSession이 왜 이렇게 복잡하게 생겼는가',
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
    chapters: [
      {
        id: '6-1', ico: '⚙️', title: '왜 메인 스레드가 중요한가',
        trigger: 'URLSession 완료 후 UI 업데이트하니 퍼플 경고가 뜬다',
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
        topics: [
          { name: 'SwiftUI 렌더링', sub: '불필요한 재렌더링 막기', details: ['SwiftUI diff — 상태 변화 → View 재생성 조건', '@StateObject vs @ObservedObject — 생명주기 차이', 'Equatable — 같은 값이면 렌더링 스킵', 'LazyVStack vs List — 각각의 특성', 'identity, lifetime, dependency — SwiftUI 3원칙'] },
          { name: '이미지 최적화', sub: '메모리 폭발 없이 이미지 보여주기', details: ['다운샘플링 — ImageIO로 메모리 10배 절약', 'NSCache — 자동 해제 이미지 캐시', '이미지 포맷 — HEIC, WebP vs PNG/JPEG', 'Prefetching — 스크롤 전 미리 로드'] },
          { name: '앱 시작 속도', sub: '런치 타임 단축하기', details: ['Cold vs Warm Launch', 'dyld 링킹 — 동적 라이브러리 로딩 시간', 'Lazy Initialization — 필요할 때 초기화', 'MetricKit — 실제 사용자 런치 시간 측정'] },
        ]
      },
      {
        id: '6-3', ico: '🔄', title: 'Combine과 반응형 프로그래밍',
        trigger: '검색창 debounce 적용 / 여러 비동기 이벤트를 조합해야 한다',
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
    chapters: [
      {
        id: '7-1', ico: '✅', title: '테스트 작성하기',
        trigger: '"이 코드 수정해도 되는데?" 라는 두려움을 없애고 싶다',
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
        topics: [
          { name: '버전 관리 심화', sub: 'Git을 제대로 쓰는 방법', details: ['Git 내부 동작 — Object, Tree, Commit, Branch', 'rebase vs merge — 히스토리 전략', 'Bisect — 버그가 들어온 커밋 찾기', 'Git Flow vs GitHub Flow vs Trunk Based'] },
          { name: 'CI/CD 파이프라인', sub: '코드 올리면 자동으로 빌드/테스트/배포', details: ['Xcode Cloud — 워크플로우 설정, 자동 TestFlight 업로드', 'GitHub Actions — iOS 빌드 자동화', 'Fastlane match — 인증서/프로파일 팀 공유', 'Fastlane Snapshot — 스크린샷 자동 촬영'] },
          { name: '코드 리뷰 문화', sub: '피드백을 주고받는 방법', details: ['좋은 PR — 설명, 체크리스트, 스크린샷', '리뷰어 관점 — 무엇을 봐야 하는가', '코드 리뷰의 온도 — 기술 토론 vs 인신공격', 'ADR — 중요 결정을 기록으로 남기기'] },
        ]
      },
      {
        id: '7-3', ico: '📊', title: '출시 후 운영과 수익화',
        trigger: '앱을 배포했다 — 이제 무엇을 봐야 하는가',
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
    chapters: [
      {
        id: '8-1', ico: '💻', title: '컴퓨터는 어떻게 코드를 실행하는가',
        trigger: 'CPU 바운드 vs I/O 바운드가 뭔지 / M1이 왜 빠른지 궁금하다',
        topics: [
          { name: 'CPU 구조', sub: 'Fetch → Decode → Execute', details: ['ALU, 레지스터, 제어 장치', '클럭 속도, 파이프라이닝, Branch Prediction', 'Apple Silicon — Unified Memory의 의미', 'CPU 바운드 vs I/O 바운드 — async가 필요한 근본 이유'] },
          { name: '메모리 계층', sub: '왜 캐시가 성능에 결정적인가', details: ['레지스터 < L1 < L2 < RAM < SSD — 속도/크기 트레이드오프', '캐시 히트 vs 미스 — 코드 접근 패턴이 성능을 바꾸는 이유', '공간/시간 지역성 — 배열이 연결 리스트보다 빠른 이유', 'iOS Jetsam — 메모리 압박 시 앱이 종료되는 메커니즘'] },
          { name: '가상 메모리', sub: '각 앱이 독립된 공간을 갖는 방법', details: ['페이지와 페이지 테이블 — 가상→물리 주소 변환', '페이지 폴트 — 실제 메모리에 없을 때', 'iOS Dirty vs Clean Memory — 최적화 핵심', 'ASLR — 주소 랜덤화, 보안 효과'] },
        ]
      },
      {
        id: '8-2', ico: '🏃', title: '운영체제가 하는 일',
        trigger: 'GCD가 왜 이렇게 설계됐는지 / 백그라운드에서 앱이 죽는 이유가 궁금하다',
        topics: [
          { name: '프로세스 관리', sub: '앱 실행부터 종료까지', details: ['프로세스 생명주기, 스케줄링 알고리즘', 'iOS QoS — .userInteractive에서 .background까지', 'iOS 앱 상태 전이 — Foreground/Background/Suspended', 'Background Task — 처리 시간 한계와 요청 방법'] },
          { name: '동기화 원리', sub: 'Mutex, Semaphore, Deadlock', details: ['Race Condition, Critical Section, Mutex', 'Semaphore — 동시 접근 개수 제한', 'Deadlock 발생 조건 4가지와 방지법', 'Actor 모델이 Mutex보다 나은 이유'] },
          { name: '파일 시스템', sub: 'iOS에서 파일이 어떻게 저장되는가', details: ['APFS — Copy-on-Write, 스냅샷, 암호화', 'iOS 샌드박스 — Documents/Library/Caches/tmp', 'iCloud 백업 포함/제외 설정'] },
        ]
      },
      {
        id: '8-3', ico: '🔧', title: '컴파일러와 언어 내부',
        trigger: 'Swift Macros 원리가 궁금하다 / 빌드가 왜 느린지 알고 싶다',
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
        topics: [
          { name: '이산수학', sub: '알고리즘의 수학적 기반', details: ['논리학 — 드모르간, 조건문 최적화', '집합론 — Set API와 연결', '수학적 귀납법 — 재귀 정확성 증명', '그래프 이론 — BFS/DFS의 수학적 배경'] },
          { name: '선형대수', sub: '그래픽스와 ML의 언어', details: ['벡터, 행렬 — 변환을 합성하는 수단', '이동/회전/스케일 행렬 — ARKit/SceneKit 변환', 'CoreML에서 행렬 연산이 쓰이는 곳'] },
          { name: '확률과 통계', sub: '데이터 기반 의사결정', details: ['A/B 테스트 통계적 유의성', '베이즈 정리 — 추천, 스팸 필터 원리', '기댓값 — 수익 모델 계산'] },
        ]
      },
    ]
  },
];
