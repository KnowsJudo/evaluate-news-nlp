import {
    handleSentiment
} from "../src/client/js/apiHandler"

const url1 = global.testUrl
const url2 = "Definitely not a URL"

const res1 = {
    agreement: "DISAGREEMENT",
    confidence: "86",
    irony: "NONIRONIC",
    scoreTag: "P",
    subjectivity: "SUBJECTIVE"
}

const res2 = {
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
                expect(data).toEqual(res1)
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
                expect(data).toEqual(res2)
                done()
            } catch (error) {
                done(error)
            }
        }

        handleSentiment(url2).then(callback2)
    })
})