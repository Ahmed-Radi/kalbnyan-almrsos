const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`, {}).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw Error ('Unable to fetch the puzzle')
        }
    }).then((data) => {
        return data.puzzle
    })
}
// const getPuzzle = (wordCount) => new Promise((resolve,reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', (e) => {
//         if(e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText);
//             resolve(data.puzzle)
//         } else if(e.target.readyState === 4) {
//             reject('An error has taken place')
//         }
//     })

//     request.open('GET',`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//     request.send()
// })

const getCountry = (countryCode) => {
    return fetch(`https://restcountries.com/v2/all`, {}).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw Error ('Unable to fetch the Country name')
        }
    }).then((data) => {
        return data.find((country) => country.alpha2Code === countryCode)
    })
}

// const getCountry = (countryCode) => new Promise((resolve, reject) => {
//     const newRequest = new XMLHttpRequest()
//     newRequest.addEventListener('readystatechange', (e) => {
//         if( e.target.readyState === 4 && e.target.status === 200 ) {
//             const data = JSON.parse(e.target.responseText)
//             const country = data.find((country) => country.alpha2Code === countryCode)
//             // console.log(country.name)
//             resolve(country)
//         } else if (e.target.status === 4) {
//             // console.log('Unable to fetch data')
//             reject('Unable to fetch data')
//         }
//     })

//     newRequest.open('GET','https://restcountries.com/v2/all')
//     newRequest.send()
// })