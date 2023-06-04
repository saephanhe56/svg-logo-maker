const inquirer = require('inquirer');
const fs = require('fs');


inquirer
  .prompt([
    {
      type: "input",
      name: "logoName",
      message: "Enter text for the localStorage. (Must not be more than 3 characters.)",
    },
    {
      type: "input",
      name: "textColor",
      message: "Enter a text color",
    },
    {
      type: "list",
      name: "logoShape",
      message: "Select a shape for the logo",
    },
    {
      type: "input",
      name: "logoColor",
      message: `Enter a shape color`,
    },
  ])



//initiate the init function here:
init();