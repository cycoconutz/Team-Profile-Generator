const Manager = require('../lib/manager');

describe("Manager", () => {
    describe("Initialization", () => {
        it("It should create an object", () => {
            const newManager = new Manager.manager();
            expect(typeof newManager).toBe("object")
        });
    });
    describe("getName", () => {
        it("Should return the name provided", () => {
            const newManager = new Manager.manager("Nick Name", 123, "nick@name.com");
            const str = "Nick Name";
            const result = newManager.getName();
            expect(str).toEqual(result);
        });
    });
});
describe("getId", () => {
    it("Should return the id provided", () => {
        const newManager = new Manager.manager("Nick Name", 123, "nick@name.com");
        const num = 123;
        const result = newManager.getId();
        expect(num).toEqual(result);
    });
});
describe("getEmail", () => {
    it("Should return the email provided", () => {
        const newManager = new Manager.manager("Nick Name", 123, "nick@name.com");
        const str = "nick@name.com";
        const result = newManager.getEmail();
        expect(str).toEqual(result);
    });
});
describe("getRole", () => {
    it("Should return: Manager", () => {
        const newManager = new Manager.manager("Nick Name", 123, "nick@name.com");
        const str = "Manager";
        const result = newManager.getRole();
        expect(str).toEqual(result);
    });
});