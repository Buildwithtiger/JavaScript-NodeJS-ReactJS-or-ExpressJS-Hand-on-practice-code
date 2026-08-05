import * as fs from 'node:fs/promises';

async function createfile(pathname){
    await fs.writeFile(pathname,'hello java script \n');
    await fs.appendFile(pathname,'hellow node js');
     console.log('file has been created');
}
createfile('./asynchronizes.txt');