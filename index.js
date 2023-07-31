const express = require("express");
const app = express();
const { getClient } = require("./mqtt");

getClient();

app.listen(3050, () => {
  console.log("app running on port 3050 for mqtt");
});

module.exports = app;
