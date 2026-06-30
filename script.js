const projects = [
  {
    id: 1,
    title: "RootMate",
    categories: ["마음건강"],
    accent: "rgba(108, 255, 143, 0.34)",
    short: "식물 관리라는 친숙한 루틴을 통해 고기능 우울을 경험하는 청년이 부담 없이 자기 자신을 돌아보게 하는 마음 건강 서비스.",
    summary: "RootMate는 일상 속에서 자연스럽게 스스로를 돌아볼 수 있도록 돕는 마음 건강 서비스입니다. 식물 관리 기록을 마치면 식물 캐릭터가 하루 한 가지 질문을 건네고, 사용자는 마음 건강이라는 무거운 언어 없이 자기 인식의 루틴을 쌓아갑니다.",
    students: "김동하, 김서영, 김지윤, 손정우",
    innovator: "마인드풀커넥트",
    mentors: "김진영(카카오모빌리티), 장지석(카카오엔터테인먼트)",
    background: "고기능 우울증은 학업이나 직장 생활을 정상적으로 유지하는 것처럼 보이지만 내면에서는 지속적인 피로감과 무기력을 경험하는 상태입니다. 치료 중심 정신건강 서비스는 심리적 진입 장벽이 높고 일상 밀착형 개입이 부족해, 도움이 필요하지만 도움을 찾지 않는 청년에게 구조적 공백을 남깁니다.",
    objectives: "고기능 우울을 경험하거나 공감하는 청년층을 대상으로, 식물 관리 서비스의 외형을 띤 RootMate를 배포해 일상 속에서 부담 없이 자기 자신을 돌아보는 루틴을 형성하도록 돕고 마음 건강 관리에 대한 인식을 개선합니다.",
    impact: "2026년 8월 정식 배포를 목표로 유저 테스트와 전문가 자문을 반영합니다. 앱 실사용자 100명을 달성하고, 장기적으로 씨앗 키트 판매와 앱 운영을 연계한 지속 가능한 모델로 확장합니다.",
    video: "https://www.youtube-nocookie.com/embed/3LZyM24mFW8"
  },
  {
    id: 2,
    title: "포스트히키코모리 프로젝트: Pizza Escape",
    categories: ["고립은둔","공감인기상"],
    accent: "rgba(255, 79, 216, 0.32)",
    short: "피자박스 퍼포먼스와 QR 게임을 통해 외로움과 고립은둔을 공공장소의 사회적 담론으로 끌어내는 예술-게임 프로젝트.",
    summary: "100개의 피자박스를 쌓은 지게를 매고 도시를 걷는 퍼포먼스, 박스 안 QR코드로 접속하는 고립 탈출 게임을 결합해 고립은둔을 개인의 실패가 아니라 현대인이 함께 지는 사회적 부담으로 드러냅니다.",
    students: "설혜인, 윤기완, 윤지수, 이세용",
    innovator: "안무서운회사 유승규 대표",
    mentors: "김진영(카카오모빌리티), 제현승(카카오)",
    background: "2025년 발표된 연구에 따르면 30세 이상의 한국인 중 약 34%가 자주 외로움을 느낍니다. 이 프로젝트는 그 외로움을 거리 위 퍼포먼스와 미니 게임으로 드러내어, 외로움이 현대인 모두의 일면이며 도움을 청할 수 있는 곳에 손을 뻗어야 한다는 메시지를 전달합니다.",
    objectives: "서강대, 신촌, 홍대, 경의선숲길에서 마주친 불특정 대중을 대상으로 고립은둔 사회 현상이 사회 낙오자의 경험이 아니라 개인적, 사회적 부담의 비대화라는 인식을 전달합니다.",
    impact: "행인 30명에게 피자박스를 전달하고 자체 개발 게임 플레이 후 인터뷰를 진행합니다. 8월에는 10분 단편 다큐멘터리 제작과 영화제 출품을 목표로 합니다.",
    video: "https://www.youtube-nocookie.com/embed/OT35t0O70FI"
  },
  {
    id: 3,
    title: "하루틈",
    categories: ["마음건강"],
    accent: "rgba(248, 232, 106, 0.3)",
    short: "2030 여성의 우울과 반추를 완화하기 위해 하루 20분 손글씨 걱정일기와 보조 앱을 결합한 자기돌봄 키트.",
    summary: "하루틈은 하루 20분 정해진 시간에 손글씨로 걱정을 쓰는 습관 형성 프로젝트입니다. 손글씨 걱정일기, 걱정타임 알림과 타이머, 오늘의 꽃, 실물 스티커와 걱정 봉투를 통해 아날로그와 디지털을 오갑니다.",
    students: "김성호, 유지오, 최찬아, 진현민",
    innovator: "마인드풀커넥트 류혜원",
    mentors: "제현승(카카오), 김수진(카카오)",
    background: "2030 여성의 반추적 사고는 SNS 비교, 완벽주의, 자기비난과 연결되며 우울을 내면화합니다. 병원과 상담의 문턱, 주변에 짐이 될지 모른다는 걱정 때문에 혼자 반추를 반복하는 이들에게 안전한 틀 안에서 감정을 꺼낼 일상의 도구가 필요합니다.",
    objectives: "반추적 사고에 시달리는 2030 여성을 대상으로 손글씨 걱정일기와 보조 앱으로 구성된 자기돌봄 키트를 배포합니다. 반추 멈추기, 감정 외재화, 정신건강을 일상의 자기돌봄으로 재정의하는 인식 개선을 핵심 목표로 삼습니다.",
    impact: "디지털 키트 PDF를 1,000명에게 보급하는 것을 1차 목표로 텀블벅 크라우드펀딩을 시작했습니다. 후원자 중 자원자를 모집해 반추와 우울 척도를 사전-사후 비교하고, 결과를 기반으로 실물 시제품과 상품 출시까지 확장합니다.",
    video: "https://www.youtube-nocookie.com/embed/TaSv9Wdizio"
  },
  {
    id: 4,
    title: "넷로그(NETLOG)",
    categories: ["기후환경", "혁신기술상"],
    accent: "rgba(38, 168, 255, 0.34)",
    short: "폐어망 수거, 검수, 공정 데이터를 디지털화해 재생 원료의 추적성과 해양 자원순환의 신뢰도를 높이는 플랫폼.",
    summary: "넷로그는 폐어망 업사이클링 과정 전 주기 데이터 기반 관리 시스템입니다. 기존 수기 방식의 검수, 수거, 공정 기록을 디지털화하고, 실제 데이터를 애니메이션으로 시각화해 대중에게 폐어망 업사이클링의 중요성을 알립니다.",
    students: "김가윤, 김도훈, 노진서, 임지현",
    innovator: "넷스파 정택수 대표",
    mentors: "김수진(카카오), 정소용(카카오)",
    background: "매년 전 세계적으로 120만 톤 이상 버려지는 폐어망은 유령어업, 미세플라스틱, 선박 사고, 탄소 배출을 유발합니다. 현재 수거와 재활용 과정은 수작업과 수기 기록 의존, 비효율적 수거, 모니터링 시스템 부재로 인해 투명성과 신뢰성 확보에 한계가 있습니다.",
    objectives: "현장 검수 모바일 서비스, B2B 업사이클링 관리 플랫폼, 참여형 공개 홍보 웹사이트를 결합해 폐어망 수거와 처리 전 과정을 디지털화합니다. 마대자루별 로트 번호 기반 추적성과 GIS/KPI 시각화를 통해 운영 효율과 대중 접근성을 높입니다.",
    impact: "2026년 8월까지 지자체 혹은 수협과 업무 협약을 논의하고 부산, 울산, 경남 지역 집하장 실증을 진행합니다. 검수 시간 30% 감소, 추적 마대 비율 80%, 작업자 긍정 피드백 60%, 웹사이트 누적 방문 5,000회를 목표로 합니다.",
    video: "https://www.youtube-nocookie.com/embed/Vbr3KNeEams"
  },
  {
    id: 5,
    title: "AI 기후 앰버서더 껌구리",
    categories: ["기후환경","사회가치상"],
    accent: "rgba(108, 255, 143, 0.28)",
    short: "기후무력감을 느끼는 2030세대에게 귀여운 AI 캐릭터와 숏폼 콘텐츠로 기후 데이터를 일상 언어로 번역하는 캠페인.",
    summary: "경기기후플랫폼의 우수한 기후 데이터를 시민의 일상과 연결하기 위해, 기후위기로 서식지를 잃고 판교로 상경한 아기 너구리 껌구리를 AI 기후 앰버서더로 구축했습니다. 인스타그램 @ggumguri를 통해 공감과 재미 기반의 넛지형 숏폼 콘텐츠를 운영합니다.",
    students: "김은홍, 김별, 원예솔, 정승현",
    innovator: "경기연구원 김한수 실장",
    mentors: "최영록(카카오), 정소용(카카오)",
    background: "기후위기의 심각성에 대한 인식은 높지만 심리적 거리감과 기후무력감 때문에 개인 실천으로 이어지지 않습니다. 무겁고 도덕적인 캠페인은 콘텐츠 피로감을 만들고, 공공 기후 데이터 역시 시민의 일상과 연결되지 못하고 있습니다.",
    objectives: "기후위기를 인지하지만 행동으로 이어지지 못하는 2030세대를 대상으로 AI 기후 앰버서더 캐릭터와 숏폼 캠페인을 전개합니다. LLM 기반 콘텐츠 자동화 툴 너굴번역기를 개발해 지속 가능한 소셜 임팩트 생산 구조도 함께 증명합니다.",
    impact: "2026년 8월까지 @ggumguri 팔로워 200명 이상, 누적 조회수 10,000회 이상, 릴스 30편 이상 업로드를 목표로 합니다. 장기적으로 경기기후플랫폼의 공식 기후 앰버서더 공공 캐릭터로 자리잡는 기반을 마련합니다.",
    video: "https://www.youtube-nocookie.com/embed/FMCQxzBDiMY"
  },
  {
    id: 6,
    title: "바람을 짓다",
    categories: ["지방소멸"],
    accent: "rgba(38, 168, 255, 0.28)",
    short: "지역살이에 대한 막연한 호감을 유형 테스트, 지역 추천, 생활 시뮬레이션, 레지던스 연결로 이어주는 탐색 플랫폼.",
    summary: "바람을 짓다는 지역살이에 대한 호감을 구체적 탐색과 실제 행동으로 연결하는 지역 라이프스타일 탐색 플랫폼입니다. 유형 테스트, 취향 기반 지역 추천, 생활 미션 시뮬레이션, 이주 리포트, 레지던스 연결로 하나의 여정을 만듭니다.",
    students: "안준현, 조현지, 황나금",
    innovator: "협동조합 청풍 유명상 이사",
    mentors: "김현욱, 최영록",
    background: "청년의 지방 이주는 지역 소멸 해법으로 주목받지만 관심과 정착 사이에는 큰 간극이 있습니다. 짧은 여행이나 파편적 정보만으로는 실제 생활의 결을 느끼기 어렵고, 관계인구의 첫 접점을 만들어주는 도구도 부족합니다.",
    objectives: "귀촌과 지역 이주에 막연한 호감을 가진 청년, 특히 사회초년생을 대상으로 지역의 삶을 미리 체험하는 웹을 배포합니다. 직관적 체험, 사용자 성향에 맞는 지역 추천, 가상 체험을 실제 방문과 체류로 연결하는 경로 마련을 목표로 합니다.",
    impact: "사용자는 지역 라이프스타일을 자연스럽게 경험하고 익숙한 지역 너머 자신의 취향에 맞는 곳을 발견합니다. 지역은 장소가 아니라 삶의 방식으로 소개되고, 레지던스와 체류 프로그램 운영 기관에는 잠재 이주자와 만나는 디지털 관문이 생깁니다.",
    video: "https://www.youtube-nocookie.com/embed/jd9IKgREsF0?list=PLfHy3lk64xcw"
  },
  {
    id: 7,
    title: "온동네",
    categories: ["지방소멸"],
    accent: "rgba(255, 79, 216, 0.28)",
    short: "로컬 자영업자의 이야기를 AI 콘텐츠로 만들고 방문객의 지역 발견과 맞춤 투어로 연결하는 웹 서비스.",
    summary: "온동네는 로컬 자영업자와 지역 방문객을 AI 콘텐츠로 연결하는 웹 서비스입니다. 사장님이 사진과 옵션만 선택하면 Claude AI가 가게만의 스토리가 담긴 SNS 콘텐츠를 생성하고, 방문객은 로컬 콘텐츠와 AI 맞춤 투어 루트를 탐색합니다.",
    students: "신재원, 신지선, Manuel, ALINA",
    innovator: "스튜디오 우당탕탕 대표 채아람, 윤주선 교수",
    mentors: "김현욱(카카오), 추재경(카카오페이)",
    background: "대한민국의 지방 소멸은 인구 감소를 넘어 지역 경제 활력 저하로 이어집니다. 대전 필드트립에서 로컬 가게들이 고유한 스토리를 가지고 있지만 SNS 운영, AI 활용, 마케팅 비용과 시간 부족으로 이를 외부에 잘 전달하지 못한다는 문제를 발견했습니다.",
    objectives: "30-50대 로컬 자영업자와 지역 방문객을 대상으로 AI 기반 로컬 콘텐츠 플랫폼을 개발, 배포합니다. 가게의 스토리텔링 역량을 강화하고, 축적된 로컬 콘텐츠를 기반으로 방문객에게 신뢰할 수 있는 지역 발견 경험과 맞춤 투어를 제공합니다.",
    impact: "최종 발표까지 로컬 가게 30건, 2026년 8월까지 100건 축적을 목표로 합니다. 실제 서비스를 이용하고 로컬을 방문하는 경험 10건 이상, 온동네 인스타그램 인사이트 1만 회 이상 도달을 목표로 하며 스페인과 폴란드 등으로 확장 가능성도 탐색합니다.",
    video: "https://www.youtube-nocookie.com/embed/xZqwHfEOl0s"
  },
  {
    id: 8,
    title: "문을 여는 방법",
    categories: ["고립은둔"],
    accent: "rgba(248, 232, 106, 0.28)",
    short: "문을 두드리는 노력보다 기다림의 시간이 문을 열게 하는 반전 인터랙션으로 은둔 고립 청년에 대한 편견을 해체하는 설치 예술 프로젝트.",
    summary: "문을 여는 방법은 은둔·고립 청년 문제를 바라보는 편견을 해체하기 위한 참여형 설치 예술입니다. 관람객이 문을 두드리고 손잡이를 당겨도 열리지 않던 문은 모래시계를 뒤집고 온전히 기다릴 때 비로소 열립니다.",
    students: "이형복, 한윤지, 최윤서, 이윤선",
    innovator: "안무서운회사 유승규 대표",
    mentors: "장지석(카카오엔터), 추재경(카카오페이)",
    background: "청년 고립 문제는 사회적 편견과 이해 부족으로 당사자의 회복을 더욱 어렵게 하는 복합적 현상입니다. 제도적 지원만으로는 대중의 깊은 공감을 이끌어내기 어려워, 예술적 감수성과 기술적 인터랙션을 융합한 공감 경험이 필요합니다.",
    objectives: "일반 대중을 대상으로 참여형 인터랙티브 미디어 아트 설치 작품을 만들어 전시합니다. 당사자가 다시 사회로 나오기 위해 조력자의 존재와 올바른 역할이 중요하다는 판단 아래, 대중의 시선 변화를 유발하고 사회적 공감대를 형성합니다.",
    impact: "2026년 7월까지 10분 내외 다큐멘터리 필름을 제작하고 국내 단편 영화제 및 사회혁신, 방송 영상 공모전에 출품해 최소 1개 이상의 입상 또는 스크리닝 성과 달성을 목표로 합니다.",
    video: "https://www.youtube-nocookie.com/embed/K1gPNgZXsic"
  }
];

