const getgreetingmsg= require('./greater');
const name=process.argv[2];
const timee=new Date().getHours(); //24 hours
console("hours".timee);

const greatthings = getgreetingmsg(timee)
console.log('${greatthings},${name}');