import axios from "axios";
const handlePost = async (data) => {
  console.log(data);
  const postContent = axios.post("http://localhost:5000/post", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export default handlePost;
