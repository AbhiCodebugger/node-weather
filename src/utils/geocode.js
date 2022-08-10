const request = require('request')

const geoCode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiY29kZWJ1Z2dlciIsImEiOiJjbDZmNW05Y3YwZ3Z3M2NwNXYxYmZtd3c0In0._Su0379UzFZSex_Qkqtbmg&limit=1'
    request({
        url: url,
        json: true
    }, (error, response) => {
        if (error) {
            callback('Unable to connect to Weather Api', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unable to fetch Location. Try again with correct input')
        } else {
            // console.log(response.body.features[0].center[0])
            // console.log(response.body.features[0].center[1])
            callback(undefined, {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }

    })
}
module.exports = geoCode