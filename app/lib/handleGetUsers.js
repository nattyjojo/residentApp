import axios from "axios";
import localhost from "./host";
const handleGetUsers = async () => {
  try {
    const getUsers = await axios.get(`${localhost}get-users`);
    return getUsers;
  } catch (err) {
    console.log(err);
  }
};
export default handleGetUsers;
