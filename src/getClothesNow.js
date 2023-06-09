'use strict';

const getWeatherNow = require('./getWeatherNow');
const getClothes = require('./getClothes');

async function getClothesNow(){

  let clothesRecommendations ={
    timeStamp: '',
    currentTemp: '',
    currentHumidity: '',
    currentClothes: '',
  }
  
  let weatherNow = await getWeatherNow();
  clothesRecommendations['currentTemp'] = (+weatherNow['temperature']*1.8+32).toFixed();
  clothesRecommendations['currentHumidity'] = (+weatherNow['humidity']).toFixed();
  clothesRecommendations['currentClothes'] = getClothes.getClothesByTemp(+clothesRecommendations['currentTemp']);
  clothesRecommendations['timeStamp'] = weatherNow['timeStamp']

  console.log(clothesRecommendations)
  return clothesRecommendations;
}

module.exports = getClothesNow;
// getClothesNow()