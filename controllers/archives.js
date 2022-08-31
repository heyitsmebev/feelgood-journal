const Archives = require('../models/post');

function getAll() {
    return postsdb;
  }

function index(req, res) {
    res.render('archive', { //render post from the view's folder 
      posts: Archives.getAll() //this "posts" is being passed to the view
    });
} 


module.exports = {
    getAll,
    index
  };