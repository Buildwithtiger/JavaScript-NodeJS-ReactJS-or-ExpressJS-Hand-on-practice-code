import url from 'url';
const myurl=new URL('http://example.org:8080');
myurl.pathname='a/b/c';
myurl.search='?d=e';
myurl.hash='#fh';
console.log(myurl);