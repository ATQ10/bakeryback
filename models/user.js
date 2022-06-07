const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
  
const {appConfig} = require('../config');

const userSchema = new Schema({
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
      },
      imgUrl:{
        type:String
      }
});

userSchema.methods.setImgUrl = function setImgUrl(filename){
  const { host, port} = appConfig;
  this.imgUrl = `${host}:${port}/public/${filename}`;
}

module.exports = mongoose.model('User', userSchema);