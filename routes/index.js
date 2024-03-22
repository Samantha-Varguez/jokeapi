const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();
router.get('/', (req, res) => res.send('Welcome'));
router.post('/jokes', controllers.createJoke);
router.get('/jokes', controllers.getAllJokes);
module.exports = router;
