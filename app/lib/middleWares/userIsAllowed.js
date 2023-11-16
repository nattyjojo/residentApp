import validateCookie from "../validateCookie";

const userIsAllowed = () => {
  const userCookie = document.cookie;
  if (userCookie.length === 0) {
    router.push("/");
    return;
  }
  if (userCookie.length > 0) {
    const verifyUser = validateCookie();
    console.log({ verifyUser: verifyUser });
    //console.log({ hascookie: document.cookie.length });
  }
};
export default userIsAllowed;
