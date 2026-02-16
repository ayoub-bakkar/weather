// express
const express = require("express");
const app = express();
const port = 8080;
//
const path = require('path');
const weatherRouter = require(path.join(__dirname, 'routes', 'weatherRouter.js'))


app.use(express.json());
app.use('/', weatherRouter)

app.listen(port, () => {
  console.log(`the server listen port : ${port}`);
});
