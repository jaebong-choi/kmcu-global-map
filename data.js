/* =========================================================
   KMCU 글로벌 프로그램 지도 — 데이터
   - 수치 기준: 「글로벌 존 투어」 설명회 자료(수정본) 우선,
     국제처 홈페이지(www.kmcu.ac.kr/global) 내용으로 보충
   - 내용 수정은 이 파일만 고치면 됩니다.
   ========================================================= */

/* 계명문화대학교 (대구 달서구) — 지도에서 모든 선이 출발하는 위치 */
const KMCU = { latlng: [35.8541, 128.4914] };

const STEPS = [
  { n: 1, title: "동기부여" },
  { n: 2, title: "단기 프로그램" },
  { n: 3, title: "실습 · 교환학생" },
  { n: 4, title: "해외 취업" },
];

const PAGE = (code) => `https://www.kmcu.ac.kr/global/index.php?pCode=${code}`;
/* 국제처 공지사항 글 링크 */
const NOTICE = (idx) => `https://www.kmcu.ac.kr/global/?pCode=MN0000040&mode=view&idx=${idx}`;
const NOTICE_BOARD = "https://www.kmcu.ac.kr/global/?pCode=MN0000040";

const PROGRAMS = [
  /* ---------- STEP 1 : 교내 ---------- */
  {
    id: "globalzone", step: 1, campus: true,
    name: "글로벌 존", en: "Global Zone",
    tagline: "공강 시간에 편하게 들러 영어와 친해지는 공간",
    facts: [
      ["운영", "평일 10:00 ~ 17:00 (시험기간·방학 미운영)"],
      ["위치", "복지관 지하 1층 학생식당 맞은편"],
      ["대상", "재학생 누구나"],
      ["비용", "무료"],
    ],
    points: [
      "상시 프로그램: 상주하는 외국인 Buddy와 Free Talking, 보드게임",
      "Study Class: 소규모 어학 스터디, 기초 영어회화",
      "50분 활동 → KMCU 통합 마일리지 적립 → 장학금",
      "해외 프로그램 지원 시 가산점",
    ],
    talk: "쉽게 말해 ‘영어 유치원’ 같은 곳이에요. 외국인 버디 학생이 상주하고 보드게임으로 놀면서 영어를 접할 수 있어요. 체크인·체크아웃 때 명단을 쓰고 스탬프만 받으면, 공간에 있기만 해도 마일리지가 쌓여 장학금을 받을 수 있어요.",
    link: PAGE("MN0000045"), countries: ["kr"],
  },
  {
    id: "langedu", step: 1, campus: true,
    name: "교내어학교육", en: "On-campus Language Courses",
    tagline: "출석만 하면 수강료 전액 환급되는 무료 어학 강좌",
    facts: [
      ["학기", "봄 · 여름(6월말~8월말) · 가을 · 겨울(1월) — 학기별 일정은 공지 확인"],
      ["대면", "토익(TOEIC), 오픽(OPIc), 기초일본어/JPT"],
      ["비대면", "산타토익, 스픽(영어회화), 해커스 일본어 회화(온라인)"],
      ["비용", "무료 (성실이행 보증금 5만원, 수료 시 환급)"],
      ["참고", "대면 과정은 수강인원 15명 미만 시 폐강 → 비대면 과정으로 전환 가능"],
    ],
    points: [
      "사전·사후 모의시험, 교재(유인물)·간식 제공 (대면)",
      "KMCU 마일리지 적립, 우수 수료자 상품",
      "해외 프로그램 지원 시 가산점",
      "공인어학성적 우수자 마일리지 장학금 운영",
    ],
    talk: "외부 강사님을 초청해 학원처럼 토익·오픽 수업을 해요. 밖에서 비싼 수강료 내고 듣는 수업을 학교에서는 무료로! 수업 듣고 공인어학시험 성적을 받으면 마일리지가 또 쌓여요.",
    notices: [["2026-09-10", "교내어학교육(가을학기) 폐강 과정 비대면 전환 안내", 309040]],
    link: PAGE("MN0000047"), countries: ["kr"],
  },
  {
    id: "buddy", step: 1, campus: true,
    name: "글로벌 버디 프로그램", en: "Global Buddy",
    tagline: "외국인 유학생과 짝을 이뤄 한국 생활을 함께",
    facts: [
      ["기간", "봄·가을 학기 중"],
      ["대상", "재학생 (전공심화과정 포함)"],
      ["혜택", "활동비 또는 봉사시간(20~30시간) 지원"],
    ],
    points: ["문화체험 지원 (식비, 교통비, 체험비)", "결과 평가 후 우수팀 시상금", "외국인 친구와 교류하며 자연스러운 회화 연습", "영국 등 해외 단기연수로 방문하는 유학생 Buddy도 모집 (예: 2023 여름학기)"],
    notices: [["2023-06-08", "영국 단기연수 유학생을 위한 Buddy 모집(여름학기)", 234382]],
    talk: "우리 대학엔 외국인 학생이 약 300명 있어요. 그냥 짝만 지어주고 끝이 아니라 한복체험, 앞산, 동성로, 강정보 등 함께 다니고 활동비와 봉사시간(20~30시간)도 드려요. 우수팀에는 시상금까지!",
    link: PAGE("MN0000045"), countries: ["kr"],
  },

  /* ---------- STEP 2 : 단기 ---------- */
  {
    id: "gsl", step: 2,
    name: "GS-L 글로벌 서비스러닝", en: "Global Service-Learning",
    tagline: "인접 국가에서 교육·노력 봉사와 환경 개선 활동",
    facts: [
      ["기간", "하계 또는 동계방학 약 2주"],
      ["선발", "4월 초 모집 → 4월 중순 면접 → 4월 말 합격 발표 (2026 하계 기준)"],
      ["대상", "재학생 (전공심화과정 포함)"],
      ["지원금", "1인당 약 400만원"],
      ["참가비", "60만원"],
    ],
    support: "약 400만원",
    points: ["지원 내용: 사전교육, 봉사단복, 항공료, 숙박비, 식대 등", "2026학년도 하계: 몽골 파견"],
    talk: "전공·특기와 연계한 해외 봉사예요. 간호학과·응급구조과는 초등학생에게 CPR을, 유아교육과는 이빨 도구로 양치법을 알려주는 식이에요. 올해는 몽골, 4월 초 모집 예정이에요.",
    notices: [
      ["2026-04-20", "2026학년도 하계 GS-L(글로벌 서비스러닝, 몽골) 합격자 공지", 302843],
      ["2026-04-15", "2026학년도 하계 GS-L(글로벌 서비스러닝, 몽골) 면접자 공지", 302690],
    ],
    link: NOTICE_BOARD, countries: ["mn", "vn", "uz"],
  },
  {
    id: "paran", step: 2,
    name: "파란사다리", en: "Paran Ladder (KOSAF)",
    tagline: "한국장학재단 주관, 취약계층 학생 해외 연수",
    facts: [
      ["기간", "하계방학 4주 (7~8월)"],
      ["선발", "4월 모집 → 5월 초 면접 → 5월 중순 합격 발표·예비소집"],
      ["대상", "소득구간에 따라 지원 가능 (자세한 기준은 모집공고 확인)"],
      ["지원금", "1인당 약 450~500만원"],
      ["학점", "전공 2학점 부여"],
    ],
    support: "약 450~500만원",
    points: ["지원 내용: 사전교육, 항공료, 연수(숙박)비, 문화체험비, 성과발표회(시상금)", "개인 부담: 현지 교통·식사 비용"],
    talk: "항공비까지 모두 지원돼서 현지 교통비·식비 정도만 들어요. 기업·기관 탐방도 하고, 숙소가 아니라 홈스테이를 하기 때문에 현지 문화를 가까이 경험할 수 있어요. 조건에 맞는 학생은 꼭 지원하세요!",
    notices: [
      ["2025-05-13", "2025 파란사다리 합격자 공지 및 예비소집 안내", 285660],
      ["2025-05-05", "2025 파란사다리 면접공지 (서류전형 합격자)", 285341],
      ["2024-05-16", "2024년 파란사다리 합격자 및 예비소집 공지", 267882],
    ],
    link: PAGE("MN0000051"), countries: ["uk", "au", "my"],
  },
  {
    id: "dream", step: 2,
    name: "KMCU Dream 사다리", en: "KMCU Dream Ladder",
    tagline: "계명문화대 자체 사업, 재학생이면 소득과 관계없이 지원",
    facts: [
      ["기간", "하계·동계방학 4주"],
      ["선발", "하계: 4~5월 모집 → 5월 말 면접·합격 / 동계: 10~11월 모집 → 11~12월 면접·합격"],
      ["대상", "재학생 (전공심화과정 포함)"],
      ["지원금", "1인당 약 300~500만원"],
    ],
    support: "약 300~500만원",
    points: [
      "해외 어학연수 + 기업탐방, 명사특강, 진로워크숍, 팀미션, 문화체험",
      "지원 내용: 사전교육, 항공료, 연수(숙박)비, 문화체험비, 성과발표회(시상금)",
      "취업취약계층 선발 시 가산점 · 소득구간에 따라 항공료 차등 지원",
      "최근 파견: 2025 하계 캐나다, 2025 동계 일본·호주 (해외현지연수)",
    ],
    notices: [
      ["2026-05-28", "2026학년도 KMCU Dream 사다리 합격자 발표", 303829],
      ["2026-05-23", "2026학년도 KMCU Dream 사다리 면접 일정 공지", 303720],
      ["2025-12-26", "2025학년도 KMCU Dream 사다리 면접 공지", 298161],
      ["2025-12-02", "2025학년도 동계 해외현지연수(일본, 호주) 합격자 공지", 296762],
      ["2025-05-27", "2025학년도 하계 해외현지연수(캐나다) 합격자 공지", 286224],
    ],
    talk: "우리 대학이 주관하는 사업이라 소득분위 제한 없이 재학생이면 누구나 지원할 수 있어요. 소득분위에 따라 항공료 일부만 본인 부담이고, 나머지는 학교가 모두 부담해요.",
    link: PAGE("MN0000069"), countries: ["au", "ca", "jp", "us"],
  },

  /* ---------- STEP 3 : 실습 · 교환 ---------- */
  {
    id: "fieldwork", step: 3,
    name: "글로벌 현장학습", en: "Global Field Training",
    tagline: "한 학기 동안 어학연수 + 전공 현장실습",
    facts: [
      ["기간", "한 학기 약 4개월 (어학연수 + 전공 현장실습) · 1학기 6~8월(12주, 유아교육 트랙) / 2학기 8~12월(16주)"],
      ["대상", "일반전형: 2학기 이상 수료, 1학년 평점 3.0↑, 어학성적 / 열린전형: 2학기 이상 수료"],
      ["지원금", "1인당 약 600~1,080만원 (초과분 자부담)"],
      ["학점", "최대 24학점 대체 인정"],
    ],
    support: "약 600~1,080만원",
    points: [
      "한국전문대학교육협의회 주관",
      "지원 내용: 사전교육, 일부 항공료, 연수비, 실습비, 비자발급비, 체재비(취업취약계층)",
      "어학 기준: TOEIC 550, OPIc NH, JPT 2급, HSK 3급 이상",
      "선발: 1월 사전모집·설명회 → 3월 면접 → 4월 초 합격 발표",
    ],
    notices: [
      ["2026-04-08", "2026학년도 전문대학 글로벌 현장학습 합격자 공지", 302524],
      ["2025-04-11", "2025학년도 전문대학 글로벌 현장학습 합격자 공지", 284443],
      ["2025-01-23", "2025년 전문대학 글로벌 현장학습 참가자 사전 모집", 280500],
    ],
    talk: "학기 중에 4개월(어학 2개월 + 실습 2개월) 다녀와도 수강신청은 국내와 똑같이 하고, 실습기관 평가로 성적을 받아 오히려 좋은 성적을 받기 쉬워요. 나라별 물가에 따라 지원금이 달라요. 어학성적이 필요하니 교내어학교육으로 미리 준비해 두세요!",
    link: PAGE("MN0000072"), countries: ["uk", "ca", "au", "jp", "my"],
  },
  {
    id: "tvet", step: 3,
    name: "아세안 TVET 학생교류", en: "ASEAN TVET Exchange",
    tagline: "아세안 협력대학에서 한 학기 영어 강의 수강·학점 취득",
    facts: [
      ["사업기간", "2024 ~ 2029년 (5년)"],
      ["파견", "2학기 (4개월) · 모집 4월"],
      ["대상", "재학생 (전공심화과정 포함) · 1학년도 지원 가능"],
      ["지원금", "1인당 약 920만원 (2024년 기준)"],
    ],
    support: "약 920만원",
    points: [
      "최대 15학점 대체 인정",
      "지원 내용: 항공료, 연수비, 실습비, 숙박비, 체재비 매달 70만원 등",
      "태국 SBAC(지정형) · 말레이시아 SEGi University(자율형)",
      "파견 후 UCC·체험수기 제출, OPIc 응시(응시료 지원)",
    ],
    talk: "1학년도 신청할 수 있어요! 다만 인정 학점이 최대 15학점이라 졸업학점을 미리 관리해야 해요. 체재비 월 70만원은 현금으로 본인 계좌에 넣어줘요.",
    link: PAGE("MN0000068"), countries: ["th", "my"],
  },

  /* ---------- STEP 4 : 해외 취업 ---------- */
  {
    id: "kmove", step: 4,
    name: "K-Move 스쿨", en: "K-Move School",
    tagline: "국내교육 → 필리핀 어학연수 → 말레이시아 취업",
    facts: [
      ["기간", "6개월 (어학 + 직무연수)"],
      ["대상", "졸업예정자 (전체 전공)"],
      ["지원금", "1인당 약 880만원"],
      ["추가", "해외취업정착지원금 최대 500만원 별도"],
    ],
    support: "약 880만원",
    points: [
      "말레이시아 글로벌 기업체 인력양성(고객지원 서비스)",
      "지원 내용: 사전교육, 일부 항공료, 연수비, 숙박비, 해외체류 보험",
      "연수 종료 후 기업 면접·이력서 지원, 취업 후 사후관리",
    ],
    talk: "바로 취업시키는 게 아니라 국내교육 → 필리핀 어학연수 → 해외취업까지 6개월 동안 꾸준히 케어해요. 취업처 연결까지 도와주고, 연수비용 등은 학교가 지원해요.",
    notices: [["2021-04-06", "2021년 말레이시아 취업 프로그램 참가학생 모집 안내(K-Move 스쿨)", 169161]],
    link: PAGE("MN0000052"), countries: ["my", "ph"],
  },
  {
    id: "jpcamp", step: 4,
    name: "해외취업캠프 (JAPAN)", en: "Overseas Job Camp · Japan",
    tagline: "일본 해외취업을 미리 경험하는 하계 캠프",
    facts: [
      ["운영", "2024·2025학년도 하계 운영"],
      ["선발", "6월 서류전형 → 6월 말 면접 → 7월 초 합격 발표"],
      ["대상", "재학생 (세부 자격은 모집공고 확인)"],
    ],
    points: ["세부 일정·지원 내용은 매년 모집공고로 안내"],
    notices: [
      ["2025-07-01", "2025학년도 해외취업캠프 (JAPAN) 합격자 공지", 287640],
      ["2025-06-19", "2025학년도 해외취업캠프 (JAPAN) 서류 전형 합격자 및 면접 공지", 287260],
      ["2024-06-26", "2024학년도 해외취업캠프(JAPAN) 면접 공지", 270880],
    ],
    link: NOTICE_BOARD, countries: ["jp"],
  },

  /* ---------- 기타 ---------- */
  {
    id: "transfer", step: 0,
    name: "해외 교류대학 편입학", en: "Transfer to Partner Universities",
    tagline: "졸업 후 해외 협약대학으로 진학",
    facts: [
      ["어학기준", "영국·호주 IELTS 6.5~7.0 / 미국·캐나다 TOEFL iBT 80 또는 IELTS 6.5 / 일본 JLPT N2"],
      ["상담", "평일 10:00~12:00, 13:00~16:00 (개인별 상담 후 안내)"],
    ],
    points: ["조건부 입학은 어학·학점 확인 후 진행 가능", "일본 사가여자단기대학 교환학생 모집 사례 있음 (2022학년도 2학기)"],
    notices: [["2022-04-13", "2022학년도 2학기 일본 사가여자단기대학 교환학생 모집", 198142]],
    link: PAGE("MN0000024"), countries: ["uk", "au", "us", "ca", "jp"],
  },
  {
    id: "koica", step: 0,
    name: "국제개발협력 사업", en: "KOICA · International Cooperation",
    tagline: "대학의 교육·기술 역량으로 협력국 직업교육 지원",
    facts: [["형태", "KOICA 시민사회협력 · 국제협력선도대학 육성지원"]],
    points: ["볼리비아 엘알토 기술직업훈련원(CEA-KOREA) 역량강화", "우즈베키스탄 사마르칸트 직업훈련원 1~3단계 (2019~2027)", "우즈베키스탄 TIIAME 메카트로닉스 테크니쿰 (2024~2029)"],
    link: PAGE("MN0000073"), countries: ["uz", "bo"],
  },
];

