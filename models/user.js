const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const userSchema = new Schema({
    userImage:{
        type: String,
        required: [true,"An user image is required!"]
    },
    userName:{
      type: String,
      required:[true, "A username is required!"]
    },
    fullName: {
        type: String,
        required: [true, "fullname not provided!"],
      },
      email: {
        type: String,
        unique: [true, "email already exists in database!"],
        lowercase: true,
        trim: true,
        required: [true, "email not provided"],
        validate: {
          validator: function (v) {
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
          },
          message: '{VALUE} is not a valid email!'
        }
    
      },
      role: {
        type: String,
        enum: ["normal", "admin"],
        required: [true, "Please specify user role"]
      },
      password: {
        type: String,
        required: true
      },
      created: {
        type: Date,
        default: Date.now
      },
      position:{
        type: String,
        enum:["sales","secretary"]
      },
      plant:{
        type: Schema.Types.ObjectId, 
        ref: 'Plant' 
      }
});

module.exports = mongoose.model('User', userSchema);