var mongoose = require('mongoose');
var User = mongoose.model('User');

const adduser = (req, res, next) => {
    const UserInfo = req.body.user;
    console.log(req.body.user)
    if (!UserInfo){return res.status(422).send({success:false})}
    var user = new User();
    try {
        user.assignInfo(UserInfo);
        }
    catch (e) {
        return res.status(422).send({
            error:{message:"error during registeration"}
        });
    };

    user.save(function(err) {
        if (err) {
            if (err.name === 'MongoError' && err.code === 11000) {
                return res.status(422).send({ success: false, message: 'User already exist!' });
            }
            return res.status(422).send(err);
        }
        res.status(202).json({
            user:user.toAuthJSON()
        });
    });
};

const login = async(req, res, next) => {
    const UserInfo = req.body.user;
    if (!UserInfo.email) {
        return res.send(422).json({ error: "please provide email " });
    };
    if (!UserInfo.password) {
        return res.status(422).json({ error: "can't be blank"  });
    };
    await User.findOne({ email: UserInfo.email }).then((user) => {
            if (!user){
                return res.status(422).json({ error: "User not found" });
            }
            if (user.validPassword(UserInfo.password)) {
                return res.status(202).json(
                    user.toAuthJSON()
                )
            } else {
                return res.status(422).send({ error: "authentication error" })
            }
        }
    ).catch(
        () => {
            return res.status(422)
                .send({ errors: { authentication: "Email not valid" } })
        }
    );
};

const uploadAvatar = (req, res)=> {
    const userEmail = String(req.body.user);
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        } else if (err) {
            return res.status(500).json(err)
        }
        console.log(req.file)
        return res.status(200).send(req.file);
        })
}

const updateUser = (req ,res, next)=>{
        const updateData = req.body.user;
        if (!updateData){
            res.status(422).send({success:false,"message":"please provide what you want to update"})
        }
        User.findById(updateData._id).then(function(user) {
            if (!user) { return res.sendStatus(401); }
            user.assignInfo(updateData);
            return user.save()
                .then(function() {
                    return res.json({ 
                        user: user.toAuthJSON(),
                        success:true                    
                    });
                });
        }).catch(()=>{
            res.status(422).send({success:false,"message":"couldn't update user"})
        }
        );
    };
    
const followUser = (req,res,next)=>{
    const userInfo = req.body.user;
    const followedInfo = req.body.followed;
    if (!userInfo){res.status(422).send({success:false,"message":"User not provided"})};
    if (!followedInfo){res.status(422).send({success:false,"message":"Followed not provided"})};
    User.findById(userInfo._id).then((user)=>{
        User.findById(followedInfo._id).then((followed)=>{
            if (!user){res.status(422).send({success:false,"message":"User not found"})}
            if (!followed){res.status(422).send({success:false,"message":"followed not found"})}
            
            user.following.push(followed);
            followed.followedBy.push(user);
            user.save();
            followed.save();
            
            return res.status(202).send({
                user:user.toAuthJSON(),
                success:true
            })
        }).catch(next)
    }).catch(next)
}

module.exports = { adduser, login  ,uploadAvatar, updateUser , followUser };