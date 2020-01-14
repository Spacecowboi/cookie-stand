'use strict';
//Open hours

//Collaborated with Alex pena
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
//RNGESUS//
function getRandomInt(customerMin, customerMax) {
  var randomNumber = Math.random() * (customerMax - customerMin) + customerMin;
  return Math.floor(randomNumber);
}
console.log(getRandomInt(23,65));

//store object//
var seattleStore = {
  name: 'Seattle',
  customerMin: 23,
  customerMax: 65,
  customerAverage: 6.3,
  salesPerHour: [], //having this as a property makes it more accessible.
  //Customer/sales per hour//
  getHourlySales: function(){
    // Go through the hours of the day
    for (var i = 0; i < hours.length; i++){
      // create a new variable called totalCookiesPerHour = customersPerHour * this.customerAverage
      var totalCookiesPerHour = customersPerHour * this.customerAverage;
      customersPerHour.push(getRandomInt(this.customerMin,this.customerMax));
      // add the totalCookies to the salesPerHourArray
      this.salesPerHour.push(totalCookiesPerHour);
    }
    for (i = 0; i < hours.length; i++){
      salesPerHour.push(customersPerHour[i] * this.customerAverage);
    }
    console.log(customersPerHour);
    console.log(salesPerHour);
  },
};
seattleStore.hourlySales();
