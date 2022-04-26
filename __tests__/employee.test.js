const Employee = require('../lib/employee')

describe("Employee", () => {
    describe("Initialization", () => {
        it("Should create an object ", () => {
            const newEmployee = new Employee();
            expect(typeof newEmployee).toBe("object")
        });
    });
    describe("getName", () => {
        it("Should return the name provided ", () => {
            const newEmployee = new Employee("Nick Name", 123, "nick@name.com");
            const str = "Nick Name";
            const result = newEmployee.getName();
            expect(str).toEqual(result);
        });
    });
});
describe("getId", () => {
    it("Should return the id provided", () => {
        const newEmployee = new Employee("Nick Name", 123, "nick@name.com");
        const num = 123;
        const result = newEmployee.getId();
        expect(num).toEqual(result);
    });
});
describe("getEmail", () => {
    it("Should return the email provided ", () => {
        const newEmployee = new Employee("Nick Name", 123, "nick@name.com");
        const str = "nick@name.com";
        const result = newEmployee.getEmail();
        expect(str).toEqual(result);
    });
});
describe("getRole", () => {
    it("Should return: Employee", () => {
        const newEmployee = new Employee("Nick Name", 123, "nick@name.com");
        const str = "Employee";
        const result = newEmployee.getRole();
        expect(str).toEqual(result);
    });
});