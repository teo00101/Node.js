const fs = require('fs');

fs.readFile(process.argv[2],'utf8',(err,data) => {
    if(err){
        console.log('Error');
    }
    const lines= data.split('\n').length - 1;
    console.log(lines);

});

