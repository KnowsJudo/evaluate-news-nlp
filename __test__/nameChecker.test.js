import {
    checkForName
} from "../src/client/js/nameChecker"

const name1 = "Picard"
const name2 = "Lachlan"

describe("Testing the name checking functionality", () => {
    test("Testing the checkForName function exists", () => {
        expect(checkForName).toBeDefined();
    })
    test(`Testing the checkForName function matches "${name1}"`, () => {
        expect(checkForName(name1)).toBe(true);
    })
    test(`Testing the checkForName function does not match "${name2}"`, () => {
        expect(checkForName(name2)).toBe(false);
    })
})