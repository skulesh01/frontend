// const likeButton = document.querySelector(".like-button");
const likeButton = document.getElementById("like");
const FollowButton = document.getElementById("follow");

likeButton.addEventListener("click", () => {
  likeButton.classList.contains("lbactive")
    ? likeButton.classList.remove("lbactive")
    : likeButton.classList.add("lbactive");
});
//follow
FollowButton.addEventListener("click", () => {
  FollowButton.classList.contains("lbactive")
    ?( 
        FollowButton.classList.remove("lbactive"),
    FollowButton.textContent = "Follow"
)
    : 
       ( FollowButton.classList.add("lbactive"),
        FollowButton.textContent = "Unfollow")
      
});


// переход в профиль
document.getElementById("person").onclick = function () {
  window.location.href = "./profilepage.html";
};
document.getElementById("ava").onclick = function () {
  console.log("text");
  window.location.href = "./profilepage.html";
};
document.getElementById("hppp").onclick = function () {
  window.location.href = "./profilepage.html";
};
