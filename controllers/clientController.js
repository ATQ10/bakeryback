const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Client = require('../models/client');
const fs = require('fs')
const { promisify } = require('util')

const unlinkAsync = promisify(fs.unlink) 

module.exports = {
  create: async (req, res)=> {
    try {
        let newClient = new Client({
          fullName: req.body.fullname,
          email: req.body.email,
          preferences: req.body.prefs,
          Address: req.body.addr,
        })

        if(req.file){
          const {filename} = req.file
          newClient.setImgUrl(filename)
        }else{
          newClient.setImgUrl('avatar.png')
        }
        newClient.save(async (err,client)=>{
          if (err) {
            // Delete the file like normal
            if(req.file){
             await unlinkAsync(req.file.path)
            }
             res.status(500)
               .send({
                 message: err
               });
             return;
          }else{
            return res.status(200).json({
              message: 'Cliente registrado',
              _id: client._id
            })
          }
        })
    } catch (error) {
        console.log(error)
    }
  },
  remove: function (req, res) {
      var id = req.params.id
      Client.findByIdAndRemove(id, function(err, client){
          if(err){
              return res.status(500).json({
                  message: 'No existe cliente'
                })
          }
          return res.status(200).json(client)
      })
  },
  getByID: function (req, res) {
      var id = req.params.id
      Client.findOne({_id:id}, function(err, client){
          if(err) {
              return res.status(500).json({
                message: 'Se ha producido un error al obtener el cliente'
              })
          }
          if(!client){
              return res.status(404).json( {
                  message: 'No tenemos este cliente'
              })
          }
          return res.json(client)
      })
  },
  getAll: function(req, res) {
      Client.find(function(err, clients){
        if(err) {
          return res.status(500).json({
            message: 'Error obteniendo los clientes'
          })
        }
        return res.json(clients)
      })
  },
  update: function (req, res) {
    var id = req.params.id;
    let newClient = req.body;
      Client.findByIdAndUpdate(id,newClient, function(err, client){
          if(err) {
            return res.status(500).json({
              message: 'Error actualizando cliente'
            })
          }
          return res.json(client);
      })
  },
}