const router = require('express').Router()
const plantController = require('../controllers/plantController')

router.get('/', function (req, res) {
    res.status(200).json({ message: 'Estás en Plantas' })
  })

router.post('/create', function(req, res){
    plantController.create(req,res)
    console.log("/create");
})

router.delete('/:id', function(req, res){
    plantController.remove(req,res)
})

router.put('/:id', function(req, res){
    plantController.update(req,res)
    console.log("/update");
})

router.get('/getByID/:id', function(req, res){
    plantController.getByID(req,res)
    console.log("/getByID");
})

router.get('/getAll', function(req, res){
    plantController.getAll(req,res)
    console.log("/getAll");
})
module.exports = router