const share = document.getElementById("share");
const wrappershare = document.getElementById("wrappershare");
const avatar = document.getElementById("avatar");

// const likeButton = document.querySelector(".like-button");
const likeButton = document.getElementById("like");
const FollowButton = document.getElementById("follow");
const t = 1;
const f = 0;

//обработка лайка

likeButton.addEventListener("click", () => {
  if (likeButton.classList.contains("lbactive")) {
    likeButton.classList.remove("lbactive");
    sendRequest("/like", { likeCount: 1 });
  } else {
    likeButton.classList.add("lbactive");
    sendRequest("/like", { likeCount: 2 });
  }
});

function sendRequest(url, data) {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(JSON.stringify(data));
  console.log(data);
}

//проверка отправки, вставить вместо
// xhr.send(JSON.stringify(data));
// console.log(data);
// xhr.onreadystatechange = function() {
//   if(xhr.readyState === XMLHttpRequest.DONE) {
//     console.log(xhr.responseText);
//   }
// }
// xhr.send(JSON.stringify(data));
// }


//follow
FollowButton.addEventListener("click", () => {
  FollowButton.classList.contains("lbactive")
    ? (FollowButton.classList.remove("lbactive"),
      (FollowButton.textContent = "Follow"))
    : (FollowButton.classList.add("lbactive"),
      (FollowButton.textContent = "Unfollow"));
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

// всплывающее окно
share.addEventListener("click", () => {
  wrappershare?.classList.add("wrapperactive");
});

document.addEventListener("click", (event) => {
  event.target !== share && event.target !== wrappershare
    ? wrappershare?.classList.remove("wrapperactive")
    : null;
});

//вставка видео



// avatar.addEventListener("click", () => {
//  avatar.src='http://185.251.91.19/files/photos/05527559-b8c0-49c4-b07c-68bf04be583c&163971-zvezdolet-kompaniya_spacex-probel_x-kosmicheskij_ekipazh_1-mezhdunarodnaya_kosmicheskaya_stanc-1920x1080.jpg';
// });

// const request = new XMLHttpRequest();
// const url = 'https://example.com/video-links?userid=1234&videoid=1';
// const userId = '1234';
// const videoId = '1';

// request.open('GET', url);
// request.setRequestHeader('Content-Type', 'application/json');
// request.onload = function() {
//   if (request.status === 200) {
//     const response = JSON.parse(request.responseText);
//     console.log(response.video_links);
//   } else {
//     console.log('Пошел ты нахер со своим видео. Ошибка ' + request.status);
//   }
// };

// const data = {
//   request_type: 'get_video_links',
//   user_id: userId,
//   video_id: videoId
// };

// request.send(JSON.stringify(data));
