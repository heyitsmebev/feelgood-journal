const Post = require('../models/post');


function index(req, res) {
  Post.find({}, function (err, posts) {
    res.render("posts", { title: "All Entries", posts });
  });
}

function show(req, res) {
  Post.findById(req.params.id, function (err, results) {
    res.render("edit", { title: "Journal Entry Detail", results });
  });
}

function newPost(req, res) {
  res.render("posts", { title: "Add Journal Entry For Today" });
}

function create(req, res) {
  var post = new Post(req.body);
  post.save(function (err) { //save is a method in mongoose that saves to database
    // one way to handle errors
    if (err) return res.redirect("/");
    // for now, redirect right back to new.ejs
    res.redirect("/home");
  });
}

function updatePost(req,res){
  console.log("this is the body " + req.body)

  Post.findByIdAndUpdate(req.params.id, req.body, function(err, results){
    if (err) {
      return res.redirect("error");
    } else {
      
      res.redirect('/story');
      console.log("this is the body " + req.body)
    }
});
}


module.exports = {
  index,
  new: newPost,
  create,
  show,
  update: updatePost
  };