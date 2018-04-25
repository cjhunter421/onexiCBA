payscale.one = function(){

    var majors = ['humanities', 'computer-science', 'social-sciences', 'art', 'engineering',
    'business', 'education', 'communication', 'physical-and-life-sciences'];

    var urls = [];

    var i;
    for(i = 0; i < majors.length;i++){
        urls.push('https://www.payscale.com/college-salary-report/common-jobs-for-majors/'
        +majors[i]);
}
return urls;
};

payscale.two = function(){



    var urls = exercise.one();
    var numFiles = 0;

    urls.forEach((url,index)=>{
        var res = request('GET',url);
        var filename =  majors[index] + '.txt';
        fs.writeFileSync(filename,res.getBody().toString());
        numFiles+=1;
    } );

    return numFiles;

};

payscale.three = function(input){
    var data = fs.readFileSync(input+'.txt')
    var input+'Data' = data.substring(data.search("collegeSalaryReportData"),data.search(";"))

    return inputData;
};
