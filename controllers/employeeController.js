const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Employee = require('../models/employee');

module.exports = {
  create: function (req, res) {
    try {
        var newEmployee = new Employee(req.body)
        newEmployee.save(function (err,employee) {
            return res.status(200).json({
                message: 'Empleado registrado',
                _id: employee._id
            })
        })
    } catch (error) {
        console.log(error)
    }
  },
  remove: function (req, res) {
      var id = req.params.id
      Employee.findByIdAndRemove(id, function(err, employee){
          if(err){
              return res.json(500, {
                  message: 'No existe empleado'
                })
          }
          return res.json(employee)
      })
  },
  getByID: function (req, res) {
      var id = req.params.id
      Employee.findOne({_id:id}, function(err, employee){
          if(err) {
              return res.status(500).json({
                message: 'Se ha producido un error al obtener el empleado'
              })
          }
          if(!employee){
              return res.status(404).json( {
                  message: 'No tenemos este empleado'
              })
          }
          return res.json(employee)
      })
  },
  getAll: function(req, res) {
      Employee.find(function(err, employee){
        if(err) {
          return res.status(500).json({
            message: 'Error obteniendo los empleados'
          })
        }
        return res.json(employee)
      })
  },
  update: function (req, res) {
    var id = req.params.id;
    let newEmployee = req.body;
      Employee.findByIdAndUpdate(id,newEmployee, function(err, employee){
          if(err) {
            return res.status(500).json({
              message: 'Error actualizando empleado'
            })
          }
          return res.json(employee);
      })
  },
}