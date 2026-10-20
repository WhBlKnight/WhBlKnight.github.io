<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="dark">
  <meta name="theme-color" content="#080d19">
  <meta name="description" content="프로그래머와 화이트해커의 역할, 실제 직무, 핵심 기술, 진로 로드맵을 알아보는 인터랙티브 진로 발표 웹사이트입니다.">
  <title>CODE THE FUTURE | 프로그래머와 화이트해커 진로 탐구</title>
  <style>
    :root {
      --bg: #080d19;
      --bg-deep: #060913;
      --panel: #111a2c;
      --panel-2: #151f33;
      --stroke: rgba(181,206,250,.13);
      --stroke-strong: rgba(181,206,250,.26);
      --text: #f2f6ff;
      --muted: #9caecb;
      --muted-2: #7184a5;
      --blue: #68a4ff;
      --cyan: #65e6e1;
      --violet: #aa8aff;
      --lime: #d2f67e;
      --max: 1180px;
      --radius: 24px;
      --font: -apple-system, BlinkMacSystemFont, "Pretendard", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Segoe UI", sans-serif;
    }
    *,*::before,*::after{box-sizing:border-box}
    html{scroll-behavior:smooth;scroll-padding-top:86px}
    body{margin:0;min-width:320px;background:var(--bg);color:var(--text);font-family:var(--font);-webkit-font-smoothing:antialiased;word-break:keep-all}
    body::before{content:"";position:fixed;inset:0;pointer-events:none;z-index:-1;background:radial-gradient(ellipse 65% 40% at 45% -8%,rgba(61,88,170,.13),transparent 80%)}
    a{color:inherit;text-decoration:none}
    button{font:inherit}
    button,a{-webkit-tap-highlight-color:transparent}
    button{cursor:pointer}
    button:disabled{cursor:not-allowed}
    :focus-visible{outline:3px solid var(--cyan);outline-offset:4px}
    ::selection{background:#4d72bb;color:white}
    .container{width:min(var(--max),calc(100% - 56px));margin-inline:auto}
    .sr-only{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap}
    #progress{position:fixed;z-index:101;top:0;left:0;height:3px;width:0;background:linear-gradient(90deg,var(--blue),var(--cyan),var(--violet));box-shadow:0 0 15px rgba(101,230,225,.6);transition:width .12s linear}

    /* HEADER */
    .header{position:sticky;top:0;z-index:100;height:76px;display:flex;align-items:center;background:rgba(8,13,25,.86);border-bottom:1px solid var(--stroke);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px)}
    .header-in{display:flex;align-items:center;gap:28px;justify-content:space-between}
    .brand{display:flex;align-items:center;gap:11px;white-space:nowrap}
    .brand-mark{width:39px;height:39px;display:grid;place-items:center;background:linear-gradient(145deg,#1f4272,#19294e);border:1px solid #4e79b6;border-radius:12px;font-size:19px;font-weight:900;color:#b9e6ff;box-shadow:0 6px 26px rgba(62,116,227,.17)}
    .brand-text{font-weight:850;letter-spacing:-.7px;font-size:16px}
    .brand-text span{font-size:10px;display:block;letter-spacing:2px;color:var(--muted-2);margin-top:3px;font-weight:700}
    .nav{display:flex;align-items:center;gap:4px}
    .nav a{font-size:13px;color:var(--muted);padding:11px 13px;border-radius:10px;transition:color .2s,background .2s;white-space:nowrap;font-weight:600}
    .nav a:hover,.nav a.active{color:white;background:rgba(121,154,222,.13)}
    .header-actions{display:flex;align-items:center;gap:9px}
    .btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;padding:14px 20px;border-radius:12px;border:1px solid transparent;line-height:1.2;font-size:14px;font-weight:780;transition:transform .2s,box-shadow .2s,border-color .2s,background .2s;white-space:nowrap}
    .btn:hover{transform:translateY(-2px)}
    .btn-primary{background:linear-gradient(110deg,#8cb5ff 0%,#a7c9ff 100%);color:#0b1731;box-shadow:0 14px 35px rgba(95,150,255,.20)}
    .btn-primary:hover{box-shadow:0 17px 45px rgba(95,150,255,.33)}
    .btn-ghost{color:var(--text);background:rgba(255,255,255,.035);border-color:var(--stroke-strong)}
    .btn-ghost:hover{background:rgba(255,255,255,.09);border-color:rgba(190,212,255,.46)}
    .btn-sm{padding:10px 14px;font-size:12px}
    .btn-icon{font-size:17px;line-height:1}
    .menu-toggle{display:none;width:42px;height:42px;border:1px solid var(--stroke-strong);background:#131d31;color:white;border-radius:12px;font-size:21px}

    /* HERO */
    .hero{position:relative;min-height:722px;display:flex;align-items:center;overflow:hidden;isolation:isolate}
    .hero::before{content:"";position:absolute;inset:0;z-index:-1;background:radial-gradient(ellipse 54% 55% at 73% 43%,rgba(59,88,179,.18),transparent 80%),radial-gradient(ellipse 28% 34% at 79% 56%,rgba(19,172,176,.10),transparent 80%)}
    .hero::after{content:"";position:absolute;z-index:-2;inset:0;background-image:linear-gradient(rgba(153,179,230,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(153,179,230,.045) 1px,transparent 1px);background-size:62px 62px;mask-image:linear-gradient(to right,transparent 5%,black 75%)}
    .hero-inner{display:grid;grid-template-columns:1.04fr .96fr;align-items:center;gap:46px;padding-block:105px 109px}
    .eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:11px;font-weight:800;letter-spacing:2.1px;text-transform:uppercase;color:var(--cyan);margin-bottom:27px}
    .eyebrow::before{content:"";width:7px;height:7px;background:var(--cyan);border-radius:100%;box-shadow:0 0 0 5px rgba(101,230,225,.12),0 0 18px rgba(101,230,225,.4)}
    .hero h1{font-size:clamp(45px,5.25vw,78px);letter-spacing:-.075em;line-height:1.19;margin:0 0 27px;font-weight:880}
    .gradient-text{background:linear-gradient(110deg,#a2c5ff 0%,#71e5e2 50%,#bdacff 100%);-webkit-background-clip:text;background-clip:text;color:transparent}
    .hero-lead{font-size:17px;color:var(--muted);line-height:1.9;max-width:560px;margin:0 0 33px}
    .hero-actions{display:flex;align-items:center;gap:12px;flex-wrap:wrap}
    .hero-caption{margin:24px 0 0;color:var(--muted-2);font-size:12px;display:flex;align-items:center;gap:8px;letter-spacing:.2px}
    .hero-caption .dash{width:19px;height:1px;background:var(--muted-2)}
    .hero-art{position:relative;min-height:470px;display:flex;align-items:center;justify-content:center}
    .orbit{position:absolute;width:485px;height:485px;max-width:120%;border:1px solid rgba(137,179,239,.12);border-radius:50%;transform:rotate(-25deg);pointer-events:none}
    .orbit::before{content:"";position:absolute;inset:47px;border:1px dashed rgba(147,187,240,.12);border-radius:50%}
    .orbit::after{content:"";position:absolute;top:42px;left:76px;width:8px;height:8px;background:var(--cyan);box-shadow:0 0 20px var(--cyan);border-radius:50%}
    .terminal{position:relative;z-index:1;width:min(100%,512px);border-radius:19px;background:#10192b;border:1px solid #395071;box-shadow:0 40px 110px rgba(0,0,0,.55),0 0 75px rgba(72,118,227,.14);overflow:hidden;transform:perspective(1000px) rotateY(-5deg) rotateX(3deg);transition:transform .35s}
    .terminal:hover{transform:perspective(1000px) rotateY(0) rotateX(0)}
    .terminal-top{height:47px;display:flex;align-items:center;justify-content:space-between;padding:0 17px;border-bottom:1px solid rgba(179,207,255,.13);background:#162136}
    .traffic{display:flex;gap:7px}
    .traffic i{width:9px;height:9px;border-radius:50%;background:#f17d87}
    .traffic i:nth-child(2){background:#f5c76a}.traffic i:nth-child(3){background:#6fd0a2}
    .terminal-path{font:11px ui-monospace,SFMono-Regular,Consolas,monospace;color:#748aaf}
    .terminal-status{color:#8addcf;font-size:10px;letter-spacing:1px;font-weight:800}
    .terminal-body{padding:30px 31px 25px;font:14px/2.07 ui-monospace,SFMono-Regular,Consolas,"Liberation Mono",monospace;white-space:nowrap;overflow:hidden}
    .term-comment{color:#6f85a7}.term-purple{color:#c3a6ff}.term-blue{color:#8bbcff}.term-green{color:#8ee7cf}.term-yellow{color:#efce86}.term-indent{padding-left:20px}
    .terminal-line{display:block}
    .terminal-bottom{display:flex;align-items:center;justify-content:space-between;border-top:1px solid var(--stroke);padding:15px 22px;background:#111e33;color:#91a9cc;font:11px ui-monospace,SFMono-Regular,Consolas,monospace}
    .signal{display:inline-flex;align-items:center;gap:7px}.signal::before{content:"";width:7px;height:7px;border-radius:50%;background:#66dfbc;box-shadow:0 0 12px #66dfbc}
    .float-card{position:absolute;z-index:3;background:rgba(26,42,67,.95);border:1px solid rgba(156,188,243,.29);border-radius:13px;box-shadow:0 16px 40px rgba(0,0,0,.35);padding:13px 16px;animation:float 6s ease-in-out infinite}
    .float-card strong{display:block;font-size:13px}.float-card small{font-size:10px;color:var(--muted);letter-spacing:1px}
    .float-one{top:10px;right:-11px}.float-two{bottom:13px;left:-16px;animation-delay:-3s}
    .float-one strong{color:var(--cyan)}.float-two strong{color:#c3b7ff}
    @keyframes float{0%,100%{translate:0 0}50%{translate:0 -9px}}

    /* GENERAL */
    .section{padding-block:110px;position:relative;scroll-margin-top:76px}
    .section-alt{background:#0c1425;border-block:1px solid rgba(183,209,255,.065)}
    .section-top{margin-bottom:48px;max-width:790px}
    .overline{display:flex;align-items:center;gap:12px;font-size:11px;letter-spacing:2.5px;color:var(--cyan);font-weight:850;margin-bottom:19px;text-transform:uppercase}
    .overline span{height:1px;width:25px;background:currentColor;opacity:.65}
    .section h2{font-size:clamp(30px,3.55vw,48px);letter-spacing:-.058em;line-height:1.32;margin:0 0 17px;font-weight:870}
    .section-desc{color:var(--muted);line-height:1.85;font-size:15.5px;margin:0}
    .section-index{font-size:13px;color:var(--muted-2);font-weight:800;letter-spacing:1px}
    .panel{background:linear-gradient(148deg,#162138,#0f182b);border:1px solid var(--stroke);border-radius:var(--radius)}
    .fine-note{font-size:12px;line-height:1.8;color:var(--muted-2)}
    .reveal{opacity:0;transform:translateY(20px);transition:opacity .6s ease,transform .6s ease}
    .reveal.visible{opacity:1;transform:translateY(0)}
    .highlight{color:var(--cyan)}
    .tag{display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:760;padding:7px 11px;border-radius:999px;color:#bcd4ff;background:rgba(104,164,255,.11);border:1px solid rgba(104,164,255,.21)}
    .tag.teal{color:#93eae0;background:rgba(101,230,225,.09);border-color:rgba(101,230,225,.19)}
    .tag.purple{color:#d1baff;background:rgba(170,138,255,.1);border-color:rgba(170,138,255,.21)}
    .tag.orange{color:#ffd59d;background:rgba(255,195,110,.1);border-color:rgba(255,195,110,.2)}
    .arrow-link{display:inline-flex;align-items:center;gap:8px;color:#9cd1ff;font-size:13px;font-weight:800}
    .arrow-link span{transition:transform .2s}.arrow-link:hover span{transform:translateX(4px)}

    /* AT A GLANCE */
    .snapshot-wrap{border-top:1px solid var(--stroke);border-bottom:1px solid var(--stroke);background:#0c1526}
    .snapshot{display:grid;grid-template-columns:repeat(3,1fr)}
    .snapshot-item{padding:26px 28px;display:flex;gap:18px;align-items:center}
    .snapshot-item:not(:last-child){border-right:1px solid var(--stroke)}
    .snapshot-num{font:700 26px ui-monospace,SFMono-Regular,Consolas,monospace;color:#829bcb}
    .snapshot-item b{display:block;font-size:14px;margin-bottom:7px}.snapshot-item p{font-size:12px;margin:0;color:var(--muted)}

    /* ROLES */
    .role-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px}
    .role-card{position:relative;padding:36px;overflow:hidden;min-height:386px;transition:border-color .2s,transform .25s}
    .role-card:hover{transform:translateY(-5px);border-color:rgba(174,207,255,.38)}
    .role-card::after{content:"";position:absolute;width:260px;height:260px;right:-105px;top:-125px;border-radius:50%;background:radial-gradient(circle,rgba(105,151,240,.13),transparent 70%);pointer-events:none}
    .role-card.security::after{background:radial-gradient(circle,rgba(98,225,206,.15),transparent 70%)}
    .role-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:37px}
    .role-symbol{width:56px;height:56px;display:grid;place-items:center;background:rgba(104,164,255,.1);border:1px solid rgba(104,164,255,.2);color:#9fc9ff;border-radius:17px;font:800 23px ui-monospace,Consolas,monospace}
    .security .role-symbol{background:rgba(101,230,225,.09);border-color:rgba(101,230,225,.19);color:var(--cyan)}
    .role-card h3{font-size:28px;letter-spacing:-1px;margin:0 0 6px}.role-en{color:#7187af;font-size:12px;letter-spacing:1.2px;font-weight:700;margin-bottom:19px}
    .role-card>p{color:var(--muted);line-height:1.85;font-size:14px;margin:0 0 25px;max-width:430px}
    .role-points{display:flex;flex-wrap:wrap;gap:8px}
    .overlap{margin-top:20px;display:flex;align-items:center;gap:24px;padding:25px 31px;background:linear-gradient(105deg,rgba(65,96,159,.12),rgba(75,155,166,.07));border:1px solid var(--stroke);border-radius:19px}
    .overlap-label{font-size:12px;letter-spacing:1.5px;font-weight:800;color:var(--cyan);white-space:nowrap}
    .overlap-text{font-size:14px;color:var(--muted);line-height:1.7}

    /* JOBS */
    .job-tools{display:flex;justify-content:space-between;align-items:center;gap:20px;flex-wrap:wrap;margin-bottom:23px}
    .filters{display:flex;align-items:center;gap:7px;flex-wrap:wrap}
    .filter{font-size:12px;font-weight:750;color:#9fafc9;border:1px solid var(--stroke);border-radius:10px;padding:11px 15px;background:#111d30;transition:.2s}
    .filter:hover{color:white;border-color:rgba(169,198,242,.36)}
    .filter[aria-pressed="true"]{color:#091629;background:#bad8ff;border-color:#bad8ff}
    .job-count{font-size:12px;color:var(--muted-2)}
    .jobs-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
    .job-card{min-width:0;text-align:left;padding:27px;display:flex;flex-direction:column;align-items:flex-start;min-height:257px;transition:transform .25s,border-color .25s,background .25s}
    .job-card:hover{transform:translateY(-5px);border-color:rgba(148,190,245,.47);background:#192740}
    .job-card:focus-visible{outline-offset:3px}
    .job-card[hidden]{display:none}
    .job-top{display:flex;align-items:center;justify-content:space-between;width:100%;margin-bottom:26px}
    .job-symbol{display:grid;place-items:center;width:42px;height:42px;background:rgba(136,180,248,.12);border-radius:12px;color:#abc9ff;font-size:21px;font-weight:750}
    .job-card h3{margin:0 0 11px;font-size:19px;letter-spacing:-.65px;color:var(--text)}
    .job-card p{margin:0 0 25px;color:var(--muted);font-size:13px;line-height:1.8}
    .job-card .arrow-link{margin-top:auto}

    /* MYTH */
    .myth-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:17px}
    .myth{min-height:197px;padding:25px 28px;display:flex;flex-direction:column;align-items:stretch;text-align:left;transition:border-color .2s,background .2s}
    .myth:hover{border-color:rgba(146,189,251,.40)}
    .myth[aria-expanded="true"]{border-color:rgba(101,230,225,.45);background:#142237}
    .myth-top{display:flex;align-items:center;justify-content:space-between;gap:13px;color:var(--muted-2);font-size:10px;font-weight:850;letter-spacing:1.4px;margin-bottom:20px}
    .myth-index{color:var(--cyan);font-size:12px}
    .myth-question{font-size:19px;line-height:1.6;font-weight:780;letter-spacing:-.55px;margin-bottom:14px}
    .myth-answer{display:none;color:#b7c9df;font-size:13px;line-height:1.9;padding-top:17px;border-top:1px solid var(--stroke)}
    .myth[aria-expanded="true"] .myth-answer{display:block}
    .myth-toggle{font-size:12px;color:#8abaff;font-weight:700;margin-top:auto}
    .myth[aria-expanded="true"] .myth-toggle{color:var(--cyan);margin-top:15px}

    /* SKILLS */
    .skill-layout{display:grid;grid-template-columns:330px 1fr;gap:20px}
    .skill-tabs{display:flex;flex-direction:column;gap:10px}
    .skill-tab{width:100%;padding:23px 22px;border-radius:16px;background:#101a2c;border:1px solid var(--stroke);color:#9fb2d0;text-align:left;display:flex;align-items:center;justify-content:space-between;gap:12px;transition:.2s}
    .skill-tab:hover{background:#19243a;color:white}
    .skill-tab[aria-selected="true"]{color:#f5f8ff;background:#1b2b45;border-color:#659fea;box-shadow:inset 3px 0 0 #78acff}
    .skill-tab b{font-size:15px}.skill-tab small{display:block;font-size:11px;color:#7d91b4;margin-top:7px}
    .skill-tab[aria-selected="true"] small{color:#a0b9db}
    .skill-view{padding:38px;min-height:407px;position:relative;overflow:hidden}
    .skill-view:after{content:"</>";position:absolute;right:20px;bottom:-35px;font:800 125px ui-monospace,Consolas,monospace;color:rgba(126,175,246,.045);pointer-events:none}
    .skill-sub{font-size:11px;font-weight:850;letter-spacing:2px;color:var(--cyan)}
    .skill-view h3{font-size:27px;letter-spacing:-.8px;margin:16px 0}
    .skill-view .skill-desc{font-size:14px;line-height:1.85;color:var(--muted);max-width:570px;margin:0 0 25px}
    .skill-badges{display:flex;flex-wrap:wrap;gap:9px;margin-bottom:26px}
    .skill-badges span{border:1px solid rgba(145,188,249,.19);background:rgba(104,164,255,.09);color:#bfd5f7;border-radius:9px;padding:9px 12px;font:12px ui-monospace,Consolas,monospace}
    .skill-example{display:flex;align-items:flex-start;gap:12px;padding:16px;border:1px solid var(--stroke);border-radius:12px;color:#bddbd7;background:#0d1728;font-size:13px;line-height:1.75}
    .skill-example .sparkle{color:var(--cyan);font-size:16px}

    /* ROADMAP */
    .roadmap{position:relative;display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin:44px 0 48px}
    .roadmap:before{content:"";position:absolute;top:24px;left:8%;right:8%;height:1px;background:linear-gradient(90deg,#7297dc,#60ddd7);z-index:0}
    .stage{position:relative;z-index:1}
    .stage-dot{display:flex;align-items:center;justify-content:center;width:48px;height:48px;border-radius:50%;border:1px solid rgba(135,180,247,.56);background:#182845;color:#acd2ff;font:750 13px ui-monospace,Consolas,monospace;margin-bottom:23px;box-shadow:0 0 0 7px var(--bg)}
    .stage:nth-child(2) .stage-dot{color:#c4b4ff;border-color:#aa8aff}.stage:nth-child(3) .stage-dot{color:#83e6e1;border-color:#64d8d0}.stage:nth-child(4) .stage-dot{color:#e5f8ae;border-color:#c1e778}
    .stage-card{padding:25px 21px;min-height:234px}
    .stage-card h3{margin:0 0 17px;font-size:18px;letter-spacing:-.55px}
    .stage-card ul{list-style:none;margin:0;padding:0;display:grid;gap:13px}
    .stage-card li{position:relative;padding-left:15px;color:var(--muted);font-size:12px;line-height:1.6}
    .stage-card li:before{content:"";position:absolute;top:8px;left:0;width:5px;height:5px;border-radius:50%;background:#78acd8}
    .path-extras{display:grid;grid-template-columns:1fr 1fr;gap:18px}
    .extra-card{padding:27px 30px}
    .extra-card h3{font-size:18px;margin:0 0 20px}
    .chips{display:flex;flex-wrap:wrap;gap:9px}
    .chips span{background:#1c2b44;border:1px solid rgba(150,188,245,.16);border-radius:9px;padding:9px 12px;font-size:12px;color:#c3d4ee}
    .extra-card .fine-note{margin:18px 0 0}

    /* QUIZ */
    .quiz-wrap{display:grid;grid-template-columns:.75fr 1.25fr;gap:24px;align-items:center}
    .quiz-left p{color:var(--muted);line-height:1.8;font-size:15px;max-width:340px}
    .quiz-stat{display:flex;align-items:center;gap:13px;color:var(--muted-2);font-size:12px;margin-top:22px}
    .quiz-stat strong{font:850 46px ui-monospace,Consolas,monospace;color:var(--cyan)}
    .quiz-panel{min-height:355px;padding:35px}
    .quiz-step{font-size:11px;color:var(--cyan);font-weight:850;letter-spacing:1.6px;margin-bottom:12px}
    .quiz-bar{height:5px;background:#243550;border-radius:5px;margin:0 0 23px;overflow:hidden}
    .quiz-bar-fill{height:100%;width:33.333%;background:linear-gradient(90deg,var(--blue),var(--cyan));transition:width .3s}
    .quiz-question{font-size:22px;letter-spacing:-.5px;margin:0 0 21px;line-height:1.5}
    .quiz-options{display:grid;gap:9px}
    .quiz-option{width:100%;text-align:left;border-radius:10px;border:1px solid var(--stroke);padding:13px 16px;background:#111d31;color:#c9d5e8;font-size:13px;line-height:1.6;transition:.2s}
    .quiz-option:hover:not(:disabled){border-color:#6d9de7;background:#1c2a43}
    .quiz-option.correct{border-color:#71dcbf;background:rgba(77,190,156,.12);color:#a4f1db}
    .quiz-option.wrong{border-color:#ed9b9e;background:rgba(226,100,119,.10);color:#ffd4d5}
    .quiz-answer{font-size:12px;line-height:1.75;color:#b8cfde;margin:15px 0 0;padding:12px 14px;border-radius:9px;background:#152a35}
    .quiz-next{margin-top:18px}
    .quiz-result{display:grid;gap:14px;place-items:start}.quiz-result .score{font:850 65px ui-monospace,Consolas,monospace;color:var(--cyan)}
    .quiz-result h3{font-size:24px;margin:0}.quiz-result p{color:var(--muted);line-height:1.8;font-size:14px;margin:0 0 10px}

    /* OUTRO */
    .outro{padding-block:104px 88px;position:relative;overflow:hidden;text-align:center;background:radial-gradient(ellipse 56% 70% at 50% 105%,rgba(65,115,207,.2),transparent 80%)}
    .outro .overline{justify-content:center}
    .outro h2{font-size:clamp(36px,5.5vw,67px);font-weight:860;letter-spacing:-.065em;line-height:1.3;margin:0 0 22px}
    .outro p{color:var(--muted);font-size:16px;line-height:1.9;margin:0 auto 30px;max-width:720px}
    .outro-actions{display:flex;justify-content:center;gap:12px;flex-wrap:wrap}
    .footer{border-top:1px solid var(--stroke);padding:27px 0 35px;color:var(--muted-2);font-size:12px}
    .footer-in{display:flex;align-items:center;justify-content:space-between;gap:20px}
    .footer-brand{font-weight:800;letter-spacing:1px;color:#bed3f1}
    .footer a:hover{color:white}

    /* DIALOG & PRESENTATION */
    .detail-dialog{border:1px solid #4b6b95;background:#111d30;color:white;border-radius:23px;width:min(560px,calc(100% - 28px));max-height:min(80vh,760px);padding:0;box-shadow:0 30px 90px rgba(0,0,0,.6)}
    .detail-dialog::backdrop{background:rgba(2,6,15,.83);backdrop-filter:blur(7px)}
    .dialog-in{padding:34px;overflow:auto;max-height:min(80vh,760px)}
    .dialog-top{display:flex;align-items:center;justify-content:space-between;gap:15px;margin-bottom:19px}
    .close-dialog{height:37px;width:37px;background:#1e304c;border:1px solid var(--stroke-strong);border-radius:10px;color:#cfddf5;font-size:22px;line-height:1}
    .detail-dialog h2{margin:0 0 12px;font-size:30px;letter-spacing:-1px}.detail-dialog p{color:var(--muted);font-size:14px;line-height:1.9;margin:0 0 25px}
    .detail-dialog h3{font-size:12px;letter-spacing:1.2px;color:#87baff;margin:26px 0 14px}
    .detail-dialog ul{list-style:none;margin:0;padding:0;display:grid;gap:13px}.detail-dialog li{position:relative;padding-left:19px;font-size:14px;color:#c6d6e9;line-height:1.75}.detail-dialog li:before{content:"✓";position:absolute;left:0;color:var(--cyan)}
    .present-bar{display:none;align-items:center;gap:8px;position:fixed;z-index:110;bottom:21px;left:50%;transform:translateX(-50%);padding:9px;background:rgba(21,33,53,.94);border:1px solid #45618a;border-radius:15px;box-shadow:0 20px 55px #0008;backdrop-filter:blur(15px)}
    body.presenting .present-bar{display:flex}
    .present-bar button{height:39px;min-width:39px;border-radius:9px;border:1px solid var(--stroke-strong);background:#1b2a43;color:white;padding:0 12px;font-size:13px;font-weight:750}
    .present-bar button:hover{background:#314767}
    .present-bar span{font:700 12px ui-monospace,Consolas,monospace;color:#bad5f5;min-width:52px;text-align:center}
    .present-hint{color:var(--muted-2);font-size:10px;letter-spacing:.4px}
    body.presenting .header{opacity:.98}
    body.presenting .section{min-height:calc(100svh - 76px)}

    @media(max-width:1060px){
      .nav a{padding:10px 8px;font-size:12px}.brand-text span{letter-spacing:1px}
      .hero-inner{gap:25px}.hero h1{font-size:clamp(44px,5.4vw,65px)}.float-one{right:-2px}.float-two{left:0}
      .jobs-grid{grid-template-columns:repeat(2,1fr)}
      .skill-layout{grid-template-columns:290px 1fr}
    }
    @media(max-width:800px){
      .container{width:min(var(--max),calc(100% - 36px))}
      .header{height:68px}.header-in{gap:10px}.brand-mark{height:35px;width:35px}.brand-text{font-size:14px}.brand-text span{font-size:9px}
      .menu-toggle{display:grid;place-items:center;order:3}.header-actions{margin-left:auto}.header-actions .btn-sm{padding:10px 11px;font-size:11px}
      .nav{display:none;position:absolute;top:68px;left:0;right:0;background:#0d1728;border-bottom:1px solid var(--stroke-strong);padding:13px 18px 21px;flex-direction:column;align-items:stretch;box-shadow:0 30px 60px #0008}
      .nav.open{display:flex}.nav a{padding:13px;font-size:14px}
      .hero{min-height:unset}.hero-inner{grid-template-columns:1fr;padding-block:75px 58px;gap:55px}
      .hero h1{font-size:clamp(43px,8.5vw,69px)}.hero-lead{font-size:15px}.hero-art{min-height:365px;width:min(100%,550px);margin-inline:auto}
      .terminal{transform:none}.orbit{width:400px;height:400px}.float-one{top:-2px}.float-two{bottom:-10px}
      .snapshot-item{padding:21px 15px;gap:12px}.snapshot-num{font-size:19px}.snapshot-item b{font-size:12px}.snapshot-item p{font-size:11px}
      .section{padding-block:82px}.section-top{margin-bottom:34px}
      .role-card{padding:27px}.role-card h3{font-size:24px}
      .skill-layout{grid-template-columns:1fr}.skill-tabs{flex-direction:row;overflow-x:auto;scroll-snap-type:x mandatory;padding-bottom:5px}.skill-tab{flex:0 0 210px;scroll-snap-align:start;padding:18px}
      .roadmap{grid-template-columns:repeat(2,1fr);gap:18px}.roadmap:before{display:none}.stage-dot{margin-bottom:16px}.stage-card{min-height:195px}
      .quiz-wrap{grid-template-columns:1fr}.quiz-left p{max-width:none}.quiz-stat{margin-top:10px}
    }
    @media(max-width:560px){
      .header-actions .btn-sm{padding:10px}.header-actions .btn-sm .hide-mobile{display:none}
      .hero-inner{padding-block:66px 52px}.hero h1{font-size:clamp(39px,10vw,54px)}.hero-lead{font-size:14px}.hero-actions .btn{padding:14px 16px;font-size:13px}
      .eyebrow{letter-spacing:1.4px;font-size:10px}.hero-art{min-height:300px}.terminal{border-radius:14px}.terminal-body{padding:20px 15px;font-size:clamp(10px,2.7vw,13px);line-height:1.9}.terminal-top{height:39px}.terminal-bottom{padding:11px 13px;font-size:9px}.orbit{width:300px;height:300px}.float-card{padding:9px 11px}.float-card strong{font-size:11px}.float-card small{font-size:8px}.float-one{right:-3px}.float-two{left:-3px}
      .snapshot{grid-template-columns:1fr}.snapshot-item{padding:19px 5px}.snapshot-item:not(:last-child){border-right:none;border-bottom:1px solid var(--stroke)}.snapshot-num{width:32px}
      .section{padding-block:70px}.section h2{font-size:31px}.section-desc{font-size:14px}
      .role-grid,.myth-grid,.jobs-grid,.path-extras{grid-template-columns:1fr}
      .role-card{min-height:unset}.role-head{margin-bottom:22px}.overlap{align-items:flex-start;flex-direction:column;gap:9px;padding:22px}
      .job-card{min-height:221px}.job-top{margin-bottom:20px}.job-tools{align-items:start;gap:12px}.job-count{margin-left:2px}
      .myth{min-height:180px}.myth-question{font-size:17px}
      .skill-view{padding:27px;min-height:376px}.skill-view h3{font-size:23px}.skill-tab{flex-basis:185px}
      .roadmap{grid-template-columns:1fr;gap:21px}.stage{display:grid;grid-template-columns:45px 1fr;gap:16px;align-items:start}.stage-dot{height:42px;width:42px;margin-top:9px}.stage-card{min-height:unset}.stage-card h3{font-size:17px}.stage-card li{font-size:13px}
      .extra-card{padding:24px}
      .quiz-panel{padding:26px 20px;min-height:340px}.quiz-question{font-size:19px}.quiz-left p{font-size:14px}
      .outro{padding-block:80px 65px}.outro h2{font-size:36px}.outro p{font-size:14px}
      .footer-in{flex-direction:column;text-align:center;gap:10px}
      .present-hint{display:none}.present-bar{max-width:calc(100% - 20px)}
    }
    @media(prefers-reduced-motion:reduce){
      html{scroll-behavior:auto}*,*::before,*::after{scroll-behavior:auto!important;animation-duration:.01ms!important;animation-iteration-count:1!important;transition-duration:.01ms!important}
      .reveal{opacity:1;transform:none}
    }
    @media print{
      :root{color-scheme:light;--bg:#fff;--text:#152238;--muted:#43536b;--muted-2:#596779;--stroke:#cbd5e1;--panel:#f8fafc;--panel-2:#eff4fa}
      html,body{background:#fff!important;color:#152238!important;font-size:12px}
      body::before,.header,#progress,.present-bar,.float-card,.orbit,.hero::after,.hero::before{display:none!important}
      .container{width:100%;max-width:100%}.section{padding:24px 0;break-inside:avoid}.section-alt,.snapshot-wrap,.panel,.role-card,.job-card,.myth,.skill-view,.stage-card,.extra-card,.quiz-panel{background:#fff!important;color:#152238!important;border-color:#cbd5e1!important;box-shadow:none!important}
      .hero{min-height:auto}.hero-inner{display:block;padding:25px 0}.hero-art{display:none}.hero h1{font-size:42px;color:#152238}.gradient-text{-webkit-text-fill-color:#1b4f97;color:#1b4f97}.hero-actions{display:none}
      .reveal{opacity:1!important;transform:none!important}.section h2{font-size:28px}.section-desc,.role-card>p,.job-card p,.overlap-text,.skill-view .skill-desc,.stage-card li,.extra-card .fine-note,.outro p{color:#43536b!important}
      .tag,.skill-badges span,.chips span{color:#365779!important;background:#eef4ff!important}
      .role-card,.job-card,.myth,.stage-card{break-inside:avoid}.job-card{min-height:auto}.job-card[hidden]{display:flex}.myth .myth-answer{display:block;color:#334155}.myth-toggle,.quiz-wrap,.outro-actions{display:none!important}
      .roadmap{gap:8px}.stage-dot{box-shadow:none}.outro{background:white;padding:35px 0}.outro h2{font-size:30px}.footer{padding:15px 0}
      @page{size:A4;margin:15mm}
    }
  </style>
</head>
<body>
  <div id="progress" aria-hidden="true"></div>
  <header class="header">
    <div class="container header-in">
      <a class="brand" href="#home" aria-label="맨 위로 이동">
        <span class="brand-mark" aria-hidden="true">&lt;/&gt;</span>
        <span class="brand-text">CODE THE FUTURE<span>CAREER EXPLORATION</span></span>
      </a>
      <nav class="nav" id="nav" aria-label="주요 메뉴">
        <a href="#about">직업 소개</a>
        <a href="#jobs">하는 일</a>
        <a href="#myths">오해와 진실</a>
        <a href="#skills">핵심 기술</a>
        <a href="#roadmap">진로 로드맵</a>
        <a href="#quiz">퀴즈</a>
      </nav>
      <div class="header-actions">
        <button type="button" class="btn btn-ghost btn-sm" id="printBtn" aria-label="인쇄 또는 PDF로 저장"><span aria-hidden="true">↧</span> <span class="hide-mobile">PDF 저장</span></button>
        <button type="button" class="btn btn-primary btn-sm" id="presentToggle" aria-pressed="false"><span aria-hidden="true">▶</span> <span class="hide-mobile">발표 모드</span><span class="sr-only">발표 모드 켜기 또는 끄기</span></button>
      </div>
      <button type="button" class="menu-toggle" id="menuToggle" aria-expanded="false" aria-controls="nav" aria-label="메뉴 열기">☰</button>
    </div>
  </header>

  <main>
    <section class="hero" id="home" aria-labelledby="heroTitle">
      <div class="container hero-inner">
        <div class="hero-copy">
          <div class="eyebrow">진로 탐구 프레젠테이션 · 2026</div>
          <h1 id="heroTitle">코드를 만드는 사람,<br><span class="gradient-text">미래를 지키는 사람.</span></h1>
          <p class="hero-lead">프로그래머와 화이트해커는 무엇이 다를까요?<br>어떤 일을 하고, 어떤 역량을 기르며, 어떻게 꿈에 가까워질 수 있을까요? 코드의 세계에서 진로의 방향을 찾아봅니다.</p>
          <div class="hero-actions">
            <a href="#about" class="btn btn-primary">탐구 시작하기 <span aria-hidden="true">↗</span></a>
            <a href="#roadmap" class="btn btn-ghost">나의 진로 로드맵 <span aria-hidden="true">→</span></a>
          </div>
          <p class="hero-caption"><span class="dash"></span> 스크롤해서 탐색하고, 발표 모드로 설명해 보세요.</p>
        </div>
        <div class="hero-art" aria-label="개발자 코드를 보여주는 장식용 터미널 화면">
          <div class="orbit" aria-hidden="true"></div>
          <div class="terminal">
            <div class="terminal-top"><span class="traffic" aria-hidden="true"><i></i><i></i><i></i></span><span class="terminal-path">~/future/career.js</span><span class="terminal-status">● LIVE</span></div>
            <div class="terminal-body" aria-hidden="true">
              <span class="terminal-line term-comment">// 나의 가능성을 설계하는 코드</span>
              <span class="terminal-line"><span class="term-purple">const</span> <span class="term-blue">myFuture</span> = {</span>
              <span class="terminal-line term-indent">dream: <span class="term-green">"Developer"</span>,</span>
              <span class="terminal-line term-indent">curiosity: <span class="term-yellow">100</span>,</span>
              <span class="terminal-line term-indent">ethics: <span class="term-purple">true</span>,</span>
              <span class="terminal-line term-indent">growth: <span class="term-green">"Every day"</span></span>
              <span class="terminal-line">};</span>
              <span class="terminal-line">&nbsp;</span>
              <span class="terminal-line"><span class="term-blue">build</span>(myFuture); <span class="term-comment">// start now_</span></span>
            </div>
            <div class="terminal-bottom"><span class="signal">ALL SYSTEMS READY</span><span>UTF-8 · JS</span></div>
          </div>
          <div class="float-card float-one" aria-hidden="true"><small>MISSION 01</small><strong>BUILD SOMETHING</strong></div>
          <div class="float-card float-two" aria-hidden="true"><small>MISSION 02</small><strong>KEEP IT SAFE ↗</strong></div>
        </div>
      </div>
    </section>

    <div class="snapshot-wrap">
      <div class="container snapshot">
        <div class="snapshot-item"><span class="snapshot-num">01</span><div><b>문제를 발견하는 눈</b><p>관찰과 논리적인 사고</p></div></div>
        <div class="snapshot-item"><span class="snapshot-num">02</span><div><b>해결책을 만드는 능력</b><p>설계, 구현, 검증</p></div></div>
        <div class="snapshot-item"><span class="snapshot-num">03</span><div><b>책임감 있는 기술 사용</b><p>협업, 보안, 윤리 의식</p></div></div>
      </div>
    </div>

    <section id="about" class="section" aria-labelledby="aboutTitle">
      <div class="container">
        <div class="section-top reveal"><div class="overline"><span></span>01 / DISCOVER THE ROLES</div><h2 id="aboutTitle">프로그래머와 화이트해커,<br>닮았지만 다른 두 가지 역할</h2><p class="section-desc">한쪽은 세상에 없던 서비스를 만들고, 다른 한쪽은 그 서비스를 더 안전하게 만듭니다. 두 직무 모두 탄탄한 컴퓨터 이해와 문제 해결 능력이 필요합니다.</p></div>
        <div class="role-grid">
          <article class="role-card panel reveal">
            <div class="role-head"><span class="role-symbol" aria-hidden="true">{ }</span><span class="tag">CREATE · 만드는 일</span></div>
            <h3>프로그래머</h3><div class="role-en">SOFTWARE DEVELOPER</div>
            <p>웹사이트, 앱, 게임, 인공지능 서비스 등 다양한 소프트웨어를 설계하고 개발합니다. 사람들의 불편을 기술로 해결하는 역할입니다.</p>
            <div class="role-points"><span class="tag">기획과 설계</span><span class="tag">코드 구현</span><span class="tag">테스트와 개선</span></div>
          </article>
          <article class="role-card panel security reveal">
            <div class="role-head"><span class="role-symbol" aria-hidden="true">◇</span><span class="tag teal">PROTECT · 지키는 일</span></div>
            <h3>화이트해커</h3><div class="role-en">ETHICAL HACKER</div>
            <p>허가받은 범위에서 시스템의 보안 문제를 점검하고, 발견한 위험을 보고해 개선을 돕습니다. 기술 실력과 함께 법률·윤리 준수가 핵심입니다.</p>
            <div class="role-points"><span class="tag teal">보안 점검</span><span class="tag teal">취약점 분석</span><span class="tag teal">개선책 제안</span></div>
          </article>
        </div>
        <div class="overlap reveal"><span class="overlap-label">COMMON GROUND ↗</span><span class="overlap-text">두 직업의 공통점: <strong style="color:#e4f0ff">논리적 사고 · 끊임없는 학습 · 협업 · 책임감</strong>. 만들고 지키는 역할은 경쟁 관계가 아니라 서로를 완성하는 관계입니다.</span></div>
      </div>
    </section>

    <section id="jobs" class="section section-alt" aria-labelledby="jobsTitle">
      <div class="container">
        <div class="section-top reveal"><div class="overline"><span></span>02 / REAL WORLD JOBS</div><h2 id="jobsTitle">실제로 어떤 일을 할까?</h2><p class="section-desc">관심 있는 직업 카드를 눌러 구체적인 업무와 자주 사용하는 기술을 살펴보세요. 개발과 보안이 만나는 직무도 있습니다.</p></div>
        <div class="job-tools reveal">
          <div class="filters" role="group" aria-label="직업 분류 필터">
            <button class="filter" type="button" data-filter="all" aria-pressed="true">전체 보기</button>
            <button class="filter" type="button" data-filter="dev" aria-pressed="false">개발</button>
            <button class="filter" type="button" data-filter="security" aria-pressed="false">보안</button>
            <button class="filter" type="button" data-filter="hybrid" aria-pressed="false">융합</button>
          </div>
          <span class="job-count" id="jobCount" aria-live="polite">6개의 직업</span>
        </div>
        <div class="jobs-grid" id="jobsGrid">
          <button type="button" class="job-card panel reveal" data-job="web" data-category="dev" aria-haspopup="dialog"><div class="job-top"><span class="job-symbol" aria-hidden="true">⌘</span><span class="tag">개발</span></div><h3>웹 개발자</h3><p>누구나 사용하는 웹 서비스의 화면과 기능을 구현합니다.</p><span class="arrow-link">자세히 살펴보기 <span aria-hidden="true">↗</span></span></button>
          <button type="button" class="job-card panel reveal" data-job="app" data-category="dev" aria-haspopup="dialog"><div class="job-top"><span class="job-symbol" aria-hidden="true">▣</span><span class="tag">개발</span></div><h3>앱 개발자</h3><p>스마트폰과 태블릿에서 실행되는 앱을 제작합니다.</p><span class="arrow-link">자세히 살펴보기 <span aria-hidden="true">↗</span></span></button>
          <button type="button" class="job-card panel reveal" data-job="analyst" data-category="security" aria-haspopup="dialog"><div class="job-top"><span class="job-symbol" aria-hidden="true">◎</span><span class="tag teal">보안</span></div><h3>보안 분석가</h3><p>위협을 관찰하고 이상 징후를 분석해 사고를 예방합니다.</p><span class="arrow-link">자세히 살펴보기 <span aria-hidden="true">↗</span></span></button>
          <button type="button" class="job-card panel reveal" data-job="pentest" data-category="security" aria-haspopup="dialog"><div class="job-top"><span class="job-symbol" aria-hidden="true">◇</span><span class="tag teal">보안</span></div><h3>모의해킹 전문가</h3><p>승인된 환경에서 보안을 평가하고 개선점을 제안합니다.</p><span class="arrow-link">자세히 살펴보기 <span aria-hidden="true">↗</span></span></button>
          <button type="button" class="job-card panel reveal" data-job="data" data-category="dev" aria-haspopup="dialog"><div class="job-top"><span class="job-symbol" aria-hidden="true">▤</span><span class="tag">개발·데이터</span></div><h3>데이터 분석가</h3><p>데이터에서 패턴을 찾고 더 나은 의사결정을 돕습니다.</p><span class="arrow-link">자세히 살펴보기 <span aria-hidden="true">↗</span></span></button>
          <button type="button" class="job-card panel reveal" data-job="devsecops" data-category="hybrid" aria-haspopup="dialog"><div class="job-top"><span class="job-symbol" aria-hidden="true">↻</span><span class="tag purple">개발 × 보안</span></div><h3>DevSecOps 엔지니어</h3><p>서비스 개발·배포 과정에 보안을 자연스럽게 녹여냅니다.</p><span class="arrow-link">자세히 살펴보기 <span aria-hidden="true">↗</span></span></button>
        </div>
        <p class="fine-note" style="margin-top:20px">※ 직업의 구체적인 업무 범위와 기술은 회사·프로젝트·경력에 따라 달라질 수 있습니다.</p>
      </div>
    </section>

    <section id="myths" class="section" aria-labelledby="mythTitle">
      <div class="container">
        <div class="section-top reveal"><div class="overline"><span></span>03 / MYTH VS FACT</div><h2 id="mythTitle">우리가 흔히 하는 오해들</h2><p class="section-desc">정답이 궁금하다면 질문을 눌러 보세요. 직업에 대한 선입견보다 중요한 것은 실제로 어떤 일을 하는지 이해하는 것입니다.</p></div>
        <div class="myth-grid">
          <button class="myth panel reveal" type="button" aria-expanded="false"><span class="myth-top"><span class="myth-index">Q 01</span><span>CLICK TO REVEAL +</span></span><span class="myth-question">“해킹은 모두 불법일까?”</span><span class="myth-answer"><strong class="highlight">아니요.</strong> 소유자에게 명확한 허가를 받고 정해진 범위 안에서 보안 점검을 하는 활동은 합법적인 보안 업무가 될 수 있습니다. 승인과 법적 범위가 핵심입니다.</span><span class="myth-toggle">답 확인하기 ↗</span></button>
          <button class="myth panel reveal" type="button" aria-expanded="false"><span class="myth-top"><span class="myth-index">Q 02</span><span>CLICK TO REVEAL +</span></span><span class="myth-question">“수학 천재만 프로그래머가 될 수 있다?”</span><span class="myth-answer"><strong class="highlight">그렇지 않아요.</strong> 분야에 따라 수학의 중요도는 다릅니다. 기초 개념을 이해하고, 문제를 나누어 생각하고, 꾸준히 연습하는 힘이 중요합니다.</span><span class="myth-toggle">답 확인하기 ↗</span></button>
          <button class="myth panel reveal" type="button" aria-expanded="false"><span class="myth-top"><span class="myth-index">Q 03</span><span>CLICK TO REVEAL +</span></span><span class="myth-question">“코딩 언어 하나만 알면 공부가 끝난다?”</span><span class="myth-answer"><strong class="highlight">계속 배워야 해요.</strong> 언어는 도구입니다. 문제 해결, 자료구조, 협업 방식, 보안 기본기와 새로운 기술을 익히는 과정이 함께 필요합니다.</span><span class="myth-toggle">답 확인하기 ↗</span></button>
          <button class="myth panel reveal" type="button" aria-expanded="false"><span class="myth-top"><span class="myth-index">Q 04</span><span>CLICK TO REVEAL +</span></span><span class="myth-question">“AI가 발전하면 개발자는 필요 없어질까?”</span><span class="myth-answer"><strong class="highlight">역할은 계속 바뀌고 있어요.</strong> AI가 일부 작업을 돕더라도 요구사항을 이해하고 결과를 검증하며 안전과 품질을 책임지는 역량은 여전히 중요합니다.</span><span class="myth-toggle">답 확인하기 ↗</span></button>
        </div>
      </div>
    </section>

    <section id="skills" class="section section-alt" aria-labelledby="skillsTitle">
      <div class="container">
        <div class="section-top reveal"><div class="overline"><span></span>04 / SKILLS TO GROW</div><h2 id="skillsTitle">어떤 능력을 길러야 할까?</h2><p class="section-desc">좋은 시작은 어려운 기술을 한 번에 익히는 것이 아니라, 기초부터 직접 만들어 보며 이해를 쌓는 것입니다. 항목을 눌러 학습 방향을 바꿔 보세요.</p></div>
        <div class="skill-layout reveal">
          <div class="skill-tabs" role="tablist" aria-label="핵심 기술 분야">
            <button type="button" role="tab" class="skill-tab" id="skillTab0" aria-controls="skillPanel" aria-selected="true" tabindex="0" data-skill="0"><span><b>01 개발 기초</b><small>BUILD THE FOUNDATION</small></span><span aria-hidden="true">↗</span></button>
            <button type="button" role="tab" class="skill-tab" id="skillTab1" aria-controls="skillPanel" aria-selected="false" tabindex="-1" data-skill="1"><span><b>02 컴퓨터의 원리</b><small>UNDERSTAND SYSTEMS</small></span><span aria-hidden="true">↗</span></button>
            <button type="button" role="tab" class="skill-tab" id="skillTab2" aria-controls="skillPanel" aria-selected="false" tabindex="-1" data-skill="2"><span><b>03 보안과 윤리</b><small>THINK SECURELY</small></span><span aria-hidden="true">↗</span></button>
            <button type="button" role="tab" class="skill-tab" id="skillTab3" aria-controls="skillPanel" aria-selected="false" tabindex="-1" data-skill="3"><span><b>04 협업과 실전</b><small>LEARN BY DOING</small></span><span aria-hidden="true">↗</span></button>
          </div>
          <div class="skill-view panel" id="skillPanel" role="tabpanel" aria-labelledby="skillTab0" tabindex="0" aria-live="polite">
            <div class="skill-sub" id="skillLabel">LEARNING AREA 01</div>
            <h3 id="skillHeading">아이디어를 코드로 바꾸는 힘</h3>
            <p class="skill-desc" id="skillDescription">HTML·CSS로 화면을 만들고 JavaScript 또는 Python으로 기능을 구현해 보세요. 완벽한 코드보다 직접 완성해 보는 경험이 중요합니다.</p>
            <div class="skill-badges" id="skillBadges"><span>HTML / CSS</span><span>JavaScript</span><span>Python</span><span>Git</span></div>
            <div class="skill-example"><span class="sparkle" aria-hidden="true">✦</span><span id="skillExample">첫 프로젝트: 나를 소개하는 웹페이지를 만들고 작은 인터랙션을 추가하기</span></div>
          </div>
        </div>
      </div>
    </section>

    <section id="roadmap" class="section" aria-labelledby="roadmapTitle">
      <div class="container">
        <div class="section-top reveal"><div class="overline"><span></span>05 / YOUR ROADMAP</div><h2 id="roadmapTitle">꿈을 현실로 만드는 4단계</h2><p class="section-desc">진로에는 단 하나의 정답이 없습니다. 대학 진학, 다양한 교육 과정, 독학 등 여러 경로 중 자신의 상황에 맞는 계획을 세울 수 있습니다.</p></div>
        <div class="roadmap reveal">
          <div class="stage"><span class="stage-dot">01</span><article class="stage-card panel"><h3>지금 · 고등학교</h3><ul><li>Python·JavaScript 기초 익히기</li><li>작은 웹사이트 직접 만들기</li><li>컴퓨터와 보안에 호기심 갖기</li></ul></article></div>
          <div class="stage"><span class="stage-dot">02</span><article class="stage-card panel"><h3>기초 심화</h3><ul><li>자료구조·알고리즘 학습</li><li>운영체제·네트워크 이해</li><li>팀 프로젝트 참여하기</li></ul></article></div>
          <div class="stage"><span class="stage-dot">03</span><article class="stage-card panel"><h3>분야 탐색과 실전</h3><ul><li>개발 또는 보안 분야 선택</li><li>안전한 실습·프로젝트 경험</li><li>포트폴리오 정리하기</li></ul></article></div>
          <div class="stage"><span class="stage-dot">04</span><article class="stage-card panel"><h3>진로로 연결하기</h3><ul><li>인턴십·현장 경험 쌓기</li><li>직무별 채용 요건 조사</li><li>지속적으로 배우고 성장하기</li></ul></article></div>
        </div>
        <div class="path-extras reveal">
          <div class="extra-card panel"><h3>📚 관련 전공 분야</h3><div class="chips"><span>컴퓨터공학</span><span>소프트웨어</span><span>정보보호</span><span>정보통신</span></div><p class="fine-note">학과 이름보다 교육 과정과 프로젝트 기회를 함께 살펴보세요.</p></div>
          <div class="extra-card panel"><h3>🎯 관심 분야에 따른 자격증</h3><div class="chips"><span>정보처리기사</span><span>정보보안기사</span><span>CCNA</span><span>클라우드 관련 자격</span></div><p class="fine-note">자격증별 응시 조건과 최신 시험 정보는 공식 안내에서 확인해야 합니다. 자격증보다 실무 역량과 프로젝트 경험도 중요합니다.</p></div>
        </div>
      </div>
    </section>

    <section id="quiz" class="section section-alt" aria-labelledby="quizTitle">
      <div class="container quiz-wrap">
        <div class="quiz-left reveal"><div class="overline"><span></span>06 / MINI CHALLENGE</div><h2 id="quizTitle">이제 직접<br><span class="gradient-text">확인해 볼 시간!</span></h2><p>오늘 살펴본 내용을 바탕으로 3개의 질문에 도전해 보세요. 선택하면 바로 설명을 확인할 수 있습니다.</p><div class="quiz-stat"><strong>03</strong><span>QUICK QUESTIONS<br>짧고 간단한 진로 퀴즈</span></div></div>
        <div class="quiz-panel panel reveal" id="quizPanel" aria-live="polite"><div class="quiz-step" id="quizStep">QUESTION 01 / 03</div><div class="quiz-bar"><div class="quiz-bar-fill" id="quizBar"></div></div><h3 class="quiz-question" id="quizQuestion">화이트해커가 일을 할 때 가장 먼저 필요한 것은?</h3><div class="quiz-options" id="quizOptions"></div><div class="quiz-answer" id="quizAnswer" hidden></div><button type="button" class="btn btn-primary quiz-next" id="quizNext" hidden>다음 문제 →</button></div>
      </div>
    </section>

    <section id="outro" class="outro" aria-labelledby="outroTitle">
      <div class="container reveal"><div class="overline"><span></span>THE NEXT CHAPTER</div><h2 id="outroTitle">미래는 기다리는 것이 아니라,<br><span class="gradient-text">직접 만들어 가는 것.</span></h2><p>오늘 배운 것이 작은 호기심 하나라도 남겼다면 충분합니다.<br>한 줄의 코드, 하나의 질문, 꾸준한 도전에서 진로의 가능성이 시작됩니다.</p><div class="outro-actions"><a class="btn btn-primary" href="#home">처음으로 돌아가기 ↑</a><button class="btn btn-ghost" type="button" id="outroPrint">발표 자료 PDF로 저장 ↗</button></div></div>
    </section>
  </main>

  <footer class="footer"><div class="container footer-in"><span class="footer-brand">&lt;/&gt; CODE THE FUTURE</span><span>프로그래머 &amp; 화이트해커 · 진로 탐구 발표</span><a href="#home">BACK TO TOP ↑</a></div></footer>

  <dialog class="detail-dialog" id="jobDialog" aria-labelledby="dialogTitle"><div class="dialog-in"><div class="dialog-top"><span class="tag" id="dialogCategory">직업 탐구</span><button type="button" class="close-dialog" id="closeDialog" aria-label="상세 창 닫기">×</button></div><h2 id="dialogTitle"></h2><p id="dialogDesc"></p><h3>주요 업무</h3><ul id="dialogTasks"></ul><h3>관련 기술 · 도구</h3><div class="chips" id="dialogTools"></div><p class="fine-note" style="margin-top:25px">실무에서 다루는 기술과 역할은 소속 조직 및 전문 분야에 따라 달라질 수 있습니다.</p></div></dialog>

  <div class="present-bar" id="presentBar" role="toolbar" aria-label="발표 모드 탐색">
    <button type="button" id="prevSlide" aria-label="이전 섹션">← 이전</button><span id="slideLabel">01 / 08</span><button type="button" id="nextSlide" aria-label="다음 섹션">다음 →</button><span class="present-hint">← → 키로 이동</span><button type="button" id="exitPresent" aria-label="발표 모드 종료">✕</button>
  </div>

  <script>
    "use strict";
    // 모든 콘텐츠와 인터랙션은 이 파일에 내장되어 있습니다. 인터넷 연결이나 라이브러리가 필요하지 않습니다.
    const $ = (selector, root = document) => root.querySelector(selector);
    const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const scrollMode = reduceMotion ? 'auto' : 'smooth';

    // 모바일 메뉴
    const menuToggle = $('#menuToggle');
    const nav = $('#nav');
    function closeMenu(){ nav.classList.remove('open'); menuToggle.setAttribute('aria-expanded','false');menuToggle.setAttribute('aria-label','메뉴 열기');menuToggle.textContent='☰'; }
    menuToggle.addEventListener('click', () => {
      const open = !nav.classList.contains('open');
      nav.classList.toggle('open',open);
      menuToggle.setAttribute('aria-expanded',String(open));
      menuToggle.setAttribute('aria-label',open?'메뉴 닫기':'메뉴 열기');
      menuToggle.textContent = open ? '×' : '☰';
    });
    $$('#nav a').forEach(a => a.addEventListener('click',closeMenu));
    window.addEventListener('resize',()=>{if(window.innerWidth>800)closeMenu();});

    // 섹션별 스크롤 진행률 + 현재 메뉴
    const sections = ['home','about','jobs','myths','skills','roadmap','quiz','outro'];
    const links = $$('#nav a');
    let activeSection = 0;
    let isScrollScheduled = false;
    function onScroll(){
      const fullHeight = document.documentElement.scrollHeight - window.innerHeight;
      $('#progress').style.width = (fullHeight>0 ? (window.scrollY/fullHeight*100) : 100) + '%';
      const target = 125;
      let current = 0;
      sections.forEach((id,i)=>{const el=document.getElementById(id);if(el && el.getBoundingClientRect().top <= target)current=i;});
      activeSection = current;
      links.forEach(a => {const isActive = a.getAttribute('href') === '#'+sections[current];a.classList.toggle('active',isActive);if(isActive)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});
      $('#slideLabel').textContent = String(current+1).padStart(2,'0')+' / '+String(sections.length).padStart(2,'0');
      isScrollScheduled=false;
    }
    window.addEventListener('scroll',()=>{if(!isScrollScheduled){requestAnimationFrame(onScroll);isScrollScheduled=true;}},{passive:true});
    window.addEventListener('load',onScroll);
    onScroll();
    
    // 등장 애니메이션. 미지원 브라우저에서도 콘텐츠가 보이도록 처리.
    const reveals = $$('.reveal');
    if('IntersectionObserver' in window && !reduceMotion){
      const observer = new IntersectionObserver((entries,obs)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');obs.unobserve(entry.target);}});},{threshold:.075,rootMargin:'0px 0px 30px 0px'});
      reveals.forEach(el=>observer.observe(el));
    } else {reveals.forEach(el=>el.classList.add('visible'));}

    // 직무별 상세 콘텐츠 (확인 가능한 공통 업무를 중심으로 재구성)
    const jobs = {
      web: { title:'웹 개발자',category:'개발',desc:'웹 브라우저를 통해 이용하는 서비스를 만들고 운영하는 사람입니다. 프론트엔드와 백엔드 등 다양한 세부 직무가 있습니다.',tasks:['사용자에게 보이는 화면과 상호작용 구현','서버와 데이터베이스를 연결하여 기능 개발','테스트와 접근성·성능 개선'],tools:['HTML / CSS','JavaScript','React','Node.js','SQL','Git'] },
      app: { title:'앱 개발자',category:'개발',desc:'모바일 환경에 맞는 기능과 사용 경험을 설계하고 스마트폰 앱을 구현합니다.',tasks:['iOS·Android 앱의 주요 기능 개발','화면 구성과 기기별 사용성 점검','버그 수정, 업데이트와 사용자 의견 반영'],tools:['Swift','Kotlin','Flutter','React Native','Firebase'] },
      analyst: { title:'보안 분석가',category:'보안',desc:'시스템과 서비스에서 발생하는 보안 이벤트를 살펴보고, 위협을 발견해 대응을 지원합니다.',tasks:['보안 로그와 이상 징후 모니터링','위협·취약점에 대한 위험도 분석','보안 사고 대응과 예방 방안 수립 지원'],tools:['네트워크 기초','운영체제','로그 분석','SIEM','Wireshark'] },
      pentest: { title:'모의해킹 전문가',category:'보안',desc:'시스템 소유자의 사전 승인과 명확히 정한 범위 안에서 보안 수준을 평가하고 개선 방안을 제시합니다.',tasks:['허가된 범위와 평가 목적 확인','보안 점검 결과를 체계적으로 문서화','발견된 위험에 대한 수정 권고와 재점검'],tools:['웹 보안 이해','네트워크','Linux','보안 평가 보고서','취약점 관리'] },
      data: { title:'데이터 분석가',category:'개발·데이터',desc:'데이터를 정리하고 시각화해 패턴을 발견하며 조직이 더 나은 결정을 내리도록 돕습니다.',tasks:['데이터 수집 및 전처리','통계 분석과 대시보드 제작','결과를 이해하기 쉬운 보고서로 전달'],tools:['Python','SQL','Pandas','Excel','데이터 시각화'] },
      devsecops: { title:'DevSecOps 엔지니어',category:'개발 × 보안',desc:'소프트웨어를 만들고 배포하는 과정 전반에 보안 점검과 자동화를 통합하는 직무입니다.',tasks:['개발과 배포 과정의 자동화 구축','코드와 설정의 보안 검사 체계 개선','개발·운영·보안 팀 사이의 협업 지원'],tools:['Git','CI/CD','Docker','클라우드 기초','자동화'] }
    };
    const dialog = $('#jobDialog');
    let focusReturn = null;
    $$('.job-card').forEach(card=>card.addEventListener('click',()=>{
      const job = jobs[card.dataset.job];if(!job)return;
      focusReturn = card;
      $('#dialogCategory').textContent=job.category;
      $('#dialogTitle').textContent=job.title;
      $('#dialogDesc').textContent=job.desc;
      const tasks=$('#dialogTasks');tasks.replaceChildren();job.tasks.forEach(t=>{const li=document.createElement('li');li.textContent=t;tasks.append(li);});
      const tools=$('#dialogTools');tools.replaceChildren();job.tools.forEach(t=>{const span=document.createElement('span');span.textContent=t;tools.append(span);});
      if(typeof dialog.showModal==='function')dialog.showModal();else dialog.setAttribute('open','');
      $('#closeDialog').focus();
    }));
    function closeDialog(){if(typeof dialog.close==='function')dialog.close();else dialog.removeAttribute('open');}
    $('#closeDialog').addEventListener('click',closeDialog);
    dialog.addEventListener('click',e=>{if(e.target===dialog)closeDialog();});
    dialog.addEventListener('close',()=>{if(focusReturn)focusReturn.focus();});
    $$('.filter').forEach(btn=>btn.addEventListener('click',()=>{
      const filter=btn.dataset.filter;
      $$('.filter').forEach(b=>b.setAttribute('aria-pressed',String(b===btn)));
      let count=0;
      $$('.job-card').forEach(card=>{const show=filter==='all'||card.dataset.category===filter;card.hidden=!show;if(show)count++;});
      $('#jobCount').textContent=count+'개의 직업';
    }));

    // 오해와 진실 카드 열고 닫기
    $$('.myth').forEach(card=>card.addEventListener('click',()=>{
      const open=card.getAttribute('aria-expanded')!=='true';
      card.setAttribute('aria-expanded',String(open));
      $('.myth-toggle',card).textContent=open?'답 접기 ↑':'답 확인하기 ↗';
      $('.myth-top span:last-child',card).textContent=open?'FACT REVEALED −':'CLICK TO REVEAL +';
    }));

    // 핵심 기술 탭
    const skills = [
      {label:'LEARNING AREA 01',title:'아이디어를 코드로 바꾸는 힘',desc:'HTML·CSS로 화면을 만들고 JavaScript 또는 Python으로 기능을 구현해 보세요. 완벽한 코드보다 직접 완성해 보는 경험이 중요합니다.',badges:['HTML / CSS','JavaScript','Python','Git'],example:'첫 프로젝트: 나를 소개하는 웹페이지를 만들고 작은 인터랙션을 추가하기'},
      {label:'LEARNING AREA 02',title:'컴퓨터가 작동하는 원리 이해',desc:'데이터가 저장되고 이동하는 방식, 운영체제와 네트워크가 하는 역할을 알아두면 개발과 보안 모두에서 든든한 기반이 됩니다.',badges:['운영체제','네트워크','자료구조','데이터베이스'],example:'첫 프로젝트: 인터넷으로 페이지가 열리는 과정을 그림으로 정리해 설명하기'},
      {label:'LEARNING AREA 03',title:'기술을 책임 있게 다루는 습관',desc:'안전한 코딩, 개인정보 보호, 접근 권한, 보안 사고 예방을 배우세요. 보안 실습은 반드시 합법적이고 명확히 허가된 환경에서만 해야 합니다.',badges:['보안 기초','개인정보 보호','접근 권한','디지털 윤리'],example:'첫 프로젝트: 내가 만든 사이트에 적용할 보안 체크리스트 작성하기'},
      {label:'LEARNING AREA 04',title:'함께 만들며 성장하는 경험',desc:'실제 프로젝트에서는 사람과 소통하고 문서를 남기며 의견을 주고받는 과정이 중요합니다. 작은 결과물을 꾸준히 만들고 개선해 보세요.',badges:['Git / GitHub','문서화','문제 해결','팀 프로젝트'],example:'첫 프로젝트: 친구와 함께 작은 앱을 기획하고 역할을 나눠 완성하기'}
    ];
    const skillTabs=$$('.skill-tab');
    function setSkill(index,focus=false){
      skillTabs.forEach((tab,i)=>{tab.setAttribute('aria-selected',String(i===index));tab.tabIndex=i===index?0:-1;});
      const skill=skills[index];
      $('#skillLabel').textContent=skill.label;
      $('#skillHeading').textContent=skill.title;
      $('#skillDescription').textContent=skill.desc;
      $('#skillExample').textContent=skill.example;
      const badges=$('#skillBadges');badges.replaceChildren();skill.badges.forEach(t=>{const span=document.createElement('span');span.textContent=t;badges.append(span);});
      $('#skillPanel').setAttribute('aria-labelledby','skillTab'+index);
      if(focus)skillTabs[index].focus();
    }
    skillTabs.forEach((tab,i)=>{tab.addEventListener('click',()=>setSkill(i));tab.addEventListener('keydown',event=>{
      if(event.key==='ArrowRight'||event.key==='ArrowDown'){event.preventDefault();setSkill((i+1)%skillTabs.length,true);}
      if(event.key==='ArrowLeft'||event.key==='ArrowUp'){event.preventDefault();setSkill((i-1+skillTabs.length)%skillTabs.length,true);}
      if(event.key==='Home'){event.preventDefault();setSkill(0,true);}
      if(event.key==='End'){event.preventDefault();setSkill(skillTabs.length-1,true);}
    });});

    // 3문제 미니 퀴즈
    const questions = [
      {q:'화이트해커가 보안 점검을 시작하기 전에 가장 먼저 확인할 것은?',options:['보안 점검에 대한 명확한 허가와 범위','유명한 프로그래밍 언어의 개수','컴퓨터의 브랜드'],correct:0,explain:'화이트해커는 사전에 허가된 범위와 조건을 반드시 준수해야 합니다.'},
      {q:'프로그래머와 화이트해커 모두에게 도움이 되는 능력은?',options:['혼자서만 모든 일을 해결하는 태도','논리적 사고와 꾸준한 학습','한 번 배운 기술만 계속 사용하는 습관'],correct:1,explain:'문제를 분석하고 새로운 기술을 배우며 협력하는 능력은 두 분야 모두의 기본입니다.'},
      {q:'진로를 탐색하는 학생에게 추천할 첫걸음은?',options:['모든 기술을 외울 때까지 기다리기','자격증만 최대한 많이 수집하기','작은 프로젝트를 직접 만들고 개선하기'],correct:2,explain:'작게 시작해 완성하고 개선하는 과정에서 적성과 실력을 함께 확인할 수 있습니다.'}
    ];
    let questionIndex=0,score=0,answered=false;
    function renderQuestion(){
      answered=false;
      const q=questions[questionIndex];
      $('#quizStep').textContent='QUESTION '+String(questionIndex+1).padStart(2,'0')+' / '+String(questions.length).padStart(2,'0');
      $('#quizBar').style.width=((questionIndex+1)/questions.length*100)+'%';
      $('#quizQuestion').textContent=q.q;
      $('#quizAnswer').hidden=true;
      $('#quizNext').hidden=true;
      $('#quizNext').textContent=questionIndex===questions.length-1?'결과 보기 →':'다음 문제 →';
      const options=$('#quizOptions');options.replaceChildren();
      q.options.forEach((answer,i)=>{const b=document.createElement('button');b.type='button';b.className='quiz-option';b.textContent=(i+1)+'.  '+answer;b.addEventListener('click',()=>answerQuestion(i));options.append(b);});
    }
    function answerQuestion(selected){
      if(answered)return;
      answered=true;
      const q=questions[questionIndex];if(selected===q.correct)score++;
      $$('.quiz-option').forEach((b,i)=>{b.disabled=true;if(i===q.correct)b.classList.add('correct');else if(i===selected)b.classList.add('wrong');});
      const note=$('#quizAnswer');note.textContent=(selected===q.correct?'정답입니다! ':'좋은 시도예요. ')+q.explain;note.hidden=false;
      $('#quizNext').hidden=false;
    }
    $('#quizNext').addEventListener('click',handleQuizNext);
    // 퀴즈 완료 화면과 재시작 시에도 동일한 핸들러를 사용합니다.
    function handleQuizNext(){questionIndex++;if(questionIndex<questions.length){renderQuestion();return;}renderResult();}
    function renderResult(){
      const panel=$('#quizPanel');panel.replaceChildren();
      const result=document.createElement('div');result.className='quiz-result';
      const label=document.createElement('span');label.className='quiz-step';label.textContent='CHALLENGE COMPLETE';
      const resultScore=document.createElement('strong');resultScore.className='score';resultScore.textContent=score+' / '+questions.length;
      const heading=document.createElement('h3');heading.textContent=score===questions.length?'완벽하게 이해했어요!':'오늘의 배움을 확인했어요!';
      const msg=document.createElement('p');msg.textContent='정답 개수보다 중요한 것은 이유를 이해하는 일입니다. 기억에 남는 직무를 하나 골라 더 알아보세요.';
      const restart=document.createElement('button');restart.className='btn btn-primary';restart.type='button';restart.textContent='다시 도전하기 ↻';
      restart.addEventListener('click',()=>{score=0;questionIndex=0;panel.innerHTML='<div class="quiz-step" id="quizStep"></div><div class="quiz-bar"><div class="quiz-bar-fill" id="quizBar"></div></div><h3 class="quiz-question" id="quizQuestion"></h3><div class="quiz-options" id="quizOptions"></div><div class="quiz-answer" id="quizAnswer" hidden></div><button type="button" class="btn btn-primary quiz-next" id="quizNext" hidden>다음 문제 →</button>';
        $('#quizNext').addEventListener('click',handleQuizNext);renderQuestion();});
      result.append(label,resultScore,heading,msg,restart);panel.append(result);
    }
    // 최초 렌더링: 첫 문제는 이미 문서에 있는 버튼에 이벤트가 연결됩니다.
    renderQuestion();

    // 발표 모드: 화살표로 섹션 이동 / 전체 화면은 브라우저가 허용하는 경우에만 사용
    let presenting=false;
    function moveSlide(delta){const next=Math.max(0,Math.min(sections.length-1,activeSection+delta));document.getElementById(sections[next]).scrollIntoView({behavior:scrollMode,block:'start'});activeSection=next;$('#slideLabel').textContent=String(next+1).padStart(2,'0')+' / '+String(sections.length).padStart(2,'0');}
    function togglePresentation(force){presenting=typeof force==='boolean'?force:!presenting;document.body.classList.toggle('presenting',presenting);$('#presentToggle').setAttribute('aria-pressed',String(presenting));$('#presentToggle').querySelector('.hide-mobile').textContent=presenting?'발표 종료':'발표 모드';if(presenting){document.documentElement.requestFullscreen?.().catch(()=>{});}else if(document.fullscreenElement){document.exitFullscreen?.().catch(()=>{});}}
    $('#presentToggle').addEventListener('click',()=>togglePresentation());
    $('#exitPresent').addEventListener('click',()=>togglePresentation(false));
    $('#prevSlide').addEventListener('click',()=>moveSlide(-1));
    $('#nextSlide').addEventListener('click',()=>moveSlide(1));
    document.addEventListener('keydown',e=>{
      if(!presenting || dialog.open)return;
      if(['INPUT','TEXTAREA','SELECT'].includes(document.activeElement?.tagName) || document.activeElement?.closest('[role=tablist]'))return;
      if(e.key==='ArrowRight'||e.key==='PageDown'){e.preventDefault();moveSlide(1);}
      if(e.key==='ArrowLeft'||e.key==='PageUp'){e.preventDefault();moveSlide(-1);}
      if(e.key==='Escape')togglePresentation(false);
    });
    document.addEventListener('fullscreenchange',()=>{if(!document.fullscreenElement && presenting)togglePresentation(false);});
    // 인쇄 대화상자의 'PDF로 저장' 옵션을 사용합니다.
    $('#printBtn').addEventListener('click',()=>window.print());
    $('#outroPrint').addEventListener('click',()=>window.print());
  </script>
</body>
</html>
