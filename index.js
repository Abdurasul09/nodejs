const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url);
    res.write("<h1>Hello world</h1>")
    res.end()
})

server.listen(3000, () => {
    console.log('Server has been started on port: 3000');
})