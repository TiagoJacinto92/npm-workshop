const chalk = require("chalk");

const colleagues = [
  { name: "Nuno", color: "blue" },
  { name: "whiteStone", color: "red" },
  { name: "Patricia", color: "yellow" },
  { name: "Chicote", color: "green" },
];

for (i = 0; i < colleagues.length; i++) {
  const { name, color } = colleagues[i];
  console.log(chalk[color](name));
}
