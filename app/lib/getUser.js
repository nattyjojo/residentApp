import axios from "axios";
import localhost from "./host";
const getUser = async () => {
  const getCooKie = document.cookie;
  console.log(getCooKie);
  if (getCooKie) {
    const cookie = getCooKie.split("=")[1];
    try {
      const postdata = await axios.post(
        `${localhost}get-user`,
        { cookie: cookie },
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
  } else {
    return { data: null };
  }
};
export default getUser;
