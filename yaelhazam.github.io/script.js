(function () {
  /* ---------- Catalog snapshot, weshoes.co.il, 2026-11-05 ---------- */
  var CHART = [
    ["33-34",20,"M2 W4"],["34-35",21,"M3 W5"],["36-37",22,"M4 W6"],["37-38",23,"M5 W7"],
    ["38-39",24,"M6 W8"],["39-40",25,"M7 W9"],["41-42",26,"M8 W10"],["42-43",27,"M9 W11"],
    ["43-44",28,"M10 W12"],["45-46",29,"M11 W13"],["46-47",30,"M12 W14"],["48-49",31,"M13 W15"],
    ["49-50",32,"M14 W16"],["50-51",33,"M15 W17"],["51-52",34,"M16 W18"],["52-53",35,"M17 W19"]
  ];
  var MODELS = [
    { name:"Crocs Classic", price:229.90, min:"36-37", max:"52-53", fit:"roomy", known:true, uses:["everyday","summer"],
      url:"https://weshoes.co.il/products/crocs-classic-%D7%A0%D7%A2%D7%9C%D7%99-%D7%A7%D7%A8%D7%95%D7%A7%D7%A1-%D7%A7%D7%9C%D7%90%D7%A1%D7%99%D7%99%D7%9D",
      img:"https://weshoes.co.il/cdn/shop/files/10001-001-1_947a4129-42cd-4aff-97d7-1fc2e0443002.JPG?v=1787843746",
      stock:["37-38","39-40","41-42","42-43","43-44","45-46","46-47"] },
    { name:"Classic Lined Clog", price:279.90, min:"36-37", max:"48-49", fit:"roomy", lined:true, known:true, uses:["warm"],
      url:"https://weshoes.co.il/products/crocs-classic-lined-clog-kpkpym-prvvtyym-qrvqs",
      img:"https://weshoes.co.il/cdn/shop/files/203591-060-1_0fa6cec0-a714-43c3-a99a-cbc736a32c1e.JPG?v=1747894530" },
    { name:"Classic Crafted Clog", price:299.90, min:"36-37", max:"48-49", fit:"roomy", uses:["everyday"],
      url:"https://weshoes.co.il/products/crocs-classic-crafted-clog-%D7%9B%D7%A4%D7%9B%D7%A4%D7%99-%D7%A7%D7%9C%D7%95%D7%92-%D7%A7%D7%A8%D7%95%D7%A7%D7%A1-%D7%A7%D7%A8%D7%90%D7%A4%D7%98%D7%93",
      img:"https://weshoes.co.il/cdn/shop/files/211354-206-1.jpg?v=1790691444",
      stock:["36-37","37-38","38-39","39-40","41-42","42-43","43-44","45-46","46-47"] },
    { name:"Classic Crafted Vegan Suede", price:329.90, min:"36-37", max:"48-49", fit:"roomy", uses:["everyday","height"],
      url:"https://weshoes.co.il/products/211930-001",
      img:"https://weshoes.co.il/cdn/shop/files/211930-001-1.jpg?v=1769426130" },
    { name:"Classic Crush Clog", price:349.90, min:"36-37", max:"42-43", fit:"relaxed", uses:["height"],
      url:"https://weshoes.co.il/products/crocs-classic-crush-clog-%D7%9B%D7%A4%D7%9B%D7%A4%D7%99-%D7%A4%D7%9C%D7%98%D7%A4%D7%95%D7%A8%D7%9E%D7%94-%D7%A7%D7%A8%D7%95%D7%A7%D7%A1-%D7%A7%D7%A8%D7%90%D7%A9-%D7%9C%D7%A0%D7%A9%D7%99%D7%9D-1",
      img:"https://weshoes.co.il/cdn/shop/files/207521-6UR-1.jpg?v=1779790528",
      stock:["36-37","37-38","38-39","39-40"] },
    { name:"Classic Bae Clog", price:349.90, min:"33-34", max:"41-42", fit:"relaxed", uses:["height"],
      url:"https://weshoes.co.il/products/crocs-classic-bae-clog-%D7%9B%D7%A4%D7%9B%D7%A4%D7%99-%D7%A4%D7%9C%D7%98%D7%A4%D7%95%D7%A8%D7%9E%D7%94-%D7%A7%D7%A8%D7%95%D7%A7%D7%A1-%D7%9C%D7%A0%D7%A9%D7%99%D7%9D-%D7%91%D7%A6%D7%91%D7%A2-%D7%A9%D7%97%D7%95%D7%A8",
      img:"https://weshoes.co.il/cdn/shop/files/206302-001-1.jpg?v=1752074127",
      stock:["34-35","36-37","37-38","38-39","39-40","41-42"] },
    { name:"Dylan Notched Clog", price:299.90, min:"34-35", max:"42-43", fit:"standard", uses:["height","everyday"],
      url:"https://weshoes.co.il/products/214273-001",
      img:"https://weshoes.co.il/cdn/shop/files/214273-001-1.jpg?v=1788358558",
      stock:["34-35","36-37","37-38","38-39","39-40","42-43"] },
    { name:"Echo II", price:349.90, min:"36-37", max:"48-49", fit:"relaxed", uses:["walk"],
      url:"https://weshoes.co.il/products/212810-2qd",
      img:"https://weshoes.co.il/cdn/shop/files/212810-2QD-1.jpg?v=1789395508",
      stock:["38-39","39-40","41-42","42-43","43-44","48-49"] },
    { name:"InMotion Clog", price:339.90, min:"36-37", max:"48-49", fit:"relaxed", uses:["walk"],
      url:"https://weshoes.co.il/products/209964-410",
      img:"https://weshoes.co.il/cdn/shop/files/209964-410-1.jpg?v=1791281740",
      stock:["36-37","37-38","38-39","39-40","41-42","42-43","43-44","45-46"] },
    { name:"Crocband", price:269.90, min:"36-37", max:"48-49", fit:"relaxed", uses:["everyday","walk","summer"],
      url:"https://weshoes.co.il/products/crocs-crocband-n-ly-qrvqs-qrvqbnd-2",
      img:"https://weshoes.co.il/cdn/shop/files/11016-410-1_d6f1c665-0dc4-4831-9a96-4a54438ba4ad.JPG?v=1791468949",
      stock:["37-38","38-39","39-40","41-42","42-43","43-44","45-46","46-47"] },
    { name:"Crocband Flip", price:199.90, min:"36-37", max:"41-42", fit:"standard", known:true, uses:["summer"],
      url:"https://weshoes.co.il/products/crocs-crocband-flip-%D7%A0%D7%A2%D7%9C%D7%99-%D7%90%D7%A6%D7%91%D7%A2-%D7%A7%D7%A8%D7%95%D7%A7%D7%A1" },
    { name:"Classic Cozzzy Slipper", price:249.90, min:"36-37", max:"46-47", fit:"relaxed", uses:["warm"],
      url:"https://weshoes.co.il/products/209386-001" }
  ];
  /* Demo only: Dizengoff Center and Eilat are confirmed stores, the other cities are examples, and all stock below is simulated. */
  var BRANCHES = [
    { he:"דיזנגוף סנטר, תל אביב", en:"Dizengoff Center, Tel Aviv" },
    { he:"ירושלים", en:"Jerusalem" }, { he:"חיפה", en:"Haifa" },
    { he:"ראשון לציון", en:"Rishon LeZion" }, { he:"באר שבע", en:"Beer Sheva" }, { he:"אילת", en:"Eilat" }
  ];
  var T = {
    he: {
      roomy:"מרווחת", relaxed:"נינוחה", standard:"צמודה", est:"משוער",
      exact:"האורך תואם בדיוק למידה בטבלה.",
      down_roomy:"בין שתי מידות. הדגם מרווח, אז יורדים לקטנה.",
      down_secure:"בין שתי מידות. כף רגל צרה או העדפה לישיבה צמודה, אז יורדים לקטנה.",
      up_lined:"בין שתי מידות. הבטנה תופסת מקום, אז עולים לגדולה.",
      up_wide:"בין שתי מידות. כף רגל רחבה, אז עולים לגדולה.",
      up_room:"בין שתי מידות. ביקשת מקום, אז עולים לגדולה.",
      up_fit:"בין שתי מידות. הדגם פחות מרווח, אז עולים לגדולה.",
      top:"הבחירה הראשונה:", fitw:"התאמה",
      inStock:"בצבע שבעמוד המוצר, במלאי באתר נכון ל-5.11.", outStock:"בצבע שבעמוד המוצר, לא במלאי באתר נכון ל-5.11.",
      brOpen:"בדיקה בסניפים", brClose:"סגירת הסניפים",
      brDemo:"הדגמה בלבד: המלאי כאן מומצא, וחלק מהערים הן דוגמה. בכלי האמיתי זה יתחבר לבדיקת המלאי בסניפים שכבר קיימת ב-WeShoes.",
      brIn:"במלאי", brLast:"זוג אחרון", brOut:"אין במלאי",
      art:{
        tammuz:"כל אות ב-TAMMUZ נשלטת על ידי ערכים אחרים ב-JSON: הצבע, הגודל, הזווית והעובי שלה. המותג שכתוב ב-brand מודגש בירוק מתוך מותגי הקבוצה.",
        network:"החטיבות של הקבוצה, מחוברות דרך מרכז אחד. צבעי הקווים ומיקום חבילות הנתונים נקבעים לפי ה-JSON.",
        dots:"TAMMUZ GROUP בחורים, כמו בכפכף. כל תו בערכים צובע נקודה אחת.",
        label:"תווית של ארגז נעליים במרכז הלוגיסטי. המידה והדגם מגיעים מה-JSON, והברקוד נוצר מכל התווים שלו.",
        print:"טביעת רגל באורך וברוחב שב-JSON. כל תו בערכים צובע טבעת אחת.",
        brush:"כל תו במפתח הוא קו דק, וכל תו בערך הוא מכחול צבעוני."
      },
      empty:"אין דגם למבוגרים במידה הזו בנתונים של האב-טיפוס. למידות קטנות יותר צריך להוסיף את טבלת הילדים.",
      hidden:function(n){ return n + " דגמים נוספים לא נמכרים במידה הזו, אז הכלי לא מציע אותם."; },
      ok:function(n){ return "JSON תקין · " + n + " ערכים"; },
      bad:"ה-JSON לא תקין. בדקו פסיקים ומרכאות. הציור נשאר מהתשובה האחרונה.",
      copied:"הועתק", copyFail:"לא הצלחתי להעתיק. אפשר לסמן את הטקסט ידנית."
    },
    en: {
      roomy:"roomy", relaxed:"relaxed", standard:"standard", est:"estimated",
      exact:"The length matches this size on the chart exactly.",
      down_roomy:"Between two sizes. This model is roomy, so go down.",
      down_secure:"Between two sizes. Narrow foot or a secure-fit preference, so go down.",
      up_lined:"Between two sizes. The lining takes up space, so go up.",
      up_wide:"Between two sizes. Wide foot, so go up.",
      up_room:"Between two sizes. You asked for room, so go up.",
      up_fit:"Between two sizes. This model is less roomy, so go up.",
      top:"First pick:", fitw:"fit",
      inStock:"In the color on the product page, in stock online as of Nov 5.", outStock:"In the color on the product page, out of stock online as of Nov 5.",
      brOpen:"Check stores", brClose:"Hide stores",
      brDemo:"Demo only: this stock is made up, and some cities are examples. The real tool would connect to the store stock check that already exists on WeShoes.",
      brIn:"In stock", brLast:"Last pair", brOut:"Out of stock",
      art:{
        tammuz:"Each letter of TAMMUZ is driven by different JSON values: its color, size, angle and weight. The brand in \"brand\" lights up green among the group’s brands.",
        network:"The group’s divisions, connected through one hub. Line colors and where the data packets land come from the JSON.",
        dots:"TAMMUZ GROUP in holes, like on a clog. Each character in the values colors one dot.",
        label:"A shoebox label at the logistics center. The size and model come from the JSON, and the barcode is generated from all its characters.",
        print:"A footprint with the length and width in the JSON. Each character in the values colors one ring.",
        brush:"Each character in a key is a thin line, and each character in a value is a colored brushstroke."
      },
      empty:"No adult model in this size in the prototype’s data. Smaller sizes need the kids’ chart.",
      hidden:function(n){ return n + " more models don’t come in this size, so the tool doesn’t offer them."; },
      ok:function(n){ return "Valid JSON · " + n + " values"; },
      bad:"Invalid JSON. Check commas and quotes. The painting stays from the last valid answer.",
      copied:"Copied", copyFail:"Couldn’t copy. You can select the text by hand."
    }
  };

  /* ---------- Fit logic ---------- */
  function chartIndexForCm(cm) { return Math.min(CHART.length - 1, Math.max(0, Math.round(cm) - 20)); }
  function idxOf(eu) { for (var i = 0; i < CHART.length; i++) if (CHART[i][0] === eu) return i; return -1; }
  function sizeFor(m, q) {
    var lo = chartIndexForCm(Math.floor(q.cm)), hi = chartIndexForCm(Math.ceil(q.cm));
    if (lo === hi) return { i: lo, rule: "exact" };
    if (m.lined) return { i: hi, rule: "up_lined" };
    if (q.width === "wide") return { i: hi, rule: "up_wide" };
    if (q.pref === "room") return { i: hi, rule: "up_room" };
    if (q.width === "narrow" || q.pref === "snug") return { i: lo, rule: "down_secure" };
    if (m.fit === "roomy") return { i: lo, rule: "down_roomy" };
    return { i: hi, rule: "up_fit" };
  }
  function score(m, q) {
    var s = m.uses.indexOf(q.use) >= 0 ? 4 - m.uses.indexOf(q.use) * .5 : 0;
    if (q.width === "wide") s += { roomy: 2, relaxed: 1, standard: -1 }[m.fit];
    if (q.width === "narrow") s += { roomy: -1, relaxed: 0, standard: 2 }[m.fit];
    if (q.pref === "snug") s += { roomy: -1, relaxed: 0, standard: 1 }[m.fit];
    if (q.pref === "room") s += { roomy: 1, relaxed: .5, standard: -1 }[m.fit];
    if (m.known) s += .25;
    return s;
  }
  function recommend(q) {
    var inRange = [], hidden = 0;
    MODELS.forEach(function (m) {
      var r = sizeFor(m, q);
      if (r.i >= idxOf(m.min) && r.i <= idxOf(m.max)) inRange.push({ m: m, i: r.i, rule: r.rule, s: score(m, q) });
      else hidden++;
    });
    inRange.sort(function (a, b) { return b.s - a.s || a.m.price - b.m.price; });
    return { picks: inRange.slice(0, 3), hidden: hidden };
  }

  /* ---------- Finder UI ---------- */
  var page = document.getElementById("page");
  var resultEl = document.getElementById("result");
  var footEl = document.getElementById("foot");
  var cmEl = document.getElementById("cm");
  var ta = document.getElementById("payload");
  var statusEl = document.getElementById("status");
  var lang = "he", lastSize = "", openBranch = "Crocs Classic";

  function radio(n) { return document.querySelector('input[name="' + n + '"]:checked').value; }
  function query() { return { cm: parseFloat(footEl.value), width: radio("width"), pref: radio("pref"), use: radio("use") }; }

  function renderFinder(animate) {
    var q = query(), t = T[lang], res = recommend(q);
    cmEl.textContent = q.cm.toFixed(1) + " cm";
    document.getElementById("artnote").textContent = t.art[artStyle];
    footEl.style.setProperty("--pct", ((q.cm - 20) / 15 * 100) + "%");
    if (!res.picks.length) {
      resultEl.innerHTML = '<p class="empty">' + t.empty + "</p>";
      setPayload({ foot_cm: q.cm, width: q.width, picks: [] }, animate);
      return;
    }
    var first = res.picks[0], c = CHART[first.i];
    var pop = animate && c[0] !== lastSize ? " pop" : "";
    lastSize = c[0];
    var names = res.picks.map(function (p) { return p.m.name; });
    if (openBranch !== "" && names.indexOf(openBranch) < 0) openBranch = first.m.name;
    var html = '<div class="head"><div class="big"><span class="size n' + pop + '">' + c[0] + '</span><span class="us n">' + c[2] + " · " + c[1] + " cm</span></div>" + shoe(first.m, "shoe-l") + "</div>";
    html += '<p class="rule"><b style="font-weight:600">' + t.top + "</b> " + first.m.name + ". " + t[first.rule] + "</p>";
    html += '<ul class="picks">';
    res.picks.forEach(function (p) {
      var eu = CHART[p.i][0], fit = t[p.m.fit] + (p.m.known ? "" : " · " + t.est), open = openBranch === p.m.name;
      var title = p.m.url ? '<a href="' + p.m.url + '" target="_blank" rel="noopener">' + p.m.name + "</a>" : p.m.name;
      html += '<li class="pick">' + shoe(p.m, "shoe-s") + '<b>' + title + '</b><span class="sz n">' + eu + "</span>";
      html += '<span class="meta">' + t.fitw + ": " + fit + '</span><span class="price n">₪' + p.m.price.toFixed(2) + "</span>";
      if (p.m.stock) html += '<span class="stock' + (p.m.stock.indexOf(eu) >= 0 ? "" : " out") + '">' + (p.m.stock.indexOf(eu) >= 0 ? t.inStock : t.outStock) + "</span>";
      html += '<button class="br-btn" type="button" aria-expanded="' + open + '" data-br="' + p.m.name + '">' + (open ? t.brClose : t.brOpen) + "</button>";
      if (open) html += branchList(p.m, eu, t);
      html += "</li>";
    });
    html += "</ul>";
    if (res.hidden) html += '<p class="small">' + t.hidden(res.hidden) + "</p>";
    resultEl.innerHTML = html;
    wireImages();
    setPayload({
      brand: "Crocs", foot_cm: q.cm, width: q.width, use: q.use,
      size_eu: c[0], size_us: c[2], model: first.m.name, fit: first.m.fit,
      fit_verified: !!first.m.known, rule: first.rule, price_ils: first.m.price,
      also: res.picks.slice(1).map(function (p) { return p.m.name; })
    }, animate);
  }
  function setPayload(obj, animate) { ta.value = JSON.stringify(obj, null, 2); onEdit(animate); }

  var failedImg = {};
  function shoe(m, cls) {
    var ph = '<span class="ph">' + m.name.replace(/^(Crocs|Classic) /, "") + "</span>";
    if (!m.img || failedImg[m.img]) return '<div class="shoe ' + cls + '">' + ph + "</div>";
    return '<div class="shoe ' + cls + '"><img src="' + m.img + '" alt="' + m.name + '" referrerpolicy="no-referrer">' + ph + "</div>";
  }
  function wireImages() {
    Array.prototype.forEach.call(resultEl.querySelectorAll(".shoe img"), function (img) {
      var fail = function () { failedImg[img.getAttribute("src")] = true; if (img.parentNode) img.parentNode.removeChild(img); };
      if (img.complete && !img.naturalWidth) fail();
      else {
        img.addEventListener("error", fail);
        img.addEventListener("load", function () { img.parentNode.classList.add("loaded"); });
        if (img.complete) img.parentNode.classList.add("loaded");
      }
    });
  }
  function branchList(m, eu, t) {
    var html = '<div class="branches"><p class="demo">' + t.brDemo + '</p><ul>';
    BRANCHES.forEach(function (b) {
      var h = fnv(m.name + eu + b.en) % 10;
      var st = h < 2 ? ["out", t.brOut] : h < 4 ? ["last", t.brLast] : ["in", t.brIn];
      html += '<li><span>' + b[lang] + '</span><span class="st ' + st[0] + '">' + st[1] + "</span></li>";
    });
    return html + "</ul></div>";
  }
  resultEl.addEventListener("click", function (e) {
    var b = e.target.closest ? e.target.closest("[data-br]") : null;
    if (!b) return;
    openBranch = openBranch === b.dataset.br ? "" : b.dataset.br;
    renderFinder(false);
  });

  /* ---------- Painting ---------- */
  var INKS = ["#00A651", "#7BDCA2", "#B7A3FF", "#FFB48C", "#8FC6FF", "#FF9FC2", "#FFD964"];
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var last = { size_eu: "38-39" }, run = 0, artStyle = "tammuz";

  function fnv(s) { var h = 2166136261; for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
  function rngFrom(seed) {
    var a = seed;
    return function () {
      a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function collect(node, out) {
    if (Array.isArray(node)) { node.forEach(function (v) { collect(v, out); }); return out; }
    if (node && typeof node === "object") {
      Object.keys(node).forEach(function (k) {
        for (var i = 0; i < k.length; i++) out.push({ ink: "k", code: k.charCodeAt(i) });
        collect(node[k], out);
      });
      return out;
    }
    var s = String(node);
    for (var j = 0; j < s.length; j++) out.push({ ink: "v", code: s.charCodeAt(j) });
    return out;
  }
  function token(n) { return getComputedStyle(document.documentElement).getPropertyValue(n).trim(); }
  function ribbon(st, size, r, field) {
    var isV = st.ink === "v";
    var x = (.5 + (r() + r() - 1) * .46) * size, y = (.5 + (r() + r() - 1) * .46) * size;
    var steps = isV ? 22 + Math.floor(r() * 26) : 50 + Math.floor(r() * 60);
    var stepLen = size * (isV ? .012 : .009);
    var w = size * (isV ? .012 + (st.code % 11) / 11 * .034 : .0012 + r() * .0012);
    var left = [], right = [];
    for (var i = 0; i < steps; i++) {
      var a = field(x / size, y / size) + (st.code % 7) * .05;
      var t = i / (steps - 1);
      var half = w * Math.sin(Math.PI * t) * .5 + (isV ? 0 : w * .2);
      var nx = -Math.sin(a), ny = Math.cos(a);
      left.push([x + nx * half, y + ny * half]);
      right.push([x - nx * half, y - ny * half]);
      x += Math.cos(a) * stepLen; y += Math.sin(a) * stepLen;
    }
    ctx.beginPath();
    ctx.moveTo(left[0][0], left[0][1]);
    for (var l = 1; l < left.length; l++) ctx.lineTo(left[l][0], left[l][1]);
    for (var m = right.length - 1; m >= 0; m--) ctx.lineTo(right[m][0], right[m][1]);
    ctx.closePath();
    ctx.fill();
  }
  /* Poster styles: each one redraws fully at progress t (0 to 1) */
  var PAST = ["#BFEFD0", "#C5DCFF", "#DACFFF", "#FFD2BC", "#FFEBA3", "#FFC9DB", "#00C462"];
  var INK = "#111113";
  function leaves(node, key, out) {
    if (Array.isArray(node)) { node.forEach(function (v) { leaves(v, key, out); }); return out; }
    if (node && typeof node === "object") { Object.keys(node).forEach(function (k) { leaves(node[k], k, out); }); return out; }
    out.push({ k: key || "", v: String(node) });
    return out;
  }
  function back(x) { var c = x - 1; return 1 + 2.7 * c * c * c + 1.7 * c * c; }
  function clamp01(x) { return Math.max(0, Math.min(1, x)); }
  function rr(x, y, w, h, r) {
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(x, y, w, h, r); else ctx.rect(x, y, w, h);
  }
  function fillBg(c, size) { ctx.fillStyle = c; ctx.fillRect(0, 0, size, size); }
  function textStyle(font, color, align) { ctx.font = font; ctx.fillStyle = color; ctx.textAlign = align || "center"; ctx.textBaseline = "middle"; ctx.direction = "ltr"; }

  function drawWord(obj, size, t) {
    fillBg(token("--surface"), size);
    var ls = leaves(obj, "", []), buckets = ["", "", "", "", "", "", ""];
    ls.forEach(function (l, i) { buckets[i % 7] += l.k + "=" + l.v + ";"; });
    var m = size * .06, gap = size * .014, W = size - 2 * m;
    var c1 = (W - gap) / 2, c2 = (W - 4 * gap) / 5, top = (size - c1 - gap - c2 - size * .09) / 2;
    var slots = [];
    "WE".split("").forEach(function (ch, i) { slots.push({ ch: ch, x: m + i * (c1 + gap), y: top, c: c1 }); });
    "SHOES".split("").forEach(function (ch, i) { slots.push({ ch: ch, x: m + i * (c2 + gap), y: top + c1 + gap, c: c2 }); });
    slots.forEach(function (s, i) {
      var h = fnv(buckets[i] + i);
      var p = back(clamp01(t * 1.6 - i * .08));
      var rot = (((h >>> 3) % 17) - 8) * Math.PI / 180;
      var scale = (.86 + ((h >>> 8) % 15) / 100) * p;
      var weight = [400, 500, 600, 700, 800][(h >>> 12) % 5];
      ctx.save();
      ctx.translate(s.x + s.c / 2, s.y + s.c / 2);
      ctx.rotate(rot); ctx.scale(scale, scale);
      ctx.fillStyle = PAST[h % PAST.length];
      rr(-s.c / 2, -s.c / 2, s.c, s.c, s.c * .24); ctx.fill();
      textStyle(weight + " " + (s.c * .68) + "px Rubik, Arial, sans-serif", INK);
      ctx.fillText(s.ch, 0, s.c * .03);
      ctx.restore();
    });
    var cap = [obj.size_eu, obj.model].filter(Boolean).join(" · ") || (ls[0] ? ls[0].v : "");
    textStyle("500 " + (size * .032) + "px 'IBM Plex Mono', monospace", token("--muted"));
    ctx.fillText(cap.slice(0, 40), size / 2, size - top - size * .03);
  }

  var GLYPH = {
    W: ["10001","10001","10001","10101","10101","11011","10001"],
    E: ["11111","10000","10000","11110","10000","10000","11111"],
    S: ["01111","10000","10000","01110","00001","00001","11110"],
    H: ["10001","10001","10001","11111","10001","10001","10001"],
    O: ["01110","10001","10001","10001","10001","10001","01110"],
    T: ["11111","00100","00100","00100","00100","00100","00100"],
    A: ["01110","10001","10001","11111","10001","10001","10001"],
    M: ["10001","11011","10101","10101","10001","10001","10001"],
    U: ["10001","10001","10001","10001","10001","10001","01110"],
    Z: ["11111","00001","00010","00100","01000","10000","11111"],
    G: ["01111","10000","10000","10011","10001","10001","01111"],
    R: ["11110","10001","10001","11110","10100","10010","10001"],
    P: ["11110","10001","10001","11110","10000","10000","10000"]
  };
  function drawDots(obj, size, t) {
    fillBg("#00A651", size);
    var COLS = 39, ROWS = 39, cell = size / COLS, on = {};
    function stamp(word, row) {
      var w = word.length * 6 - 1, col = Math.floor((COLS - w) / 2);
      word.split("").forEach(function (ch, i) {
        GLYPH[ch].forEach(function (line, ry) {
          line.split("").forEach(function (b, rx) { if (b === "1") on[(col + i * 6 + rx) + "," + (row + ry)] = true; });
        });
      });
    }
    stamp("TAMMUZ", 9); stamp("GROUP", 22);
    var chars = leaves(obj, "", []).map(function (l) { return l.v; }).join("") || "x";
    var n = 0, total = Object.keys(on).length;
    for (var y = 0; y < ROWS; y++) for (var x = 0; x < COLS; x++) {
      var cx = (x + .5) * cell, cy = (y + .5) * cell;
      ctx.beginPath();
      if (on[x + "," + y]) {
        var code = chars.charCodeAt(n % chars.length) + n;
        var p = back(clamp01(t * 1.5 - (n / total) * .5));
        ctx.fillStyle = PAST[code % 6];
        ctx.arc(cx, cy, Math.max(0, cell * (.40 + (code % 5) * .018) * p), 0, 6.3);
        n++;
      } else {
        ctx.fillStyle = "#008541";
        ctx.arc(cx, cy, cell * .2, 0, 6.3);
      }
      ctx.fill();
    }
  }

  function drawLabel(obj, size, t) {
    var src = JSON.stringify(obj), ls = leaves(obj, "", []);
    fillBg(PAST[fnv(src) % 6], size);
    var p = back(clamp01(t * 1.2)), m = size * .09, w = size - 2 * m, h = size - 2 * m;
    ctx.save();
    ctx.translate(size / 2, size / 2); ctx.scale(p, p); ctx.rotate(((fnv(src) >> 4) % 7 - 3) * Math.PI / 180); ctx.translate(-size / 2, -size / 2);
    ctx.fillStyle = "#FFFFFF"; rr(m, m, w, h, size * .05); ctx.fill();
    var x = m + size * .05, r = m + w - size * .05;
    textStyle("800 " + (size * .075) + "px Rubik, Arial, sans-serif", INK, "left");
    ctx.fillText("TAMMUZ GROUP", x, m + size * .085);
    var big = String(obj.size_eu || (ls[0] && ls[0].v) || "").slice(0, 8);
    textStyle("800 " + (size * .2) + "px Rubik, Arial, sans-serif", "#00A651", "left");
    ctx.fillText(big, x, m + size * .28);
    textStyle("500 " + (size * .036) + "px Rubik, Arial, sans-serif", INK, "left");
    ctx.fillText(String(obj.model || (ls[1] && ls[1].v) || "").slice(0, 28), x, m + size * .43);
    textStyle("400 " + (size * .026) + "px 'IBM Plex Mono', monospace", "#6A6A73", "left");
    ctx.fillText(String(obj.size_us || "") + (obj.foot_cm ? "  " + obj.foot_cm + " cm" : ""), x, m + size * .48);
    var bx = x, by = m + size * .53, bh = size * .17; ctx.fillStyle = INK;
    for (var i = 0; bx < r; i++) {
      var code = src.charCodeAt(i % src.length) + i, bw = size * .0035 * (1 + code % 3);
      if (bx + bw > r) break;
      if (i % 2 === 0) ctx.fillRect(bx, by, bw, bh);
      bx += bw + size * .0015;
    }
    ctx.restore();
  }

  function drawPrint(obj, size, t) {
    fillBg(token("--surface"), size);
    var cm = parseFloat(obj.foot_cm), wd = obj.width === "wide" ? 1.18 : obj.width === "narrow" ? .84 : 1;
    if (!(cm >= 10 && cm <= 45)) cm = 20 + fnv(JSON.stringify(obj)) % 15;
    var H = size * (.6 + (cm - 20) / 15 * .26), U = H / 100, cx = size / 2, top = (size - H) / 2 - size * .02;
    var chars = leaves(obj, "", []).map(function (l) { return l.v; }).join("") || "x";
    var rings = 11;
    function blob(s) {
      function el(x, y, rx, ry, a) {
        ctx.beginPath();
        ctx.ellipse(cx + x * U * wd, top + y * U, Math.max(0, (rx * wd * U) - s), Math.max(0, ry * U - s), a || 0, 0, 6.3);
        ctx.fill();
      }
      el(-2, 82, 16, 18); el(2, 62, 13, 22); el(2, 40, 22, 19);
      el(-19, 12, 7.5, 10); el(-5, 7, 6, 8); el(6, 8, 5.2, 7); el(16, 12, 4.6, 6); el(24, 19, 4, 5);
    }
    for (var i = 0; i < rings; i++) {
      var p = clamp01(t * 1.5 - i / rings * .5);
      if (p <= 0) break;
      ctx.globalAlpha = p;
      ctx.fillStyle = PAST[chars.charCodeAt((i * 7) % chars.length) % PAST.length];
      blob(i * U * 1.15);
    }
    ctx.globalAlpha = 1;
    textStyle("500 " + (size * .034) + "px 'IBM Plex Mono', monospace", token("--muted"));
    ctx.fillText(cm.toFixed(1) + " cm", cx, size - size * .05);
  }

  /* Brands from tammuzgroup.com, Nov 2026 */
  var BRANDS = ["Crocs","HOKA","Blundstone","Gap","Fjällräven","Hey Dude","Dickies","Delsey","Regatta","Caterpillar","Desigual","Igloo"];

  function drawTammuz(obj, size, t) {
    fillBg(token("--surface"), size);
    var ls = leaves(obj, "", []), buckets = ["", "", "", "", "", ""];
    ls.forEach(function (l, i) { buckets[i % 6] += l.k + "=" + l.v + ";"; });
    var m = size * .07, gap = size * .016, c = Math.min((size - 2 * m - 2 * gap) / 3, size * .24);
    var x0 = (size - (3 * c + 2 * gap)) / 2, y0 = m;
    "TAMMUZ".split("").forEach(function (ch, i) {
      var h = fnv(buckets[i] + i), col = i % 3, row = Math.floor(i / 3);
      var p = back(clamp01(t * 1.6 - i * .08));
      var rot = (((h >>> 3) % 13) - 6) * Math.PI / 180, scale = (.88 + ((h >>> 8) % 13) / 100) * p;
      var weight = [500, 600, 700, 800][(h >>> 12) % 4];
      ctx.save();
      ctx.translate(x0 + col * (c + gap) + c / 2, y0 + row * (c + gap) + c / 2);
      ctx.rotate(rot); ctx.scale(scale, scale);
      ctx.fillStyle = PAST[h % PAST.length];
      rr(-c / 2, -c / 2, c, c, c * .24); ctx.fill();
      textStyle(weight + " " + (c * .62) + "px Rubik, Arial, sans-serif", INK);
      ctx.fillText(ch, 0, c * .03);
      ctx.restore();
    });
    var want = String(obj.brand || "").trim(), lw = want.toLowerCase();
    var list = BRANDS.slice();
    if (want && !list.some(function (b) { return b.toLowerCase() === lw; })) list.unshift(want.slice(0, 16));
    var fs = size * .03, ph = fs * 2, pad = fs * .9, gy = size * .016, maxW = size - 2 * m;
    ctx.font = "600 " + fs + "px Rubik, Arial, sans-serif";
    var rows = [[]], rw = [0];
    list.forEach(function (b) {
      var w = ctx.measureText(b).width + pad * 2, r = rows.length - 1;
      if (rw[r] + w > maxW && rows[r].length) { rows.push([]); rw.push(0); r++; }
      rows[r].push([b, w]); rw[r] += w + gy;
    });
    var by = y0 + 2 * c + gap + size * .06, n = 0;
    rows.forEach(function (row, ri) {
      var x = (size - (rw[ri] - gy)) / 2, y = by + ri * (ph + gy);
      row.forEach(function (it) {
        var on = it[0].toLowerCase() === lw;
        ctx.globalAlpha = clamp01(t * 1.6 - .35 - n++ * .03);
        ctx.fillStyle = on ? "#00A651" : token("--card");
        rr(x, y, it[1], ph, ph / 2); ctx.fill();
        textStyle("600 " + fs + "px Rubik, Arial, sans-serif", on ? "#06170D" : token("--muted"));
        ctx.fillText(it[0], x + it[1] / 2, y + ph / 2);
        x += it[1] + gy;
      });
    });
    ctx.globalAlpha = 1;
  }

  function drawNetwork(obj, size, t) {
    fillBg(token("--surface"), size);
    var src = JSON.stringify(obj);
    var vals = leaves(obj, "", []).map(function (l) { return l.v; }).join("") || "x";
    var NODES = lang === "he"
      ? ["סניפים", "מרכז לוגיסטי", "אונליין", "סיטונאות", "מוסדי", "שיווק"]
      : ["Stores", "Logistics", "Online", "Wholesale", "Institutional", "Marketing"];
    var cx = size / 2, cy = size / 2, R = size * .34, fs = size * .03;
    var pts = NODES.map(function (_, i) { var a = -Math.PI / 2 + i * Math.PI / 3; return [cx + Math.cos(a) * R, cy + Math.sin(a) * R]; });
    var grow = clamp01(t * 1.8);
    pts.forEach(function (p, i) {
      ctx.strokeStyle = PAST[vals.charCodeAt((i * 5) % vals.length) % 6];
      ctx.lineWidth = size * .008; ctx.lineCap = "round";
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + (p[0] - cx) * grow, cy + (p[1] - cy) * grow); ctx.stroke();
      for (var k = 0; k < 2; k++) {
        var h = fnv(src + i + "/" + k), f = (.25 + (h % 55) / 100) * clamp01(t * 1.4 - k * .15);
        ctx.fillStyle = "#00A651";
        ctx.beginPath(); ctx.arc(cx + (p[0] - cx) * f, cy + (p[1] - cy) * f, size * .013, 0, 6.3); ctx.fill();
      }
    });
    pts.forEach(function (p, i) {
      ctx.globalAlpha = clamp01(t * 1.6 - .3 - i * .05);
      ctx.font = "600 " + fs + "px Rubik, Arial, sans-serif";
      var w = ctx.measureText(NODES[i]).width + fs * 1.8, h = fs * 2.2;
      ctx.fillStyle = PAST[vals.charCodeAt((i * 7 + 3) % vals.length) % 6];
      rr(p[0] - w / 2, p[1] - h / 2, w, h, h / 2); ctx.fill();
      textStyle("600 " + fs + "px Rubik, Arial, sans-serif", INK);
      ctx.direction = lang === "he" ? "rtl" : "ltr";
      ctx.fillText(NODES[i], p[0], p[1] + fs * .05);
    });
    ctx.globalAlpha = 1;
    var s = back(clamp01(t * 1.4));
    ctx.save(); ctx.translate(cx, cy); ctx.scale(s, s);
    ctx.fillStyle = "#00A651"; ctx.beginPath(); ctx.arc(0, 0, size * .135, 0, 6.3); ctx.fill();
    textStyle("800 " + (size * .045) + "px Rubik, Arial, sans-serif", "#06170D");
    ctx.fillText("TAMMUZ", 0, -size * .012);
    textStyle("500 " + (size * .024) + "px 'IBM Plex Mono', monospace", "#06170D");
    ctx.fillText([obj.brand, obj.size_eu].filter(Boolean).join(" · ").slice(0, 18), 0, size * .04);
    ctx.restore();
  }

  var POSTERS = { tammuz: drawTammuz, network: drawNetwork, dots: drawDots, label: drawLabel, print: drawPrint };

  function paint(obj, animate) {
    var id = ++run;
    var box = canvas.getBoundingClientRect();
    var size = Math.max(10, Math.round(box.width));
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = size * dpr; canvas.height = size * dpr;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (POSTERS[artStyle]) {
      var draw = POSTERS[artStyle];
      ctx.globalCompositeOperation = "source-over"; ctx.globalAlpha = 1;
      if (!animate || reduce) { draw(obj, size, 1); return; }
      var start = null;
      (function step(ts) {
        if (id !== run) return;
        if (ts && start === null) start = ts;
        var tt = ts ? Math.min(1, (ts - start) / 650) : 0;
        draw(obj, size, tt);
        if (tt < 1) requestAnimationFrame(step);
      })();
      return;
    }
    var keyInk = token("--key-stroke"), bg = token("--surface");
    var blend = token("--blend") === "screen" ? "screen" : "multiply";
    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = 1;
    ctx.fillStyle = bg; ctx.fillRect(0, 0, size, size);
    ctx.globalCompositeOperation = blend;
    var r = rngFrom(fnv(JSON.stringify(obj)));
    var f1 = 2 + r() * 3, f2 = 2 + r() * 3, s1 = r() * 6.28, s2 = r() * 6.28, base = r() * 6.28;
    var field = function (u, v) { return base + Math.sin(u * f1 + s1) * 1.5 + Math.cos(v * f2 + s2) * 1.5; };
    var strokes = collect(obj, []).slice(0, 420);
    strokes.sort(function (a, b) { return a.ink === b.ink ? 0 : a.ink === "v" ? -1 : 1; });
    var drawOne = function (st) {
      ctx.fillStyle = st.ink === "v" ? INKS[st.code % INKS.length] : keyInk;
      ctx.globalAlpha = st.ink === "v" ? .9 : .75;
      ribbon(st, size, r, field);
    };
    if (!animate || reduce) { strokes.forEach(drawOne); ctx.globalAlpha = 1; return; }
    var i = 0, perFrame = Math.max(1, Math.ceil(strokes.length / 50));
    (function frame() {
      if (id !== run) return;
      for (var n = 0; n < perFrame && i < strokes.length; n++, i++) drawOne(strokes[i]);
      if (i < strokes.length) requestAnimationFrame(frame); else ctx.globalAlpha = 1;
    })();
  }
  function onEdit(animate) {
    var obj, t = T[lang];
    try {
      obj = JSON.parse(ta.value);
      if (obj === null || typeof obj !== "object" || !collect(obj, []).length) throw 0;
    } catch (e) { statusEl.className = "status bad"; statusEl.textContent = t.bad; return; }
    last = obj;
    statusEl.className = "status";
    statusEl.textContent = t.ok(leaves(obj, "", []).length);
    paint(obj, animate);
  }

  /* ---------- Jibbitz board ---------- */
  var board = document.getElementById("board");
  var COLS = 4, ROWS = 4;
  var holes = [], charms = [];
  var LABELS = [["Node","#DDF6E6"],["REST","#FFF3C7"],["TS","#DDEBFF"],["SQL","#FFE7D9"],["Mongo","#EAE3FF"],["C#","#FFE3ED"],["Git","#FFFFFF"],["C++","#DDEBFF"],["JS","#FFF3C7"],["Python","#FFE7D9"]];
  var START = [0, 2, 5, 7, 8, 10, 13, 15, 3, 12];

  function holePos(i) {
    var r = board.getBoundingClientRect();
    var col = i % COLS, row = Math.floor(i / COLS);
    return { x: r.width * (col + .5) / COLS, y: r.height * (row + .5) / ROWS };
  }
  for (var hi = 0; hi < COLS * ROWS; hi++) {
    var h = document.createElement("div"); h.className = "hole"; board.appendChild(h);
    holes.push({ el: h, charm: null });
  }
  LABELS.forEach(function (l, i) {
    var c = document.createElement("div"); c.className = "charm"; c.setAttribute("dir", "ltr");
    c.style.setProperty("--c", l[1]); c.style.setProperty("--d", (-i * .6) + "s");
    var b = document.createElement("b"), label = document.createElement("i");
    label.textContent = l[0]; b.appendChild(label); c.appendChild(b); board.appendChild(c);
    var o = { el: c, hole: START[i] };
    holes[START[i]].charm = o; charms.push(o);
    bindDrag(o);
  });
  function place(o) { var p = holePos(o.hole); o.el.style.transform = "translate(" + p.x + "px," + p.y + "px)"; }
  function layoutBoard() {
    holes.forEach(function (h, i) { var p = holePos(i); h.el.style.left = p.x + "px"; h.el.style.top = p.y + "px"; });
    charms.forEach(place);
  }
  function nearest(x, y) {
    var best = 0, d = Infinity;
    holes.forEach(function (_, i) { var p = holePos(i), dd = (p.x - x) * (p.x - x) + (p.y - y) * (p.y - y); if (dd < d) { d = dd; best = i; } });
    return best;
  }
  function bindDrag(o) {
    var el = o.el, dragging = false, ox = 0, oy = 0, near = -1;
    el.addEventListener("pointerdown", function (e) {
      dragging = true; el.setPointerCapture(e.pointerId); el.classList.add("drag");
      var p = holePos(o.hole), r = board.getBoundingClientRect();
      ox = e.clientX - r.left - p.x; oy = e.clientY - r.top - p.y;
      e.preventDefault();
    });
    el.addEventListener("pointermove", function (e) {
      if (!dragging) return;
      var r = board.getBoundingClientRect();
      var x = e.clientX - r.left - ox, y = e.clientY - r.top - oy;
      el.style.transform = "translate(" + x + "px," + y + "px)";
      var n = nearest(x, y);
      if (n !== near) { if (near >= 0) holes[near].el.classList.remove("near"); holes[n].el.classList.add("near"); near = n; }
    });
    function end(e) {
      if (!dragging) return;
      dragging = false; el.classList.remove("drag");
      if (near >= 0) {
        holes[near].el.classList.remove("near");
        var from = o.hole, other = holes[near].charm;
        if (near !== from) {
          holes[from].charm = other; if (other) { other.hole = from; place(other); }
          holes[near].charm = o; o.hole = near;
        }
      }
      near = -1; place(o);
    }
    el.addEventListener("pointerup", end);
    el.addEventListener("pointercancel", end);
  }

  /* ---------- Language ---------- */
  function setLang(next, keepHash) {
    lang = next;
    page.setAttribute("data-lang", next);
    page.setAttribute("lang", next);
    page.setAttribute("dir", next === "he" ? "rtl" : "ltr");
    renderFinder(false);
    if (!keepHash) { try { location.hash = next === "en" ? "en" : ""; } catch (e) {} }
  }
  document.getElementById("lang").addEventListener("click", function () { setLang(lang === "he" ? "en" : "he"); });
  window.addEventListener("hashchange", function () {
    var want = location.hash === "#en" ? "en" : "he";
    if (want !== lang) setLang(want, true);
  });

  /* ---------- Nav, copy, tilt, reveal ---------- */
  Array.prototype.forEach.call(document.querySelectorAll("[data-go]"), function (b) {
    b.addEventListener("click", function () { document.getElementById(b.dataset.go).scrollIntoView(); });
  });
  var toast = document.getElementById("toast"), toastT;
  function showToast(msg) { toast.textContent = msg; toast.classList.add("show"); clearTimeout(toastT); toastT = setTimeout(function () { toast.classList.remove("show"); }, 1600); }
  Array.prototype.forEach.call(document.querySelectorAll("[data-copy]"), function (b) {
    b.addEventListener("click", function () {
      var ok = function () { showToast(T[lang].copied); }, no = function () { showToast(T[lang].copyFail); };
      try { navigator.clipboard.writeText(b.dataset.copy).then(ok, no); } catch (e) { no(); }
    });
  });
  if (!reduce && window.matchMedia("(hover: hover)").matches) {
    Array.prototype.forEach.call(document.querySelectorAll("[data-tilt]"), function (el) {
      el.addEventListener("pointermove", function (e) {
        var r = el.getBoundingClientRect(), px = (e.clientX - r.left) / r.width, py = (e.clientY - r.top) / r.height;
        el.style.setProperty("--ry", ((px - .5) * 7).toFixed(2) + "deg");
        el.style.setProperty("--rx", ((.5 - py) * 7).toFixed(2) + "deg");
        el.style.setProperty("--mx", (px * 100).toFixed(1) + "%");
        el.style.setProperty("--my", (py * 100).toFixed(1) + "%");
      });
      el.addEventListener("pointerleave", function () { el.style.setProperty("--rx", "0deg"); el.style.setProperty("--ry", "0deg"); });
    });
  }
  if (!reduce && window.IntersectionObserver) {
    var io = new IntersectionObserver(function (en) {
      en.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.remove("reveal-pre"); e.target.classList.remove("rv"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -6% 0px" });
    Array.prototype.forEach.call(document.querySelectorAll("[data-reveal]"), function (el, i) {
      if (el.getBoundingClientRect().top > window.innerHeight && el.classList.contains("card")) {
        el.classList.add("reveal-pre"); el.style.transitionDelay = (i % 3 * 60) + "ms";
        io.observe(el);
        el.addEventListener("transitionend", function () { el.style.transitionDelay = ""; }, { once: true });
      }
    });
  }

  /* ---------- Wiring ---------- */
  document.getElementById("form").addEventListener("input", function () { renderFinder(true); });
  var timer;
  ta.addEventListener("input", function () { clearTimeout(timer); timer = setTimeout(function () { onEdit(true); }, 180); });

  setLang(location.hash === "#en" ? "en" : "he", true);
  layoutBoard();
  window.addEventListener("resize", layoutBoard);

  var lastW = 0;
  if (window.ResizeObserver) {
    new ResizeObserver(function (en) {
      var w = Math.round(en[0].contentRect.width);
      if (w && w !== lastW) { lastW = w; paint(last, false); }
    }).observe(canvas);
    new ResizeObserver(layoutBoard).observe(board);
  }
  var repaint = function () { paint(last, false); };
  var mq = window.matchMedia("(prefers-color-scheme: dark)");
  if (mq.addEventListener) mq.addEventListener("change", repaint);
  new MutationObserver(repaint).observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { layoutBoard(); repaint(); });
  if (document.fonts && document.fonts.load) {
    Promise.all([400, 500, 600, 700, 800].map(function (w) { return document.fonts.load(w + " 40px Rubik", "WESHO"); })).then(repaint, function () {});
  }
})();