/* 국가 — status: home(교내, 출발점) / active(현재 파견) / partner(협약·협력) / past(과거 실적만) */
const COUNTRIES = [
  { id: "kr", ko: "한국", en: "South Korea", flag: "kr", latlng: KMCU.latlng, status: "home", region: "아시아" },
  { id: "uk", ko: "영국", en: "United Kingdom", flag: "gb", latlng: [52.6, -1.6], status: "active", region: "유럽" },
  { id: "au", ko: "호주", en: "Australia", flag: "au", latlng: [-26.5, 145.0], status: "active", region: "오세아니아" },
  { id: "ca", ko: "캐나다", en: "Canada", flag: "ca", latlng: [52.5, -112.0], status: "active", region: "북미" },
  { id: "jp", ko: "일본", en: "Japan", flag: "jp", latlng: [36.4, 138.4], status: "active", region: "아시아" },
  { id: "my", ko: "말레이시아", en: "Malaysia", flag: "my", latlng: [3.9, 102.2], status: "active", region: "아시아" },
  { id: "th", ko: "태국", en: "Thailand", flag: "th", latlng: [15.2, 101.0], status: "active", region: "아시아" },
  { id: "ph", ko: "필리핀", en: "Philippines", flag: "ph", latlng: [12.6, 122.0], status: "active", region: "아시아" },
  { id: "mn", ko: "몽골", en: "Mongolia", flag: "mn", latlng: [47.3, 104.5], status: "active", region: "아시아" },
  { id: "vn", ko: "베트남", en: "Vietnam", flag: "vn", latlng: [16.0, 107.5], status: "active", region: "아시아" },
  { id: "uz", ko: "우즈베키스탄", en: "Uzbekistan", flag: "uz", latlng: [41.0, 64.5], status: "active", region: "중앙아시아" },
  { id: "us", ko: "미국", en: "United States", flag: "us", latlng: [38.5, -97.0], status: "active", region: "북미" },
  { id: "bo", ko: "볼리비아", en: "Bolivia", flag: "bo", latlng: [-16.8, -64.8], status: "partner", region: "남미" },
  { id: "cz", ko: "체코", en: "Czechia", flag: "cz", latlng: [49.8, 15.5], status: "past", region: "유럽" },
  { id: "fi", ko: "핀란드", en: "Finland", flag: "fi", latlng: [62.5, 26.0], status: "past", region: "유럽" },
  { id: "de", ko: "독일", en: "Germany", flag: "de", latlng: [51.0, 10.2], status: "past", region: "유럽" },
  { id: "mt", ko: "몰타", en: "Malta", flag: "mt", latlng: [35.9, 14.4], status: "past", region: "유럽" },
  { id: "sg", ko: "싱가포르", en: "Singapore", flag: "sg", latlng: [1.35, 103.82], status: "past", region: "아시아" },
  { id: "cn", ko: "중국", en: "China", flag: "cn", latlng: [31.5, 113.0], status: "past", region: "아시아" },
  { id: "tw", ko: "대만", en: "Taiwan", flag: "tw", latlng: [23.7, 121.0], status: "past", region: "아시아" },
];

