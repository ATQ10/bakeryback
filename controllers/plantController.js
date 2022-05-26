const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Plant = require('../models/plant');

module.exports = {
  create: function (req, res) {
    try {
        var newPlant = new Plant(req.body)
        newPlant.save(function (err,plant) {
            return res.status(200).json({
                message: 'Planta registrada',
                _id: plant._id
            })
        })
    } catch (error) {
        console.log(error)
    }
  },
  remove: function (req, res) {
      var id = req.params.id
      Plant.findByIdAndRemove(id, function(err, plant){
          if(err){
              return res.json(500, {
                  message: 'No existe planta'
                })
          }
          return res.json(plant)
      })
  },
  getByID: function (req, res) {
      var id = req.params.id
      Plant.findOne({_id:id}, function(err, plant){
          if(err) {
              return res.status(500).json({
                message: 'Se ha producido un error al obtener la planta'
              })
          }
          if(!plant){
              return res.status(404).json( {
                  message: 'No tenemos esta planta'
              })
          }
          return res.json(plant)
      })
  },
  getAll: function(req, res) {
      Plant.find(function(err, plants){
        if(err) {
          return res.status(500).json({
            message: 'Error obteniendo las ordenes'
          })
        }
        return res.json(plants)
      })
  },
  update: function (req, res) {
    var id = req.params.id;
    let newPlant = req.body;
      Plant.findByIdAndUpdate(id,newPlant, function(err, plant){
          if(err) {
            return res.status(500).json({
              message: 'Error actualizando planta'
            })
          }
          return res.json(plant);
      })
  },
}