const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const clientSchema = new Schema({
  logo:{
    type: String,
    required: [true,"An user image is required!"]
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

module.exports = mongoose.model('Client', clientSchema);