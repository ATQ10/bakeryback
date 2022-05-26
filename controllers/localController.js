const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Local = require('../models/local');

module.exports = {
  create: function (req, res) {
    try {
        var newLocal = new Local(req.body)
        newLocal.save(function (err,local) {
            return res.status(200).json({
                message: 'Local registrado',
                _id: local._id
            })
        })
    } catch (error) {
        console.log(error)
    }
  },
  remove: function (req, res) {
      var id = req.params.id
      Local.findByIdAndRemove(id, function(err, local){
          if(err){
              return res.json(500, {
                  message: 'No existe local'
                })
          }
          return res.json(local)
      })
  },
  getByID: function (req, res) {
      var id = req.params.id
      Local.findOne({_id:id}, function(err, local){
          if(err) {
              return res.status(500).json({
                message: 'Se ha producido un error al obtener el local'
              })
          }
          if(!local){
              return res.status(404).json( {
                  message: 'No tenemos este local'
              })
          }
          return res.json(local)
      })
  },
  getAll: function(req, res) {
      Local.find(function(err, locales){
        if(err) {
          return res.status(500).json({
            message: 'Error obteniendo los locales'
          })
        }
        return res.json(locales)
      })
  },
  update: function (req, res) {
    var id = req.params.id;
    let newLocal = req.body;
      Local.findByIdAndUpdate(id,newLocal, function(err, local){
          if(err) {
            return res.status(500).json({
              message: 'Error actualizando local'
            })
          }
          return res.json(local);
      })
  },
}