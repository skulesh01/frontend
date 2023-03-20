const share = document.getElementById("share");
const wrappershare = document.getElementById("wrappershare");
const avatar = document.getElementById("avatar")

share.addEventListener("click", () => {
  wrappershare?.classList.add("wrapperactive");
});

document.addEventListener("click", (event) => {
  console.log('click', event.target);
  event.target !== share && event.target !== wrappershare
    ? wrappershare?.classList.remove("wrapperactive")
    : null;
});

avatar.addEventListener("click", () => {
 avatar.src='http://185.251.91.19/files/photos/05527559-b8c0-49c4-b07c-68bf04be583c&163971-zvezdolet-kompaniya_spacex-probel_x-kosmicheskij_ekipazh_1-mezhdunarodnaya_kosmicheskaya_stanc-1920x1080.jpg';
});

// fetch('http://example.com/image.jpg')
//   .then(response => response.blob()) // Преобразуем ответ в объект blob
//   .then(blob => {
//     // Создаем объект URL из полученного blob
//     const url = URL.createObjectURL(blob);
//     // Создаем изображение на основе URL
//     const image = new Image();
//     image.src = url;
//     // Добавляем изображение на страницу
//     document.body.appendChild(image);
//   })
//   .catch(error => console.error(error)); // Обрабатываем ошибки
