import axios from "axios";
import localhost from "./host";
const handleGetPosts = async (postType) => {
  try {
    const fetchPosts = await axios.get(`${localhost}post/${postType}`);
    return fetchPosts;
  } catch (err) {
    console.log(err);
  }
};
export default handleGetPosts;
