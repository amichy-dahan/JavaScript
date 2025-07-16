const fs  = require("fs");



function readFileWithErrorHandling(file, callback) {
    
  fs.readFile(file, (err, data) => {
    if (err) {
           if(err.code){
            console.log(err.code)
           }else if(err.errno){
           
            console.log(err.cause.message)
           }
     } else {
      
      callback(` ${data.length} `);
    }
  });
}


readFileWithErrorHandling('data.txt', (result) => {
      console.log(result)
});


