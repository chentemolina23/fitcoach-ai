<!D<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Chente Fitness Coaching</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=DM+Mono:wght@300;400;500&display=swap" rel="stylesheet">
<script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js"></script>
<style>
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --beige:#F5F0E8;--beige2:#EDE7D9;--beige3:#DDD5C4;
  --olive:#6B7A4A;--olive2:#8A9B60;--olive3:#4E5A35;
  --terracotta:#B8724A;--terra2:#D4895F;--terra3:#8C5234;
  --ink:#2A2820;--ink2:#4A4840;--ink3:#6A6860;
  --white:#FDFCF9;--border:#D8D0C0;--border2:#C8C0B0;
}
body{font-family:'DM Mono',monospace;background:var(--beige);color:var(--ink);min-height:100vh}

/* ===== PAGES ===== */
.page{display:none}
.page.active{display:block}

/* ===== LANDING ===== */
#page-landing{min-height:100vh;display:none;flex-direction:column}
#page-landing.active{display:flex}
.nav-public{display:flex;align-items:center;justify-content:space-between;padding:20px 48px;border-bottom:1px solid var(--border);background:var(--white)}
.nav-logo{font-family:'Cormorant Garamond',serif;font-size:22px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:var(--ink)}
.nav-logo span{display:block;font-size:9px;font-weight:400;letter-spacing:4px;color:var(--ink3);margin-top:1px;font-family:'DM Mono',monospace}
.nav-links{display:flex;gap:24px;align-items:center}
.nav-link{font-size:10px;letter-spacing:2px;text-transform:uppercase;color:var(--ink3);cursor:pointer;text-decoration:none;transition:color 0.15s}
.nav-link:hover{color:var(--olive)}
.hero{flex:1;display:grid;grid-template-columns:1fr 1fr;min-height:calc(100vh - 65px)}
.hero-left{padding:80px 48px;display:flex;flex-direction:column;justify-content:center;border-right:1px solid var(--border)}
.hero-eyebrow{font-size:9px;letter-spacing:3px;text-transform:uppercase;color:var(--terracotta);margin-bottom:20px}
.hero-title{font-family:'Cormorant Garamond',serif;font-size:64px;font-weight:500;line-height:1.05;color:var(--ink);margin-bottom:24px}
.hero-title em{font-style:italic;color:var(--olive)}
.hero-subtitle{font-size:12px;line-height:1.8;color:var(--ink3);max-width:420px;margin-bottom:40px}
.hero-btns{display:flex;gap:12px;flex-wrap:wrap}
.hero-right{background:var(--ink);display:flex;flex-direction:column;justify-content:flex-end;padding:48px;position:relative;overflow:hidden}
.hero-right::before{content:'';position:absolute;top:0;left:0;right:0;height:60%;background:linear-gradient(135deg,var(--olive3) 0%,var(--ink) 100%);opacity:0.6}
.hero-stats{position:relative;z-index:1;display:grid;grid-template-columns:1fr 1fr;gap:16px}
.hero-stat{border:1px solid rgba(255,255,255,0.1);border-radius:4px;padding:20px}
.hero-stat-num{font-family:'Cormorant Garamond',serif;font-size:40px;font-weight:500;color:var(--beige);line-height:1}
.hero-stat-lbl{font-size:9px;letter-spacing:2px;text-transform:uppercase;color:rgba(245,240,232,0.5);margin-top:6px}
.section{padding:80px 48px;border-top:1px solid var(--border)}
.section-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:48px}
.feature-card{border:1px solid var(--border);border-radius:4px;padding:28px;background:var(--white)}
.feature-icon{width:36px;height:36px;border:1px solid var(--border2);border-radius:50%;display:flex;align-items:center;justify-content:center;margin-bottom:16px}
.feature-title{font-family:'Cormorant Garamond',serif;font-size:18px;font-weight:500;margin-bottom:8px}
.feature-desc{font-size:11px;line-height:1.8;color:var(--ink3)}
.section-label-lg{font-size:9px;letter-spacing:3px;text-transform:uppercase;color:var(--terracotta)}
.section-title-lg{font-family:'Cormorant Garamond',serif;font-size:40px;font-weight:500;margin-top:12px;line-height:1.2}
footer{padding:32px 48px;border-top:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;background:var(--white)}
.footer-logo{font-family:'Cormorant Garamond',serif;font-size:16px;font-weight:500;letter-spacing:2px;text-transform:uppercase}
.footer-copy{font-size:10px;color:var(--ink3)}

/* ===== AUTH MODAL ===== */
.modal-overlay{display:none;position:fixed;inset:0;background:rgba(42,40,32,0.6);z-index:500;align-items:center;justify-content:center}
.modal-overlay.open{display:flex}
.modal{background:var(--white);border:1px solid var(--border);border-radius:6px;padding:36px;width:90%;max-width:420px}
.modal-title{font-family:'Cormorant Garamond',serif;font-size:24px;font-weight:500;margin-bottom:6px}
.modal-sub{font-size:11px;color:var(--ink3);margin-bottom:28px;line-height:1.6}
.form-group{margin-bottom:14px}
.form-label{font-size:9px;letter-spacing:2px;text-transform:uppercase;color:var(--ink3);display:block;margin-bottom:6px}
.form-input,.form-select,.form-textarea{width:100%;background:var(--beige);border:1px solid var(--border);border-radius:3px;padding:10px 12px;color:var(--ink);font-size:12px;font-family:'DM Mono',monospace;outline:none;transition:border-color 0.15s;appearance:none}
.form-input:focus,.form-select:focus,.form-textarea:focus{border-color:var(--olive)}
.form-textarea{resize:vertical;min-height:70px}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.auth-msg{font-size:11px;margin-top:12px;min-height:18px;text-align:center}
.modal-tabs{display:flex;gap:0;margin-bottom:24px;border:1px solid var(--border);border-radius:3px;overflow:hidden}
.modal-tab{flex:1;padding:9px;text-align:center;font-size:10px;letter-spacing:1.5px;text-transform:uppercase;cursor:pointer;background:transparent;border:none;font-family:'DM Mono',monospace;color:var(--ink3);transition:all 0.15s}
.modal-tab.active{background:var(--olive);color:var(--beige)}
.modal-close{position:absolute;top:16px;right:16px;background:none;border:none;cursor:pointer;color:var(--ink3);font-size:18px;line-height:1;z-index:10;padding:5px}

/* ===== BUTTONS ===== */
.btn{padding:10px 20px;border-radius:3px;border:1px solid var(--border2);font-family:'DM Mono',monospace;font-size:10px;letter-spacing:1.5px;text-transform:uppercase;cursor:pointer;transition:all 0.15s;background:transparent;color:var(--ink2)}
.btn:hover{border-color:var(--olive);color:var(--olive)}
.btn-solid{background:var(--olive);color:var(--beige);border-color:var(--olive)}
.btn-solid:hover{background:var(--olive3)}
.btn-terra{background:var(--terracotta);color:var(--white);border-color:var(--terracotta)}
.btn-terra:hover{background:var(--terra3)}
.btn-dark{background:var(--ink);color:var(--beige);border-color:var(--ink)}
.btn-dark:hover{background:var(--ink2)}
.btn-sm{padding:7px 14px;font-size:9px}

/* ===== CLIENT PAGE ===== */
/* FIX #7: Add display:none rule for .client-tab so only active one shows */
.client-tab{display:none}
.client-tab.active{display:block}

#page-client{display:none;min-height:100vh;position:relative}
#page-client.active{display:block}
#page-client .sidebar{position:fixed;top:0;left:0;height:100vh;width:200px;z-index:100}
#page-client .coach-main{margin-left:200px;width:calc(100% - 200px);min-height:100vh;background:var(--beige)}

.client-topbar{background:var(--white);border-bottom:1px solid var(--border);padding:14px 32px;display:flex;align-items:center;justify-content:space-between}
.client-content{padding:32px;max-width:720px;margin:0 auto;width:100%}
.profile-header{margin-bottom:32px}
.profile-title{font-family:'Cormorant Garamond',serif;font-size:28px;font-weight:500;margin-bottom:6px}
.profile-sub{font-size:11px;color:var(--ink3);line-height:1.6}
.profile-section{background:var(--white);border:1px solid var(--border);border-radius:4px;padding:24px;margin-bottom:16px}
.ps-title{font-size:9px;letter-spacing:2.5px;text-transform:uppercase;color:var(--ink3);margin-bottom:18px}
.plan-box{background:var(--beige);border:1px solid var(--border);border-radius:3px;padding:16px;margin-top:16px}
.plan-day-item{padding:8px 0;border-bottom:1px solid var(--beige2);font-size:12px;display:flex;justify-content:space-between}
.plan-day-item:last-child{border-bottom:none}

/* ===== COACH DASHBOARD ===== */
#page-coach{display:none;min-height:100vh}
#page-coach.active{display:flex}
.sidebar{width:200px;background:var(--ink);padding:24px 0;display:flex;flex-direction:column;flex-shrink:0;position:fixed;top:0;left:0;height:100vh;z-index:100}
.sidebar-logo{font-family:'Cormorant Garamond',serif;font-size:18px;font-weight:600;color:var(--beige);padding:0 20px 20px;letter-spacing:2px;text-transform:uppercase;border-bottom:1px solid rgba(255,255,255,0.08);margin-bottom:12px}
.sidebar-logo span{display:block;font-size:9px;letter-spacing:3px;color:var(--ink3);margin-top:2px;font-family:'DM Mono',monospace}
.nav-items{display:flex;flex-direction:column;gap:2px;padding:0 10px}
.ni{display:flex;align-items:center;gap:9px;padding:9px 10px;border-radius:3px;cursor:pointer;color:var(--ink3);font-size:10px;letter-spacing:1.5px;text-transform:uppercase;transition:all 0.15s;border:none;background:none;width:100%;text-align:left;font-family:'DM Mono',monospace}
.ni:hover{color:var(--beige);background:rgba(255,255,255,0.06)}
.ni.active{color:var(--olive2);background:rgba(107,122,74,0.15)}
.ni svg{width:13px;height:13px;flex-shrink:0}
.coach-main{flex:1;margin-left:200px}
.coach-topbar{background:var(--white);border-bottom:1px solid var(--border);padding:13px 28px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:50}
.ptitle{font-family:'Cormorant Garamond',serif;font-size:17px;font-weight:500;letter-spacing:1px}
.av{width:30px;height:30px;border-radius:50%;background:var(--olive);display:flex;align-items:center;justify-content:center;font-size:9px;color:var(--beige);letter-spacing:1px}
.coach-content{padding:24px 28px;max-width:1100px}
.tab{display:none}.tab.active{display:block}

