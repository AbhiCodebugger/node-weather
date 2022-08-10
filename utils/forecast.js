const request = require('request')

const foreCast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=67852a07e033b81b9267c768e8075baa&query=' + lat + ',' + long +
    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to Weather Api', undefined)
        } else if (response.body.error) {
            console.log('Unable to fetch Location. Try again with correct input', undefined)
        } else {
            callback(undefined, response.body.current.weather_descriptions[0] + '. The Temprature is ' + response.body.current.temperature + ' F. '

            )
        }
    })
}
module.exports = foreCast