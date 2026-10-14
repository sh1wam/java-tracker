const D = [
  [
    "Phase 0: Setup and Tooling",
    [
      "JDK vs JRE vs JVM; LTS versions (8, 11, 17, 21)",
      "Install JDK, set JAVA_HOME and PATH, manage versions (SDKMAN)",
      "javac, java, jar, jshell, javadoc, jlink, jpackage, jcmd, jstack, jmap",
      "IDE: IntelliJ IDEA (debugger, breakpoints, refactoring, live templates)",
      "Compile and run from the command line, classpath, packages and directory layout",
      "Git basics, .gitignore",
    ],
  ],
  [
    "Phase 1: Language Fundamentals",
    [
      "Program structure, main method, comments, Javadoc",
      "Identifiers, keywords, naming conventions",
      "Primitive types: byte, short, int, long, float, double, char, boolean; ranges, defaults",
      "Literals: underscores, hex, octal, binary, suffixes (L, f, d)",
      "Type conversion: widening, narrowing, casting, numeric promotion",
      "Overflow, underflow, floating-point precision, NaN, Infinity",
      "Wrapper classes, autoboxing/unboxing, Integer cache, == vs equals",
      "var (local type inference)",
      "Operators: arithmetic, relational, logical, bitwise, shift (>>, >>>), ternary, instanceof, precedence, short-circuit",
      "Control flow: if/else, switch (old and new), for, enhanced for, while, do-while, break, continue, labels",
      "Arrays: 1D, multi-dimensional, jagged, Arrays utility, varargs",
      "Methods: parameters, return, pass-by-value semantics, overloading, recursion",
      "Scope, lifetime, shadowing",
      "Text blocks, Scanner, console I/O, printf/format",
      "Math class, BigInteger, BigDecimal (rounding modes), Random, ThreadLocalRandom",
      "Date/Time API: LocalDate, LocalDateTime, ZonedDateTime, Instant, Duration, Period, DateTimeFormatter",
    ],
  ],
  [
    "Phase 2: Object-Oriented Programming",
    [
      "Classes, objects, fields, constructors, this, constructor chaining",
      "Initialization order: static blocks, instance blocks, constructors",
      "Access modifiers, packages, imports, static imports",
      "static members, final (variable, method, class), immutability",
      "Encapsulation, getters/setters",
      "Inheritance, super, method overriding, @Override, covariant returns",
      "Polymorphism: compile-time vs runtime, dynamic dispatch, upcasting/downcasting",
      "Abstract classes vs interfaces, default/static/private interface methods",
      "Nested types: static nested, inner, local, anonymous",
      "Enums: fields, methods, abstract methods, EnumMap, EnumSet",
      "Records (16+), sealed classes/interfaces (17), pattern matching for instanceof",
      "Object class: equals, hashCode contract, toString, clone, finalize (deprecated), getClass",
      "Composition vs inheritance, coupling and cohesion",
      "Annotations: built-in, custom, retention, target, processing",
      "Modules (JPMS): module-info.java, exports, requires",
    ],
  ],
  [
    "Phase 3: Strings, Exceptions, Generics",
    [
      "String immutability, string pool, intern(), StringBuilder vs StringBuffer",
      "Common String methods, regex (Pattern, Matcher), String.format, strip, repeat, lines",
      "Exception hierarchy: Throwable, Error, Exception, RuntimeException",
      "Checked vs unchecked, try/catch/finally, multi-catch, try-with-resources, AutoCloseable",
      "throw vs throws, custom exceptions, chaining, suppressed exceptions, stack traces",
      "Exception best practices; never swallow exceptions",
      "Assertions",
      "Generics: classes, methods, interfaces, bounded types, wildcards (PECS), type erasure, limitations",
      "Reflection: Class, Method, Field, Constructor, dynamic proxies",
      "Logging: SLF4J, Logback, Log4j2, log levels, MDC",
    ],
  ],
  [
    "Phase 4: Collections Framework",
    [
      "Hierarchy: Iterable, Collection, List, Set, Queue, Deque, Map",
      "ArrayList vs LinkedList; Vector, Stack (legacy)",
      "HashSet, LinkedHashSet, TreeSet",
      "HashMap internals: hashing, buckets, load factor, resize, treeification",
      "LinkedHashMap (LRU cache), TreeMap, Hashtable, WeakHashMap, IdentityHashMap",
      "PriorityQueue, ArrayDeque",
      "Comparable vs Comparator, comparing/thenComparing",
      "Iterator, ListIterator, fail-fast vs fail-safe, ConcurrentModificationException",
      "Collections and Arrays utilities, unmodifiable vs immutable (List.of, Map.of)",
      "Sequenced collections (21)",
      "Big-O of every collection operation",
    ],
  ],
  [
    "Phase 5: Functional Java",
    [
      "Lambdas, functional interfaces, @FunctionalInterface",
      "Function, BiFunction, Supplier, Consumer, Predicate, UnaryOperator, BinaryOperator",
      "Method references (4 kinds), effectively final",
      "Streams: creation, intermediate vs terminal, laziness",
      "map, flatMap, filter, distinct, sorted, limit, skip, peek, takeWhile, dropWhile, mapMulti",
      "reduce, collect, Collectors (groupingBy, partitioningBy, toMap, joining, teeing)",
      "Primitive streams, IntStream.range, boxed, summaryStatistics",
      "Parallel streams and their pitfalls",
      "Optional: of, ofNullable, map, flatMap, orElse vs orElseGet, orElseThrow; anti-patterns",
      "Stream.toList(), immutability, side-effect-free pipelines",
    ],
  ],
  [
    "Phase 6: I/O, NIO, Serialization",
    [
      "File, Path, Files, Paths",
      "Byte streams vs character streams, Buffered streams, Reader/Writer",
      "Files.walk, readAllLines, lines, directory watching (WatchService)",
      "NIO: channels, buffers, selectors, memory-mapped files",
      "Java serialization, serialVersionUID, transient, security risks; prefer JSON",
      "JSON: Jackson (ObjectMapper, annotations, custom serializers), Gson",
      "XML (JAXB), YAML, CSV basics",
      "Networking: Socket, ServerSocket, URL, HttpClient (11+), HTTP/2",
      "Properties files, ResourceBundle, i18n, Locale, charset (UTF-8)",
    ],
  ],
  [
    "Phase 7: Concurrency",
    [
      "Process vs thread, thread lifecycle, Thread vs Runnable vs Callable",
      "start vs run, sleep, join, interrupt, daemon threads",
      "Race conditions, critical sections, visibility, atomicity, ordering",
      "synchronized (method, block), intrinsic locks, wait/notify",
      "volatile, happens-before, Java Memory Model",
      "Deadlock, livelock, starvation; detection and prevention",
      "java.util.concurrent.locks: ReentrantLock, ReadWriteLock, StampedLock, Condition",
      "Atomics: AtomicInteger, AtomicReference, LongAdder, CAS",
      "ThreadLocal",
      "Executors: fixed, cached, scheduled, ForkJoinPool; ThreadPoolExecutor parameters, rejection policies",
      "Future, CompletableFuture (thenApply, thenCompose, thenCombine, allOf, exceptionally)",
      "Synchronizers: CountDownLatch, CyclicBarrier, Semaphore, Phaser, Exchanger",
      "Concurrent collections: ConcurrentHashMap, CopyOnWriteArrayList, BlockingQueue variants",
      "Producer-consumer, thread-safe design, immutability",
      "Virtual threads (21), structured concurrency, scoped values (preview)",
      "Reactive concepts: Reactive Streams, Project Reactor (Mono/Flux)",
    ],
  ],
  [
    "Phase 8: JVM Internals and Performance",
    [
      "JVM architecture, bytecode, javap",
      "Class loading: bootstrap/platform/app loaders, delegation, linking, initialization",
      "Memory: heap (young/old), metaspace, stack, PC register, native memory",
      "Object lifecycle, references: strong, soft, weak, phantom",
      "Garbage collectors: Serial, Parallel, G1, ZGC, Shenandoah; generational ZGC (21)",
      "GC tuning flags: -Xms, -Xmx, -Xss, -XX:MaxMetaspaceSize, GC logs",
      "JIT: interpreter, C1, C2, tiered compilation, escape analysis, inlining",
      "Memory leaks, OutOfMemoryError types, StackOverflowError",
      "Profiling: JFR, JMC, VisualVM, async-profiler, heap dumps (MAT), thread dumps",
      "Benchmarking with JMH",
      "Container-aware JVM settings, CDS, GraalVM native image",
    ],
  ],
  [
    "Phase 9: Modern Java (9 to 21+)",
    [
      "9: modules, List.of, private interface methods, JShell",
      "10-11: var, HttpClient, String methods, single-file run",
      "12-14: switch expressions, text blocks, helpful NPE messages",
      "15-17: records, sealed classes, pattern matching instanceof, strong encapsulation",
      "18-20: UTF-8 default, simple web server, previews",
      "21: virtual threads, record patterns, pattern matching for switch, sequenced collections",
      "Migration checklist: removed APIs, illegal reflective access, dependency compatibility, GC changes",
    ],
  ],
  [
    "Phase 10: Build, Testing, Quality",
    [
      "Maven: lifecycle, POM, dependency scope, BOM, plugins, profiles, multi-module",
      "Gradle: Groovy/Kotlin DSL, tasks, dependency configurations, caching",
      "Dependency conflicts, transitive dependencies, vulnerability scanning",
      "JUnit 5: annotations, assertions, parameterized, lifecycle, extensions",
      "Mockito: mock, spy, stubbing, verify, ArgumentCaptor",
      "AssertJ, Hamcrest, Testcontainers, WireMock",
      "Test pyramid, TDD, code coverage (JaCoCo), mutation testing",
      "Static analysis: Checkstyle, SpotBugs, PMD, SonarQube",
      "Clean code, SOLID, DRY, KISS, YAGNI, refactoring, code review",
    ],
  ],
  [
    "Phase 11: Databases and Persistence",
    [
      "SQL: joins, indexes, transactions, isolation levels, normalization, query plans",
      "JDBC: Connection, PreparedStatement, ResultSet, batch, transactions, SQL injection",
      "Connection pooling: HikariCP",
      "JPA/Hibernate: entities, mappings, relationships, fetch types, cascade",
      "Entity lifecycle, first/second-level cache, N+1 problem, JPQL, Criteria, projections",
      "Optimistic vs pessimistic locking, @Version",
      "Spring Data JPA, JdbcTemplate, jOOQ, MyBatis",
      "Migrations: Flyway, Liquibase",
      "NoSQL: MongoDB, Redis, Cassandra basics; caching strategies",
    ],
  ],
  [
    "Phase 12: Spring and Spring Boot",
    [
      "IoC, dependency injection (constructor vs field), ApplicationContext, bean lifecycle, scopes",
      "Configuration: @Configuration, @Bean, @Component/@Service/@Repository, @Profile, @Value",
      "Auto-configuration, starters, application.yml, externalized config, @ConfigurationProperties",
      "Spring MVC: controllers, @RestController, request mapping, validation, exception handling (@ControllerAdvice)",
      "DTOs, mapping (MapStruct), content negotiation, pagination, REST design, OpenAPI/Swagger",
      "AOP: aspects, advice, pointcuts, proxies",
      "Transactions: @Transactional propagation, isolation, rollback rules, proxy pitfalls",
      "Spring Security: authentication, authorization, filters, JWT, OAuth2/OIDC, CORS, CSRF",
      "WebClient, RestClient, Feign, resilience (timeouts, retries)",
      "Spring WebFlux, Actuator, Micrometer, async/scheduling",
      "Events, caching abstraction, testing (@SpringBootTest, slices, MockMvc)",
    ],
  ],
  [
    "Phase 13: Distributed Systems and Microservices",
    [
      "Monolith vs microservices, domain-driven design, bounded contexts",
      "API gateway, service discovery, config server, load balancing",
      "Resilience4j: circuit breaker, retry, bulkhead, rate limiter",
      "Messaging: Kafka (topics, partitions, consumer groups, offsets, exactly-once), RabbitMQ, JMS",
      "Saga, outbox, CQRS, event sourcing, idempotency",
      "CAP theorem, eventual consistency, distributed transactions",
      "gRPC, GraphQL, WebSockets, API versioning, contract testing",
    ],
  ],
  [
    "Phase 14: Design Patterns and Architecture",
    [
      "Creational: Singleton, Factory, Abstract Factory, Builder, Prototype",
      "Structural: Adapter, Decorator, Facade, Proxy, Composite, Bridge, Flyweight",
      "Behavioral: Strategy, Observer, Template Method, Command, State, Chain of Responsibility, Iterator, Visitor, Mediator",
      "Layered, hexagonal, clean architecture; dependency inversion",
      "UML: class and sequence diagrams",
    ],
  ],
  [
    "Phase 15: Data Structures and Algorithms",
    [
      "Complexity analysis, recursion, backtracking",
      "Arrays, strings, linked lists, stacks, queues, hash tables",
      "Trees: binary, BST, AVL, heap, trie, segment tree",
      "Graphs: BFS, DFS, topological sort, Dijkstra, union-find, MST",
      "Sorting, searching, two pointers, sliding window, binary search patterns",
      "Dynamic programming, greedy, bit manipulation",
      "Practice problems in Java (aim for 150+)",
    ],
  ],
  [
    "Phase 16: DevOps, Observability, Security",
    [
      "Linux basics, shell, networking (TCP, DNS, TLS, HTTP)",
      "Docker: Dockerfile, layers, JVM in containers; Kubernetes basics",
      "CI/CD: Jenkins, GitHub Actions, deployment strategies (blue/green, canary)",
      "Observability: structured logs, metrics, tracing (OpenTelemetry), APM, dashboards, alerting",
      "OWASP Top 10, input validation, secrets management, dependency scanning, secure deserialization",
      "Cloud basics: AWS/Azure/GCP compute, storage, queues, IAM",
    ],
  ],
  [
    "Phase 17: Capstone Projects",
    [
      "CLI tool (file processing, concurrency)",
      "In-memory cache with LRU and TTL",
      "REST API with Spring Boot, JPA, JWT, tests, Docker",
      "Event-driven order system with Kafka and the outbox pattern",
      "Performance tuning exercise: profile, find bottleneck, fix, benchmark with JMH",
      "Contribute to an open-source Java project",
    ],
  ],
  [
    "Suggested Pace",
    [
      "Phases 0-3: 6-8 weeks",
      "Phases 4-7: 8-10 weeks",
      "Phases 8-10: 6-8 weeks",
      "Phases 11-13: 10-12 weeks",
      "Phases 14-17: ongoing, alongside projects",
    ],
  ],
];
const KEY = "java-roadmap-done",
  CFG = "java-roadmap-gh";
