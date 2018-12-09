const User = require('../modules/User.js');
const Kudo = require('../modules/Kudo.js');
const path = require('path')

module.exports = function (app) {

  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + './client/public/index.html'))
  })

    app.post('/api/kudo', function (req, res) {
        Kudo.create(req.body)
        .then(function (data) {
          res.json(data);
        })
        .catch(function (err) {
          res.json(err);
        });
      });

      app.get('/api/kudo', function (req, res) {
        Kudo.find()
        .populate('User')
        .then(function (data) {
          res.json(data);
        })
        .catch(function (err) {
          res.json(err);
        });
      });

      app.get('/api/user', function (req, res) {
        User.find()
        .then(function (data) {
          res.json(data);
        })
        .catch(function (err) {
          res.json(err);
        });
      });
}