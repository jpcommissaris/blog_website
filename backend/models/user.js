
const mongoose = require('mongoose')
const crypto = require('crypto')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        require: true,
        maxlength: 32,
        unique: true,
        index: true,
        lowerCase: true
    },
    name: {
        type: String,
        trim: true,
        require: true,
        maxlength: 32,
    },
    email: {
        type: String,
        trim: true,
        require: true,
        unique: true, 
        lowercase: true,
    },
    profile: {
        type: String,
        require: true,
    },
    hashed_password: {
        type: String,
        required: true, 
    },
    salt: String,
    about: {
        type: String
    },
    role: {
        type: Number,
        trim: true,
    },
    photo: {
        data: Buffer,
        contentType: String,
    }, 
    resetPasswordLink: {
        data: String,
        default: '',
    }
}, {timestamp: true})

userSchema.virtual('password')
    .set(function(password) {
        //create a temp var called _password
        this._password = password
        //generate salt for hashing algo
        this.salt = this.makeSalt()
        //encryt password
        this.hashed_password = this.encryptPassword(password)
    })
    .get(function(){
        return this._password
    })
userSchema.methods = {
    authenticate: function(plainText){
        return this.encryptPassword(plainText) == this.hashed_password
    },
    encryptPassword: function(password) {
        if(!password) return ''
        try{
            return crypto.createHmac('sha1', this.salt)
                        .update(password)
                        .digest('hex')
        } catch (err) {
            return ''
        }
    }, 
    makeSalt: function(){
        return Math.round(new Date().valueOf() * Math.random()) + ''
    }
}




module.exports = mongoose.model('User', userSchema)