/* COACH UI */
.metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:20px}
.mc{background:var(--white);border:1px solid var(--border);border-radius:4px;padding:16px}
.mc-label{font-size:8px;letter-spacing:2px;text-transform:uppercase;color:var(--ink3);margin-bottom:6px}
.mc-val{font-family:'Cormorant Garamond',serif;font-size:30px;font-weight:500;color:var(--ink);line-height:1}
.mc-sub{font-size:10px;color:var(--olive);margin-top:4px}
.two-col{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.card{background:var(--white);border:1px solid var(--border);border-radius:4px;padding:18px}
.section-label{font-size:8px;letter-spacing:2.5px;text-transform:uppercase;color:var(--ink3);margin-bottom:12px}
.client-row{display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid var(--beige2)}
.client-row:last-child{border-bottom:none}
.cav{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:9px;flex-shrink:0}
.badge{font-size:8px;padding:2px 7px;border-radius:2px;letter-spacing:1px;text-transform:uppercase;margin-left:auto}
.bo{background:rgba(107,122,74,0.12);color:var(--olive3)}
.bt{background:rgba(184,114,74,0.12);color:var(--terra3)}
.bi{background:rgba(42,40,32,0.08);color:var(--ink2)}
.table-header{display:grid;background:var(--beige2);padding:10px 16px;font-size:8px;letter-spacing:2px;text-transform:uppercase;color:var(--ink3)}
.table-row{display:grid;padding:11px 16px;border-top:1px solid var(--beige2);font-size:12px;align-items:center;cursor:pointer;transition:background 0.1s}
.table-row:hover{background:var(--beige)}

/* AI GENERATOR */
.gen-layout{display:grid;grid-template-columns:260px 1fr;gap:16px;align-items:start}
.ai-output{background:var(--white);border:1px solid var(--border);border-radius:4px;padding:20px;min-height:360px}
.loading-dots{display:inline-flex;gap:4px}
.dot-anim{width:5px;height:5px;border-radius:50%;background:var(--olive);animation:pulse 1.2s infinite}
.dot-anim:nth-child(2){animation-delay:0.2s}
.dot-anim:nth-child(3){animation-delay:0.4s}
@keyframes pulse{0%,80%,100%{opacity:0.3}40%{opacity:1}}
.plan-day{margin-bottom:16px;border-left:2px solid var(--beige3);padding-left:14px}
.ex-row{display:flex;justify-content:space-between;padding:4px 0;border-bottom:1px solid var(--beige2);font-size:11px}
.ex-row:last-child{border-bottom:none}
.note-box{background:var(--beige);border:1px solid var(--border);border-radius:3px;padding:12px;margin-top:14px;font-size:11px;color:var(--ink3);line-height:1.7}
.sport-tag{display:inline-flex;align-items:center;gap:5px;background:rgba(184,114,74,0.1);color:var(--terra3);font-size:8px;letter-spacing:1.5px;text-transform:uppercase;padding:3px 8px;border-radius:2px;border:1px solid rgba(184,114,74,0.2);margin-bottom:12px}

/* CALENDAR */
.cal-cell{text-align:center;padding:6px 2px;border-radius:3px;font-size:10px;cursor:pointer;color:var(--ink3);position:relative;transition:background 0.1s}
.cal-cell.am{color:var(--ink2)}.cal-cell:hover{background:var(--beige2)}
.cal-cell.tc{background:var(--olive);color:var(--beige)}
.caldot{width:3px;height:3px;border-radius:50%;background:var(--terracotta);position:absolute;bottom:2px;left:50%;transform:translateX(-50%)}

/* CLIENT DETAIL MODAL */
.client-detail{display:none;position:fixed;inset:0;background:rgba(42,40,32,0.5);z-index:400;align-items:center;justify-content:center}
.client-detail.open{display:flex}
.cd-panel{background:var(--white);width:90%;max-width:640px;max-height:85vh;overflow-y:auto;border-radius:6px;border:1px solid var(--border)}
.cd-header{padding:24px 28px;border-bottom:1px solid var(--border);display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;background:var(--white);z-index:1}
.cd-body{padding:24px 28px}
.cd-section{margin-bottom:20px}
.cd-label{font-size:8px;letter-spacing:2px;text-transform:uppercase;color:var(--ink3);margin-bottom:8px}
.cd-val{font-size:13px;color:var(--ink2)}
.cd-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}

/* API KEY MODAL */
#api-modal{display:none;position:fixed;inset:0;background:rgba(42,40,32,0.6);z-index:600;align-items:center;justify-content:center}
#api-modal.open{display:flex}

@media(max-width:768px){
  .hero{grid-template-columns:1fr}.hero-right{display:none}
  .hero-title{font-size:40px}.section-grid{grid-template-columns:1fr}
  .metrics{grid-template-columns:1fr 1fr}.two-col,.gen-layout{grid-template-columns:1fr}
  .sidebar{width:0;overflow:hidden}.coach-main{margin-left:0}
  #page-client .coach-main{margin-left:0;width:100%}
  .nav-public{padding:16px 20px}.hero-left{padding:48px 20px}
  .section{padding:48px 20px}.footer{padding:24px 20px}
  .client-content{padding:20px}
}
</style>
</head>
<body>

<!-- ==================== LANDING PAGE ==================== -->
<div id="page-landing" class="page active">
  <nav class="nav-public">
    <div class="nav-logo">Chente<span>Fitness Coaching</span></div>
    <div class="nav-links">
      <a class="nav-link" href="#services">Services</a>
      <a class="nav-link" href="#process">Process</a>
      <button class="btn btn-sm" onclick="openAuth('login')">Log In</button>
      <button class="btn btn-solid btn-sm" onclick="openAuth('signup')">Get Started</button>
    </div>
  </nav>

  <div class="hero">
    <div class="hero-left">
      <div class="hero-eyebrow">Personalized Online Coaching</div>
      <h1 class="hero-title">Transform your body with <em>science</em> &amp; discipline</h1>
      <p class="hero-subtitle">Custom training plans designed by a certified coach and powered by AI. Soccer conditioning, fat loss, muscle gain, and more.</p>
      <div class="hero-btns">
        <button class="btn btn-solid" onclick="openAuth('signup')">Create Free Profile</button>
        <button class="btn" onclick="document.getElementById('services').scrollIntoView({behavior:'smooth'})">View Services</button>
      </div>
    </div>
    <div class="hero-right">
      <div class="hero-stats">
        <div class="hero-stat"><div class="hero-stat-num">24+</div><div class="hero-stat-lbl">Active Clients</div></div>
        <div class="hero-stat"><div class="hero-stat-num">3</div><div class="hero-stat-lbl">Years Experience</div></div>
        <div class="hero-stat"><div class="hero-stat-num">78%</div><div class="hero-stat-lbl">Success Rate</div></div>
        <div class="hero-stat"><div class="hero-stat-num">AI</div><div class="hero-stat-lbl">Smart Plans</div></div>
      </div>
    </div>
  </div>

  <section class="section" id="services">
    <div class="section-label-lg">What I Offer</div>
    <div class="section-title-lg">Programs designed<br>just for you</div>
    <div class="section-grid">
      <div class="feature-card">
        <div class="feature-icon">💪</div>
        <div class="feature-title">Strength &amp; Muscle</div>
        <div class="feature-desc">Hypertrophy and strength programs adapted to your level, available equipment, and specific goals.</div>
      </div>
      <div class="feature-card">
        <div class="feature-icon">⚽</div>
        <div class="feature-title">Soccer &amp; Sports</div>
        <div class="feature-desc">Specific conditioning for soccer players: explosive speed, agility, stamina, and pitch work.</div>
      </div>
      <div class="feature-card">
        <div class="feature-icon">🔥</div>
        <div class="feature-title">Fat Loss</div>
        <div class="feature-desc">Evidence-based strategies for optimal body composition without sacrificing muscle mass.</div>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="footer-logo">Chente Fitness</div>
    <div class="footer-copy">© 2026 · All Rights Reserved</div>
    <button class="btn btn-solid btn-sm" onclick="openAuth('signup')">Start Now</button>
  </footer>
</div>

