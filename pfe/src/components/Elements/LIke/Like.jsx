import { useEffect, useState } from "react";
import { sendLike } from "../../../API/sendRequest";

// function toggleLike() {
//   const likeButton = document.getElementById("likeButton");
//   const likeCount = likeButton.classList.contains("lbactive") ? 2 : 1;
//   likeButton.classList.toggle("lbactive");
//   switch (likeCount) {
//     case 1:
//       sendRequest("/like", { likeCount: 1 });
//       break;
//     case 2:
//       sendRequest("/like", { likeCount: 2 });
//       break;
//     default:
//       return;
//   }
// }

const Like = () => {
  const [like, setLike] = useState(false);

  useEffect(() => {
    sendLike("/like", like);
  }, [like]);

  return (
    <div class="likesave__button">
      <span
        style={like ? {} : {}}
        class="material-symbols-outlined"
        id="likeButton"
        onClick={() => setLike((like) => !like)}
      >
        favorite
      </span>
      <p>1</p>
    </div>
  );
};

export default Like;
