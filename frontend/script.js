const BASE_URL = "https://quiz-backend-kpj7.onrender.com";

const questions = {
  cn: {
    easy: [
      {q:"What does HTTP stand for?", options:["HyperText Transfer Protocol","High Transfer Text Protocol","HyperText Transmission Process","None"], ans:0},
      {q:"Which layer of OSI model does a router operate on?", options:["Layer 1","Layer 2","Layer 3","Layer 4"], ans:2},
      {q:"What is the full form of IP?", options:["Internet Protocol","Internal Process","Internet Processor","Intranet Protocol"], ans:0},
      {q:"Which protocol is used to send email?", options:["FTP","SMTP","HTTP","POP3"], ans:1},
      {q:"What does DNS stand for?", options:["Domain Name System","Data Network Service","Digital Node System","None"], ans:0},
      {q:"How many layers does the OSI model have?", options:["5","6","7","8"], ans:2},
      {q:"Which device connects two different networks?", options:["Hub","Switch","Router","Repeater"], ans:2},
      {q:"What does LAN stand for?", options:["Large Area Network","Local Area Network","Linked Access Node","None"], ans:1},
      {q:"Which protocol assigns IP addresses automatically?", options:["DNS","FTP","DHCP","ARP"], ans:2},
      {q:"What is the default port for HTTP?", options:["21","25","80","443"], ans:2}
    ],
    medium: [
      {q:"Which protocol is connectionless?", options:["TCP","FTP","UDP","SMTP"], ans:2},
      {q:"What is the subnet mask for a Class C network?", options:["255.0.0.0","255.255.0.0","255.255.255.0","255.255.255.255"], ans:2},
      {q:"Which layer handles end-to-end communication?", options:["Network","Data Link","Transport","Session"], ans:2},
      {q:"What does ARP stand for?", options:["Address Resolution Protocol","Access Routing Protocol","Automatic Relay Process","None"], ans:0},
      {q:"Which topology has a central hub?", options:["Bus","Ring","Star","Mesh"], ans:2},
      {q:"What is the maximum segment size in TCP called?", options:["MTU","MSS","MFS","MPS"], ans:1},
      {q:"Which protocol is used for secure web browsing?", options:["HTTP","FTP","HTTPS","SMTP"], ans:2},
      {q:"What does TTL stand for in networking?", options:["Time To Live","Transfer To Link","Total Transmission Length","None"], ans:0},
      {q:"Which layer is responsible for MAC addressing?", options:["Network","Transport","Data Link","Physical"], ans:2},
      {q:"What is the port number for HTTPS?", options:["80","21","443","25"], ans:2}
    ],
    hard: [
      {q:"Which algorithm does OSPF use?", options:["Bellman-Ford","Dijkstra's","Floyd-Warshall","Kruskal's"], ans:1},
      {q:"What is the size of an IPv6 address?", options:["32 bits","64 bits","128 bits","256 bits"], ans:2},
      {q:"In TCP, what does the SYN-ACK step represent?", options:["Connection termination","Server acknowledgment in 3-way handshake","Data transfer phase","Flow control"], ans:1},
      {q:"Which field in IP header prevents infinite looping?", options:["Checksum","Protocol","TTL","Fragment Offset"], ans:2},
      {q:"What is the purpose of the sliding window protocol?", options:["Routing","Error correction","Flow control","Encryption"], ans:2},
      {q:"CIDR notation /26 gives how many usable hosts?", options:["30","62","64","126"], ans:1},
      {q:"Which protocol operates at both Layer 3 and Layer 4?", options:["ARP","ICMP","TCP","UDP"], ans:1},
      {q:"What does BGP stand for?", options:["Basic Gateway Protocol","Border Gateway Protocol","Broadcast Group Protocol","None"], ans:1},
      {q:"Which layer does SSL/TLS operate at in the OSI model?", options:["Layer 3","Layer 4","Layer 5","Layer 6"], ans:3},
      {q:"What is a collision domain?", options:["Area where IP conflicts occur","Network segment where packets can collide","Group of routers","Subnet of switches"], ans:1}
    ]
  },

  python: {
    easy: [
      {q:"Which keyword defines a function in Python?", options:["func","def","function","define"], ans:1},
      {q:"What does len('hello') return?", options:["4","5","6","Error"], ans:1},
      {q:"Which of these is mutable in Python?", options:["tuple","string","list","int"], ans:2},
      {q:"What is the output of 2 ** 3?", options:["6","8","9","5"], ans:1},
      {q:"Which method adds to the end of a list?", options:["add()","insert()","append()","push()"], ans:2},
      {q:"How do you start a comment in Python?", options:["//","/*","#","--"], ans:2},
      {q:"What is the index of the first element in a list?", options:["1","-1","0","Depends"], ans:2},
      {q:"Which function converts string to integer?", options:["str()","float()","int()","num()"], ans:2},
      {q:"What keyword is used to create a loop in Python?", options:["loop","repeat","for","iterate"], ans:2},
      {q:"What does print() do in Python?", options:["Takes input","Displays output","Defines variable","None"], ans:1}
    ],
    medium: [
      {q:"What is the output of bool([]) in Python?", options:["True","False","None","Error"], ans:1},
      {q:"Which of these creates a dictionary?", options:["[]","()","{}","<>"], ans:2},
      {q:"What does the 'pass' statement do?", options:["Exits function","Does nothing","Returns None","Skips to next"], ans:1},
      {q:"What is a lambda function?", options:["Named function","Anonymous function","Recursive function","Built-in function"], ans:1},
      {q:"What is the output of range(2,10,3)?", options:["[2,5,8]","[2,4,6,8]","[3,6,9]","[2,5,8,11]"], ans:0},
      {q:"Which module is used for regular expressions?", options:["regex","re","regexp","rx"], ans:1},
      {q:"What does 'self' refer to in a class?", options:["Parent class","Current instance","Module itself","None"], ans:1},
      {q:"What is list comprehension?", options:["A loop","A concise way to create lists","A built-in function","A sorting method"], ans:1},
      {q:"What does .strip() do to a string?", options:["Splits string","Removes whitespace from ends","Reverses string","Converts to list"], ans:1},
      {q:"How do you handle exceptions in Python?", options:["if-else","try-except","switch-case","catch-finally"], ans:1}
    ],
    hard: [
      {q:"What is the output of: x=[1,2,3]; y=x; y.append(4); print(x)?", options:["[1,2,3]","[1,2,3,4]","Error","[4,1,2,3]"], ans:1},
      {q:"What is a generator in Python?", options:["A class that creates objects","Function that yields values lazily","A list factory","Module for random numbers"], ans:1},
      {q:"What does *args allow in a function?", options:["Keyword arguments","Variable positional arguments","Default arguments","None"], ans:1},
      {q:"Which is true about Python's GIL?", options:["Allows true parallelism","Prevents multiple threads from executing Python at once","Only affects I/O","Is removed in Python 3"], ans:1},
      {q:"What is the MRO in Python?", options:["Memory Reference Order","Method Resolution Order","Module Runtime Object","None"], ans:1},
      {q:"What does __slots__ do in a class?", options:["Adds methods","Restricts instance attributes to save memory","Creates properties","None"], ans:1},
      {q:"What is the difference between deepcopy and copy?", options:["No difference","deepcopy copies nested objects too","copy is faster only","deepcopy is deprecated"], ans:1},
      {q:"What does @staticmethod mean?", options:["Method needs class reference","Method needs no self or cls","Method is private","Method is inherited"], ans:1},
      {q:"What is the output of: print(0.1+0.2==0.3)?", options:["True","False","Error","None"], ans:1},
      {q:"Which data structure does Python use for sets internally?", options:["List","Linked List","Hash Table","Tree"], ans:2}
    ]
  },

  dbms: {
    easy: [
      {q:"What does DBMS stand for?", options:["Data Base Management System","Data Backup Management System","Digital Base Management System","None"], ans:0},
      {q:"Which SQL command retrieves data?", options:["INSERT","UPDATE","SELECT","DELETE"], ans:2},
      {q:"What is a primary key?", options:["A nullable key","Uniquely identifies a record","A foreign key","A composite key"], ans:1},
      {q:"What does SQL stand for?", options:["Structured Query Language","Simple Query Language","Sequential Query Logic","None"], ans:0},
      {q:"Which command permanently saves a transaction?", options:["ROLLBACK","SAVEPOINT","COMMIT","END"], ans:2},
      {q:"What is a foreign key?", options:["Always unique","References primary key of another table","Key with no constraints","None"], ans:1},
      {q:"Which SQL clause filters records?", options:["ORDER BY","GROUP BY","WHERE","HAVING"], ans:2},
      {q:"What is a view in DBMS?", options:["Physical table","Virtual table based on query","Table backup","Index"], ans:1},
      {q:"Which command removes all rows from a table?", options:["DELETE","DROP","TRUNCATE","REMOVE"], ans:2},
      {q:"What does DDL stand for?", options:["Data Definition Language","Data Deletion Language","Dynamic Data Language","None"], ans:0}
    ],
    medium: [
      {q:"Which normal form removes partial dependencies?", options:["1NF","2NF","3NF","BCNF"], ans:1},
      {q:"Which JOIN returns all records from both tables?", options:["INNER JOIN","LEFT JOIN","RIGHT JOIN","FULL OUTER JOIN"], ans:3},
      {q:"What does ACID stand for?", options:["Atomicity Consistency Isolation Durability","Access Control Insert Delete","None","Automatic Concurrent Isolated Durable"], ans:0},
      {q:"What is a deadlock in DBMS?", options:["Slow query","Two transactions waiting on each other indefinitely","Data corruption","Index failure"], ans:1},
      {q:"Which index type is best for range queries?", options:["Hash index","B-tree index","Bitmap index","None"], ans:1},
      {q:"What is the purpose of GROUP BY?", options:["Sort rows","Filter rows","Group rows for aggregate functions","Join tables"], ans:2},
      {q:"What is a trigger in DBMS?", options:["A stored query","Automatic action on table events","A constraint","A view"], ans:1},
      {q:"What does ER stand for in ER diagram?", options:["Entity Relation","Entity Record","Element Reference","None"], ans:0},
      {q:"Which command changes table structure?", options:["UPDATE","MODIFY","ALTER","CHANGE"], ans:2},
      {q:"What is a cursor in SQL?", options:["Mouse pointer","DB pointer to traverse result rows","Index type","None"], ans:1}
    ],
    hard: [
      {q:"Which normal form deals with multi-valued dependencies?", options:["2NF","3NF","BCNF","4NF"], ans:3},
      {q:"What is a phantom read in transactions?", options:["Reading deleted data","New rows appearing in repeated reads","Dirty data read","None"], ans:1},
      {q:"What isolation level prevents dirty reads only?", options:["Serializable","Repeatable Read","Read Committed","Read Uncommitted"], ans:2},
      {q:"What is the difference between DELETE and TRUNCATE?", options:["No difference","TRUNCATE is logged, DELETE is not","DELETE can have WHERE, TRUNCATE cannot","TRUNCATE is slower"], ans:2},
      {q:"What is a clustered index?", options:["Index stored separately","Physically reorders table data","Only for primary keys","None"], ans:1},
      {q:"What is lossless join decomposition?", options:["Join that loses rows","Join that preserves all original data","Join with duplicates","None"], ans:1},
      {q:"What does MVCC stand for?", options:["Multi-Value Cache Control","Multi-Version Concurrency Control","Master Version Control Center","None"], ans:1},
      {q:"Which of these is NOT a property of a relation?", options:["Tuples are ordered","Attributes are atomic","No duplicate tuples","Each attribute has a domain"], ans:0},
      {q:"What is a functional dependency X→Y?", options:["X depends on Y","Y is uniquely determined by X","X and Y are keys","None"], ans:1},
      {q:"What is the purpose of the EXPLAIN keyword in SQL?", options:["Describes a table","Shows query execution plan","Lists all indexes","None"], ans:1}
    ]
  },

  aptitude: {
    easy: [
      {q:"What is 15% of 200?", options:["25","30","35","40"], ans:1},
      {q:"Average of 10, 20, 30, 40, 50?", options:["25","30","35","40"], ans:1},
      {q:"How many seconds in 2 hours?", options:["3600","5400","7200","9000"], ans:2},
      {q:"A train travels 60 km/hr. Distance in 2.5 hrs?", options:["120","150","130","160"], ans:1},
      {q:"Simple interest on ₹1000 at 5% for 3 years?", options:["₹100","₹150","₹200","₹50"], ans:1},
      {q:"Next in series: 2, 4, 8, 16, ?", options:["24","28","32","36"], ans:2},
      {q:"If A > B and B > C in height, who is shortest?", options:["A","B","C","Cannot say"], ans:2},
      {q:"What is 20% of 500?", options:["80","90","100","110"], ans:2},
      {q:"Find LCM of 4 and 6?", options:["8","12","16","24"], ans:1},
      {q:"A number doubled gives 64. What is it?", options:["16","32","48","64"], ans:1}
    ],
    medium: [
      {q:"A number increased by 20% gives 120. What is it?", options:["90","95","100","110"], ans:2},
      {q:"6 workers finish in 8 days. Days for 4 workers?", options:["10","12","14","16"], ans:1},
      {q:"Shopkeeper sells at 10% profit. CP=₹500. SP?", options:["₹540","₹550","₹560","₹520"], ans:1},
      {q:"Ratio of 15:25 in simplest form?", options:["2:3","3:4","3:5","4:5"], ans:2},
      {q:"A man walks 4km in 1hr. Time for 10km?", options:["2hr","2.5hr","3hr","3.5hr"], ans:1},
      {q:"What is compound interest on ₹1000 at 10% for 2 years?", options:["₹200","₹210","₹220","₹250"], ans:1},
      {q:"Find HCF of 24 and 36?", options:["6","8","12","18"], ans:2},
      {q:"If 3x + 7 = 22, what is x?", options:["3","4","5","6"], ans:2},
      {q:"Train 200m long passes a pole in 10s. Speed in km/hr?", options:["60","72","80","90"], ans:1},
      {q:"A dice is rolled. Probability of getting even number?", options:["1/6","1/3","1/2","2/3"], ans:2}
    ],
    hard: [
      {q:"Two pipes fill a tank in 10 and 15 hrs. Together?", options:["5 hrs","6 hrs","7 hrs","8 hrs"], ans:1},
      {q:"A man sells two items at ₹990 each: 10% profit and 10% loss. Net result?", options:["No loss no gain","1% profit","1% loss","2% loss"], ans:2},
      {q:"In how many ways can 5 people sit in a row?", options:["60","100","120","150"], ans:2},
      {q:"A boat goes 30km upstream in 6hrs and 36km downstream in 4hrs. Speed of stream?", options:["1.5 km/hr","2 km/hr","2.5 km/hr","3 km/hr"], ans:3},
      {q:"Successive discounts of 20% and 10% = single discount of?", options:["28%","29%","30%","27%"], ans:0},
      {q:"If log(2)=0.301, find log(8)?", options:["0.602","0.903","0.301","1.204"], ans:1},
      {q:"Sum of first 20 natural numbers?", options:["190","200","210","220"], ans:2},
      {q:"A can do work in 12 days, B in 18 days. Together in?", options:["6 days","7 days","7.2 days","8 days"], ans:2},
      {q:"If 2^x = 32, what is x?", options:["4","5","6","7"], ans:1},
      {q:"Probability of getting 2 heads in 3 coin tosses?", options:["1/4","3/8","1/2","3/4"], ans:1}
    ]
  }
};

