const router = require('express').Router()
const employeeController = require('../controllers/employeeController')

router.get('/', function (req, res) {
    res.status(200).json({ message: 'Estás en Empleados' })
  })

router.post('/create', function(req, res){
    employeeController.create(req,res)
    console.log("/create");
})

router.delete('/:id', function(req, res){
    employeeController.remove(req,res)
})

router.put('/:id', function(req, res){
    employeeController.update(req,res)
    console.log("/update");
})

router.get('/getByID/:id', function(req, res){
    employeeController.getByID(req,res)
    console.log("/getByID");
})

router.get('/getAll', function(req, res){
    employeeController.getAll(req,res)
    console.log("/getAll");
})
module.exports = router