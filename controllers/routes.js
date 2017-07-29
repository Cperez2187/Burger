const express = require('express');
const router = express.Router();

// Set up routes
router.get('/', function(req, res) {
    res.render('index');
});

// Export routes for server.js to use
module.exports = router;