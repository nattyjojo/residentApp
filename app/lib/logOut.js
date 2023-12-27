const logOut = () => {
  console.log("hello");
  document.cookie = `jwt=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};
export default logOut;
