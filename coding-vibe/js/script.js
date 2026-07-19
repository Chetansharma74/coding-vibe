// ============================================================
// Coding_Vibe — behavior
// ============================================================

document.getElementById('year').textContent = new Date().getFullYear();

/* ---------------- Icon set (single consistent stroke style) ---------------- */
const ICONS = {
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8 5L2 12l6 7M16 5l6 7-6 7"/></svg>',
  layout: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18"/></svg>',
  git: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="2.4"/><circle cx="6" cy="18" r="2.4"/><circle cx="18" cy="12" r="2.4"/><path d="M6 8.4V15.6M8.4 6H14a4 4 0 014 4v.2"/></svg>',
  terminal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M7 9l3 3-3 3M13 15h4"/></svg>',
  spark: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2z"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6z"/></svg>',
  cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 18a4 4 0 01-1-7.9 5 5 0 019.8-1.6A4.5 4.5 0 0117.5 18H7z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/></svg>',
  youtube: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="5" width="20" height="14" rx="4"/><path d="M10 9l5 3-5 3z" fill="currentColor" stroke="none"/></svg>',
  telegram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 4L3 11l6 2m12-9l-4 17-8-6m12-11L9 13"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 015 0c1.9-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.92.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0012 2z"/></svg>',
  leetcode: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3l-6 7 4 4-3 3M9 14l-2 2a3 3 0 004 4l3-3M13 18h6"/></svg>',
  linkedin: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.9 3.9 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1s2.48 1.1 2.48 2.5zM.2 8.5h4.6V23H.2V8.5zM8.4 8.5h4.4v2h.06c.6-1.1 2.1-2.3 4.3-2.3 4.6 0 5.4 3 5.4 7v8.8h-4.6v-7.8c0-1.9 0-4.3-2.6-4.3-2.6 0-3 2-3 4.1v8h-4.6V8.5z"/></svg>',
  note: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h10l3 3v14a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z"/><path d="M9 9h6M9 13h6M9 17h4"/></svg>',
  sheet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18M9 10v10"/></svg>',
  resume: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="3"/><path d="M5 21c0-3.9 3.1-6 7-6s7 2.1 7 6"/></svg>',
  map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4L3 6v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/></svg>',
  question: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 015 .5c0 1.7-2.5 1.8-2.5 3.5"/><circle cx="12" cy="17" r=".6" fill="currentColor" stroke="none"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5.5C4 4.7 4.7 4 6.5 4H12v16H6.5C4.7 20 4 19.3 4 18.5z"/><path d="M20 5.5c0-.8-.7-1.5-2.5-1.5H12v16h5.5c1.8 0 2.5-.7 2.5-1.5z"/></svg>',
  rocket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 3s4 .5 5.5 5.5-3 9-3 9l-3-1-1-3s5.5-1.5 5.5-5.5S14.5 3 14.5 3z"/><path d="M9.5 14.5L4 16l1.5-5.5L9.5 9M9 15l0 4-4-1"/></svg>',
};
const icon = (key) => ICONS[key] || ICONS.code;

/* ---------------- Render dynamic sections from data.js ---------------- */
function render(id, items, builder){
  const el = document.getElementById(id);
  if(!el) return;
  el.innerHTML = items.map(builder).join('');
}

render('skillsGrid', SKILLS, (s,i) => `
  <div class="glass card skill-card" onclick="openSkillDetail('${s.name}')" style="cursor:pointer;" data-aos="fade-up" data-aos-delay="${(i%5)*60}">
    <span class="icon" style="width:26px;height:26px">${icon(s.icon)}</span>
    <span>${s.name}</span>
  </div>`);

render('whatIDoGrid', WHAT_I_DO, (w,i) => `
  <div class="glass card whatido-card" data-aos="fade-up" data-aos-delay="${(i%4)*60}">
    <span class="icon" style="width:20px;height:20px">${icon(w.icon)}</span>
    <h3>${w.title}</h3>
    <p>${w.desc}</p>
  </div>`);

