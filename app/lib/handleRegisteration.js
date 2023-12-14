import axios from "axios";
import localhost from "./host";
const handleRegisteration = async (signUpData) => {
  try {
    const postdata = await axios.post(`${localhost}register`, signUpData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const registerationResultMessage = postdata.data.message;
    return registerationResultMessage;
  } catch (err) {
    console.log(err);
  }
};
export default handleRegisteration;
