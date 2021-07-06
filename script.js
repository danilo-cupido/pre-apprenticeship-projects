const darkLight = document.querySelector("#darkLight");
const text = Array.from(document.querySelectorAll(".text"));
const background = document.querySelector(".background");
const moon = document.querySelector("#moon");
const sun = document.querySelector("#sun");

darkLight.addEventListener("click", () => {
  text.forEach((t) => t.classList.toggle("darkText"));
  background.classList.toggle("darkBackground");

  const arr = [moon, sun];

  arr.forEach((el) => {
    if (el.classList.contains("visible")) {
      el.classList.remove("visible");
      el.classList.add("hidden");
    } else if (el.classList.contains("hidden")) {
      el.classList.remove("hidden");
      el.classList.add("visible");
    }
  });
});
