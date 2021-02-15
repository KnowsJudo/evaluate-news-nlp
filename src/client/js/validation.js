// Regular expression for URLs
const matchExpression = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/igm
const noTextError = "You must add some text"
const invalidUrlError = "URL is invalid"

function getValidationError(inputURL) {
    if (!inputURL) {
        return noTextError
    }

    if (!inputURL.match(matchExpression)) {
        return invalidUrlError
    }

    return false
}

export {
    getValidationError,
    invalidUrlError,
    noTextError
}