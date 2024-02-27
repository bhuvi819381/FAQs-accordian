const folds = document.querySelectorAll(".fold");
const paragraphs = document.querySelectorAll(".paragraph");

folds.forEach(function (fold, index) {
  fold.addEventListener("click", function () {
    paragraphs[index].classList.toggle("hidden");
    let currentSrc = fold.querySelector(".plus").getAttribute("src");

    if (currentSrc.includes("plus")) {
      let newSrc = currentSrc.replace("plus", "minus");
      fold.querySelector(".plus").setAttribute("src", newSrc);
    } else {
      let newSrc = currentSrc.replace("minus", "plus");
      fold.querySelector(".plus").setAttribute("src", newSrc);
    }
  });
});
