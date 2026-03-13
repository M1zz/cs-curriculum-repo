/* ── CURRICULUM DATA (English) ──────────────────────────────── */
const STAGES_EN = [
  {
    id: 's1', n: '1', ico: '🛠', title: 'Just Build It',
    color: 'var(--s1)', theme: 's1-theme',
    problem: 'You have nothing — you just want to get something on screen',
    solve: 'SwiftUI basics, state management, navigation, essential Swift syntax',
    link: 'https://m1zz.github.io/cs-swiftUI/',
    analogy: '🛹 Skateboard',
    status: 'You can build a working app. You can compose screens, change state with button taps, and display data in lists. You can build a to-do app on your own.',
    gap: 'You don\'t know why things slow down as soon as there are more than 100 items. You pick Array, Dictionary, or Set by gut feeling. "It works, but I have no idea why it\'s slow."',
    next: 'You can reach your destination on a skateboard, but you stall going uphill. You need speed.',
    chapters: [
      {
        id: '1-1', ico: '📱', title: 'Getting Something on Screen',
        trigger: 'You want to see "Hello World" in your app',
        why: 'All learning starts with the first success. It\'s not theory that comes first — it\'s the screen. Seeing something appear is what creates the motivation to keep going. Going from nothing to pressing the build button is the starting point of the entire curriculum.',
        quiz: {
          q: 'You want to overlay text on top of an image. Which layout would you use?',
          options: [
            { key: 'vstack', label: 'A', title: 'VStack (stack vertically)', desc: 'Image and text are separated top-to-bottom without overlapping' },
            { key: 'zstack', label: 'B', title: 'ZStack (stack by layering)', desc: 'Text is overlaid on top of the image' }
          ],
          answer: {
            vstack: { tag: 'If you chose A', code: 'VStack {<br>&nbsp;&nbsp;Image("hero")<br>&nbsp;&nbsp;Text("Title")<br>}<br>// Text appears below the image separately', effectLabel: 'Layout result', effectWidth: '70%', effectValue: 'No overlap — separate areas', body: 'VStack arranges views <strong>vertically, one below the other</strong>. The image and text each occupy their own area, so you cannot create an overlay effect.', correct: false },
            zstack: { tag: 'If you chose B', code: 'ZStack {<br>&nbsp;&nbsp;Image("hero")<br>&nbsp;&nbsp;Text("Title")<br>&nbsp;&nbsp;&nbsp;&nbsp;.foregroundColor(.white)<br>}<br>// Text appears overlaid on the image', effectLabel: 'Layout result', effectWidth: '15%', effectValue: 'Overlay complete', body: 'ZStack layers views <strong>on top of each other at the same position</strong>. Views declared later appear on top, so you can naturally overlay text on an image.', correct: true }
          }
        },
        topics: [
          { name: 'SwiftUI First Screen', sub: 'View, body, preview', details: ['ContentView — the app entry point, a struct conforming to View', 'Text, Image, Button — the 3 most commonly used views', 'VStack, HStack, ZStack — 3 directions to stack views', 'Modifier chaining — .font(), .foregroundColor(), .padding()', 'Xcode Previews — real-time UI preview without building'] },
          { name: 'Layout System', sub: 'Why it doesn\'t do what I expect', details: ['frame — setting size explicitly, maxWidth: .infinity', 'padding vs offset — adding spacing vs moving position', 'Spacer — filling remaining space', 'GeometryReader — reading parent size for responsive layouts', 'alignment — alignment reference point, why it behaves differently than expected'] },
          { name: 'App Structure', sub: '@main, App, Scene, View', details: ['@main — marking the entry point, conforming to the App protocol', 'WindowGroup — the default Scene', 'View hierarchy — how parent/child relationships affect layout', 'Physical device vs Simulator — why performance differs'] },
        ]
      },
      {
        id: '1-2', ico: '🔄', title: 'Make the Screen Change on Tap',
        trigger: 'You tapped a button but the text didn\'t change',
        why: '"I tapped the button — why didn\'t anything change?" — Only after experiencing this question firsthand does the need for state management become real. If you got a screen up in 1-1, the first wall will inevitably appear here. We don\'t teach the solution before you encounter the problem.',
        quiz: {
          q: 'You\'re building a screen where tapping a button increments a counter. How would you declare the count variable?',
          options: [
            { key: 'plainVar', label: 'A', title: 'var count = 0 (plain variable)', desc: 'SwiftUI can\'t detect changes, so the screen won\'t update' },
            { key: 'stateVar', label: 'B', title: '@State var count = 0 (state variable)', desc: 'SwiftUI automatically redraws the screen when the value changes' }
          ],
          answer: {
            plainVar: { tag: 'If you chose A', code: 'var count = 0<br><br>Button("+ 1") {<br>&nbsp;&nbsp;count += 1  // ⚠️ Compile error<br>}<br>Text("\\(count)")', effectLabel: 'Screen update', effectWidth: '80%', effectValue: 'Change not detected', body: 'SwiftUI Views are <strong>structs</strong>, so you cannot directly mutate a plain var. You\'ll get a compile error, and even if you work around it, SwiftUI won\'t detect the change and the screen won\'t refresh.', correct: false },
            stateVar: { tag: 'If you chose B', code: '@State var count = 0<br><br>Button("+ 1") {<br>&nbsp;&nbsp;count += 1  // ✅ Screen updates automatically<br>}<br>Text("\\(count)")', effectLabel: 'Screen update', effectWidth: '10%', effectValue: 'Automatic re-render', body: '@State is a property wrapper that tells SwiftUI <strong>"redraw the screen when this value changes"</strong>. When the value changes, SwiftUI automatically re-invokes body to refresh the screen.', correct: true }
          }
        },
        topics: [
          { name: 'The Essence of @State', sub: 'Why not just use var', details: ['SwiftUI rendering loop — state change → View recreation', '@State — a value owned by the View, auto re-renders on change', '@Binding — child reads and writes parent\'s State', 'Unidirectional data flow — state always flows top-down', 'Why changing a var directly inside a View doesn\'t reflect'] },
          { name: 'User Input', sub: 'TextField, Toggle, Slider', details: ['TextField + @State String binding', 'Toggle — binding to a Bool state', 'Slider — selecting a float value within a range', 'Picker — list selection, Segmented style', 'Keyboard type configuration, done button handling'] },
          { name: 'Lists and Navigation', sub: 'Displaying data as a list', details: ['List + ForEach — rendering an array as a list', 'Identifiable — how to identify each item', 'onDelete — swipe to delete', 'NavigationStack + NavigationLink — screen navigation', 'Sheet, Alert — modals and dialogs'] },
          { name: 'First Complete App', sub: 'To-do app from start to finish', details: ['Todo struct design — id, title, isCompleted', '@State [Todo] — add/delete/toggle completion', 'UserDefaults + Codable — persist data across restarts', 'Sheet for new todo input screen', 'Empty State — guidance screen when the list is empty'] },
        ]
      },
      {
        id: '1-3', ico: '🗂', title: 'Multiple Screens and Shared State',
        trigger: 'You have 2 screens — how do you share data between them?',
        why: 'The moment you have 2 screens, the data sharing problem explodes. If you handled single-screen state in 1-2, the next question about cross-screen data flow arises naturally. @StateObject and @EnvironmentObject cannot be justified without this problem.',
        quiz: {
          q: 'A theme changed in Settings must instantly reflect on the Home screen. How would you share the state?',
          options: [
            { key: 'separateState', label: 'A', title: '@State in each screen (independent state)', desc: 'Each screen has its own copy, so they\'re out of sync' },
            { key: 'sharedObject', label: 'B', title: '@StateObject + @ObservedObject (shared reference object)', desc: 'Change one and it reflects everywhere' }
          ],
          answer: {
            separateState: { tag: 'If you chose A', code: '// HomeView<br>@State var isDark = false<br><br>// SettingsView<br>@State var isDark = false<br>// ⚠️ These are different values', effectLabel: 'State sync', effectWidth: '75%', effectValue: 'Separate state per screen', body: '@State is a value <strong>independently owned by each View</strong>. Even with the same name, they\'re stored in different memory locations, so changing one doesn\'t affect the other.', correct: false },
            sharedObject: { tag: 'If you chose B', code: 'class ThemeManager: ObservableObject {<br>&nbsp;&nbsp;@Published var isDark = false<br>}<br>// Both screens observe the same object', effectLabel: 'State sync', effectWidth: '10%', effectValue: 'Instant sync across all screens', body: 'When you create an ObservableObject with @StateObject and pass it via @ObservedObject, they <strong>share the same reference object</strong>. When a @Published value changes in one place, all subscribing Views automatically refresh.', correct: true }
          }
        },
        topics: [
          { name: 'Navigation Patterns', sub: 'NavigationStack, Sheet, FullScreenCover', details: ['NavigationStack + NavigationLink — stack-based navigation', 'NavigationPath — programmatic navigation', 'sheet vs fullScreenCover — differences and when to choose which', 'dismiss — closing a screen'] },
          { name: 'Shared State Management', sub: 'Keeping data alive across screens', details: ['@StateObject — creating and owning reference-type state', '@ObservedObject — subscribing to an external StateObject', '@Observable (iOS 17+) — a simpler new approach', '@EnvironmentObject — passing state deep into the hierarchy', 'ObservableObject + @Published — change detection mechanism'] },
          { name: 'TabView', sub: 'Building a tab bar app', details: ['TabView + tabItem — icon and label', 'Independent NavigationStack per tab', 'Programmatic tab switching — controlling selected tab with @State'] },
        ]
      },
      {
        id: '1-4', ico: '✏️', title: 'Swift Syntax That Trips You Up',
        trigger: 'You get compile errors but don\'t understand why',
        why: 'By now you\'ve already encountered optional errors, closure warnings, and index crashes while building apps. Learning with context versus reading a grammar book from scratch — the difference shows right here. You already know from experience "why this syntax is needed."',
        quiz: {
          q: 'A username from the server can be nil. How would you handle it?',
          options: [
            { key: 'forceUnwrap', label: 'A', title: 'name! (force unwrap)', desc: 'Crashes if nil' },
            { key: 'guardLet', label: 'B', title: 'guard let name else { return } (safe unwrap)', desc: 'Exits safely if nil' }
          ],
          answer: {
            forceUnwrap: { tag: 'If you chose A', code: 'let name: String? = nil<br>let display = name!<br>// 💥 Fatal error: unexpectedly found nil', effectLabel: 'App stability', effectWidth: '90%', effectValue: 'Crash on nil — 100% guaranteed', body: 'Force unwrapping (!) <strong>asserts that the optional value definitely exists</strong>. If it\'s nil, a runtime crash occurs immediately, which is fatal in production apps.', correct: false },
            guardLet: { tag: 'If you chose B', code: 'let name: String? = nil<br>guard let name else {<br>&nbsp;&nbsp;return  // Exit safely if nil<br>}<br>print(name)  // ✅ Safe to use', effectLabel: 'App stability', effectWidth: '5%', effectValue: 'Nil handled safely', body: 'guard let <strong>exits early with a return when nil</strong>. After the guard statement, the unwrapped value can be used safely with zero crash risk.', correct: true }
          }
        },
        topics: [
          { name: 'Types and Optionals', sub: 'Fixing "must be unwrapped" errors', details: ['let vs var, type inference vs explicit types', 'nil — representing "no value"', 'if let / guard let — safe unwrapping', 'Optional chaining ?. — preventing nil propagation', 'Nil coalescing ?? — default values / when force unwrapping ! is acceptable'] },
          { name: 'Collection Essentials', sub: 'Fixing "Index out of range" errors', details: ['Array — ordered list, watch out for indices', 'Dictionary — why key lookups return optionals', 'Set — no duplicates, fast contains', 'map, filter, forEach — declarative instead of loops'] },
          { name: 'Reading Closures', sub: 'Why does { } code look like this?', details: ['Basic syntax — { parameters in body }', 'Trailing closure — moving the last parameter outside', 'Shorthand argument names $0, $1', '[weak self] — when it\'s needed and when it\'s not'] },
        ]
      },
    ]
  },
  {
    id: 's2', n: '2', ico: '🐢', title: 'Why Is It So Slow?',
    color: 'var(--s2)', theme: 's2-theme',
    problem: 'Scrolling stutters with more data / search results take forever to appear',
    solve: 'Data structure selection criteria, algorithm complexity, proper collection usage',
    link: 'https://m1zz.github.io/swift-data-structures/',
    analogy: '🛹 A faster skateboard',
    status: 'You can find and fix slow code. You can explain why using a Dictionary instead of an Array makes things faster. You can read Big-O and find bottlenecks with Instruments. You can solve basic coding challenges.',
    gap: 'As features grow, the code becomes spaghetti. A single file exceeds 1000 lines, and changing one thing breaks another. The code is "fast but unreadable."',
    next: 'You\'ve gained speed, but you can\'t turn corners. You need structure.',
    chapters: [
      {
        id: '2-1', ico: '🔬', title: 'Quantifying Why It\'s Slow',
        trigger: 'You want to turn the feeling of "it\'s slow" into measurable numbers',
        why: 'You can\'t fix anything with just the feeling that "it\'s slow." Before learning data structures and algorithms, you need to learn how to measure with Big-O and Instruments. Going after the cause without tools is like searching for treasure without a map.',
        quiz: {
          q: 'Your app feels slow. How would you find the cause?',
          options: [
            { key: 'guess', label: 'A', title: 'Guess and modify code (this part seems slow, so change it)', desc: 'High chance of fixing the wrong thing' },
            { key: 'measure', label: 'B', title: 'Measure with Instruments (use Time Profiler to find the bottleneck)', desc: 'Pinpoint the exact cause with data' }
          ],
          answer: {
            guess: { tag: 'If you chose A', code: '// "This loop seems slow"<br>// Guess and fix → no effect<br>// Fix another spot → still no effect<br>// Repeat...', effectLabel: 'Debugging efficiency', effectWidth: '80%', effectValue: 'Guesswork — dozens of trial-and-error cycles', body: 'Optimizing by gut feel means <strong>wasting time fixing things that aren\'t actually the bottleneck</strong>. The real cause of performance issues is usually not where your intuition says it is.', correct: false },
            measure: { tag: 'If you chose B', code: '// Time Profiler result:<br>// fetchData() — 82% CPU usage<br>// Cause: nested loop O(n²)<br>// → Fix just 1 exact bottleneck', effectLabel: 'Debugging efficiency', effectWidth: '12%', effectValue: 'Data-driven — cause found immediately', body: 'Instruments\' Time Profiler <strong>precisely measures CPU time per function</strong>. Data-driven optimization achieves maximum performance improvement with minimal code changes.', correct: true }
          }
        },
        topics: [
          { name: 'Big-O Complexity', sub: 'How much slower does it get as input grows?', details: ['O(1) — Dictionary lookup, same time regardless of size', 'O(n) — Array linear search, proportional to data size', 'O(n²) — nested loops, explodes at 100K items', 'O(log n) — binary search, halving each time', 'O(n log n) — theoretical minimum for sorting'] },
          { name: 'Instruments in Practice', sub: 'Visually finding CPU bottlenecks', details: ['Time Profiler — CPU time per function', 'Hangs — detecting main thread blocking', 'Checking SwiftUI re-render count', 'Hands-on: converting O(n²) code to O(n)'] },
        ]
      },
      {
        id: '2-2', ico: '📦', title: 'Choosing the Right Data Structure',
        trigger: 'Array.contains is too slow / inserting in the middle is slow',
        quiz: {
          q: 'You\'re building a contacts app that searches by name. With 10,000 contacts, how would you store them?',
          options: [
            { key: 'array', label: 'A', title: 'Array', desc: 'Just store them in order' },
            { key: 'dictionary', label: 'B', title: 'Dictionary', desc: 'Store with name as the key' }
          ],
          answer: {
            array: { tag: 'If you chose A', code: '// Compare all 10,000 one by one from the start<br>for contact in contacts {<br>&nbsp;&nbsp;if contact.name == "John" { ... }<br>}', effectLabel: 'Search time', effectWidth: '85%', effectValue: 'Worst case: 10,000 comparisons', body: 'Finding a specific value in an Array requires <strong>comparing sequentially from start to end</strong> (O(n)). Search time grows linearly as the data grows.', correct: false },
            dictionary: { tag: 'If you chose B', code: '// Direct access by key — one hash function call<br>let result = contacts["John"]<br>// Done.', effectLabel: 'Search time', effectWidth: '8%', effectValue: 'Average O(1)', body: 'A Dictionary <strong>computes the storage location of a key directly via a hash function</strong>. No matter how much data there is, access is O(1) on average.', correct: true }
          }
        },
        topics: [
          { name: 'Array Internals', sub: 'Why is inserting in the middle slower than appending?', details: ['Dynamic array — the mechanism of doubling capacity when full', 'append O(1) amortized vs insert(at:) O(n)', 'contains O(n) — scans from start to end', 'ContiguousArray — guaranteed contiguous memory, cache efficient', 'When to replace Array with a different structure'] },
          { name: 'Dictionary & Set', sub: 'The secret of O(1) lookup', details: ['Hash function — converting a key into a bucket index', 'Hash collision — why O(1) is "average"', 'Implementing Hashable — using custom types as keys', 'Set.contains — 100x faster than Array', 'In practice: deduplication, fast membership checks'] },
          { name: 'Stacks and Queues', sub: 'Implementing undo/redo, task queues', details: ['Stack (LIFO) — back navigation, undo system', 'Queue (FIFO) — download queue, order guarantee', 'Priority Queue — most important first (Heap-based)', 'Roll your own vs Swift Collections package'] },
          { name: 'Tree Structures', sub: 'Hierarchical data and autocomplete', details: ['Binary Search Tree — O(log n) on sorted data', 'Heap — O(1) access to min/max', 'Trie — implementing autocomplete search', 'Graph — adjacency list vs adjacency matrix', 'BFS/DFS — traversing connected items (recommendations, paths)'] },
        ],
        why: 'In 2-1 you found where it\'s slow. Now you need to understand why. Most performance problems come from choosing the wrong data structure — if you don\'t know why Array.contains is slow or why Dictionary is fast, you can measure all you want but can\'t fix it.',
      },
      {
        id: '2-3', ico: '⚡', title: 'Improving Performance with Algorithms',
        trigger: 'You want to build efficient sorting and searching features',
        why: 'Once you\'ve chosen the right data structure, the question of how to search and sort it remains. Data structures and algorithms are two sides of the same coin — you must understand data structures first for algorithm design decisions to make sense.',
        quiz: {
          q: 'You need to find two numbers in a sorted array that add up to a target. How would you implement it?',
          options: [
            { key: 'bruteForce', label: 'A', title: 'Nested for loops (check all pairs)', desc: 'O(n²), 10 billion operations for 100K items' },
            { key: 'twoPointer', label: 'B', title: 'Two pointers (close in from both ends)', desc: 'O(n), 100K operations for 100K items' }
          ],
          answer: {
            bruteForce: { tag: 'If you chose A', code: 'for i in 0..&lt;arr.count {<br>&nbsp;&nbsp;for j in (i+1)..&lt;arr.count {<br>&nbsp;&nbsp;&nbsp;&nbsp;if arr[i]+arr[j] == target { return }<br>&nbsp;&nbsp;}<br>}<br>// O(n²) — 100K items → 10 billion ops', effectLabel: 'Number of operations', effectWidth: '90%', effectValue: '10 billion — app freezes', body: 'Nested for loops <strong>check every possible pair</strong>. With n items, that\'s n×(n-1)/2 comparisons, requiring about 5 billion operations for 100K items — enough to freeze the app.', correct: false },
            twoPointer: { tag: 'If you chose B', code: 'var left = 0, right = arr.count - 1<br>while left &lt; right {<br>&nbsp;&nbsp;let sum = arr[left] + arr[right]<br>&nbsp;&nbsp;if sum == target { return }<br>&nbsp;&nbsp;sum &lt; target ? (left += 1) : (right -= 1)<br>}<br>// O(n) — 100K items → 100K ops', effectLabel: 'Number of operations', effectWidth: '5%', effectValue: '100K — instant', body: 'In a sorted array, two pointers <strong>start from both ends: if the sum is too large, move right inward; if too small, move left inward</strong>. The answer is found in a single pass (O(n)).', correct: true }
          }
        },
        topics: [
          { name: 'Sorting', sub: 'When is each sorting algorithm fastest?', details: ['Insertion sort — fastest for nearly-sorted data', 'Merge sort — when stable sorting is needed', 'Quick sort — average O(n log n), the algorithm behind Swift\'s sort()', 'Custom sorting — sort { $0.date > $1.date }'] },
          { name: 'Searching', sub: 'Boosting search performance', details: ['Binary search — O(log n) on sorted arrays', 'Lower/upper bound search — implementing range conditions', 'In practice: improving a search filter from O(n²) to O(n)'] },
          { name: 'Core Paradigms', sub: 'Systematic approaches to complex logic', details: ['Dynamic programming — eliminating redundant computation (caching)', 'Greedy — choosing the best option at every step', 'Two pointers — turning O(n²) into O(n)', 'Divide and conquer — splitting a big problem in half', 'Swift coding test environment — Baekjoon / Programmers'] },
        ]
      },
    ]
  },
  {
    id: 's3', n: '3', ico: '🍝', title: 'The Code Is Spaghetti',
    color: 'var(--s3)', theme: 's3-theme',
    problem: 'Files exceed 1000 lines as features grow / changing one thing breaks another / nothing is reusable',
    solve: 'OOP, SOLID, protocols, design patterns, architecture, modularization',
    link: 'https://m1zz.github.io/iOSArchLab/',
    analogy: '🚲 Bicycle',
    status: 'You can split code by responsibility. You structure apps with MVVM and decouple dependencies with protocols. You write code where changes don\'t break other things. You can give PR reviews in a team project.',
    gap: 'The app crashes and you don\'t know why. deinit never fires, and memory keeps growing. The structure is good, but the app dies.',
    next: 'You can ride a bicycle. But when the chain breaks, you don\'t know how to fix it.',
    chapters: [
      {
        id: '3-1', ico: '🧩', title: 'How to Separate Responsibilities',
        trigger: 'A single function is 200 lines / the same code is copy-pasted in 3 places',
        why: 'The root cause of spaghetti code is failure to separate responsibilities. Principles must come before patterns — without OOP and SOLID, even using design patterns produces a different kind of spaghetti. This chapter is the philosophical foundation of all of S3.',
        quiz: {
          q: 'A single ViewController contains network calls, JSON parsing, and UI updates. You need to add a new API. What would you do?',
          options: [
            { key: 'sameFile', label: 'A', title: 'Add to the same file (everything\'s already here)', desc: 'The file hits 2000 lines and every change breaks other features' },
            { key: 'separate', label: 'B', title: 'Separate by responsibility (Network, Parser, ViewModel)', desc: 'Each file has a single role' }
          ],
          answer: {
            sameFile: { tag: 'If you chose A', code: 'class ViewController {<br>&nbsp;&nbsp;func fetchUser() { /* network */ }<br>&nbsp;&nbsp;func parseJSON() { /* parsing */ }<br>&nbsp;&nbsp;func updateUI() { /* UI */ }<br>&nbsp;&nbsp;func fetchProduct() { /* adding more... */ }<br>&nbsp;&nbsp;// 2000 lines... can\'t find anything', effectLabel: 'Maintainability', effectWidth: '85%', effectValue: 'Side effects on change — high', body: 'Putting all responsibilities in one file means <strong>you can\'t predict the scope of changes</strong>. Fix the network code and the UI breaks; change parsing and another API stops working — this cycle repeats.', correct: false },
            separate: { tag: 'If you chose B', code: 'class NetworkService { /* network only */ }<br>class UserParser { /* parsing only */ }<br>class UserViewModel { /* logic only */ }<br>class UserView { /* UI only */ }<br>// Scope of change is clear', effectLabel: 'Maintainability', effectWidth: '10%', effectValue: 'Blast radius — minimized', body: 'When separated by responsibility, <strong>it\'s clear which file needs to change</strong>. Network changes only affect NetworkService, UI changes only affect the View, minimizing side effects.', correct: true }
          }
        },
        topics: [
          { name: 'OOP 4 Principles in Practice', sub: 'Not theory — actual code improvement', details: ['Encapsulation — hide what outsiders don\'t need (private)', 'Inheritance — code reuse, when inheritance becomes poison', 'Polymorphism — same method name, different behavior by type', 'Abstraction — making complex things appear simple', 'Hands-on: refactoring a 1000-line file down to 300'] },
          { name: 'SOLID Principles', sub: 'Code that doesn\'t break when you change it', details: ['S — a class should have only one reason to change (Single Responsibility)', 'O — add features without modifying existing code (Open/Closed)', 'L — subtypes must fully substitute their parents (Liskov Substitution)', 'I — many small protocols over one large one (Interface Segregation)', 'D — depend on abstractions, not implementations (Dependency Inversion)'] },
          { name: 'Protocol-Oriented Design', sub: 'Composing capabilities without inheritance', details: ['Protocol = a specification of what something can do', 'Protocol Extension — eliminating duplication with default implementations', 'Composition — combining multiple protocols vs deep inheritance', 'any vs some Protocol — when to use which', 'associatedtype — generics for protocols'] },
          { name: 'Generics', sub: 'Eliminating duplication that only differs by type', details: ['Generic functions — abstracting types with <T>', 'Constraints — where T: Equatable', 'Generic struct/class — implementing Stack<Element>', 'Opaque Type (some) — hiding concrete types while preserving performance'] },
        ]
      },
      {
        id: '3-2', ico: '📐', title: 'Applying Proven Design Patterns',
        trigger: 'Navigation logic is in the View / dependencies are tangled in every direction',
        why: 'In 3-1 you understood the principles of separating responsibilities. Now it\'s time to make them concrete with patterns that have been proven over decades. If you memorize patterns without principles first, you won\'t know "when should I use this" — principles are the criteria for choosing patterns.',
        quiz: {
          q: 'The entire app uses a single network manager. You want to write tests without actually calling the server.',
          options: [
            { key: 'singleton', label: 'A', title: 'Direct Singleton reference (NetworkManager.shared)', desc: 'Tests must call the real server too' },
            { key: 'protocolDI', label: 'B', title: 'Protocol + DI (inject dependencies)', desc: 'Inject a Mock object to test without a server' }
          ],
          answer: {
            singleton: { tag: 'If you chose A', code: 'class ViewModel {<br>&nbsp;&nbsp;func load() {<br>&nbsp;&nbsp;&nbsp;&nbsp;NetworkManager.shared.fetch(...)<br>&nbsp;&nbsp;&nbsp;&nbsp;// Tests also hit the real server<br>&nbsp;&nbsp;}<br>}', effectLabel: 'Testability', effectWidth: '80%', effectValue: 'Server-dependent — untestable', body: 'When you directly reference a Singleton, <strong>there\'s no way to swap the real implementation</strong>. Tests become dependent on network conditions, resulting in flaky and slow tests.', correct: false },
            protocolDI: { tag: 'If you chose B', code: 'protocol NetworkService { func fetch(...) }<br><br>class ViewModel {<br>&nbsp;&nbsp;let network: NetworkService  // injected<br>&nbsp;&nbsp;func load() { network.fetch(...) }<br>}<br>// Test: inject MockNetwork', effectLabel: 'Testability', effectWidth: '10%', effectValue: 'Mock injection — test freely', body: 'When you abstract with a Protocol and inject from outside, <strong>you can swap in a Mock object for testing</strong>. This enables fast and stable tests without a server.', correct: true }
          }
        },
        topics: [
          { name: 'Creational Patterns', sub: 'Standardizing how objects are created', details: ['Factory — centralizing creation logic', 'Builder — assembling step by step, SwiftUI ViewBuilder', 'Singleton — why it makes testing harder', 'Dependency Injection — benefits of receiving from outside'] },
          { name: 'Behavioral Patterns', sub: 'Organizing communication between objects', details: ['Observer — comparing @Published, Combine, NotificationCenter', 'Strategy — swapping algorithms at runtime', 'Command — representing actions as objects, undo/redo', 'State — objects that behave differently based on state', 'Coordinator — separating navigation responsibility'] },
          { name: 'Architectural Patterns', sub: 'How to structure the entire app', details: ['MVC — UIKit default, why it becomes Massive ViewController', 'MVVM — separating logic with ViewModel, enabling testability', 'Repository — a layer abstracting data sources', 'Clean Architecture — the principle of dependency direction', 'TCA — Introduction to The Composable Architecture'] },
        ]
      },
      {
        id: '3-3', ico: '🏗', title: 'Project Structure and Code Quality',
        trigger: 'You have 100 files but can\'t find anything',
        why: 'You can now design at the function and class level. It\'s time to broaden your view to the entire project. Once you have over 100 files, "well-written classes" alone aren\'t enough — the structural question of how to organize and where to place things begins.',
        quiz: {
          q: 'Over 100 Swift files are all in the project root. You don\'t know where to create a new file.',
          options: [
            { key: 'flatName', label: 'A', title: 'Distinguish by filename (UserView, UserViewModel, UserService...)', desc: 'Different names but all in the same folder — hard to find' },
            { key: 'featureFolder', label: 'B', title: 'Feature folders + layer separation (Features/User/View, Model, Service)', desc: 'Related files are grouped together' }
          ],
          answer: {
            flatName: { tag: 'If you chose A', code: '📁 Project/<br>&nbsp;&nbsp;UserView.swift<br>&nbsp;&nbsp;UserViewModel.swift<br>&nbsp;&nbsp;ProductView.swift<br>&nbsp;&nbsp;ProductViewModel.swift<br>&nbsp;&nbsp;... 100 files in one folder', effectLabel: 'File discovery time', effectWidth: '75%', effectValue: 'Finding among 100 — search every time', body: 'When all files are in one folder, <strong>you have to search every time to find related files</strong>. As the file count grows, discovery time increases, and there\'s no guideline for where to create new files.', correct: false },
            featureFolder: { tag: 'If you chose B', code: '📁 Features/<br>&nbsp;&nbsp;📁 User/<br>&nbsp;&nbsp;&nbsp;&nbsp;UserView.swift<br>&nbsp;&nbsp;&nbsp;&nbsp;UserViewModel.swift<br>&nbsp;&nbsp;📁 Product/<br>&nbsp;&nbsp;&nbsp;&nbsp;ProductView.swift<br>&nbsp;&nbsp;&nbsp;&nbsp;ProductViewModel.swift', effectLabel: 'File discovery time', effectWidth: '12%', effectValue: 'Open folder — found instantly', body: 'A feature-based folder structure <strong>groups related files together</strong>, making them intuitive to find. New file locations are obvious, and it\'s easy to understand code at the feature level.', correct: true }
          }
        },
        topics: [
          { name: 'Modularization', sub: 'Separating code by feature', details: ['SPM — splitting into libraries and distributing via GitHub', 'Multi-target — sharing code across app/widget/extensions', 'Layered Architecture — Presentation / Domain / Data', 'Dependency direction — which module should know about which'] },
          { name: 'Code Conventions', sub: 'Improving readability with consistent style', details: ['SwiftLint — rule-based automatic style checking', 'SwiftFormat — automatic formatting', 'Naming — principles for naming types, functions, variables', 'MARK: — organizing code sections'] },
          { name: 'Refactoring', sub: 'Safely improving existing code', details: ['Code smells — signs that refactoring is needed', 'Extract function, rename, simplify conditions', 'Why refactoring without tests is dangerous', 'Gradual migration from legacy UIKit → SwiftUI'] },
        ]
      },
    ]
  },
  {
    id: 's4', n: '4', ico: '💀', title: 'The App Keeps Crashing',
    color: 'var(--s4)', theme: 's4-theme', link: 'https://m1zz.github.io/ios-concept-lab/',
    problem: 'EXC_BAD_ACCESS crashes / memory warning then force quit / deinit never gets called',
    solve: 'ARC internals, retain cycles, weak/unowned, Instruments, error handling',
    analogy: '🚲 A bicycle you can maintain',
    status: 'You can find and fix memory leaks. You understand ARC and use weak/unowned correctly. You catch leaks with Instruments and handle errors gracefully. You build stable, crash-free apps.',
    gap: 'Your app only works offline. You want to fetch server data but URLSession looks intimidating. You don\'t know how to parse JSON or persist data locally.',
    next: 'Your bicycle is in perfect shape. But it only runs on your own power. You need an engine.',
    chapters: [
      {
        id: '4-1', ico: '🧠', title: 'How Memory Is Managed',
        trigger: 'The app gets a memory warning and dies while running',
        why: 'A significant portion of iOS crashes come from memory issues. Before following advice to "just use weak," you need to understand why. Without understanding ARC, you can\'t appreciate why creating a retain cycle is dangerous.',
        quiz: {
          q: 'Two ViewControllers reference each other as delegates. Closing the screen doesn\'t release them from memory.',
          options: [
            { key: 'strongRef', label: 'A', title: 'strong var delegate (strong reference)', desc: 'They reference each other and stay in memory forever' },
            { key: 'weakRef', label: 'B', title: 'weak var delegate (weak reference)', desc: 'Doesn\'t increase reference count, allowing normal deallocation' }
          ],
          answer: {
            strongRef: { tag: 'If you chose A', code: 'class A {<br>&nbsp;&nbsp;var delegate: B?  // strong<br>}<br>class B {<br>&nbsp;&nbsp;var delegate: A?  // strong<br>}<br>// Neither deinit ever gets called 💀', effectLabel: 'Memory leak', effectWidth: '90%', effectValue: 'Retain cycle — permanent leak', body: 'When two objects hold strong references to each other, <strong>their reference counts never reach 0</strong>. ARC cannot deallocate them, and they permanently occupy memory for the app\'s lifetime.', correct: false },
            weakRef: { tag: 'If you chose B', code: 'class A {<br>&nbsp;&nbsp;weak var delegate: B?  // weak<br>}<br>class B {<br>&nbsp;&nbsp;var parent: A?<br>}<br>// Releasing A triggers deinit properly ✅', effectLabel: 'Memory leak', effectWidth: '5%', effectValue: 'Normal deallocation — zero leaks', body: 'A weak reference <strong>does not increment the reference count</strong>. When one side is deallocated, the weak reference automatically becomes nil, allowing normal memory deallocation without retain cycles.', correct: true }
          }
        },
        topics: [
          { name: 'Stack vs Heap', sub: 'Where is data stored?', details: ['Stack — automatically allocated/deallocated on function calls, fast', 'Heap — dynamically allocated, managed by developer (ARC)', 'struct → Stack, class → Heap (conditionally)', 'Escape analysis — compiler minimizing heap allocations', 'Stack overflow — why infinite recursion causes a crash'] },
          { name: 'How ARC Works', sub: 'How is memory automatically released?', details: ['Retain Count — +1 on reference add, -1 on release', 'Count reaches 0 → deinit called → memory returned', 'retain/release calls inserted by ARC at compile time', 'deinit — debugging tip to confirm deallocation timing', 'Difference from GC — no runtime overhead, predictable'] },
          { name: 'Strong Reference Cycles', sub: '"Why isn\'t deinit being called?"', details: ['A holds B strong, B holds A strong → never deallocated', 'ViewModel ↔ closure cycle — the most common pattern', 'Retain cycles in the Delegate pattern', 'Memory Graph Debugger — visually identifying retain cycles'] },
          { name: 'weak / unowned', sub: 'How to break retain cycles', details: ['weak — doesn\'t increase ref count, auto-nils', 'unowned — guarantees non-nil, crashes if wrong', '[weak self] capture list — breaking closure cycles', 'When to use weak vs unowned — decision criteria', 'Why delegates must always be weak var'] },
        ]
      },
      {
        id: '4-2', ico: '🔍', title: 'Finding and Fixing Crash Causes',
        trigger: 'Thread 1: EXC_BAD_ACCESS — you have no idea what\'s wrong',
        why: 'In 4-1 you understood memory principles. Theory is completed in front of real tools. Instruments and error handling patterns are only meaningful when you understand the underlying principles — if the order is reversed, you learn the tools but not the causes.',
        quiz: {
          q: 'JSON parsing can fail. How would you handle the error?',
          options: [
            { key: 'tryOptional', label: 'A', title: 'try? (ignore the error)', desc: 'No idea why it failed, impossible to debug' },
            { key: 'doCatch', label: 'B', title: 'do-catch (catch and handle the error)', desc: 'Pinpoint the exact failure cause' }
          ],
          answer: {
            tryOptional: { tag: 'If you chose A', code: 'let data = try? JSONDecoder()<br>&nbsp;&nbsp;.decode(User.self, from: json)<br>// If nil... no idea why it failed<br>// User sees a blank screen', effectLabel: 'Debuggability', effectWidth: '80%', effectValue: 'Unknown cause — guessing only', body: 'try? <strong>converts the error to nil and discards all cause information</strong>. You can\'t tell whether the key name was wrong, the type mismatched, or the JSON itself was malformed — making debugging impossible.', correct: false },
            doCatch: { tag: 'If you chose B', code: 'do {<br>&nbsp;&nbsp;let data = try JSONDecoder()<br>&nbsp;&nbsp;&nbsp;&nbsp;.decode(User.self, from: json)<br>} catch {<br>&nbsp;&nbsp;print(error)  // Exact failure cause<br>&nbsp;&nbsp;showError(error)  // Inform the user<br>}', effectLabel: 'Debuggability', effectWidth: '10%', effectValue: 'Cause is clear — fix immediately', body: 'do-catch <strong>provides the exact failure cause through the error object</strong>. For DecodingError, it tells you exactly which key had which type mismatch.', correct: true }
          }
        },
        topics: [
          { name: 'Instruments in Practice', sub: 'Finding memory leaks and crash causes', details: ['Leaks — list of objects that weren\'t deallocated', 'Allocations — tracking memory growth over time', 'Memory Graph — exploring the graph of live objects', 'Hands-on: intentional leak → find it → fix it'] },
          { name: 'Value Type Optimization', sub: 'Why copying an Array isn\'t actually slow', details: ['Copy-on-Write (COW) — deferring the copy until mutation', 'isKnownUniquelyReferenced — checking if shared', 'When struct wins vs when class wins'] },
          { name: 'Mastering Error Handling', sub: 'Failing gracefully instead of crashing', details: ['throws / try / do-catch — recoverable errors', 'Result<Success, Failure> — treating errors as values', 'assert / precondition / fatalError — expressing impossible states', 'defer — always executed regardless of exit path'] },
        ]
      },
      {
        id: '4-3', ico: '🔢', title: 'How Computers Handle Numbers and Text',
        trigger: 'Currency calculations are wrong / string length with emojis is weird',
        why: 'Working with memory inevitably leads to bit-level issues. "Why is 0.1 + 0.2 wrong?", "Why is the emoji character count different?" — these questions arise naturally right now. Before S4, these questions simply don\'t come up.',
        quiz: {
          q: 'You\'re calculating product prices in a shopping app. What happens when you apply a 10% discount to 1000?',
          options: [
            { key: 'useDouble', label: 'A', title: 'Calculate with Double', desc: 'Can\'t represent 0.1 exactly, so you get rounding errors like 999.999...' },
            { key: 'useDecimal', label: 'B', title: 'Calculate with Decimal', desc: 'Base-10 representation for exact currency calculations' }
          ],
          answer: {
            useDouble: { tag: 'If you chose A', code: 'let price = 1000.0<br>let discount = price * 0.1<br>print(price - discount)<br>// 899.9999999999999 💀<br>// Can\'t show this to users', effectLabel: 'Calculation accuracy', effectWidth: '75%', effectValue: 'Floating-point error — amount mismatch', body: 'Double uses <strong>binary floating-point</strong>, so it cannot represent 0.1 exactly. In currency calculations, tiny errors accumulate and can lead to serious issues like payment amount mismatches.', correct: false },
            useDecimal: { tag: 'If you chose B', code: 'let price = Decimal(1000)<br>let discount = price * Decimal(string: "0.1")!<br>print(price - discount)<br>// 900 ✅<br>// Exact amount', effectLabel: 'Calculation accuracy', effectWidth: '8%', effectValue: 'Base-10 precision — exact', body: 'Decimal represents numbers in <strong>base-10</strong>, so it stores 0.1 exactly. For currency, tax, exchange rates, and any calculation requiring precise decimals, Decimal is mandatory.', correct: true }
          }
        },
        topics: [
          { name: 'Integer Representation', sub: 'Why Int overflow happens', details: ['Two\'s complement — representing negative numbers in bits', 'Why Int8 ranges from -128 to 127', 'Overflow operators &+ — intentional overflow'] },
          { name: 'Floating-Point Pitfalls', sub: 'Why 0.1 + 0.2 ≠ 0.3', details: ['IEEE 754 — the standard for representing reals in bits', 'Float vs Double — precision differences', 'Never use Double for currency — use Decimal'] },
          { name: 'Characters and Encoding', sub: 'Why emoji character counts differ', details: ['Unicode — one standard for all characters worldwide', 'UTF-8 — variable-length encoding', 'Why Swift String indices aren\'t Int', 'Emoji = a combination of multiple code points'] },
        ]
      },
    ]
  },
  {
    id: 's5', n: '5', ico: '🌐', title: 'Need Server Data',
    color: 'var(--s5)', theme: 's5-theme', link: 'https://m1zz.github.io/network',
    problem: 'You want to call an API and parse JSON / you want to persist data in the app',
    solve: 'HTTP, URLSession, Codable, local DB, cloud sync, security',
    analogy: '🛵 Motorcycle',
    status: 'You can build apps that communicate with servers. You call REST APIs, parse JSON, and store data in Core Data. You implement login, token management, and HTTPS security. You can build production-quality apps.',
    gap: 'The UI freezes during network requests. Loading multiple images stutters the scroll. You don\'t know exactly what the main thread is or why you need async/await.',
    next: 'You can ride a motorcycle. But you can\'t do two things at once.',
    chapters: [
      {
        id: '5-1', ico: '📡', title: 'HTTP and REST APIs',
        trigger: 'Why does URLSession look so complicated?',
        why: 'You\'ve outgrown local-only apps and need a server. Every design decision in URLSession — why async/await, why URLRequest is a separate object — makes sense only when you understand HTTP. Protocol before tools.',
        quiz: {
          q: 'You\'re fetching a list of users from a server. How would you write the network request?',
          options: [
            { key: 'sync', label: 'A', title: 'Synchronous (call directly on the main thread)', desc: 'UI freezes' },
            { key: 'asyncAwait', label: 'B', title: 'async/await (call asynchronously)', desc: 'UI stays responsive' }
          ],
          answer: {
            sync: { tag: 'If you chose A', code: '// Calling directly on the main thread<br>let data = try Data(contentsOf: url)<br>// ⚠️ App freezes until the response arrives<br>// User: "Is the app dead?"', effectLabel: 'UI responsiveness', effectWidth: '85%', effectValue: 'App freezes during request — 3 seconds unresponsive', body: 'Making a synchronous network request on the main thread completely freezes the UI until the response returns. Users perceive the app as dead, and iOS may force-kill it.', correct: false },
            asyncAwait: { tag: 'If you chose B', code: 'let (data, _) = try await<br>&nbsp;&nbsp;URLSession.shared.data(from: url)<br>// ✅ UI stays responsive while waiting<br>// User: the loading spinner is spinning', effectLabel: 'UI responsiveness', effectWidth: '8%', effectValue: 'Async processing — UI normal', body: 'Using async/await, the network request is processed in the background while the UI remains fully responsive. This is the correct approach that doesn\'t compromise user experience.', correct: true }
          }
        },
        topics: [
          { name: 'HTTP Deep Dive', sub: 'What do requests and responses look like?', details: ['Request structure — Method, URL, Headers, Body', 'GET/POST/PUT/DELETE/PATCH — what each means', 'Status codes — 200, 201, 400, 401, 403, 404, 500', 'RESTful design — resource-based URL design principles', 'HTTP/2 vs HTTP/3 — how iOS URLSession leverages them'] },
          { name: 'URLSession Advanced', sub: 'Handling network requests in iOS', details: ['URLRequest — configuring Method, Headers, Body', 'DataTask, DownloadTask, UploadTask — when to use which', 'Background Session — downloads that complete after app termination', 'URLCache — response caching strategies', 'async/await + URLSession — modern networking code'] },
          { name: 'JSON Parsing', sub: 'Automatic conversion with Codable', details: ['Codable = Encodable + Decodable', 'CodingKeys — when JSON keys differ from property names', 'Nested JSON — handling nested structures', 'API error response parsing — success/failure branching', 'Custom Decoder — handling complex transformations manually'] },
          { name: 'Network Layer Design', sub: 'No duplication, testable structure', details: ['API Client Protocol — swap with Mock for testing', 'Endpoint enum — type-safe URL composition', 'Interceptor — common headers, automatic token refresh', 'Retry logic — strategies for retrying on failure'] },
        ]
      },
      {
        id: '5-2', ico: '💾', title: 'Data Persistence',
        trigger: 'You want data to survive app restarts',
        why: 'In 5-1 you received data from the server. The natural next question: "How do I keep it after the app closes?" Networking and persistence always come as a pair. Where and how you store fetched data determines your app\'s reliability.',
        quiz: {
          q: 'You need to store the user\'s login token. Where would you save it?',
          options: [
            { key: 'userDefaults', label: 'A', title: 'UserDefaults (simple storage)', desc: 'Stored as plaintext without encryption, exposed on jailbroken devices' },
            { key: 'keychain', label: 'B', title: 'Keychain (secure storage)', desc: 'Hardware-encrypted, protected by iOS' }
          ],
          answer: {
            userDefaults: { tag: 'If you chose A', code: 'UserDefaults.standard.set(<br>&nbsp;&nbsp;token, forKey: "authToken"<br>)<br>// ⚠️ Stored as plaintext in a plist file<br>// Directly readable on jailbroken devices', effectLabel: 'Security level', effectWidth: '85%', effectValue: 'Plaintext exposure — hacking risk', body: 'UserDefaults stores data as plaintext in a plist file. On jailbroken devices, the filesystem is directly accessible, so sensitive information is fully exposed.', correct: false },
            keychain: { tag: 'If you chose B', code: 'let query: [String: Any] = [<br>&nbsp;&nbsp;kSecClass: kSecClassGenericPassword,<br>&nbsp;&nbsp;kSecValueData: token.data(using: .utf8)!<br>]<br>SecItemAdd(query as CFDictionary, nil)<br>// ✅ Hardware-encrypted storage', effectLabel: 'Security level', effectWidth: '8%', effectValue: 'Hardware encryption — secure', body: 'Keychain leverages iOS\'s Secure Enclave to encrypt data at the hardware level. Even on jailbroken devices it\'s not easily accessible, making it the only safe way to store sensitive information.', correct: true }
          }
        },
        topics: [
          { name: 'Choosing a Storage Solution', sub: 'What to store where', details: ['UserDefaults — small settings, Codable custom types', 'Keychain — passwords, tokens, and sensitive information', 'FileManager — images, documents, binary files', 'Size / security / sync needs — selection criteria'] },
          { name: 'SQL Basics', sub: 'Working with structured bulk data', details: ['SELECT, INSERT, UPDATE, DELETE', 'WHERE, ORDER BY, LIMIT', 'JOIN — connecting related tables', 'INDEX — B-Tree indexing, how it speeds up queries', 'GRDB — working with SQLite directly in Swift'] },
          { name: 'Core Data & SwiftData', sub: 'Apple\'s official local databases', details: ['Entity, Attribute, Relationship design', 'NSFetchRequest + Predicate conditional queries', 'SwiftData — @Model, @Query (iOS 17+)', 'Migration — preserving data when schema changes', 'Core Data vs SwiftData selection criteria'] },
          { name: 'Cloud Sync', sub: 'Same data across multiple devices', details: ['CloudKit — iCloud integration', 'Firebase Firestore — real-time sync', 'Offline-first — Local First pattern', 'Conflict resolution strategies'] },
        ]
      },
      {
        id: '5-3', ico: '🔐', title: 'Network Security',
        trigger: 'We use HTTPS — so why can we still get hacked? / Where should I store tokens?',
        why: 'You can send, receive, and store data. Now "is this secure?" inevitably follows. Security isn\'t learned alongside feature development — it\'s learned right after features are complete. You learn locks when you have something worth protecting.',
        quiz: {
          q: 'You\'re using an external API. Where would you put the API key?',
          options: [
            { key: 'hardcode', label: 'A', title: 'Hardcode in source', desc: 'Push to GitHub and it\'s exposed to the world' },
            { key: 'xcconfig', label: 'B', title: 'Separate into xcconfig / env variables', desc: 'No keys in code, .gitignore handled' }
          ],
          answer: {
            hardcode: { tag: 'If you chose A', code: 'let apiKey = "sk-1234abcd..."<br>// ⚠️ If this file gets pushed to GitHub<br>// anyone in the world can use this key<br>// You\'ll get bills for millions', effectLabel: 'Key exposure risk', effectWidth: '90%', effectValue: 'Permanently recorded in Git history', body: 'Putting API keys directly in code records them permanently in Git history. Once pushed even once, the key is exposed even if deleted — bots automatically scan and exploit them.', correct: false },
            xcconfig: { tag: 'If you chose B', code: '// Config.xcconfig (added to .gitignore)<br>API_KEY = sk-1234abcd...<br><br>// Reading in code<br>let key = Bundle.main.object(<br>&nbsp;&nbsp;forInfoDictionaryKey: "API_KEY"<br>) as? String', effectLabel: 'Key exposure risk', effectWidth: '5%', effectValue: 'No keys in code — safe', body: 'Adding the xcconfig file to .gitignore keeps keys out of the repository. Each developer configures their own keys locally, and CI/CD injects them via environment variables.', correct: true }
          }
        },
        topics: [
          { name: 'HTTPS and TLS', sub: 'How secure communication works', details: ['TLS handshake — the key exchange process', 'Certificates and CAs — verifying the server is genuine', 'SSL Pinning — defending against MITM attacks', 'App Transport Security — iOS\'s enforced HTTPS'] },
          { name: 'Authentication Implementation', sub: 'OAuth, JWT, Biometrics', details: ['OAuth 2.0 — social login flow', 'JWT — token structure, Access + Refresh pattern', 'Storing tokens in Keychain', 'Face ID / Touch ID — LocalAuthentication'] },
          { name: 'Cryptography Basics', sub: 'CryptoKit in practice', details: ['Symmetric (AES), asymmetric (RSA), hash (SHA-256)', 'CryptoKit — Swift cryptography implementation', 'Never hardcode API keys — exposure risk'] },
        ]
      },
    ]
  },
  {
    id: 's6', n: '6', ico: '🧊', title: 'UI Stutters and Freezes',
    color: 'var(--s6)', theme: 's6-theme', link: 'https://m1zz.github.io/ios-concurrency-performance/',
    problem: 'The screen freezes during network requests / frame drops occur while scrolling',
    solve: 'Concurrency (GCD, async/await, Actor), rendering optimization, Combine',
    analogy: '🚗 Car',
    status: 'You can build smooth, fast apps. You handle async with async/await and prevent data races with Actors. You optimize rendering and compose complex events with Combine. This is the stage where perceived quality takes a leap.',
    gap: '"Can I safely change this code?" — that fear persists. Without tests, every deploy is nerve-wracking. You build manually and deploy manually.',
    next: 'You can drive a car. But you have no insurance, and no mechanic.',
    chapters: [
      {
        id: '6-1', ico: '⚙️', title: 'Why the Main Thread Matters',
        trigger: 'You get a purple warning after updating UI in a URLSession callback',
        why: 'The moment you start using URLSession in S5, main thread warnings appear. Concurrency isn\'t optional for developers making network calls — it\'s mandatory. Before S5, concurrency doesn\'t resonate because there\'s no problematic code to motivate it.',
        quiz: {
          q: 'You need to download a large image while simultaneously updating the UI.',
          options: [
            { key: 'mainThread', label: 'A', title: 'Download on the main thread', desc: 'Screen freezes until download completes' },
            { key: 'background', label: 'B', title: 'Download in background + update UI on main', desc: 'Smooth UX' }
          ],
          answer: {
            mainThread: { tag: 'If you chose A', code: '// Main thread<br>let data = downloadImage(url)<br>imageView.image = UIImage(data: data)<br>// ⚠️ During the 3-second download<br>// scrolling, taps, all touches are ignored', effectLabel: 'Frame drops', effectWidth: '90%', effectValue: '0fps for 3 seconds — app frozen', body: 'Processing a network request on the main thread completely blocks the UI event loop until the download finishes. All user touch input is ignored, and iOS may force-kill the app.', correct: false },
            background: { tag: 'If you chose B', code: 'Task {<br>&nbsp;&nbsp;let data = await downloadImage(url)<br>&nbsp;&nbsp;await MainActor.run {<br>&nbsp;&nbsp;&nbsp;&nbsp;imageView.image = UIImage(data: data)<br>&nbsp;&nbsp;}<br>}<br>// ✅ UI stays responsive during download', effectLabel: 'Frame drops', effectWidth: '5%', effectValue: '60fps maintained — smooth', body: 'By downloading on a background thread and updating UI through MainActor after completion, you maintain 60fps even during the download. Users experience no interruption.', correct: true }
          }
        },
        topics: [
          { name: 'Thread Basics', sub: 'How the OS does multiple things at once', details: ['Process vs Thread — independent memory vs shared memory', 'Main thread — dedicated to UI, blocking it freezes the app', 'Context switching — the cost of switching threads', 'Race Condition — when two threads write to the same data simultaneously', 'iOS RunLoop — how the main thread processes events'] },
          { name: 'GCD Deep Dive', sub: 'Automatic thread pool management', details: ['DispatchQueue.main — UI must always be here', 'DispatchQueue.global(qos:) — background work', 'sync vs async — does it block the current thread?', 'serial vs concurrent — order guaranteed vs parallel', 'DispatchGroup, Semaphore, Barrier'] },
          { name: 'async/await', sub: 'Escaping callback hell', details: ['async functions — async results that read like sync code', 'await — waits without blocking the thread', 'Task — async work lifecycle', 'async let — parallel execution', 'withCheckedContinuation — converting callbacks → async'] },
          { name: 'Actor', sub: 'How the compiler prevents data races', details: ['Actor — serialized access to internal state', 'MainActor — safe UI updates', 'Sendable — marking thread-safe types', 'GCD vs async/await — two approaches to the same problem'] },
        ]
      },
      {
        id: '6-2', ico: '🎞', title: 'Rendering Performance Optimization',
        trigger: 'It\'s LazyVStack but scrolling still stutters',
        why: 'In 6-1 you understood threads. Now you broaden the scope to SwiftUI rendering optimization. Without the main thread concept, you can\'t understand "why re-rendering happens" — concurrency is a prerequisite for rendering optimization.',
        quiz: {
          q: 'You need to display a 4000x3000 image from the server as a 100x100 thumbnail.',
          options: [
            { key: 'rawLoad', label: 'A', title: 'Load raw with UIImage(data:)', desc: '48MB memory usage' },
            { key: 'downsample', label: 'B', title: 'Downsample with ImageIO before loading', desc: '0.04MB memory usage' }
          ],
          answer: {
            rawLoad: { tag: 'If you chose A', code: 'let image = UIImage(data: data)<br>// 4000x3000 x 4bytes = 48MB<br>// 100 thumbnails = 4.8GB 💀<br>// Memory warning → app force-killed', effectLabel: 'Memory usage', effectWidth: '90%', effectValue: '48MB/image — 10 images and you crash', body: 'UIImage(data:) decodes the image at full original resolution. A 4000x3000 pixel image takes about 48MB of memory at 4 bytes per pixel (RGBA), and loading multiple images immediately triggers memory warnings.', correct: false },
            downsample: { tag: 'If you chose B', code: 'let options = [kCGImageSourceThumbnailMaxPixelSize: 100]<br>let thumb = CGImageSourceCreateThumbnailAtIndex(<br>&nbsp;&nbsp;source, 0, options as CFDictionary<br>)<br>// 100x100 x 4bytes = 0.04MB ✅', effectLabel: 'Memory usage', effectWidth: '5%', effectValue: '0.04MB/image — 1000 images OK', body: 'ImageIO downsampling reduces the image to the target size before decoding. Instead of 48MB, only 0.04MB is used — a 1000x+ improvement in memory efficiency.', correct: true }
          }
        },
        topics: [
          { name: 'SwiftUI Rendering', sub: 'Preventing unnecessary re-renders', details: ['SwiftUI diff — state change → View recreation conditions', '@StateObject vs @ObservedObject — lifecycle differences', 'Equatable — skip rendering if the value is the same', 'LazyVStack vs List — characteristics of each', 'identity, lifetime, dependency — SwiftUI\'s 3 principles'] },
          { name: 'Image Optimization', sub: 'Displaying images without memory explosion', details: ['Downsampling — saving 10x memory with ImageIO', 'NSCache — auto-evicting image cache', 'Image formats — HEIC, WebP vs PNG/JPEG', 'Prefetching — loading ahead of scroll'] },
          { name: 'App Launch Speed', sub: 'Reducing launch time', details: ['Cold vs Warm Launch', 'dyld linking — dynamic library loading time', 'Lazy Initialization — initialize only when needed', 'MetricKit — measuring real-user launch time'] },
        ]
      },
      {
        id: '6-3', ico: '🔄', title: 'Combine and Reactive Programming',
        trigger: 'Applying debounce to a search bar / combining multiple async events',
        why: 'As multiple async events combine, code becomes complex again. Having experienced that complexity firsthand, now is the right time to learn Combine. You must understand async/await first to appreciate what additional problems Combine solves.',
        quiz: {
          q: 'A search request is sent to the server every time the user types.',
          options: [
            { key: 'everyKey', label: 'A', title: 'API call on every keystroke', desc: '"H", "He", "Hel", "Hell", "Hello" → 5 calls' },
            { key: 'debounce', label: 'B', title: 'Apply debounce', desc: 'Only 1 call 0.3s after typing stops' }
          ],
          answer: {
            everyKey: { tag: 'If you chose A', code: 'textField.addTarget(self,<br>&nbsp;&nbsp;action: #selector(search),<br>&nbsp;&nbsp;for: .editingChanged<br>)<br>// Typing "Hello" → 5 API calls<br>// Server overload, cost explosion', effectLabel: 'API call count', effectWidth: '80%', effectValue: '1 per keystroke — unnecessary request flood', body: 'Calling the API on every keystroke generates 5 unnecessary requests while the user types "Hello." This overloads the server and, with paid APIs, costs skyrocket.', correct: false },
            debounce: { tag: 'If you chose B', code: '$searchText<br>&nbsp;&nbsp;.debounce(for: .seconds(0.3),<br>&nbsp;&nbsp;&nbsp;&nbsp;scheduler: RunLoop.main)<br>&nbsp;&nbsp;.removeDuplicates()<br>&nbsp;&nbsp;.sink { query in search(query) }<br>// Typing "Hello" → 1 API call ✅', effectLabel: 'API call count', effectWidth: '10%', effectValue: '1 call after typing stops — optimal', body: 'debounce only emits a value after the specified time (0.3s) has passed since the last event. Combined with removeDuplicates, it also prevents duplicate requests for the same search term.', correct: true }
          }
        },
        topics: [
          { name: 'Combine Basics', sub: 'Handling events as streams', details: ['Publisher — a stream that emits values over time', 'Subscriber — receives and processes values', 'Operator — map, filter, flatMap, combineLatest', '@Published — turning property changes into a Publisher', 'AnyCancellable — managing subscription lifetime'] },
          { name: 'Combine in Practice', sub: 'Search, form validation, network chaining', details: ['debounce — reducing requests during typing', 'removeDuplicates — eliminating duplicate events', 'combineLatest — merging multiple inputs for validation', 'flatMap + URLSession — async chaining', 'Error handling — catch, retry, replaceError'] },
        ]
      },
    ]
  },
  {
    id: 's7', n: '7', ico: '🧪', title: 'Is My Code Even Correct?',
    color: 'var(--s7)', theme: 's7-theme', link: 'https://m1zz.github.io/ios-distribution',
    problem: 'Bugs found after deployment / fear of breaking things with every change / deployment is tedious',
    solve: 'Testing, TDD, CI/CD, crash analysis, app monetization and operations',
    analogy: '🚗 A car with insurance and a mechanic',
    status: 'You write tests and deploy automatically with CI/CD. You analyze crash reports and track user behavior. You monetize your app. You are a fully independent developer who can build, deploy, operate, and earn money from apps on your own.',
    gap: 'You don\'t understand the fundamental principles of "why things work this way." You can\'t explain how the CPU executes code, what the compiler does, or how async/await is implemented at the OS level.',
    next: 'You drive your car well. But you don\'t know how the engine works.',
    chapters: [
      {
        id: '7-1', ico: '✅', title: 'Writing Tests',
        trigger: 'You want to eliminate the fear of "is it safe to change this code?"',
        why: 'You\'ve written enough code, and the fear of "is it safe to change this?" has set in. Having experienced that fear firsthand, now is when you can truly appreciate the value of testing. Without that fear, learning tests means just memorizing procedures.',
        quiz: {
          q: 'You\'re testing a ViewModel\'s login logic. What if the server is down?',
          options: [
            { key: 'realServer', label: 'A', title: 'Test with the real server', desc: 'Tests pass or fail depending on server status' },
            { key: 'mockObject', label: 'B', title: 'Test with Mock objects', desc: 'Always the same result without a server' }
          ],
          answer: {
            realServer: { tag: 'If you chose A', code: 'func testLogin() async {<br>&nbsp;&nbsp;let vm = LoginViewModel()<br>&nbsp;&nbsp;await vm.login("user", "pass")<br>&nbsp;&nbsp;// ⚠️ Fails if server is down<br>&nbsp;&nbsp;// Different results every CI run<br>}', effectLabel: 'Test reliability', effectWidth: '75%', effectValue: 'Environment-dependent — unstable results', body: 'Tests that depend on a real server produce varying results due to network conditions, server maintenance, and data changes. Intermittent CI failures destroy trust in the test suite.', correct: false },
            mockObject: { tag: 'If you chose B', code: 'func testLogin() async {<br>&nbsp;&nbsp;let mock = MockAuthService(<br>&nbsp;&nbsp;&nbsp;&nbsp;result: .success(User(name: "test"))<br>&nbsp;&nbsp;)<br>&nbsp;&nbsp;let vm = LoginViewModel(auth: mock)<br>&nbsp;&nbsp;await vm.login("user", "pass")<br>&nbsp;&nbsp;XCTAssertTrue(vm.isLoggedIn) // ✅ Always the same<br>}', effectLabel: 'Test reliability', effectWidth: '8%', effectValue: 'Isolated test — 100% reproducible', body: 'Mock objects completely remove external dependencies. Tests produce the same result regardless of server status, letting you focus on verifying the logic itself.', correct: true }
          }
        },
        topics: [
          { name: 'Testing Philosophy', sub: 'Testing is an investment, not a cost', details: ['Refactoring without tests = driving blindfolded', 'Test pyramid — Unit:Integration:E2E = 70:20:10', 'What to test — behavior, not implementation', 'Designing testable code — dependency injection'] },
          { name: 'XCTest in Practice', sub: 'Writing your first Unit Test', details: ['@testable import — testing internal types', 'XCTAssertEqual, XCTAssertTrue, XCTAssertNil', 'setUp/tearDown — initialization before/after each test', 'Async tests — await + XCTestExpectation'] },
          { name: 'Mock / Stub', sub: 'Testing network code without a network', details: ['Protocol-based DI — swapping real implementations with fakes', 'Mock — a fake object that verifies behavior', 'Stub — returns predetermined responses', 'MockURLProtocol — testing APIs without a real network'] },
          { name: 'TDD in Practice', sub: 'Letting tests drive the design', details: ['Red → Green → Refactor cycle', 'Swift Testing — @Test, @Suite (WWDC 2024)', 'Parameterized Tests — multiple inputs at once', 'Building a calculator app with TDD from scratch'] },
        ]
      },
      {
        id: '7-2', ico: '🤖', title: 'Automation and CI/CD',
        trigger: 'Deployment is too tedious / code conflicts every time you merge with teammates',
        why: 'With tests in place, automation becomes possible. CI/CD without tests is just automating mistakes — the order matters. The trust that "code is automatically verified on push" can only be built with 7-1 coming first.',
        quiz: {
          q: 'You need to upload the app to TestFlight. How would you deploy?',
          options: [
            { key: 'manual', label: 'A', title: 'Manual build (Xcode → Archive → Upload)', desc: '30 minutes each time, prone to mistakes' },
            { key: 'cicd', label: 'B', title: 'CI/CD pipeline (auto-deploy on push)', desc: 'Just push code and it\'s done' }
          ],
          answer: {
            manual: { tag: 'If you chose A', code: '// Manual process every time...<br>// 1. Archive in Xcode (10 min)<br>// 2. Upload in Organizer (5 min)<br>// 3. Check certificates, select profiles...<br>// 4. Mistake? Start over', effectLabel: 'Deploy time', effectWidth: '80%', effectValue: '30 min each time + mistake risk', body: 'Manual deployment requires repeating the same steps every time, with room for errors like wrong certificate selection or missing build settings. Deploy frequency drops, and rapid hotfixes become difficult.', correct: false },
            cicd: { tag: 'If you chose B', code: '# .github/workflows/deploy.yml<br>on: push<br>jobs:<br>&nbsp;&nbsp;deploy:<br>&nbsp;&nbsp;&nbsp;&nbsp;steps:<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- run: fastlane beta<br>// Just push and it auto-deploys to TestFlight', effectLabel: 'Deploy time', effectWidth: '8%', effectValue: 'Automated — 0 min (just push)', body: 'A CI/CD pipeline automates build, test, and deployment with just a code push. It eliminates human error and dramatically increases deployment frequency.', correct: true }
          }
        },
        topics: [
          { name: 'Advanced Version Control', sub: 'Using Git properly', details: ['Git internals — Object, Tree, Commit, Branch', 'rebase vs merge — history strategies', 'Bisect — finding the commit that introduced a bug', 'Git Flow vs GitHub Flow vs Trunk Based'] },
          { name: 'CI/CD Pipeline', sub: 'Auto build/test/deploy on code push', details: ['Xcode Cloud — workflow setup, auto TestFlight upload', 'GitHub Actions — iOS build automation', 'Fastlane match — sharing certificates/profiles across the team', 'Fastlane Snapshot — automated screenshot capture'] },
          { name: 'Code Review Culture', sub: 'How to give and receive feedback', details: ['Good PRs — description, checklist, screenshots', 'Reviewer perspective — what to look for', 'Tone of code review — technical discussion vs personal attacks', 'ADR — recording important decisions for posterity'] },
        ]
      },
      {
        id: '7-3', ico: '📊', title: 'Post-Launch Operations and Monetization',
        trigger: 'You\'ve shipped the app — now what do you look at?',
        why: 'Deployment is automated. This is the culmination of the curriculum — now you operate an app in front of real users, analyze crashes, and generate revenue. If you\'ve learned how to build, learning how to operate is the natural conclusion.',
        quiz: {
          q: 'You want to know if a new payment screen design will boost revenue.',
          options: [
            { key: 'fullReplace', label: 'A', title: 'Full replacement (new design for all users)', desc: 'If revenue drops, the cause is unknown' },
            { key: 'abTest', label: 'B', title: 'A/B test (new design for only 50%)', desc: 'Compare with data, then decide' }
          ],
          answer: {
            fullReplace: { tag: 'If you chose A', code: '// v2.0: New design for all users<br>// Result: revenue down 20%<br>// Cause: new design? seasonal? competitor?<br>// → Can\'t tell, rollback is late too', effectLabel: 'Decision accuracy', effectWidth: '75%', effectValue: 'Gut-based — cause unknown on failure', body: 'Applying to all users at once makes it impossible to isolate the cause of change. When revenue fluctuates, you can\'t tell if it\'s the design or external factors, and rollback decisions are delayed.', correct: false },
            abTest: { tag: 'If you chose B', code: '// Feature Flag: new design for 50% only<br>if RemoteConfig.isNewDesign {<br>&nbsp;&nbsp;showNewPaymentView()<br>} else {<br>&nbsp;&nbsp;showOriginalView()<br>}<br>// After 2 weeks: new +15% → roll out to all ✅', effectLabel: 'Decision accuracy', effectWidth: '10%', effectValue: 'Data-driven — clear evidence', body: 'A/B testing compares two groups under the same conditions and time period. By controlling external variables, you can measure the pure effect of the design change.', correct: true }
          }
        },
        topics: [
          { name: 'Crash Analysis', sub: 'Understanding why the app dies', details: ['Crashlytics — reports, affected user count', 'Xcode Organizer — Apple\'s official crash logs', 'Symbolication — converting addresses to function names', 'Prioritization — frequency × severity'] },
          { name: 'App Analytics', sub: 'How users actually use your app', details: ['Firebase Analytics — event-based behavior tracking', 'Funnel Analysis — where users drop off', 'A/B Testing — designing experiments with Feature Flags', 'Retention — are users coming back?'] },
          { name: 'Monetization', sub: 'Actually making money', details: ['StoreKit 2 — complete IAP implementation guide', 'Consumable/Non-consumable/Subscription — when to use each', 'RevenueCat — subscription state management', 'ASO — search visibility optimization', 'Experience running 20 apps — what actually sells'] },
        ]
      },
    ]
  },
  {
    id: 's8', n: '8', ico: '🔭', title: 'Going Deeper',
    color: 'var(--s8)', theme: 's8-theme', link: 'https://m1zz.github.io/ios-operation',
    problem: 'You\'re curious about the fundamental principles of why things work this way / you want to grow into a senior developer',
    solve: 'Computer architecture, OS internals, compilers, mathematical foundations, language theory',
    analogy: '🚗 A driver who understands the engine',
    status: 'You understand the principles of CPU, OS, and compilers. You can explain why things work the way they do, and you see through to the essence of new technologies. You can mentor juniors and justify technical decisions with evidence. You are a senior developer.',
    gap: 'You understand hardware, OS, and compiler internals, but without a mathematical foundation, there are limits to deeply understanding algorithm proofs, graphics, and ML.',
    next: 'Math is the language that cuts across every field of computer science. Learning discrete math, linear algebra, probability, and statistics solidifies everything you\'ve learned.',
    chapters: [
      {
        id: '8-1', ico: '💻', title: 'How Computers Execute Code',
        trigger: 'What is CPU-bound vs I/O-bound? / Why is M1 so fast?',
        why: 'After 7 stages of iOS development experience, the fundamental question "why does it work this way?" naturally arises. Understanding how the CPU executes code gives you a new perspective on everything — async/await, memory, performance — everything you\'ve learned so far.',
        quiz: {
          q: 'You\'re iterating over 1 million integers. Which data structure is faster?',
          options: [
            { key: 'linkedList', label: 'A', title: 'Linked List', desc: 'Nodes scattered in memory cause frequent cache misses' },
            { key: 'array', label: 'B', title: 'Array', desc: 'Contiguous memory maximizes cache hit rate' }
          ],
          answer: {
            linkedList: { tag: 'If you chose A', code: '// Linked List: nodes scattered across memory<br>// node1 → [0x1000] → [0x5000] → [0x2000]<br>// New memory address every time → cache miss<br>// CPU waits for RAM (100x slower)', effectLabel: 'Iteration speed', effectWidth: '80%', effectValue: 'Cache misses — tens of times slower', body: 'Each node of a linked list is allocated at a random heap location. Accessing the next node triggers a cache miss nearly every time, and the RAM access latency severely degrades performance.', correct: false },
            array: { tag: 'If you chose B', code: '// Array: contiguous memory block<br>// [0x1000][0x1004][0x1008][0x100C]...<br>// Load cache line once, consecutive hits<br>// CPU doesn\'t wait ✅', effectLabel: 'Iteration speed', effectWidth: '10%', effectValue: 'Cache hits — maximum speed', body: 'Arrays store data in a contiguous memory block. When the CPU loads one cache line, multiple adjacent elements come along, maximizing cache hit rate during iteration — tens of times faster.', correct: true }
          }
        },
        topics: [
          { name: 'CPU Architecture', sub: 'Fetch → Decode → Execute', details: ['ALU, registers, control unit', 'Clock speed, pipelining, Branch Prediction', 'Apple Silicon — what Unified Memory means', 'CPU-bound vs I/O-bound — the fundamental reason async is needed'] },
          { name: 'Memory Hierarchy', sub: 'Why cache is decisive for performance', details: ['Register < L1 < L2 < RAM < SSD — speed/size tradeoff', 'Cache hit vs miss — how code access patterns change performance', 'Spatial/temporal locality — why arrays beat linked lists', 'iOS Jetsam — the mechanism that kills apps under memory pressure'] },
          { name: 'Virtual Memory', sub: 'How each app gets its own address space', details: ['Pages and page tables — virtual → physical address translation', 'Page fault — when data isn\'t in physical memory', 'iOS Dirty vs Clean Memory — the optimization key', 'ASLR — address randomization, security benefit'] },
        ]
      },
      {
        id: '8-2', ico: '🏃', title: 'What the Operating System Does',
        trigger: 'Why is GCD designed this way? / Why does the app die in the background?',
        why: 'Once you know CPU architecture, "what does the OS manage on top of it?" follows naturally. GCD\'s QoS, background processing limits, the scheduler — things you\'ve accepted as "just the way it is" now have reasons you can trace back to here.',
        quiz: {
          q: 'You called DispatchQueue.main.sync from the main thread. What happens?',
          options: [
            { key: 'mainSync', label: 'A', title: 'Runs normally (sending from main to main)', desc: 'Deadlock occurs, app freezes forever' },
            { key: 'mainAsync', label: 'B', title: 'Use DispatchQueue.main.async', desc: 'Runs after current work finishes' }
          ],
          answer: {
            mainSync: { tag: 'If you chose A', code: '// Running on the main thread<br>DispatchQueue.main.sync {<br>&nbsp;&nbsp;print("Never reached")<br>}<br>// 💀 Deadlock: waiting on itself<br>// App freezes forever', effectLabel: 'App state', effectWidth: '95%', effectValue: 'Deadlock — permanent freeze', body: 'sync stops the current thread and waits until the block completes. Sending sync to the main queue from the main thread creates a circular wait: the current work must finish for the block to run, but the block must finish for the current work to complete. This is a deadlock.', correct: false },
            mainAsync: { tag: 'If you chose B', code: '// Running on the main thread<br>DispatchQueue.main.async {<br>&nbsp;&nbsp;print("Runs normally")<br>}<br>// ✅ Runs after the current work completes<br>// No deadlock', effectLabel: 'App state', effectWidth: '5%', effectValue: 'Normal operation', body: 'async enqueues the block and returns immediately. The block executes on the next RunLoop iteration after the current work completes, so no deadlock occurs.', correct: true }
          }
        },
        topics: [
          { name: 'Process Management', sub: 'From app launch to termination', details: ['Process lifecycle, scheduling algorithms', 'iOS QoS — from .userInteractive to .background', 'iOS app state transitions — Foreground/Background/Suspended', 'Background Task — processing time limits and request methods'] },
          { name: 'Synchronization Primitives', sub: 'Mutex, Semaphore, Deadlock', details: ['Race Condition, Critical Section, Mutex', 'Semaphore — limiting concurrent access count', '4 conditions for Deadlock and how to prevent them', 'Why the Actor model is better than Mutex'] },
          { name: 'File System', sub: 'How files are stored on iOS', details: ['APFS — Copy-on-Write, snapshots, encryption', 'iOS Sandbox — Documents/Library/Caches/tmp', 'iCloud backup include/exclude settings'] },
        ]
      },
      {
        id: '8-3', ico: '🔧', title: 'Compiler and Language Internals',
        trigger: 'How do Swift Macros work? / Why is my build so slow?',
        why: 'Once you understand the OS, you\'ll wonder "how does my Swift code become machine code?" Understanding the compiler makes every design decision about the type system, Macros, and build optimization make sense. This is the leap from someone who uses the language to someone who understands it.',
        quiz: {
          q: 'A complex SwiftUI view builds very slowly. How would you improve it?',
          options: [
            { key: 'justWait', label: 'A', title: 'Just wait (the compiler will optimize it)', desc: 'Time wasted on type inference' },
            { key: 'explicitType', label: 'B', title: 'Add explicit type annotations', desc: 'Reduces the compiler\'s inference burden' }
          ],
          answer: {
            justWait: { tag: 'If you chose A', code: 'var body: some View {<br>&nbsp;&nbsp;HStack {<br>&nbsp;&nbsp;&nbsp;&nbsp;items.map { ($0.name, $0.price * 1.1) }<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.sorted { $0.1 &lt; $1.1 }<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.prefix(5).map { ... }<br>&nbsp;&nbsp;}<br>}<br>// Compiler: 10+ seconds on type inference', effectLabel: 'Build time', effectWidth: '85%', effectValue: 'Type inference explosion — 10s+', body: 'The Swift compiler explores all possible type combinations in complex chaining expressions. As expressions grow longer, the number of inference possibilities increases exponentially, drastically slowing build times.', correct: false },
            explicitType: { tag: 'If you chose B', code: 'var body: some View {<br>&nbsp;&nbsp;let sorted: [(String,Double)] = items<br>&nbsp;&nbsp;&nbsp;&nbsp;.map { ($0.name, $0.price * 1.1) }<br>&nbsp;&nbsp;&nbsp;&nbsp;.sorted { $0.1 &lt; $1.1 }<br>&nbsp;&nbsp;HStack { ForEach(sorted.prefix(5)) { ... } }<br>}<br>// Compiler: type is clear → 0.1s ✅', effectLabel: 'Build time', effectWidth: '8%', effectValue: 'Explicit types — 0.1s', body: 'Adding explicit type annotations means the compiler only needs to verify rather than infer types. Breaking complex expressions into intermediate variables with types dramatically reduces inference scope and build time.', correct: true }
          }
        },
        topics: [
          { name: 'Swift Compilation Pipeline', sub: 'From source code to binary', details: ['Lexing → Parsing → AST → Semantic Analysis', 'SIL — Swift Intermediate Language, the optimization stage', 'LLVM → machine code generation'] },
          { name: 'Swift Macros', sub: 'Compile-time code generation', details: ['Macro = a function that takes an AST and returns an AST', 'Code generated inside @Observable', 'Building your own Macro with SwiftSyntax'] },
          { name: 'Build Optimization', sub: 'Cutting build time in half', details: ['Type inference cost — why complex expressions are slow', 'Build Timing Summary — finding slow functions', 'Explicit Return Type, Module Caching'] },
          { name: 'Language Theory', sub: 'Why Swift was designed this way', details: ['Type system — static vs dynamic, how type inference works', 'Functional paradigm — pure functions, immutability', 'Why Optional is a monad', 'Swift vs Kotlin vs Rust — different solutions to the same problems'] },
        ]
      },
    ]
  },
  {
    id: 's9', n: '9', ico: '🧮', title: 'Math Starts Making Sense',
    color: 'var(--s9)', theme: 's9-theme',
    problem: 'You want to understand algorithm proofs, graphics transformations, and ML principles, but your math foundation is lacking',
    solve: 'Discrete math, linear algebra, probability and statistics — the mathematical foundations that cut across computer science',
    analogy: '🚗 An engineer who understands the laws of physics',
    status: 'You can prove algorithms, understand graphics transformations through matrices, and back data-driven decisions with statistics. You see how every field of computer science connects through math.',
    gap: '',
    next: '',
    chapters: [
      {
        id: '9-1', ico: '🧮', title: 'Math for Developers',
        trigger: 'You want to understand algorithm complexity proofs / graphics / ML principles',
        why: 'Math underpins every field of computer science. Algorithm proofs, graphics transformations, ML fundamentals — the deeper you go, the more you arrive back at math. Building a mathematical foundation on top of the experience from S1 through S8 connects everything into one cohesive whole.',
        quiz: {
          q: 'In an A/B test, the new design\'s conversion rate went from 3% to 3.5%. Would you roll out the new design to everyone?',
          options: [
            { key: 'applyNow', label: 'A', title: 'Apply immediately (it went up 0.5%)', desc: 'Could be statistical noise (insufficient sample)' },
            { key: 'pValue', label: 'B', title: 'Run a significance test first (check the p-value)', desc: 'Verify it\'s meaningful at a 95% confidence interval' }
          ],
          answer: {
            applyNow: { tag: 'If you chose A', code: '// Sample: 100 users<br>// A: 3/100 = 3%, B: 3.5/100 = 3.5%<br>// "Up 0.5%! Ship it!"<br>// ⚠️ 1 person difference — likely just chance', effectLabel: 'Decision accuracy', effectWidth: '75%', effectValue: 'Risk of being fooled by noise — high', body: 'With a small sample, a 0.5% difference is likely just statistical noise. Changing your entire strategy based on 1 person out of 100 may mean applying a change that has no real effect.', correct: false },
            pValue: { tag: 'If you chose B', code: '// Sample: 10,000 users<br>// A: 300/10000, B: 350/10000<br>// p-value = 0.02 &lt; 0.05<br>// ✅ Significant difference at 95% confidence<br>// Now it\'s safe to roll out to everyone', effectLabel: 'Decision accuracy', effectWidth: '10%', effectValue: 'Statistically validated — trustworthy', body: 'With a sufficient sample and statistical significance testing, you can determine whether the observed difference is a real effect rather than chance. A p-value below 0.05 means you can conclude with 95% confidence that the difference is meaningful.', correct: true }
          }
        },
        topics: [
          { name: 'Discrete Mathematics', sub: 'The mathematical foundation of algorithms', details: ['Logic — De Morgan\'s laws, conditional optimization', 'Set theory — connected to the Set API', 'Mathematical induction — proving recursion correctness', 'Graph theory — mathematical background of BFS/DFS'] },
          { name: 'Linear Algebra', sub: 'The language of graphics and ML', details: ['Vectors, matrices — the means to compose transformations', 'Translation/rotation/scale matrices — ARKit/SceneKit transforms', 'Where matrix operations appear in CoreML'] },
          { name: 'Probability and Statistics', sub: 'Data-driven decision making', details: ['Statistical significance in A/B testing', 'Bayes\' theorem — the principle behind recommendations and spam filters', 'Expected value — calculating revenue models'] },
        ]
      },
    ]
  },
];