<!-- ==================== AUTH MODAL (single, no duplicate) ==================== -->
<!-- FIX #1 & #8: Removed the duplicate English auth modal. Only one modal with unique IDs. -->
<div class="modal-overlay" id="auth-modal">
  <div class="modal" style="position:relative">
    <button class="modal-close" onclick="closeAuth()">✕</button>
    <div class="modal-title" id="auth-modal-title">Bienvenido</div>
    <div class="modal-sub" id="auth-modal-sub">Accede a tu plan de entrenamiento personalizado</div>
    <div class="modal-tabs">
      <button class="modal-tab active" id="tab-login" onclick="switchAuthTab('login')">Iniciar sesión</button>
      <button class="modal-tab" id="tab-signup" onclick="switchAuthTab('signup')">Registrarse</button>
    </div>
    <div id="auth-login-form">
      <div class="form-group"><label class="form-label">Correo electrónico</label><input class="form-input" id="login-email" type="email" placeholder="tu@correo.com"/></div>
      <div class="form-group"><label class="form-label">Contraseña</label><input class="form-input" id="login-password" type="password" placeholder="••••••••"/></div>
      <button class="btn btn-solid" style="width:100%;padding:12px" onclick="doLogin()">Iniciar sesión</button>
    </div>
    <div id="auth-signup-form" style="display:none">
      <div class="form-group"><label class="form-label">Correo electrónico</label><input class="form-input" id="signup-email" type="email" placeholder="tu@correo.com"/></div>
      <div class="form-group"><label class="form-label">Contraseña</label><input class="form-input" id="signup-password" type="password" placeholder="Mínimo 6 caracteres"/></div>
      <button class="btn btn-solid" style="width:100%;padding:12px" onclick="doSignup()">Crear cuenta</button>
    </div>
    <div class="auth-msg" id="auth-msg"></div>
  </div>
</div>

<!-- ==================== CHECK-IN MODAL ==================== -->
<div class="modal-overlay" id="checkin-modal">
  <div class="modal" style="position:relative; max-width:420px; width:90%;">
    <button class="modal-close" onclick="closeCheckinModal()">✕</button>
    <div class="modal-title">Weekly Check-In</div>
    <div class="modal-sub">Log your weekly stats. Be honest, your coach is here to help!</div>
    <div class="form-row">
      <div class="form-group">
        <label class="form-label">Current Weight (kg)</label>
        <input type="number" id="ci-weight" class="form-input" placeholder="e.g. 74.5" step="0.1"/>
      </div>
      <div class="form-group">
        <label class="form-label">Body Fat % (Optional)</label>
        <input type="number" id="ci-bf" class="form-input" placeholder="e.g. 15" step="0.1"/>
      </div>
    </div>
    <div class="form-group" style="margin-top:10px;">
      <label class="form-label">Energy / Mood Level (1-10)</label>
      <input type="range" id="ci-energy" min="1" max="10" value="7" style="width:100%; accent-color:var(--olive);"/>
      <div style="display:flex; justify-content:space-between; font-size:9px; color:var(--ink3); margin-top:4px;">
        <span>1 (Exhausted)</span><span>10 (Amazing)</span>
      </div>
    </div>
    <div class="form-group" style="margin-top:15px;">
      <label class="form-label">How did training go this week?</label>
      <textarea id="ci-notes" class="form-textarea" placeholder="Any wins? Any struggles with the diet or workouts?"></textarea>
    </div>
    <button class="btn btn-solid" style="width:100%; padding:14px; font-size:11px;" onclick="submitCheckin()">Save Check-In</button>
    <div id="ci-msg" style="text-align:center; font-size:11px; margin-top:12px; min-height:16px;"></div>
  </div>
</div>

<!-- ==================== CLIENT PAGE ==================== -->
<!-- FIX #2: All client tabs are now properly inside page-client > coach-main > coach-content -->
<div id="page-client" class="page">

  <div class="sidebar">
    <div class="sidebar-logo">Chente<span>Client Portal</span></div>
    <div class="nav-items">
      <button class="ni active" onclick="showClientTab('c-overview', this)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
        <span class="i18n" data-en="Overview" data-es="Resumen">Overview</span>
      </button>
      <button class="ni" onclick="showClientTab('c-plan', this)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z"/></svg>
        <span class="i18n" data-en="My Plan" data-es="Mi Plan">My Plan</span>
      </button>
      <button class="ni" onclick="showClientTab('c-progress', this)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
        <span class="i18n" data-en="Progress" data-es="Progreso">Progress</span>
      </button>
      <button class="ni" onclick="showClientTab('c-booking', this)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="16" y1="2" x2="16" y2="6"/></svg>
        <span class="i18n" data-en="Book a Call" data-es="Cita">Book a Call</span>
      </button>
      <button class="ni" onclick="showClientTab('c-payments', this)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
        <span class="i18n" data-en="Billing" data-es="Pagos">Billing</span>
      </button>
      <button class="ni" onclick="showClientTab('c-settings', this)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
        <span class="i18n" data-en="Settings" data-es="Ajustes">Settings</span>
      </button>
    </div>
    <div style="margin-top:auto;padding:12px 10px;border-top:1px solid rgba(255,255,255,0.08)">
      <button class="ni" onclick="doLogout()" style="color:var(--terra2)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
        <span class="i18n" data-en="Log Out" data-es="Salir">Log Out</span>
      </button>
    </div>
  </div>

  <div class="coach-main">
    <div class="coach-topbar">
      <div class="ptitle i18n" id="client-ptitle" data-en="Overview" data-es="Resumen">Overview</div>
      <div style="display:flex;align-items:center;gap:14px">
        <button class="btn btn-sm" onclick="toggleLanguage()" id="lang-toggle-btn">ESP</button>
        <span style="font-size:10px;color:var(--ink3)" id="client-email-display"></span>
        <div class="av" id="client-av">CL</div>
      </div>
    </div>

    <div class="coach-content">

      <!-- OVERVIEW TAB -->
      <div class="client-tab active" id="tab-c-overview">
        <div class="profile-header">
          <div class="profile-title" id="client-greeting">Hello 👋</div>
          <div class="profile-sub">Welcome back to your coaching portal.</div>
        </div>
        <div class="two-col">
          <div class="card">
            <div class="section-label">Current Goal</div>
            <div style="font-family:'Cormorant Garamond', serif; font-size: 24px; font-weight:500;" id="dash-goal">Loading...</div>
            <button class="btn btn-solid btn-sm" style="margin-top: 15px;" onclick="showClientTab('c-plan', document.querySelectorAll('#page-client .ni')[1])">View My Workout Plan →</button>
          </div>
          <div class="card">
            <div class="section-label">Next Action</div>
            <div style="padding:12px;background:var(--beige);border-radius:3px;border-left:2px solid var(--olive)">
              <div style="font-size:12px">Check-in Call</div>
              <div style="font-size:10px;color:var(--ink3);margin-top:4px">Book your weekly call with Coach Chente.</div>
            </div>
            <button class="btn btn-sm" style="margin-top: 15px;" onclick="showClientTab('c-booking', document.querySelectorAll('#page-client .ni')[3])">Book Schedule</button>
          </div>
        </div>
      </div>

      <!-- PLAN TAB -->
      <div class="client-tab" id="tab-c-plan">
        <div class="profile-section">
          <div class="ps-title">My Workout Plan</div>
          <div id="client-plan-content">
            <div style="color:var(--ink3); font-size:12px;">Your coach has not generated a plan for you yet. Please complete your profile settings!</div>
          </div>
        </div>
      </div>

      <!-- PROGRESS TAB -->
      <div class="client-tab" id="tab-c-progress">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px;">
          <div>
            <div style="font-family:'Cormorant Garamond',serif; font-size:24px; font-weight:500;">My Progress</div>
            <div style="font-size:11px; color:var(--ink3);">Track your stats and keep your coach updated.</div>
          </div>
          <button class="btn btn-solid" onclick="openCheckinModal()">+ Check-In</button>
        </div>
        <div class="metrics" style="grid-template-columns: 1fr 1fr 1fr; margin-bottom:24px;">
          <div class="mc"><div class="mc-label">Starting Weight</div><div class="mc-val" id="stat-start-weight" style="font-size:24px;">--</div></div>
          <div class="mc"><div class="mc-label">Current Weight</div><div class="mc-val" id="stat-current-weight" style="font-size:24px;">--</div></div>
          <div class="mc"><div class="mc-label">Total Change</div><div class="mc-val" id="stat-weight-change" style="font-size:24px; color:var(--olive);">--</div></div>
        </div>
        <div class="profile-section" style="padding:0; overflow:hidden;">
          <div class="table-header" style="grid-template-columns: 100px 1fr 1fr 2fr;">
            <div>Date</div><div>Weight</div><div>Energy</div><div>Notes</div>
          </div>
          <div id="checkin-feed">
            <div style="padding:20px; font-size:11px; color:var(--ink3);">No check-ins yet. Start tracking your progress!</div>
          </div>
        </div>
      </div>

      <!-- BOOKING TAB -->
      <div class="client-tab" id="tab-c-booking">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:24px;">
          <div>
            <div style="font-family:'Cormorant Garamond',serif; font-size:24px; font-weight:500;">Book a Call</div>
            <div style="font-size:11px; color:var(--ink3);">Reach out directly to schedule your 1-on-1 session.</div>
          </div>
        </div>
        <div class="two-col" style="gap: 16px;">
          <div class="card" style="text-align:center; padding:32px 20px;">
            <div style="font-size:28px; margin-bottom:12px;">✉️</div>
            <div style="font-family:'Cormorant Garamond',serif; font-weight:600; font-size:18px; margin-bottom:6px;">Email Coach</div>
            <div style="font-size:11px; color:var(--ink3); margin-bottom:20px; line-height:1.6;">
              Best for scheduling your monthly reviews or detailed questions.
            </div>
            <button class="btn btn-solid" style="width:100%;"
              onclick="window.location.href='mailto:chentemolina1099@gmail.com?subject=Booking my Coaching Call&body=Hi Coach Chente, I would like to schedule a call for this week.'">
              Send Email
            </button>
          </div>
          <div class="card" style="text-align:center; padding:32px 20px;">
            <div style="font-size:28px; margin-bottom:12px;">📱</div>
            <div style="font-family:'Cormorant Garamond',serif; font-weight:600; font-size:18px; margin-bottom:6px;">WhatsApp</div>
            <div style="font-size:11px; color:var(--ink3); margin-bottom:20px; line-height:1.6;">
              Best for quick check-ins, form checks, or fast scheduling.
            </div>
            <button class="btn btn-solid" style="width:100%; background:#25D366; border-color:#25D366; color:white;"
              onclick="window.open('https://wa.me/17864981173?text=Hi Coach, I want to book my weekly call!', '_blank')">
              Message on WhatsApp
            </button>
          </div>
        </div>
      </div>

      <!-- PAYMENTS TAB -->
      <div class="client-tab" id="tab-c-payments">
        <div class="profile-section">
          <div class="ps-title">Billing &amp; Invoices</div>
          <div class="client-row" style="padding: 15px 0;">
            <div><div style="font-size:13px">Premium Coaching Subscription</div><div style="font-size:10px;color:var(--ink3)">Active · Renews next month</div></div>
            <div class="badge bo">Active</div>
          </div>
          <button class="btn" style="margin-top: 10px;" onclick="alert('Feature coming soon: Stripe Customer Portal integration!')">Manage Subscription</button>
        </div>
      </div>

      <!-- SETTINGS TAB -->
      <div class="client-tab" id="tab-c-settings">
        <div id="client-profile-form">
          <div class="profile-section">
            <div class="ps-title">Personal Information</div>
            <div class="form-row">
              <div class="form-group"><label class="form-label">Full Name</label><input class="form-input" id="c-name" placeholder="John Doe"/></div>
              <div class="form-group"><label class="form-label">Date of Birth</label><input class="form-input" id="c-dob" type="date"/></div>
            </div>
            <div class="form-row">
              <div class="form-group"><label class="form-label">Current Weight (kg)</label><input class="form-input" id="c-weight" type="number" placeholder="75"/></div>
              <div class="form-group"><label class="form-label">Height (cm)</label><input class="form-input" id="c-height" type="number" placeholder="175"/></div>
            </div>
          </div>
          <div class="profile-section">
            <div class="ps-title">Goals &amp; Equipment</div>
            <div class="form-group"><label class="form-label">Main Goal</label>
              <select class="form-select" id="c-goal">
                <option value="">Select...</option>
                <option value="fat loss">Fat Loss</option>
                <option value="muscle gain">Muscle Gain</option>
                <option value="soccer fitness">Soccer / Sports</option>
                <option value="general fitness">General Fitness</option>
                <option value="endurance">Endurance / Cardio</option>
                <option value="strength">Maximum Strength</option>
              </select>
            </div>
            <div class="form-group"><label class="form-label">Preferred Training Style</label>
              <select class="form-select" id="c-training-type">
                <option value="">Select...</option>
                <option value="gym">Gym (Weights)</option>
                <option value="home">Home (No equipment)</option>
                <option value="field">Field / Pitch</option>
                <option value="mixed">Mixed</option>
              </select>
            </div>
            <div class="form-group"><label class="form-label">Equipment Access</label>
              <select class="form-select" id="c-equipment">
                <option value="">Select...</option>
                <option value="full gym">Full Gym</option>
                <option value="dumbbells">Dumbbells &amp; Bench</option>
                <option value="bodyweight only">Bodyweight Only</option>
                <option value="field access">Field / Pitch Access</option>
              </select>
            </div>
            <div class="form-group"><label class="form-label">Available Days Per Week</label>
              <select class="form-select" id="c-days">
                <option value="2">2 Days</option>
                <option value="3">3 Days</option>
                <option value="4" selected>4 Days</option>
                <option value="5">5 Days</option>
                <option value="6">6 Days</option>
                <option value="7">7 Days</option>
              </select>
            </div>
            <div class="form-group"><label class="form-label">Fitness Level</label>
              <select class="form-select" id="c-level">
                <option value="Beginner">Beginner</option>
                <option value="Intermediate" selected>Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
            </div>
            <div class="form-group"><label class="form-label">Injuries / Conditions</label>
              <textarea class="form-textarea" id="c-injuries" placeholder="Describe any pain or limitations..."></textarea>
            </div>
            <div class="form-group"><label class="form-label">Notes for Coach</label>
              <textarea class="form-textarea" id="c-notes" placeholder="Schedules, past experience..."></textarea>
            </div>
          </div>
          <button class="btn btn-solid" style="width:100%;padding:14px;font-size:11px" onclick="saveClientProfile()">Save Profile Details</button>
          <div id="client-save-msg" style="text-align:center;font-size:11px;margin-top:12px;min-height:18px"></div>
        </div>
      </div>

    </div><!-- end coach-content -->
  </div><!-- end coach-main -->
