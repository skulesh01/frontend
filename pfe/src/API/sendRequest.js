import axios from "axios";
const baseUrl = "http://localhost:8000";

export const sendLike = async (endpoint, likeCount, setLikeCount) => {
  try {
    const response = await axios.post(baseUrl + endpoint, { likeCount });
    setLikeCount(response?.data?.likeCounter ?? 0);
  } catch (error) {
    // handle error more gracefully
    console.error("Failed to send like:", error);
    // inform user, show error message on UI, etc.
  }
};
