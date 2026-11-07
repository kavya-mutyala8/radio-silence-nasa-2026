// Radio Silence: game logic. Numbers and texts come from data.js (Kesava's file).
const SOLS = 10,
  SOL_SECONDS = 60,
  MOVES = 2,
  LOW = 25;
const M = ["power", "oxygen", "food", "radiation"];
const INFO = {
  power: {
    label: "Power",
    chip: "Power",
    icon: "⚡",
    color: "#ffbd4a",
    ok: "Panels are doing their job.",
    low: "Low! Charge batteries soon.",
  },
  oxygen: {
    label: "Oxygen",
    chip: "Oxygen",
    icon: "💨",
    color: "#62c9ff",
    ok: "Air is fresh.",
    low: "Low! Make more air soon.",
  },
  food: {
    label: "Food",
    chip: "Food",
    icon: "🌱",
    color: "#7fdc8a",
    ok: "Enough for the next meal.",
    low: "Low! Grow more food soon.",
  },
  radiation: {
    label: "Radiation safety",
    chip: "Safety",
    icon: "🛡️",
    color: "#a58bff",
    ok: "Higher means safer.",
    low: "Low! Add more shielding.",
  },
};
const $ = (s) => document.querySelector(s);
const clamp = (n) => Math.max(0, Math.min(100, n));
const sg = (n) => (n > 0 ? "+" : "\u2212") + Math.abs(n);
const S = {
  sol: 1,
  t: SOL_SECONDS,
  moves: MOVES,
  v: {},
  used: [],
  solUsed: [],
  logs: [],
  over: false,
  timer: null,
};
const fx = (a) =>
  M.filter((m) => a[m])
    .map((m) => INFO[m].chip + " " + sg(a[m]))
    .join(", ");
const list = (a) =>
  a.length < 2
    ? a.join("")
    : a.slice(0, -1).join(", ") + " and " + a[a.length - 1];
const lowMeters = () => M.filter((m) => S.v[m] <= LOW);

function build() {
  M.forEach((m) => {
    const i = INFO[m],
      c = document.createElement("article");
    c.className = "meter";
    c.id = "m-" + m;
    c.style.setProperty("--c", i.color);
    c.innerHTML =
      '<div class="mh"><h3>' +
      i.icon +
      " " +
      i.label +
      '</h3><span class="warn" hidden>⚠️</span></div>' +
      '<p class="num"><b></b> / 100</p><div class="bar"><i></i></div><p class="st"></p>' +
      '<button type="button" class="why">Why this number?</button><p class="src" hidden></p>';
    c.querySelector(".why").onclick = () => {
      const p = c.querySelector(".src");
      p.textContent = GAME_DATA.meters[m].source || "Source coming soon.";
      p.hidden = !p.hidden;
    };
    $("#meters").appendChild(c);
  });
  GAME_DATA.actions.forEach((a, idx) => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "act";
    b.innerHTML =
      '<div class="ah"><span></span><b></b></div><p></p><div class="chips"></div>';
    b.querySelector(".ah span").textContent = a.icon || "✨";
    b.querySelector("b").textContent = a.name;
    M.filter((m) => a[m]).forEach((m) => {
      const s = document.createElement("span");
      s.className = "chip";
      s.style.setProperty("--c", INFO[m].color);
      s.textContent = INFO[m].chip + " " + sg(a[m]);
      b.querySelector(".chips").appendChild(s);
    });
    b.onclick = () => useAction(idx);
    $("#acts").appendChild(b);
  });
}

function blockReason(a) {
  if (S.moves <= 0) return "No moves left. End the sol.";
  const m = M.find((k) => S.v[k] + (a[k] || 0) < 0);
  return m
    ? "Needs " +
        -a[m] +
        " " +
        INFO[m].label.toLowerCase() +
        ". You have " +
        Math.round(S.v[m]) +
        "."
    : "";
}

function update() {
  M.forEach((m) => {
    const el = $("#m-" + m),
      v = S.v[m],
      low = v <= LOW;
    el.querySelector(".num b").textContent = Math.round(v) + "%";
    el.querySelector(".bar i").style.width = v + "%";
    el.querySelector(".st").textContent = low ? INFO[m].low : INFO[m].ok;
    el.querySelector(".warn").hidden = !low;
    el.classList.toggle("low", low);
  });
  $("#sol").textContent = S.sol;
  $("#timer").textContent =
    Math.floor(S.t / 60) + ":" + String(S.t % 60).padStart(2, "0");
  $("#ring").style.setProperty("--p", (S.t / SOL_SECONDS) * 100);
  const pct = ((S.sol - 1) / (SOLS - 1)) * 100;
  $("#rocket").style.left = pct + "%";
  $("#fill").style.width = pct + "%";
  const lows = lowMeters();
  $("#hsub").textContent = lows.length
    ? INFO[lows[0]].label + " is low. What will you do first?"
    : "Keep your crew going for " + SOLS + " sols. What will you do first?";
  $("#moves").textContent =
    S.moves + (S.moves === 1 ? " move left" : " moves left");
  document.querySelectorAll(".act").forEach((b, i) => {
    const a = GAME_DATA.actions[i],
      r = blockReason(a);
    b.disabled = !!r;
    b.querySelector("p").textContent = r || a.why || "";
  });
  $("#endsol").textContent = "→ End sol " + S.sol;
  const drain = M.filter((m) => GAME_DATA.meters[m].perSol < 0).map(
    (m) => -GAME_DATA.meters[m].perSol + " " + INFO[m].chip.toLowerCase(),
  );
  $("#drain").textContent =
    "Ending a sol uses " +
    list(drain) +
    "." +
    (lows.length
      ? " Act now to top up your " + INFO[lows[0]].label.toLowerCase() + "."
      : "");
  const log = $("#log");
  log.innerHTML = "";
  const rows = [
    {
      t: "SOL " + S.sol + " · NOW",
      x: lows.length
        ? INFO[lows[0]].label + " is low at " + Math.round(S.v[lows[0]]) + "%."
        : "All systems steady.",
      now: 1,
    },
  ].concat(
    S.logs
      .slice()
      .reverse()
      .slice(0, 3)
      .map((l) => ({ t: "SOL " + l.sol, x: l.text })),
  );
  rows.forEach((r) => {
    const d = document.createElement("div");
    d.className = "lg" + (r.now ? " now" : "");
    d.innerHTML = "<b></b><p></p>";
    d.querySelector("b").textContent = r.t;
    d.querySelector("p").textContent = r.x;
    log.appendChild(d);
  });
}

