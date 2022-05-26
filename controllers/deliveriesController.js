const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Deliver = require('../models/deliveries');

module.exports = {
  create: function (req, res) {
    try {
        var newDeliver = new Deliveries(req.body)
        newUser.save(function (err,deliver) {
            return res.status(200).json({
                message: 'Entrega registrada',
                _id: deliver._id
            })
        })
    } catch (error) {
        console.log(error)
    }
  },
  remove: function (req, res) {
      var id = req.params.id
      Deliver.findByIdAndRemove(id, function(err, deliver){
          if(err){
              return res.json(500, {
                  message: 'No existe entrega'
                })
          }
          return res.json(deliver)
      })
  },
  getByID: function (req, res) {
      var id = req.params.id
      Deliver.findOne({_id:id}, function(err, deliver){
          if(err) {
              return res.status(500).json({
                message: 'Se ha producido un error al obtener la entrega'
              })
          }
          if(!deliver){
              return res.status(404).json( {
                  message: 'No tenemos esta entrega'
              })
          }
          return res.json(deliver)
      })
  },
  getAll: function(req, res) {
      Deliver.find(function(err, deliveries){
        if(err) {
          return res.status(500).json({
            message: 'Error obteniendo las entregas'
          })
        }
        return res.json(deliveries)
      })
  },
  update: function (req, res) {
    var id = req.params.id;
    let newDeliver = req.body;
      Deliver.findByIdAndUpdate(id,newDeliver, function(err, deliver){
          if(err) {
            return res.status(500).json({
              message: 'Error actualizando entrega'
            })
          }
          return res.json(deliver);
      })
  },
}