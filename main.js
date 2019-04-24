// variables
let raceNumber = Math.floor(Math.random() * 1000);
    earlyRunner = false;
    runnerAge = 12;

//conditionals
if (runnerAge > 18 && earlyRunner) {
  raceNumber += 1000;
}

if (runnerAge > 18 && earlyRunner) {
  console.log(`Your race starts at 9:30 AM and your race number is ${raceNumber}`);
} else if (runnerAge > 18 && !earlyRunner) {
  console.log(`Your race starts at 11:00 AM and your race number is ${raceNumber}`);
} else if (runnerAge < 18) {
  console.log(`Your race starts at 12:30 PM and your race number is ${raceNumber}`);
} else if (runnerAge === 18) {
  console.log(`See the registration desk.`);
}