import { sendLike } from "../../../../API/sendRequest";
import React, { useEffect, useState } from "react";

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
