var express = require('express');
var router = express.Router();
 // Require the controller that exports To-Do CRUD functions
var postsCtrl = require('../controllers/posts');

router.get('/', postsCtrl.index);
router.get("/new", postsCtrl.new);
router.post("/", postsCtrl.create);
router.get("/:id/edit", postsCtrl.show);
router.put("/:id/edit", postsCtrl.update);
router.delete("/:id/edit", postsCtrl.delete);


module.exports = router;