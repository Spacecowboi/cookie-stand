'use strict';
//Collaborated with Alex pena, amazing help to get started and work with to understand labs 6-7 and hopefully more
// array for storage of values in contstructor function
var everyLocation = [];

//Single constructor function
function LocationInfo(name, customerMin, customerMax, customerAverage) {
  this.name = name;
  this.customerMin = customerMin;
  this.customerMax = customerMax;
  this.customerAverage = customerAverage;
  this.dailyTotal = 0;
  this.hourlySales = [];
  //nested for loops pushing data into array for hourlysales
  for (var i = 0; i < hours.length; i++){
    var cPH = getRandomInt(this.customerMin, this.customerMax);
    var totalCookiePH = Math.floor(cPH * this.customerAverage);
    this.hourlySales.push(totalCookiePH);
  }
  for (var i = 0; i < this.hourlySales.length; i++){
    this.dailyTotal = this.hourlySales[i] + this.dailyTotal;
  }
  for (var i = 0; i < hours.length; i++){

  }

}

var seattleStore = new LocationInfo('Seattle', 23,65, 6.3);
var tokyoStore = new LocationInfo('Tokyo', 3, 24, 1.2);
var dubaiStore = new LocationInfo('Dubai', 11, 38, 3.7);
var parisStore = new LocationInfo('Paris', 20,38,2.3);
var limaStore = new LocationInfo('Lima', 2, 16, 4.6);

everyLocation.push(seattleStore, tokyoStore, dubaiStore, parisStore, limaStore);


//Open hours
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
      // create a new variable called customersPerHour and call the random function
      var customersPerHour = getRandomInt(this.customerMin, this.customerMax);
      var totalCookiesPerHour = Math.floor(customersPerHour * this.customerAverage);
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
      hourLI.textContent = `${hours[i]}: ${this.salesPerHour[i]} cookies`;
      cityUL.appendChild(hourLI);
    }
    //create the total
    var total = 0;
    for(var i = 0; i < this.salesPerHour.length; i++){
      total += this.salesPerHour[i];
    }
    var totalLI = document.createElement('li');
    totalLI.textContent = `Total ${total} cookies`;
    cityUL.appendChild(totalLI);
    storesArticle.appendChild(cityUL);
    // 2 pieces of data: hourOfDay: ##cookies
  },

};

seattleStore.render();


var tokyoStore = {
  name: 'Tokyo',
  customerMin: 23,
  customerMax: 65,
  customerAverage: 6.3,
  salesPerHour: [], //having this as a property makes it more accessible.
  //Customer/sales per hour//
  getHourlySales: function(){
    // Go through the hours of the day
    for (var i = 0; i < hours.length; i++){
      // create a new variable called customersPerHour and call the random function
      var customersPerHour = getRandomInt(this.customerMin, this.customerMax);
      var totalCookiesPerHour = Math.floor(customersPerHour * this.customerAverage);
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
      hourLI.textContent = `${hours[i]}: ${this.salesPerHour[i]} cookies`;
      cityUL.appendChild(hourLI);
    }
    //create the total
    var total = 0;
    for(var i = 0; i < this.salesPerHour.length; i++){
      total += this.salesPerHour[i];
    }
    var totalLI = document.createElement('li');
    totalLI.textContent = `Total ${total} cookies`;
    cityUL.appendChild(totalLI);
    storesArticle.appendChild(cityUL);
    // 2 pieces of data: hourOfDay: ##cookies
  },

};

tokyoStore.render();

var dubaiStore = {
  name: 'Dubai',
  customerMin: 23,
  customerMax: 65,
  customerAverage: 6.3,
  salesPerHour: [], //having this as a property makes it more accessible.
  //Customer/sales per hour//
  getHourlySales: function(){
    // Go through the hours of the day
    for (var i = 0; i < hours.length; i++){
      // create a new variable called customersPerHour and call the random function
      var customersPerHour = getRandomInt(this.customerMin, this.customerMax);
      var totalCookiesPerHour = Math.floor(customersPerHour * this.customerAverage);
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
      hourLI.textContent = `${hours[i]}: ${this.salesPerHour[i]} cookies`;
      cityUL.appendChild(hourLI);
    }
    //create the total
    var total = 0;
    for(var i = 0; i < this.salesPerHour.length; i++){
      total += this.salesPerHour[i];
    }
    var totalLI = document.createElement('li');
    totalLI.textContent = `Total ${total} cookies`;
    cityUL.appendChild(totalLI);
    storesArticle.appendChild(cityUL);
    // 2 pieces of data: hourOfDay: ##cookies
  },

};

