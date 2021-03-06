const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.use(express.static("./client/public"));
}

const MONGOD_URI = process.env.MONGODB_URI || 'mongodb://localhost/tinyimprovements';

mongoose.connect(MONGOD_URI, { useNewUrlParser: true})

require('./routes/routes.js')(app);


app.listen(PORT, function() {
  console.log(`App running on port ${PORT}`);
});