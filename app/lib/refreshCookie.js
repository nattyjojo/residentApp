import axios from "axios";
import logOut from "./logOut";
import localhost from "./host";
const refreshCookie = async () => {
  const cookieString = document.cookie;

  if (cookieString) {
    try {
      const cookie = cookieString.split("=")[1];
      const refreshCookie = await axios.post(`${localhost}refresh-cookie`, {
        cookie: cookie,
      });
      if (refreshCookie.data === false) {
        logOut();
      }
    } catch (err) {
      console.log(err);
    }
  }
};
export default refreshCookie;
