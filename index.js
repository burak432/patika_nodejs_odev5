const http = require("node:http");
const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h2>index sayfasina hosgeldiniz</h2>");
  } else if (url === "/hakkimda") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h2>hakkimda sayfasina hosgeldiniz</h2>");
  } else if (url === "/iletisim") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write("<h2>iletisim sayfasina hosgeldiniz</h2>");
  } else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h2>404 sayfa bulunamadi</h2>");
  }
  res.end();
});

const port = 5000;
server.listen(port, () => {
  console.log(`server is running on port : ${port}`);
});