dubaiStore.render();

var parisStore = {
  name: 'Paris',
  customerMin: 23,
  customerMax: 65,
  customerAverage: 6.3,
  salesPerHour: [], //having this as a property makes it more accessible.
  //Customer/sales per hour//
  getHourlySales: function(){
    // Go through the hours of the day
    for (var i = 0; i < hours.length; i++){
      // create a new variable called customersPerHour and call the random function
      var customersPerHour = getRandomInt(this.customerMin, this.customerMax);
      var totalCookiesPerHour = Math.floor(customersPerHour * this.customerAverage);
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
      hourLI.textContent = `${hours[i]}: ${this.salesPerHour[i]} cookies`;
      cityUL.appendChild(hourLI);
    }
    //create the total
    var total = 0;
    for(var i = 0; i < this.salesPerHour.length; i++){
      total += this.salesPerHour[i];
    }
    var totalLI = document.createElement('li');
    totalLI.textContent = `Total ${total} cookies`;
    cityUL.appendChild(totalLI);
    storesArticle.appendChild(cityUL);
    // 2 pieces of data: hourOfDay: ##cookies
  },

};

parisStore.render();

var limaStore = {
  name: 'Lima',
  customerMin: 23,
  customerMax: 65,
  customerAverage: 6.3,
  salesPerHour: [], //having this as a property makes it more accessible.
  //Customer/sales per hour//
  getHourlySales: function(){
    // Go through the hours of the day
    for (var i = 0; i < hours.length; i++){
      // create a new variable called customersPerHour and call the random function
      var customersPerHour = getRandomInt(this.customerMin, this.customerMax);
      var totalCookiesPerHour = Math.floor(customersPerHour * this.customerAverage);
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
      hourLI.textContent = `${hours[i]}: ${this.salesPerHour[i]} cookies`;
      cityUL.appendChild(hourLI);
    }
    //create the total
    var total = 0;
    for(var i = 0; i < this.salesPerHour.length; i++){
      total += this.salesPerHour[i];
    }
    var totalLI = document.createElement('li');
    totalLI.textContent = `Total ${total} cookies`;
    cityUL.appendChild(totalLI);
    storesArticle.appendChild(cityUL);
    // 2 pieces of data: hourOfDay: ##cookies
  },

};

limaStore.render();

// var myTable = document.getElementById('myTable');
// var coffeeArray = ['Latte', 'Mocha', 'Americano', 'Cappucino'];

// var coffeeTable = document.createElement('table');//creating the table
// var headerRow = document.createElement('tr');//creating the row within the table

// for(var i = 0; i < coffeeArray.length; i++){
//   var tableHeader = document.createElement('th');
//   tableHeader.textContent = coffeeArray[i]; //ask about this
//   headerRow.appendChild(tableHeader);
// }
// coffeeTable.appendChild(headerRow);

// for (var i = 0; i < 4; i++){
//   var row = document.createElement('tr');
//   // nested for loop begins
//   for(var j = 0; j < coffeeArray.length; j++){
//     var tableData = document.createElement('td');
//     tableData.textContent = Math.floor(getRandomInt(0, 100));
//     row.appendChild(tableData);
//   }
//   coffeeTable.appendChild(row);
// }

// myTable.appendChild(coffeeTable);


// function Coffee(size, type, price){
//   //set properties using this
//   this.size = size;
//   this.coffeeType = type;
//   this.potato = price;
//   this.temperature = 180;
//   this.ingredients = [];
//   this.generateHourSales = function(){
//     console.log('hello');
//   };
// }

// Coffee.prototype.render = function(){
//   //rendering logic goes here
// };
// //to Create an object using a constructor function
// //we INSTANTIATE the object using the construction function

// var anthonysLatte = new Coffee('Large', 'latte', 5 );

// console.log(anthonysLatte.size);
// anthonysLatte.render();