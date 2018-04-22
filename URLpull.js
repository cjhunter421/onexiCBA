
var majors = ['humanities', 'computer-science', 'social-sciences', 'art', 'engineering', 
    'business', 'education', 'communication', 'physical-and-life-sciences'];


// add loop here of dimension of the payscale subcategories    
var url = 'https://www.payscale.com/college-salary-report/common-jobs-for-majors';
    fileName = './'+majors[i];
    savePageHtml(url,fileName);


    // get the homepage url
    function savePageHtml(url,filename){
        var res = req('GET',url);
        fs.writeFileSync(filename,res.getBody().toString());
    };

    // User cheerio to parse html
    function extractUrls (hmtlFileName){
        var data = fs.readFileSync(hmtlFileName);
        var $ = cheerio.load(data);
        var urls = [];
        $('A').each(function(i,element){
            urls.push($(element).attr());
        });
        return urls;
    };

    var homeUrls = extractUrls('./'+majors[i]);

      // Filter bad urls - not 'm'
    function filterUrls (badUrls){
        var filteredUrls = badUrls.map(function(object){
            var stringified = object.href.toString();
            if (stringified.charAt(0) === 'm' && stringified.includes('.html')
            && stringified !== undefined){
                return object.href;
            };

        });
        return filteredUrls;
    }
    var departmentUrls = filterUrls(homeUrls);
    var finalUrls = [];

    //iterate over the departments
    departmentUrls.forEach(function(element){
        urlname =  'http://student.mit.edu/catalog/' + element;
        if (urlname != 'http://student.mit.edu/catalog/undefined'){
             fileName = './experiment/' + element;
             savePageHtml(urlname,fileName);
             finalUrls.push(urlname);
        }
     });

    return finalUrls;

};