const request = require('request')


const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/89c15a05ad49ed894131f5574086ac3d/' + lat + ',' + long + '?units=si'
    request({url, json: true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to weather service!', undefined)
        }else if(body.error){
            allback('Unable to find location.', undefined)
        }else{
            callback(undefined, body.daily.data[0].summary + " Current Temp: " + body.currently.temperature + ". Current Chance of rain: " + body.currently.precipProbability + "%")
        }
    })
}

module.exports = forecast