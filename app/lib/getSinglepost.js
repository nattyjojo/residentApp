import axios from "axios";
import localhost from "./host";
const getSinglePost = async (postID) => {
  try {
    const singlePost = await axios.get(`${localhost}singlePost/${postID}`);
    return singlePost;
  } catch (err) {
    console.log(err);
  }
};
export default getSinglePost;
