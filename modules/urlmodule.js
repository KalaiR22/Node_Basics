const url = require('url');

const myurl = new URL('https://mywebsite.com:8000/hello.html?id=100&status=active')

console.log(myurl.href)
//domain name host(give port)

console.log(myurl.host)
//domain name host( does not give port)
console.log(myurl.hostname)
//pathname
console.log(myurl.pathname)

//search
console.log(myurl.search)

//searchparams
console.log(myurl.searchParams)

//append
myurl.searchParams.append('abc','123');
console.log(myurl.searchParams)