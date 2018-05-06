// generate projected cost flows
var fs = require('fs');

var data = fs.readFileSync("sfa1516.json"); 

console.log(data[2]);


var mapping = [{"Bracket":"1","upper":"30000","lower":"0"},
            {"Bracket":"2","upper":"48000","lower":"30001"},
            {"Bracket":"3","upper":"75000","lower":"48001"},
            {"Bracket":"4","upper":"110000","lower":"75001"},
            {"Bracket":"5","upper":"","lower":"110001"}];
            
var incomeVars = ["NPT412","NPT422","NPT432","NPT442","NPT452"];

getBracket = function(income){
    //bracket check descending
    //returns associated income quintile
    quint = 0;

    for (i=4; i>=0; i--){
        if (income >= mapping[i].lower) {
            var quint = i+1;
            break;
        };
    };
    return quint;
};

getBracketVar = function(bracket){

    indexVar = incomeVars[bracket];
    return indexVar;
};



getNetSchoolCost = function(income,schoolName){

    netVariable = getBracketVar(getBracket(income));
    schoolNetCost = data[schoolName][netVariable];

};
console.log(data[1]["Massachusetts Institute of Technology"]);

//console.log(getNetSchoolCost(80000,"Massachusetts Institute of Technology"));


