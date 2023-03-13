let ul = document.querySelector("ul");
console.log(ul);
let hamburger = document.querySelector(".hamburger");
console.log(hamburger);
hamburger.addEventListener("click", function () {
  ul.style.cssText =
    "display: flex; flex-direction: column; position: absolute; top: 100%; left: 11%; width: 307px; background: var(--White); text-align: center; padding: 20px;";
});

document.addEventListener("click", function outside(e) {
  if (!hamburger.contains(e.target)) {
    ul.style.display = "none";
  }
});
