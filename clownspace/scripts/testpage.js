const share = document.getElementById("share");
const wrappershare = document.getElementById("wrappershare");

share.addEventListener("click", () => {
  wrappershare?.classList.add("wrapperactive");
});

document.addEventListener("click", (event) => {
  console.log('click', event.target);
  event.target !== share && event.target !== wrappershare
    ? wrappershare?.classList.remove("wrapperactive")
    : null;
});
