const share = document.querySelector(".share");
const wrappershare = document.querySelector(".wrappershare");


wrappershare.addEventListener("click", () => {
    wrappershare.classList.contains("lbactive")
      ? wrappershare.classList.remove("lbactive")
      : wrappershare.classList.add("lbactive");
  });