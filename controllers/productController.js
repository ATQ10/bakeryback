const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Product = require('../models/product');

module.exports = {
  create: function (req, res) {
    try {
        var newProduct = new Product(req.body)
        newProduct.save(function (err,product) {
            return res.status(200).json({
                message: 'Producto registrado',
                _id: product._id
            })
        })
    } catch (error) {
        console.log(error)
    }
  },
  remove: function (req, res) {
      var id = req.params.id
      Product.findByIdAndRemove(id, function(err, product){
          if(err){
              return res.json(500, {
                  message: 'No existe producto'
                })
          }
          return res.json(product)
      })
  },
  getByID: function (req, res) {
      var id = req.params.id
      Product.findOne({_id:id}, function(err, product){
          if(err) {
              return res.status(500).json({
                message: 'Se ha producido un error al obtener el producto'
              })
          }
          if(!product){
              return res.status(404).json( {
                  message: 'No tenemos este producto'
              })
          }
          return res.json(product)
      })
  },
  getAll: function(req, res) {
      Product.find(function(err, products){
        if(err) {
          return res.status(500).json({
            message: 'Error obteniendo los productos'
          })
        }
        return res.json(products)
      })
  },
  update: function (req, res) {
    var id = req.params.id;
    let newProduct = req.body;
      Product.findByIdAndUpdate(id,newProduct, function(err, product){
          if(err) {
            return res.status(500).json({
              message: 'Error actualizando producto'
            })
          }
          return res.json(product);
      })
  },
}