const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const orderSchema = new Schema({
  ClientID:{
    type: Schema.Types.ObjectId, 
    ref: 'Client' 
  },
  Date: {
    type: Date,
    default: Date.now
  },
  Products: {
    type: [],
  },
  Total: {
    type: Number,
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Order', orderSchema);