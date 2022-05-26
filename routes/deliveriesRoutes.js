const router = require('express').Router()
const deliveriesController = require('../controllers/deliveriesController')

router.get('/', function (req, res) {
    res.status(200).json({ message: 'Estás en Entregas' })
  })

router.post('/create', function(req, res){
    deliveriesController.create(req,res)
    console.log("/create");
})

router.delete('/:id', function(req, res){
    deliveriesController.remove(req,res)
})

router.put('/:id', function(req, res){
    deliveriesController.update(req,res)
    console.log("/update");
})

router.get('/getByID/:id', function(req, res){
    deliveriesController.getByID(req,res)
    console.log("/getByID");
})

router.get('/getAll', function(req, res){
    deliveriesController.getAll(req,res)
    console.log("/getAll");
})
module.exports = router