var express = require('express');
var router = express.Router();
 // Require the controller that exports To-Do CRUD functions
var homesCtrl = require('../controllers/homes');

router.get('/', homesCtrl.index);


module.exports = router;