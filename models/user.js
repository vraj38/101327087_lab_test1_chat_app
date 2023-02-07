const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username:   {
        type: String,
        required: [true, 'Please enter a username'],
        trim: true,
        lowercase: true,
        unique: true,
    },

    firstname:  {
        type: String,
        trim: true,
        lowercase: true,
    },
      
    lastname:   {
        type: String,
        trim: true,
        lowercase: true,
    },
      
    password:   {
        type: String,
        required: [true, 'Please enter a password'],
        minlength:5,
    },
      
    createon:   {
        type: Date,
        default: Date.now,
    },

});

UserSchema.post('init', function(doc) {
    console.log(doc._id + ' has been initialized from the db');
});
  
UserSchema.pre('validate', function(next) {
    console.log(`${this._id} has been validated (but not saved yet)`);
    next();
});
  
UserSchema.post('save', function(doc) {
    console.log(doc._id + ' has been saved');
});
  
UserSchema.post('remove', function(doc) {
    console.log(doc._id + ' has been removed');
});
  
const User = mongoose.model("User", UserSchema);
module.exports = User;