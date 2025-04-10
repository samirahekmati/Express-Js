const express = require("express");
const app = express(); // invoke creatApplication function in express module
const port = 3000;


app.get("/", (req, res) => {
  console.log("inside get callback");
  res.send("<h1> Welcome to the Home GET page! </h1>");
});

app.post("/", (req, res) => {
  console.log("inside post callback");
  res.send("<h1> Welcome to the Home POST page!! </h1>")
});

app.delete("/", (req, res) => {
  console.log("inside delete callback");
});

app.put("/", (req, res) => {
  console.log("inside put callback");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