</div><!-- end page-client -->

<!-- ==================== COACH DASHBOARD ==================== -->
<div id="page-coach" class="page">
  <div class="sidebar">
    <div class="sidebar-logo">Chente<span>Coach Dashboard</span></div>
    <div class="nav-items">
      <button class="ni active" onclick="showCoachTab('overview',this)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>Overview
      </button>
      <button class="ni" onclick="showCoachTab('clients',this)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/></svg>Clientes
      </button>
      <button class="ni" onclick="showCoachTab('ai-plans',this)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z"/></svg>AI Plans
      </button>
      <button class="ni" onclick="showCoachTab('schedule',this)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="3" y1="10" x2="21" y2="10"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="16" y1="2" x2="16" y2="6"/></svg>Calendario
      </button>
      <button class="ni" onclick="showCoachTab('payments',this)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="4" width="22" height="16" rx="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>Pagos
      </button>
    </div>
    <div style="margin-top:auto;padding:12px 10px;border-top:1px solid rgba(255,255,255,0.08)">
      <button class="ni" onclick="doLogout()" style="color:var(--terra2)">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>Salir
      </button>
    </div>
  </div>

  <div class="coach-main">
    <div class="coach-topbar">
      <div class="ptitle" id="coach-ptitle">Overview</div>
      <div style="display:flex;align-items:center;gap:12px">
        <button class="btn btn-sm" onclick="openApiModal()">⚙ API Key</button>
        <span id="api-status" style="font-size:10px;color:var(--ink3)"></span>
        <div class="av">CH</div>
      </div>
    </div>

    <div class="coach-content">

      <!-- OVERVIEW -->
      <div class="tab active" id="tab-overview">
        <div class="metrics">
          <div class="mc"><div class="mc-label">Clientes activos</div><div class="mc-val" id="m-clients">—</div><div class="mc-sub">registrados</div></div>
          <div class="mc"><div class="mc-label">Sesiones hoy</div><div class="mc-val">4</div><div class="mc-sub">2 restantes</div></div>
          <div class="mc"><div class="mc-label">Revenue mensual</div><div class="mc-val" style="font-size:22px">$4,820</div><div class="mc-sub">+12% vs mes anterior</div></div>
          <div class="mc"><div class="mc-label">Completación</div><div class="mc-val">78<span style="font-size:16px">%</span></div><div class="mc-sub">promedio clientes</div></div>
        </div>
        <div class="two-col">
          <div class="card">
            <div class="section-label">Clientes recientes</div>
            <div id="overview-clients-list"><div style="font-size:11px;color:var(--ink3)">Cargando...</div></div>
          </div>
          <div class="card">
            <div class="section-label">Sesiones de hoy</div>
            <div class="client-row" style="gap:12px"><div style="font-size:10px;color:var(--ink3);width:56px;flex-shrink:0">9:00 am</div><div><div style="font-size:12px">Sofia Reyes</div><div style="font-size:10px;color:var(--ink3)">Fuerza · 60 min</div></div></div>
            <div class="client-row" style="gap:12px"><div style="font-size:10px;color:var(--ink3);width:56px;flex-shrink:0">11:00 am</div><div><div style="font-size:12px">Marcus Kim</div><div style="font-size:10px;color:var(--ink3)">HIIT · 45 min</div></div></div>
            <div class="client-row" style="gap:12px"><div style="font-size:10px;color:var(--ink3);width:56px;flex-shrink:0">2:00 pm</div><div><div style="font-size:12px">Amber Liu</div><div style="font-size:10px;color:var(--ink3)">Cardio · 60 min</div></div></div>
            <div class="client-row" style="gap:12px"><div style="font-size:10px;color:var(--ink3);width:56px;flex-shrink:0">4:30 pm</div><div><div style="font-size:12px">Tom Davies</div><div style="font-size:10px;color:var(--ink3)">Fútbol · 45 min</div></div></div>
          </div>
        </div>
      </div>

      <!-- CLIENTS TAB -->
      <div class="tab" id="tab-clients">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px; flex-wrap:wrap; gap:10px;">
          <div style="font-size:11px; color:var(--ink3);" id="clients-count-label">Loading clients...</div>
          <div style="display:flex; gap:10px; flex:1; max-width:400px; justify-content:flex-end;">
            <input type="text" id="client-search" class="form-input" placeholder="Search by name or email..." onkeyup="filterClients()" style="padding:6px 12px; font-size:11px; width:100%;">
            <button class="btn btn-sm" onclick="loadClients()">↺ Refresh</button>
          </div>
        </div>
        <div class="card" style="padding:0; overflow:hidden;">
          <div class="table-header" style="grid-template-columns: 2fr 1.5fr 1fr 1fr 80px;">
            <div>Client Profile</div><div>Main Goal</div><div>Level</div><div>Equipment</div><div>Action</div>
          </div>
          <div id="clients-table-body">
            <div style="padding:20px; font-size:11px; color:var(--ink3);">Loading registered clients...</div>
          </div>
        </div>
      </div>

      <!-- AI PLANS TAB -->
      <div class="tab" id="tab-ai-plans">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
          <div style="font-size:11px;color:var(--ink3)">Selecciona un cliente o configura manualmente</div>
          <div style="display:flex;gap:10px;align-items:center">
            <span id="api-status-plans" style="font-size:10px;color:var(--ink3)"></span>
            <button class="btn btn-sm" onclick="openApiModal()">⚙ API Key</button>
          </div>
        </div>
        <div class="gen-layout">
          <div class="card">
            <div class="section-label">Configuración del plan</div>
            <div class="form-group"><label class="form-label">Cliente</label>
              <select class="form-select" id="g-client-select" onchange="prefillFromClient()">
                <option value="">— Manual —</option>
              </select>
            </div>
            <div class="form-group"><label class="form-label">Nombre</label><input class="form-input" id="g-client" placeholder="Nombre del cliente"/></div>
            <div class="form-group"><label class="form-label">Objetivo</label>
              <select class="form-select" id="g-goal">
                <option value="general fitness">Condición general</option>
                <option value="fat loss">Pérdida de grasa</option>
                <option value="muscle gain">Ganancia muscular</option>
                <option value="soccer player fitness and conditioning">Fútbol / Soccer</option>
                <option value="endurance running">Resistencia</option>
                <option value="HIIT and conditioning">HIIT</option>
                <option value="strength training">Fuerza máxima</option>
              </select>
            </div>
            <div class="form-group"><label class="form-label">Sesiones / semana</label>
              <select class="form-select" id="g-sessions"><option>2</option><option>3</option><option selected>4</option><option>5</option></select>
            </div>
            <div class="form-group"><label class="form-label">Nivel</label>
              <select class="form-select" id="g-level"><option>Beginner</option><option selected>Intermediate</option><option>Advanced</option></select>
            </div>
            <div class="form-group"><label class="form-label">Equipo</label>
              <select class="form-select" id="g-equip"><option>Full gym</option><option>Dumbbells + bench</option><option>Bodyweight only</option><option>Pitch / field access</option></select>
            </div>
            <div class="form-group"><label class="form-label">Notas / lesiones</label>
              <textarea class="form-textarea" id="g-notes" placeholder="Lesiones, áreas de enfoque, notas del cliente..."></textarea>
            </div>
            <button class="btn btn-terra" style="width:100%" onclick="generatePlan()">Generar plan con IA</button>
          </div>

          <div class="ai-output" id="ai-output">
            <div id="ai-placeholder" style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:280px;gap:10px;color:var(--ink3)">
              <div style="width:36px;height:36px;border:1px solid var(--border2);border-radius:50%;display:flex;align-items:center;justify-content:center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z"/></svg>
              </div>
              <div style="font-size:9px;letter-spacing:2px;text-transform:uppercase">Configura y haz clic en generar</div>
            </div>
            <div id="ai-loading" style="display:none;text-align:center;padding:40px 0">
              <div style="font-size:9px;letter-spacing:2px;text-transform:uppercase;color:var(--ink3);margin-bottom:10px">Generando plan...</div>
              <div class="loading-dots"><div class="dot-anim"></div><div class="dot-anim"></div><div class="dot-anim"></div></div>
            </div>
            <div id="ai-plan-content" style="display:none"></div>
          </div>
        </div>
      </div>

      <!-- SCHEDULE TAB -->
      <div class="tab" id="tab-schedule">
        <div class="two-col">
          <div class="card">
            <div class="section-label">Abril 2026</div>
            <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:3px;margin-bottom:6px">
              <div style="text-align:center;font-size:8px;color:var(--ink3);padding:3px">Do</div><div style="text-align:center;font-size:8px;color:var(--ink3);padding:3px">Lu</div><div style="text-align:center;font-size:8px;color:var(--ink3);padding:3px">Ma</div><div style="text-align:center;font-size:8px;color:var(--ink3);padding:3px">Mi</div><div style="text-align:center;font-size:8px;color:var(--ink3);padding:3px">Ju</div><div style="text-align:center;font-size:8px;color:var(--ink3);padding:3px">Vi</div><div style="text-align:center;font-size:8px;color:var(--ink3);padding:3px">Sa</div>
            </div>
            <div style="display:grid;grid-template-columns:repeat(7,1fr);gap:3px" id="coach-cal"></div>
            <div style="margin-top:14px"><button class="btn btn-solid btn-sm">+ Agendar llamada</button></div>
          </div>
          <div class="card">
            <div class="section-label">Próximas sesiones</div>
            <div style="display:flex;flex-direction:column;gap:8px">
              <div style="padding:10px;background:var(--beige);border-radius:3px;border-left:2px solid var(--olive)"><div style="font-size:12px">Sofia Reyes</div><div style="font-size:10px;color:var(--olive);margin-top:2px">Hoy · 9:00 am</div><div style="font-size:10px;color:var(--ink3)">Fuerza · 60 min</div></div>
              <div style="padding:10px;background:var(--beige);border-radius:3px;border-left:2px solid var(--terracotta)"><div style="font-size:12px">Tom Davies</div><div style="font-size:10px;color:var(--terracotta);margin-top:2px">Hoy · 4:30 pm</div><div style="font-size:10px;color:var(--ink3)">Fútbol conditioning · 45 min</div></div>
              <div style="padding:10px;background:var(--beige);border-radius:3px;border-left:2px solid var(--olive)"><div style="font-size:12px">Amber Liu</div><div style="font-size:10px;color:var(--olive);margin-top:2px">Abr 27 · 10:00 am</div><div style="font-size:10px;color:var(--ink3)">Resistencia · 60 min</div></div>
              <div style="padding:10px;background:var(--beige);border-radius:3px;border-left:2px solid var(--ink3)"><div style="font-size:12px">Marcus Kim</div><div style="font-size:10px;color:var(--ink3);margin-top:2px">Abr 28 · 11:00 am</div><div style="font-size:10px;color:var(--ink3)">HIIT · 45 min</div></div>
            </div>
          </div>
        </div>
      </div>

      <!-- PAYMENTS TAB -->
      <div class="tab" id="tab-payments">
        <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:18px">
          <div class="mc"><div class="mc-label">Este mes</div><div class="mc-val" style="font-size:22px">$4,820</div><div class="mc-sub">+12% vs anterior</div></div>
          <div class="mc"><div class="mc-label">Pendiente</div><div class="mc-val" style="font-size:22px;color:var(--terracotta)">$640</div><div class="mc-sub">2 facturas</div></div>
          <div class="mc"><div class="mc-label">Promedio / cliente</div><div class="mc-val" style="font-size:22px">$201</div><div class="mc-sub">mensual</div></div>
        </div>
        <div class="card" style="padding:0;overflow:hidden;margin-bottom:14px">
          <div class="table-header" style="grid-template-columns:50px 2fr 1fr 1fr 90px">
            <div>#</div><div>Cliente</div><div>Monto</div><div>Vence</div><div>Estado</div>
          </div>
          <div class="table-row" style="grid-template-columns:50px 2fr 1fr 1fr 90px"><div style="color:var(--ink3)">1042</div><div>Sofia Reyes</div><div>$320</div><div style="color:var(--ink3)">Abr 1</div><div><span class="badge bo">Pagado</span></div></div>
          <div class="table-row" style="grid-template-columns:50px 2fr 1fr 1fr 90px"><div style="color:var(--ink3)">1043</div><div>Marcus Kim</div><div>$280</div><div style="color:var(--ink3)">Abr 10</div><div><span class="badge bt">Pendiente</span></div></div>
          <div class="table-row" style="grid-template-columns:50px 2fr 1fr 1fr 90px"><div style="color:var(--ink3)">1044</div><div>Amber Liu</div><div>$480</div><div style="color:var(--ink3)">Abr 1</div><div><span class="badge bo">Pagado</span></div></div>
          <div class="table-row" style="grid-template-columns:50px 2fr 1fr 1fr 90px"><div style="color:var(--ink3)">1045</div><div>Tom Davies</div><div>$180</div><div style="color:var(--ink3)">Abr 15</div><div><span class="badge bo">Pagado</span></div></div>
        </div>
        <div style="display:flex;gap:10px">
          <button class="btn btn-solid btn-sm">+ Crear factura</button>
          <button class="btn btn-sm">Exportar CSV</button>
        </div>
      </div>

    </div><!-- end coach-content -->
  </div><!-- end coach-main -->
