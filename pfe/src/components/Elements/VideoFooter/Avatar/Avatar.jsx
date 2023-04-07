import React, { useEffect, useState } from "react";
import axios from "axios";

function Avatar() {
  const [avatarUrl, setAvatarUrl] = useState("");

  const handleGetAvatar = async () => {
    try {
      const response = await axios.get("/avatar");
      setAvatarUrl(response.data.url);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    handleGetAvatar();
  }, []);

  return (
    <div>
      {avatarUrl && (
        <img
          src={avatarUrl}
          alt="Аватар"
          style={{ height: "60px", width: "60px" }}
        />
      )}
    </div>
  );
}
export default Avatar;
