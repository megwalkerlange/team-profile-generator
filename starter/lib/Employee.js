// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, email) {
    this.name = name;
    this.id = 0;
    this.email = email;
  }

  getName() {
    if (this.name === "") {
      return this.name;
    } else {
      console.log("Please enter a valid name!");
    }
  }

  getId() {
    if (this.id === "") {
      return console.log("Please enter a valid number");
    }

    if (this.id > 0 || this.id < 100) {
      return;
    }
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

const newEmployee = new Employee(require("../index"({ ...answers })));

console.log(newEmployee);

module.exports = Employee;
