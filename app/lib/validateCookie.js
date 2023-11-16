import axios from "axios";

const validateCookie = async () => {
  if (typeof document !== "undefined" && document.cookie) {
    const getCooKie = document.cookie;
    const cookie = getCooKie.split("=")[1];
    try {
      const validateUserCookie = await axios.post(
        "http://localhost:5000/validate-cookie",
        { cookie: cookie },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return validateUserCookie;
    } catch (err) {
      console.log(err);
    }
  }
  return null;
};

export default validateCookie;