</div><!-- end page-coach -->

<!-- CLIENT DETAIL PANEL -->
<div class="client-detail" id="client-detail">
  <div class="cd-panel">
    <div class="cd-header">
      <div>
        <div style="font-size:9px;letter-spacing:2px;text-transform:uppercase;color:var(--ink3);margin-bottom:3px">Perfil del cliente</div>
        <div style="font-family:'Cormorant Garamond',serif;font-size:20px;font-weight:500" id="cd-name">—</div>
      </div>
      <button class="btn btn-sm" onclick="closeClientDetail()">✕ Cerrar</button>
    </div>
    <div class="cd-body">
      <div class="cd-grid" style="margin-bottom:20px">
        <div class="cd-section"><div class="cd-label">Email</div><div class="cd-val" id="cd-email">—</div></div>
        <div class="cd-section"><div class="cd-label">Objetivo</div><div class="cd-val" id="cd-goal">—</div></div>
        <div class="cd-section"><div class="cd-label">Peso Actual</div><div class="cd-val" id="cd-weight">—</div></div>
        <div class="cd-section"><div class="cd-label">Nivel</div><div class="cd-val" id="cd-level">—</div></div>
      </div>
      <div class="cd-section" style="margin-top:30px; border-top: 1px solid var(--border); padding-top:20px;">
        <div class="cd-label">Historial de Check-ins (Progress)</div>
        <div id="cd-progress-feed" style="margin-top:10px;">
          <div style="font-size:11px; color:var(--ink3);">Cargando historial...</div>
        </div>
      </div>
      <div class="cd-section" style="margin-top:20px;"><div class="cd-label">Lesiones / Notas</div><div class="cd-val" id="cd-notes" style="font-size:12px;line-height:1.7">—</div></div>
      <div style="display:flex; gap:10px; margin-top:30px;">
        <button class="btn btn-terra btn-sm" style="flex:1" onclick="loadClientIntoGenerator()">Generar Plan con IA →</button>
        <button class="btn btn-sm" onclick="alert('Feature: Send direct message to client email')">Contactar</button>
      </div>
    </div>
  </div>
