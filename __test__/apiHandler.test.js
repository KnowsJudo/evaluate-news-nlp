import {
    handleSentiment
} from "../src/client/js/apiHandler"

const url1 = global.testUrl
const url2 = "Definitely not a URL"

const errorResult = {
    error: 'error fetching sentiment'
}

describe("Testing the Fetch Sentiment functionality", () => {
    test("Testing the handleSentiment function exists", () => {
        expect(handleSentiment).toBeDefined();
    })

    test("Testing that Node-Fetch was correctly initiated", () => {
        expect(fetch).toBeDefined();
    })

    test("Testing the handleSentiment function handles valid URLs correctly", (done) => {
        function callback1(data) {
            try {
                // We don't care if the API results vary across articles, we
                // only want to ensure they resolved with the correct properties
                expect(data).toHaveProperty('agreement')
                expect(data).toHaveProperty('confidence')
                expect(data).toHaveProperty('irony')
                expect(data).toHaveProperty('scoreTag')
                expect(data).toHaveProperty('subjectivity')
                done()
            } catch (error) {
                done(error)
            }
        }

        handleSentiment(url1).then(callback1)
    })

    test("Testing the handleSentiment function handles invalid URLs correctly", (done) => {
        function callback2(data) {
            try {
                expect(data).toEqual(errorResult)
                done()
            } catch (error) {
                done(error)
            }
        }

        handleSentiment(url2).then(callback2)
    })
})