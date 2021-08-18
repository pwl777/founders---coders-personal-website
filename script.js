/* ------ Javascript - Founders & Coders - Personal Website ------ */

/* =============== Dynamically Set Copyright Date =============== */

const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear();

/* =============== Close Links =============== */

const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  //  linksContainer.classList.toggle("show-links");
  const containerHeight = linksContainer.getBoundingClientRect().height;
  // console.log(containerHeight);
  const linksHeight = links.getBoundingClientRect().height;
  // console.log(linksHeight);

  if (containerHeight === 0) {
    linksContainer.style.height = `${linksHeight}px`; // Inline CSS for dynamic link sizing.
  } else {
    linksContainer.style.height = 0;
  }
});

const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

/* =============== Fixed Navbar =============== */

window.addEventListener("scroll", function () {
  // console.log(window.pageYOffset);
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  if (scrollHeight > 500) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

/* =============== Smooth Scroll =============== */

const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    /* Prevent default. */
    e.preventDefault();

    /* Navigate to specific section. */

    const id = e.currentTarget.getAttribute("href").slice(1);
    // console.log(id);
    const element = document.getElementById(id);

    /* Calculate the Heights. */
    const navHeight = navbar.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    let position = element.offsetTop - navHeight;
    // console.log(position);

    if (!fixedNav) {
      position = position - navHeight;
    }
    if (navHeight > 82) {
      position = position + containerHeight;
    }
    window.scrollTo({
      left: 0,
      top: position,
    });
    linksContainer.style.height = 0;
  });
});

/* ------ Javascript - Light & Dark Mode ------ */

/* =============== Target Light Mode Switch =============== */

const toggleSwitch = document.querySelector('input[type="checkbox"]');

/* =============== Target Other Elements =============== */

const nav = document.getElementById("nav");
const toggleIcon = document.getElementById("toggle-icon");

/* =============== Toggle Dark / Light Mode =============== */

function toggleDarkLightMode(isDark) {
  nav.style.backgroundColor = isDark
    ? "rgb(0 0 0 / 60%)"
    : "rgb(255 255 255 / 60%)";
  toggleIcon.children[0].textContent = isDark ? "Dark Mode" : "Light Mode";
  isDark
    ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
    : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
}

/* =============== Dynamically Switch Themes =============== */

function switchTheme(event) {
  //   console.log(event.target.checked);
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    toggleDarkLightMode(true);
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    toggleDarkLightMode(false);
  }
}

/* =============== Event Listener using a change event =============== */

toggleSwitch.addEventListener("change", switchTheme);

/* =============== Check Local Storage For Theme =============== */

const currentTheme = localStorage.getItem("theme");
// console.log(currentTheme);
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    toggleDarkLightMode(true);
  }
}

/* =============== Image Carousel - Data =============== */

const projects = [
  {
    img: "img/javascript-image-into-interactive-particles.png",
    code: "javascript",
    title: "Image into Interactive Particles",
    text: `Javascript exercise: Converted a png image to base64 data, then into particles. Which are manipulated by mouse over event movement.`,
    link: "https://pwl777.github.io/javascript-image-into-interactive-particles/",
  },
  {
    img: "img/javascript-mousemove-constellation-particles.png",
    code: "javascript",
    title: "Mousemove Constellation Particles",
    text: `Javascript exercise: `,
    link: "https://pwl777.github.io/javascript-mousemove-constellation-particles/",
  },
  {
    img: "img/javascript-background-cascading-particles.png",
    code: "javascript",
    title: "Background Cascading Particles",
    text: `Javascript exercise: `,
    link: "https://pwl777.github.io/javascript-background-cascading-particles/",
  },
  {
    img: "img/javascript-bubble-text-particles.png",
    code: "javascript",
    title: "Interactive Bubble Text Particles",
    text: `Javascript exercise: Text derived bubble shaped, arc particles. That are manipulated by mouse over movement.`,
    link: "https://pwl777.github.io/javascript-bubble-text-particles/",
  },
  {
    img: "img/css3-3d-layer-buttons.png",
    code: "css",
    title: "3d layer buttons",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    link: "https://pwl777.github.io/css3-3d-layer-buttons/",
  },
  {
    img: "img/css3-3d-menu-clip-path-animation.png",
    code: "css",
    title: "3d menu clip path animation",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    link: "https://pwl777.github.io/css3-3d-menu-clip-path-animation/",
  },
  {
    img: "img/css3-animated-social-media-buttons.png",
    code: "css",
    title: "animated social media buttons",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    link: "https://pwl777.github.io/css3-animated-social-media-buttons/",
  },
  {
    img: "img/css3-animated-sprites.png",
    code: "css",
    title: "animated sprites",
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit.`,
    link: "https://pwl777.github.io/css3-animated-sprites/",
  },
];

/* =============== Image Carousel =============== */
const container = document.querySelector(".slide-container");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const img = document.querySelector(".imgLink");

// Hide buttons if length is 1.
if (projects.length === 1) {
  nextBtn.style.display = "none";
  prevBtn.style.display = "none";
}
// If length is 2, add copies of slides.

if (projects.length === 2) {
  projects = [...projects, ...projects];
}
/* =============== Implementing Callback Function =============== */
/* */
// Set Slides.
container.innerHTML = projects
  .map((info, slideIndex) => {
    const { img, code, title, text, link } = info;
    // Slide Position Logic.
    let position = "next";
    // First Slide Set to Active.
    if (slideIndex === 0) {
      position = "active";
    }
    if (slideIndex === projects.length - 1) {
      position = "last";
    }
    if (projects.length <= 1) {
      position = "active";
    }
    // Template String.
    console.table(info);
    /**/
    return `<article class="slide ${position}">
      <a href="${link}" target="_/blank">
        <img
        class="imgLink"
        src=${img}
        alt="${code}"
      />
      </a>
        <h4 class="code-lang">${code}</h4>
        <p class="title">${title}</p>
        <p class="text">${text}</p>
        <div class="quote-icon">
          <i class="fas fa-quote-right"></i>
        </div>
      </article>`;
  })
  .join("");

const startSlider = (type) => {
  //   console.log("Testing Buttons");
  //   console.log(type);
  /* Target 3 classes (active, next, last) */
  const active = document.querySelector(".active");
  const last = document.querySelector(".last");
  // Move sequentially from first to last image.
  let next = active.nextElementSibling;
  //   console.log(next);

  // Cycle through from last image back to the first image.
  if (!next) {
    next = container.firstElementChild;
  }

  active.classList.remove(["active"]);
  last.classList.remove(["last"]);
  next.classList.remove(["next"]);
  /*  Swapping classes with Prev button (active, last, next)  */
  if (type === "prev") {
    active.classList.add("next");
    last.classList.add("active");
    next = last.previousElementSibling;
    // If next runs out, go to last element.
    if (!next) {
      next = container.lastElementChild;
    }
    next.classList.remove(["next"]);

    next.classList.add("last");
    return;
  }
  /* Swapping classes with Next button (active, last, next) */
  active.classList.add("last");
  last.classList.add("next");
  next.classList.add("active");
};

nextBtn.addEventListener("click", () => {
  startSlider();
});
prevBtn.addEventListener("click", () => {
  startSlider("prev");
});
img.addEventListener("click", () => {
  startSlider();
});

//====================================================//
