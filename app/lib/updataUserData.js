import axios from "axios";
const updataUserData = async (formData) => {
  const postUserData = await axios.post(
    "http://localhost:5000/update-user-data",
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
