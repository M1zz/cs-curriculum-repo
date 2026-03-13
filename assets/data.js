/* ── CURRICULUM DATA ──────────────────────────────────────── */
const STAGES = [
  {
    id: 's1', n: '1', ico: '🛠', title: '일단 만든다',
    color: 'var(--s1)', theme: 's1-theme',
    problem: '아무것도 없습니다 — 화면에 뭔가를 띄우고 싶습니다',
    solve: 'SwiftUI 기본, 상태 관리, 화면 전환, Swift 필수 문법',
    link: 'https://m1zz.github.io/cs-swiftUI/',
    analogy: '🛹 스케이트보드',
    status: '동작하는 앱을 만들 수 있습니다. 화면을 구성하고, 버튼을 눌러 상태를 바꾸고, 데이터를 목록으로 보여줄 수 있습니다. 할 일 앱 정도는 혼자 만들어 낼 수 있는 상태입니다.',
    gap: '데이터가 100개만 넘어도 느려지는 이유를 모릅니다. Array, Dictionary, Set 중 무엇을 써야 하는지 감으로 고릅니다. "일단 동작은 하는데 왜 느린지 모르겠습니다"라는 상태입니다.',
    next: '스케이트보드로 목적지에 갈 수는 있지만, 오르막길에서 멈춥니다. 속도가 필요합니다.',
    chapters: [
      {
        id: '1-1', ico: '📱', title: '화면에 뭔가 띄우기',
        trigger: '"Hello World"를 앱에서 보고 싶습니다',
        why: '모든 학습은 첫 성공 경험에서 시작됩니다. 이론이 아니라 화면이 먼저여야 "계속하고 싶다"는 동기가 생깁니다. 아무것도 없는 상태에서 시작해 빌드 성공 버튼을 누르는 그 순간이 커리큘럼 전체의 출발점입니다.',
        quiz: {
          q: '이미지 위에 텍스트를 겹쳐서 보여주고 싶습니다. 어떤 레이아웃을 사용하시겠습니까?',
          options: [
            { key: 'vstack', label: 'A', title: 'VStack (위아래로 쌓기)', desc: '이미지와 텍스트가 위아래로 나뉘어 겹치지 않음' },
            { key: 'zstack', label: 'B', title: 'ZStack (겹쳐서 쌓기)', desc: '이미지 위에 텍스트가 오버레이됨' }
          ],
          answer: {
            vstack: { tag: 'A를 선택했다면', code: 'VStack {<br>&nbsp;&nbsp;Image("hero")<br>&nbsp;&nbsp;Text("제목")<br>}<br>// 이미지 아래에 텍스트가 따로 표시됩니다', effectLabel: '레이아웃 결과', effectWidth: '70%', effectValue: '겹침 불가 — 별도 영역', body: 'VStack은 뷰를 <strong>위아래로 나란히</strong> 배치합니다. 이미지와 텍스트가 각각 독립된 영역을 차지하므로 겹치는 오버레이 효과를 만들 수 없습니다.', correct: false },
            zstack: { tag: 'B를 선택했다면', code: 'ZStack {<br>&nbsp;&nbsp;Image("hero")<br>&nbsp;&nbsp;Text("제목")<br>&nbsp;&nbsp;&nbsp;&nbsp;.foregroundColor(.white)<br>}<br>// 이미지 위에 텍스트가 겹쳐 표시됩니다', effectLabel: '레이아웃 결과', effectWidth: '15%', effectValue: '오버레이 완성', body: 'ZStack은 뷰를 <strong>같은 위치에 겹쳐서</strong> 쌓습니다. 나중에 선언된 뷰가 위에 올라오므로, 이미지 위에 텍스트를 자연스럽게 오버레이할 수 있습니다.', correct: true }
          }
        },
        topics: [
          { name: 'SwiftUI 첫 화면', sub: 'View, body, preview', details: ['ContentView — 앱 시작점, struct가 View를 채택하는 구조', 'Text, Image, Button — 가장 자주 쓰는 3가지', 'VStack, HStack, ZStack — 화면을 쌓는 3가지 방향', 'modifier 체이닝 — .font(), .foregroundColor(), .padding()', 'Xcode Previews — 빌드 없이 실시간 UI 확인'] },
          { name: '레이아웃 시스템', sub: '내 맘대로 안 되는 이유', details: ['frame — 크기 직접 지정, maxWidth: .infinity', 'padding vs offset — 여백 추가 vs 위치 이동', 'Spacer — 남은 공간 채우기', 'GeometryReader — 부모 크기 읽어서 반응형으로', 'alignment — 정렬 기준점, 왜 기대와 다르게 동작하는가'] },
          { name: '앱 구조 이해', sub: '@main, App, Scene, View', details: ['@main — 진입점 마킹, App 프로토콜 채택', 'WindowGroup — 기본 Scene', 'View 계층 — 부모/자식 관계가 레이아웃에 미치는 영향', '실기기 vs 시뮬레이터 — 성능 차이가 나는 이유'] },
        ]
      },
      {
        id: '1-2', ico: '🔄', title: '버튼 누르면 화면이 바뀌게',
        trigger: '버튼을 눌렀는데 텍스트가 안 바뀝니다',
        why: '"버튼을 눌렀는데 왜 바뀌지 않지?" — 이 질문을 직접 경험한 후에야 상태 관리의 필요성이 진짜가 됩니다. 1-1에서 화면을 띄웠다면, 첫 번째 벽은 반드시 여기서 나옵니다. 문제를 만나기 전에 해법을 가르치지 않습니다.',
        quiz: {
          q: '버튼을 누르면 카운터가 올라가는 화면을 만듭니다. count 변수를 어떻게 선언하시겠습니까?',
          options: [
            { key: 'plainVar', label: 'A', title: 'var count = 0 (일반 변수)', desc: 'SwiftUI가 변경을 감지하지 못해 화면이 안 바뀜' },
            { key: 'stateVar', label: 'B', title: '@State var count = 0 (상태 변수)', desc: '값 변경 시 SwiftUI가 자동으로 화면을 다시 그림' }
          ],
          answer: {
            plainVar: { tag: 'A를 선택했다면', code: 'var count = 0<br><br>Button("+ 1") {<br>&nbsp;&nbsp;count += 1  // ⚠️ 컴파일 에러<br>}<br>Text("\\(count)")', effectLabel: '화면 반영', effectWidth: '80%', effectValue: '변경 감지 불가', body: 'SwiftUI의 View는 <strong>struct</strong>이므로 일반 var를 직접 변경할 수 없습니다. 컴파일 에러가 발생하며, 설령 우회하더라도 SwiftUI가 변경을 감지하지 못해 화면이 갱신되지 않습니다.', correct: false },
            stateVar: { tag: 'B를 선택했다면', code: '@State var count = 0<br><br>Button("+ 1") {<br>&nbsp;&nbsp;count += 1  // ✅ 화면 자동 갱신<br>}<br>Text("\\(count)")', effectLabel: '화면 반영', effectWidth: '10%', effectValue: '자동 재렌더링', body: '@State는 SwiftUI에게 <strong>"이 값이 변하면 화면을 다시 그려라"</strong>고 알려주는 프로퍼티 래퍼입니다. 값이 변경되면 SwiftUI가 자동으로 body를 재호출하여 화면을 갱신합니다.', correct: true }
          }
        },
        topics: [
          { name: '@State의 본질', sub: '왜 그냥 var가 아닌가', details: ['SwiftUI 렌더링 루프 — 상태 변화 → View 재생성', '@State — View가 소유하는 값, 변경 시 자동 재렌더', '@Binding — 부모의 State를 자식이 읽고 쓰기', '단방향 데이터 흐름 — 상태는 항상 위에서 아래로', '왜 View 안에서 직접 var를 바꿔도 반영이 안 되는가'] },
          { name: '사용자 입력', sub: 'TextField, Toggle, Slider', details: ['TextField + @State String 연결', 'Toggle — Bool 상태에 바인딩', 'Slider — 범위 내 실수 값 선택', 'Picker — 목록 선택, Segmented 스타일', '키보드 타입 설정, 완료 버튼 처리'] },
          { name: '리스트와 네비게이션', sub: '데이터를 목록으로 보여주기', details: ['List + ForEach — 배열을 목록으로 렌더링', 'Identifiable — 각 항목을 식별하는 방법', 'onDelete — 스와이프 삭제', 'NavigationStack + NavigationLink — 화면 이동', 'Sheet, Alert — 모달과 다이얼로그'] },
          { name: '첫 완성 앱', sub: '할 일 앱 처음부터 끝까지', details: ['Todo struct 설계 — id, title, isCompleted', '@State [Todo] — 추가/삭제/완료 토글', 'UserDefaults + Codable — 재시작 후에도 데이터 유지', 'Sheet로 새 할 일 입력 화면 연결', 'Empty State — 목록이 비었을 때 안내 화면'] },
        ]
      },
      {
        id: '1-3', ico: '🗂', title: '여러 화면과 공유 상태',
        trigger: '화면이 2개인데 데이터를 어떻게 공유합니까',
        why: '2개의 화면이 되는 순간 데이터 공유 문제가 터집니다. 1-2에서 1개 화면의 상태를 다뤘다면, 이제 화면 간 데이터 흐름이라는 다음 질문이 자연스럽게 나옵니다. @StateObject, @EnvironmentObject는 이 문제 없이는 존재 이유를 설명할 수 없습니다.',
        quiz: {
          q: '설정 화면에서 바꾼 테마가 홈 화면에도 즉시 반영되어야 합니다. 상태를 어떻게 공유하시겠습니까?',
          options: [
            { key: 'separateState', label: 'A', title: '각 화면에 @State (각자 독립적인 상태)', desc: '화면마다 따로 놀아서 동기화가 안 됨' },
            { key: 'sharedObject', label: 'B', title: '@StateObject + @ObservedObject (공유 참조 객체)', desc: '하나를 바꾸면 모든 곳이 반영됨' }
          ],
          answer: {
            separateState: { tag: 'A를 선택했다면', code: '// HomeView<br>@State var isDark = false<br><br>// SettingsView<br>@State var isDark = false<br>// ⚠️ 서로 다른 값입니다', effectLabel: '상태 동기화', effectWidth: '75%', effectValue: '각 화면 별도 상태', body: '@State는 <strong>각 View가 독립적으로 소유</strong>하는 값입니다. 같은 이름이라도 서로 다른 메모리 공간에 저장되므로, 한쪽을 바꿔도 다른 쪽에는 반영되지 않습니다.', correct: false },
            sharedObject: { tag: 'B를 선택했다면', code: 'class ThemeManager: ObservableObject {<br>&nbsp;&nbsp;@Published var isDark = false<br>}<br>// 두 화면이 같은 객체를 바라봅니다', effectLabel: '상태 동기화', effectWidth: '10%', effectValue: '전체 화면 즉시 반영', body: 'ObservableObject를 @StateObject로 생성하고 @ObservedObject로 전달하면, <strong>같은 참조 객체를 공유</strong>합니다. 한 곳에서 @Published 값을 변경하면 구독 중인 모든 View가 자동으로 갱신됩니다.', correct: true }
          }
        },
        topics: [
          { name: '화면 전환 패턴', sub: 'NavigationStack, Sheet, FullScreenCover', details: ['NavigationStack + NavigationLink — 스택 기반 이동', 'NavigationPath — 프로그래밍 방식 화면 이동', 'sheet vs fullScreenCover — 차이와 선택 기준', 'dismiss — 화면 닫기'] },
          { name: '공유 상태 관리', sub: '화면이 바뀌어도 데이터 유지', details: ['@StateObject — 참조 타입 상태 생성 및 소유', '@ObservedObject — 외부 StateObject 구독', '@Observable (iOS 17+) — 더 단순한 새 방법', '@EnvironmentObject — 깊은 계층에 상태 전달', 'ObservableObject + @Published — 변경 감지 메커니즘'] },
          { name: 'TabView', sub: '하단 탭 바 앱 구성', details: ['TabView + tabItem — 아이콘과 레이블', '탭별 독립 NavigationStack', 'Programmatic 탭 전환 — @State로 선택 탭 제어'] },
        ]
      },
      {
        id: '1-4', ico: '✏️', title: '막히는 Swift 문법',
        trigger: '컴파일 에러가 나는데 왜 나는지 모르겠습니다',
        why: '앱을 만들면서 이미 옵셔널 에러, 클로저 경고, 인덱스 오류를 만났습니다. 맥락이 생긴 지금 배우는 것과 처음부터 문법책을 읽는 것의 차이가 바로 여기서 드러납니다. "왜 이 문법이 필요한가"의 답을 이미 몸으로 알고 있습니다.',
        quiz: {
          q: '서버에서 받은 사용자 이름이 nil일 수 있습니다. 어떻게 처리하시겠습니까?',
          options: [
            { key: 'forceUnwrap', label: 'A', title: 'name! (강제 언래핑)', desc: 'nil이면 앱이 크래시' },
            { key: 'guardLet', label: 'B', title: 'guard let name else { return } (안전한 언래핑)', desc: 'nil이면 안전하게 빠져나감' }
          ],
          answer: {
            forceUnwrap: { tag: 'A를 선택했다면', code: 'let name: String? = nil<br>let display = name!<br>// 💥 Fatal error: unexpectedly found nil', effectLabel: '앱 안정성', effectWidth: '90%', effectValue: 'nil이면 크래시 — 100% 확률', body: '강제 언래핑(!)은 옵셔널 값이 <strong>반드시 존재한다고 단언</strong>하는 것입니다. nil일 경우 런타임에 즉시 크래시가 발생하며, 프로덕션 앱에서는 치명적입니다.', correct: false },
            guardLet: { tag: 'B를 선택했다면', code: 'let name: String? = nil<br>guard let name else {<br>&nbsp;&nbsp;return  // nil이면 안전하게 종료<br>}<br>print(name)  // ✅ 안전하게 사용', effectLabel: '앱 안정성', effectWidth: '5%', effectValue: 'nil 안전 처리', body: 'guard let은 nil일 경우 <strong>early return으로 안전하게 빠져나갑니다</strong>. 이후 코드에서는 언래핑된 값을 안전하게 사용할 수 있으며, 크래시 위험이 없습니다.', correct: true }
          }
        },
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
    problem: '목록에 데이터가 많아지니 스크롤이 버벅입니다 / 검색 결과가 늦게 뜹니다',
    solve: '자료구조 선택 기준, 알고리즘 복잡도, 올바른 컬렉션 사용',
    link: 'https://m1zz.github.io/swift-data-structures/',
    analogy: '🛹 더 빠른 스케이트보드',
    status: '느린 코드를 찾아서 고칠 수 있습니다. Array 대신 Dictionary를 쓰면 왜 빨라지는지 설명할 수 있습니다. Big-O를 읽고, Instruments로 병목을 찾습니다. 코딩 테스트 기초 문제를 풀 수 있습니다.',
    gap: '기능이 늘면서 코드가 스파게티가 됩니다. 파일 하나가 1000줄이 넘고, 수정하면 다른 곳이 깨집니다. "빠르지만 읽을 수 없는 코드"가 되어갑니다.',
    next: '속도는 얻었지만, 커브를 돌 수 없습니다. 구조가 필요합니다.',
    chapters: [
      {
        id: '2-1', ico: '🔬', title: '느린 이유를 숫자로 보기',
        trigger: '"느립니다"라는 감각을 측정 가능한 수치로 바꾸고 싶습니다',
        why: '"느립니다"라는 감각만으로는 아무것도 고칠 수 없습니다. 자료구조와 알고리즘을 배우기 전에 Big-O와 Instruments로 수치화하는 법부터 배워야 합니다. 도구 없이 원인을 찾으러 가는 건 지도 없이 보물을 찾는 것과 같습니다.',
        quiz: {
          q: '앱이 느린 것 같습니다. 어떻게 원인을 찾으시겠습니까?',
          options: [
            { key: 'guess', label: 'A', title: '감으로 코드 수정 (이 부분이 느릴 것 같으니 바꿔보기)', desc: '원인이 아닌 곳을 고칠 확률 높음' },
            { key: 'measure', label: 'B', title: 'Instruments로 측정 (Time Profiler로 병목 확인)', desc: '정확한 원인을 데이터로 확인' }
          ],
          answer: {
            guess: { tag: 'A를 선택했다면', code: '// "이 루프가 느린 것 같다"<br>// 감으로 수정 → 효과 없음<br>// 다른 곳 수정 → 또 효과 없음<br>// 반복...', effectLabel: '디버깅 효율', effectWidth: '80%', effectValue: '추측 기반 — 수십 번 시행착오', body: '감으로 성능을 최적화하면 <strong>실제 병목이 아닌 곳을 고치는 데 시간을 낭비</strong>합니다. 성능 문제의 원인은 직관과 다른 경우가 대부분입니다.', correct: false },
            measure: { tag: 'B를 선택했다면', code: '// Time Profiler 결과:<br>// fetchData() — 82% CPU 사용<br>// 원인: 중첩 루프 O(n²)<br>// → 정확한 병목 1곳만 수정', effectLabel: '디버깅 효율', effectWidth: '12%', effectValue: '데이터 기반 — 원인 즉시 파악', body: 'Instruments의 Time Profiler는 <strong>함수별 CPU 사용 시간을 정확히 측정</strong>합니다. 데이터에 기반한 최적화는 최소한의 수정으로 최대의 성능 개선을 달성합니다.', correct: true }
          }
        },
        topics: [
          { name: 'Big-O 복잡도', sub: '입력이 커질수록 얼마나 느려지는가', details: ['O(1) — Dictionary 조회, 아무리 커도 같은 시간', 'O(n) — Array 선형 탐색, 데이터에 비례', 'O(n²) — 이중 루프, 10만 건에서 폭발', 'O(log n) — 이진 탐색, 반씩 줄이기', 'O(n log n) — 정렬의 이론적 최솟값'] },
          { name: 'Instruments 실전', sub: 'CPU 병목 눈으로 찾기', details: ['Time Profiler — 함수별 CPU 사용 시간', 'Hangs — 메인 스레드 블로킹 감지', 'SwiftUI 재렌더링 횟수 확인', 'O(n²) 코드를 O(n)으로 바꾸는 실습'] },
        ]
      },
      {
        id: '2-2', ico: '📦', title: '올바른 자료구조 고르기',
        trigger: 'Array.contains가 너무 느립니다 / 중간 삽입이 느립니다',
        quiz: {
          q: '연락처 앱에서 이름을 검색합니다. 연락처가 10,000개일 때, 어떻게 저장하시겠습니까?',
          options: [
            { key: 'array', label: 'A', title: 'Array (배열)', desc: '순서대로 쭉 넣습니다' },
            { key: 'dictionary', label: 'B', title: 'Dictionary (딕셔너리)', desc: '이름을 key로 저장합니다' }
          ],
          answer: {
            array: { tag: 'A를 선택했다면', code: '// 10,000개를 처음부터 하나씩 비교<br>for contact in contacts {<br>&nbsp;&nbsp;if contact.name == "김민수" { ... }<br>}', effectLabel: '검색 시간', effectWidth: '85%', effectValue: '최악 10,000번 비교', body: 'Array에서 특정 값을 찾으려면 <strong>처음부터 끝까지 순차적으로 비교</strong>해야 합니다(O(n)). 데이터가 많아질수록 검색 시간이 선형으로 증가합니다.', correct: false },
            dictionary: { tag: 'B를 선택했다면', code: '// key로 바로 접근 — 해시 함수 한 번<br>let result = contacts["김민수"]<br>// 끝.', effectLabel: '검색 시간', effectWidth: '8%', effectValue: '평균 1번 (O(1))', body: 'Dictionary는 <strong>해시 함수를 통해 key의 저장 위치를 바로 계산</strong>합니다. 데이터가 아무리 많아도 평균 O(1)로 즉시 접근할 수 있습니다.', correct: true }
          }
        },
        topics: [
          { name: 'Array 내부 동작', sub: '왜 중간 삽입이 끝 추가보다 느린가', details: ['동적 배열 — 꽉 차면 2배 확장하는 메커니즘', 'append O(1) amortized vs insert(at:) O(n)', 'contains O(n) — 처음부터 끝까지 다 봄', 'ContiguousArray — 메모리 연속 보장, 캐시 효율', '언제 Array를 다른 구조로 바꿔야 하는가'] },
          { name: 'Dictionary & Set', sub: 'O(1) 탐색의 비밀', details: ['해시 함수 — 키를 버킷 번호로 변환', '해시 충돌 — O(1)이 "평균"인 이유', 'Hashable 구현 — 커스텀 타입을 키로 쓰기', 'Set.contains — Array보다 100배 빠른 이유', '실전: 중복 제거, 빠른 포함 여부 확인'] },
          { name: '스택과 큐', sub: 'undo/redo, 작업 대기열 구현', details: ['Stack(LIFO) — 뒤로 가기, undo 시스템', 'Queue(FIFO) — 다운로드 대기열, 순서 보장', 'Priority Queue — 중요한 것 먼저 (Heap 기반)', '직접 구현 vs Swift Collections 패키지'] },
          { name: '트리 구조', sub: '계층 데이터와 자동완성', details: ['이진 탐색 트리 — 정렬 데이터에서 O(log n)', 'Heap — 최솟값/최댓값 O(1) 접근', 'Trie — 자동완성 검색어 직접 구현', '그래프 — 인접리스트 vs 인접행렬', 'BFS/DFS — 연결된 항목 탐색 (추천, 경로)'] },
        ],
        why: '2-1에서 느린 지점을 찾았습니다. 이제 "왜 느린가"를 알아야 합니다. 대부분의 성능 문제는 잘못된 자료구조 선택에서 비롯됩니다 — Array.contains가 느린 이유, Dictionary가 빠른 이유를 모르면 측정만 하고 고치지 못합니다.',
      },
      {
        id: '2-3', ico: '⚡', title: '알고리즘으로 성능 개선',
        trigger: '정렬, 검색 기능을 효율적으로 만들고 싶습니다',
        why: '올바른 자료구조를 골랐다면 그것을 어떻게 탐색하고 정렬하는가가 남습니다. 자료구조와 알고리즘은 같은 동전의 양면입니다 — 자료구조를 먼저 이해해야 알고리즘이 왜 그렇게 설계됐는지 납득됩니다.',
        quiz: {
          q: '정렬된 배열에서 합이 target인 두 수를 찾아야 합니다. 어떻게 구현하시겠습니까?',
          options: [
            { key: 'bruteForce', label: 'A', title: '이중 for문 (모든 쌍 확인)', desc: 'O(n²), 10만 건이면 100억 번 연산' },
            { key: 'twoPointer', label: 'B', title: '투 포인터 (양쪽 끝에서 좁혀가기)', desc: 'O(n), 10만 건이면 10만 번 연산' }
          ],
          answer: {
            bruteForce: { tag: 'A를 선택했다면', code: 'for i in 0..&lt;arr.count {<br>&nbsp;&nbsp;for j in (i+1)..&lt;arr.count {<br>&nbsp;&nbsp;&nbsp;&nbsp;if arr[i]+arr[j] == target { return }<br>&nbsp;&nbsp;}<br>}<br>// O(n²) — 10만 건 → 100억 번', effectLabel: '연산 횟수', effectWidth: '90%', effectValue: '100억 번 — 앱이 멈춥니다', body: '이중 for문은 <strong>모든 가능한 쌍을 확인</strong>합니다. 입력이 n개면 n×(n-1)/2번 비교하므로, 10만 건에서는 약 50억 번의 연산이 필요하여 앱이 멈춥니다.', correct: false },
            twoPointer: { tag: 'B를 선택했다면', code: 'var left = 0, right = arr.count - 1<br>while left &lt; right {<br>&nbsp;&nbsp;let sum = arr[left] + arr[right]<br>&nbsp;&nbsp;if sum == target { return }<br>&nbsp;&nbsp;sum &lt; target ? (left += 1) : (right -= 1)<br>}<br>// O(n) — 10만 건 → 10만 번', effectLabel: '연산 횟수', effectWidth: '5%', effectValue: '10만 번 — 즉시 완료', body: '정렬된 배열에서 투 포인터는 <strong>양쪽 끝에서 시작하여 합이 크면 오른쪽을 줄이고, 작으면 왼쪽을 늘립니다</strong>. 한 번의 순회(O(n))로 답을 찾을 수 있습니다.', correct: true }
          }
        },
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
    problem: '기능이 늘자 파일이 1000줄 / 수정하면 다른 곳이 깨집니다 / 재사용이 안 됩니다',
    solve: 'OOP, SOLID, 프로토콜, 디자인 패턴, 아키텍처, 모듈화',
    link: 'https://m1zz.github.io/iOSArchLab/',
    analogy: '🚲 자전거',
    status: '코드를 책임 단위로 나눌 수 있습니다. MVVM으로 구조를 잡고, 프로토콜로 의존성을 분리합니다. 수정해도 다른 곳이 안 깨지는 코드를 짭니다. 팀 프로젝트에서 PR 리뷰를 줄 수 있는 수준입니다.',
    gap: '앱이 크래시가 나는데 원인을 모릅니다. deinit이 안 불리고, 메모리가 계속 늘어갑니다. 구조는 좋은데 앱이 죽습니다.',
    next: '자전거를 탈 수 있게 됐습니다. 하지만 체인이 끊어지면 고칠 줄 모릅니다.',
    chapters: [
      {
        id: '3-1', ico: '🧩', title: '책임을 나누는 방법',
        trigger: '함수 하나가 200줄 / 같은 코드가 3군데에 복붙돼 있습니다',
        why: '스파게티 코드의 근본 원인은 책임 분리 실패입니다. 패턴보다 원칙이 먼저여야 합니다 — OOP와 SOLID를 모르면 디자인 패턴을 써도 또 다른 방식의 스파게티가 됩니다. 지금 이 챕터는 S3 전체의 사상적 기반입니다.',
        quiz: {
          q: 'ViewController 하나에 네트워크 호출, JSON 파싱, UI 업데이트가 모두 있습니다. 새 API를 추가해야 합니다. 어떻게 하시겠습니까?',
          options: [
            { key: 'sameFile', label: 'A', title: '같은 파일에 추가 (이미 다 여기 있으니까)', desc: '파일이 2000줄이 되고 수정할 때마다 다른 기능이 깨짐' },
            { key: 'separate', label: 'B', title: '책임별로 분리 (Network, Parser, ViewModel)', desc: '각 파일이 하나의 역할만 담당' }
          ],
          answer: {
            sameFile: { tag: 'A를 선택했다면', code: 'class ViewController {<br>&nbsp;&nbsp;func fetchUser() { /* 네트워크 */ }<br>&nbsp;&nbsp;func parseJSON() { /* 파싱 */ }<br>&nbsp;&nbsp;func updateUI() { /* UI */ }<br>&nbsp;&nbsp;func fetchProduct() { /* 또 추가... */ }<br>&nbsp;&nbsp;// 2000줄... 어디가 뭔지 모릅니다', effectLabel: '유지보수성', effectWidth: '85%', effectValue: '수정 시 사이드이펙트 — 높음', body: '하나의 파일에 모든 책임을 넣으면 <strong>수정 범위를 예측할 수 없습니다</strong>. 네트워크 코드를 고쳤는데 UI가 깨지고, 파싱을 바꿨는데 다른 API가 동작하지 않는 상황이 반복됩니다.', correct: false },
            separate: { tag: 'B를 선택했다면', code: 'class NetworkService { /* 네트워크만 */ }<br>class UserParser { /* 파싱만 */ }<br>class UserViewModel { /* 로직만 */ }<br>class UserView { /* UI만 */ }<br>// 수정 범위가 명확합니다', effectLabel: '유지보수성', effectWidth: '10%', effectValue: '수정 영향 범위 — 최소화', body: '책임별로 분리하면 <strong>수정이 필요한 파일이 명확</strong>합니다. 네트워크 변경은 NetworkService만, UI 변경은 View만 수정하면 되므로 사이드이펙트가 최소화됩니다.', correct: true }
          }
        },
        topics: [
          { name: 'OOP 4원칙 실전', sub: '이론이 아닌 실제 코드 개선', details: ['캡슐화 — 외부에서 몰라도 되는 것 숨기기 (private)', '상속 — 코드 재사용, 언제 상속이 독이 되는가', '다형성 — 같은 메서드명, 타입에 따라 다른 동작', '추상화 — 복잡한 것을 단순하게 보이게', '1000줄 파일을 300줄로 줄이는 리팩터링 실습'] },
          { name: 'SOLID 원칙', sub: '수정해도 다른 곳이 안 깨지는 코드', details: ['S — 클래스가 바뀌는 이유는 하나여야 (단일 책임)', 'O — 새 기능 추가 시 기존 코드 수정 없이 (개방/폐쇄)', 'L — 자식은 부모를 완전히 대체할 수 있어야 (리스코프)', 'I — 거대한 프로토콜 대신 작은 프로토콜 여러 개 (인터페이스 분리)', 'D — 구현이 아닌 추상에 의존 (의존성 역전)'] },
          { name: '프로토콜 지향', sub: '상속 없이 기능 조합하기', details: ['Protocol = 할 수 있는 것의 명세', 'Protocol Extension — 기본 구현으로 중복 제거', 'Composition — 여러 프로토콜 조합 vs 깊은 상속', 'any vs some Protocol — 언제 무엇을', 'associatedtype — 프로토콜의 Generic'] },
          { name: 'Generic', sub: '타입만 다른 중복 코드 한번에 처리', details: ['Generic 함수 — <T>로 타입 추상화', '제약 조건 — where T: Equatable', 'Generic struct/class — Stack<Element> 구현', 'Opaque Type (some) — 구체 타입 숨기면서 성능 유지'] },
        ]
      },
      {
        id: '3-2', ico: '📐', title: '검증된 설계 패턴 적용',
        trigger: '화면 전환 코드가 View에 있습니다 / 의존성이 사방으로 얽혀 있습니다',
        why: '3-1에서 책임 분리의 원칙을 이해했습니다. 이제 수십 년간 검증된 해법인 패턴으로 구체화할 차례입니다. 원칙 없이 패턴을 먼저 외우면 "이걸 언제 써야 하는가"를 모릅니다 — 원칙이 패턴을 선택하는 기준이 됩니다.',
        quiz: {
          q: '앱 전체에서 하나의 네트워크 매니저를 쓰고 있습니다. 테스트를 작성하려는데, 실제 서버를 호출하지 않고 테스트하고 싶습니다.',
          options: [
            { key: 'singleton', label: 'A', title: 'Singleton 직접 참조 (NetworkManager.shared)', desc: '테스트에서도 실제 서버를 호출해야 합니다' },
            { key: 'protocolDI', label: 'B', title: 'Protocol + DI (주입받기)', desc: 'Mock 객체를 주입해서 서버 없이 테스트 가능' }
          ],
          answer: {
            singleton: { tag: 'A를 선택했다면', code: 'class ViewModel {<br>&nbsp;&nbsp;func load() {<br>&nbsp;&nbsp;&nbsp;&nbsp;NetworkManager.shared.fetch(...)<br>&nbsp;&nbsp;&nbsp;&nbsp;// 테스트에서도 진짜 서버를 호출합니다<br>&nbsp;&nbsp;}<br>}', effectLabel: '테스트 가능성', effectWidth: '80%', effectValue: '서버 의존 — 테스트 불가능', body: 'Singleton을 직접 참조하면 <strong>실제 구현을 교체할 방법이 없습니다</strong>. 테스트가 네트워크 상태에 의존하게 되어 불안정하고 느린 테스트가 됩니다.', correct: false },
            protocolDI: { tag: 'B를 선택했다면', code: 'protocol NetworkService { func fetch(...) }<br><br>class ViewModel {<br>&nbsp;&nbsp;let network: NetworkService  // 주입<br>&nbsp;&nbsp;func load() { network.fetch(...) }<br>}<br>// 테스트: MockNetwork를 주입합니다', effectLabel: '테스트 가능성', effectWidth: '10%', effectValue: 'Mock 주입 — 자유롭게 테스트', body: 'Protocol로 추상화하고 외부에서 주입받으면 <strong>테스트 시 Mock 객체로 교체</strong>할 수 있습니다. 서버 없이도 빠르고 안정적인 테스트가 가능합니다.', correct: true }
          }
        },
        topics: [
          { name: '생성 패턴', sub: '객체 만드는 방식을 표준화', details: ['Factory — 생성 로직을 한 곳에 모으기', 'Builder — 단계적으로 조립, SwiftUI ViewBuilder', 'Singleton — 왜 테스트를 어렵게 만드는가', 'Dependency Injection — 외부에서 주입받는 것의 장점'] },
          { name: '행동 패턴', sub: '객체 간 통신 정리', details: ['Observer — @Published, Combine, NotificationCenter 비교', 'Strategy — 알고리즘을 런타임에 교체하기', 'Command — 작업을 객체로 표현, undo/redo', 'State — 상태에 따라 행동이 달라지는 객체', 'Coordinator — 화면 전환 책임 분리'] },
          { name: '아키텍처 패턴', sub: '앱 전체 구조를 어떻게 잡을 것인가', details: ['MVC — UIKit 기본, 왜 Massive ViewController가 되는가', 'MVVM — ViewModel로 로직 분리, 테스트 가능하게', 'Repository — 데이터 소스를 추상화하는 레이어', 'Clean Architecture — 의존성 방향 원칙', 'TCA — The Composable Architecture 입문'] },
        ]
      },
      {
        id: '3-3', ico: '🏗', title: '프로젝트 구조와 코드 품질',
        trigger: '파일이 100개가 됐는데 어디 있는지 모르겠습니다',
        why: '함수·클래스 단위 설계를 할 줄 알게 됐습니다. 이제 시야를 프로젝트 전체로 넓힐 때입니다. 파일이 100개가 넘으면 "잘 짠 클래스"만으로는 부족합니다 — 어떻게 나누고 어디에 두는가라는 구조 문제가 시작됩니다.',
        quiz: {
          q: '100개가 넘는 Swift 파일이 프로젝트 루트에 전부 있습니다. 새 파일을 어디에 만들어야 할지 모르겠습니다.',
          options: [
            { key: 'flatName', label: 'A', title: '파일명으로 구분 (UserView, UserViewModel, UserService...)', desc: '이름은 다르지만 전부 같은 폴더에 있어서 찾기 어려움' },
            { key: 'featureFolder', label: 'B', title: '기능별 폴더 + 레이어 분리 (Features/User/View, Model, Service)', desc: '관련 파일이 한 곳에 모여 있음' }
          ],
          answer: {
            flatName: { tag: 'A를 선택했다면', code: '📁 Project/<br>&nbsp;&nbsp;UserView.swift<br>&nbsp;&nbsp;UserViewModel.swift<br>&nbsp;&nbsp;ProductView.swift<br>&nbsp;&nbsp;ProductViewModel.swift<br>&nbsp;&nbsp;... 100개 파일이 한 폴더에', effectLabel: '파일 탐색 시간', effectWidth: '75%', effectValue: '100개 중 찾기 — 매번 검색', body: '모든 파일이 한 폴더에 있으면 <strong>관련 파일을 찾기 위해 매번 검색</strong>해야 합니다. 파일 수가 늘어날수록 탐색 시간이 길어지고, 새 파일을 어디에 만들어야 할지 기준이 없습니다.', correct: false },
            featureFolder: { tag: 'B를 선택했다면', code: '📁 Features/<br>&nbsp;&nbsp;📁 User/<br>&nbsp;&nbsp;&nbsp;&nbsp;UserView.swift<br>&nbsp;&nbsp;&nbsp;&nbsp;UserViewModel.swift<br>&nbsp;&nbsp;📁 Product/<br>&nbsp;&nbsp;&nbsp;&nbsp;ProductView.swift<br>&nbsp;&nbsp;&nbsp;&nbsp;ProductViewModel.swift', effectLabel: '파일 탐색 시간', effectWidth: '12%', effectValue: '폴더 열기 — 즉시 발견', body: '기능별 폴더 구조는 <strong>관련 파일이 한 곳에 모여</strong> 있어 직관적으로 찾을 수 있습니다. 새 파일의 위치도 명확하고, 기능 단위로 코드를 파악하기 쉽습니다.', correct: true }
          }
        },
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
    color: 'var(--s4)', theme: 's4-theme', link: 'https://m1zz.github.io/ios-concept-lab/',
    problem: 'EXC_BAD_ACCESS 크래시 / 메모리 경고 후 강제 종료 / deinit이 불리지 않습니다',
    solve: 'ARC 원리, 순환 참조, weak/unowned, Instruments, 에러 처리',
    analogy: '🚲 정비할 줄 아는 자전거',
    status: '메모리 누수를 찾아서 고칠 수 있습니다. ARC를 이해하고, weak/unowned를 정확히 씁니다. Instruments로 Leak을 잡고, 에러를 우아하게 처리합니다. 크래시 없는 안정적인 앱을 만들 수 있습니다.',
    gap: '오프라인에서만 동작하는 앱입니다. 서버 데이터를 가져오고 싶은데 URLSession이 복잡하게 생겼습니다. JSON을 파싱하고 로컬에 저장하는 방법을 모릅니다.',
    next: '자전거는 완벽해졌습니다. 하지만 혼자 힘으로만 갑니다. 엔진이 필요합니다.',
    chapters: [
      {
        id: '4-1', ico: '🧠', title: '메모리가 어떻게 관리되는가',
        trigger: '앱이 실행 중 메모리 경고 후 죽습니다',
        why: 'iOS 크래시의 상당수는 메모리 문제에서 옵니다. weak를 쓰라는 말을 따르기 전에 왜 써야 하는지를 먼저 알아야 합니다. ARC 원리를 모르면 순환 참조를 만들어도 왜 위험한지 체감할 수 없습니다.',
        quiz: {
          q: 'ViewController가 Delegate로 서로를 참조합니다. 화면을 닫아도 메모리에서 해제되지 않습니다.',
          options: [
            { key: 'strongRef', label: 'A', title: 'strong var delegate (강한 참조)', desc: '서로 참조하여 영원히 메모리에 남음' },
            { key: 'weakRef', label: 'B', title: 'weak var delegate (약한 참조)', desc: '참조 카운트를 올리지 않아 정상 해제' }
          ],
          answer: {
            strongRef: { tag: 'A를 선택했다면', code: 'class A {<br>&nbsp;&nbsp;var delegate: B?  // strong<br>}<br>class B {<br>&nbsp;&nbsp;var delegate: A?  // strong<br>}<br>// 둘 다 deinit이 불리지 않습니다 💀', effectLabel: '메모리 누수', effectWidth: '90%', effectValue: '순환 참조 — 영구 누수', body: '두 객체가 서로를 strong으로 참조하면 <strong>참조 카운트가 절대 0이 되지 않습니다</strong>. ARC가 해제할 수 없어 앱이 실행되는 동안 메모리를 영구적으로 차지합니다.', correct: false },
            weakRef: { tag: 'B를 선택했다면', code: 'class A {<br>&nbsp;&nbsp;weak var delegate: B?  // weak<br>}<br>class B {<br>&nbsp;&nbsp;var parent: A?<br>}<br>// A를 해제하면 정상적으로 deinit됩니다 ✅', effectLabel: '메모리 누수', effectWidth: '5%', effectValue: '정상 해제 — 누수 0', body: 'weak 참조는 <strong>참조 카운트를 올리지 않습니다</strong>. 한쪽이 해제되면 weak 참조는 자동으로 nil이 되어, 순환 참조 없이 정상적으로 메모리가 해제됩니다.', correct: true }
          }
        },
        topics: [
          { name: 'Stack vs Heap', sub: '데이터가 어디에 저장되는가', details: ['Stack — 함수 호출 시 자동 할당/해제, 빠름', 'Heap — 동적 할당, 개발자(ARC)가 관리', 'struct → Stack, class → Heap (조건부)', 'Escape 분석 — 컴파일러의 Heap 할당 최소화', 'Stack overflow — 무한 재귀가 크래시를 일으키는 이유'] },
          { name: 'ARC 동작 원리', sub: '어떻게 자동으로 해제되는가', details: ['Retain Count — 참조 추가 +1, 해제 -1', 'Count가 0 → deinit 호출 → 메모리 반환', 'ARC가 컴파일 타임에 삽입하는 retain/release', 'deinit — 해제 시점 직접 확인하는 디버깅 팁', 'GC와의 차이 — 런타임 오버헤드 없음, 예측 가능'] },
          { name: '강한 참조 순환', sub: '"왜 deinit이 불리지 않는가"', details: ['A가 B를, B가 A를 strong 참조 → 영원히 해제 안 됨', 'ViewModel ↔ 클로저 순환 — 가장 흔한 패턴', 'Delegate 패턴에서의 순환 참조', 'Memory Graph Debugger — 순환 참조 시각적 확인'] },
          { name: 'weak / unowned', sub: '순환 참조를 끊는 방법', details: ['weak — 참조 카운트 안 올림, 자동 nil', 'unowned — nil 없다고 보장, 잘못 쓰면 크래시', '[weak self] capture list — 클로저의 순환 끊기', '언제 weak, 언제 unowned — 선택 기준', 'Delegate는 왜 반드시 weak var인가'] },
        ]
      },
      {
        id: '4-2', ico: '🔍', title: '크래시 원인 찾고 고치기',
        trigger: 'Thread 1: EXC_BAD_ACCESS — 어디가 문제인지 모르겠습니다',
        why: '4-1에서 메모리 원리를 이해했습니다. 이론은 실전 도구 앞에서 완성됩니다. Instruments와 에러 처리 패턴은 원리를 알아야 의미 있게 읽힙니다 — 순서가 바뀌면 도구만 배우고 원인은 모르게 됩니다.',
        quiz: {
          q: 'JSON 파싱이 실패할 수 있습니다. 에러를 어떻게 처리하시겠습니까?',
          options: [
            { key: 'tryOptional', label: 'A', title: 'try? (에러 무시)', desc: '왜 실패했는지 모르고, 디버깅 불가' },
            { key: 'doCatch', label: 'B', title: 'do-catch (에러를 잡아서 처리)', desc: '실패 원인을 정확히 파악' }
          ],
          answer: {
            tryOptional: { tag: 'A를 선택했다면', code: 'let data = try? JSONDecoder()<br>&nbsp;&nbsp;.decode(User.self, from: json)<br>// nil이면... 왜 실패했는지 모릅니다<br>// 사용자는 빈 화면만 봅니다', effectLabel: '디버깅 가능성', effectWidth: '80%', effectValue: '원인 불명 — 추측만 가능', body: 'try?는 에러를 <strong>nil로 변환하고 원인 정보를 버립니다</strong>. 키 이름이 틀렸는지, 타입이 다른지, JSON 자체가 잘못됐는지 알 수 없어 디버깅이 불가능합니다.', correct: false },
            doCatch: { tag: 'B를 선택했다면', code: 'do {<br>&nbsp;&nbsp;let data = try JSONDecoder()<br>&nbsp;&nbsp;&nbsp;&nbsp;.decode(User.self, from: json)<br>} catch {<br>&nbsp;&nbsp;print(error)  // 정확한 실패 원인<br>&nbsp;&nbsp;showError(error)  // 사용자에게 안내<br>}', effectLabel: '디버깅 가능성', effectWidth: '10%', effectValue: '원인 명확 — 즉시 수정', body: 'do-catch는 <strong>에러 객체를 통해 정확한 실패 원인을 제공</strong>합니다. DecodingError의 경우 어떤 키에서 어떤 타입 불일치가 발생했는지까지 알려줍니다.', correct: true }
          }
        },
        topics: [
          { name: 'Instruments 실전', sub: '메모리 누수와 크래시 원인 찾기', details: ['Leaks — 해제 안 된 객체 목록', 'Allocations — 시간에 따른 메모리 증가 확인', 'Memory Graph — 살아있는 객체 그래프 탐색', '실습: 의도적 누수 → 찾기 → 고치기'] },
          { name: '값 타입 최적화', sub: 'Array 복사가 실제로 느리지 않은 이유', details: ['Copy-on-Write(COW) — 수정 전까지 복사를 지연', 'isKnownUniquelyReferenced — 공유 여부 확인', 'struct가 유리한 경우 vs class가 유리한 경우'] },
          { name: '에러 처리 완전 정복', sub: '크래시 대신 우아하게 실패하기', details: ['throws / try / do-catch — 복구 가능한 에러', 'Result<Success, Failure> — 에러를 값으로 다루기', 'assert / precondition / fatalError — 불가능 상태 표현', 'defer — 어떤 경로로 나가도 반드시 실행'] },
        ]
      },
      {
        id: '4-3', ico: '🔢', title: '컴퓨터가 숫자와 문자를 다루는 방법',
        trigger: '금액 계산이 틀렸습니다 / 이모지 포함 문자열 길이가 이상합니다',
        why: '메모리를 다루다 보면 반드시 비트 수준 문제를 만납니다. "0.1 + 0.2가 왜 틀리는가", "이모지 글자 수가 왜 이상한가" — 이 의문이 생긴 지금이 가장 자연스러운 시점입니다. S4 이전엔 이 질문 자체가 나오지 않습니다.',
        quiz: {
          q: '쇼핑 앱에서 상품 가격을 계산합니다. 1000원 × 0.1 할인을 적용하면?',
          options: [
            { key: 'useDouble', label: 'A', title: 'Double로 계산', desc: '0.1을 정확히 표현할 수 없어서 999.999...원 같은 오차 발생' },
            { key: 'useDecimal', label: 'B', title: 'Decimal로 계산', desc: '10진수 기반으로 정확한 금액 계산' }
          ],
          answer: {
            useDouble: { tag: 'A를 선택했다면', code: 'let price = 1000.0<br>let discount = price * 0.1<br>print(price - discount)<br>// 899.9999999999999 💀<br>// 사용자에게 보여줄 수 없는 숫자', effectLabel: '계산 정확도', effectWidth: '75%', effectValue: '부동소수점 오차 — 금액 불일치', body: 'Double은 <strong>2진수 부동소수점</strong>이므로 0.1을 정확히 표현할 수 없습니다. 금액 계산에서 미세한 오차가 누적되면 결제 금액 불일치 등 심각한 문제가 발생합니다.', correct: false },
            useDecimal: { tag: 'B를 선택했다면', code: 'let price = Decimal(1000)<br>let discount = price * Decimal(string: "0.1")!<br>print(price - discount)<br>// 900 ✅<br>// 정확한 금액', effectLabel: '계산 정확도', effectWidth: '8%', effectValue: '10진수 정밀 계산 — 정확', body: 'Decimal은 <strong>10진수 기반</strong>으로 소수를 표현하므로 0.1을 정확히 저장합니다. 금액, 세금, 환율 등 정확한 소수 계산이 필요한 곳에서는 반드시 Decimal을 사용해야 합니다.', correct: true }
          }
        },
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
    color: 'var(--s5)', theme: 's5-theme', link: 'https://m1zz.github.io/network',
    problem: 'API를 호출해서 JSON을 파싱하고 싶습니다 / 데이터를 앱에 저장하고 싶습니다',
    solve: 'HTTP, URLSession, Codable, 로컬 DB, 클라우드 동기화, 보안',
    analogy: '🛵 오토바이',
    status: '서버와 통신하는 앱을 만들 수 있습니다. REST API를 호출하고, JSON을 파싱하고, Core Data에 저장합니다. 로그인, 토큰 관리, HTTPS 보안까지 구현합니다. 실제 서비스 수준의 앱을 만들 수 있는 상태입니다.',
    gap: '네트워크 요청 중 UI가 멈춥니다. 이미지를 여러 장 불러오면 스크롤이 버벅입니다. 메인 스레드가 무엇인지, 왜 async/await을 써야 하는지 정확히 모릅니다.',
    next: '오토바이로 달릴 수 있습니다. 하지만 동시에 두 가지를 할 수 없습니다.',
    chapters: [
      {
        id: '5-1', ico: '📡', title: 'HTTP와 REST API',
        trigger: 'URLSession이 왜 이렇게 복잡하게 생겼습니까',
        why: '로컬을 넘어 서버가 필요해졌습니다. URLSession의 모든 설계 결정 — 왜 async/await인가, 왜 URLRequest가 별도 객체인가 — 은 HTTP를 알아야 납득됩니다. 도구 전에 프로토콜입니다.',
        quiz: {
          q: '서버에서 사용자 목록을 가져옵니다. 네트워크 요청을 어떻게 작성하시겠습니까?',
          options: [
            { key: 'sync', label: 'A', title: '동기 방식 (메인 스레드에서 직접 호출)', desc: 'UI가 멈춤' },
            { key: 'asyncAwait', label: 'B', title: 'async/await (비동기로 호출)', desc: 'UI가 멈추지 않음' }
          ],
          answer: {
            sync: { tag: 'A를 선택했다면', code: '// 메인 스레드에서 직접 호출<br>let data = try Data(contentsOf: url)<br>// ⚠️ 응답 올 때까지 앱이 멈춥니다<br>// 사용자: "앱이 죽었나?"', effectLabel: 'UI 반응성', effectWidth: '85%', effectValue: '요청 중 앱 멈춤 — 3초간 무응답', body: '메인 스레드에서 동기적으로 네트워크 요청을 보내면, 응답이 돌아올 때까지 UI가 완전히 멈춥니다. 사용자는 앱이 죽은 것으로 인식하며, iOS가 강제 종료할 수도 있습니다.', correct: false },
            asyncAwait: { tag: 'B를 선택했다면', code: 'let (data, _) = try await<br>&nbsp;&nbsp;URLSession.shared.data(from: url)<br>// ✅ 기다리는 동안 UI는 정상 작동<br>// 사용자: 로딩 스피너가 돌아갑니다', effectLabel: 'UI 반응성', effectWidth: '8%', effectValue: '비동기 처리 — UI 정상', body: 'async/await를 사용하면 네트워크 요청이 백그라운드에서 처리되며, 기다리는 동안에도 UI는 정상적으로 반응합니다. 사용자 경험을 해치지 않는 올바른 방식입니다.', correct: true }
          }
        },
        topics: [
          { name: 'HTTP 완전 분석', sub: '요청과 응답이 어떻게 생겼는가', details: ['요청 구조 — Method, URL, Headers, Body', 'GET/POST/PUT/DELETE/PATCH — 각각의 의미', '상태 코드 — 200, 201, 400, 401, 403, 404, 500', 'RESTful 설계 — 리소스 기반 URL 설계 원칙', 'HTTP/2 vs HTTP/3 — iOS URLSession의 활용'] },
          { name: 'URLSession 심화', sub: 'iOS에서 네트워크 요청 처리', details: ['URLRequest — Method, Headers, Body 설정', 'DataTask, DownloadTask, UploadTask — 언제 무엇을', 'Background Session — 앱 종료 후 완료되는 다운로드', 'URLCache — 응답 캐싱 전략', 'async/await + URLSession — 현대적 네트워크 코드'] },
          { name: 'JSON 파싱', sub: 'Codable로 자동 변환', details: ['Codable = Encodable + Decodable', 'CodingKeys — JSON 키와 프로퍼티명 다를 때', 'Nested JSON — 중첩 구조 처리', 'API 에러 응답 파싱 — 성공/실패 분기', 'Custom Decoder — 복잡한 변환 직접 처리'] },
          { name: '네트워크 레이어 설계', sub: '중복 없고 테스트 가능한 구조', details: ['API Client Protocol — 테스트 시 Mock으로 교체', 'Endpoint enum — URL 조합을 타입 안전하게', 'Interceptor — 공통 헤더, 토큰 자동 갱신', 'Retry 로직 — 실패 시 재시도 전략'] },
        ]
      },
      {
        id: '5-2', ico: '💾', title: '데이터 영속성',
        trigger: '앱을 껐다 켜도 데이터가 살아있게 하고 싶습니다',
        why: '5-1에서 서버에서 데이터를 받았습니다. 자연스러운 다음 질문 — "앱을 껐다 켜도 남아있게 하려면?" 네트워크와 영속성은 항상 세트입니다. 받아온 데이터를 어디에 어떻게 저장하는가가 앱의 신뢰성을 결정합니다.',
        quiz: {
          q: '사용자의 로그인 토큰을 저장해야 합니다. 어디에 저장하시겠습니까?',
          options: [
            { key: 'userDefaults', label: 'A', title: 'UserDefaults (간단한 저장소)', desc: '암호화 없이 평문 저장, 탈옥 시 노출' },
            { key: 'keychain', label: 'B', title: 'Keychain (보안 저장소)', desc: '하드웨어 암호화, iOS가 보호' }
          ],
          answer: {
            userDefaults: { tag: 'A를 선택했다면', code: 'UserDefaults.standard.set(<br>&nbsp;&nbsp;token, forKey: "authToken"<br>)<br>// ⚠️ plist 파일에 평문 저장<br>// 탈옥 기기에서 바로 읽힙니다', effectLabel: '보안 수준', effectWidth: '85%', effectValue: '평문 노출 — 해킹 위험', body: 'UserDefaults는 plist 파일에 데이터를 평문으로 저장합니다. 탈옥된 기기에서는 파일 시스템에 직접 접근할 수 있으므로, 민감한 정보가 그대로 노출됩니다.', correct: false },
            keychain: { tag: 'B를 선택했다면', code: 'let query: [String: Any] = [<br>&nbsp;&nbsp;kSecClass: kSecClassGenericPassword,<br>&nbsp;&nbsp;kSecValueData: token.data(using: .utf8)!<br>]<br>SecItemAdd(query as CFDictionary, nil)<br>// ✅ 하드웨어 암호화 저장', effectLabel: '보안 수준', effectWidth: '8%', effectValue: '하드웨어 암호화 — 안전', body: 'Keychain은 iOS의 Secure Enclave를 활용하여 데이터를 하드웨어 수준에서 암호화합니다. 탈옥된 기기에서도 쉽게 접근할 수 없으며, 민감한 정보를 저장하는 유일하게 안전한 방법입니다.', correct: true }
          }
        },
        topics: [
          { name: '저장소 선택 기준', sub: '무엇을 어디에 저장하는가', details: ['UserDefaults — 소량 설정값, Codable 커스텀 타입', 'Keychain — 패스워드, 토큰 등 민감한 정보', 'FileManager — 이미지, 문서, 바이너리', '크기 / 보안 / 동기화 필요 여부 — 선택 기준'] },
          { name: 'SQL 기초', sub: '구조화된 대량 데이터 다루기', details: ['SELECT, INSERT, UPDATE, DELETE', 'WHERE, ORDER BY, LIMIT', 'JOIN — 관계 있는 테이블 연결', 'INDEX — B-Tree 인덱스, 쿼리 속도 향상 원리', 'GRDB — Swift에서 SQLite 직접 다루기'] },
          { name: 'Core Data & SwiftData', sub: 'Apple 공식 로컬 데이터베이스', details: ['Entity, Attribute, Relationship 설계', 'NSFetchRequest + Predicate 조건 조회', 'SwiftData — @Model, @Query (iOS 17+)', 'Migration — 스키마 변경 시 데이터 유지', 'Core Data vs SwiftData 선택 기준'] },
          { name: '클라우드 동기화', sub: '여러 기기에서 같은 데이터', details: ['CloudKit — iCloud 연동', 'Firebase Firestore — 실시간 동기화', '오프라인 우선 — Local First 패턴', '충돌 해결 전략'] },
        ]
      },
      {
        id: '5-3', ico: '🔐', title: '네트워크 보안',
        trigger: 'HTTPS인데 왜 해킹당할 수 있습니까 / 토큰을 어디에 저장해야 합니까',
        why: '데이터를 주고받고 저장할 줄 압니다. 이제 "이게 안전한가?"가 반드시 따라옵니다. 보안은 기능 개발과 동시에 배우는 것이 아니라 기능이 완성된 직후 배워야 의미가 있습니다 — 지킬 것이 생겼을 때 잠금장치를 배웁니다.',
        quiz: {
          q: '외부 API를 사용합니다. API Key를 어디에 두시겠습니까?',
          options: [
            { key: 'hardcode', label: 'A', title: '코드에 하드코딩', desc: 'GitHub에 올리면 전 세계에 노출' },
            { key: 'xcconfig', label: 'B', title: 'xcconfig / 환경변수 분리', desc: '코드에 키가 없음, .gitignore 처리' }
          ],
          answer: {
            hardcode: { tag: 'A를 선택했다면', code: 'let apiKey = "sk-1234abcd..."<br>// ⚠️ 이 파일이 GitHub에 올라가면<br>// 전 세계 누구나 이 키를 쓸 수 있습니다<br>// 매달 수백만 원 청구서가 옵니다', effectLabel: '키 노출 위험', effectWidth: '90%', effectValue: 'Git 히스토리에 영구 기록', body: '코드에 API Key를 직접 넣으면 Git 히스토리에 영구적으로 기록됩니다. 한 번이라도 push하면 키를 삭제해도 이미 노출된 것이며, 봇이 자동으로 스캔하여 악용합니다.', correct: false },
            xcconfig: { tag: 'B를 선택했다면', code: '// Config.xcconfig (.gitignore에 추가)<br>API_KEY = sk-1234abcd...<br><br>// 코드에서 읽기<br>let key = Bundle.main.object(<br>&nbsp;&nbsp;forInfoDictionaryKey: "API_KEY"<br>) as? String', effectLabel: '키 노출 위험', effectWidth: '5%', effectValue: '코드에 키 없음 — 안전', body: 'xcconfig 파일을 .gitignore에 추가하면 코드 저장소에 키가 포함되지 않습니다. 각 개발자가 로컬에서 자신의 키를 설정하며, CI/CD에서는 환경변수로 주입합니다.', correct: true }
          }
        },
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
    color: 'var(--s6)', theme: 's6-theme', link: 'https://m1zz.github.io/ios-concurrency-performance/',
    problem: '네트워크 요청 중 화면이 얼어붙습니다 / 스크롤 중 프레임 드랍이 생깁니다',
    solve: '동시성(GCD, async/await, Actor), 렌더링 최적화, Combine',
    analogy: '🚗 자동차',
    status: '부드럽고 빠른 앱을 만들 수 있습니다. async/await로 비동기를 처리하고, Actor로 데이터 레이스를 방지합니다. 렌더링을 최적화하고, Combine으로 복잡한 이벤트를 조합합니다. 사용자가 체감하는 품질이 확 달라지는 단계입니다.',
    gap: '"이 코드 수정해도 될까?" 두려움이 있습니다. 테스트가 없어서 배포할 때마다 긴장합니다. 수동으로 빌드하고 수동으로 배포합니다.',
    next: '자동차를 몰 수 있습니다. 하지만 보험도 없고, 정비소도 없습니다.',
    chapters: [
      {
        id: '6-1', ico: '⚙️', title: '왜 메인 스레드가 중요한가',
        trigger: 'URLSession 완료 후 UI 업데이트하니 퍼플 경고가 뜹니다',
        why: 'S5에서 URLSession을 쓰기 시작하는 순간 메인 스레드 경고가 뜹니다. 동시성은 네트워크 코드를 쓰는 개발자에게 선택이 아닌 필수입니다. S5 이전에 배우면 문제 없는 코드에서 왜 이게 필요한지 와닿지 않습니다.',
        quiz: {
          q: '대용량 이미지를 다운로드하면서 동시에 UI를 업데이트해야 합니다.',
          options: [
            { key: 'mainThread', label: 'A', title: '메인 스레드에서 다운로드', desc: '다운 완료까지 화면이 얼어붙음' },
            { key: 'background', label: 'B', title: '백그라운드에서 다운로드 + 메인에서 UI 업데이트', desc: '부드러운 UX' }
          ],
          answer: {
            mainThread: { tag: 'A를 선택했다면', code: '// 메인 스레드<br>let data = downloadImage(url)<br>imageView.image = UIImage(data: data)<br>// ⚠️ 다운로드 3초 동안<br>// 스크롤, 탭, 모든 터치가 무시됩니다', effectLabel: '프레임 드랍', effectWidth: '90%', effectValue: '3초간 0fps — 앱 멈춤', body: '메인 스레드에서 네트워크 요청을 처리하면 다운로드가 완료될 때까지 UI 이벤트 루프가 완전히 차단됩니다. 사용자의 모든 터치 입력이 무시되며, iOS가 앱을 강제 종료할 수 있습니다.', correct: false },
            background: { tag: 'B를 선택했다면', code: 'Task {<br>&nbsp;&nbsp;let data = await downloadImage(url)<br>&nbsp;&nbsp;await MainActor.run {<br>&nbsp;&nbsp;&nbsp;&nbsp;imageView.image = UIImage(data: data)<br>&nbsp;&nbsp;}<br>}<br>// ✅ 다운로드 중에도 UI가 반응합니다', effectLabel: '프레임 드랍', effectWidth: '5%', effectValue: '60fps 유지 — 부드러움', body: '백그라운드 스레드에서 다운로드를 처리하고, 완료된 후 MainActor를 통해 UI를 업데이트하면 다운로드 중에도 60fps를 유지할 수 있습니다. 사용자는 끊김 없는 경험을 하게 됩니다.', correct: true }
          }
        },
        topics: [
          { name: '스레드 기초', sub: 'OS가 동시에 여러 일을 하는 방법', details: ['Process vs Thread — 독립 메모리 vs 공유 메모리', '메인 스레드 — UI 전담, 여기 막히면 앱 멈춤', '컨텍스트 스위칭 — 스레드 전환 비용', 'Race Condition — 두 스레드가 같은 데이터를 동시에 쓸 때', 'iOS RunLoop — 메인 스레드가 이벤트를 처리하는 방식'] },
          { name: 'GCD 완전 분석', sub: '스레드 풀을 자동 관리하는 방법', details: ['DispatchQueue.main — UI는 반드시 여기서', 'DispatchQueue.global(qos:) — 백그라운드', 'sync vs async — 현재 스레드를 블로킹하는가', 'serial vs concurrent — 순서 보장 vs 병렬', 'DispatchGroup, Semaphore, Barrier'] },
          { name: 'async/await', sub: '콜백 지옥 탈출', details: ['async 함수 — 비동기 결과를 동기처럼', 'await — 기다리지만 스레드는 안 막음', 'Task — 비동기 작업 생명주기', 'async let — 병렬 실행', 'withCheckedContinuation — 콜백 → async 변환'] },
          { name: 'Actor', sub: 'Data Race를 컴파일러가 막는 방법', details: ['Actor — 내부 상태에 직렬 접근 보장', 'MainActor — UI 업데이트 안전하게', 'Sendable — 스레드 안전 타입 마킹', 'GCD vs async/await — 같은 문제를 두 방식으로'] },
        ]
      },
      {
        id: '6-2', ico: '🎞', title: '렌더링 성능 최적화',
        trigger: 'LazyVStack인데도 스크롤이 버벅입니다',
        why: '6-1에서 스레드를 이해했습니다. 이제 SwiftUI 렌더링 최적화로 범위를 넓힙니다. 메인 스레드 개념 없이 "왜 재렌더링이 일어나는가"를 이해할 수 없습니다 — 동시성이 렌더링 최적화의 전제 조건입니다.',
        quiz: {
          q: '서버에서 받은 4000x3000 이미지를 100x100 썸네일로 보여줘야 합니다.',
          options: [
            { key: 'rawLoad', label: 'A', title: 'UIImage(data:)로 원본 그대로 로드', desc: '48MB 메모리 사용' },
            { key: 'downsample', label: 'B', title: 'ImageIO로 다운샘플링 후 로드', desc: '0.04MB 메모리 사용' }
          ],
          answer: {
            rawLoad: { tag: 'A를 선택했다면', code: 'let image = UIImage(data: data)<br>// 4000x3000 x 4bytes = 48MB<br>// 썸네일 100개 = 4.8GB 💀<br>// 메모리 경고 → 앱 강제 종료', effectLabel: '메모리 사용량', effectWidth: '90%', effectValue: '48MB/장 — 10장이면 크래시', body: 'UIImage(data:)는 이미지를 원본 해상도 그대로 디코딩합니다. 4000x3000 픽셀 이미지는 픽셀당 4바이트(RGBA)로 약 48MB의 메모리를 차지하며, 여러 장을 로드하면 즉시 메모리 경고가 발생합니다.', correct: false },
            downsample: { tag: 'B를 선택했다면', code: 'let options = [kCGImageSourceThumbnailMaxPixelSize: 100]<br>let thumb = CGImageSourceCreateThumbnailAtIndex(<br>&nbsp;&nbsp;source, 0, options as CFDictionary<br>)<br>// 100x100 x 4bytes = 0.04MB ✅', effectLabel: '메모리 사용량', effectWidth: '5%', effectValue: '0.04MB/장 — 1000장도 OK', body: 'ImageIO의 다운샘플링은 이미지를 디코딩하기 전에 목표 크기로 축소합니다. 원본 48MB 대신 0.04MB만 사용하므로 메모리 효율이 1000배 이상 개선됩니다.', correct: true }
          }
        },
        topics: [
          { name: 'SwiftUI 렌더링', sub: '불필요한 재렌더링 막기', details: ['SwiftUI diff — 상태 변화 → View 재생성 조건', '@StateObject vs @ObservedObject — 생명주기 차이', 'Equatable — 같은 값이면 렌더링 스킵', 'LazyVStack vs List — 각각의 특성', 'identity, lifetime, dependency — SwiftUI 3원칙'] },
          { name: '이미지 최적화', sub: '메모리 폭발 없이 이미지 보여주기', details: ['다운샘플링 — ImageIO로 메모리 10배 절약', 'NSCache — 자동 해제 이미지 캐시', '이미지 포맷 — HEIC, WebP vs PNG/JPEG', 'Prefetching — 스크롤 전 미리 로드'] },
          { name: '앱 시작 속도', sub: '런치 타임 단축하기', details: ['Cold vs Warm Launch', 'dyld 링킹 — 동적 라이브러리 로딩 시간', 'Lazy Initialization — 필요할 때 초기화', 'MetricKit — 실제 사용자 런치 시간 측정'] },
        ]
      },
      {
        id: '6-3', ico: '🔄', title: 'Combine과 반응형 프로그래밍',
        trigger: '검색창 debounce 적용 / 여러 비동기 이벤트를 조합해야 합니다',
        why: '비동기 이벤트가 여러 개 조합되면서 코드가 다시 복잡해집니다. 그 복잡함을 직접 경험한 지금이 Combine을 배울 시점입니다. async/await를 먼저 이해해야 Combine이 어떤 문제를 추가로 해결하는지 납득됩니다.',
        quiz: {
          q: '검색창에 타이핑할 때마다 서버에 검색 요청을 보냅니다.',
          options: [
            { key: 'everyKey', label: 'A', title: '매 글자마다 API 호출', desc: '"ㅎ", "하", "한", "한글" → 4번 호출' },
            { key: 'debounce', label: 'B', title: 'debounce 적용', desc: '타이핑이 멈춘 후 0.3초 뒤 1번만 호출' }
          ],
          answer: {
            everyKey: { tag: 'A를 선택했다면', code: 'textField.addTarget(self,<br>&nbsp;&nbsp;action: #selector(search),<br>&nbsp;&nbsp;for: .editingChanged<br>)<br>// "한글" 입력 → API 4번 호출<br>// 서버 과부하, 요금 폭탄', effectLabel: 'API 호출 횟수', effectWidth: '80%', effectValue: '글자당 1회 — 불필요한 요청 폭주', body: '매 글자마다 API를 호출하면 사용자가 "한글"을 입력하는 동안 4번의 불필요한 요청이 발생합니다. 서버에 과부하를 주고, 유료 API라면 비용이 급증합니다.', correct: false },
            debounce: { tag: 'B를 선택했다면', code: '$searchText<br>&nbsp;&nbsp;.debounce(for: .seconds(0.3),<br>&nbsp;&nbsp;&nbsp;&nbsp;scheduler: RunLoop.main)<br>&nbsp;&nbsp;.removeDuplicates()<br>&nbsp;&nbsp;.sink { query in search(query) }<br>// "한글" 입력 → API 1번 호출 ✅', effectLabel: 'API 호출 횟수', effectWidth: '10%', effectValue: '입력 완료 후 1회 — 최적', body: 'debounce는 마지막 이벤트 이후 지정된 시간(0.3초)이 지나야 값을 방출합니다. removeDuplicates와 함께 사용하면 동일한 검색어에 대한 중복 요청도 방지할 수 있습니다.', correct: true }
          }
        },
        topics: [
          { name: 'Combine 기초', sub: '이벤트를 스트림으로 다루기', details: ['Publisher — 시간에 따라 값을 방출하는 스트림', 'Subscriber — 값을 받아 처리', 'Operator — map, filter, flatMap, combineLatest', '@Published — 프로퍼티 변경을 Publisher로', 'AnyCancellable — 구독 수명 관리'] },
          { name: 'Combine 실전', sub: '검색, 폼 유효성, 네트워크 체이닝', details: ['debounce — 타이핑 중 요청 줄이기', 'removeDuplicates — 중복 이벤트 제거', 'combineLatest — 여러 입력 합쳐서 유효성 검사', 'flatMap + URLSession — 비동기 체이닝', '에러 처리 — catch, retry, replaceError'] },
        ]
      },
    ]
  },
  {
    id: 's7', n: '7', ico: '🧪', title: '"내 코드가 맞는지 모르겠다"',
    color: 'var(--s7)', theme: 's7-theme', link: 'https://m1zz.github.io/ios-distribution',
    problem: '배포 후 버그 발견 / 수정할 때마다 다른 곳이 깨질까 두렵습니다 / 배포가 귀찮습니다',
    solve: '테스팅, TDD, CI/CD, 크래시 분석, 앱 수익화와 운영',
    analogy: '🚗 보험과 정비소가 있는 자동차',
    status: '테스트를 작성하고, CI/CD로 자동 배포합니다. 크래시 리포트를 분석하고, 사용자 행동을 추적합니다. 앱으로 수익을 냅니다. 혼자서 앱을 만들고, 배포하고, 운영하고, 돈을 버는 완전한 독립 개발자입니다.',
    gap: '"왜 이렇게 동작하는가"의 근본 원리를 모릅니다. CPU가 코드를 어떻게 실행하는지, 컴파일러가 무엇을 하는지, async/await이 OS 레벨에서 어떻게 구현되는지 설명할 수 없습니다.',
    next: '자동차를 잘 운전합니다. 하지만 엔진이 어떻게 돌아가는지는 모릅니다.',
    chapters: [
      {
        id: '7-1', ico: '✅', title: '테스트 작성하기',
        trigger: '"이 코드 수정해도 되는데?"라는 두려움을 없애고 싶습니다',
        why: '코드가 충분히 쌓였고, "수정해도 괜찮을까"라는 두려움이 생겼습니다. 그 두려움을 몸으로 경험한 지금이 테스트의 가치를 진심으로 이해할 수 있는 시점입니다. 두려움 없이 테스트를 배우면 절차만 외우게 됩니다.',
        quiz: {
          q: 'ViewModel의 로그인 로직을 테스트합니다. 서버가 꺼져 있으면?',
          options: [
            { key: 'realServer', label: 'A', title: '실제 서버로 테스트', desc: '서버 상태에 따라 테스트가 성공하기도 실패하기도 함' },
            { key: 'mockObject', label: 'B', title: 'Mock 객체로 테스트', desc: '서버 없이 항상 동일한 결과' }
          ],
          answer: {
            realServer: { tag: 'A를 선택했다면', code: 'func testLogin() async {<br>&nbsp;&nbsp;let vm = LoginViewModel()<br>&nbsp;&nbsp;await vm.login("user", "pass")<br>&nbsp;&nbsp;// ⚠️ 서버가 꺼져있으면 실패<br>&nbsp;&nbsp;// CI에서 매번 다른 결과<br>}', effectLabel: '테스트 신뢰도', effectWidth: '75%', effectValue: '환경 의존 — 결과 불안정', body: '실제 서버에 의존하는 테스트는 네트워크 상태, 서버 점검, 데이터 변경 등 외부 요인에 의해 결과가 달라집니다. CI에서 간헐적으로 실패하면 테스트에 대한 신뢰가 무너집니다.', correct: false },
            mockObject: { tag: 'B를 선택했다면', code: 'func testLogin() async {<br>&nbsp;&nbsp;let mock = MockAuthService(<br>&nbsp;&nbsp;&nbsp;&nbsp;result: .success(User(name: "test"))<br>&nbsp;&nbsp;)<br>&nbsp;&nbsp;let vm = LoginViewModel(auth: mock)<br>&nbsp;&nbsp;await vm.login("user", "pass")<br>&nbsp;&nbsp;XCTAssertTrue(vm.isLoggedIn) // ✅ 항상 동일<br>}', effectLabel: '테스트 신뢰도', effectWidth: '8%', effectValue: '격리된 테스트 — 100% 재현', body: 'Mock 객체를 사용하면 외부 의존성을 완전히 제거할 수 있습니다. 서버 상태와 무관하게 항상 동일한 결과를 보장하며, 테스트가 검증하려는 로직에만 집중할 수 있습니다.', correct: true }
          }
        },
        topics: [
          { name: '테스트 철학', sub: '테스트는 비용이 아닌 투자', details: ['테스트 없는 리팩터링 = 눈 감고 달리기', '테스트 피라미드 — Unit:Integration:E2E = 70:20:10', '무엇을 테스트해야 하는가 — 구현이 아닌 행동', '테스트 가능한 코드 설계 — 의존성 주입'] },
          { name: 'XCTest 실전', sub: '첫 Unit Test 작성', details: ['@testable import — 내부 타입 테스트', 'XCTAssertEqual, XCTAssertTrue, XCTAssertNil', 'setUp/tearDown — 각 테스트 전후 초기화', 'async 테스트 — await + XCTestExpectation'] },
          { name: 'Mock / Stub', sub: '네트워크 없이 네트워크 코드 테스트', details: ['Protocol 기반 DI — 실제 구현을 가짜로 교체', 'Mock — 행동을 검증하는 가짜 객체', 'Stub — 정해진 응답 반환', 'MockURLProtocol — 실제 네트워크 없이 API 테스트'] },
          { name: 'TDD 실습', sub: '테스트가 설계를 이끄는 방식', details: ['Red → Green → Refactor 사이클', 'Swift Testing — @Test, @Suite (WWDC 2024)', 'Parameterized Test — 여러 입력 한번에', '계산기 앱을 TDD로 처음부터 만들기'] },
        ]
      },
      {
        id: '7-2', ico: '🤖', title: '자동화와 CI/CD',
        trigger: '배포가 너무 귀찮습니다 / 팀원과 코드 합칠 때마다 충돌납니다',
        why: '테스트가 있으면 자동화가 가능해집니다. 테스트 없는 CI/CD는 실수를 자동화하는 것에 불과합니다 — 순서가 중요합니다. "코드를 올리면 자동으로 검증됩니다"라는 신뢰는 7-1이 먼저여야 만들어집니다.',
        quiz: {
          q: '앱을 TestFlight에 올려야 합니다. 어떻게 배포하시겠습니까?',
          options: [
            { key: 'manual', label: 'A', title: '수동 빌드 (Xcode → Archive → Upload)', desc: '매번 30분, 실수 가능성' },
            { key: 'cicd', label: 'B', title: 'CI/CD 파이프라인 (push하면 자동 배포)', desc: '코드 올리면 자동으로 끝남' }
          ],
          answer: {
            manual: { tag: 'A를 선택했다면', code: '// 매번 수동으로...<br>// 1. Xcode에서 Archive (10분)<br>// 2. Organizer에서 Upload (5분)<br>// 3. 인증서 확인, 프로파일 선택...<br>// 4. 실수하면 처음부터 다시', effectLabel: '배포 시간', effectWidth: '80%', effectValue: '매번 30분 + 실수 위험', body: '수동 배포는 매번 동일한 단계를 반복해야 하며, 인증서 선택 오류, 빌드 설정 누락 등 실수의 여지가 많습니다. 배포 빈도가 낮아지고, 빠른 핫픽스가 어려워집니다.', correct: false },
            cicd: { tag: 'B를 선택했다면', code: '# .github/workflows/deploy.yml<br>on: push<br>jobs:<br>&nbsp;&nbsp;deploy:<br>&nbsp;&nbsp;&nbsp;&nbsp;steps:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- run: fastlane beta<br>// push만 하면 자동으로 TestFlight에 올라갑니다', effectLabel: '배포 시간', effectWidth: '8%', effectValue: '자동 — 0분 (push만)', body: 'CI/CD 파이프라인을 구축하면 코드를 push하는 것만으로 빌드, 테스트, 배포가 자동으로 진행됩니다. 사람의 실수를 제거하고, 배포 빈도를 크게 높일 수 있습니다.', correct: true }
          }
        },
        topics: [
          { name: '버전 관리 심화', sub: 'Git을 제대로 쓰는 방법', details: ['Git 내부 동작 — Object, Tree, Commit, Branch', 'rebase vs merge — 히스토리 전략', 'Bisect — 버그가 들어온 커밋 찾기', 'Git Flow vs GitHub Flow vs Trunk Based'] },
          { name: 'CI/CD 파이프라인', sub: '코드 올리면 자동으로 빌드/테스트/배포', details: ['Xcode Cloud — 워크플로우 설정, 자동 TestFlight 업로드', 'GitHub Actions — iOS 빌드 자동화', 'Fastlane match — 인증서/프로파일 팀 공유', 'Fastlane Snapshot — 스크린샷 자동 촬영'] },
          { name: '코드 리뷰 문화', sub: '피드백을 주고받는 방법', details: ['좋은 PR — 설명, 체크리스트, 스크린샷', '리뷰어 관점 — 무엇을 봐야 하는가', '코드 리뷰의 온도 — 기술 토론 vs 인신공격', 'ADR — 중요 결정을 기록으로 남기기'] },
        ]
      },
      {
        id: '7-3', ico: '📊', title: '출시 후 운영과 수익화',
        trigger: '앱을 배포했습니다 — 이제 무엇을 봐야 합니까',
        why: '배포까지 자동화됐습니다. 이것이 커리큘럼의 완결입니다 — 이제 실제 사용자 앞에서 앱을 운영하고, 크래시를 분석하고, 수익을 내는 단계입니다. 만드는 법을 배웠다면 운영하는 법으로 마무리하는 것이 자연스럽습니다.',
        quiz: {
          q: '새로운 결제 화면 디자인이 매출을 올릴지 확인하고 싶습니다.',
          options: [
            { key: 'fullReplace', label: 'A', title: '전체 교체 (모든 사용자에게 새 디자인)', desc: '매출이 떨어져도 원인 불명' },
            { key: 'abTest', label: 'B', title: 'A/B 테스트 (50%만 새 디자인)', desc: '데이터로 비교 후 결정' }
          ],
          answer: {
            fullReplace: { tag: 'A를 선택했다면', code: '// v2.0: 전체 사용자에게 새 디자인 적용<br>// 결과: 매출 20% 하락<br>// 원인: 새 디자인? 계절 영향? 경쟁사?<br>// → 판단 불가, 롤백도 늦음', effectLabel: '의사결정 근거', effectWidth: '75%', effectValue: '감 기반 — 실패 시 원인 불명', body: '전체 사용자에게 한꺼번에 적용하면 변화의 원인을 분리할 수 없습니다. 매출이 변동했을 때 디자인 때문인지, 외부 요인인지 판단이 불가능하며, 롤백 결정도 늦어집니다.', correct: false },
            abTest: { tag: 'B를 선택했다면', code: '// Feature Flag로 50%만 새 디자인<br>if RemoteConfig.isNewDesign {<br>&nbsp;&nbsp;showNewPaymentView()<br>} else {<br>&nbsp;&nbsp;showOriginalView()<br>}<br>// 2주 후: 신규 +15% → 전체 적용 ✅', effectLabel: '의사결정 근거', effectWidth: '10%', effectValue: '데이터 기반 — 명확한 근거', body: 'A/B 테스트는 동일한 시간, 동일한 조건에서 두 그룹을 비교합니다. 외부 변수를 통제할 수 있으므로 디자인 변경의 순수한 효과를 측정할 수 있습니다.', correct: true }
          }
        },
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
    color: 'var(--s8)', theme: 's8-theme', link: 'https://m1zz.github.io/ios-operation',
    problem: '왜 이렇게 동작하는지 근본 원리가 궁금합니다 / 시니어로 성장하고 싶습니다',
    solve: '컴퓨터 구조, OS 원리, 컴파일러, 수학적 기초, 언어 이론',
    analogy: '🚗 엔진을 이해하는 드라이버',
    status: 'CPU, OS, 컴파일러의 원리를 이해합니다. 왜 그렇게 동작하는지 설명할 수 있고, 새로운 기술이 나와도 본질을 꿰뚫습니다. 주니어를 가르칠 수 있고, 기술 의사결정의 근거를 댈 수 있습니다. 시니어 개발자입니다.',
    gap: '하드웨어와 OS, 컴파일러의 원리를 알지만, 수학적 기반이 부족하면 알고리즘 증명, 그래픽스, ML의 깊은 이해에 한계가 있습니다.',
    next: '수학은 컴퓨터 과학의 모든 분야를 관통하는 언어입니다. 이산수학, 선형대수, 확률과 통계를 배우면 지금까지 익힌 모든 것이 더 단단해집니다.',
    chapters: [
      {
        id: '8-1', ico: '💻', title: '컴퓨터는 어떻게 코드를 실행하는가',
        trigger: 'CPU 바운드 vs I/O 바운드가 무엇인지 / M1이 왜 빠른지 궁금합니다',
        why: '7개의 Stage를 거치며 iOS 개발의 전체를 경험했습니다. 이제 "왜 이렇게 동작하는가"라는 근본적인 질문이 생깁니다. CPU가 코드를 어떻게 실행하는지 알면 지금까지 배운 async/await, 메모리, 성능의 모든 것이 다시 보입니다.',
        quiz: {
          q: '100만 개의 정수를 순회합니다. 어떤 자료구조가 더 빠를까요?',
          options: [
            { key: 'linkedList', label: 'A', title: '연결 리스트 (Linked List)', desc: '노드가 메모리에 흩어져 캐시 미스 빈발' },
            { key: 'array', label: 'B', title: '배열 (Array)', desc: '연속 메모리로 캐시 히트율 극대화' }
          ],
          answer: {
            linkedList: { tag: 'A를 선택했다면', code: '// Linked List: 노드가 메모리 곳곳에 흩어짐<br>// node1 → [0x1000] → [0x5000] → [0x2000]<br>// 매번 새 메모리 주소 → 캐시 미스<br>// CPU가 RAM을 기다립니다 (100배 느림)', effectLabel: '순회 속도', effectWidth: '80%', effectValue: '캐시 미스 — 수십 배 느림', body: '연결 리스트는 각 노드가 힙 메모리의 임의 위치에 할당됩니다. 다음 노드에 접근할 때마다 CPU 캐시에 없는 주소를 참조하게 되어 캐시 미스가 빈발하고, RAM 접근 대기 시간이 성능을 크게 저하시킵니다.', correct: false },
            array: { tag: 'B를 선택했다면', code: '// Array: 연속된 메모리 블록<br>// [0x1000][0x1004][0x1008][0x100C]...<br>// 한번 캐시에 올리면 연속 히트<br>// CPU가 기다리지 않습니다 ✅', effectLabel: '순회 속도', effectWidth: '10%', effectValue: '캐시 히트 — 최대 속도', body: '배열은 연속된 메모리 블록에 데이터를 저장합니다. CPU가 한 번 캐시 라인을 로드하면 인접한 여러 요소가 함께 올라오므로, 순회 시 캐시 히트율이 극대화되어 수십 배 빠릅니다.', correct: true }
          }
        },
        topics: [
          { name: 'CPU 구조', sub: 'Fetch → Decode → Execute', details: ['ALU, 레지스터, 제어 장치', '클럭 속도, 파이프라이닝, Branch Prediction', 'Apple Silicon — Unified Memory의 의미', 'CPU 바운드 vs I/O 바운드 — async가 필요한 근본 이유'] },
          { name: '메모리 계층', sub: '왜 캐시가 성능에 결정적인가', details: ['레지스터 < L1 < L2 < RAM < SSD — 속도/크기 트레이드오프', '캐시 히트 vs 미스 — 코드 접근 패턴이 성능을 바꾸는 이유', '공간/시간 지역성 — 배열이 연결 리스트보다 빠른 이유', 'iOS Jetsam — 메모리 압박 시 앱이 종료되는 메커니즘'] },
          { name: '가상 메모리', sub: '각 앱이 독립된 공간을 갖는 방법', details: ['페이지와 페이지 테이블 — 가상→물리 주소 변환', '페이지 폴트 — 실제 메모리에 없을 때', 'iOS Dirty vs Clean Memory — 최적화 핵심', 'ASLR — 주소 랜덤화, 보안 효과'] },
        ]
      },
      {
        id: '8-2', ico: '🏃', title: '운영체제가 하는 일',
        trigger: 'GCD가 왜 이렇게 설계됐는지 / 백그라운드에서 앱이 죽는 이유가 궁금합니다',
        why: 'CPU 구조를 알면 "그 위에서 OS가 무엇을 관리하는가"로 자연스럽게 연결됩니다. GCD의 QoS, 백그라운드 처리 한계, 스케줄러 — 지금까지 "그냥 그런 것"으로 받아들였던 것들의 근거가 여기서 보입니다.',
        quiz: {
          q: '메인 스레드에서 DispatchQueue.main.sync를 호출했습니다. 무슨 일이 일어날까요?',
          options: [
            { key: 'mainSync', label: 'A', title: '정상 실행 (메인에서 메인으로 보내니까)', desc: '데드락 발생, 앱이 영원히 멈춤' },
            { key: 'mainAsync', label: 'B', title: 'DispatchQueue.main.async 사용', desc: '현재 작업 끝나면 실행' }
          ],
          answer: {
            mainSync: { tag: 'A를 선택했다면', code: '// 메인 스레드에서 실행 중<br>DispatchQueue.main.sync {<br>&nbsp;&nbsp;print("여기 도달 불가")<br>}<br>// 💀 데드락: 자기 자신을 기다리는 상태<br>// 앱이 영원히 멈춥니다', effectLabel: '앱 상태', effectWidth: '95%', effectValue: '데드락 — 영구 멈춤', body: 'sync는 블록이 완료될 때까지 현재 스레드를 멈추고 기다립니다. 메인 스레드에서 메인 큐에 sync로 보내면, 현재 작업이 끝나야 블록이 실행되는데 블록이 끝나야 현재 작업이 끝나는 순환 대기가 발생합니다. 이것이 데드락입니다.', correct: false },
            mainAsync: { tag: 'B를 선택했다면', code: '// 메인 스레드에서 실행 중<br>DispatchQueue.main.async {<br>&nbsp;&nbsp;print("정상 실행")<br>}<br>// ✅ 현재 작업이 끝난 뒤 실행됩니다<br>// 데드락 없음', effectLabel: '앱 상태', effectWidth: '5%', effectValue: '정상 동작', body: 'async는 블록을 큐에 넣고 즉시 반환합니다. 현재 실행 중인 작업이 완료된 후 다음 RunLoop에서 블록이 실행되므로 데드락이 발생하지 않습니다.', correct: true }
          }
        },
        topics: [
          { name: '프로세스 관리', sub: '앱 실행부터 종료까지', details: ['프로세스 생명주기, 스케줄링 알고리즘', 'iOS QoS — .userInteractive에서 .background까지', 'iOS 앱 상태 전이 — Foreground/Background/Suspended', 'Background Task — 처리 시간 한계와 요청 방법'] },
          { name: '동기화 원리', sub: 'Mutex, Semaphore, Deadlock', details: ['Race Condition, Critical Section, Mutex', 'Semaphore — 동시 접근 개수 제한', 'Deadlock 발생 조건 4가지와 방지법', 'Actor 모델이 Mutex보다 나은 이유'] },
          { name: '파일 시스템', sub: 'iOS에서 파일이 어떻게 저장되는가', details: ['APFS — Copy-on-Write, 스냅샷, 암호화', 'iOS 샌드박스 — Documents/Library/Caches/tmp', 'iCloud 백업 포함/제외 설정'] },
        ]
      },
      {
        id: '8-3', ico: '🔧', title: '컴파일러와 언어 내부',
        trigger: 'Swift Macros 원리가 궁금합니다 / 빌드가 왜 느린지 알고 싶습니다',
        why: 'OS를 알면 "내 Swift 코드가 어떻게 기계어가 되는가"가 궁금해집니다. 컴파일러를 이해하면 타입 시스템, Macros, 빌드 최적화의 모든 설계 결정이 납득됩니다. 언어를 쓰는 사람에서 언어를 이해하는 사람으로 넘어가는 단계입니다.',
        quiz: {
          q: '복잡한 SwiftUI 뷰에서 빌드가 매우 느립니다. 어떻게 개선하시겠습니까?',
          options: [
            { key: 'justWait', label: 'A', title: '그냥 기다리기 (컴파일러가 알아서 최적화하겠지)', desc: '타입 추론에 시간 소모' },
            { key: 'explicitType', label: 'B', title: '명시적 타입 선언 추가', desc: '컴파일러의 추론 부담을 줄임' }
          ],
          answer: {
            justWait: { tag: 'A를 선택했다면', code: 'var body: some View {<br>&nbsp;&nbsp;HStack {<br>&nbsp;&nbsp;&nbsp;&nbsp;items.map { ($0.name, $0.price * 1.1) }<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.sorted { $0.1 &lt; $1.1 }<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.prefix(5).map { ... }<br>&nbsp;&nbsp;}<br>}<br>// 컴파일러: 타입 추론에 10초+ 소요', effectLabel: '빌드 시간', effectWidth: '85%', effectValue: '타입 추론 폭발 — 10초+', body: 'Swift 컴파일러는 복잡한 체이닝 표현식에서 모든 가능한 타입 조합을 탐색합니다. 표현식이 길어질수록 추론 경우의 수가 기하급수적으로 증가하여 빌드 시간이 급격히 느려집니다.', correct: false },
            explicitType: { tag: 'B를 선택했다면', code: 'var body: some View {<br>&nbsp;&nbsp;let sorted: [(String,Double)] = items<br>&nbsp;&nbsp;&nbsp;&nbsp;.map { ($0.name, $0.price * 1.1) }<br>&nbsp;&nbsp;&nbsp;&nbsp;.sorted { $0.1 &lt; $1.1 }<br>&nbsp;&nbsp;HStack { ForEach(sorted.prefix(5)) { ... } }<br>}<br>// 컴파일러: 타입 명확 → 0.1초 ✅', effectLabel: '빌드 시간', effectWidth: '8%', effectValue: '명시적 타입 — 0.1초', body: '명시적 타입 선언을 추가하면 컴파일러가 타입을 추론할 필요 없이 바로 검증만 합니다. 복잡한 표현식을 중간 변수로 분리하면 추론 범위가 줄어들어 빌드 시간이 극적으로 개선됩니다.', correct: true }
          }
        },
        topics: [
          { name: 'Swift 컴파일 과정', sub: '소스코드 → 바이너리까지', details: ['Lexing → Parsing → AST → Semantic Analysis', 'SIL — Swift Intermediate Language, 최적화 단계', 'LLVM → 기계어 생성'] },
          { name: 'Swift Macros', sub: '컴파일 타임 코드 생성', details: ['Macro = AST를 받아 AST를 반환하는 함수', '@Observable 내부에서 생성되는 코드', 'SwiftSyntax로 직접 Macro 만들기'] },
          { name: '빌드 최적화', sub: '빌드 시간 절반으로 줄이기', details: ['타입 추론 비용 — 복잡한 표현식이 느린 이유', 'Build Timing Summary — 느린 함수 찾기', 'Explicit Return Type, Module Caching'] },
          { name: '언어 이론', sub: 'Swift가 왜 이렇게 설계됐는가', details: ['타입 시스템 — 정적 vs 동적, 타입 추론의 원리', '함수형 패러다임 — 순수 함수, 불변성', 'Optional이 왜 모나드인가', 'Swift vs Kotlin vs Rust — 같은 문제를 다르게 푸는 방법'] },
        ]
      },
    ]
  },
  {
    id: 's9', n: '9', ico: '🧮', title: '"수학이 보이기 시작한다"',
    color: 'var(--s9)', theme: 's9-theme',
    problem: '알고리즘 증명, 그래픽스 변환, ML 원리를 이해하고 싶지만 수학적 기반이 부족합니다',
    solve: '이산수학, 선형대수, 확률과 통계 — 컴퓨터 과학을 관통하는 수학적 기초',
    analogy: '🚗 물리 법칙을 이해하는 엔지니어',
    status: '알고리즘을 증명하고, 그래픽스 변환을 행렬로 이해하고, 데이터 기반 의사결정을 통계로 뒷받침할 수 있습니다. 컴퓨터 과학의 모든 분야가 수학으로 연결되는 것이 보입니다.',
    gap: '',
    next: '',
    chapters: [
      {
        id: '9-1', ico: '🧮', title: '개발자를 위한 수학',
        trigger: '알고리즘 복잡도 증명 / 그래픽스 / ML 원리를 이해하고 싶습니다',
        why: '컴퓨터 과학의 모든 분야 뒤에는 수학이 있습니다. 알고리즘 증명, 그래픽스 변환, ML 원리 — 깊이 파고들수록 결국 수학으로 돌아옵니다. S1부터 S8까지 쌓아온 경험 위에 수학적 기반을 더하면, 모든 것이 하나로 연결됩니다.',
        quiz: {
          q: 'A/B 테스트에서 새 디자인의 전환율이 3% → 3.5%로 올랐습니다. 새 디자인을 전체 적용하시겠습니까?',
          options: [
            { key: 'applyNow', label: 'A', title: '바로 적용 (0.5% 올랐으니까)', desc: '통계적으로 우연일 수 있음 (표본 부족)' },
            { key: 'pValue', label: 'B', title: '유의성 검정 후 결정 (p-value 확인)', desc: '95% 신뢰구간에서 유의미한지 확인' }
          ],
          answer: {
            applyNow: { tag: 'A를 선택했다면', code: '// 표본: 100명<br>// A: 3/100 = 3%, B: 3.5/100 = 3.5%<br>// "0.5% 올랐다! 적용!"<br>// ⚠️ 1명 차이 — 우연일 확률 높습니다', effectLabel: '의사결정 정확도', effectWidth: '75%', effectValue: '우연에 속을 위험 — 높음', body: '표본이 작을 때 0.5%의 차이는 통계적 노이즈일 가능성이 높습니다. 100명 중 1명의 차이로 전체 전략을 바꾸면, 실제로는 효과가 없는 변경을 적용하게 될 수 있습니다.', correct: false },
            pValue: { tag: 'B를 선택했다면', code: '// 표본: 10,000명<br>// A: 300/10000, B: 350/10000<br>// p-value = 0.02 &lt; 0.05<br>// ✅ 95% 신뢰도로 유의미한 차이<br>// 이제 전체 적용해도 됩니다', effectLabel: '의사결정 정확도', effectWidth: '10%', effectValue: '통계적 검증 — 신뢰', body: '충분한 표본과 통계적 유의성 검정을 거치면 관찰된 차이가 우연이 아닌 실제 효과인지 판단할 수 있습니다. p-value가 0.05 미만이면 95% 신뢰도로 유의미한 차이가 있다고 결론지을 수 있습니다.', correct: true }
          }
        },
        topics: [
          { name: '이산수학', sub: '알고리즘의 수학적 기반', details: ['논리학 — 드모르간, 조건문 최적화', '집합론 — Set API와 연결', '수학적 귀납법 — 재귀 정확성 증명', '그래프 이론 — BFS/DFS의 수학적 배경'] },
          { name: '선형대수', sub: '그래픽스와 ML의 언어', details: ['벡터, 행렬 — 변환을 합성하는 수단', '이동/회전/스케일 행렬 — ARKit/SceneKit 변환', 'CoreML에서 행렬 연산이 쓰이는 곳'] },
          { name: '확률과 통계', sub: '데이터 기반 의사결정', details: ['A/B 테스트 통계적 유의성', '베이즈 정리 — 추천, 스팸 필터 원리', '기댓값 — 수익 모델 계산'] },
        ]
      },
    ]
  },
];
