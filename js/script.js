var showCatButton = document.querySelector(".show-cat");
console.log(showCatButton.outterHTML);

var cat = document.querySelector(".cat");
console.log(cat.outerHTML);

showCatButton.addEventListener("click", function () {
  cat.classList.add("show");
});
