import axios from "axios";
import localhost from "./host";
const updataUserData = async (formData) => {
  const postUserData = await axios.post(
    `${localhost}update-user-data`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return postUserData;
};

export default updataUserData;
