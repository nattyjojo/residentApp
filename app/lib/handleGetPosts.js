import axios from "axios";
import localhost from "./host";
const handleGetPosts = async () => {
  try {
    const fetchPosts = await axios.get(`${localhost}post`);
    return fetchPosts;
  } catch (err) {
    console.log(err);
  }
};
export default handleGetPosts;
