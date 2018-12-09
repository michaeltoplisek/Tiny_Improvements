const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public/index.html"));
} else {
  app.use(express.static("./client/public"));
}

var databaseUri = 'mongodb://localhost/tinyimprovements';

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
} else {
  mongoose.connect(databaseUri)
}

require('./routes/routes.js')(app);


app.listen(PORT, function() {
  console.log(`App running on port ${PORT}`);
});