const TIMER_LIMITS = { easy: 15, medium: 12, hard: 9 };

let currentTopic = null, currentDiff = 'easy';
let currentQ = 0, score = 0, timer = null, timeLeft = 15;
let userAnswers = [], currentStreak = 0, bestStreak = 0, skipped = 0;

// PARTICLES
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    r: Math.random() * 1.5 + 0.3,
    dx: (Math.random() - 0.5) * 0.3,
    dy: (Math.random() - 0.5) * 0.3,
    alpha: Math.random() * 0.5 + 0.1
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(167,139,250,${p.alpha})`;
    ctx.fill();
    p.x += p.dx; p.y += p.dy;
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });
  requestAnimationFrame(animateParticles);
}
animateParticles();

// CONFETTI
function launchConfetti() {
  const cc = document.getElementById('confetti-canvas');
  cc.width = window.innerWidth; cc.height = window.innerHeight;
  const cx = cc.getContext('2d');
  const pieces = [];
  const colors = ['#a78bfa','#34d399','#fbbf24','#f87171','#60a5fa','#fff'];
  for (let i = 0; i < 120; i++) {
    pieces.push({
      x: Math.random() * cc.width, y: -10,
      w: Math.random() * 10 + 5, h: Math.random() * 6 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rot: Math.random() * 360,
      dx: (Math.random() - 0.5) * 4,
      dy: Math.random() * 3 + 2,
      drot: (Math.random() - 0.5) * 5
    });
  }
  let frame = 0;
  function drawConfetti() {
    cx.clearRect(0, 0, cc.width, cc.height);
    pieces.forEach(p => {
      cx.save(); cx.translate(p.x, p.y); cx.rotate(p.rot * Math.PI / 180);
      cx.fillStyle = p.color; cx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
      cx.restore();
      p.x += p.dx; p.y += p.dy; p.rot += p.drot;
    });
    frame++;
    if (frame < 120) requestAnimationFrame(drawConfetti);
    else cx.clearRect(0, 0, cc.width, cc.height);
  }
  drawConfetti();
}

// SCREEN NAVIGATION
function showScreen(id) {
  if (id !== 'screen-quiz') clearInterval(timer);
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

function selectTopic(el, topic) {
  document.querySelectorAll('.topic-card').forEach(c => c.classList.remove('selected'));
  el.classList.add('selected');
  currentTopic = topic;
}

function selectDiff(el, diff) {
  document.querySelectorAll('.diff-btn').forEach(b => b.classList.remove('active'));
  el.classList.add('active');
  currentDiff = diff;
}

function startQuiz() {
  if (!currentTopic) { alert('Please select a topic first!'); return; }
  currentQ = 0; score = 0; userAnswers = [];
  currentStreak = 0; bestStreak = 0; skipped = 0;
  const topicNames = { cn:'Computer Networks', python:'Python', dbms:'DBMS', aptitude:'Aptitude' };
  document.getElementById('q-badge').textContent = topicNames[currentTopic];
  buildStreakDots();
  showScreen('screen-quiz');
  loadQuestion();
}

function buildStreakDots() {
  const wrap = document.getElementById('streak-dots');
  wrap.innerHTML = '';
  for (let i = 0; i < 10; i++) {
    const d = document.createElement('div');
    d.className = 'sdot'; d.id = 'sdot-' + i;
    wrap.appendChild(d);
  }
  document.getElementById('streak-count').textContent = '0🔥';
}

function loadQuestion() {
  const qs = questions[currentTopic][currentDiff];
  const q = qs[currentQ];
  const total = qs.length;

  document.getElementById('q-counter').textContent = `Question ${currentQ+1} of ${total}`;
  document.getElementById('q-number').textContent = `QUESTION ${currentQ+1}`;
  document.getElementById('q-text').textContent = q.q;
  document.getElementById('progress-fill').style.width = `${(currentQ / total) * 100}%`;

  const list = document.getElementById('options-list');
  list.innerHTML = '';
  const labels = ['A','B','C','D'];
  q.options.forEach((opt, i) => {
    const btn = document.createElement('button');
    btn.className = 'opt';
    btn.innerHTML = `<span class="opt-label">${labels[i]}</span><span class="opt-text">${opt}</span><span class="opt-icon"></span>`;
    btn.onclick = () => pickAnswer(i);
    list.appendChild(btn);
  });

  startTimer();
}

function startTimer() {
  clearInterval(timer);
  timeLeft = TIMER_LIMITS[currentDiff];
  updateTimerUI();
  timer = setInterval(() => {
    timeLeft--;
    updateTimerUI();
    if (timeLeft <= 0) {
      clearInterval(timer);
      skipped++;
      markDot(currentQ, 'skipped');
      userAnswers.push({ chosen:-1, correct:questions[currentTopic][currentDiff][currentQ].ans,
        qtext:questions[currentTopic][currentDiff][currentQ].q,
        options:questions[currentTopic][currentDiff][currentQ].options });
      currentStreak = 0;
      updateStreakUI();
      document.querySelectorAll('.opt').forEach(b => b.disabled = true);
      setTimeout(nextQuestion, 700);
    }
  }, 1000);
}

function updateTimerUI() {
  const num = document.getElementById('timer-num');
  const fill = document.getElementById('timer-fill');
  const limit = TIMER_LIMITS[currentDiff];
  num.textContent = timeLeft;
  fill.style.width = `${(timeLeft / limit) * 100}%`;
  const danger = timeLeft <= 3;
  num.classList.toggle('danger', danger);
  fill.classList.toggle('danger', danger);
}

function pickAnswer(chosen) {
  clearInterval(timer);
  const q = questions[currentTopic][currentDiff][currentQ];
  const btns = document.querySelectorAll('.opt');
  btns.forEach(b => b.disabled = true);

  userAnswers.push({ chosen, correct:q.ans, qtext:q.q, options:q.options });

  if (chosen === q.ans) {
    btns[chosen].classList.add('correct');
    btns[chosen].querySelector('.opt-icon').textContent = '✓';
    score++; currentStreak++;
    if (currentStreak > bestStreak) bestStreak = currentStreak;
    markDot(currentQ, 'correct');
  } else {
    btns[chosen].classList.add('wrong');
    btns[chosen].querySelector('.opt-icon').textContent = '✗';
    btns[q.ans].classList.add('correct');
    btns[q.ans].querySelector('.opt-icon').textContent = '✓';
    currentStreak = 0;
    markDot(currentQ, 'wrong');
  }
  updateStreakUI();
  setTimeout(nextQuestion, 1000);
}

function markDot(idx, type) {
  const dot = document.getElementById('sdot-' + idx);
  if (dot) dot.classList.add(type);
}

function updateStreakUI() {
  document.getElementById('streak-count').textContent = currentStreak + '🔥';
}

function nextQuestion() {
  currentQ++;
  if (currentQ >= questions[currentTopic][currentDiff].length) showResults();
  else loadQuestion();
}

function askBack() { document.getElementById('modal').classList.add('show'); }
function closeModal() { document.getElementById('modal').classList.remove('show'); }
function confirmBack() { closeModal(); clearInterval(timer); showScreen('screen-topics'); }

function showResults() {
  clearInterval(timer);
  showScreen('screen-results');
  const total = questions[currentTopic][currentDiff].length;
  const wrong = userAnswers.filter(a => a.chosen !== -1 && a.chosen !== a.correct).length;

  document.getElementById('rs-correct').textContent = score;
  document.getElementById('rs-wrong').textContent = wrong;
  document.getElementById('rs-skipped').textContent = skipped;
  document.getElementById('rs-streak').textContent = bestStreak;
  document.getElementById('score-of').textContent = `/ ${total}`;

  const pct = Math.round((score / total) * 100);

  const circumference = 339.3;
  const offset = circumference - (pct / 100) * circumference;
  setTimeout(() => {
    document.getElementById('ring-progress').style.strokeDashoffset = offset;
  }, 200);

  let displayed = 0;
  const counter = setInterval(() => {
    displayed++;
    document.getElementById('score-big').textContent = displayed;
    if (displayed >= score) clearInterval(counter);
  }, 80);

  const pill = document.getElementById('grade-pill');

  if (pct >= 90) {
    document.getElementById('res-emoji').textContent = '🏆';
    pill.textContent = 'Outstanding! Placement Ready!';
    pill.style.background = 'rgba(251,191,36,0.15)';
    pill.style.color = '#fbbf24';
    launchConfetti();
  } else if (pct >= 70) {
    document.getElementById('res-emoji').textContent = '🎉';
    pill.textContent = 'Great Job! Strong Performance!';
    pill.style.background = 'rgba(52,211,153,0.15)';
    pill.style.color = '#34d399';
    launchConfetti();
  } else if (pct >= 50) {
    document.getElementById('res-emoji').textContent = '👍';
    pill.textContent = 'Good Effort! Keep It Up!';
    pill.style.background = 'rgba(167,139,250,0.15)';
    pill.style.color = '#a78bfa';
  } else {
    document.getElementById('res-emoji').textContent = '💪';
    pill.textContent = 'Keep Practicing! You\'ll Get There!';
    pill.style.background = 'rgba(248,113,113,0.15)';
    pill.style.color = '#f87171';
  }

  const reviewList = document.getElementById('review-list');
  reviewList.innerHTML = '';

  userAnswers.forEach((a, i) => {
    const isCorrect = a.chosen === a.correct;
    const isSkipped = a.chosen === -1;

    const div = document.createElement('div');
    div.className = `review-card ${isSkipped ? 'rs' : isCorrect ? 'rc' : 'rw'}`;

    const icon = isSkipped ? '⏭️' : isCorrect ? '✅' : '❌';
    const tag = isSkipped ? `<span class="tag tag-s">Skipped</span>`
      : isCorrect ? `<span class="tag tag-c">Correct</span>`
      : `<span class="tag tag-w">Wrong</span>`;

    div.innerHTML = `
      <div class="rv-q">${icon} Q${i+1}: ${a.qtext} ${tag}</div>
      <div class="rv-ans">
        <span>Your answer: <span style="color:${isSkipped?'#fbbf24':isCorrect?'#34d399':'#f87171'}">${isSkipped?'Skipped':a.options[a.chosen]}</span></span>
        ${!isCorrect&&!isSkipped?`<span>Correct: <span style="color:#34d399">${a.options[a.correct]}</span></span>`:''}
      </div>`;

    reviewList.appendChild(div);
  });

  // 👉 BACKEND SAVE (ONLY ADDITION)
  fetch(`${BASE_URL}/save-result`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      username: "Guest",
      topic: currentTopic,
      score: score,
      total: questions[currentTopic][currentDiff].length
    })
  })
  .then(res => res.json())
  .then(data => console.log("Saved:", data))
  .catch(err => console.error("Error saving:", err));
}
