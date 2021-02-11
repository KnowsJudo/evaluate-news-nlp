import {
    handleSubmit
} from "../src/client/js/formHandler"

// Did not test handle submit with events as there is no `document`
describe("Testing the Submit functionality", () => {
    test("Testing the handleSubmit function exists", () => {
        expect(handleSubmit).toBeDefined();
    })
    test("Testing the handleSubmit function completes execution", (done) => {
        function callback() {
            done()
        }

        handleSubmit(global.fakeEvent).then(callback)
    })
})