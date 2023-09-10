// TODO: Write code to define and export the Employee class
const inquirer = require("inquirer");

class Employee {
  constructor(name, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return inquirer
      .prompt([
        {
          name: "name",
          message: "Please type the name of Employee",
        },
      ])
      .then((answers) => {
        this.name = answers.name;
      });
  }

  getId() {
    const idValue = 100;
    const newEmployee = new Employee("Bill", idValue);
    return;
  }

  getEmail() {
    if (this.email === "") {
      console.log(this.email);
      return this.email;
    }
  }

  getRole() {
    return Employee.getName(), Employee.getId(), Employee.getEmail();
  }
}

// const newEmployee = new Employee(require("../index"({ ...answers })));

// console.log(newEmployee);

module.exports = Employee;
