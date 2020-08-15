const togglbtn = document.querySelector(".toggle-btn");
const body = document.querySelector("body");
const toggleimg = document.querySelector(".toggle-img");

togglbtn.addEventListener("click", function () {
  console.log("clicked");
  if (body.classList.contains("dark")) {
    body.classList.remove("dark");
    toggleimg.setAttribute("src", "./assets/sun.svg");
  } else {
    body.classList.add("dark");
    toggleimg.setAttribute(
      "src",
      "https://img.icons8.com/carbon-copy/100/000000/crescent-moon.png"
    );
  }
});
