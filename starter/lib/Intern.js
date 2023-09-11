// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getRole() {
    this.role = "Intern";
    return this.role;
  }

  getSchool() {
    if (this.school !== "") {
      return this.school;
    } else {
      console.log("Enter a valid School!");
    }
  }
}

module.exports = Intern;
