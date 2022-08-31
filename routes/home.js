var express = require('express');
var router = express.Router();
 // Require the controller that exports To-Do CRUD functions
var homesCtrl = require('../controllers/homes');

router.get('/', homesCtrl.index);
 // All actual paths start with "/posts"

module.exports = router;