render('projectsGrid', PROJECTS, (p,i) => `
  <div class="glass card project-card" data-aos="fade-up" data-aos-delay="${(i%2)*80}">
    <div class="project-thumb">project preview</div>
    <h3>${p.title}</h3>
    <p>${p.desc}</p>
    <div class="project-tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div>
    <div class="project-links">
      <a href="${p.demo}" target="_blank" rel="noopener">Live Demo</a>
      <a href="${p.github}" target="_blank" rel="noopener">GitHub</a>
    </div>
  </div>`);

render('roadmapsGrid', ROADMAPS, (r,i) => `
  <div class="glass card roadmap-card" onclick="openRoadmapDetail('${r.id}')" data-aos="fade-up" data-aos-delay="${(i%3)*70}">
    <span class="icon" style="width:20px;height:20px">${icon('map')}</span>
    <h3>${r.title}</h3>
    <p class="roadmap-steps">${r.steps}</p>
  </div>`);

render('resourcesGrid', RESOURCES, (r,i) => `
  <div class="glass card resource-card" onclick="openResourceViewer('${r.icon}')" style="cursor:pointer;" data-aos="fade-up" data-aos-delay="${(i%4)*60}">
    <span class="icon" style="width:20px;height:20px">${icon(r.icon)}</span>
    <h3>${r.title}</h3>
    <p>${r.desc}</p>
  </div>`);

const socialCard = (s,i) => `
  <a class="glass card social-card" href="${s.url}" target="_blank" rel="noopener" data-aos="zoom-in" data-aos-delay="${(i%6)*50}">
    <span class="icon" style="width:26px;height:26px">${icon(s.icon)}</span>
    <strong>${s.name}</strong>
    <span>${s.handle}</span>
  </a>`;
render('socialGrid', SOCIALS, socialCard);
document.getElementById('footerSocial').innerHTML = SOCIALS.slice(0,5).map(s =>
  `<a href="${s.url}" target="_blank" rel="noopener" aria-label="${s.name}" style="width:20px;height:20px">${icon(s.icon)}</a>`
).join('');

render('testimonialsGrid', TESTIMONIALS, (t,i) => `
  <div class="glass card testimonial-card" data-aos="fade-up" data-aos-delay="${(i%3)*70}">
    <p class="quote">&ldquo;${t.quote}&rdquo;</p>
    <p class="who">— ${t.who}</p>
  </div>`);

render('faqList', FAQS, (f) => `
  <details class="glass faq-item">
    <summary>${f.q}</summary>
    <p class="faq-body">${f.a}</p>
  </details>`);

/* ---------------- Loader ---------------- */
window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  setTimeout(() => loader.classList.add('hidden'), 500);
});

/* ---------------- AOS init ---------------- */
if(window.AOS){ AOS.init({ duration: 700, once: true, offset: 60 }); }

/* ---------------- Theme toggle ---------------- */
const themeToggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('cv-theme');
if(savedTheme) document.body.setAttribute('data-theme', savedTheme);
themeToggle.addEventListener('click', () => {
  const next = document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  document.body.setAttribute('data-theme', next);
  localStorage.setItem('cv-theme', next);
});

/* ---------------- Mobile nav ---------------- */
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});
navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navLinks.classList.remove('open');
  navToggle.setAttribute('aria-expanded', false);
}));

