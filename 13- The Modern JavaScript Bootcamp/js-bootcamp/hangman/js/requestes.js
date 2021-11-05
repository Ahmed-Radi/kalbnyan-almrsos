const getPuzzle = (wordCount,callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', (e) => {
        if(e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText);
            callback(undefined, data.puzzle)
        } else if(e.target.readyState === 4) {
            callback('An error has taken place', undefined)
        }
    })

    request.open('GET',`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    request.send()
}

const getCountry = (countryCode,callback) => {
    const newRequest = new XMLHttpRequest()
    newRequest.addEventListener('readystatechange', (e) => {
        if( e.target.readyState === 4 && e.target.status === 200 ) {
            const data = JSON.parse(e.target.responseText)
            const country = data.find((country) => country.alpha2Code === countryCode)
            // console.log(country.name)
            callback(undefined, country)
        } else if (e.target.status === 4) {
            // console.log('Unable to fetch data')
            callback('Unable to fetch data', undefined)
        }
    })

    newRequest.open('GET','https://restcountries.com/v2/all')
    newRequest.send()
}