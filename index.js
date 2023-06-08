const inquirer = require('inquirer');
const fs = require('fs');
const Shape = require('./lib/shapes.js');
const Circle = require('./lib/circle.js');
const Square = require('./lib/square.js');
const Triangle = require('./lib/triangle.js');


const questions = [
    {
      type: "input",
      name: "logo_name",
      message: "Enter text for the logo. (Must not be more than 3 characters.)",
    },
    {
      type: "input",
      name: "text_color",
      message: "Enter a text color",
    },
    {
      type: "list",
      name: "logo_shape",
      message: "Select a shape for the logo",
      choices: [
        "circle",
        "square",
        "triangle",
        ]
    },
    {
      type: "input",
      name: "logo_color",
      message: `Enter a shape color`,
    },
  ]


function init() {
    inquirer.prompt(questions)
    .then(function(answers) {
        if (answers.logo_shape === 'circle') {
            const circle = new Circle(answers.logo_color)
            writeToFile('logo.svg', createSVG(answers.logo_name, answers.text_color,circle.render()))
        } else if (answers.logo_shape === 'triangle') {
            const triangle = new Triangle(answers.logo_color)
            writeToFile('logo.svg', createSVG(answers.logo_name, answers.text_color,triangle.render()))
        } else if (answers.logo_shape === 'square') {
            const square = new Square(answers.logo_color)
            writeToFile('logo.svg', createSVG(answers.logo_name, answers.text_color,square.render()))
        } else {
            console.log("Invalid shape!");
        } 
    });
}

function createSVG(logo_name, text_color, logo_shape) {
    return `
    <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${logo_shape}
    <text x="150" y="125" font-size="45" text-anchor="middle" fill="${text_color}">${logo_name}</text>
    </svg>
    `;
}

function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
    console.log("Generated logo.svg");
};

//initiate the init function here:
init();