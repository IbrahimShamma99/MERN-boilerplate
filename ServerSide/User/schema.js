var mongoose = require('mongoose');
const config = require('../config/config');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

/**
 * @username => User's username
 * @first_name => User's first name
 * @last_name => User's last name
 * @email => User's email
 * @role => restricted for most users 
 * @contacts => User's contacts like (number , linkedIn , etc ..)
 * @courses => The courses made by user
 * @comments => The comments made by user
 */

var UserSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, "can't be blank"],
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
    },
    last_name: {
        type: String,
        required: [true, "can't be blank"],
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
    },
    username: {
        type: String,
        required: [true, "can't be blank"],
        match: [/^[a-zA-Z0-9]+$/, 'is invalid'],
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: [true, "can't be blank"],
        match: [/\S+@\S+\.\S+/, 'is invalid'],
        index: true,
    },
    contacts: [],
    bio: String,
    profileImg: {contentType: String},
    hash: String,
    salt: String,
    interests:[{required:false}]
}, { timestamps: true });

UserSchema.methods.generateJWT = function() {
    var today = new Date();
    var exp = new Date(today);
    exp.setDate(today.getDate() + 60);
    return jwt.sign({
        id: this._id,
        username: this.username,
        exp: parseInt(exp.getTime() / 1000),
    }, config.secret);
};

UserSchema.methods.toAuthJSON = function() {
    return {
        first_name:this.first_name,
        last_name:this.last_name,
        username: this.username,
        email: this.email,
        token: this.generateJWT(),
        bio: this.bio,
        avatar: this.image,
        _id:this._id,
        interests:this.interests
    };
};

UserSchema.methods.assignInfo = function(info){     
    this.first_name = info.first_name;
    this.username = info.username;
    this.last_name = info.last_name;
    this.bio = info.bio;
    this.email = info.email;
    this.setPassword(info.password);
    this.token = this.generateJWT();
};

UserSchema.methods.setPassword = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};

UserSchema.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    return this.hash === hash;
};

module.exports = UserSchema =  mongoose.model('User', UserSchema);