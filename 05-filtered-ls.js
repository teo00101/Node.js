const fs = require('fs');
const path = require('path');

const dir = process.argv[2];
const extension = '.' +process.argv[3];

fs.readdir(dir,(err,files)=>{
    if(err){
       console.log('Error'); 
    }
    for(let i=0;i<files.length;i++){
        if(path.extname(files[i]) === extension)
            console.log(files[i]);
    }
});