/* 협약 · 운영 기관 (지도 핀) */
const INSTITUTIONS = [
  { country: "uk", name: "Westminster Kingsway College", ko: "웨스트민스터 킹스웨이 칼리지 (Capital City College Group)", city: "런던", latlng: [51.5308, -0.1238], type: "편입학", url: "https://www.westking.ac.uk/" },
  { country: "uk", name: "Burton and South Derbyshire College", ko: "버튼 앤 사우스 더비셔 칼리지", city: "버튼어폰트렌트", latlng: [52.8036, -1.6366], type: "편입학", url: "https://www.bsdc.ac.uk/" },
  { country: "au", name: "TAFE Queensland", ko: "퀸즐랜드 TAFE", city: "브리즈번", latlng: [-27.4785, 153.0225], type: "편입학", url: "https://tafeqld.edu.au/" },
  { country: "au", name: "James Cook University Brisbane", ko: "제임스쿡대학교 브리즈번", city: "브리즈번", latlng: [-27.4669, 153.027], type: "편입학", url: "https://www.jcub.edu.au/" },
  { country: "au", name: "Southern Cross University", ko: "서던크로스대학교", city: "골드코스트", latlng: [-28.1666, 153.516], type: "편입학", url: "https://www.scu.edu.au/" },
  { country: "au", name: "TAFE NSW Northern Sydney", ko: "TAFE NSW 노던 시드니", city: "시드니", latlng: [-33.7036, 151.099], type: "편입학", url: "https://www.tafensw.edu.au/" },
  { country: "us", name: "University of West Florida", ko: "웨스트플로리다대학교", city: "펜서콜라", latlng: [30.549, -87.217], type: "편입학", url: "https://www.uwf.edu/" },
  { country: "ca", name: "LaSalle College Vancouver", ko: "라살 칼리지 밴쿠버", city: "밴쿠버", latlng: [49.2627, -123.103], type: "편입학", url: "https://www.lasallecollegevancouver.com/" },
  { country: "jp", name: "Jikei Group", ko: "지케이학원 그룹", city: "도쿄·오사카", latlng: [35.6895, 139.6917], type: "편입학", url: "https://www.jikeicom.jp/" },
  { country: "jp", name: "Denpa Gakuen Group", ko: "덴파학원 그룹", city: "도쿄", latlng: [35.656, 139.699], type: "편입학", url: "http://www.denpa.jp/" },
  { country: "jp", name: "Saga Women's Junior College", ko: "사가여자단기대학", city: "사가", latlng: [33.2635, 130.3009], type: "편입학", url: "http://www.asahigakuen.ac.jp/sajotan" },
  { country: "my", name: "SEGi University & Colleges", ko: "SEGi 대학교", city: "쿠알라룸푸르", latlng: [3.159, 101.588], type: "TVET 교류", url: "https://www.segi.edu.my/" },
  { country: "th", name: "Siam Business Administration Technological College (SBAC)", ko: "시암 경영기술대학 (SBAC)", city: "방콕", latlng: [13.7563, 100.5018], type: "TVET 교류", url: "" },
  { country: "uz", name: "TIIAME National Research University", ko: "TIIAME 국립연구대학교", city: "타슈켄트", latlng: [41.342, 69.336], type: "국제협력", url: "" },
  { country: "uz", name: "Samarkand Vocational Training Center", ko: "사마르칸트 직업훈련원 (KOICA)", city: "사마르칸트", latlng: [39.6542, 66.9597], type: "국제협력", url: "" },
  { country: "bo", name: "CEA-KOREA", ko: "볼리비아 기술직업훈련원 (KOICA)", city: "엘알토", latlng: [-16.504, -68.163], type: "국제협력", url: "" },
];

