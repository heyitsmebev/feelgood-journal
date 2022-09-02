const Post = require('../models/post');


function index(req, res) {
  Post.find({}, function (err, posts) {
    res.render("posts", { title: "Mood Journal | Entry", posts });
  });
}

function show(req, res) {
  Post.findById(req.params.id, function (err, results) {
    res.render("edit", { title: "SHOW", results });
  });
}

function newPost(req, res) {
  res.render("posts", { title: "NEW" });
}

function create(req, res) {
  const post = new Post(req.body);
  post.user = req.user._id;
  post.userName = req.user.name;
  post.userAvatar = req.user.avatar;
  console.log(req.body);
  console.log(post)
  post.save(function(err) {
  if (err) return res.render('posts/new', { title: 'new request form'});
  res.redirect('/home');
  });
}

function updatePost(req,res){
  Post.findByIdAndUpdate(req.params.id, req.body, function(err, results){
    res.redirect('/home');
});
}


function deletePost(req, res, next) {
  Post.findByIdAndDelete(req.params.id, function (err, results) {
    if (err){
    }
    else{
      res.redirect('/home');
    }
});
}


module.exports = {
  index,
  new: newPost,
  create,
  show,
  update: updatePost,
  delete: deletePost
  };