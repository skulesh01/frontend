import axios from "axios";
const baseUrl = "localhost:8000";

// export function sendRequest(url, data) {
//     const xhr = new XMLHttpRequest();
//     xhr.open("POST", url, true);
//     xhr.setRequestHeader("Content-Type", "application/json");
//     xhr.onreadystatechange = function () {
//       if (xhr.readyState === XMLHttpRequest.DONE) {
//         console.log(xhr.responseText);
//       }
//     };
//     xhr.send(JSON.stringify(data));
//   }

export const sendLike = (url, likeStatus, setLikeCounter) => {
  try {
    const response = axios.post(baseUrl + url, { likeCount: likeStatus });
    setLikeCounter(response?.data?.likeCounter);
  } catch (error) {
    console.error(error);
  }
};