projects.forEach((project) => {
  project.images = {
    main: `T${project.id}_main.jpg`,
    students: `T${project.id}_students.jpg`
  };
});

const grid = document.querySelector("#project-grid");
const filters = document.querySelectorAll(".filter");
const modal = document.querySelector("#project-modal");
const modalContent = document.querySelector("#modal-content");
const cursor = document.querySelector(".cursor");

function renderProjects(filter = "all") {
  const visible = projects.filter((project) => {
    return filter === "all" || project.categories.includes(filter);
  });

  grid.innerHTML = visible.map((project) => `
    <button class="project-card reveal visible" type="button" data-id="${project.id}" style="--accent: ${project.accent}">
      <span class="card-art" aria-hidden="true"></span>
      <span class="card-index">TEAM ${String(project.id).padStart(2, "0")}</span>
      <span>
        <span class="card-title">${project.title}</span>
        <span class="card-copy">${project.short}</span>
      </span>
      <span class="tags">
        ${project.categories.map((category) => `<span class="tag">${category}</span>`).join("")}
      </span>
    </button>
  `).join("");
}

function openProject(id) {
  const project = projects.find((item) => item.id === Number(id));
  if (!project) return;

  modalContent.innerHTML = `
    <header class="modal-hero" style="--accent: ${project.accent}">
      <p class="eyebrow">Team ${String(project.id).padStart(2, "0")}</p>
      <h2 id="modal-title">${project.title}</h2>
      <div class="tags">${project.categories.map((category) => `<span class="tag">${category}</span>`).join("")}</div>
    </header>
    <section class="modal-gallery" aria-label="${project.title} 미디어">
      <figure class="project-video" style="width: 100%; aspect-ratio: 16/9; margin: 0 0 24px 0; border-radius: 8px; overflow: hidden; grid-column: 1 / -1; background-color: #12141a;">
        <iframe src="${project.video}" width="100%" height="100%" frameborder="0" allow="autoplay; fullscreen; picture-in-picture;" allowfullscreen referrerpolicy="strict-origin-when-cross-origin" style="border: none;"></iframe>
      </figure>
      <figure class="project-image project-image-main">
        <img src="${project.images.main}" alt="${project.title} main image">
        <figcaption>Main image</figcaption>
      </figure>
      <figure class="project-image project-image-students">
        <img src="${project.images.students}" alt="${project.title} students image">
        <figcaption>Students</figcaption>
      </figure>
    </section>
    <div class="modal-body">
      <p class="modal-summary">${project.summary}</p>
      <div class="modal-meta">
        <div><span>Students</span><p>${project.students}</p></div>
        <div><span>Social Innovator</span><p>${project.innovator}</p></div>
        <div><span>Kakao Mentors</span><p>${project.mentors}</p></div>
      </div>
      <div class="detail-stack">
        <section class="detail-block"><h3>Background</h3><p>${project.background}</p></section>
        <section class="detail-block"><h3>Objectives</h3><p>${project.objectives}</p></section>
        <section class="detail-block"><h3>Expected Impacts</h3><p>${project.impact}</p></section>
      </div>
    </div>
  `;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  modal.querySelector(".modal-close").focus();
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

grid.addEventListener("click", (event) => {
  const card = event.target.closest(".project-card");
  if (card) openProject(card.dataset.id);
});

modal.addEventListener("click", (event) => {
  if (event.target.matches("[data-close-modal]")) closeModal();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    if (modal && modal.classList.contains("is-open")) closeModal();
    if (lightbox && lightbox.classList.contains("is-open")) closeLightbox();
  }
  if (lightbox && lightbox.classList.contains("is-open")) {
    if (event.key === "ArrowRight") nextLightboxImage();
    if (event.key === "ArrowLeft") prevLightboxImage();
  }
});

