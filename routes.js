const User = require('./modules/User.js');
const Kudo = require('./modules/Kudo.js');

module.exports = function (app) {

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