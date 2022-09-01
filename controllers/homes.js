const Home = require('../models/post');

function index(req, res) {
  Home.find({}, function (err, results) {
    res.render("home", { title: "This is home page", results });
  });
}

module.exports = {
  index,
};
