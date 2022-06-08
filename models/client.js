const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const {appConfig} = require('../config');

const clientSchema = new Schema({
  logoUrl:{
    type: String,
    required: [true,"An Client image is required!"]
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
  preferences: {
    type: []
  },
  Address: {
    type: String,
  },
  created: {
    type: Date,
    default: Date.now
  }
});

clientSchema.methods.setImgUrl = function setImgUrl(filename){
  const { host, port } = appConfig;
  this.logoUrl = `${host}:${port}/public/${filename}`;
}

module.exports = mongoose.model('Client', clientSchema);