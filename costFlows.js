// generate projected cost flows
var fs = require('fs');

var data = JSON.parse(fs.readFileSync("sfaSmall.json")); 

nameMap = function(data){
    map = [];
    for (var i=0; i<data.length; i++){
        map[data[i].SchoolName] = i;
    };
    return map;
};
var nameMap = nameMap(data);

console.log(data[3101].SchoolName);
console.log(nameMap["Massachusetts Institute of Technology"]);


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
    //iterate downward through the possible income brackets until the correct quint is found
    for (i=4; i>=0; i--){
        if (income >= mapping[i].lower) {
            var quint = i+1;
            break;
        };
    };
    return quint;
};

getBracketVar = function(bracket){
    //get the variable for the associated income bracket
    indexVar = incomeVars[bracket];
    return indexVar;
};

getNetSchoolCost = function(income,SchoolName){
// find the relevant dataset field
    var netVariable = getBracketVar(getBracket(income));
//find the index of the school in the dataset
    var schoolIndex = nameMap[SchoolName];
//return the value in the field for that school
    var schoolNetCost = data[schoolIndex][netVariable];
    return schoolNetCost;

};


console.log(getNetSchoolCost(80000,"Massachusetts Institute of Technology"));


