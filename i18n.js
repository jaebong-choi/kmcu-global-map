/* 영문 번역 — 한국어 원문은 data.js. 프로그램 내용을 바꾸면 여기도 같이 고쳐주세요. */

/* 짧은 문구: 한국어 원문 → 영문 */
const PHR = {
  "동기부여": "Motivation", "단기 프로그램": "Short-term programs",
  "실습 · 교환학생": "Internship · Exchange", "해외 취업": "Overseas jobs",
  "진학": "Further study", "국제협력": "Cooperation", "편입학": "Transfer", "TVET 교류": "TVET exchange",
  "유럽": "Europe", "오세아니아": "Oceania", "북미": "North America", "아시아": "Asia", "중앙아시아": "Central Asia", "남미": "South America",
  "런던": "London", "버튼어폰트렌트": "Burton upon Trent", "브리즈번": "Brisbane", "골드코스트": "Gold Coast", "시드니": "Sydney",
  "펜서콜라": "Pensacola", "밴쿠버": "Vancouver", "도쿄·오사카": "Tokyo · Osaka", "도쿄": "Tokyo", "사가": "Saga",
  "쿠알라룸푸르": "Kuala Lumpur", "방콕": "Bangkok", "타슈켄트": "Tashkent", "사마르칸트": "Samarkand", "엘알토": "El Alto",
};

