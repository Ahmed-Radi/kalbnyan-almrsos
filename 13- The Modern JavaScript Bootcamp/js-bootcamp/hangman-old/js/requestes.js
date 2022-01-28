const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`, {})

    if (response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw Error ('Unable to fetch the puzzle')
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation();
    return await getCountry(location.country)
}

const getCountry = async (countryCode) => {
    const response = await fetch(`//restcountries.com/v2/all`, {})
    if (response.status === 200) {
        const data = await response.json()
        return data.find((country) => country.alpha2Code === countryCode)
    } else {
        throw Error ('Unable to fetch the Country name')
    }
}

const getLocation = async () => {
    const response = await fetch('//ipinfo.io/156.222.117.237?token=e8a003c56939cc', {})
    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error('Unable to get current location')
    }
}