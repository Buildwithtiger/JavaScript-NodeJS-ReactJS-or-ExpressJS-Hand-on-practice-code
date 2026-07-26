const fs = require('fs')
fs.readFile('file.txt','utf-8', (err, date)=>{
    console.log(err, data);
})
const a=fs.readFileSync('file.txt')//to read data from file
console.log(a);//read data in numeric formate
console.log(a.toString());//read data in string formate
const b=fs.writeFile('file2.txt','tat is the data to write',()=>{
console.log("write this file");
})
console.log('this fiel is readed by me');
const b=fs.writeFileSync('file2.txt','tat is the data to write',()=>{
console.log("write this file");
})
console.log('this fiel is readed by me');
