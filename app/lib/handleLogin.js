import axios from "axios";

const handleLogin = async (loginData) => {
  try {
    const postdata = await axios.post(
      "http://localhost:5000/login",
      loginData,
      {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return postdata;
  } catch (err) {
    console.log(err);
  }
};
export default handleLogin;
