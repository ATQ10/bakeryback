const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Order = require('../models/order');

module.exports = {
  create: function (req, res) {
    try {
        var newOrder = new Order(req.body)
        newOrder.save(function (err,order) {
            return res.status(200).json({
                message: 'Orden registrada',
                _id: order._id
            })
        })
    } catch (error) {
        console.log(error)
    }
  },
  remove: function (req, res) {
      var id = req.params.id
      Order.findByIdAndRemove(id, function(err, order){
          if(err){
              return res.json(500, {
                  message: 'No existe orden'
                })
          }
          return res.json(order)
      })
  },
  getByID: function (req, res) {
      var id = req.params.id
      Order.findOne({_id:id}, function(err, order){
          if(err) {
              return res.status(500).json({
                message: 'Se ha producido un error al obtener la orden'
              })
          }
          if(!order){
              return res.status(404).json( {
                  message: 'No tenemos esta orden'
              })
          }
          return res.json(order)
      })
  },
  getAll: function(req, res) {
      Order.find(function(err, ordenes){
        if(err) {
          return res.status(500).json({
            message: 'Error obteniendo las ordenes'
          })
        }
        return res.json(ordenes)
      })
  },
  update: function (req, res) {
    var id = req.params.id;
    let newOrder = req.body;
      Order.findByIdAndUpdate(id,newOrder, function(err, order){
          if(err) {
            return res.status(500).json({
              message: 'Error actualizando orden'
            })
          }
          return res.json(order);
      })
  },
}