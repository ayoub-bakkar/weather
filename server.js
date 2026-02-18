// express
const express = require("express");
const app = express();
const port = 8080;
//
const path = require('path');
const weatherRouter = require(path.join(__dirname, 'routes', 'weatherRouter.js'))
const public = path.join(__dirname, "public")

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(public))
app.use('/', weatherRouter)

app.listen(port, () => {
  console.log(`the server listen port : ${port}`);
});
