const allT = document.getElementById("allTab");
const interviewT = document.getElementById("interviewTab");
const rejectedT = document.getElementById("rejectedTab");

const allBtn = document.getElementById("allBtn");
const interviewBtn = document.getElementById("interviewBtn");
const rejectedBtn = document.getElementById("rejectedBtn");

const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");

let interviewTotal = 0;
let rejectedTotal = 0;

allBtn.addEventListener("click", function() {
  allT.classList.remove("hidden");
  interviewT.classList.add("hidden");
  rejectedT.classList.add("hidden");
});

interviewBtn.addEventListener("click", function() {
  interviewT.classList.remove("hidden");
  allT.classList.add("hidden");
  rejectedT.classList.add("hidden");
});

rejectedBtn.addEventListener("click", function() {
  rejectedT.classList.remove("hidden");
  allT.classList.add("hidden");
  interviewT.classList.add("hidden");
});

document.addEventListener("click", function(e) {

  if (e.target.classList.contains("interview-action")) {

    const card = e.target.closest(".job-card");
    const badge = card.querySelector(".status");

    badge.textContent = "INTERVIEW";
    badge.classList.remove("bg-red-200", "text-red-800");
    badge.classList.add("bg-green-200", "text-green-800");

    interviewT.appendChild(card);

    interviewTotal = interviewTotal + 1;
    interviewCount.textContent = interviewTotal;
  }

  if (e.target.classList.contains("rejected-action")) {

    const card = e.target.closest(".job-card");
    const badge = card.querySelector(".status");

    badge.textContent = "REJECTED";
    badge.classList.remove("bg-green-200", "text-green-800");
    badge.classList.add("bg-red-200", "text-red-800");

    rejectedT.appendChild(card);

    rejectedTotal = rejectedTotal + 1;
    rejectedCount.textContent = rejectedTotal;
  }

});