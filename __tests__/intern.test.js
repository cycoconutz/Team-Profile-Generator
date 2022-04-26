const Intern = require('../lib/intern');

describe("Intern", () => {
    describe("Initialization", () => {
        it("It should create an object from the constructor function Intern", () => {
            const newIntern = new Intern.intern();
            expect(typeof newIntern).toBe("object")
        });
    });
    describe("getName", () => {
        it("Should return the name provided to the constructor function as the first argument", () => {
            const newIntern = new Intern.intern("Nick Name", 123, "nick@name.com");
            const str = "Nick Name";
            const result = newIntern.getName();
            expect(str).toEqual(result);
        });
    });
    describe("getId", () => {
        it("Should return the id provided to the constructor function as the second argument", () => {
            const newIntern = new Intern.intern("Nick Name", 123, "nick@name.com");
            const num = 123;
            const result = newIntern.getId();
            expect(num).toEqual(result);
        });
    });
    describe("getEmail", () => {
        it("Should return the email provided to the constructor function as the third argument", () => {
            const newIntern = new Intern.intern("Nick Name", 123, "nick@name.com");
            const str = "nick@name.com";
            const result = newIntern.getEmail();
            expect(str).toEqual(result);
        });
    });
    describe("getRole", () => {
        it("Should return the string: Intern", () => {
            const newIntern = new Intern.intern("Nick Name", 123, "nick@name.com");
            const str = "Intern";
            const result = newIntern.getRole();
            expect(str).toEqual(result);
        });
    });
    describe("getSchool", () => {
        it("Should return the school name provided to the constructor function as the fourth argument", () => {
            const newIntern = new Intern.intern("Nick Name", 123, "nick@name.com", "UT-A Full Stack Bootcamp");
            const str = "UT-A Full Stack Bootcamp";
            const result = newIntern.getSchool();
            expect(str).toEqual(result);
        });
    });
});