let S;
try {
  S = new Set(JSON.parse(localStorage.getItem(KEY) || "[]"));
} catch (e) {
  S = new Set();
}
let cfg = {};
try {
  cfg = JSON.parse(localStorage.getItem(CFG) || "{}");
} catch (e) {}
let sha = null,
  timer = null;
const say = (m) => {
  const s = document.getElementById("st");
  if (s) s.textContent = m;
};
const api = () =>
  "https://api.github.com/repos/" + cfg.repo + "/contents/progress.json";
const hdr = () => ({
  Authorization: "Bearer " + cfg.token,
  Accept: "application/vnd.github+json",
});
const ready = () => cfg.repo && cfg.token;
const local = () => {
  try {
    localStorage.setItem(KEY, JSON.stringify([...S]));
  } catch (e) {}
};
function save() {
  local();
  if (!ready()) {
    say("Saved in this browser only");
    return;
  }
  say("Saving...");
  clearTimeout(timer);
  timer = setTimeout(() => push(), 1500);
}
async function getFile() {
  return fetch(api() + "?t=" + Date.now(), { headers: hdr() });
}
async function pull() {
  if (!ready()) return;
  try {
    const r = await getFile();
    if (r.status === 404) {
      sha = null;
      say("Connected. progress.json will be created on your next tick");
      if (S.size) push();
      return;
    }
    if (!r.ok) throw new Error(r.status);
    const j = await r.json();
    sha = j.sha;
    S = new Set(JSON.parse(atob(j.content.replace(/\n/g, ""))).done || []);
    local();
    say("Synced with GitHub");
    update();
  } catch (e) {
    say("GitHub load failed (" + e.message + ")");
  }
}
async function push(retry) {
  const body = {
    message: "Update progress",
    content: btoa(
      JSON.stringify(
        { updated: new Date().toISOString(), done: [...S].sort() },
        null,
        1,
      ),
    ),
  };
  if (sha) body.sha = sha;
  try {
    const r = await fetch(api(), {
      method: "PUT",
      headers: hdr(),
      body: JSON.stringify(body),
    });
    if ((r.status === 409 || r.status === 422) && !retry) {
      const g = await getFile();
      sha = g.ok ? (await g.json()).sha : null;
      return push(true);
    }
    if (!r.ok) throw new Error(r.status);
    sha = (await r.json()).content.sha;
    say("Saved to GitHub");
  } catch (e) {
    say("GitHub save failed (" + e.message + "). Kept in this browser.");
  }
}
const $ = (id) => document.getElementById(id);
let hide = false,
  q = "",
  armed = false;
