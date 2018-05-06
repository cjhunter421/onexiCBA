//convert to json from xlsx


 xlsxj = require("xlsx-to-json");
/*

  
  xlsxj({
    input: "schoolCostData.xlsx",
    output: "varlist.json",
    sheet: "varlist"
  }, function(err, result) {
    if(err) {
      console.error(err);
    }else {
      console.log("It worked");
    }
  });
*/
  console.log("running");
   xlsxj({
     input: "schoolCostData.xlsx",
     output: "sfaSmall.json",
     sheet: "smallData"
   }, function(err, result) {
     if(err) {
       console.error(err);
     }else {
       console.log("It worked");
     }
   });
