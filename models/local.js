const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const plantSchema = new Schema({
  Address: {
    type: String,
    required: [true, "Address not provided!"],
  },
  created: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Local', plantSchema);