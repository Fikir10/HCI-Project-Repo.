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
function showChoices() {
  let userType = document.querySelector('input[name="userType"]:checked').value;
  let kitchenChoice = document.getElementById("kitchenChoice").value;

  document.getElementById("result").innerText =
    userType + " wants to check " + kitchenChoice;
}

/* ==========================================================
   TAB 2 — LR (Fikir)
   ========================================================== */


/* ==========================================================
   TAB 3 — Colors (Fikir)
   ========================================================== */
   Chart.register(ChartDataLabels);

   new Chart(document.getElementById("colors-pie-canvas"), {
      type: "pie",
      data: {
         labels: ["Roses", "Violets", "Tulips"],
         datasets: [{
            data: [300, 500, 100],
            backgroundColor: ["#c9436e", "#d896f0", "#f0d54a"]
         }]
      },
      options: {
         plugins: {
            legend: {
               position: "bottom"
            },
            datalabels: {
               color: "#000",
               font: {
                  weight: "bold"
               }
            }
         }
      }
   });

/* ==========================================================
   TAB 4 — Profile (Raiya)
   Image tap -> show notification -> user can close it.
   ========================================================== */
var profileImage = document.getElementById("profile-image");
var profileNotification = document.getElementById("profile-notification");
var closeNotification = document.getElementById("profile-close");

profileImage.addEventListener("click", function () {
   profileNotification.style.display = "block";
});

closeNotification.addEventListener("click", function () {
   profileNotification.style.display = "none";
});

/* ==========================================================
   TAB 5 — Choices (Kyra)
   ========================================================== */


/* ==========================================================
   TAB 6 — ToDo (Sydney)
   ========================================================== */
