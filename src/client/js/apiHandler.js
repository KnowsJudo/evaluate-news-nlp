function handleSentiment(url) {
    const targetUrl = location.href + 'test'

    return fetch(targetUrl, {
        body: JSON.stringify({
            url
        }),
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
    }).then(
        res => res.json()
    ).then(
        res => {
            if (res.status && res.status.msg == "OK") {
                return {
                    agreement: res.agreement,
                    confidence: res.confidence,
                    irony: res.irony,
                    scoreTag: res.score_tag,
                    subjectivity: res.subjectivity
                }
            }

            return {
                error: 'error fetching sentiment'
            }
        }
    ).catch(() => ({
        error: 'error fetching sentiment'
    }))
}

export {
    handleSentiment,
};