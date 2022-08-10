const request = require('request')

const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?country=in&limit=1&proximity=ip&types=place%2Cpostcode%2Caddress&language=en&access_token=pk.eyJ1IjoiY29kZWJ1Z2dlciIsImEiOiJjbDZmNW05Y3YwZ3Z3M2NwNXYxYmZtd3c0In0._Su0379UzFZSex_Qkqtbmg'
    request({
        url: url,
        json: true
    }, (error, response) => {
        if (error) {
            callback('Unable to connect to Weather Api', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to fetch Location. Try again with correct input')
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }

    })
}
module.exports = geoCode