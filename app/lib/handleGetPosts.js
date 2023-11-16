import axios from "axios";

const handleGetPosts = async () => {
  try {
    const fetchPosts = await axios.get("http://localhost:5000/post");
    return fetchPosts;
  } catch (err) {
    console.log(err);
  }
};
export default handleGetPosts;
