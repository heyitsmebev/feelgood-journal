const Home = require('../models/post');

function index(req, res) {
  Home.find({}, function (err, results) {
    res.render("home", { title: "Mood Journal | Home", results });
  });
}

module.exports = {
  index,
};
