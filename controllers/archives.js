const Archives = require('../models/post');

function index(req, res) {
  Archives.find({}, function (err, results) {
    res.render("archive", { title: "archive", results });
  });
}

module.exports = {
  index,
};
