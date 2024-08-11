const http = require('http')

const server = http.createServer((req, res) =>{
    console.log(req)
    res.write('<h1>Welcome to my server<h1> <br> <input>form</input>')
    res.end()
})

server.listen(5000)