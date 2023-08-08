const getSleepHours = (day) => {
  if (day === "monday") {
    return 8;
  } else if (day === "tuesday") {
    return 7;
  } else if (day === "wednesday") {
    return 6;
  } else if (day === "thursday") {
    return 5;
  } else if (day === "friday") {
    return 4;
  } else if (day === "saturday") {
    return 3;
  } else if (day === "sunday") {
    return 2;
  }
};
console.log(getSleepHours("tuesday")); // should print the # hours assigned to tuesday

const getActualSleepHours = () =>
  getSleepHours("monday") +
  getSleepHours("tuesday") +
  getSleepHours("wednesday") +
  getSleepHours("thursday") +
  getSleepHours("friday") +
  getSleepHours("saturday") +
  getSleepHours("sunday");

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

console.log(getActualSleepHours()); // should print the sum of all sleep hours in the week

console.log(getIdealSleepHours()); // if idealHours is 8, should print 56

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours) {
    console.log("You've got perfect amount of sleep.");
  } else if (actualSleepHours > idealSleepHours) {
    console.log(
      "You got " +
        (idealSleepHours - actualSleepHours) +
        " more hours of sleep this week"
    );
  } else if (actualSleepHours < idealSleepHours) {
    console.log(
      "You got " +
        (idealSleepHours - actualSleepHours) +
        " hour(s) less sleep than you needed this week. Get some rest."
    );
  } else {
    console.log("Error. Check your code.");
  }
};

calculateSleepDebt();

