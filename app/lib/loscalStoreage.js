const userType = {};
localStorage.setItem("userType", JSON.stringify(data));

// Retrieve data from localStorage
const storedData = JSON.parse(localStorage.getItem("userType"));
