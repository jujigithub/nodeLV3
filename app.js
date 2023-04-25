const express = require("express");
const app = express();
const port = 3018;
const cookieParser = require("cookie-parser");
const postsRouter = require("./routes/posts.js");
const authRouter = require("./routes/auth.js");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/api", [postsRouter, authRouter]);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸어요!");
});