const app = $("app");
D.forEach((p, pi) => {
  const d = document.createElement("details");
  d.open = pi === 0;
  d.innerHTML =
    '<summary><span></span><span class="c"></span><i class="bar"><u></u></i></summary>';
  d.querySelector("summary span").textContent = p[0];
  const ul = document.createElement("ul");
  p[1].forEach((t, i) => {
    const li = document.createElement("li");
    li.dataset.k = pi + "-" + i;
    const lb = document.createElement("label"),
      cb = document.createElement("input"),
      sp = document.createElement("span");
    cb.type = "checkbox";
    sp.textContent = t;
    lb.append(cb, sp);
    li.append(lb);
    ul.append(li);
  });
  d.append(ul);
  app.append(d);
});
function update() {
  let tot = 0,
    done = 0;
  app.querySelectorAll("details").forEach((d) => {
    const lis = [...d.querySelectorAll("li")];
    let n = 0,
      vis = 0;
    lis.forEach((li) => {
      const on = S.has(li.dataset.k);
      if (on) n++;
      li.firstChild.firstChild.checked = on;
      li.classList.toggle("d", on);
      const hit = !q || li.textContent.toLowerCase().includes(q);
      li.hidden = !hit || (hide && on);
      if (!li.hidden) vis++;
    });
    tot += lis.length;
    done += n;
    d.querySelector(".c").textContent = n + " / " + lis.length;
    d.querySelector(".bar u").style.width = (100 * n) / lis.length + "%";
    d.classList.toggle("full", n === lis.length);
    d.hidden = (q || hide) && vis === 0;
    if (q && vis) d.open = true;
  });
  $("pct").textContent = Math.round((100 * done) / tot) + "%";
  $("cnt").textContent = done + " of " + tot + " done";
  $("all").style.width = (100 * done) / tot + "%";
}
app.addEventListener("change", (e) => {
  const li = e.target.closest("li");
  if (!li) return;
  e.target.checked ? S.add(li.dataset.k) : S.delete(li.dataset.k);
  save();
  update();
});
$("q").addEventListener("input", (e) => {
  q = e.target.value.trim().toLowerCase();
  update();
});
$("hd").addEventListener("click", (e) => {
  hide = !hide;
  e.target.setAttribute("aria-pressed", hide);
  update();
});
$("rs").addEventListener("click", (e) => {
  if (!armed) {
    armed = true;
    e.target.textContent = "Click again to clear all";
    setTimeout(() => {
      armed = false;
      e.target.textContent = "Reset";
    }, 3000);
    return;
  }
  S.clear();
  save();
  armed = false;
  e.target.textContent = "Reset";
  update();
});
$("repo").value = cfg.repo || "";
$("tok").value = cfg.token || "";
$("gs").addEventListener("click", () => {
  cfg = { repo: $("repo").value.trim(), token: $("tok").value.trim() };
  if (!/^[\w.-]+\/[\w.-]+$/.test(cfg.repo) || !cfg.token) {
    say("Enter repo as username/repo and a token");
    return;
  }
  try {
    localStorage.setItem(CFG, JSON.stringify(cfg));
  } catch (e) {}
  say("Connecting...");
  pull();
});
$("gx").addEventListener("click", () => {
  cfg = {};
  try {
    localStorage.removeItem(CFG);
  } catch (e) {}
  $("repo").value = $("tok").value = "";
  say("Saved in this browser only");
});
update();
pull();