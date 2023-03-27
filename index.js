let tour = document.getElementById("tour");
let text = document.getElementById("text");
let star = document.getElementById("star");

window.addEventListener("scroll", () => {
  let value = window.scrollY;

  tour.style.top = value * 1.5 + "px";
  text.style.left = value * -1.5 + "px";
  star.style.top = value * -1.5 + "px";
});
