import fetch from 'node-fetch'

console.log('Make sure server is running on port 3000!!')

global.fetch = fetch
global.testUrl = 'https://www.weeklytimesnow.com.au/country-living/back-paddock/reason-for-tony-abbotts-raw-onion-bite-revealed/news-story/e29a4c96969f69f62bfa876563ddb6f3'

document.body.innerHTML = `<!DOCTYPE html><body><input id="name" value="${global.testUrl}"></div><pre id="results"></pre></body>`

global.fakeEvent = {
    preventDefault: () => {}
}