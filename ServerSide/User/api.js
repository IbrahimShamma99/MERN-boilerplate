var router = require('express').Router();
const controlers = require('./controlers');
const Routes = require("./constants");
const helper = require("../helper/helper");

//SECTION add user
router.post(Routes.AddUser,controlers.adduser);

//SECTION user login 
router.post(Routes.Login, controlers.login);

//SECTION update user
router.put(Routes.update , helper.required , controlers.updateUser);

//SECTION follow user
router.post(Routes.follow , helper.required , controlers.followUser);

//SECTION logout user
router.post(Routes.Logout , helper.optional , controlers.logout);

module.exports = router;