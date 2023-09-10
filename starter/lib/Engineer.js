// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

const inquirer = require("inquirer");

class Engineer extends Employee {
  constructor(github) {
    this.github = githib;
  }

  getGithub() {
    return inquirer
      .prompt([
        {
          name: "name",
          message: "Please type the name of Engineers Github username",
        },
      ])
      .then((answers) => {
        this.githib = answers.githib;
      });
  }
}
