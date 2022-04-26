const Engineer = require('../lib/engineer');

describe("Engineer", () => {
    describe("Initialization", () => {
        it("Should create an object", () => {
            const newEngineer = new Engineer.engineer();
            expect(typeof newEngineer).toBe("object")
        });
    });
    describe("getName", () => {
        it("Should return the name provided", () => {
            const newEngineer = new Engineer.engineer("Nick Name", 123, "nick@name.com");
            const str = "Nick Name";
            const result = newEngineer.getName();
            expect(str).toEqual(result);
        });
    });
});
describe("getId", () => {
    it("Should return the id provided", () => {
        const newEngineer = new Engineer.engineer("Nick Name", 123, "nick@name.com");
        const num = 123;
        const result = newEngineer.getId();
        expect(num).toEqual(result);
    });
});
describe("getEmail", () => {
    it("Should return the email provided ", () => {
        const newEngineer = new Engineer.engineer("Nick Name", 123, "nick@name.com");
        const str = "nick@name.com";
        const result = newEngineer.getEmail();
        expect(str).toEqual(result);
    });
});
describe("getRole", () => {
    it("Should return: Engineer", () => {
        const newEngineer = new Engineer.engineer("Nick Name", 123, "nick@name.com");
        const str = "Engineer";
        const result = newEngineer.getRole();
        expect(str).toEqual(result);
    });
});
describe("getGitHub", () => {
    it("Should return the github username provided", () => {
        const newEngineer = new Engineer.engineer("Nick Name", 123, "nick@name.com", "cycoconutz");
        const str = "cycoconutz";
        const result = newEngineer.getGitHub();
        expect(str).toEqual(result);
    });
});