</div>

<!-- API KEY MODAL -->
<div id="api-modal">
  <div class="modal" style="position:relative;max-width:460px;width:90%">
    <button class="modal-close" onclick="closeApiModal()">✕</button>
    <div class="modal-title">Conectar Google Gemini</div>
    <div class="modal-sub">Ingresa tu API key de Google Gemini para generar planes. Se guarda localmente en tu navegador.</div>
    <div style="background:var(--beige);border:1px solid var(--border);border-radius:3px;padding:14px;margin-bottom:18px;font-size:11px;line-height:1.9;color:var(--ink2)">
      <strong style="color:var(--olive);font-size:9px;letter-spacing:2px;text-transform:uppercase;display:block;margin-bottom:6px">Cómo obtener tu key</strong>
      1. Ve a <strong>aistudio.google.com</strong><br>
      2. Inicia sesión con tu cuenta de Google<br>
      3. Haz clic en <strong>Get API key → Create API key</strong><br>
      4. Copia la key (usualmente empieza con <code>AIza</code>)<br>
      5. Pégala abajo
    </div>
    <div class="form-group"><label class="form-label">Tu Google API Key</label><input id="api-key-input" type="password" class="form-input" placeholder="AIzaSy..."/></div>
    <div style="display:flex;gap:10px">
      <button class="btn btn-solid" style="flex:1;padding:11px" onclick="saveApiKey()">Guardar</button>
      <button class="btn" style="padding:11px 16px" onclick="closeApiModal()">Cancelar</button>
    </div>
    <div id="api-save-msg" style="text-align:center;font-size:11px;margin-top:10px;min-height:16px"></div>
  </div>
</div>

<script>
// ===== FIREBASE CONFIG =====
const firebaseConfig = {
  apiKey: "AIzaSyD1LpxtvIbqknl7zjYWoDFM2Q5MA2bp2BQ",
  authDomain: "fitcoach-ai-a0d20.firebaseapp.com",
  projectId: "fitcoach-ai-a0d20",
  storageBucket: "fitcoach-ai-a0d20.firebasestorage.app",
  messagingSenderId: "343838613068",
  appId: "1:343838613068:web:f775a751c9bd7d9f2e5ee9"
};
if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

const COACH_EMAIL = "chentemolina1099@gmail.com";

// ===== PAGE ROUTING =====
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
}

// ===== AUTH =====
auth.onAuthStateChanged(user => {
  if (user) {
    closeAuth();
    if (user.email === COACH_EMAIL) {
      showPage('coach');
      loadClients();
      buildCoachCal();
      updateApiStatus();
    } else {
      showPage('client');
      document.getElementById('client-email-display').textContent = user.email;
      // Initialize client view to Overview tab
      showClientTab('c-overview', document.querySelectorAll('#page-client .ni')[0]);
      loadClientProfile(user);
      loadCheckins(user.uid);
    }
  } else {
    showPage('landing');
  }
});

function openAuth(mode) {
  document.getElementById('auth-modal').classList.add('open');
  switchAuthTab(mode);
}
function closeAuth() { document.getElementById('auth-modal').classList.remove('open'); }
function switchAuthTab(mode) {
  document.getElementById('auth-login-form').style.display = mode === 'login' ? 'block' : 'none';
  document.getElementById('auth-signup-form').style.display = mode === 'signup' ? 'block' : 'none';
  document.getElementById('tab-login').classList.toggle('active', mode === 'login');
  document.getElementById('tab-signup').classList.toggle('active', mode === 'signup');
  document.getElementById('auth-msg').textContent = '';
}
function setAuthMsg(msg, color = 'red') {
  const el = document.getElementById('auth-msg');
  el.textContent = msg;
  el.style.color = color;
}
function doLogin() {
  const email = document.getElementById('login-email').value.trim();
  const pw = document.getElementById('login-password').value;
  if (!email || !pw) { setAuthMsg('Por favor completa todos los campos'); return; }
  setAuthMsg('Iniciando sesión...', 'var(--ink3)');
  auth.signInWithEmailAndPassword(email, pw).catch(e => setAuthMsg(translateError(e.code)));
}
function doSignup() {
  const email = document.getElementById('signup-email').value.trim();
  const pw = document.getElementById('signup-password').value;
  if (!email || !pw) { setAuthMsg('Por favor completa todos los campos'); return; }
  if (pw.length < 6) { setAuthMsg('La contraseña debe tener al menos 6 caracteres'); return; }
  setAuthMsg('Creando cuenta...', 'var(--ink3)');
  auth.createUserWithEmailAndPassword(email, pw).catch(e => setAuthMsg(translateError(e.code)));
}
function doLogout() { auth.signOut(); }
function translateError(code) {
  const map = {
    'auth/user-not-found': 'Usuario no encontrado',
    'auth/wrong-password': 'Contraseña incorrecta',
    'auth/email-already-in-use': 'Este correo ya está registrado',
    'auth/invalid-email': 'Correo inválido',
    'auth/weak-password': 'Contraseña muy débil',
    'auth/too-many-requests': 'Demasiados intentos. Intenta más tarde',
    'auth/invalid-credential': 'Correo o contraseña incorrectos'
  };
  return map[code] || 'Error: ' + code;
}

// ===== CLIENT PROFILE =====
function loadClientProfile(user) {
  db.collection('clients').doc(user.uid).get().then(doc => {
    if (doc.exists) {
      const d = doc.data();
      if (d.name)         document.getElementById('c-name').value = d.name;
      if (d.dob)          document.getElementById('c-dob').value = d.dob;
      if (d.weight)       document.getElementById('c-weight').value = d.weight;
      if (d.height)       document.getElementById('c-height').value = d.height;
      if (d.goal)         document.getElementById('c-goal').value = d.goal;
      if (d.trainingType) document.getElementById('c-training-type').value = d.trainingType;
      if (d.equipment)    document.getElementById('c-equipment').value = d.equipment;
      if (d.days)         document.getElementById('c-days').value = d.days;
      if (d.level)        document.getElementById('c-level').value = d.level;
      if (d.injuries)     document.getElementById('c-injuries').value = d.injuries;
      if (d.notes)        document.getElementById('c-notes').value = d.notes;

      if (d.name) {
        document.getElementById('client-greeting').textContent = 'Hello, ' + d.name.split(' ')[0] + ' 👋';
        document.getElementById('client-av').textContent = d.name.substring(0, 2).toUpperCase();
      }
      document.getElementById('dash-goal').textContent = d.goal ? d.goal.toUpperCase() : 'Pending Setup';

      if (d.plan) {
        document.getElementById('client-plan-content').innerHTML = d.plan;
      }
    }
  });
}

function saveClientProfile() {
  const user = auth.currentUser;
  if (!user) return;
  const msg = document.getElementById('client-save-msg');
  msg.style.color = 'var(--ink3)';
  msg.textContent = 'Guardando...';
  const data = {
    email: user.email,
    name: document.getElementById('c-name').value,
    dob: document.getElementById('c-dob').value,
    weight: document.getElementById('c-weight').value,
    height: document.getElementById('c-height').value,
    goal: document.getElementById('c-goal').value,
    trainingType: document.getElementById('c-training-type').value,
    equipment: document.getElementById('c-equipment').value,
    days: document.getElementById('c-days').value,
    level: document.getElementById('c-level').value,
    injuries: document.getElementById('c-injuries').value,
    notes: document.getElementById('c-notes').value,
    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
  };
  db.collection('clients').doc(user.uid).set(data, { merge: true })
    .then(() => {
      msg.style.color = 'var(--olive)';
      msg.textContent = '✓ Perfil guardado correctamente';
      if (data.name) document.getElementById('client-greeting').textContent = 'Hello, ' + data.name.split(' ')[0] + ' 👋';
      document.getElementById('dash-goal').textContent = data.goal ? data.goal.toUpperCase() : 'Pending Setup';
    })
    .catch(e => { msg.style.color = 'red'; msg.textContent = 'Error: ' + e.message; });
}

// ===== COACH: LOAD CLIENTS =====
let allClients = [];
let selectedClient = null;

function loadClients() {
  db.collection('clients').get().then(snap => {
    allClients = [];
    snap.forEach(doc => allClients.push({ id: doc.id, ...doc.data() }));
    document.getElementById('m-clients').textContent = allClients.length;
    document.getElementById('clients-count-label').textContent = allClients.length + ' cliente(s) registrados';
    renderClientsTable();
    renderOverviewClients();
    populateClientDropdown();
  }).catch(e => {
    document.getElementById('clients-table-body').innerHTML = '<div style="padding:16px;font-size:11px;color:red">Error cargando clientes: ' + e.message + '</div>';
  });
}

function renderClientsTable(clientsToRender = allClients) {
  const tbody = document.getElementById('clients-table-body');
  if (!clientsToRender.length) {
    tbody.innerHTML = '<div style="padding:20px; font-size:11px; color:var(--ink3);">No clients found.</div>';
    return;
  }
  tbody.innerHTML = clientsToRender.map(c => `
    <div class="table-row" style="grid-template-columns: 2fr 1.5fr 1fr 1fr 80px;" onclick="openClientDetail('${c.id}')">
      <div>
        <div style="font-weight:500; font-size:12px; color:var(--ink2);">${c.name || 'Unnamed Client'}</div>
        <div style="font-size:10px; color:var(--ink3);">${c.email || ''}</div>
      </div>
      <div>
        <div style="font-size:11px; color:var(--ink2); text-transform:capitalize;">${c.goal || '—'}</div>
        <div style="font-size:9px; color:var(--ink3);">${c.days ? c.days + ' days/week' : ''}</div>
      </div>
      <div style="font-size:11px; color:var(--ink3);">${c.level || '—'}</div>
      <div style="font-size:11px; color:var(--ink3);">${c.equipment || '—'}</div>
      <div><button class="btn btn-solid btn-sm" style="font-size:9px; padding:5px 10px;">View →</button></div>
    </div>
  `).join('');
}

