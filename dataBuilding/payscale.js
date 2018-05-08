
var req = require('sync-request');
var minify = require('html-minifier').minify;
var cheerio = require('cheerio');
var fs = require('fs');

var payscale = {};

//input supercategories manually
var majors = ['humanities', 'computer-science', 'social-sciences', 'art', 'engineering',
'business', 'education', 'communication', 'physical-and-life-sciences'];

payscale.one = function(){
    //create a list of the urls of the supercategories to be parsed
    var urls = [];

    var i;
    for(i = 0; i < majors.length;i++){
        urls.push('https://www.payscale.com/college-salary-report/common-jobs-for-majors/'
        +majors[i]);
}
return urls;
};

payscale.two = function(){
    //for each url, pull the html text
    var urls = payscale.one();
    var numFiles = 0;

    urls.forEach((url,index)=>{
        var res = req('GET',url);
        var filename =  majors[index] + '.txt';
        fs.writeFileSync(filename,res.getBody().toString());
        numFiles+=1;
    } );

    return numFiles;

};

payscale.sub = function(input,startString,endString){
    //for a generic supercategory, and desired starting strings and ending strings
    //locate the indexes of those strings
    text = fs.readFileSync(input+".txt").toString();
    start = text.indexOf(startString);
    end = text.indexOf(endString,start);

    //return an arry with the file contents and the desired indexes
    output = [text,start,end];
    return output;

}

payscale.three = function(superCategory){
    //take in a supercategory and return the JSON of the sub-occupations
    data = payscale.sub(superCategory," var collegeSalaryReportData",";");
    //pull the required substring of the json formatted text
    pulledData = data[0].substring(data[1]+31,data[2]);

    pulledData = JSON.parse(pulledData);
    console.log(pulledData);

    return pulledData;
};

payscale.two()

console.log(payscale.three("engineering"));
