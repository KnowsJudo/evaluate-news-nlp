const fetch = require('node-fetch')

const getSentiment = async (apiKey, url) => {
    const response = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&lang=en&url=${url}`);

    try {
        const sentimentData = await response.json();

        return sentimentData;
    } catch (error) {
        console.log('an error occured', error);
    }
}

module.exports = {
    getSentiment
}