const logOut = () => {
  console.log("hello");
  document.cookie = `jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  console.log(document.cookie);
};
export default logOut;
