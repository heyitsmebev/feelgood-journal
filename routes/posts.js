var express = require('express');
var router = express.Router();
 // Require the controller that exports To-Do CRUD functions
var postsCtrl = require('../controllers/posts');

router.get('/', postsCtrl.index);
router.get('/new', postsCtrl.new);

 // All actual paths start with "/posts"
router.get('/:id', postsCtrl.show);
router.post('/', postsCtrl.create);

router.get('/:id/edit', postsCtrl.edit);

router.put('/:id', postsCtrl.change);

module.exports = router;