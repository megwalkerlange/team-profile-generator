const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");

// TODO: Write Code to gather information about the development team members, and render the HTML file.

const questionsManager = [
  {
    name: "name",
    message: "Please type the name of manager",
  },

  {
    name: "ID",

    message: "Please type manager's ID",
  },
  {
    name: "e-mail",
    message: "Please type manager's e-mail address",
  },
  {
    name: "office",
    message: "Please type the room number of manager's office",
  },
  {
    type: "list",
    message: "Please select a job role for next employee",
    choices: ["Engineer", "Intern", "Finish building team"],
  },
];

const questionsEngineer = [
  {
    name: "name",
    message: "Please type the name of engineer",
  },
  { name: "e-mail", message: "Please type engineer's e-mail address" },
  {
    name: "ID",

    message: "Please type engineer's ID",
  },
  {
    name: "github",
    message: "Please type engineers gitHib username",
  },
  {
    type: "list",
    message: "Please select a job role for employee",
    choices: ["Engineer", "Intern", "Finish building team"],
  },
];

const questionsIntern = [
  {
    name: "name",
    message: "Please type the name of intern",
  },
  { name: "e-mail", message: "Please type intern's e-mail address" },
  {
    name: "ID",

    message: "Please type intern's ID",
  },
  {
    name: "university",
    message: "Please type the name of intern's university",
  },
  {
    type: "list",
    message: "Please select a job role for employee",
    choices: ["Engineer", "Intern", "Finish building team"],
  },
];

function init() {
  inquirer
    .prompt(questionsManager, questionsEngineer, questionsIntern)
    .then((answers) => console.log("Creating README.md File..."));
}

init();