function useAction(i) {
  const a = GAME_DATA.actions[i];
  if (S.over || blockReason(a)) return;
  M.forEach((m) => {
    S.v[m] = clamp(S.v[m] + (a[m] || 0));
  });
  S.moves--;
  S.used.push(i);
  S.solUsed.push(a.name);
  update();
}

function endSol() {
  if (S.over) return;
  M.forEach((m) => {
    S.v[m] = clamp(S.v[m] + GAME_DATA.meters[m].perSol);
  });
  const dead = M.find((m) => S.v[m] <= 0);
  if (dead) return finish(false, dead);
  if (S.sol >= SOLS) return finish(true);
  S.logs.push({
    sol: S.sol,
    text: S.solUsed.length ? "Used " + list(S.solUsed) + "." : "No moves used.",
  });
  S.sol++;
  S.t = SOL_SECONDS;
  S.moves = MOVES;
  S.solUsed = [];
  update();
}

function items(sel, rows) {
  const ul = $(sel);
  ul.innerHTML = "";
  rows.forEach((r) => {
    const li = document.createElement("li");
    li.innerHTML = '<span class="ii"></span><div><b></b><p></p></div>';
    li.querySelector(".ii").textContent = r.icon || "🛰️";
    li.querySelector("b").textContent = r.title;
    li.querySelector("p").textContent = r.text;
    ul.appendChild(li);
  });
}

function finish(win, m) {
  clearInterval(S.timer);
  S.over = true;
  update();
  const d = GAME_DATA.debrief;
  $("#game").hidden = true;
  $("#end").hidden = false;
  $("#end").className = win ? "win" : "lose";
  $("#mascot").src = win
    ? "assets/happy-astronaut.svg"
    : "assets/encouraging-astronaut.svg";
  $("#badge").textContent = win
    ? "✅ Mission complete"
    : "🚩 Mission paused · try again";
  $("#etitle").textContent = win
    ? "Small crew. Giant achievement!"
    : "Let’s find out what happened";
  $("#etext").textContent =
    (win ? d.success : d.fail) ||
    (win
      ? SOLS +
        " sols, one brilliant mission. You kept your Moon outpost going and your crew safe."
      : "Your outpost ran out of " +
        INFO[m].label.toLowerCase() +
        " on sol " +
        S.sol +
        ". That’s okay. Every space explorer learns by trying.");
  const cnt = {};
  S.used.forEach((i) => (cnt[i] = (cnt[i] || 0) + 1));
  const did = Object.entries(cnt)
    .sort((a, b) => b[1] - a[1])
    .map(([i, n]) => {
      const a = GAME_DATA.actions[i];
      return {
        icon: a.icon,
        title: a.name,
        text:
          "You used it " +
          n +
          " time" +
          (n > 1 ? "s" : "") +
          ". " +
          (a.why || ""),
      };
    });
  if (!win)
    did.unshift({
      icon: INFO[m].icon,
      title: "Ran out of " + INFO[m].label.toLowerCase(),
      text: "It reached 0% on sol " + S.sol + ".",
    });
  if (!did.length)
    did.push({
      icon: "⏳",
      title: "You let the sols pass",
      text: "You used no moves. Try acting early next time.",
    });
  items("#did", did.slice(0, 3));
  items("#nasa", (d.nasa || []).slice(0, 3));
  $("#esrc").textContent = d.source ? "Source: " + d.source : "";
  if (win) {
    $("#ptitle").textContent = "Ready for another Moon shift?";
    $("#ptext").textContent =
      "Try a different mix of moves. Can you finish with more in reserve?";
    $("#again").textContent = "↻ Play again";
  } else {
    const best = GAME_DATA.actions
      .slice()
      .sort((a, b) => (b[m] || 0) - (a[m] || 0))[0];
    $("#ptitle").textContent = "Your next-mission plan";
    $("#ptext").textContent =
      "When " +
      INFO[m].label.toLowerCase() +
      " is under " +
      LOW +
      "%, try " +
      best.name +
      " first (" +
      fx(best) +
      "). Then plan your next move.";
    $("#again").textContent = "↻ Try again";
  }
  window.scrollTo(0, 0);
}

function init() {
  M.forEach((m) => {
    S.v[m] = GAME_DATA.meters[m].start;
  });
  $("#total").textContent = SOLS;
  $("#tlt").textContent = "YOUR " + SOLS + "-SOL MISSION";
  build();
  update();
  $("#endsol").onclick = endSol;
  $("#again").onclick = () => location.reload();
  $("#mc").onclick = () => {
    $("#mcnote").textContent =
      "Coming in the next version: this will send a message, and the reply arrives 3 days later.";
  };
  S.timer = setInterval(() => {
    if (S.over) return;
    S.t--;
    if (S.t <= 0) endSol();
    else update();
  }, 1000);
}
init();
