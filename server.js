const express = require("express");
const app = express();
const mongoose = require("mongoose")
const cors = require("cors");

// Sets up the Express App
var PORT = process.env.PORT || 3001;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const corsOptions ={
  origin: "https://bjh-shopify-intern.herokuapp.com"
}
// corsOptions
app.use(cors(corsOptions));
// Static directory
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
  }
/////////////////////////////////
const routes = require("./routes/backendRoutes.js")

// Routes

app.use(routes)

app.use(express.static("client/build"));

// Right before your app.listen(), add this:
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

mongoose.connect(
  process.env.MONGODB_URI ||'mongodb://localhost/shoppies', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});




  app.listen(PORT, function () {
    console.log("App listening on PORT http://localhost:" + PORT);
  });
