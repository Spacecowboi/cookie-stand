'use strict';
//Collaborated with Alex pena, amazing help to get started and work with to understand labs 6-7 and hopefully more
// Collaborated with Teddy for the render and footer


// //RNGESUS//--------------------------------------------------------------------------------------------------------
function getRandomInt(customerMin, customerMax) {
  var randomNumber = Math.random() * (customerMax - customerMin) + customerMin;
  return Math.floor(randomNumber);
}
//Global Access Point-------------------------------------------------------------------------------------------------
var everyLocation = [];
var hours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
var salmonTable = document.getElementById('myTable');

//  TABLE HEADER //

var trElement = document.createElement('tr');
var thElement = document.createElement('th');
thElement.textContent = 'Location';
trElement.appendChild(thElement);

//populating the table header

for( var i = 0; i < hours.length; i++){
  //debugger;
  var thEl = document.createElement('th');
  thEl.textContent = hours[i];
  trElement.appendChild(thEl);   // appending the table header
};

var thTotal = document.createElement('th');
thTotal.textContent = 'Totals';
trElement.appendChild(thTotal);
salmonTable.appendChild(trElement);


//Single constructor function
function LocationInfo(name, customerMin, customerMax, customerAverage) {
  this.name = name;
  this.hourlySales = [];
  this.dailyTotal = 0;
  this.customerMin = customerMin;
  this.customerMax = customerMax;
  this.customerAverage = customerAverage;

  // for loops pushing data into array for hourlysales
  this.getHourlySales = function(){
    for (var i = 0; i < hours.length; i++){ //working now as intended
      var cPH = getRandomInt(this.customerMin, this.customerMax);
      var totalCookiePH = Math.floor(cPH * this.customerAverage);
      this.hourlySales.push(totalCookiePH);
    };
  };
  this.getDailySum = function(){
    for (var i = 0; i < this.hourlySales.length; i++){
      this.dailyTotal = this.hourlySales[i] + this.dailyTotal;
    //console.log(this.dailyTotal);
    }
  };
}

var seattleStore = new LocationInfo('Seattle', 23,65, 6.3);
var tokyoStore = new LocationInfo('Tokyo', 3, 24, 1.2);
var dubaiStore = new LocationInfo('Dubai', 11, 38, 3.7);
var parisStore = new LocationInfo('Paris', 20,38,2.3);
var limaStore = new LocationInfo('Lima', 2, 16, 4.6);

everyLocation.push(seattleStore, tokyoStore, dubaiStore, parisStore, limaStore);
//console.log(seattleStore);
//console.log(everyLocation);




//Render time

LocationInfo.prototype.render = function(){               // creating store rows
  this.getHourlySales();
  this.getDailySum();
  var createRow = document.createElement('tr');


  var thElement = document.createElement('th');
  thElement.textContent = this.name;
  createRow.appendChild(thElement);
  salmonTable.appendChild(createRow);

  for( var i = 0; i < hours.length; i++){
    //debugger; // debugger is best friend
    var thEl = document.createElement('th');
    thEl.textContent = this.hourlySales[i];
    createRow.appendChild(thEl);

  }

  var dailySumTotal = document.createElement('td');
  dailySumTotal.textContent = this.dailyTotal;
  createRow.appendChild(dailySumTotal);
};

// FOOTSIES
function lastTotal(){

  var footerRow = document.createElement('tr'); //Append everything to mama <<<<<<

  var footerBox = document.createElement('th');
  footerBox.textContent = 'Total';
  footerRow.appendChild(footerBox);

  var columnTotal = 0;
  var finalTotal = 0;

  for( var i = 0; i < hours.length; i++){
    columnTotal = 0;

    for(var k = 0; k < everyLocation.length; k++){
      columnTotal = columnTotal + everyLocation[k].hourlySales[i];
      finalTotal = finalTotal + everyLocation[k].hourlySales[i];
    }

    var finalLoop = document.createElement('td');
    finalLoop.textContent = columnTotal;
    footerRow.appendChild(finalLoop);
  }
  var finalTotalCell = document.createElement('td');
  finalTotalCell.textContent = finalTotal;
  footerRow.appendChild(finalTotalCell);

  salmonTable.appendChild(footerRow);
}

// CALLING ALL LOCATIONS

function lastRender(){
  for(var i = 0; i < everyLocation.length; i++)
    everyLocation[i].render();

}
lastRender();
lastTotal();

//Building an event form handler

var form = document.getElementById('NewStore');
form.addEventListener('submit', subWork);

function subWork(event){
  event.preventDefault();
  var name = event.name.value;
  var minCust = parseInt(event.target.minCustomers.value);
  var maxCust = parseInt(event.target.maxCustomers.value);
  var avgSale = parseInt(event.target.avgSales.value);

  var newCookie = new LocationInfo(name, minCust, maxCust, avgSale);
  console.log(newCookie);
  everyLocation.push(subWork);
  //add separate render maybe?

}







