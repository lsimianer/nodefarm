const fs = require('fs');


//blocking, synchronous way
// const textIn = fs.readFileSync('./starter/txt/input.txt', 'utf-8');
// console.log(textIn);
// const textOut = `This what we know about the avocado!! ${textIn}\nCreated on ${Date.now()}`;
// fs.writeFileSync('./starter/txt/input.txt', textOut);
//  console.log('file Written');
 // writes to file 

 //non-blocking, asynchronous way
fs.readFile('./starter/txt/start.txt', 'utf-8', (err, data) => {
console.log(data);
})
console.log('will read file');

http.createServer((req, res) =>{
res.end('Hello from the server!')
});