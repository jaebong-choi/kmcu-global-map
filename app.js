/* 계명문화대학교 국제처 해외 프로그램 지도 */
(() => {
  const $ = (s) => document.querySelector(s);
  const root = document.documentElement;
  const store = (k, v) => { try { return v === undefined ? localStorage.getItem(k) : localStorage.setItem(k, v); } catch (e) { return null; } };

  /* ---------- 언어 ---------- */
  const LANG = new URLSearchParams(location.search).get("lang") || store("lang") || "ko";
  const EN = LANG === "en";
  const tx = (ko, en) => (EN ? en : ko);
  const tr = (ko) => (EN && PHR[ko]) || ko;
  root.lang = LANG;
  if (EN) {
    // 언어 전환은 새로고침 방식 → 로드 시 한 번만 데이터를 영문으로 교체
    document.title = "Overseas Programs Map | KMCU International";
    document.querySelectorAll("[data-en]").forEach((el) => (el.innerHTML = el.dataset.en));
    PROGRAMS.forEach((p) => Object.assign(p, { en: p.name }, EN_PROGRAMS[p.id]));
    COUNTRIES.forEach((c) => { [c.ko, c.en] = [c.en, c.ko]; c.region = tr(c.region); });
    STEPS.forEach((s) => (s.title = tr(s.title)));
    INSTITUTIONS.forEach((i) => { i.city = tr(i.city); i.ko = ""; });
  }

  /* ---------- 언어 · 테마 버튼 ---------- */
  const themeBtn = $('[data-act="theme"]');
  const setThemeLabel = () => (themeBtn.textContent = root.dataset.theme === "dark" ? tx("라이트 모드", "Light mode") : tx("다크 모드", "Dark mode"));
  setThemeLabel();
  $('[data-act="lang"]').textContent = EN ? "한국어" : "ENG";
  document.addEventListener("click", (e) => {
    const act = e.target.closest("[data-act]")?.dataset.act;
    if (act === "theme") {
      root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
      store("theme", root.dataset.theme); setThemeLabel();
    } else if (act === "lang") {
      const next = EN ? "ko" : "en";
      store("lang", next); location.search = "?lang=" + next; // 현재 화면(hash)은 유지됨
    } else if (act === "top") {
      scrollTo({ top: 0, behavior: "smooth" });
    }
  });

  /* ---------- 데이터 헬퍼 ---------- */
  const P = Object.fromEntries(PROGRAMS.map((p) => [p.id, p]));
  const C = Object.fromEntries(COUNTRIES.map((c) => [c.id, c]));
  const flag = (c, w = 40) => `https://flagcdn.com/w${w}/${c.flag}.png`;
  const esc = (s) => String(s).replace(/[&<>"]/g, (m) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[m]));
  const short = (p) => p.name.replace(/ (글로벌 서비스러닝|Global Service-Learning)$/, "");
  const stepLabel = (p) => (p.step ? `STEP ${p.step}` : tx("기타", "Other"));
  const stepName = (p) => (p.step ? STEPS[p.step - 1].title : tr(p.id === "transfer" ? "진학" : "국제협력"));
  const INST_TYPE = { transfer: "편입학", tvet: "TVET 교류", koica: "국제협력" };

  const isDest = (c) => c.status === "active" || c.status === "partner"; // 한국(home)·과거 국가 제외
  const progsFor = (cid) => PROGRAMS.filter((p) => p.countries.includes(cid));
  const instsFor = (cid) => INSTITUTIONS.filter((i) => i.country === cid);
  const destsSorted = () => COUNTRIES.filter(isDest).sort((a, b) => progsFor(b.id).length - progsFor(a.id).length);

  const historyRows = (filterFn) => {
    const rows = [];
    for (const [pid, years] of Object.entries(HISTORY))
      for (const [y, m] of Object.entries(years))
        for (const [cid, n] of Object.entries(m)) if (filterFn(pid, cid)) rows.push({ pid, year: +y, cid, n });
    return rows;
  };
  const sum = (rows) => rows.reduce((a, r) => a + r.n, 0);

  // 아메리카 대륙은 태평양 건너편(동쪽)에 그려지도록 경도 보정
  const W = ([lat, lng]) => [lat, lng < -30 ? lng + 360 : lng];

  /* ---------- 숫자 띠 ---------- */
  const destN = COUNTRIES.filter(isDest).length, pastN = COUNTRIES.filter((c) => c.status === "past").length;
  const sentN = sum(historyRows(() => true)).toLocaleString();
  $("#statProg").textContent = tx(`${PROGRAMS.length}개`, PROGRAMS.length);
  $("#statCountry").textContent = tx(`${destN}개국`, destN);
  $("#statSent").textContent = tx(`${sentN}명`, sentN);
  $("#statPast").textContent = tx(`과거 파견 국가 ${pastN}개국 별도`, `Plus ${pastN} past destinations`);

  /* ---------- 단계별 프로그램 카드 + 탭 ---------- */
  const href = (p) => (p.campus ? "#/c/kr" : "#/p/" + p.id);
  $("#progCards").innerHTML = PROGRAMS.map((p) => `<a class="pcard s${p.step}" href="${href(p)}" data-step="${p.step}">
      <div class="visual"><strong>${esc(p.name)}</strong>
        <span class="flags">${p.countries.map((c) => `<img src="${flag(C[c], 80)}" alt="${esc(C[c].ko)}">`).join("")}</span>
        <span class="plus" aria-hidden="true">+</span></div>
      <div class="meta"><span class="tag">${p.step ? `STEP ${p.step} · ` : ""}${esc(stepName(p))}</span>${p.support ? `<b>${esc(p.support)}</b>` : ""}</div>
      <p>${esc(p.tagline)}</p></a>`).join("");

  const tabs = [["all", tx("전체", "All")], ...STEPS.map((s) => [String(s.n), `STEP ${s.n} ${s.title}`]), ["0", tx("기타", "Other")]];
  $("#stepTabs").innerHTML = tabs.map(([k, label], i) => `<button type="button" data-tab="${k}" aria-pressed="${!i}"${i ? "" : ' class="on"'}>${esc(label)}</button>`).join("");
  $("#stepTabs").addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    $("#stepTabs").querySelectorAll("button").forEach((x) => { x.classList.toggle("on", x === b); x.setAttribute("aria-pressed", x === b); });
    document.querySelectorAll(".pcard").forEach((c) => (c.hidden = b.dataset.tab !== "all" && c.dataset.step !== b.dataset.tab));
  });

  /* ---------- 빠른 찾기 (프로그램 / 국가) ---------- */
  const selP = $("#progSelect"), selC = $("#countrySelect");
  selP.innerHTML = `<option value="">${tx("전체", "All")}</option><option value="c/kr">${tx("교내 프로그램", "On-campus programs")}</option>` +
    PROGRAMS.filter((p) => !p.campus).map((p) => `<option value="p/${p.id}">${esc(p.name)}</option>`).join("");
  selC.innerHTML = `<option value="">${tx("전체", "All")}</option>` +
    [C.kr, ...destsSorted(), ...COUNTRIES.filter((c) => c.status === "past")].map((c) => `<option value="c/${c.id}">${esc(c.ko)}</option>`).join("");
  selP.addEventListener("change", () => (selC.value = ""));
  selC.addEventListener("change", () => (selP.value = ""));
  $("#quick").addEventListener("submit", (e) => {
    e.preventDefault();
    location.hash = "#/" + (selC.value || selP.value);
    $("#explore").scrollIntoView({ behavior: "smooth" });
  });

  /* ---------- 지도 ---------- */
  const map = L.map("map", { minZoom: 1, maxZoom: 12, zoomSnap: 0.25 }).setView([30, 120], 2);
  const zoomClass = () => map.getContainer().classList.toggle("z-low", map.getZoom() < 3.5);
  map.on("zoomend", zoomClass); zoomClass();
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  const lineLayer = L.layerGroup().addTo(map);
  const instLayer = L.layerGroup().addTo(map);

  const markers = {};
  for (const c of COUNTRIES) {
    const html = c.status === "past"
      ? `<span class="mk past"></span>`
      : `<span class="mk ${c.status}"><img src="${flag(c)}" alt=""><span class="nm">${esc(c.ko)}</span></span>`;
    markers[c.id] = L.marker(W(c.latlng), {
      icon: L.divIcon({ className: "mk-icon", html, iconSize: [0, 0] }),
      title: c.ko, keyboard: true, zIndexOffset: c.status === "home" ? 1000 : 0,
    }).addTo(map).on("click", () => (location.hash = "#/c/" + c.id));
  }

  function arc(a, b) {
    const [y1, x1] = a, [y2, x2] = b;
    const dx = x2 - x1, dy = y2 - y1;
    const cx = (x1 + x2) / 2 - dy * 0.18, cy = (y1 + y2) / 2 + dx * 0.18;
    const pts = [];
    for (let t = 0; t <= 1.0001; t += 0.04)
      pts.push([(1 - t) ** 2 * y1 + 2 * (1 - t) * t * cy + t * t * y2, (1 - t) ** 2 * x1 + 2 * (1 - t) * t * cx + t * t * x2]);
    return pts;
  }

  const drawLines = (cids, className = "route") => {
    lineLayer.clearLayers();
    cids.forEach((cid) => L.polyline(arc(KMCU.latlng, W(C[cid].latlng)), { className, weight: 1.5, interactive: false }).addTo(lineLayer));
  };

  const drawInsts = (list) => {
    instLayer.clearLayers();
    list.forEach((i) => L.marker(W(i.latlng), { icon: L.divIcon({ className: "mk-icon", html: '<span class="pin"></span>', iconSize: [0, 0] }), zIndexOffset: 500 })
      .bindTooltip(`${esc(i.name)}<br>${esc(i.city)}`, { direction: "top", offset: [0, -6] }).addTo(instLayer));
  };

  const setMarkers = ({ highlight = null, selected = null }) => {
    for (const [cid, m] of Object.entries(markers)) {
      const el = m.getElement()?.querySelector(".mk"); if (!el) continue;
      el.classList.toggle("dim", !!highlight && !highlight.includes(cid) && cid !== "kr"); // 출발점(한국)은 항상 표시
      el.classList.toggle("sel", cid === selected);
    }
  };

  const fit = (latlngs, maxZoom) => {
    map.invalidateSize();
    if (latlngs.length === 1) map.flyTo(latlngs[0], maxZoom, { duration: 0.8 });
    else map.flyToBounds(L.latLngBounds(latlngs), { padding: [40, 40], maxZoom, duration: 0.8 });
  };

  /* ---------- 패널 ---------- */
  const panel = $("#panel");
  const back = `<a class="back" href="#/">${tx("전체 국가 보기", "All countries")}</a>`;

  const countryItem = (c) => `<li><a href="#/c/${c.id}"><img src="${flag(c)}" alt=""><div><b>${esc(c.ko)}</b><span>${progsFor(c.id).map((p) => esc(short(p))).join(", ")}</span></div></a></li>`;

  const progBody = (p) => `
    <table class="info"><tbody>${p.facts.map(([k, v]) => `<tr><th scope="row">${esc(k)}</th><td>${esc(v)}</td></tr>`).join("")}</tbody></table>
    <ul class="points">${p.points.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
    ${p.talk ? `<div class="talk"><strong>${tx("담당자 설명", "From the program staff")}</strong><p>${esc(p.talk)}</p></div>` : ""}
    ${p.notices ? `<div class="notices"><strong>${tx("관련 공지", "Related notices (Korean)")}</strong><ul>${p.notices.map(([d, t, idx]) =>
      `<li><a href="${NOTICE(idx)}" target="_blank" rel="noopener">${esc(t)}</a><time>${d}</time></li>`).join("")}</ul></div>` : ""}`;

  const progItem = (p, open) => `<details class="prog"${open ? " open" : ""}>
    <summary><b>${esc(p.name)}</b><span>${stepLabel(p)}${p.support ? " · " + esc(p.support) : ""}</span></summary>
    <div class="body"><p class="muted">${esc(p.tagline)}</p>${progBody(p)}
      <p class="links">${p.campus ? "" : `<a href="#/p/${p.id}">${tx("파견 국가 전체 보기", "All destinations")}</a>`}<a href="${p.link}" target="_blank" rel="noopener">${tx("국제처 안내 페이지", "Official page")}</a></p>
    </div></details>`;

  const histTable = (rows, keyFn, labelFn) => {
    if (!rows.length) return `<p class="muted">${tx("공개된 학년도별 실적이 없습니다.", "No yearly records published.")}</p>`;
    const byYear = {};
    for (const r of rows) { const y = (byYear[r.year] ||= {}); const k = keyFn(r); y[k] = (y[k] || 0) + r.n; }
    return `<table class="hist"><thead><tr><th>${tx("학년도", "Year")}</th><th>${tx("내역", "Breakdown")}</th><th class="n">${tx("인원", "Total")}</th></tr></thead><tbody>
      ${Object.keys(byYear).sort((a, b) => b - a).map((y) => `<tr><td>${y}</td>
        <td>${Object.entries(byYear[y]).map(([k, n]) => `${esc(labelFn(k))} ${n}`).join(", ")}</td>
        <td class="n">${Object.values(byYear[y]).reduce((a, b) => a + b, 0)}</td></tr>`).join("")}</tbody></table>`;
  };

  function showOverview() {
    const act = destsSorted(), total = sum(historyRows(() => true));
    setMarkers({});
    drawLines(act.map((c) => c.id));
    drawInsts([]);
    fit([KMCU.latlng, ...act.map((c) => W(c.latlng))], 3);
    panel.innerHTML = `<h2>${tx("국가 선택", "Countries")}</h2>
      <p class="muted">${tx("지도나 아래 목록에서 국가를 선택하세요.", "Select a country on the map or from the list below.")}</p>
      <ul class="clist">${[C.kr, ...act].map(countryItem).join("")}</ul>
      <p class="small">${tx("과거 파견 국가", "Past destinations")}: ${COUNTRIES.filter((c) => c.status === "past").map((c) => `<a href="#/c/${c.id}">${esc(c.ko)}</a>`).join(", ")}</p>
      <p class="small">${tx(`파란사다리·KMCU Dream 사다리·글로벌 현장학습 누적 파견 인원 ${total}명 (2014~2026학년도, 국제처 홈페이지 기준)`,
        `${total} students sent through Paran Ladder, Dream Ladder and Global Field Training (2014–2026, KMCU International website)`)}</p>`;
  }

  function showCountry(cid) {
    const c = C[cid], ps = progsFor(cid), insts = instsFor(cid), home = c.status === "home";
    const rows = historyRows((pid, x) => x === cid), sent = sum(rows);
    setMarkers({ selected: cid });
    drawLines(isDest(c) ? [cid] : []);
    drawInsts(insts);
    fit([W(c.latlng), ...insts.map((i) => W(i.latlng))], home ? 6 : 5);
    panel.innerHTML = `${back}
      <div class="head"><img src="${flag(c, 80)}" alt=""><div><h2>${esc(c.ko)}</h2><p>${esc(c.en)} · ${esc(c.region)}</p></div></div>
      ${home
        ? `<p>${tx("계명문화대학교(대구)에서 운영하는 교내 프로그램입니다. 교내 활동 실적은 해외 프로그램 선발 시 가산점으로 반영됩니다.", "On-campus programs at KMCU in Daegu. Participation counts as bonus points when you apply to overseas programs.")}</p>`
        : `<p class="summary">${tx("프로그램", "Programs")} <b>${ps.length}</b> · ${tx("협약·운영 기관", "Partners")} <b>${insts.length}</b>${sent ? ` · ${tx("누적 파견", "Sent")} <b>${sent}</b>${tx("명", "")}` : ""}</p>`}
      ${c.status === "past" ? `<p class="muted">${tx("현재 모집 중인 프로그램은 없으며, 과거 파견 실적이 있는 국가입니다.", "No programs are recruiting for this country now; students were sent here in the past.")}</p>` : ""}
      ${ps.length ? `<h3>${home ? tx("교내 프로그램", "On-campus programs") : tx("파견 프로그램", "Programs")}</h3>${ps.map((p) => progItem(p, ps.length === 1)).join("")}` : ""}
      ${insts.length ? `<h3>${tx("협약·운영 기관", "Partner institutions")}</h3><ul class="insts">${insts.map((i, k) => `<li data-k="${k}">
        <b>${esc(i.name)}</b><span>${[i.ko, i.city, tr(i.type)].filter(Boolean).map(esc).join(" · ")}</span>
        ${i.url ? `<a href="${i.url}" target="_blank" rel="noopener">${tx("홈페이지", "Website")}</a>` : ""}</li>`).join("")}</ul>` : ""}
      ${home ? "" : `<h3>${tx("학년도별 파견 실적", "Students sent by year")}</h3>${histTable(rows, (r) => r.pid, (k) => short(P[k]))}`}`;
    panel.querySelectorAll(".insts li").forEach((li) => li.addEventListener("click", (e) => {
      if (!e.target.closest("a")) map.flyTo(W(insts[+li.dataset.k].latlng), 10, { duration: 0.8 });
    }));
  }

  function showProgram(pid) {
    const p = P[pid], rows = HISTORY[pid] ? historyRows((x) => x === pid) : [];
    setMarkers({ highlight: p.countries });
    drawLines(p.countries, "route sel");
    drawInsts(INST_TYPE[pid] ? INSTITUTIONS.filter((i) => i.type === INST_TYPE[pid]) : []);
    fit([KMCU.latlng, ...p.countries.map((c) => W(C[c].latlng))], 4);
    panel.innerHTML = `${back}
      <p class="step-label">${stepLabel(p)} ${esc(stepName(p))}</p>
      <h2>${esc(p.name)}</h2>
      <p class="muted">${esc(p.en)}</p>
      <p>${esc(p.tagline)}</p>
      ${progBody(p)}
      <p class="links"><a href="${p.link}" target="_blank" rel="noopener">${tx("국제처 안내 페이지", "Official page")}</a></p>
      <h3>${tx("파견 국가", "Destinations")}</h3><ul class="clist">${p.countries.map((c) => countryItem(C[c])).join("")}</ul>
      ${rows.length ? `<h3>${tx("학년도별 파견 실적", "Students sent by year")}</h3>${histTable(rows, (r) => r.cid, (k) => C[k].ko)}` : ""}`;
  }

  /* ---------- 라우터: #/c/국가, #/p/프로그램 ---------- */
  function route() {
    const [kind, id] = location.hash.replace(/^#\/?/, "").split("/");
    if (kind === "c" && C[id]) showCountry(id);
    else if (kind === "p" && P[id] && !P[id].campus) showProgram(id);
    else showOverview();
    const key = `${kind}/${id}`;
    [selP, selC].forEach((s) => (s.value = [...s.options].some((o) => o.value === key) ? key : ""));
    panel.scrollTop = 0;
    if ($("#explore").getBoundingClientRect().top < -60) $("#explore").scrollIntoView({ behavior: "smooth" });
  }
  window.addEventListener("hashchange", route);
  route();
})();
