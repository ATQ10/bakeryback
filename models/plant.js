const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const plantSchema = new Schema({
  Name: {
    type: String,
    required: [true, "Name not provided!"],
  },
  Address: {
    type: String,
    required: [true, "Address not provided!"],
  },
  created: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Plant', plantSchema);