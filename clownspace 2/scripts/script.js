// const likeButton = document.querySelector(".like-button");
const likeButton = document.getElementById("like");

likeButton.addEventListener("click", () => {
    likeButton.classList.contains("lbactive")
    ? likeButton.classList.remove("lbactive")
    : likeButton.classList.add("lbactive");
});