function filterClients() {
  const query = document.getElementById('client-search').value.toLowerCase();
  const filtered = allClients.filter(c => {
    const matchName = c.name && c.name.toLowerCase().includes(query);
    const matchEmail = c.email && c.email.toLowerCase().includes(query);
    return matchName || matchEmail;
  });
  renderClientsTable(filtered);
}

function renderOverviewClients() {
  const el = document.getElementById('overview-clients-list');
  if (!allClients.length) { el.innerHTML = '<div style="font-size:11px;color:var(--ink3)">Sin clientes aún.</div>'; return; }
  el.innerHTML = allClients.slice(0, 4).map(c => `
    <div class="client-row">
      <div class="cav" style="background:rgba(107,122,74,0.12);color:var(--olive3)">${(c.name || '?').substring(0, 2).toUpperCase()}</div>
      <div><div style="font-size:12px">${c.name || c.email}</div><div style="font-size:10px;color:var(--ink3)">${c.goal || 'Sin objetivo'}</div></div>
      <div class="badge bo" style="margin-left:auto">Activo</div>
    </div>
  `).join('');
}

function populateClientDropdown() {
  const sel = document.getElementById('g-client-select');
  sel.innerHTML = '<option value="">— Manual —</option>';
  allClients.forEach(c => {
    const opt = document.createElement('option');
    opt.value = c.id;
    opt.textContent = c.name || c.email;
    sel.appendChild(opt);
  });
}

// FIX #6: Added missing prefillFromClient function
function prefillFromClient() {
  const id = document.getElementById('g-client-select').value;
  if (!id) return;
  const c = allClients.find(x => x.id === id);
  if (!c) return;
  selectedClient = c;
  document.getElementById('g-client').value = c.name || '';
  if (c.goal)      document.getElementById('g-goal').value = c.goal;
  if (c.level)     document.getElementById('g-level').value = c.level;
  if (c.equipment) document.getElementById('g-equip').value = c.equipment;
  if (c.days)      document.getElementById('g-sessions').value = c.days;
  let notesText = '';
  if (c.injuries) notesText += 'Injuries: ' + c.injuries + '. ';
  if (c.notes)    notesText += c.notes;
  if (notesText)  document.getElementById('g-notes').value = notesText.trim();
}

// ===== CLIENT DETAIL MODAL =====
function openClientDetail(id) {
  const c = allClients.find(x => x.id === id);
  if (!c) return;
  selectedClient = c;

  document.getElementById('cd-name').textContent  = c.name   || 'Sin nombre';
  document.getElementById('cd-email').textContent = c.email  || '—';
  document.getElementById('cd-goal').textContent  = c.goal   || '—';
  document.getElementById('cd-weight').textContent = c.weight ? c.weight + ' kg' : '—';
  document.getElementById('cd-level').textContent = c.level  || '—';
  document.getElementById('cd-notes').textContent = [c.notes, c.injuries].filter(Boolean).join(' | ') || '—';

  document.getElementById('client-detail').classList.add('open');

  const feed = document.getElementById('cd-progress-feed');
  feed.innerHTML = '<div style="font-size:11px; color:var(--ink3);">Cargando...</div>';

  db.collection('clients').doc(id).collection('checkins').orderBy('timestamp', 'desc').limit(5).get()
    .then(snap => {
      if (snap.empty) {
        feed.innerHTML = '<div style="font-size:11px; color:var(--ink3); background:var(--beige); padding:10px;">El cliente aún no ha realizado check-ins.</div>';
        return;
      }
      let html = '';
      snap.forEach(doc => {
        const d = doc.data();
        html += `
          <div style="padding:10px; border-bottom:1px solid var(--beige2); font-size:11px; display:flex; justify-content:space-between; align-items:center;">
            <div><strong>${d.date}</strong>: ${d.weight}kg · Energy ${d.energy}/10</div>
            <div style="color:var(--ink3); font-style:italic; max-width:55%; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">"${d.notes || 'No notes'}"</div>
          </div>`;
      });
      feed.innerHTML = html;
    });
}

// FIX #4: Added missing closeClientDetail function
function closeClientDetail() {
  document.getElementById('client-detail').classList.remove('open');
}

// FIX #5: Added missing loadClientIntoGenerator function
function loadClientIntoGenerator() {
  if (!selectedClient) return;
  closeClientDetail();
  // Switch to coach AI plans tab
  showCoachTab('ai-plans', document.querySelectorAll('#page-coach .ni')[2]);
  // Pre-fill form with client data
  document.getElementById('g-client-select').value = selectedClient.id || '';
  document.getElementById('g-client').value = selectedClient.name || '';
  if (selectedClient.goal)      document.getElementById('g-goal').value = selectedClient.goal;
  if (selectedClient.level)     document.getElementById('g-level').value = selectedClient.level;
  if (selectedClient.equipment) document.getElementById('g-equip').value = selectedClient.equipment;
  if (selectedClient.days)      document.getElementById('g-sessions').value = selectedClient.days;
  let notesText = '';
  if (selectedClient.injuries) notesText += 'Injuries: ' + selectedClient.injuries + '. ';
  if (selectedClient.notes)    notesText += selectedClient.notes;
  if (notesText) document.getElementById('g-notes').value = notesText.trim();
}

// ===== CLIENT NAV =====
const clientTabTitles = {
  'c-overview': 'Overview',
  'c-plan':     'My Plan',
  'c-progress': 'Progress Tracker',
  'c-booking':  'Schedule Call',
  'c-payments': 'Billing',
  'c-settings': 'Profile Settings'
};

function showClientTab(name, el) {
  document.querySelectorAll('#page-client .client-tab').forEach(t => t.style.display = 'none');
  document.querySelectorAll('#page-client .ni').forEach(n => n.classList.remove('active'));
  const targetTab = document.getElementById('tab-' + name);
  if (targetTab) targetTab.style.display = 'block';
  const titleEl = document.getElementById('client-ptitle');
  if (titleEl) titleEl.textContent = clientTabTitles[name] || 'Portal';
  if (el) el.classList.add('active');
}

// ===== COACH NAV =====
const tabTitles = { overview: 'Overview', clients: 'Clientes', 'ai-plans': 'AI Plan Generator', schedule: 'Calendario', payments: 'Pagos' };
function showCoachTab(name, el) {
  document.querySelectorAll('#page-coach .tab').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('#page-coach .ni').forEach(n => n.classList.remove('active'));
  document.getElementById('tab-' + name).classList.add('active');
  document.getElementById('coach-ptitle').textContent = tabTitles[name] || name;
  if (el) el.classList.add('active');
}

// ===== PROGRESS & CHECK-INS =====
function openCheckinModal() {
  document.getElementById('ci-msg').textContent = '';
  const currentWt = document.getElementById('stat-current-weight').textContent.replace(' kg', '').replace('--', '');
  document.getElementById('ci-weight').value = currentWt || '';
  document.getElementById('checkin-modal').classList.add('open');
}

function closeCheckinModal() {
  document.getElementById('checkin-modal').classList.remove('open');
}

function submitCheckin() {
  const user = auth.currentUser;
  if (!user) return;
  const weight = document.getElementById('ci-weight').value;
  const bf     = document.getElementById('ci-bf').value;
  const energy = document.getElementById('ci-energy').value;
  const notes  = document.getElementById('ci-notes').value;
  const msg    = document.getElementById('ci-msg');

  if (!weight) { msg.style.color = 'red'; msg.textContent = 'Please enter your weight.'; return; }

  msg.style.color = 'var(--ink3)';
  msg.textContent = 'Saving...';

  const checkinData = {
    weight: parseFloat(weight),
    bf:     bf ? parseFloat(bf) : null,
    energy: parseInt(energy),
    notes:  notes,
    date:   new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    timestamp: firebase.firestore.FieldValue.serverTimestamp()
  };

  db.collection('clients').doc(user.uid).collection('checkins').add(checkinData)
    .then(() => db.collection('clients').doc(user.uid).update({ weight: checkinData.weight }))
    .then(() => {
      msg.style.color = 'var(--olive)';
      msg.textContent = '✓ Check-in saved!';
      setTimeout(() => {
        closeCheckinModal();
        loadCheckins(user.uid);
      }, 1000);
    })
    .catch(e => { msg.style.color = 'red'; msg.textContent = 'Error: ' + e.message; });
}

function loadCheckins(uid) {
  const feed = document.getElementById('checkin-feed');
  db.collection('clients').doc(uid).collection('checkins').orderBy('timestamp', 'desc').get()
    .then(snap => {
      if (snap.empty) {
        feed.innerHTML = '<div style="padding:20px; font-size:11px; color:var(--ink3);">No check-ins yet. Start tracking your progress!</div>';
        return;
      }
      const docs = snap.docs;
      const currentWeight = docs[0].data().weight;
      const oldestWeight  = docs[docs.length - 1].data().weight;
      const weightDiff    = (currentWeight - oldestWeight).toFixed(1);
      const diffColor     = weightDiff <= 0 ? 'var(--olive)' : 'var(--terracotta)';
      const diffSign      = weightDiff > 0 ? '+' : '';

      document.getElementById('stat-start-weight').textContent    = oldestWeight + ' kg';
      document.getElementById('stat-current-weight').textContent  = currentWeight + ' kg';
      document.getElementById('stat-weight-change').textContent   = diffSign + weightDiff + ' kg';
      document.getElementById('stat-weight-change').style.color   = diffColor;

      let html = '';
      docs.forEach(doc => {
        const d = doc.data();
        const energyBar = `<div style="width:40px; height:4px; background:var(--beige2); border-radius:2px; overflow:hidden;"><div style="width:${d.energy * 10}%; height:100%; background:var(--olive);"></div></div>`;
        html += `
          <div class="table-row" style="grid-template-columns: 100px 1fr 1fr 2fr;">
            <div style="font-weight:500; color:var(--ink2);">${d.date}</div>
            <div><span style="font-size:14px; font-family:'Cormorant Garamond',serif;">${d.weight}</span> <span style="font-size:9px; color:var(--ink3);">kg</span></div>
            <div>${energyBar}</div>
            <div style="color:var(--ink3); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${d.notes || '—'}</div>
          </div>`;
      });
      feed.innerHTML = html;
    });
}

