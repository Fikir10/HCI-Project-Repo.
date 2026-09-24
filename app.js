/* ==========================================================
   Shared tab-switching logic — don't edit. Add your tab's JS in your
   labeled block below.
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
   TAB 1 — Text (Kyra)
   ========================================================== */


/* ==========================================================
   TAB 2 — LR (Fikir)
   ========================================================== */


/* ==========================================================
   TAB 3 — Colors (Fikir)
   ========================================================== */


/* ==========================================================
   TAB 4 — Profile (Raiya)
   Image tap -> show notification -> user can close it.
   ========================================================== */


/* ==========================================================
   TAB 5 — Choices (Kyra)
   ========================================================== */


/* ==========================================================
   TAB 6 — ToDo (Sydney)
   ========================================================== */
