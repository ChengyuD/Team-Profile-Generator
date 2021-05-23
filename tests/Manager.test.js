const Manager = require("../lib/Manager");

describe("Manager", () => {
    const manager = new Manager("Manager Name", "101", "manager@test.com", "1001");

    it("returns manager", () => {
        const expected = "Manager";
        const result = manager.getRole();
        expected(result).toEqual(expected);
    });

    it ("returns manager name", () => {
        const expected = "Manager Name";
        const result = manager.getName();
        expected(result).toEqual(expected);
    });

    it ("returns manager id 101", () => {
        const expected = "101";
        const result = manager.getId();
        expected(result).toEqual(expected);
    });

    it ("returns manager email", () => {
        const expected = "manager@test.com";
        const result = manager.getEmail();
        expected(result).toEqual(expected);
    });

    it ("returns manager office number", () => {
        const expected = "1001";
        const result = manager.getOfficeNumber();
        expected(result).toEqual(expected);
    });
})