const EN_PROGRAMS = {
  globalzone: {
    name: "Global Zone", tagline: "A drop-in space to get comfortable with English between classes",
    facts: [["Hours", "Weekdays 10:00–17:00 (closed during exams & vacations)"], ["Location", "Welfare Hall B1, across from the student cafeteria"], ["Who", "All enrolled students"], ["Cost", "Free"]],
    points: ["Always on: free talking & board games with resident international buddies", "Study Class: small-group language study, basic English conversation", "50 minutes of activity → KMCU integrated mileage → scholarships", "Bonus points when applying to overseas programs"],
    talk: "Think of it as an ‘English kindergarten’. International buddy students are always there, and you can pick up English while playing board games. Just sign in and out and collect a stamp — simply spending time there earns mileage toward scholarships.",
  },
  langedu: {
    name: "On-campus Language Courses", tagline: "Free language courses — fees fully refunded when you attend",
    facts: [["Terms", "Spring · Summer (late Jun–late Aug) · Fall · Winter (Jan) — check notices for dates"], ["In-person", "TOEIC, OPIc, Basic Japanese/JPT"], ["Online", "Santa TOEIC, Speak (English conversation), Hackers Japanese conversation"], ["Cost", "Free (₩50,000 commitment deposit, refunded on completion)"], ["Note", "In-person classes under 15 students close and can switch to online"]],
    points: ["Pre/post mock tests, free handouts and snacks (in-person)", "KMCU mileage, prizes for top completers", "Bonus points when applying to overseas programs", "Mileage scholarship for high official test scores"],
    talk: "We invite outside instructors to teach TOEIC and OPIc like a private academy — classes you'd normally pay a lot for are free here! Take an official test after the course and you earn even more mileage.",
  },
  buddy: {
    name: "Global Buddy Program", tagline: "Pair up with an international student and share campus life",
    facts: [["When", "During spring & fall semesters"], ["Who", "Enrolled students (incl. advanced degree course)"], ["Benefits", "Activity funds or 20–30 volunteer hours"]],
    points: ["Cultural activity support (meals, transport, admission)", "Awards for top teams after evaluation", "Natural conversation practice with international friends", "Buddies also recruited for visiting short-term students, e.g. from the UK (summer 2023)"],
    talk: "We have about 300 international students. It's not just matching pairs — you go out together for hanbok experiences, Apsan, Dongseongno, Gangjeong-bo and more, with activity funds and 20–30 volunteer hours. Top teams even get prize money!",
  },
  gsl: {
    name: "GS-L Global Service-Learning", tagline: "Education, volunteer work and environmental projects in neighboring countries", support: "~₩4M",
    facts: [["Duration", "About 2 weeks in summer or winter vacation"], ["Selection", "Apply early Apr → interview mid-Apr → results late Apr (summer 2026)"], ["Who", "Enrolled students (incl. advanced degree course)"], ["Funding", "About ₩4M per person"], ["Fee", "₩600,000"]],
    points: ["Covers: pre-departure training, volunteer uniform, airfare, lodging, meals", "Summer 2026: Mongolia"],
    talk: "Volunteering linked to your major or skills — nursing and EMT students teach CPR to elementary kids, early-childhood-education students teach tooth brushing with dental models. This year it's Mongolia, with recruitment in early April.",
  },
  paran: {
    name: "Paran Ladder", tagline: "Overseas training for underserved students, run by the Korea Student Aid Foundation", support: "~₩4.5–5M",
    facts: [["Duration", "4 weeks in summer vacation (Jul–Aug)"], ["Selection", "Apply in Apr → interview early May → results & orientation mid-May"], ["Who", "Eligibility based on income bracket (see recruitment notice)"], ["Funding", "About ₩4.5–5M per person"], ["Credits", "2 major credits"]],
    points: ["Covers: pre-departure training, airfare, tuition (lodging), cultural activities, final presentation (prizes)", "Out of pocket: local transport and meals"],
    talk: "Even airfare is covered, so you only pay for local transport and food. You visit companies and institutions, and you stay with a homestay family instead of a dorm — a close-up look at local life. If you're eligible, definitely apply!",
  },
  dream: {
    name: "KMCU Dream Ladder", tagline: "KMCU's own program — open to all enrolled students regardless of income", support: "~₩3–5M",
    facts: [["Duration", "4 weeks in summer or winter vacation"], ["Selection", "Summer: apply Apr–May → interview & results late May / Winter: apply Oct–Nov → interview & results Nov–Dec"], ["Who", "Enrolled students (incl. advanced degree course)"], ["Funding", "About ₩3–5M per person"]],
    points: ["Language study + company visits, special lectures, career workshops, team missions, cultural activities", "Covers: pre-departure training, airfare, tuition (lodging), cultural activities, final presentation (prizes)", "Bonus points for employment-vulnerable students · airfare support varies by income bracket", "Recent: summer 2025 Canada, winter 2025 Japan & Australia"],
    talk: "Because KMCU runs it, any enrolled student can apply regardless of income. Depending on your income bracket you may pay part of the airfare — the university covers everything else.",
  },
  fieldwork: {
    name: "Global Field Training", tagline: "One semester of language study + hands-on training in your major", support: "~₩6–10.8M",
    facts: [["Duration", "About 4 months (language + internship) · 1st sem. Jun–Aug (12 wks, early-childhood track) / 2nd sem. Aug–Dec (16 wks)"], ["Who", "General: 2+ semesters, 1st-year GPA 3.0+, language score / Open: 2+ semesters completed"], ["Funding", "About ₩6–10.8M per person (excess self-paid)"], ["Credits", "Up to 24 credits recognized"]],
    points: ["Run by the Korean Council for University College Education", "Covers: pre-departure training, partial airfare, tuition, training fees, visa fees, living allowance (employment-vulnerable students)", "Language: TOEIC 550, OPIc NH, JPT level 2, HSK level 3 or higher", "Selection: pre-registration & info session in Jan → interview in Mar → results early Apr"],
    talk: "Even though you're abroad for 4 months during the semester (2 months language + 2 months internship), you register for courses just like at home and get graded by your training site — it's often easier to earn good grades. Funding varies with each country's cost of living. You'll need a language score, so prepare early through the on-campus courses!",
  },
  tvet: {
    name: "ASEAN TVET Student Exchange", tagline: "A semester of English-taught courses and credits at ASEAN partner colleges", support: "~₩9.2M",
    facts: [["Project", "2024–2029 (5 years)"], ["Exchange", "2nd semester (4 months) · apply in Apr"], ["Who", "Enrolled students (incl. advanced degree course) · first-years welcome"], ["Funding", "About ₩9.2M per person (2024)"]],
    points: ["Up to 15 credits recognized", "Covers: airfare, tuition, training, lodging, ₩700,000 monthly allowance, etc.", "Thailand SBAC (designated) · Malaysia SEGi University (open)", "After return: submit a video & essay, take OPIc (fee covered)"],
    talk: "First-years can apply too! Only up to 15 credits transfer, though, so plan your graduation credits ahead. The ₩700,000 monthly allowance is paid in cash to your own bank account.",
  },
  kmove: {
    name: "K-Move School", tagline: "Domestic training → language study in the Philippines → a job in Malaysia", support: "~₩8.8M",
    facts: [["Duration", "6 months (language + job training)"], ["Who", "Students about to graduate (all majors)"], ["Funding", "About ₩8.8M per person"], ["Extra", "Overseas job settlement grant up to ₩5M"]],
    points: ["Talent program for global companies in Malaysia (customer support)", "Covers: pre-departure training, partial airfare, tuition, lodging, overseas insurance", "Interview & résumé support after training, follow-up care after hiring"],
    talk: "It doesn't just drop you into a job — over 6 months you go from domestic training to language study in the Philippines to a job abroad, with steady support. We connect you with employers, and the university covers training costs.",
  },
  jpcamp: {
    name: "Overseas Job Camp (Japan)", tagline: "A summer camp to experience job hunting in Japan",
    facts: [["Run", "Summer 2024 & 2025"], ["Selection", "Documents in Jun → interview late Jun → results early Jul"], ["Who", "Enrolled students (see recruitment notice)"]],
    points: ["Schedule and support are announced each year in the recruitment notice"],
  },
  transfer: {
    name: "Transfer to Partner Universities", tagline: "Continue your studies at a partner university abroad",
    facts: [["Language", "UK/Australia IELTS 6.5–7.0 / USA/Canada TOEFL iBT 80 or IELTS 6.5 / Japan JLPT N2"], ["Counseling", "Weekdays 10:00–12:00, 13:00–16:00 (individual consultation)"]],
    points: ["Conditional admission possible after reviewing language scores and grades", "Past example: exchange students to Saga Women's Junior College, Japan (fall 2022)"],
  },
  koica: {
    name: "International Development Cooperation", tagline: "Supporting vocational education in partner countries with KMCU's expertise",
    facts: [["Type", "KOICA civil society partnership · Leading university for international cooperation"]],
    points: ["Capacity building for CEA-KOREA vocational training center, El Alto, Bolivia", "Samarkand vocational training center, Uzbekistan, phases 1–3 (2019–2027)", "TIIAME mechatronics technicum, Uzbekistan (2024–2029)"],
  },
};
