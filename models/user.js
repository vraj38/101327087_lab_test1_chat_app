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
        minlength:6,
    },
      
    createon:   {
        type: Date,
        default: Date.now,
    },

});
