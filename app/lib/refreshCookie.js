import axios from "axios";
import logOut from "./logOut";
const refreshCookie = async () => {
  const cookieString = document.cookie;

  if (cookieString) {
    try {
      const cookie = cookieString.split("=")[1];
      const refreshCookie = await axios.post(
        "http://localhost:5000/refresh-cookie",
        { cookie: cookie }
      );
      if (refreshCookie.data === false) {
        logOut();
      }
    } catch (err) {
      console.log(err);
    }
  }
};
export default refreshCookie;
