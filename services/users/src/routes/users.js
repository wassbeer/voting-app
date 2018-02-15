const express = require('express'),
router = express.Router(),
mongoose = require('../db/queries');

router.get('/', (req, res, next) => {
  mongoose.findAllUsers
  .then((users) => {
    res.status(200).json({
      status: 'success',
      data: users
    });
  })
  .catch((err) => {
    res.status(500).json({
      status: 'error',
      data: err
    });
  });
});

module.exports = router;
