'use strict';

const tempClothes = require('./clothes-recommendation/temp-clothes');
const eventClothes = require('./clothes-recommendation/event-clothes')

function getClothesByTemp (temperature){
  let recommendation;
  if((temperature-90) > 0){
    recommendation = tempClothes[90];
    return recommendation;
  }
  if(temperature-20< 0){
    recommendation = 'We recommend you to move to a warmer place';
    return recommendation;
  }
  
  else{
    // console.log('middle range temp')
    for (let temp=30; temp < 101; temp +=10) {
      if (temperature-temp < 0){
        console.log('MIDDLE RANGE TEMP, ', tempClothes[temp-10])
        return tempClothes[temp-10];
      }
    }
  }

}


// this function is broken and it sends undefined event clothes to the text message body
function getClothesByEvent (event) {
  let eventList = Object.keys(eventClothes);
  if (eventList.includes(event.toLowerCase())){
    console.log('getClothesByEvent returns ' + eventClothes[event]);
    return eventClothes[event];
  }
}

module.exports = {
  getClothesByTemp,
  getClothesByEvent,
}