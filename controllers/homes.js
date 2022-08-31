const Home = require('../models/post');

function index(req, res) {
  Home.find({}, function (err, results) {
    res.render("home", { title: "This is home page", results });
  });
}

function show(req, res) {
  Home.findById(req.params.id, function (err, results) {
    res.render("home", { title: "Journal Entry Detail", results });
    console.log(req.params.id)

  });
}

module.exports = {
  index,
  show
};
