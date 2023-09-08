// TODO: Write code to define and export the Employee class
class Employee {
  constructor(name, id, email, role) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = role;
  }
}

getName(){
  if (this.name === "") {
    return this.name;
  } else {
    console.log("Please enter a valid name!");
  }
};

getId(){
  if (this.id === "") {
    return console.log("Please enter a valid number");
  }

  if (this.id > 0 || this.id < 100) {
    return;
  }
};
// getEmail()
// {

// }

// getRole(){

// }

Employee.getName();
Employee.getId();

module.exports = Employee;
