import * as fs from 'node:fs'
function createfile(pathname){
//snyc api

fs.writeFileSync(pathname, "hello node js");
fs.appendFileSync(pathname, "hello everyone");
console.log('file has creted');
}
createfile('./hello.txt');