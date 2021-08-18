/* ------ JavaScript - Tab Panels ------ */

const btns = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const articles = document.querySelectorAll(".content");

/* =============== Accessing Data Set Id =============== */
about.addEventListener("click", function (e) {
  //   console.log(e.target.dataset.id);
  const id = e.target.dataset.id; // Event target.
  if (id) {
    // remove active class from all buttons.
    btns.forEach(function (btn) {
      btn.classList.remove("active");
      e.target.classList.add("active");
    });
    // hide non active articles.
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
