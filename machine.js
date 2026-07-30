import chalk from 'chalk';

import os from 'node:os'


function monitor(){
    


const oldcpus =os.cpus();
// console.log('oldcpus',oldcpus);
setTimeout(()=>{

const newcpus=os.cpus();


const usage=newcpus.map((cpu, i)=>{
    return{
        core: i,
        usage:calculatecpus(oldcpus[i], newcpus[i]) + '%',
    };
});
console.clear();
console.table(usage);
const usedmemory=(os.totalmem() - os.freemem()) / (1024*1024*1024);

console.log('Memory used:${usedmemory.toFixed(2)}GB / ${os.totalmem()/(1024*1024*1024).toFixed(2)} GB');

},1000)

}
function calculatecpus (oldcpus, newcpus){
    const oldtotal = Object.values(oldcpus.times).reduce((a, b)=>a + b);
    const newtotal = Object.values(newcpus.times).reduce((a, b)=>a + b);

    const idle=newcpus.times.idle - oldcpus.times.idle;
    const total=newtotal - oldtotal;
    const used= total-idle;
    return ((100*used)/total).toFixed(1);

}
setInterval(monitor, 1000);

// oldcpus [
//   {
//     model: 'Apple M2',
//     speed: 2400,
//     times: { user: 4331950, nice: 0, sys: 2419440, idle: 24058150, irq: 0 }
//   },
//   {
//     model: 'Apple M2',
//     speed: 2400,
//     times: { user: 4101500, nice: 0, sys: 2135170, idle: 24597590, irq: 0 }
//   },
//   {
//     model: 'Apple M2',
//     speed: 2400,
//     times: { user: 3690540, nice: 0, sys: 1756110, idle: 25427150, irq: 0 }
//   },
//   {
//     model: 'Apple M2',
//     speed: 2400,
//     times: { user: 3175930, nice: 0, sys: 1449020, idle: 26286940, irq: 0 }
//   },
//   {
//     model: 'Apple M2',
//     speed: 2400,
//     times: { user: 4082540, nice: 0, sys: 349870, idle: 26583530, irq: 0 }
//   },
//   {
//     model: 'Apple M2',
//     speed: 2400,
//     times: { user: 4203800, nice: 0, sys: 264330, idle: 26555860, irq: 0 }
//   },
//   {
//     model: 'Apple M2',
//     speed: 2400,
//     times: { user: 2624600, nice: 0, sys: 167160, idle: 28239120, irq: 0 }
//   },
//   {
//     model: 'Apple M2',
//     speed: 2400,
//     times: { user: 1013590, nice: 0, sys: 98120, idle: 29925110, irq: 0 }
//   }
// ]