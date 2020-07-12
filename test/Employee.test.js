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

        it("should throw an error if provided no arguements", () => {
            const cb = () => Employee();

            expect(cb).toThrow();
        });

        it("should throw an error if 'name' is not provided", () => {
            const cb = () => new Employee();
            const err = new Error("Expect parameter 'name' to be a non-empty string");

            expect(cb).toThrowError(err);
        });
    })
})