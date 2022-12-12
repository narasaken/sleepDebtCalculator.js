function getSleepHours(day) {
  if (day === 'monday') {
    return 8;
  } else if (day === 'tuesday') {
    return 8;
  } else if (day === 'wednesday') {
    return 8;
  } else if (day === 'thursday') {
    return 8;
  } else if (day === 'friday') {
    return 8;
  } else if (day === 'saturday') {
    return 10;
  } else if (day === 'sunday') {
    return 10;
  }
}

function getActualSleepHours() {
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
}

function getIdealSleepHours() {
  let idealHours = 8;
  return idealHours * 7;
}

function calculateSleepDebt() {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();
  if (actualSleepHours === idealSleepHours) {
    console.log("You got perfect amount of sleep.")
  } else if (actualSleepHours > idealSleepHours) {
    console.log("You got " + (actualSleepHours - idealSleepHours) + " hour(s) more sleep than needed.")
  } else if (actualSleepHours < idealSleepHours) {
    console.log("You got " + (idealSleepHours - actualSleepHours) + " hour(s) less sleep than you needed this week. Get some rest.")
  }
}

calculateSleepDebt();
