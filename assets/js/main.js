(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s = "") => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const initials = s => (s || "?").replace(/[^\p{L}\p{N} ]/gu, "").trim().split(/\s+/).map(w => [...w][0]).join("").slice(0, 2).toUpperCase();

  /* ---------- Profile ---------- */
  document.title = `${PROFILE.name} · 作品集`;
  $$("[data-handle]").forEach(el => (el.textContent = PROFILE.handle));
  $$("[data-name]").forEach(el => (el.textContent = PROFILE.name));
  $$("[data-location]").forEach(el => (el.textContent = PROFILE.location));
  $$("[data-year]").forEach(el => (el.textContent = new Date().getFullYear()));
  $$("[data-count]").forEach(el => (el.textContent = PROJECTS.length));
  $$("[data-role]").forEach(el => (el.textContent = PROFILE.role || ""));
  $$("[data-resume]").forEach(el => {
    if (PROFILE.links.resume) el.href = PROFILE.links.resume;
    else if (PROFILE.links.github) { el.href = PROFILE.links.github; el.textContent = "GitHub ↗"; }
    else el.remove();
  });
  $("[data-bio]").textContent = PROFILE.bio;
  $$("[data-avatar]").forEach(el => {
    el.innerHTML = PROFILE.avatar ? `<img src="${esc(PROFILE.avatar)}" alt="">` : esc(PROFILE.initials || initials(PROFILE.name));
  });

  // Stats
  const stats = $("[data-stats]");
  if (PROFILE.stats?.length) {
    stats.innerHTML = PROFILE.stats.map(s => `<div class="stat"><dt>${esc(s.label)}</dt><dd>${esc(s.value)}</dd></div>`).join("");
  } else stats.remove();

  // Skill groups
  const sg = $("[data-skill-groups]");
  if (typeof SKILL_GROUPS !== "undefined" && SKILL_GROUPS.length) {
    sg.innerHTML = SKILL_GROUPS.map((g, i) => `
      <div class="skillcard reveal" style="transition-delay:${(i % 3) * 80}ms">
        <h3><span class="swatch c-${esc(g.color || "coral")}"></span>${esc(g.title)}</h3>
        <ul>${g.items.map(x => `<li>${esc(x)}</li>`).join("")}</ul>
      </div>`).join("");
  } else sg.closest("section").remove();

  // Headline: last line gets the yellow highlight
  const lines = PROFILE.headline.split("\n");
  $("[data-headline]").innerHTML = lines
    .map((l, i) => (i === lines.length - 1 ? `<span class="hl">${esc(l)}</span>` : esc(l)))
    .join("\n");

  // Skills marquee (duplicated for seamless loop)
  const skills = PROFILE.skills.map(s => `<span>${esc(s)}</span>`).join("");
  $("[data-skills]").innerHTML = skills + skills + skills + skills;

  /* ---------- Projects ---------- */
  const catLabel = id => (CATEGORIES.find(c => c.id === id) || {}).label || "";
  const cardHTML = (p, i) => `
    <article class="card reveal" data-cat="${esc(p.category)}" style="transition-delay:${(i % 3) * 80}ms">
      <div class="card__thumb">
        ${p.image
          ? `<img src="${esc(p.image)}" alt="${esc(p.title)} 截圖" loading="lazy">`
          : `<div class="card__ph c-${esc(p.color || "coral")}"><span>${esc(p.mark || initials(p.subtitle || p.title))}</span></div>`}
        ${p.category ? `<span class="card__cat">${esc(catLabel(p.category))}</span>` : ""}
        ${p.period ? `<span class="card__period">${esc(p.period)}</span>` : ""}
      </div>
      <div class="card__body">
        <h3 class="card__title">${esc(p.title)}</h3>
        ${p.subtitle ? `<div class="card__sub">${esc(p.subtitle)}</div>` : ""}
        ${p.company || p.role ? `<div class="card__sub">${esc([p.company, p.role].filter(Boolean).join(" · "))}</div>` : ""}
        <p class="card__desc">${esc(p.description)}</p>
        ${p.impact ? `<div class="card__impact"><span>成果</span>${esc(p.impact)}</div>` : ""}
        ${[["🏭", "產業", p.industry], ["👥", "誰在用", p.users], ["🎯", "解決的問題", p.problem], ["🧑‍💼", "我的角色", p.myRole], ["🤝", "團隊", p.team]].some(f => f[2])
          ? `<dl class="facts">${[["🏭", "產業", p.industry], ["👥", "誰在用", p.users], ["🎯", "解決的問題", p.problem], ["🧑‍💼", "我的角色", p.myRole], ["🤝", "團隊", p.team]]
              .filter(f => f[2]).map(([ic, lb, v]) => `<div><dt><span aria-hidden="true">${ic}</span>${lb}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>`
          : ""}
        ${p.points?.length ? `<ul class="card__points">${p.points.map(x => `<li>${esc(x)}</li>`).join("")}</ul>` : ""}
        <div class="tags">${(p.tags || []).map(t => `<span class="tag">${esc(t)}</span>`).join("")}</div>
        ${p.links?.length ? `<div class="card__links">${p.links.map(l => `<a href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join("")}</div>` : ""}
      </div>
    </article>`;
  $("[data-grid]").innerHTML = PROJECTS.map(cardHTML).join("");

  // Side projects
  const side = $("[data-side]");
  const sideList = typeof SIDE_PROJECTS !== "undefined" ? SIDE_PROJECTS : [];
  if (sideList.length) side.innerHTML = sideList.map(cardHTML).join("");
  else side.closest("section").remove();

  // Filter chips (only show categories that have projects)
  const count = id => (id === "all" ? PROJECTS.length : PROJECTS.filter(p => p.category === id).length);
  const chips = $("[data-chips]");
  chips.innerHTML = CATEGORIES.filter(c => count(c.id) > 0)
    .map((c, i) => `<button class="chip" role="tab" aria-selected="${i === 0}" data-filter="${esc(c.id)}">${esc(c.label)}<span class="n">${count(c.id)}</span></button>`)
    .join("");
  chips.addEventListener("click", e => {
    const btn = e.target.closest("[data-filter]");
    if (!btn) return;
    $$(".chip", chips).forEach(c => c.setAttribute("aria-selected", c === btn));
    const f = btn.dataset.filter;
    $$(".card", $("[data-grid]")).forEach(card => {
      const show = f === "all" || card.dataset.cat === f;
      card.classList.toggle("is-hidden", !show);
      if (show) card.classList.add("is-in");
    });
  });

  /* ---------- Case studies ---------- */
  const cases = $("[data-cases]");
  const caseList = typeof CASE_STUDIES !== "undefined" ? CASE_STUDIES : [];
  const list = arr => `<ul>${arr.map(x => `<li>${esc(x)}</li>`).join("")}</ul>`;
  const block = (label, cls, body) => body ? `<div class="case__block ${cls}"><h4>${label}</h4>${body}</div>` : "";
  if (caseList.length) {
    cases.innerHTML = caseList.map((c, i) => {
      const imgs = c.images || [];
      const gallery = imgs.length ? `<div class="case__gallery">${imgs.map(im => im.src
        ? `<figure><button type="button" class="case__img" data-zoom="${esc(im.src)}" data-cap="${esc(im.caption || "")}"><img src="${esc(im.src)}" alt="${esc(im.caption || c.title)}" loading="lazy"></button>${im.caption ? `<figcaption>${esc(im.caption)}</figcaption>` : ""}</figure>`
        : `<figure><div class="case__ph"><span>＋</span>放入截圖<small>${esc(im.caption || "")}</small></div></figure>`).join("")}</div>` : "";
      return `
      <article class="case reveal ${imgs.length ? "" : "case--noimg"}">
        <header class="case__head">
          <span class="case__num c-${esc(c.color || "coral")}">${String(i + 1).padStart(2, "0")}</span>
          <div>
            <h3>${esc(c.title)}</h3>
            <div class="case__meta">${esc([c.company, c.role, c.period, c.team].filter(Boolean).join(" · "))}${c.status ? ` <span class="case__status">${esc(c.status)}</span>` : ""}</div>
          </div>
        </header>
        <div class="tags">${(c.tags || []).map(t => `<span class="tag">${esc(t)}</span>`).join("")}</div>
        <div class="case__body">
          <div class="case__text">
            ${block("背景", "is-bg", c.background ? `<p>${esc(c.background)}</p>` : "")}
            ${block("問題", "is-problem", c.problem ? `<p>${esc(c.problem)}</p>` : "")}
            ${block("痛點 → 解法", "is-problem", c.compare?.length ? `<div class="compare">${c.compare.map(([a, b]) => `<div class="compare__row"><span class="compare__pain">${esc(a)}</span><span class="compare__arrow" aria-hidden="true">→</span><span class="compare__fix">${esc(b)}</span></div>`).join("")}</div>` : "")}
            ${block("我的做法", "is-approach", c.approach?.length ? list(c.approach) : "")}
            ${block(esc(c.resultLabel || "成果"), "is-result", c.result?.length ? list(c.result) : "")}
          </div>
          ${gallery}
        </div>
      </article>`;
    }).join("");
  } else cases.closest("section").remove();

  // Lightbox
  const lb = $("[data-lightbox]");
  document.addEventListener("click", e => {
    const z = e.target.closest("[data-zoom]");
    if (!z || !lb.showModal) return;
    $("[data-lightbox-img]").src = z.dataset.zoom;
    $("[data-lightbox-img]").alt = z.dataset.cap;
    $("[data-lightbox-cap]").textContent = z.dataset.cap;
    lb.showModal();
  });
  lb.addEventListener("click", e => { if (e.target === lb || e.target.closest("[data-lightbox-close]")) lb.close(); });

  /* ---------- Story & WIP ---------- */
  $("[data-story]").innerHTML = STORY.map(s => `
    <li class="tl reveal">
      <span class="tl__year">${esc(s.year)}</span>
      <div class="tl__box">
        <h3>${esc(s.title)}${s.org ? ` <span class="tl__org">@ ${esc(s.org)}</span>` : ""}</h3>
        ${s.period ? `<div class="tl__period">${esc(s.period)}</div>` : ""}
        <p>${esc(s.text)}</p>
      </div>
    </li>`).join("");

  const wip = $(".wip");
  const box = typeof HIGHLIGHTS !== "undefined" ? HIGHLIGHTS
            : { title: "還在私人 repo 裡的東西", icon: "🔒", items: typeof IN_PROGRESS !== "undefined" ? IN_PROGRESS : [] };
  if (box.items?.length) {
    $("[data-hl-title]").textContent = box.title;
    $("[data-wip]").innerHTML = box.items
      .map(w => `<li><strong>${esc(box.icon || "")} ${esc(w.title)}</strong><span>${esc(w.text)}</span></li>`).join("");
  } else wip.remove();

  /* ---------- Contact ---------- */
  const C = typeof CONTACT !== "undefined" ? CONTACT : {};
  const L = PROFILE.links;

  // Value props
  const vals = typeof VALUE_PROPS !== "undefined" ? VALUE_PROPS : [];
  if (vals.length) {
    $("[data-values]").innerHTML = vals.map((v, i) => `
      <div class="value reveal" style="transition-delay:${i * 80}ms">
        <span class="value__icon c-${esc(v.color || "coral")}">${esc(v.icon || String(i + 1))}</span>
        <h3>${esc(v.title)}</h3>
        <p>${esc(v.text)}</p>
      </div>`).join("");
  } else {
    $("[data-values]").remove();
    $("#contact .section__head h2").remove();
  }

  // Status, headline, prefs
  if (C.open) $("[data-status-text]").textContent = C.status || "正在尋找新機會";
  else $("[data-status]").remove();
  $("[data-contact-headline]").textContent = C.headline || "有專案想聊聊？";
  $("[data-contact-text]").textContent = C.text || "";
  const prefs = $("[data-prefs]");
  if (C.prefs?.length) prefs.innerHTML = C.prefs.map(p => `<div><dt>${esc(p.label)}</dt><dd>${esc(p.value)}</dd></div>`).join("");
  else prefs.remove();
  const resp = $("[data-response]");
  if (C.response && L.email) resp.textContent = C.response; else resp.remove();

  // Buttons
  const contact = [];
  if (L.email) {
    const mail = `mailto:${L.email}?subject=${encodeURIComponent(C.resumeSubject || "索取完整履歷")}&body=${encodeURIComponent(C.resumeBody || "")}`;
    contact.push(`<a class="btn btn--dark" href="${esc(mail)}">索取完整履歷 ✉</a>`);
    contact.push(`<button class="btn" type="button" data-copy="${esc(L.email)}">複製 Email</button>`);
  }
  if (L.resume) contact.push(`<a class="btn" href="${esc(L.resume)}" target="_blank" rel="noopener">完整履歷 ↗</a>`);
  if (L.linkedin) contact.push(`<a class="btn" href="${esc(L.linkedin)}" target="_blank" rel="noopener">LinkedIn ↗</a>`);
  if (L.github) contact.push(`<a class="btn" href="${esc(L.github)}" target="_blank" rel="noopener">GitHub ↗</a>`);
  $("[data-contact]").innerHTML = contact.join("");

  // Copy email + toast
  const toast = $("[data-toast]");
  let toastTimer;
  const showToast = msg => {
    toast.textContent = msg; toast.classList.add("is-on");
    clearTimeout(toastTimer); toastTimer = setTimeout(() => toast.classList.remove("is-on"), 2200);
  };
  document.addEventListener("click", async e => {
    const b = e.target.closest("[data-copy]");
    if (!b) return;
    try { await navigator.clipboard.writeText(b.dataset.copy); showToast(`已複製 ${b.dataset.copy}`); }
    catch (err) { showToast(b.dataset.copy); }
  });

  // Floating "contact me" button: hide while contact section is on screen
  const fab = $("[data-fab]");
  if ("IntersectionObserver" in window) {
    new IntersectionObserver(([en]) => fab.classList.toggle("is-hidden", en.isIntersecting), { threshold: 0.05 })
      .observe($("#contact"));
  }

  /* ---------- Section numbering & alternating backgrounds ---------- */
  $$("main > section.section").forEach((sec, i) => {
    sec.classList.toggle("section--alt", i % 2 === 0);
    const k = $("[data-kicker]", sec);
    if (k) k.textContent = `${String(i + 1).padStart(2, "0")} / ${k.dataset.kicker}`;
  });
  // hide nav links whose section was removed
  $$(".nav__links a[href^='#']").forEach(a => { if (!document.querySelector(a.getAttribute("href"))) a.remove(); });

  /* ---------- Theme toggle ---------- */
  $("[data-theme-toggle]").addEventListener("click", () => {
    const root = document.documentElement;
    const cur = root.dataset.theme || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = cur === "dark" ? "light" : "dark";
    root.dataset.theme = next;
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  /* ---------- Scroll reveal ---------- */
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
    }, { threshold: 0.12 });
    $$(".reveal").forEach(el => io.observe(el));
  } else {
    $$(".reveal").forEach(el => el.classList.add("is-in"));
  }
})();
