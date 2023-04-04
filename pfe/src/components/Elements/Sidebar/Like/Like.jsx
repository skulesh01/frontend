import { useEffect, useState } from "react";
import { sendLike } from "D:/GitHub/frontend/pfe/src/API/sendRequest";

const Like = () => {
  const [like, setLike] = useState(false);

  useEffect(() => {
    sendLike("/like", like);
  }, [like]);

  return (
    <div className="likesave__button">
      <span
        style={
          like
            ? {
                fontVariationSettings: `'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48`,
                color: "red",
              }
            : {}
        }
        className="material-symbols-outlined"
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
