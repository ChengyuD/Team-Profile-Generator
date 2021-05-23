const Intern = require("../lib/Intern");

describe("Intern", () => {
    const intern = new Intern("Intern Name", "131", "intern@test.com", "Intern School");

    it("returns intern", () => {
        const expected = "Intern";
        const result = intern.getRole();
        expected(result).toEqual(expected);
    });

    it ("returns intern name", () => {
        const expected = "Intern Name";
        const result = intern.getName();
        expected(result).toEqual(expected);
    });

    it ("returns intern id 131", () => {
        const expected = "131";
        const result = intern.getId();
        expected(result).toEqual(expected);
    });
    
    it ("returns intern email", () => {
        const expected = "intern@test.com";
        const result = intern.getEmail();
        expected(result).toEqual(expected);
    });

    it ("returns intern school", () => {
        const expected = "intern school";
        const result = intern.getSchool();
        expected(result).toEqual(expected);
    });
})