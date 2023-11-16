const { data } = require("autoprefixer");

const currentTime = () => {
  const currentHour = new Date().getHours();

  if (currentHour >= 5 && currentHour < 11) {
    return " GOOD MORNING";
  } else if (currentHour >= 11 && currentHour < 17) {
    return "GOOD AFTERNOON";
  } else {
    return "GOOD EVENING";
  }
};
const check = currentTime();
