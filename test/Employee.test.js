const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with name, id, e-mail and role if provided with valid arguments", () => {
            const employee = new Employee("John", 420, 'johnk9000@gmail.com', 'engineer');

            expect(employee.name).toEqual("John");
            expect(employee.id).toEqual(420);
            expect(employee.email).toEqual('johnk9000@gmail.com');
            expect(employee.role).toEqual('engineer');
        });

        it("should throw an error if provided no arguments", () => {
            const cb = () => Employee();

            expect(cb).toThrow();
        });

        it("should throw an error if 'name' is not provided", () => {
            const cb = () => new Employee();
            const err = new Error("Expected parameter 'name' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'name' is not a string", () => {
            const cb = () => new Employee(420, 420);
            const err = new Error("Expected parameter 'name' to be a non-empty string");
      
            expect(cb).toThrowError(err);
          });

        it("should throw an error if 'id' is not provided", () => {
            const cb = () => new Employee('John');
            const err = new Error("Expected parameter 'id' to be a non-negative number");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'id' is not a number", () => {
            const cb = () => new Employee("John", "string");
            const err = new Error("Expected parameter 'id' to be a non-negative number");
        
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'email' is not provided", () => {
            const cb = () => new Employee('John', 420);
            const err = new Error("Expected parameter 'email' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'email' is not a string", () => {
            const cb = () => new Employee('John', 420, 420);
            const err = new Error("Expected parameter 'email' to be a non-empty string");
      
            expect(cb).toThrowError(err);
          });

        it("should throw an error if 'role' is not provided", () => {
            const cb = () => new Employee('John', 420, 'johnk9000@gmail.com');
            const err = new Error("Expected parameter 'role' to be a non-empty string");

            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'role' is not a string", () => {
            const cb = () => new Employee('John', 420, 'johnk9000@gmail.com', 420);
            const err = new Error("Expected parameter 'role' to be a non-empty string");
      
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'role' is not either 'Intern','Manager', or 'Engineer'", () => {
            const cb = () => new Employee('John', 420, 'johnk9000@gmail.com', 'wizard');
            const err = new Error("Invalid role was specified");

            expect(cb).toThrowError(err);
        });
    })
})