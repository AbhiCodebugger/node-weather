const request = require('request')

const foreCast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=67852a07e033b81b9267c768e8075baa&query=' + latitude + ',' + longitude + '$units=f'
    request({ 
        url: url,
        json: true
     }, (error, response) => {
  
         if (error) {
             callback('Unable to connect to Weather Api', undefined)
            } else if (response.body.error) {
                console.log('Unable to fetch Location. Try again with correct input', undefined)
            } else {   
                callback(undefined, response.body.current.weather_descriptions[0] + '. The Temprature is ' + response.body.current.temperature + ' F. ',
                console.log(response.body.current.temperature)

            )
        }
    })
}
module.exports = foreCast