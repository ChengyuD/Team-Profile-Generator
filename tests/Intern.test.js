const Employee = require("../lib/Intern");

describe("Intern", () => {
    const employee = new Employee("Intern Name", "131", "intern@test.com", "Intern School");

    it("returns intern", () => {
        const expected = "Employee";
        const result = employee.getRole();
        expected(result).toEqual(expected);
    });

    it ("returns employee id 121", () => {
        const expected = "121";
        const result = employee.getId();
        expected(result).toEqual(expected);
    });

    it ("returns employee name", () => {
        const expected = "Employee Name";
        const result = employee.getName();
        expected(result).toEqual(expected);
    });

    it ("returns employee email", () => {
        const expected = "employe@test.com";
        const result = employee.getEmail();
        expected(result).toEqual(expected);
    });
})