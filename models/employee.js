const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const employeeSchema = new Schema({
  Id:{
    type: String,
  },
  img:{
    type: String,
    required: [true,"An employee image is required!"]
  },
  Name: {
    type: String,
    required: [true, "Name not provided!"],
  },
  Lastname: {
    type: String,
    required: [true, "Name not provided!"],
  },
  Position:{
    type: String,
    enum:["Panadero","Repartidor","Despachador","Otro"]
  },
  role: {
    type: String,
    enum: ["normal", "admin"],
    required: [true, "Please specify user role"]
  },
  plant:{
    type: Schema.Types.ObjectId, 
    ref: 'Plant' 
  },
  created: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Employee', employeeSchema);