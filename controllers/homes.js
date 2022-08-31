const Home = require('../models/post');

function getAll() {
    return postsdb;
  }

function index(req, res) {
    res.render('home', { //render is from the view
      posts: Home.getAll() //this posts is being passed to the view
    });
} 



module.exports = {
    getAll,
    index
  };