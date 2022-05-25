const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const deliveriesSchema = new Schema({
  Local:{
    type: Schema.Types.ObjectId, 
    ref: 'Local' 
  },
  ClientID:{
    type: Schema.Types.ObjectId, 
    ref: 'Client' 
  },
  Detail: [
    {
      Products: {
        type: Schema.Types.ObjectId, 
        ref: 'Product'
      },
      product: {
        type: Schema.Types.ObjectId, 
        ref: 'Product'
      },
    },
  ],
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Deliveries', deliveriesSchema);