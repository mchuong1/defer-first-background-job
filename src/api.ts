const express = require("express");

const helloWorld =  require("./defer/helloWorld");

const app = express();
const port = 3000;

app.get("/", async (req, res) => {
  // calling a background function triggers an execution on Defer
  await helloWorld("Charly");

  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
