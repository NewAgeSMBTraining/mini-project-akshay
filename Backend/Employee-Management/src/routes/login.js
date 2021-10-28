import express from 'express'
const router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Login works');
});

module.exports = router;
