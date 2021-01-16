const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const compression = require("compression");

require('dotenv').config()

//const PORT = 3000;
const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// mongoose.connect("mongodb://localhost/budget", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });


/*
mongoose.connect(
  
  process.env.MONGODB_URI ||
   "mongodb+srv://User-Arurian:Userarun@123@cluster0.vsieu.mongodb.net/workoutPlan?retryWrites=true&w=majority", { useNewUrlParser: true });
*/
// mongoose.connect(
//   process.env.MONGODB_URI || 'mongodb://localhost/workoutPlan',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
//   }
// );


//mongoose.connect(process.env.MONGODB_URI || process.env.MONGODB_ATLAS, 
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://User-Arurian:Userarun@123@cluster0.vsieu.mongodb.net/budgetTracking?retryWrites=true&w=majority", 
  {   w: "majority",
      useNewUrlParser: true, 
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    });

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});