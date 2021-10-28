// var express = require('express');
import express from 'express'
const router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('users works');
});

module.exports = router;
