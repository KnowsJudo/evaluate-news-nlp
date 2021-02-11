const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const meaningCloud = require('./meaningCloud')

dotenv.config()

const app = express()

app.use(bodyParser.json());

app.post('/test', async function (req, res) {
    const url = req.body.url

    if (url) {
        const value = await meaningCloud.getSentiment(
            process.env.API_KEY,
            url
        )

        res.send(value)
    } else {
        res.send({})
    }
})

app.use(express.static('dist'))

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('NLP app listening on port 3000!')
})
