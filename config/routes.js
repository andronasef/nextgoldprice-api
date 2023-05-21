const router = require('express').Router();

router.get('/eg', require('../controllers/eg'));

module.exports = router;
