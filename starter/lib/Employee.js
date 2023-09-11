// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer");

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    if (this.name !== "") {
      return this.name;
    } else {
      console.log("Please enter a valid name!");
    }
  }

  getId() {
    if (this.id > 0) {
      return this.id;
    } else {
      console.log("Please enter a valid ID!");
    }
  }

  getEmail() {
    if (this.email !== "") {
      return this.email;
    } else {
      console.log("Please enter a valid email!");
    }
  }

  getRole() {
    this.role = "Employee";
    return this.role;
  }
}

module.exports = Employee;
