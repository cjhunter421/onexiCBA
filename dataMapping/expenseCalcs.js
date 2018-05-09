
//base case
var housing = 1231;
var grocery = 300;
var utilities = 200;
var transportation = 100;
var health = 50;
var misc = 40;


var data = {};

//include cost of living index
$.getJSON("https://raw.githubusercontent.com/cjhunter421/onexiCBA/master/dataBuilding/costOfLiving.json", function(data){
    var data = data;
    
});

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

        adjustments = [ data[state]["Housing"],
                        data[state]["Grocery"],
                        data[state]["Utilities"],
                        data[state]["Transportation"],
                        data[state]["Health"],
                        data[state]["Misc."]];
        
        var adjustedExpenses = expenses[i]*adjustments[i];
    };
    return adjustedExpenses;
};

console.log(getAdjustedExpense(data,"New York",expenses));