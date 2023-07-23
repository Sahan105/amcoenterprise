//schrollig counter start
let countersStarted = false;
window.addEventListener("scroll", startCountersOnScroll);
function startCountersOnScroll() {
  const achievementSection = document.getElementById("achievementSection");
  const counters = achievementSection.getElementsByClassName("counter");
  const windowHeight = window.innerHeight;
  const achievementSectionPosition =
    achievementSection.getBoundingClientRect().top;
  if (achievementSectionPosition < windowHeight && !countersStarted) {
    startCounterAnimations(counters);
    countersStarted = true;
  }
}

function startCounterAnimations(counters) {
  for (let i = 0; i < counters.length; i++) {
    const counter = counters[i];
    const targetValue = parseInt(counter.getAttribute("data-target"));
    let currentValue = 0;
    const increment = Math.ceil(targetValue / 100); // Adjust the increment value as needed

    const counterInterval = setInterval(() => {
      if (currentValue >= targetValue) {
        clearInterval(counterInterval);
      } else {
        currentValue += increment;
        counter.textContent = currentValue;
      }
    }, 10); // Adjust the interval duration as needed
  }
}
//schrolinng counter end
// fillter tab

const btns = document.querySelectorAll(".tab-btn");
const trades = document.querySelectorAll(".trade-details");

for (i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", (e) => {
    e.preventDefault();
    const filter = e.target.dataset.filter;
    trades.forEach((trade) => {
      console.log(trade);
      if (filter === "all") {
        trade.style.display = "grid";
      } else {
        if (trade.classList.contains(filter)) {
          trade.style.display = "block";
        } else {
          trade.style.display = "none";
        }
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector(".navbar");

  var bannerHeight = document.querySelector("#banner").offsetHeight;

  function toggleNavbarBackground() {
    if (window.scrollY >= bannerHeight) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  toggleNavbarBackground();

  window.addEventListener("scroll", toggleNavbarBackground);
});
