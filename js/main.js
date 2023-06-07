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

// Gallary js start
