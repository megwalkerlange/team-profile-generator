// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email);
    this.office = office;
  }

  getRole() {
    this.role = "Manager";
    return this.role;
  }

  getOfficeNumber() {
    if (this.office > 0) {
      return this.office;
    } else {
      console.log("Enter a valid office number!");
    }
  }
}

module.exports = Manager;
