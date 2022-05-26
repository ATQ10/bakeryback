const express = require("express"),
  app = express(),
  mongoose = require('mongoose');

require("dotenv")
  .config();

//Connect to database
try {
    mongoose.connect("mongodb+srv://lamolienda:lamolienda2022@lamoliendabakery.fgimn.mongodb.net/?retryWrites=true&w=majority", {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    console.log("connected to db");
  } catch (error) {
    handleError(error);
  }
  process.on('unhandledRejection', error => {
    console.log('unhandledRejection', error.message);
  });

// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({
  extended: true
}));

//Router
var router = require('./routes')
app.use('/api', router)

//setup server to listen on port 3030
app.listen(process.env.PORT || 3030, () => {
  console.log("Server is live on port 3030");
})