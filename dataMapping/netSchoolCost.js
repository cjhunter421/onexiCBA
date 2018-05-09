// generate projected cost flows
 //var fs = require('fs');

 var data = {};

 $.getJSON("https://raw.githubusercontent.com/cjhunter421/onexiCBA/master/dataBuilding/trueCost.json", function(d){
       data = d;
       console.log('inside getJSON');
       console.log('1');
       console.log(data);
 });


setTimeout(

$(document).ready(function(){




//var data = JSON.parse(fs.readFileSync("trueCost.json")); 
//console.log(data[0]);



/*
var mapping = [{"Bracket":"1","upper":"30000","lower":"0"},
            {"Bracket":"2","upper":"48000","lower":"30001"},
            {"Bracket":"3","upper":"75000","lower":"48001"},
            {"Bracket":"4","upper":"110000","lower":"75001"},
            {"Bracket":"5","upper":"","lower":"110001"}];
*/
            

    /*
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
    */



/*
getBracketVar = function(bracket){
    //get the variable for the associated income bracket
    indexVar = incomeVars[bracket];
    return indexVar;
};
*/


    getNetSchoolCost = function(data,income,SchoolName){

        /*
        nameMap = function(data){
            map = {};
            for (var i=0; i<data.length; i++){
                map[data[i]['institution name']] = i;
            };
            return map;
        };
        */

        nameMap = function(data){
            map = [];
            for (var i=0; i<data.length; i++){
                map[data[i].SchoolName] = i;
            };
            return map;
        };
        var nameMap = nameMap(data);
        console.log('logging nameMap');
        console.log('2');
        console.log(nameMap);


        var incomeVars = 
        ["ANP(income 0-30,000)",
        "ANP(income 30,001-48,000)",
        "ANP(income 48,001-75,000)",
        "ANP(income 75,001-110,000)",
        "ANP(income over 110,000)"];

        getBracket = function(income){

            if (income == 'Less than $30,000'){
                return incomeVars[0];
            }
            else if (income == '$30,001 to $48,000'){
                return incomeVars[1];
            }
            else if (income == '$48,001 to $75,000'){
            return incomeVars[2];
            }
            else if (income == '$75,001 to $110,000'){
                return incomeVars[3];
            }
            else{
                return incomeVars[4];
            };
        console.log('this is income bracket');

        


        // find the relevant dataset field
            var netVariable = getBracket(income);
        //find the index of the school in the dataset
            var schoolIndex = nameMap[SchoolName];
        //return the value in the field for that school
            var schoolNetCost = data[schoolIndex][netVariable];
            return schoolNetCost;
            console.log('3');
        
        }};


}),2000);



 //console.log(getNetSchoolCost('Less than $30,000',"Massachusetts Institute of Technology"));