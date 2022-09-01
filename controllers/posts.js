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
  Post.findByIdAndUpdate(req.params.id, req.body, function(err, results){
    res.redirect('/home');
});
}

function deletePost(req, res, next) {
  Post.findOne({'posts._id': req.params.id}) //checking the database with the id in url 
  .then(function(results) {
    const result = post.results.id(req.params.id)
    //results is from results._id on line 27
    // if(!result.user.equals(req.user._id)) return res.redirect(`/posts/${post._id}`) //${post} reference the post on line 28
    // if the user is not equal to the current user object, we will redirect 
    result.remove();
    post.save().then(function() {
      res.redirect(`/posts/${posts._id}`)
    }).catch(function (error) {
      return next(error) //up to you, could redirec to homepage
    })
    //we are saving teh data. save() is also a callback function, a promise 

  })
}

function deletePost(req, res, next) {
  Post.findByIdAndDelete(req.params.id, function (err, results) {
    if (err){
        console.log(err)
    }
    else{
      res.redirect('/home');
      console.log("Deleted : ", results);
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