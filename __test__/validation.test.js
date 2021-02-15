import {
    getValidationError,
    invalidUrlError,
    noTextError
} from "../src/client/js/validation"

const text1 = ""
const text2 = "Definitely not a URL"
const text3 = "http://google.com"
const text4 = "https://www.google.com/en"
const text5 = "http://www.google.com"
const text6 = "http://www.google/en"
const text7 = "htt://www.google.com"
const text8 = "://www.google.com"
const text9 = "www.google.com"

describe("Testing the validation functionality", () => {
    test("Testing the getValidationError function exists", () => {
        expect(getValidationError).toBeDefined();
    })
    test(`Testing that "${text1}" fails validation with "${noTextError}"`, () => {
        expect(getValidationError(text1)).toBe(noTextError);
    })
    test(`Testing that "${text2}" fails validation with "${invalidUrlError}"`, () => {
        expect(getValidationError(text2)).toBe(invalidUrlError);
    })
    test(`Testing that "${text3}" passes validation`, () => {
        expect(getValidationError(text3)).toBe(false);
    })
    test(`Testing that "${text4}" passes validation`, () => {
        expect(getValidationError(text4)).toBe(false);
    })
    test(`Testing that "${text5}" passes validation`, () => {
        expect(getValidationError(text5)).toBe(false);
    })
    test(`Testing that "${text6}" fails validation with "${invalidUrlError}"`, () => {
        expect(getValidationError(text6)).toBe(invalidUrlError);
    })
    test(`Testing that "${text7}" fails validation with "${invalidUrlError}"`, () => {
        expect(getValidationError(text7)).toBe(invalidUrlError);
    })
    test(`Testing that "${text8}" fails validation with "${invalidUrlError}"`, () => {
        expect(getValidationError(text8)).toBe(invalidUrlError);
    })
    test(`Testing that "${text9}" passes validation`, () => {
        expect(getValidationError(text9)).toBe(false);
    })
})