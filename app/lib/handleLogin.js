import axios from "axios";
import localhost from "./host";
const handleLogin = async (loginData) => {
  try {
    const postdata = await axios.post(`${localhost}login`, loginData, {
      withCredentials: true,

      headers: {
        "Content-Type": "application/json",
      },
    });
    return postdata;
  } catch (err) {
    console.log(err);
  }
};
export default handleLogin;
