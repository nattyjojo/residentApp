import axios from "axios";
const handleGetUsers = async () => {
  try {
    const getUsers = await axios.get(`http://localhost:5000/get-users`);
    return getUsers;
  } catch (err) {
    console.log(err);
  }
};
export default handleGetUsers;
