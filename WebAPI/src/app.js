const http = require('http');
const express = require('express');

const app = express();

const hostname = "127.0.0.1";
const port = 8080;

app.set("port", port)

app.use((request, response, next) => {
    response.status(404).send();
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`);
});

