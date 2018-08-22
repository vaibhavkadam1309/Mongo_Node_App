var userController = function () {
}
var usermodel = require('../models/users')
var promise = require('promise');
var connection = require('../connection/connection')
userController.prototype.getUsers = function (params) {
    return new promise(function (resolve, reject) {
        usermodel.find().then(result => {
            resolve(result);
        }).catch(error => {
            reject(error);
        })
    })
}
userController.prototype.addUser = function (params) {  
    return new promise(function (resolve, reject) {
        usermodel.create(params).then(result => {
            resolve(result);
        }).catch(error => {
            reject(error);
        })
    })
}
module.exports = new userController();