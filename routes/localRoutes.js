const router = require('express').Router()
const localController = require('../controllers/localController')

router.get('/', function (req, res) {
    res.status(200).json({ message: 'Estás en Locales' })
  })

router.post('/create', function(req, res){
    localController.create(req,res)
    console.log("/create");
})

router.delete('/:id', function(req, res){
    localController.remove(req,res)
})

router.put('/:id', function(req, res){
    localController.update(req,res)
    console.log("/update");
})

router.get('/getByID/:id', function(req, res){
    localController.getByID(req,res)
    console.log("/getByID");
})

router.get('/getAll', function(req, res){
    localController.getAll(req,res)
    console.log("/getAll");
})
module.exports = router