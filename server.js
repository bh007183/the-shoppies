const express = require("express");
const app = express();
const mongoose = require("mongoose")
const cors = require("cors");

// Sets up the Express App
var PORT = process.env.PORT || 3001;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// corsOptions
app.use(cors());
// Static directory
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
/////////////////////////////////
const routes = require("./routes/backendRoutes.js")
// const htmlroutes = require("./routes/html-route.js")

// Routes

app.use(routes)
// app.use(htmlroutes)

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
