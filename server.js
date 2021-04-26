const express = require("express");
const app = express();
const mongoose = require("mongoose")
// const cors = require("cors");

// Sets up the Express App
var PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// corsOptions
// app.use(cors());
// Static directory
app.use(express.static("public"));
/////////////////////////////////
const routes = require("./routes/backendRoutes.js")

// Routes

app.use(routes)

mongoose.connect(
  process.env.MONGODB_URI ||'mongodb://localhost/shoppies', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});




  app.listen(PORT, function () {
    console.log("App listening on PORT http://localhost:" + PORT);
  });
