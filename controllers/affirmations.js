const Affirmation = require('../models/post');
const User = require('../models/user');

function create(req, res) {
    // Find the movie to embed the review within
    Affirmation.findById(req.params.id, function(err, results) {
  
      // Add the user-centric info to req.body (the new review)
      req.body.user = req.user._id; // comes from server.js req.user line 38 area
      req.body.userName = req.user.name; //
      req.body.userAvatar = req.user.avatar;
  
      // Push the subdoc for the review
      results.affirmation.push(req.body);
      // Always save the top-level document (not subdocs)
      results.save(function(err) {
        res.redirect('/home');
      });
    });
  }

module.exports = {
    create
};