/* ---------------- Scroll progress + back to top ---------------- */
const progress = document.getElementById('scroll-progress');
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  const h = document.documentElement;
  const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
  progress.style.width = scrolled + '%';
  backToTop.classList.toggle('visible', h.scrollTop > 500);
}, { passive: true });
backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ---------------- Custom cursor ---------------- */
const dot = document.getElementById('cursor-dot');
const ring = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;
window.addEventListener('mousemove', (e) => {
  mx = e.clientX; my = e.clientY;
  dot.style.left = mx + 'px'; dot.style.top = my + 'px';
});
(function loop(){
  rx += (mx - rx) * 0.15; ry += (my - ry) * 0.15;
  ring.style.left = rx + 'px'; ring.style.top = ry + 'px';
  requestAnimationFrame(loop);
})();
document.querySelectorAll('a, button, .card, .roadmap-card').forEach(el => {
  el.addEventListener('mouseenter', () => { ring.style.width = '52px'; ring.style.height = '52px'; ring.style.borderColor = 'rgba(0,245,255,0.9)'; });
  el.addEventListener('mouseleave', () => { ring.style.width = '34px'; ring.style.height = '34px'; ring.style.borderColor = 'rgba(0,245,255,0.5)'; });
});

/* ---------------- Typing effect (hero subtitle) ---------------- */
const typedEl = document.getElementById('typedSub');
const typedStrings = [
  'Master Python, AI, Web Development, Cyber Security, DevOps and modern technologies with Coding_Vibe.',
  'Learn through real projects, not just theory.',
  'One reel, one tutorial, one project at a time.'
];
let tsIndex = 0, tsChar = 0, tsDeleting = false;
function typeLoop(){
  const full = typedStrings[tsIndex];
  if(!tsDeleting){
    tsChar++;
    typedEl.textContent = full.slice(0, tsChar);
    if(tsChar === full.length){ tsDeleting = true; setTimeout(typeLoop, 1800); return; }
  } else {
    tsChar--;
    typedEl.textContent = full.slice(0, tsChar);
    if(tsChar === 0){ tsDeleting = false; tsIndex = (tsIndex + 1) % typedStrings.length; }
  }
  setTimeout(typeLoop, tsDeleting ? 20 : 35);
}
typeLoop();

/* ---------------- Particle background (lightweight canvas) ---------------- */
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
let particles = [];
function resizeCanvas(){
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
function initParticles(){
  const count = Math.min(70, Math.floor(window.innerWidth / 20));
  particles = Array.from({ length: count }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 1.6 + 0.4,
    vx: (Math.random() - 0.5) * 0.25,
    vy: (Math.random() - 0.5) * 0.25,
  }));
}
function drawParticles(){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'rgba(0,245,255,0.55)';
  particles.forEach(p => {
    p.x += p.vx; p.y += p.vy;
    if(p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if(p.y < 0 || p.y > canvas.height) p.vy *= -1;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(drawParticles);
}
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
resizeCanvas(); initParticles();
if(!prefersReducedMotion){ drawParticles(); }
window.addEventListener('resize', () => { resizeCanvas(); initParticles(); });

/* ---------------- GSAP hero entrance ---------------- */
if(window.gsap){
  gsap.from('.hero-title .line', { y: 40, opacity: 0, duration: 0.8, stagger: 0.12, ease: 'power3.out' });
  gsap.from('.hero-ctas .btn', { y: 20, opacity: 0, duration: 0.7, delay: 0.5, stagger: 0.1 });
}

/* ---------------- Contact + newsletter (demo handlers) ---------------- */
document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('formNote').textContent = "Thanks! Your message has been saved locally. In production, connect this to Formspree, Formcarry or a custom API.";
  showToast("Message sent successfully (mocked)!");
  e.target.reset();
});
document.getElementById('newsletterForm').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
  showToast("Subscribed to Coding_Vibe Newsletter!");
});

/* ---------------- Modal Controller ---------------- */
const modal = document.getElementById('interactiveModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

function openModal(title, htmlContent) {
  modalTitle.textContent = title;
  modalBody.innerHTML = htmlContent;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  modalBody.innerHTML = '';
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.classList.contains('open')) closeModal();
});

