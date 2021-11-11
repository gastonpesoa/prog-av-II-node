const http = require('http')
const PUERTO = 3000

const app = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html; charset = UTF-8" })
    res.write("<h1>Hola Mundooooo!</h1>")
    res.end()
})

app.listen(PUERTO)
console.log("Servidor escuchando en el puerto" + PUERTO)