/* 학년도별 파견 실적 (국제처 홈페이지 기준) */
const HISTORY = {
  paran: {
    2019: { us: 15, uk: 15, cz: 20, vn: 20 },
    2021: { uk: 19, au: 39 },
    2022: { us: 30, au: 30, my: 30 },
    2023: { us: 20, au: 20, my: 21 },
    2024: { us: 20, au: 20, my: 20 },
    2025: { uk: 16, au: 16, my: 28 },
    2026: { uk: 20, au: 20, my: 30 },
  },
  dream: {
    2025: { au: 12 },
    2026: { ca: 10, au: 20, jp: 20 },
  },
  fieldwork: {
    2014: { us: 1, fi: 5, my: 4 },
    2015: { us: 1, ca: 3, fi: 6, sg: 1, my: 6 },
    2016: { uk: 2, de: 1, au: 1, fi: 2, my: 5 },
    2017: { uk: 7, ca: 1, au: 5, my: 3, ph: 1, cn: 2 },
    2018: { us: 6, uk: 2, au: 2, ca: 2, my: 5, jp: 1, cn: 3 },
    2019: { us: 7, ca: 2, uk: 3, cz: 1, mt: 2, my: 4, vn: 2, jp: 1, cn: 2 },
    2021: { uk: 24, jp: 1 },
    2022: { uk: 10, au: 20 },
    2023: { uk: 4, au: 5, my: 2, ph: 1, cn: 1 },
    2024: { uk: 2, au: 7, my: 13, jp: 1 },
    2025: { uk: 4, au: 3, my: 6, tw: 1, jp: 1, ca: 4 },
    2026: { uk: 1, au: 3, my: 4, ca: 2 },
  },
};

