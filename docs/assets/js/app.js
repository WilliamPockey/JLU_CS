/* ==========================================================
   JLU_CS 生存指南 · 交互逻辑
   纯原生 JS, 无依赖, 便于 GitHub Pages 直接部署
   ========================================================== */
(function () {
  'use strict';

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };

  var COURSES = window.JLU_COURSES || [];
  var TERMS = window.JLU_TERMS || [];
  var KINDS = window.JLU_KINDS || {};
  var LS = { theme: 'jlu.theme', fav: 'jlu.fav' };

  var termMap = {};
  TERMS.forEach(function (t) { termMap[t.k] = t; });

  /* ---------------- 状态 ---------------- */
  var state = {
    q: '',
    terms: {},   // { '2a': true }
    kinds: {},
    levels: {},
    badges: {},
    favOnly: false,
  };

  var favs = readFavs();

  function readFavs() {
    try { return JSON.parse(localStorage.getItem(LS.fav) || '[]') || {}; }
    catch (e) { return {}; }
  }
  function saveFavs() {
    try { localStorage.setItem(LS.fav, JSON.stringify(favs)); } catch (e) {}
  }

  /* ---------------- 工具 ---------------- */
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function hl(s) {
    var t = esc(s);
    var q = state.q.trim();
    if (!q) return t;
    var parts = q.split(/\s+/).filter(Boolean).map(function (w) {
      return w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    });
    if (!parts.length) return t;
    return t.replace(new RegExp('(' + parts.join('|') + ')', 'gi'), '<mark>$1</mark>');
  }
  function stars(n) {
    var out = '<span class="stars lv' + n + '" title="难度 ' + n + ' / 5">';
    for (var i = 1; i <= 5; i++) out += '<span class="' + (i <= n ? 'f' : 's') + '">★</span>';
    return out + '</span>';
  }
  function uniq(a) { return a.filter(function (v, i) { return a.indexOf(v) === i; }); }
  function count(obj) { return Object.keys(obj).filter(function (k) { return obj[k]; }).length; }
  function anyFilter() {
    return state.q || state.favOnly || count(state.terms) || count(state.kinds) || count(state.levels) || count(state.badges);
  }

  var BADGE_LABEL = {
    '水课': 'b-water', '易高分': 'b-easy', '408': 'b-408', '推荐': 'b-rec',
    '慎选': 'b-warn', '挂科风险': 'b-warn',
  };
  var BADGE_TEXT = { '408': '408 四神', '水课': '水课', '易高分': '易高分' };
  function badgeClass(b) { return BADGE_LABEL[b] || ''; }
  function badgeText(b) { return BADGE_TEXT[b] || b; }

  /* ---------------- 过滤 ---------------- */
  function matches(c) {
    if (state.favOnly && !favs[c.t]) return false;
    if (count(state.terms) && !state.terms[c.term]) return false;
    if (count(state.kinds) && !state.kinds[c.kind]) return false;
    if (count(state.levels) && !state.levels[c.lv]) return false;
    if (count(state.badges)) {
      var ok = (c.badges || []).some(function (b) { return state.badges[b]; });
      if (!ok) return false;
    }
    var q = state.q.trim().toLowerCase();
    if (!q) return true;
    var hay = [
      c.t, c.type, c.c, c.e, c.a,
      (c.badges || []).join(' '), (c.lk || []).map(function (l) { return l.n; }).join(' '),
      termMap[c.term] ? termMap[c.term].y + termMap[c.term].s : '', KINDS[c.kind] ? KINDS[c.kind].label : '',
    ].join(' ').toLowerCase();
    return q.split(/\s+/).filter(Boolean).every(function (w) { return hay.indexOf(w) > -1; });
  }

  /* ---------------- 渲染:课程卡片 ---------------- */
  function cardHTML(c, idx) {
    var fav = !!favs[c.t];
    var term = termMap[c.term] || { icon: '', y: '', s: '' };
    var badges = (c.badges || []).map(function (b) {
      return '<span class="badge ' + badgeClass(b) + '">' + esc(badgeText(b)) + '</span>';
    }).join('');
    /* 类型文字与标记重复时只显示标记 */
    var showType = c.type && !(c.badges || []).some(function (b) { return badgeText(b) === c.type; });
    var links = (c.lk || []).map(function (l) {
      return '<a class="link-chip" href="' + esc(l.u) + '" target="_blank" rel="noopener">' + hl(l.n) + '</a>';
    }).join('');

    return '<article class="card open' + (fav ? ' faved' : '') + '" data-i="' + idx + '" data-t="' + esc(c.t) + '">' +
      '<div class="card-head">' +
        '<span class="course-icon">' + c.i + '</span>' +
        '<div class="course-main">' +
          '<h3 class="course-title">' + hl(c.t) + '</h3>' +
          '<div class="course-meta">' +
            '<span class="term-chip">' + term.icon + ' ' + term.y + term.s.replace('半学期', '') + '</span>' +
            '<span class="kind-pill kind-' + c.kind + '">' + KINDS[c.kind].label + '</span>' +
            stars(c.lv) +
            (showType ? '<span class="course-type">' + hl(c.type) + '</span>' : '') +
            badges +
          '</div>' +
        '</div>' +
        '<div class="card-tools">' +
          '<button class="star-btn' + (fav ? ' on' : '') + '" type="button" data-act="fav" title="收藏这节课" aria-label="收藏">' + (fav ? '★' : '☆') + '</button>' +
          '<button class="fold-btn" type="button" data-act="fold" title="展开 / 收起">▾</button>' +
        '</div>' +
      '</div>' +
      '<div class="card-body">' +
        (c.c ? '<div class="field"><span class="field-label">课程内容</span><div class="txt">' + hl(c.c) + '</div></div>' : '') +
        (c.e ? '<div class="field exam"><span class="field-label">考试形式</span><div class="txt">' + hl(c.e) + '</div></div>' : '') +
        (c.a ? '<div class="field adv"><span class="field-label">💡 个人建议</span><div class="txt">' + hl(c.a) + '</div></div>' : '') +
        (c.x || '') +
        (links ? '<div class="links">' + links + '</div>' : '') +
      '</div>' +
    '</article>';
  }

  function renderCards() {
    var html = '';
    var shown = 0;
    var grouped = {};
    COURSES.forEach(function (c, i) {
      if (!matches(c)) return;
      shown++;
      (grouped[c.term] = grouped[c.term] || []).push([c, i]);
    });

    var multiGroup = uniq(groupedTermsShown(grouped)).length > 1;

    TERMS.forEach(function (t) {
      var list = grouped[t.k];
      if (!list) return;
      if (multiGroup) {
        html += '<div class="divider" id="term-' + t.k + '"><h3>' + t.icon + ' ' + t.y + ' · ' + t.s + '</h3>' +
                '<span class="dn">' + list.length + ' 门</span></div>';
      }
      list.forEach(function (pair) { html += cardHTML(pair[0], pair[1]); });
    });

    $('#cards').innerHTML = html;
    /* 「只看标题」开启时, 重新渲染后保持折叠状态 */
    if ($('#compactToggle').checked) {
      $$('#cards .card').forEach(function (c) {
        c.classList.remove('open');
        var b = $('.fold-btn', c); if (b) b.textContent = '▸';
      });
    }
    $('#emptyTip').hidden = shown > 0;
    $('#resultHint').innerHTML = anyFilter()
      ? '筛出 <b>' + shown + '</b> / ' + COURSES.length + ' 门课程'
      : '共 <b>' + COURSES.length + '</b> 门课程';
  }

  function groupedTermsShown(grouped) {
    return Object.keys(grouped);
  }

  /* ---------------- 渲染:筛选条 ---------------- */
  function chip(group, key, label, n, on) {
    return '<button class="chip' + (on ? ' on' : '') + '" type="button" data-group="' + group + '" data-key="' + esc(key) + '">' +
      label + (n != null ? '<span class="n">' + n + '</span>' : '') + '</button>';
  }

  function badgeCounts() {
    var m = {};
    COURSES.forEach(function (c) {
      (c.badges || []).forEach(function (b) { m[b] = (m[b] || 0) + 1; });
    });
    return m;
  }

  function renderFilters() {
    var bc = badgeCounts();
    var kc = {}, lc = {};
    COURSES.forEach(function (c) { kc[c.kind] = (kc[c.kind] || 0) + 1; lc[c.lv] = (lc[c.lv] || 0) + 1; });

    $('#termFilters').innerHTML = TERMS.map(function (t) {
      return chip('terms', t.k, t.y + t.s.replace('半学期', ''), COURSES.filter(function (c) { return c.term === t.k; }).length, !!state.terms[t.k]);
    }).join('');
    $('#termFilters').setAttribute('data-label', '学期');

    $('#kindFilters').innerHTML = Object.keys(KINDS).map(function (k) {
      return chip('kinds', k, KINDS[k].label, kc[k] || 0, !!state.kinds[k]);
    }).join('');
    $('#kindFilters').setAttribute('data-label', '类别');

    $('#lvFilters').innerHTML = [1, 2, 3, 4, 5].map(function (n) {
      return chip('levels', n, '★'.repeat(n), lc[n] || 0, !!state.levels[n]);
    }).join('');
    $('#lvFilters').setAttribute('data-label', '难度');

    $('#badgeFilters').innerHTML = Object.keys(bc).sort(function (a, b) { return bc[b] - bc[a]; }).map(function (b) {
      return chip('badges', b, esc(badgeText(b)), bc[b], !!state.badges[b]);
    }).join('') + '<button class="chip chip-more" type="button" id="moreBadges" hidden>更多标记 ▾</button>';
    $('#badgeFilters').setAttribute('data-label', '标记');

    var row = $('#badgeFilters');
    var more = $('#moreBadges');
    if (row.scrollHeight > row.clientHeight + 4) { more.hidden = false; }
  }

  /* ---------------- 渲染:侧栏 / 统计 / 静态块 ---------------- */
  function renderTermNav() {
    $('#termNav').innerHTML = '<div class="side-title">按学期跳转</div>' +
      TERMS.map(function (t) {
        var n = COURSES.filter(function (c) { return c.term === t.k; }).length;
        return '<a class="side-link" href="#term-' + t.k + '" data-term="' + t.k + '">' +
          '<span>' + t.icon + '</span>' + t.y + t.s.replace('半学期', '') +
          '<span class="cnt">' + n + '</span></a>';
      }).join('');
  }

  function renderLegend() {
    $('#legendLevel').innerHTML = [1, 2, 3, 4, 5].map(function (n) {
      var tag = ['摸鱼', '轻松', '正常', '较难', '硬核'][n - 1];
      return '<span class="lg">' + stars(n) + tag + '</span>';
    }).join('');

    var defs = [
      ['水课', '纯水课, 不必投入精力'],
      ['易高分', '原 # 标记, 容易拿高分'],
      ['408 四神', '考研 408 四门核心课'],
      ['推荐', '学长真心推荐'],
      ['慎选', '容易劝退, 选课前三思'],
      ['答辩 / 小组 / 上机 / 开卷', '考核方式提示'],
    ];
    $('#legendBadge').innerHTML = defs.map(function (d) {
      return '<span class="badge ' + badgeClass(d[0].split(' ')[0]) + '">' + esc(d[0]) + '</span><span class="lg">' + esc(d[1]) + '</span>';
    }).join('');
  }

  function renderStats() {
    var req = COURSES.filter(function (c) { return c.kind === 'req'; }).length;
    var sel = COURSES.filter(function (c) { return c.kind === 'sel'; }).length;
    var lab = COURSES.filter(function (c) { return c.kind === 'lab'; }).length;
    var water = COURSES.filter(function (c) { return (c.badges || []).indexOf('水课') > -1; }).length;
    var easy = COURSES.filter(function (c) { return (c.badges || []).indexOf('易高分') > -1; }).length;
    var f408 = COURSES.filter(function (c) { return (c.badges || []).indexOf('408') > -1; }).length;
    $('#heroStats').innerHTML = [
      ['课程', COURSES.length], ['必修', req], ['选修', sel], ['实验环节', lab],
      ['408 四神', f408], ['水课', water], ['易高分', easy],
    ].map(function (d) { return '<span class="stat"><b>' + d[1] + '</b>' + d[0] + '</span>'; }).join('');
    $('#totalCount').textContent = COURSES.length;
  }

  function renderChapters() {
    var anchor = { ch5: '#ch5', ch6: '#kaoyan', ch7: '#ch7' };
    $('#chapterList').innerHTML = (window.JLU_CHAPTERS || []).map(function (c) {
      var href = anchor[c.id];
      var tag = c.status === 'done' ? '<span class="ct" style="color:var(--mint)">✅ 已更新</span>'
                                    : '<span class="ct" style="color:var(--ink-4)">📝 敬请期待</span>';
      var inner = '<span class="cn">' + c.no + '</span><h4>' + c.t + '</h4>' +
                  (c.s ? '<div class="cs">' + c.s + '</div>' : '') + tag;
      return href
        ? '<a class="chapter-card ' + (c.status === 'done' ? 'done' : 'dim') + '" href="' + href + '">' + inner + '</a>'
        : '<div class="chapter-card dim">' + inner + '</div>';
    }).join('');

    $('#chapterNav').innerHTML = (window.JLU_CHAPTERS || []).map(function (c) {
      var href = anchor[c.id];
      return '<a class="side-link' + (href ? '' : ' dim') + '" ' + (href ? 'href="' + href + '"' : 'style="opacity:.55"') + '>' +
        (c.status === 'done' ? '✅' : '📝') + ' ' + c.no + ' · ' + c.t + '</a>';
    }).join('');
  }

  function renderSkip() {
    $('#skipGrid').innerHTML = (window.JLU_SKIP || []).map(function (s) {
      return '<article class="skip-card"><h4>' + s.i + ' ' + esc(s.t) + '</h4>' +
        '<span class="why">' + esc(s.why) + '</span>' +
        (s.where && s.where !== '—' ? '<div class="where">查询渠道:' + esc(s.where) + '</div>' : '') +
        '<p>' + esc(s.body) + '</p></article>';
    }).join('');
  }

  function renderResources() {
    $('#resGrid').innerHTML = (window.JLU_RESOURCES || []).map(function (r) {
      return '<a class="res-card" href="' + esc(r.u) + '" target="_blank" rel="noopener"><b>📚 ' + esc(r.n) + '</b>' +
        '<p>' + esc(r.d) + '</p><code>' + esc(r.u) + '</code></a>';
    }).join('') +
    '<a class="res-card" href="https://blog.csdn.net/m0_62890769?type=blog" target="_blank" rel="noopener"><b>✍️ CSDN @苏子寒</b>' +
    '<p>更多生存技巧与课程资料在 CSDN 主页更新</p><code>blog.csdn.net/m0_62890769</code></a>';
  }

  function renderProse() {
    $('#ch5Body').innerHTML = window.JLU_CH5 || '';
    $('#ch6Body').innerHTML = window.JLU_CH6 || '';
    $('#ch7Body').innerHTML = window.JLU_CH7 || '';
  }

  function renderFavUI() {
    var n = count(favs);
    $('#favCount').textContent = n;
    $('#favBtn').classList.toggle('on', !!state.favOnly);
  }

  /* ---------------- 主题 ---------------- */
  function initTheme() {
    var saved = null;
    try { saved = localStorage.getItem(LS.theme); } catch (e) {}
    var want = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', want);
    var mt = $('meta[name="theme-color"]');
    if (mt) mt.setAttribute('content', want === 'dark' ? '#161d21' : '#f7f9f7');
  }
  function toggleTheme() {
    var next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    try { localStorage.setItem(LS.theme, next); } catch (e) {}
    var mt = $('meta[name="theme-color"]');
    if (mt) mt.setAttribute('content', next === 'dark' ? '#161d21' : '#f7f9f7');
  }

  /* ---------------- Hash 状态同步 ---------------- */
  function readHash() {
    var h = decodeURIComponent(location.hash || '');
    var m = h.match(/^#courses\?(.*)$/);
    if (!m) return;
    var p = {};
    m[1].split('&').forEach(function (kv) {
      var s = kv.split('=');
      if (s[0]) p[s[0]] = decodeURIComponent(s[1] || '');
    });
    if (p.q) { state.q = p.q; }
    /* 兼容 term/terms 两种手写写法 */
    if (p.term && !p.terms) p.terms = p.term;
    ['terms', 'kinds', 'levels', 'badges'].forEach(function (g) {
      if (!p[g]) return;
      p[g].split(',').forEach(function (v) {
        if (g === 'kinds') state.kinds[v] = true;
        else if (g === 'levels') state.levels[+v] = true;
        else state[g][v] = true;
      });
    });
    if (p.fav) state.favOnly = true;
  }
  function writeHash() {
    var p = [];
    if (state.q) p.push('q=' + encodeURIComponent(state.q));
    if (count(state.terms)) p.push('terms=' + Object.keys(state.terms).filter(function (k) { return state.terms[k]; }).join(','));
    if (count(state.kinds)) p.push('kinds=' + Object.keys(state.kinds).filter(function (k) { return state.kinds[k]; }).join(','));
    if (count(state.levels)) p.push('levels=' + Object.keys(state.levels).filter(function (k) { return state.levels[k]; }).join(','));
    if (count(state.badges)) p.push('badges=' + Object.keys(state.badges).filter(function (k) { return state.badges[k]; }).join(','));
    if (state.favOnly) p.push('fav=1');
    var h = p.length ? '#courses?' + p.join('&') : '#courses';
    try { history.replaceState(null, '', h); } catch (e) {}
  }

  /* ---------------- 交互 ---------------- */
  function refresh() {
    renderFilters();
    renderCards();
    renderFavUI();
    syncSearchBoxes();
    writeHash();
  }
  function syncSearchBoxes() {
    if ($('#search').value !== state.q) $('#search').value = state.q;
    if ($('#heroSearch').value !== state.q) $('#heroSearch').value = state.q;
    $('#clearBtn').hidden = !state.q;
  }

  function toggleFav(name) {
    if (favs[name]) delete favs[name]; else favs[name] = 1;
    saveFavs();
    renderCards();
    renderFavUI();
  }

  var searchTimer = null;
  function onSearch(v) {
    state.q = v;
    clearTimeout(searchTimer);
    searchTimer = setTimeout(function () { renderFilters(); renderCards(); syncSearchBoxes(); writeHash(); }, 120);
  }

  function bind() {
    /* 搜索 */
    ['#search', '#heroSearch'].forEach(function (s) {
      $(s).addEventListener('input', function (e) {
        state.q = e.target.value;
        clearTimeout(searchTimer);
        searchTimer = setTimeout(function () {
          renderFilters(); renderCards(); syncSearchBoxes(); writeHash();
          if (e.target.id === 'heroSearch' && state.q) scrollTo_('courses');
        }, 140);
      });
    });
    $('#clearBtn').addEventListener('click', function () { state.q = ''; refresh(); $('#search').focus(); });

    /* 筛选 chip */
    $('#toolbar').addEventListener('click', function (e) {
      var chipEl = e.target.closest('.chip');
      if (!chipEl) return;
      if (chipEl.id === 'moreBadges') {
        var row = $('#badgeFilters');
        row.classList.toggle('open');
        chipEl.textContent = row.classList.contains('open') ? '收起 ▴' : '更多标记 ▾';
        return;
      }
      var g = chipEl.dataset.group, k = chipEl.dataset.key;
      if (!g) return;
      if (g === 'levels') k = +k;
      if (state[g][k]) delete state[g][k]; else state[g][k] = true;
      refresh();
    });

    /* 卡片:收藏 / 折叠 */
    $('#cards').addEventListener('click', function (e) {
      var btn = e.target.closest('[data-act]');
      if (!btn) return;
      var card = btn.closest('.card');
      var name = card.dataset.t;
      if (btn.dataset.act === 'fav') { toggleFav(name); }
      else {
        var open = card.classList.toggle('open');
        btn.textContent = open ? '▾' : '▸';
      }
    });

    /* 只看标题 */
    $('#compactToggle').addEventListener('change', function (e) {
      $$('#cards .card').forEach(function (c) {
        c.classList.toggle('open', !e.target.checked);
        var b = $('.fold-btn', c); if (b) b.textContent = e.target.checked ? '▸' : '▾';
      });
    });
    $('#favOnlyToggle').addEventListener('change', function (e) {
      state.favOnly = e.target.checked; refresh();
    });
    $('#favBtn').addEventListener('click', function () {
      state.favOnly = !state.favOnly;
      $('#favOnlyToggle').checked = state.favOnly;
      refresh();
      scrollTo_('courses');
    });

    function resetAll() {
      state.q = ''; state.terms = {}; state.kinds = {}; state.levels = {}; state.badges = {}; state.favOnly = false;
      $('#favOnlyToggle').checked = false; $('#compactToggle').checked = false;
      refresh();
    }
    $('#resetBtn').addEventListener('click', resetAll);
    $('#emptyReset').addEventListener('click', resetAll);

    /* 侧栏学期跳转 = 单选该学期 */
    $('#termNav').addEventListener('click', function (e) {
      var a = e.target.closest('[data-term]');
      if (!a) return;
      e.preventDefault();
      state.terms = {};
      state.terms[a.dataset.term] = true;
      refresh();
      scrollTo_('courses');
    });

    /* 主题 / 菜单 */
    $('#themeBtn').addEventListener('click', toggleTheme);
    $('#menuBtn').addEventListener('click', function () {
      var open = $('#sidebar').classList.toggle('open');
      $('#scrim').hidden = !open;
      $('#menuBtn').setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    $('#scrim').addEventListener('click', function () {
      $('#sidebar').classList.remove('open'); $('#scrim').hidden = true;
    });
    $$('.side-link, .topnav a').forEach(function (a) {
      a.addEventListener('click', function () { $('#sidebar').classList.remove('open'); $('#scrim').hidden = true; });
    });

    /* 键盘 */
    document.addEventListener('keydown', function (e) {
      var tag = (e.target.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea') {
        if (e.key === 'Escape') { e.target.blur(); }
        return;
      }
      if (e.key === '/') { e.preventDefault(); $('#search').focus(); $('#search').scrollIntoView({ block: 'center' }); }
      if (e.key === 'Escape' && state.q) { state.q = ''; refresh(); }
    });

    /* 滚动相关 */
    var ticking = false;
    window.addEventListener('scroll', function () {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(function () {
        var y = window.scrollY;
        var h = document.documentElement.scrollHeight - window.innerHeight;
        $('#progressBar').style.width = (h > 0 ? (y / h) * 100 : 0) + '%';
        $('.topbar').classList.toggle('stuck', y > 8);
        $('#toTop').hidden = y < 500;
        spy();
        ticking = false;
      });
    }, { passive: true });
    $('#toTop').addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });

    /* 章节内 checkbox 记忆 */
    $$('.goal input').forEach(function (i) { i.addEventListener('change', saveGoals); });
  }

  function scrollTo_(id) {
    var el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 84, behavior: 'smooth' });
    /* 平滑滚动结束后再校准一次高亮 */
    setTimeout(spy, 450);
  }

  function saveGoals() {
    try {
      var on = [];
      $$('.goal input').forEach(function (i, n) { if (i.checked) on.push(n); });
      localStorage.setItem('jlu.goals', JSON.stringify(on));
    } catch (e) {}
  }
  function loadGoals() {
    try {
      var on = JSON.parse(localStorage.getItem('jlu.goals') || 'null');
      if (!on) return;
      $$('.goal input').forEach(function (i, n) { i.checked = on.indexOf(n) > -1; });
    } catch (e) {}
  }

  /* 滚动高亮 */
  var SPY = ['#preface', '#notes', '#courses', '#guide', '#kaoyan', '#resources'];
  function spy() {
    var best = null, bestTop = -1e9;
    SPY.concat(['#ch5', '#ch7', '#feedback']).forEach(function (s) {
      var el = $(s);
      if (!el) return;
      var top = el.getBoundingClientRect().top - 120;
      if (top <= 0 && top > bestTop) { bestTop = top; best = s; }
    });
    $$('.topnav a').forEach(function (a) {
      a.classList.toggle('on', !!best && a.getAttribute('href') === best);
    });
    $$('.sidebar .side-link').forEach(function (a) {
      var h = a.getAttribute('href') || '';
      a.classList.toggle('on', !!best && (h === best || h.indexOf(best) === 0));
    });
  }

  /* ---------------- 启动 ---------------- */
  initTheme();
  renderLegend();
  renderStats();
  renderTermNav();
  renderChapters();
  renderSkip();
  renderResources();
  renderProse();
  loadGoals();
  var deep = /^#courses\?/.test(location.hash || '');
  readHash();
  $('#favOnlyToggle').checked = state.favOnly;
  refresh();
  bind();
  spy();
  /* 深链接进入 (带筛选参数) 时直接定位到课程区 */
  if (deep) setTimeout(function () { scrollTo_('courses'); }, 60);
})();
