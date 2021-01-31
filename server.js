const http = require('http')
const url = require('url')
const fs = require('fs')

http.createServer((req, res) => {
  var q = url.parse(req.url, true);
  var filename = "." + q.pathname;
  fs.readFile(filename, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' })
      return res.end('404 not found')
    }
    res.writeHead(200, { 'Content-type': 'text/html' })
    res.write(data)
    return res.end()
  })
}).listen(8080)

console.log('Serwer is up on http://localhost:8080')