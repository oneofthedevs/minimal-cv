const togglbtn = document.querySelector(".toggle-btn");
const body = document.querySelector("body");
const toggleimg = document.querySelector(".toggle-img");
const glitchTrigger = document.querySelectorAll(".hover-effect");
const name = document.querySelector(".name");
const root = document.documentElement;

togglbtn.addEventListener("click", function () {
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    toggleimg.setAttribute("src", "./assets/sun.svg");
  } else {
    body.classList.add("dark");
    root.style.setProperty("--background-color", "#fff");
    root.style.setProperty("--font-color", "#3e3e3e");
    toggleimg.setAttribute(
      "src",
      "https://img.icons8.com/carbon-copy/100/000000/crescent-moon.png"
    );
  }
});

glitchTrigger[0].addEventListener("mouseenter", () => {
  name.classList.add("glitch");
  root.style.setProperty("--background-color", returnColor());
  root.style.setProperty("--font-color", returnColor());
});
glitchTrigger[0].addEventListener("mouseleave", () => {
  name.classList.remove("glitch");
});
glitchTrigger[3].addEventListener("mouseenter", () => {
  name.classList.add("glitch");
  root.style.setProperty("--background-color", returnColor());
  root.style.setProperty("--font-color", returnColor());
});
glitchTrigger[3].addEventListener("mouseleave", () => {
  name.classList.remove("glitch");
});

const random = () => {
  return Math.floor(Math.random() * 255);
};

const returnColor = () => {
  let r = random();
  let g = random();
  let b = random();
  return `rgb(${r}, ${g}, ${b})`;
};
