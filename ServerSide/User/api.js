var router = require('express').Router();
const controlers = require('./controlers');
const Routes = require("./constants");
const helper = require("../helper/helper");
var multer = require('multer');

const DIR = './public/';

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});


//SECTION add user
router.post(Routes.AddUser,controlers.adduser);

//SECTION user login 
router.post(Routes.Login, controlers.login);

//SECTION update user
router.put(Routes.update , helper.required , controlers.updateUser);

//SECTION follow user
router.post(Routes.follow , helper.required , controlers.followUser);

router.post('/upload', upload.single('profileImg'),
    (req, res, next) => {
    const url = req.protocol + '://' + req.get('host')
    console.log(url)
    const file = req.myFile;
    console.log(req)
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }
      res.send({file})
  });

module.exports = router;