/* ---------------- Toast Notification ---------------- */
function showToast(message) {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
    <span>${message}</span>
  `;
  container.appendChild(toast);

  // Fade out
  setTimeout(() => {
    toast.classList.add('toast-fadeout');
    toast.addEventListener('animationend', () => toast.remove());
  }, 2700);
}

/* ---------------- Copy to Clipboard ---------------- */
window.copyToClipboard = function(text, btn) {
  navigator.clipboard.writeText(text).then(() => {
    const origText = btn.textContent;
    btn.textContent = "Copied!";
    btn.style.color = "#10B981";
    showToast("Copied to clipboard!");
    setTimeout(() => {
      btn.textContent = origText;
      btn.style.color = "";
    }, 1500);
  }).catch(err => {
    console.error("Clipboard copy failed: ", err);
  });
};

/* ---------------- Skill Detail Popup ---------------- */
window.openSkillDetail = function(skillName) {
  const skill = SKILLS.find(s => s.name === skillName);
  if (!skill) return;

  const html = `
    <div class="skill-detail-layout">
      <div class="skill-meta-row">
        <span class="skill-meta-chip difficulty-${skill.difficulty.toLowerCase().split(' ')[0]}">Difficulty: ${skill.difficulty}</span>
        <span class="skill-meta-chip">Est. Time: ${skill.time}</span>
      </div>
      <p class="skill-description">${skill.desc}</p>
      <p><strong>Primary Use Cases:</strong> ${skill.useCases}</p>
      
      <div class="skill-snippet-title">Quick Code Example:</div>
      <div class="code-block-container">
        <div class="code-block-header">
          <span>${skill.name.toLowerCase()}</span>
          <button class="code-block-copy-btn" onclick="copyToClipboard(\`${skill.snippet.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`, this)">Copy Code</button>
        </div>
        <pre><code>${escapeHTML(skill.snippet)}</code></pre>
      </div>
      
      <div style="margin-top: 15px;">
        <a href="${skill.resource}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">Official Documentation</a>
      </div>
    </div>
  `;

  openModal(skill.name, html);
};

/* Helper to escape HTML tags */
function escapeHTML(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/* ---------------- Roadmap Details & Checklist ---------------- */
window.openRoadmapDetail = function(roadmapId) {
  const roadmap = ROADMAPS.find(r => r.id === roadmapId);
  if (!roadmap) return;

  renderRoadmapContent(roadmap);
};

function renderRoadmapContent(roadmap) {
  // Load progress from localStorage
  const progressKey = 'cv-progress-' + roadmap.id;
  let completedIndices = JSON.parse(localStorage.getItem(progressKey) || "[]");

  const totalSteps = roadmap.detailedSteps.length;
  const progressPercent = Math.round((completedIndices.length / totalSteps) * 100) || 0;

  let stepsHTML = roadmap.detailedSteps.map((step, idx) => {
    const isChecked = completedIndices.includes(idx);
    const checkClass = isChecked ? 'checked' : '';
    
    let topicsHTML = step.topics.map(t => `<div class="step-topic-item">${t}</div>`).join('');

    return `
      <div class="roadmap-modal-step">
        <div class="step-checkbox-wrapper">
          <div class="step-checkbox ${checkClass}" onclick="toggleRoadmapStep('${roadmap.id}', ${idx})" aria-label="Toggle step completion" role="checkbox" aria-checked="${isChecked}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        </div>
        <div class="step-details">
          <h3>Step ${idx + 1}: ${step.name}</h3>
          <p>${step.desc}</p>
          <div class="step-topics">
            ${topicsHTML}
          </div>
          <a href="${step.resource}" target="_blank" rel="noopener" class="step-resource-link">
            Start Learning
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
          </a>
        </div>
      </div>
    `;
  }).join('');

  const html = `
    <div class="roadmap-progress-header">
      <div>
        <span>Learning Progress</span>
        <span id="roadmapProgressPct">${progressPercent}% Complete</span>
      </div>
      <div class="roadmap-progress-bar-bg">
        <div class="roadmap-progress-bar-fill" id="roadmapProgressBarFill" style="width: ${progressPercent}%"></div>
      </div>
    </div>
    
    <div class="roadmap-modal-steps">
      ${stepsHTML}
    </div>
  `;

  openModal(roadmap.title, html);
}

window.toggleRoadmapStep = function(roadmapId, stepIdx) {
  const roadmap = ROADMAPS.find(r => r.id === roadmapId);
  const progressKey = 'cv-progress-' + roadmapId;
  let completed = JSON.parse(localStorage.getItem(progressKey) || "[]");

  const idxOf = completed.indexOf(stepIdx);
  if (idxOf > -1) {
    completed.splice(idxOf, 1);
  } else {
    completed.push(stepIdx);
  }
  
  localStorage.setItem(progressKey, JSON.stringify(completed));
  
  // Re-calculate progress UI
  const total = roadmap.detailedSteps.length;
  const pct = Math.round((completed.length / total) * 100) || 0;
  
  document.getElementById('roadmapProgressPct').textContent = `${pct}% Complete`;
  document.getElementById('roadmapProgressBarFill').style.width = `${pct}%`;
  
  // Rerender steps inside the modal body without closing the modal
  renderRoadmapContent(roadmap);
  
  if (completed.length === total) {
    showToast(`Congratulations! You completed the ${roadmap.title}!`);
  }
};

/* ---------------- Resource Viewer ---------------- */
window.openResourceViewer = function(resourceType) {
  // Types: note, sheet, code, resume, map, question
  let title = "";
  if (resourceType === "note") title = "Study Notes";
  else if (resourceType === "sheet") title = "Cheat Sheets";
  else if (resourceType === "code") title = "Source Code";
  else if (resourceType === "resume") title = "Resume Templates";
  else if (resourceType === "map") title = "Roadmaps (Printable)";
  else if (resourceType === "question") title = "Interview Preparation";

  const containerHTML = `
    <div class="resource-tabs" id="resourceViewerTabs">
      <button class="resource-tab-btn ${resourceType === 'note'?'active':''}" onclick="switchResourceView('note')">Notes</button>
      <button class="resource-tab-btn ${resourceType === 'sheet'?'active':''}" onclick="switchResourceView('sheet')">Cheat Sheets</button>
      <button class="resource-tab-btn ${resourceType === 'code'?'active':''}" onclick="switchResourceView('code')">Source Code</button>
      <button class="resource-tab-btn ${resourceType === 'resume'?'active':''}" onclick="switchResourceView('resume')">Resumes</button>
      <button class="resource-tab-btn ${resourceType === 'map'?'active':''}" onclick="switchResourceView('map')">Roadmaps</button>
      <button class="resource-tab-btn ${resourceType === 'question'?'active':''}" onclick="switchResourceView('question')">Interviews</button>
    </div>
    <div class="resource-viewer-content" id="resourceViewerBody">
      <!-- Active Resource Category renders here -->
    </div>
  `;

  openModal(title, containerHTML);
  renderResourceContent(resourceType);
};

window.switchResourceView = function(resourceType) {
  // Update header text based on category
  let title = "";
  if (resourceType === "note") title = "Study Notes";
  else if (resourceType === "sheet") title = "Cheat Sheets";
  else if (resourceType === "code") title = "Source Code";
  else if (resourceType === "resume") title = "Resume Templates";
  else if (resourceType === "map") title = "Roadmaps (Printable)";
  else if (resourceType === "question") title = "Interview Preparation";
  
  modalTitle.textContent = title;

  const tabs = document.querySelectorAll('#resourceViewerTabs .resource-tab-btn');
  tabs.forEach(btn => btn.classList.remove('active'));
  
  // Find which button clicked
  const idxMap = { note:0, sheet:1, code:2, resume:3, map:4, question:5 };
  if(tabs[idxMap[resourceType]]) {
    tabs[idxMap[resourceType]].classList.add('active');
  }

  renderResourceContent(resourceType);
};

function renderResourceContent(type) {
  const body = document.getElementById('resourceViewerBody');
  if (!body) return;

  if (type === 'note') {
    const list = DETAILED_RESOURCES.note;
    body.innerHTML = list.map(n => `
      <div class="resource-note-card">
        <div style="display:flex; justify-content:space-between; align-items:center;">
          <h3 style="font-size:16px; margin:0; color:var(--text);">${n.title}</h3>
          <span class="tag" style="padding:2px 8px; font-size:11px;">${n.category}</span>
        </div>
        <div class="resource-note-body" style="margin-top: 10px;">
          ${renderMarkdownHtml(n.content)}
        </div>
      </div>
    `).join('');
  } 
  
  else if (type === 'sheet') {
    const list = DETAILED_RESOURCES.sheet;
    body.innerHTML = list.map((s, idx) => `
      <div class="resource-sheet-card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
          <h3 style="font-size:16px; margin:0; color:var(--text);">${s.title}</h3>
          <span class="tag" style="padding:2px 8px; font-size:11px;">${s.category}</span>
        </div>
        <div class="code-block-container">
          <div class="code-block-header">
            <span>syntax</span>
            <button class="code-block-copy-btn" onclick="copyToClipboard(\`${s.code.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`, this)">Copy Code</button>
          </div>
          <pre><code>${escapeHTML(s.code)}</code></pre>
        </div>
      </div>
    `).join('');
  } 
  
  else if (type === 'code') {
    const list = DETAILED_RESOURCES.code;
    body.innerHTML = list.map(c => `
      <div class="resource-code-card">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
          <h3 style="font-size:16px; margin:0; color:var(--text);">${c.title}</h3>
          <span class="tag" style="padding:2px 8px; font-size:11px;">${c.category}</span>
        </div>
        <p style="font-size:13.5px; margin-bottom:10px;">${c.desc}</p>
        <div class="code-block-container" style="margin-bottom: 8px;">
          <div class="code-block-header">
            <span>source code</span>
            <button class="code-block-copy-btn" onclick="copyToClipboard(\`${c.code.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`, this)">Copy Code</button>
          </div>
          <pre><code>${escapeHTML(c.code)}</code></pre>
        </div>
        <div>
          <a href="${c.github}" target="_blank" rel="noopener" class="btn btn-outline btn-sm" style="min-height:36px; padding:6px 12px; font-size:12px;">GitHub Project Link</a>
        </div>
      </div>
    `).join('');
  } 
  
  else if (type === 'resume') {
    const list = DETAILED_RESOURCES.resume;
    body.innerHTML = list.map(r => `
      <div class="resource-resume-card">
        <h3 style="font-size:16px; margin:0; color:var(--text);">${r.title}</h3>
        <p style="font-size:13.5px; margin-bottom:10px;">${r.desc}</p>
        <div class="code-block-container">
          <div class="code-block-header">
            <span>resume.md</span>
            <button class="code-block-copy-btn" onclick="copyToClipboard(\`${r.code.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`, this)">Copy Markdown</button>
          </div>
          <pre><code style="white-space: pre-wrap;">${escapeHTML(r.code)}</code></pre>
        </div>
      </div>
    `).join('');
  } 
  
  else if (type === 'map') {
    const list = DETAILED_RESOURCES.map;
    body.innerHTML = list.map(m => `
      <div class="resource-note-card">
        <h3 style="font-size:16px; margin:0; color:var(--text);">${m.title}</h3>
        <p style="font-size:14px; margin-bottom:12px;">${m.desc}</p>
        <div style="display:flex; flex-direction:column; gap:8px;">
          ${m.links.map(l => `
            <div style="display:flex; justify-content:space-between; align-items:center; background:var(--surface); border:1px solid var(--surface-border); padding:10px 14px; border-radius:8px;">
              <span style="font-size:14px; font-weight:600; color:var(--text);">${l.name}</span>
              <button class="btn btn-primary btn-sm" style="min-height:32px; padding:4px 12px; font-size:12px;" onclick="downloadRoadmapFile('${l.id}')">Download</button>
            </div>
          `).join('')}
        </div>
      </div>
    `).join('');
  } 
  
  else if (type === 'question') {
    const list = DETAILED_RESOURCES.question;
    body.innerHTML = `
      <input type="text" class="interview-search-bar" id="interviewSearch" placeholder="Search questions by topic (e.g. Python, DevOps, JS)..." oninput="filterInterviewQuestions()">
      <div class="interview-list" id="interviewList">
        ${renderInterviewList(list)}
      </div>
    `;
  }
}

/* Helper to render Q&A cards */
function renderInterviewList(questions) {
  return questions.map((q, idx) => `
    <div class="interview-item" id="qItem-${idx}">
      <div class="interview-q" onclick="toggleInterviewItem(${idx})">
        <span style="color:var(--text);">${q.q}</span>
      </div>
      <div class="interview-a">
        <p style="margin-bottom:8px;">${q.a}</p>
        <div class="interview-meta">
          <span>Topic: ${q.topic}</span>
          <span>•</span>
          <span>Level: ${q.level}</span>
        </div>
      </div>
    </div>
  `).join('');
}

window.toggleInterviewItem = function(idx) {
  const item = document.getElementById(`qItem-${idx}`);
  if (item) item.classList.toggle('open');
};

window.filterInterviewQuestions = function() {
  const query = document.getElementById('interviewSearch').value.toLowerCase();
  const list = DETAILED_RESOURCES.question;
  
  list.forEach((q, idx) => {
    const item = document.getElementById(`qItem-${idx}`);
    if (item) {
      const match = q.q.toLowerCase().includes(query) || q.topic.toLowerCase().includes(query) || q.a.toLowerCase().includes(query);
      item.style.display = match ? 'block' : 'none';
    }
  });
};

window.downloadRoadmapFile = function(roadmapId) {
  showToast(`Downloading high-resolution ${roadmapId} roadmap PDF...`);
  // Mock standard download trigger
  setTimeout(() => {
    showToast("Download started successfully!");
  }, 1000);
};

/* Super lightweight markdown-to-html formatter for Notes */
function renderMarkdownHtml(mdText) {
  let html = mdText
    .replace(/^### (.*$)/gim, '<h3 style="color:var(--text); margin-top:10px; margin-bottom:6px;">$1</h3>')
    .replace(/^#### (.*$)/gim, '<h4 style="color:var(--text); margin-top:8px; margin-bottom:4px;">$1</h4>')
    .replace(/^\* (.*$)/gim, '<li style="margin-left:15px; list-style-type:disc; font-size:14px; color:var(--text-soft);">$1</li>')
    .replace(/`(.*?)`/gim, '<code style="background:rgba(0,245,255,0.08); color:var(--accent); padding:2px 6px; border-radius:4px; font-family:\'Space Mono\', monospace; font-size:13px;">$1</code>')
    .replace(/\n/g, '<br>');

  // Wrap lists
  html = html.replace(/(<li>.*<\/li>)/gim, '<ul style="margin-bottom:10px;">$1</ul>');
  
  // Clean double loops on list wraps
  html = html.replace(/<\/ul><br><ul style="margin-bottom:10px;">/gim, '');
  
  // Handle code blocks
  const parts = html.split('```');
  for (let i = 1; i < parts.length; i += 2) {
    // If it's a code block
    const lines = parts[i].split('<br>');
    const lang = lines[0].replace('python', 'python').replace('css', 'css').replace('javascript', 'javascript').replace('js', 'javascript').trim();
    const codeContent = lines.slice(1).join('\n');
    parts[i] = `
      <div class="code-block-container" style="margin-block:12px;">
        <div class="code-block-header"><span>${lang || 'code'}</span><button class="code-block-copy-btn" onclick="copyToClipboard(\`${codeContent.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`, this)">Copy</button></div>
        <pre><code>${escapeHTML(codeContent)}</code></pre>
      </div>
    `;
  }
  return parts.join('');
}
