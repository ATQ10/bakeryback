const router = require('express').Router()
const orderController = require('../controllers/orderController')

router.get('/', function (req, res) {
    res.status(200).json({ message: 'Estás en Ordenes' })
  })

router.post('/create', function(req, res){
    orderController.create(req,res)
    console.log("/create");
})

router.delete('/:id', function(req, res){
    orderController.remove(req,res)
})

router.put('/:id', function(req, res){
    orderController.update(req,res)
    console.log("/update");
})

router.get('/getByID/:id', function(req, res){
    orderController.getByID(req,res)
    console.log("/getByID");
})

router.get('/getAll', function(req, res){
    orderController.getAll(req,res)
    console.log("/getAll");
})
module.exports = router