const http = require("http")
const app = require("./app");

const port = process.env.port || 8000;
const server = http.createServer(app);

app.listen(port)

module.exports = server;