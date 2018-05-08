var fs = require('fs');

var fields = 
['humanities', 
'computer-science', 
'social-sciences', 
'art', 
'engineering',
'business', 
'education', 
'communication', 
'physical-and-life-sciences'];


for (i=0; i<fields.length; i++){
    var field = JSON.parse(fs.readFileSync(fields[i]+'clean.json'));
    var eval(fields[i]+'Majors') = [];
    for (i=0; fields[i].length; i++){
        if eval(fields[i]+'Majors').includes(fields[i].Major){

        }
        else{
            eval(fields[i]+'Majors').push(fields[i]);
        }
    }
}


/*


var artMajors = [];
art.forEach(element => {
    console.log(element.Major)
    if (artMajors.includes(element.Major)){
        
    }
    else{
        artMajors.push(element.Major)
    }
});


var artCareers = [];
art.forEach(element => {
    console.log(element['Job Title']);
    if (artCareers.includes(element['Job Title'])){
        
    }
    else{
        artCareers.push(element['Job Title'])
    }
});

var artMajorsJSON = JSON.stringify(artMajors);
var artCareersJSON = JSON.stringify(artCareers);
console.log(artMajorsJSON);
console.log(artCareersJSON);

*/

/*
// write to a new file named 2pac.txt
fs.writeFile('2pac.txt', lyrics, (err) => {  
    // throws an error, you could also catch it here
    if (err) throw err;

    // success case, the file was saved
    console.log('Lyric saved!');
});
*/
