const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const productSchema = new Schema({
  Name: {
    type: String,
    required: [true, "Name not provided!"],
  },
  Img:{
      type: String,
      required: [true,"An product image is required!"]
  },
  Desc:{
      type: Number,
  },
  Plant:{
    type: Schema.Types.ObjectId, 
    ref: 'Plant' 
  },
  Price: {
    mayoreo: {
      type: Number,
    },
    menudeo: {
      type: Number,
    },
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Product', productSchema);