const path = require('path');

//get basename of the file
console.log(path.basename(__filename));

//get dir name
console.log(path.dirname(__filename));
 
//get extension of the file
console.log(path.extname(__filename));

//concatenate the path
console.log(path.join(__filename,'home'));