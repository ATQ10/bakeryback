const router = require('express').Router()
const clientController = require('../controllers/clientController')

router.get('/', function (req, res) {
    res.status(200).json({ message: 'Estás en Clientes' })
  })

router.post('/create', function(req, res){
    clientController.create(req,res)
    console.log("/create");
})

router.delete('/:id', function(req, res){
    clientController.remove(req,res)
})

router.put('/:id', function(req, res){
    clientController.update(req,res)
    console.log("/update");
})

router.get('/getByID/:id', function(req, res){
    clientController.getByID(req,res)
    console.log("/getByID");
})

router.get('/getAll', function(req, res){
    clientController.getAll(req,res)
    console.log("/getAll");
})
module.exports = router