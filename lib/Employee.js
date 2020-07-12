// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, role) {
        // check for 'name' parameter: refer to ../test/Employee.test.js lines 
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
          }

        if (typeof id !== "number" || isNaN(id) || id < 0) {
            throw new Error("Expected parameter 'id' to be a non-negative number");
            }

        if (typeof email !== "string" || !email.trim().length) {
            throw new Error("Expected parameter 'email' to be a non-empty string");
            }

        if (typeof role !== "string" || !role.trim().length) {
            throw new Error("Expected parameter 'role' to be a non-empty string");
            }

        if(typeof role === "string" && role.trim() !== 'manager' && role.trim() !== "intern" && role.trim() !== "engineer") {
            throw new Error("Invalid role was specified");
            }
        
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
}

module.exports = Employee;