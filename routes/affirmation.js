const express = require('express');
const router = express.Router();
const affirmationCtrl = require('../controllers/affirmations');

// affirmations
// http://localhost:3000/posts/123/reviews
router.post("/posts/:id/affirmations", affirmationCtrl.create);


module.exports = router;