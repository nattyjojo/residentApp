import validateCookie from "../validateCookie";

const userIsAllowed = () => {
  const userCookie = document.cookie;
  if (userCookie.length === 0) {
    router.push("/");
    return;
  }
  if (userCookie.length > 0) {
    const verifyUser = validateCookie();
  }
};
export default userIsAllowed;