// ===== CALENDAR =====
function buildCoachCal() {
  const cal = document.getElementById('coach-cal');
  if (!cal) return;
  const sess = [2, 4, 7, 9, 11, 14, 16, 18, 21, 23, 25, 28, 30];
  // April 2026 starts on Wednesday (index 3)
  for (let i = 0; i < 3; i++) { const c = document.createElement('div'); c.className = 'cal-cell'; cal.appendChild(c); }
  for (let d = 1; d <= 30; d++) {
    const c = document.createElement('div');
    c.className = 'cal-cell am' + (d === 25 ? ' tc' : '');
    c.textContent = d;
    if (sess.includes(d) && d !== 25) { const dot = document.createElement('div'); dot.className = 'caldot'; c.appendChild(dot); }
    cal.appendChild(c);
  }
}

// ===== API KEY =====
function getApiKey() { return localStorage.getItem('chente_api_key') || ''; }
function updateApiStatus() {
  const k = getApiKey();
  const status = k ? '✓ API key guardada' : 'Sin API key';
  const color  = k ? 'var(--olive)' : 'var(--terracotta)';
  ['api-status', 'api-status-plans'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.textContent = status; el.style.color = color; }
  });
}
function openApiModal() {
  document.getElementById('api-key-input').value = getApiKey();
  document.getElementById('api-modal').classList.add('open');
  document.getElementById('api-save-msg').textContent = '';
}
function closeApiModal() { document.getElementById('api-modal').classList.remove('open'); }
function saveApiKey() {
  const k   = document.getElementById('api-key-input').value.trim();
  const msg = document.getElementById('api-save-msg');
  if (k.length < 30) { msg.style.color = 'red'; msg.textContent = 'Key inválida. Revisa que esté completa.'; return; }
  localStorage.setItem('chente_api_key', k);
  msg.style.color = 'var(--olive)';
  msg.textContent = '✓ Guardada correctamente';
  updateApiStatus();
  setTimeout(closeApiModal, 800);
}

// ===== AI PLAN GENERATOR =====
// FIX #3: generatePlan and renderPlan are now separate top-level functions with correct brace structure
async function generatePlan() {
  const apiKey = getApiKey();
  if (!apiKey) { openApiModal(); return; }

  const client   = document.getElementById('g-client').value || 'Cliente';
  const goal     = document.getElementById('g-goal').value;
  const sessions = document.getElementById('g-sessions').value;
  const level    = document.getElementById('g-level').value;
  const equip    = document.getElementById('g-equip').value;
  const notes    = document.getElementById('g-notes').value;

  document.getElementById('ai-placeholder').style.display   = 'none';
  document.getElementById('ai-plan-content').style.display  = 'none';
  document.getElementById('ai-loading').style.display       = 'block';

  const isSoccer = goal.toLowerCase().includes('soccer') || goal.toLowerCase().includes('fútbol');

  const prompt = `You are an expert fitness coach. Generate a structured ${sessions}-day/week workout plan for a ${level} client named ${client} whose goal is: ${goal}. Equipment: ${equip}. ${notes ? 'Notes: ' + notes : ''}
${isSoccer ? 'Soccer player plan: include pitch work, explosive speed, agility ladders, position-specific conditioning, and ball work. Balance gym strength with field sessions.' : ''}
Return ONLY valid JSON (no markdown, no backticks):
{"planTitle":"string","coachNote":"string","isSport":boolean,"sport":"string or null","days":[{"day":"string","focus":"string","type":"gym|field|rest|cardio","exercises":[{"name":"string","sets":"string","reps":"string","note":"string or null"}]}]}`;

  try {
    const resp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { response_mime_type: "application/json" }
      })
    });

    if (!resp.ok) {
      const err = await resp.json().catch(() => ({}));
      throw new Error(err.error?.message || 'Error ' + resp.status);
    }

    const data = await resp.json();
    const raw  = data.candidates[0].content.parts[0].text;
    const plan = JSON.parse(raw.replace(/```json|```/g, '').trim());

    renderPlan(plan, client, sessions, level);

    // Save plan HTML to client's Firestore profile
    if (selectedClient?.id) {
      const planHtml = document.getElementById('ai-plan-content').innerHTML;
      db.collection('clients').doc(selectedClient.id).update({ plan: planHtml }).catch(() => {});
    }

  } catch (e) {
    document.getElementById('ai-loading').style.display      = 'none';
    document.getElementById('ai-plan-content').style.display = 'block';

    const msg = e.message || 'Error desconocido';
    let userFriendlyMsg = msg;

    if (msg.toLowerCase().includes('demand') || msg.toLowerCase().includes('429') || msg.toLowerCase().includes('503') || msg.toLowerCase().includes('quota')) {
      userFriendlyMsg = "El Coach de IA está procesando muchas solicitudes. Espera 60 segundos y vuelve a intentarlo.";
    } else if (msg.toLowerCase().includes('api_key') || msg.toLowerCase().includes('key invalid') || msg.toLowerCase().includes('400')) {
      userFriendlyMsg = 'Tu API key parece incorrecta. <a href="#" onclick="openApiModal()" style="color:var(--olive)">Actualizarla aquí</a>.';
    } else {
      userFriendlyMsg = 'Verifica tu conexión e intenta de nuevo. (' + msg + ')';
    }

    document.getElementById('ai-plan-content').innerHTML = `
      <div style="background:var(--beige); border-left:3px solid var(--terracotta); padding:16px; margin-top:10px;">
        <span style="font-size:10px; letter-spacing:2px; text-transform:uppercase; color:var(--terra3); display:block; margin-bottom:6px;">Aviso del Sistema</span>
        <div style="font-size:12px; line-height:1.6; color:var(--ink2);">${userFriendlyMsg}</div>
      </div>`;
  }
}

// FIX #3: renderPlan is now a standalone top-level function
function renderPlan(plan, client, sessions, level) {
  document.getElementById('ai-loading').style.display      = 'none';
  document.getElementById('ai-plan-content').style.display = 'block';

  const pc = document.getElementById('ai-plan-content');
  const tc = { gym: 'var(--olive)', field: 'var(--terracotta)', cardio: 'var(--ink2)', rest: 'var(--ink3)' };

  let html = `<div style="display:flex;align-items:baseline;justify-content:space-between;margin-bottom:16px;padding-bottom:14px;border-bottom:1px solid var(--beige2)">
    <div>
      <div style="font-size:9px;letter-spacing:1.5px;text-transform:uppercase;color:var(--ink3);margin-bottom:3px">${client}</div>
      <div style="font-family:'Cormorant Garamond',serif;font-size:20px;font-weight:500">${plan.planTitle || 'Plan de Entrenamiento'}</div>
    </div>
    <div style="font-size:9px;color:var(--ink3)">${sessions}x/sem · ${level}</div>
  </div>`;

  if (plan.isSport && plan.sport) {
    html += `<div class="sport-tag"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/></svg>${plan.sport}</div>`;
  }

  (plan.days || []).forEach(day => {
    html += `<div class="plan-day">
      <div style="font-family:'Cormorant Garamond',serif;font-size:15px;font-weight:500">${day.day}</div>
      <div style="font-size:9px;letter-spacing:1.2px;text-transform:uppercase;color:${tc[day.type] || 'var(--ink3)'};margin-bottom:8px">${day.focus}</div>`;
    (day.exercises || []).forEach(ex => {
      html += `<div class="ex-row">
        <div style="color:var(--ink2)">${ex.name}${ex.note ? `<span style="color:var(--ink3);font-size:10px;margin-left:6px">— ${ex.note}</span>` : ''}</div>
        <div style="color:var(--ink3);font-size:10px;white-space:nowrap;margin-left:8px">${ex.sets && ex.reps ? ex.sets + '×' + ex.reps : ex.sets || ex.reps || ''}</div>
      </div>`;
    });
    html += `</div>`;
  });

  if (plan.coachNote) {
    html += `<div class="note-box"><span style="font-size:8px;letter-spacing:2px;text-transform:uppercase;color:var(--olive);display:block;margin-bottom:4px">Nota del coach</span>${plan.coachNote}</div>`;
  }

  html += `<div style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
    <button class="btn btn-solid btn-sm" onclick="generatePlan()">↺ Regenerar</button>
    <button class="btn btn-sm" onclick="window.print()">Imprimir plan</button>
  </div>`;

  pc.innerHTML = html;
}

// ===== LANGUAGE TOGGLE =====
let currentLang = 'en';
function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'es' : 'en';
  const btn = document.getElementById('lang-toggle-btn');
  if (btn) btn.textContent = currentLang === 'en' ? 'ESP' : 'ENG';
  document.querySelectorAll('.i18n').forEach(el => {
    const newText = el.getAttribute('data-' + currentLang);
    if (newText) el.textContent = newText;
  });
}

// Show API modal if no key on first coach load
setTimeout(() => {
  if (auth.currentUser?.email === COACH_EMAIL && !getApiKey()) {
    openApiModal();
  }
}, 1200);
</script>
</body>
</html>
