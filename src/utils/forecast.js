const request = require('request')

const foreCast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=67852a07e033b81b9267c768e8075baa&query=' + latitude + ',' + longitude + '$units=f'
    request({ 
        url: url,
        json: true
     }, (error, {body}) => {
  
         if (error) {
             callback('Unable to connect to Weather Api', undefined)
            } else if (body.error) {
                callback('Unable to fetch Location. Try again with correct input', undefined)
            } else {  
                console.log(body.current) 
                console.log(body.current.feelslike)
                console.log(body.current.humidity)
                // console.log(response.body.current.feelslike)
                // console.log(response.body.current.weather_descriptions)
                callback(undefined, body.current.weather_descriptions[0] + '.  The Temprature is ' + body.current.temperature + ' F. The humidity is ' + body.current.humidity + ' but it feels like '+ body.current.feelslike +'.',

            )
        }
    })
}
module.exports = foreCast