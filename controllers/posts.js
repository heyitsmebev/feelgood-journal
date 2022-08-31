const Post = require('../models/post');

function index(req, res) {
    res.render('post', { //render is from the view
      posts: Post.getAll() //this posts is being passed to the view
    });
} 

function show(req, res) {
  res.render('home', {
      post: Post.getOne(req.params.id),
      //id matches the url 
    // Would like to display the number of the todo within the list
    //getOne is from the model 
    postNum: Post.getAll().findIndex(post => post.id === parseInt(req.params.id)) + 1
  });
}

function newPost(req, res) {
  res.render('post')
}

function create(req, res) {
  Post.create(req.body);
  res.redirect('home')
}

function editPost(req, res) {
  res.render('edit', {
    post: Post.getOne(req.params.id)
  })
}

function change(req, res) {
  console.log(req.body)
  Post.changeOne(req.body, req.params.id)
  res.redirect('/home')
}

module.exports = {
    index,
    show,
    new: newPost,
    create,
    edit: editPost,
    change
  };