document.addEventListener("pointermove", (event) => {
  if (!cursor) return;
  cursor.style.left = `${event.clientX}px`;
  cursor.style.top = `${event.clientY}px`;
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.18 });

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

function initCanvas() {
  const canvas = document.querySelector("#hero-canvas");
  const context = canvas.getContext("2d");
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let width = 0;
  let height = 0;
  let particles = [];

  function resize() {
    const ratio = window.devicePixelRatio || 1;
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
    particles = Array.from({ length: Math.min(80, Math.floor(width / 16)) }, (_, index) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      speed: 0.25 + Math.random() * 0.75,
      radius: 1 + Math.random() * 2.4,
      hue: index % 3
    }));
  }

  function draw(time = 0) {
    context.clearRect(0, 0, width, height);
    context.fillStyle = "#050608";
    context.fillRect(0, 0, width, height);

    const gap = Math.max(42, width / 22);
    context.strokeStyle = "rgba(255,255,255,0.055)";
    context.lineWidth = 1;
    for (let x = 0; x < width + gap; x += gap) {
      context.beginPath();
      context.moveTo(x + Math.sin(time / 1200 + x) * 10, 0);
      context.lineTo(x - 140, height);
      context.stroke();
    }

    particles.forEach((particle) => {
      particle.y -= particle.speed;
      particle.x += Math.sin(time / 1000 + particle.y * 0.01) * 0.35;
      if (particle.y < -10) {
        particle.y = height + 10;
        particle.x = Math.random() * width;
      }
      const color = particle.hue === 0 ? "38,168,255" : particle.hue === 1 ? "108,255,143" : "255,79,216";
      context.fillStyle = `rgba(${color},0.72)`;
      context.beginPath();
      context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      context.fill();
    });

    if (!prefersReduced) requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener("resize", resize);
}

