var express = require('express');
var router = express.Router();
var promise = require('promise');
var usercontroller = require('../controller/userController')
/* GET users listing. */
router.get('/getdata', function (req, res, next) {
  usercontroller.getUsers(req.body).then((result) => {
    res.send(result);
  }).catch((error) => {
    res.send(error)
  })
});
router.post('/insertdata', function (req, res, next) {
  usercontroller.addUser(req.body).then((result) => {
    res.send(result);
  }).catch((error) => {
    res.send(error)
  })
});

module.exports = router;
