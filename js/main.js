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

//testimonial code start

const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = testimonialsContainer.querySelector(".testimonial");
const logo = testimonialsContainer.querySelector(".logo");
const username = testimonialsContainer.querySelector(".username");
const role = testimonialsContainer.querySelector(".role");

const testimonials = [
  {
    name: "Miyah Myles",
    position: "Marketing",
    photo:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6",
    text: "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time.",
  },
  {
    name: "June Cha",
    position: "Software Engineer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!",
  },
  {
    name: "Iida Niskanen",
    position: "Data Entry",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him.",
  },
  {
    name: "Renee Sims",
    position: "Receptionist",
    photo: "https://randomuser.me/api/portraits/women/65.jpg",
    text: "This guy does everything he can to get the job done and done right. This is the second time I've hired him, and I'll hire him again in the future.",
  },
  {
    name: "Jonathan Nunfiez",
    position: "Graphic Designer",
    photo: "https://randomuser.me/api/portraits/men/43.jpg",
    text: "I had my concerns that due to a tight deadline this project can't be done. But this guy proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I'm looking forward to work with him again and I totally recommend him. Thanks again!",
  },
  {
    name: "Sasha Ho",
    position: "Accountant",
    photo:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb",
    text: "This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!",
  },
  {
    name: "Veeti Seppanen",
    position: "Director",
    photo: "./image/1.jpg",
    text: "This guy is a young and talented IT professional, proactive and responsible, with a strong work ethic. He is very strong in PSD2HTML conversions and HTML/CSS technology. He is a quick learner, eager to learn new technologies. He is focused and has the good dynamics to achieve due dates and outstanding results.",
  },
];
let idx = 1;

function updateTestimonial() {
  let { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  logo.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  idx++;
  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 2000);
//testimonial code end
// disappera contact section start code

// Get the contact section element
const contactSection = document.querySelector("#top_contact");

// Function to handle the scroll event
function handleScroll() {
  const scrollY = window.scrollY;

  // Check if the user has scrolled past the contact section
  if (scrollY >= contactSection.offsetHeight) {
    // If scrolled past, add a class to hide the contact section
    contactSection.classList.add("hidden");
  } else {
    // If not scrolled past, remove the class to show the contact section
    contactSection.classList.remove("hidden");
  }
}

// Add the scroll event listener to the window
window.addEventListener("scroll", handleScroll);
// disapear conact section code end
