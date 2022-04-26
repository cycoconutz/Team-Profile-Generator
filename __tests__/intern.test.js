const Intern = require('../lib/intern');

describe("Intern", () => {
    describe("Initialization", () => {
        it("It should create an object", () => {
            const newIntern = new Intern.intern();
            expect(typeof newIntern).toBe("object")
        });
    });
    describe("getName", () => {
        it("Should return the name provided", () => {
            const newIntern = new Intern.intern("Nick Name", 123, "nick@name.com");
            const str = "Nick Name";
            const result = newIntern.getName();
            expect(str).toEqual(result);
        });
    });
    describe("getId", () => {
        it("Should return the id provided", () => {
            const newIntern = new Intern.intern("Nick Name", 123, "nick@name.com");
            const num = 123;
            const result = newIntern.getId();
            expect(num).toEqual(result);
        });
    });
    describe("getEmail", () => {
        it("Should return the email provided", () => {
            const newIntern = new Intern.intern("Nick Name", 123, "nick@name.com");
            const str = "nick@name.com";
            const result = newIntern.getEmail();
            expect(str).toEqual(result);
        });
    });
    describe("getRole", () => {
        it("Should return: Intern", () => {
            const newIntern = new Intern.intern("Nick Name", 123, "nick@name.com");
            const str = "Intern";
            const result = newIntern.getRole();
            expect(str).toEqual(result);
        });
    });
    describe("getSchool", () => {
        it("Should return the school name provided", () => {
            const newIntern = new Intern.intern("Nick Name", 123, "nick@name.com", "UT-A Full Stack Bootcamp");
            const str = "UT-A Full Stack Bootcamp";
            const result = newIntern.getSchool();
            expect(str).toEqual(result);
        });
    });
});