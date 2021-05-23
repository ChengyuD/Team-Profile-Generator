const Employee = require("../lib/Engineer");

describe("Engineer", () => {
    const engineer = new Engineer("Engineer Name", "111", "engineer@test.com");

    it("returns Engineer", () => {
        const expected = "Engineer";
        const result = engineer.getRole();
        expected(result).toEqual(expected);
    });

    it ("returns engineer id 111", () => {
        const expected = "111";
        const result = engineer.getId(); 
        expected(result).toEqual(expected);
    });

    it ("returns engineer name", () => {
        const expected = "Engineer Name";
        const result = engineer.getName();
        expected(result).toEqual(expected);
    });

    it ("returns engineer email", () => {
        const expected = "engineer@test.com";
        const result = engineer.getEmail();
        expected(result).toEqual(expected);
    });

    it ("returns engineer github user name", () => {
        const expected = "Engineer111-1";
        const result = engineer.getEmail();
        expected(result).toEqual(expected);
    });    
})