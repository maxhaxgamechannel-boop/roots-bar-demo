/* ROOTS | Bar und Deli – DEMO-Entwurf.
   Mobiles Menü, dezente Animationen, Markierung des heutigen Tages.
   Ohne JavaScript ist alles sichtbar und bedienbar. */
(function () {
  "use strict";

  var root = document.documentElement;
  root.classList.remove("no-js");
  root.classList.add("js");
  // Sicherheitsnetz: Falls weiter unten ein Fehler auftritt, Inhalte trotzdem zeigen
  window.addEventListener("error", function () {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("seen"); });
  });
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Mobiles Menü ---------- */
  var burger = document.getElementById("burger");
  var nav = document.getElementById("nav");
  var desktop = window.matchMedia("(min-width: 960px)");

  function setOpen(open) {
    nav.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    burger.querySelector(".burger-lbl").textContent = open ? "Schließen" : "Menü";
    document.body.classList.toggle("lock", open);
  }
  burger.addEventListener("click", function () { setOpen(!nav.classList.contains("open")); });
  nav.addEventListener("click", function (e) {
    if (e.target.closest("a") && !desktop.matches) setOpen(false);
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("open")) { setOpen(false); burger.focus(); }
  });
  desktop.addEventListener("change", function () { setOpen(false); });

  /* ---------- Wechselndes Wort im Einstieg ---------- */
  var words = ["Kaffee", "Simit", "Naturwein", "Snacks"];
  var rotator = document.getElementById("rotator");
  if (rotator && !reduce) {
    var i = 0;
    setInterval(function () {
      var old = rotator.firstElementChild;
      old.classList.add("out");
      setTimeout(function () {
        i = (i + 1) % words.length;
        var w = document.createElement("span");
        w.className = "rot-word in";
        w.textContent = words[i];
        rotator.replaceChild(w, old);
      }, 330);
    }, 2400);
  }

  /* ---------- Einblenden beim Scrollen ---------- */
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduce) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("seen"); io.unobserve(en.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("seen"); });
  }

  /* ---------- Heutigen Tag in den Öffnungszeiten hervorheben (Zeit in Köln) ---------- */
  try {
    var day = new Intl.DateTimeFormat("en-US", { weekday: "short", timeZone: "Europe/Berlin" }).format(new Date());
    var idx = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(day);
    var row = document.querySelector('#hours tr[data-days="' + idx + '"]');
    if (row) row.classList.add("today");
  } catch (e) { /* ohne Hervorhebung weiter */ }
})();
