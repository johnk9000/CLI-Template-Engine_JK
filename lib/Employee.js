// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, id, email, role) {
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expect parameter 'name' to be a non-empty string");
          }
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }
}

module.exports = Employee;