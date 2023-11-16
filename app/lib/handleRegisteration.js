import axios from "axios";

const handleRegisteration = async (signUpData) => {
  try {
    const postdata = await axios.post(
      "http://localhost:5000/register",
      signUpData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const registerationResultMessage = postdata.data.message;
    return registerationResultMessage;
  } catch (err) {
    console.log(err);
  }
};
export default handleRegisteration;
