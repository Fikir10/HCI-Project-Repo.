/* ==========================================================
   SHARED SHELL LOGIC — tab switching.
   Don't edit this section. Add your own tab's JS in the
   clearly marked block for your tab further down.
   ========================================================== */

document.querySelectorAll(".nav-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
    var tabName = btn.getAttribute("data-tab");

    document.querySelectorAll(".nav-btn").forEach(function (b) {
      b.classList.remove("active");
    });
    btn.classList.add("active");

    document.querySelectorAll(".tab-panel").forEach(function (panel) {
      panel.classList.remove("active");
    });
    document.getElementById("panel-" + tabName).classList.add("active");
  });
});

// Show Tab 1 by default on load
document.getElementById("panel-text").classList.add("active");


/* ==========================================================
   TAB 1 — Text (owner: TBD)
   Add any JS your tab needs below, wrapped so it doesn't
   run into anyone else's variable/function names.
   ========================================================== */


/* ==========================================================
   TAB 2 — LR (owner: Alex)
   No JS needed — pure CSS positioning.
   ========================================================== */


/* ==========================================================
   TAB 3 — Colors (owner: Alex)
   If generating the pie chart dynamically (e.g. via <canvas>
   or SVG), put that logic here.
   ========================================================== */


/* ==========================================================
   TAB 4 — Profile (owner: TBD)
   Image tap -> show notification -> user can close it.
   ========================================================== */


/* ==========================================================
   TAB 5 — Choices (owner: TBD)
   Radio + dropdown + button that displays a result reflecting
   the selected options.
   ========================================================== */


/* ==========================================================
   TAB 6 — ToDo (owner: TBD)
   Add item, delete item, cross off item. Consider storing the
   list in a simple JS array (no server, no real database).
   ========================================================== */