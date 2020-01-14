'use strict';
//Open hours

//Collaborated with Alex pena
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
//RNGESUS//
function getRandomInt(customerMin, customerMax) {
  return Math.floor(Math.random() * (customerMax - customerMin)) + customerMin;
}
console.log(getRandomInt(23,65));

//store object//
seattleStore = {
  store: 'Seattle',
  customerMin: 23,
  customerMax: 65,
  customerAverage: 6.3,
  //Customer/sales per hour//
  hourlySales: function(){
    var customersPerHour = [];
    var salesPerCustomer = [];
    for (i = 0; i < hours.length; i++){
      customersPerHour.push(getRandomInt(this.customerMin,this.customerMax));
    }
    for (i = 0; i < hours.length; i++){
      salesPerCustomer.push(customersPerHour[i] * this.customerAverage);
    }
    console.log(customersPerHour);
    console.log(salesPerCustomer);
  },
};
seattleStore.hourlySales();
