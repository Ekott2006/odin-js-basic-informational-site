const { log } = require("node:console");
const { readFile } = require("node:fs/promises");
const http = require("node:http");

const files = {
  "/": "index.html",
  "/about": "about.html",
  "/contact-me": "contact-me.html",
};

const server = http.createServer();

server.on("request", async (request, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  const filename = files[request.url] ?? "404.html";
  res.end(await readFile(filename));
});

server.listen(8080, () => log("Server Running"));
