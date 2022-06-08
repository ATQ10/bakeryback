const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const productSchema = new Schema({
  Name: {
    type: String,
    required: [true, "Name not provided!"]
  },
  Img:{
      type: String,
      required: [true,"An product image is required!"]
  },
  Description:{
    type: String
  },
  Price: {
    type: Number
  },
  Ingredients: {
    type: String
  },
  Origin: {
    type: String
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', productSchema);