var express = require('express');
var router = express.Router();
 // Require the controller that exports To-Do CRUD functions
var archiveCtrl = require('../controllers/archives');

router.get('/', archiveCtrl.index);
 // All actual paths start with "/archives"


module.exports = router;