// Demo Day Lightbox
const demodayImages = [
  "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg",
  "6.jpg", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.jpg"
];
let currentImageIndex = 0;

const demodayGrid = document.querySelector(".demoday-grid");
const lightbox = document.querySelector("#demoday-lightbox");
const lightboxImg = document.querySelector("#lightbox-img");
const lightboxCounter = document.querySelector(".lightbox-counter");
const lightboxPrev = document.querySelector(".lightbox-prev");
const lightboxNext = document.querySelector(".lightbox-next");

function openLightbox(index) {
  currentImageIndex = Number(index);
  updateLightbox();
  lightbox.classList.add("is-open");
  lightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function updateLightbox() {
  lightboxImg.src = demodayImages[currentImageIndex];
  lightboxCounter.textContent = `${currentImageIndex + 1} / ${demodayImages.length}`;
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  lightbox.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

function nextLightboxImage() {
  currentImageIndex = (currentImageIndex + 1) % demodayImages.length;
  updateLightbox();
}

function prevLightboxImage() {
  currentImageIndex = (currentImageIndex - 1 + demodayImages.length) % demodayImages.length;
  updateLightbox();
}

if (demodayGrid) {
  demodayGrid.addEventListener("click", (event) => {
    const card = event.target.closest(".demoday-card");
    if (card) {
      openLightbox(card.dataset.index);
    }
  });
}

if (lightbox) {
  lightbox.addEventListener("click", (event) => {
    if (event.target.matches("[data-close-lightbox]")) {
      closeLightbox();
    }
  });

  if (lightboxPrev) lightboxPrev.addEventListener("click", prevLightboxImage);
  if (lightboxNext) lightboxNext.addEventListener("click", nextLightboxImage);
}

renderProjects();
initCanvas();
