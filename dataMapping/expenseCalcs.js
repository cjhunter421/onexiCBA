
var fs = require('fs');

nameMap = function(data){
    map = [];
    for (var i=0; i<data.length; i++){
        map[data[i].State] = i;
    };
    return map;
};


//base case
var housing = 1231;
var grocery = 300;
var utilities = 200;
var transportation = 100;
var health = 50;
var misc = 40;

//include cost of living index
var locAdjustmentData = JSON.parse(fs.readFileSync("costOfLiving.json"));

//locate states in adjustment data
var nameMap = nameMap(locAdjustmentData);

//INPUT city
var cityToState = {"Atlanta" : "Georgia",
                   "New York" : "New York",
                   "Los Angeles" : "California",
                   "Philadelphia" : "Pennsylvania",
                   "Houston" : "Texas",
                   "Seattle" : "Washington",
                   "San Francisco" : "California",
                   "Chicago" : "Illinois",
                   "Boston" : "Massachusetts",
                   "Washington DC" : "District of Columbia"                  
};




expenses = [housing,grocery,utilities,transportation,health,misc];

function getAdjustedExpense(data,city,expensesList){
    for (i=0;i<expensesList.length;i++){
        
        state = cityToState[city];
        console.log(state);
        stateIndex = nameMap[state];
        console.log(stateIndex);
        adjustments = [ data[stateIndex][Housing],
                        data[stateIndex][Grocery],
                        data[stateIndex][Utilities],
                        data[stateIndex][Transportation],
                        data[stateIndex][Health],
                        data[stateIndex][Misc]];
        
        var adjustedExpenses = expenses[i]*adjustments[i];
    };
    return adjustedExpenses;
};

console.log(getAdjustedExpense(locAdjustmentData,"New York",expenses));