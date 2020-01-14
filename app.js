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
    console.log(this.salesPerHour);

  },
  render: function(){
    this.getHourlySales();
    //output HTML to the DOC
    //Unordered list with the name of the city
    var storesArticle = document.getElementById('stores');
    var cityUL = document.createElement('ul');
    var cityHeader = document.createElement('h1');
    cityHeader.textContent = this.name;
    cityUL.appendChild(cityHeader);
    // I need to create a LI for every hour the store is open
    for (var i = 0; i < hours.length; i++){
      var hourLI = document.createElement('li');
      hourLI.textContent = '${hours[i]}: ${this.salesperHour[i]} cookies';
      cityUL.appendChild(hourLI);
    }
    //create the total
    var total = 0;
    for(var i = 0; i < this.salesPerHour.length; i++){
      total += this.salesPerHour[i];
    }
    var totalLI = document.createElement('li');
    totalLI.textContent = 'Total ${total} cookies';
    cityUL.appendChild(totalLI);
    storesArticle.appendChild(cityUL);
    // 2 pieces of data: hourOfDay: ##cookies
  },

};
seattleStore.render();
