const request = require('request')


const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/89c15a05ad49ed894131f5574086ac3d/' + lat + ',' + long + '?units=si'
    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather service!', undefined)
        }else if(body.error){
            callback('Unable to find location.', undefined)
        }else{
            callback(undefined, body.daily.data[0].summary + " Current Temp: " + body.currently.temperature + ". Current Chance of rain: " + body.currently.precipProbability + "%. Today the temperature high is " + body.daily.data[0].temperatureHigh + " and the temperature low is " + body.daily.data[0].temperatureLow + ".")
        }
    })
}

module.exports = forecast