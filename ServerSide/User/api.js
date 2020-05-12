const router = require("express").Router();
const controlers = require("./controlers");
const Routes = require("./constants");
const helper = require("../helper/helper");
const { uploadAvatar } = require("../helper/");
const userParams = require("./params");

router.param("user", userParams);

//SECTION add user
router.post(Routes.AddUser, controlers.adduser);

//SECTION user login
router.post(Routes.Login, controlers.login);

//SECTION update user
router.put(
  Routes.update,
  helper.required,
  uploadAvatar.single("avatar"),
  controlers.updateUser
);

//SECTION follow user
router.post(Routes.follow, helper.required, controlers.followUser);

//SECTION logout user
router.post(Routes.Logout, helper.optional, controlers.logout);

module.exports = router;
