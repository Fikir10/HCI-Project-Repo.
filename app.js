/* ===== Shared tab switching ===== */

document.querySelectorAll(".nav-btn").forEach(function (btn) {
  btn.addEventListener("click", function () {
   document.querySelectorAll(".nav-btn").forEach(function (b) {
      b.classList.remove("active");
    });
    btn.classList.add("active");

    document.querySelectorAll(".tab-panel").forEach(function (panel) {
      panel.classList.remove("active");
    });
    document.getElementById("panel-" + btn.getAttribute("data-tab")).classList.add("active");
  });
});

// Text Tab is shown by default
document.getElementById("panel-text").classList.add("active");


/* ===== Colors (Fikir) ===== */

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
            position: "bottom",
            labels: {
               font: {size: 20},
               boxWidth: 40,
               boxHeight: 20,
               padding: 20
            }
         },
         datalabels: {
            color: "#000",
            font: { weight: "bold", size: 18}
         }
      }
   }
});

/* ===== Profile (Raiya) ===== */

var profileImage = document.getElementById("profile-image");
var profileNotification = document.getElementById("profile-notification");
var closeNotification = document.getElementById("profile-close");

profileImage.addEventListener("click", function () {
   profileNotification.style.display = "block";
});

closeNotification.addEventListener("click", function () {
   profileNotification.style.display = "none";
});

/* ===== Choices (Kyra) ===== */

function showChoices() {
  let cameraType1 = document.querySelector('input[name="cameraType1"]:checked').value;
  let cameraType2 = document.getElementById("cameraType2").value;

  document.getElementById("result").innerText =
    "Camera #1: " + cameraType1 + ", Camera #2: " + cameraType2;
}

/* ===== ToDo (Sydney) ===== */

var myNodeList = document.querySelectorAll("#myUL li");
for (var i = 0; i < myNodeList.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodeList[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
function attachCloseEvent() {
  for (var i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
attachCloseEvent();

var list = document.querySelector('#myUL');
if (list) {
  list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
      ev.target.classList.toggle('checked');
    }
  }, false);
}

function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);

  if (inputValue.trim() === '') {
    alert("You must write something!");
    return;
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  attachCloseEvent();
}