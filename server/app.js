const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

app.get("/hello", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/board", (req, res) => {
  res.send({ title: "Build Deploy Test" });
});

const path = require("path");
const publicPath = path.join(__dirname, "public");
app.use(express.static(publicPath));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public", "index.html"));
});

// 미들웨어로 등록한 거임  라우팅 아님
// 에러처리 => index.html을 응답 => vue-router가 알아서 처리
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "./public", "index.html"));
});
