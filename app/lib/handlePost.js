import axios from "axios";
import localhost from "./host";
const handlePost = async (data) => {
  const postContent = axios.post(`${localhost}post`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export default handlePost;
