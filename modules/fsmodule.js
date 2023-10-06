const fs = require('fs');
const path = require('path');

//create a new dir

/*fs.mkdir(path.join(__dirname, '/test'), {}, err=>{
  if (err) throw err;
  console.log('file created...')
})*/

//write to the txt file

/*fs.writeFile(path.join(__dirname,'/test','hello.txt'), "Hello world!", err=>{
    if (err) throw err;
    console.log('written to the file')
},
 )
 fs.appendFile(path.join(__dirname,'/test','hello.txt'), "My name is kalai", err=>{
    if (err) throw err;
    console.log('append to the file')
 }
 )*/

//read the file
/*fs.readFile(path.join(__dirname,'/test','hello.txt'), 'utf-8', (err,data)=>{
    if (err) throw err;
    console.log(data)
 }
 )*/
 //rename the file
  fs.rename(path.join(__dirname,'/test','hello.txt'),
  path.join(__dirname,'/test','Hello.txt'),
  err=>{
    if (err) throw err;
    console.log("renamed the file");
  }
  )

 
