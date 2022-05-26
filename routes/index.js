var router = require('express').Router()
var deliver = require('./deliveriesRoutes')
var employee = require('./employeeRoutes')
var local = require('./localRoutes')
var order = require('./orderRoutes')
var plant = require('./plantRoutes')
var product = require('./productRoutes')
var client = require('./clientRoutes')
var user = require('./userRoutes')

router.use('/deliver', deliver);
router.use('/employee', employee);
router.use('/local', local);
router.use('/order', order);
router.use('/plant', plant);
router.use('/product', product);
router.use('/client', client);
router.use('/user', user);

router.get('/', function (req, res) {
    res.status(200).json({ message: 'Estás conectado a nuestra API' })
  })

  module.exports = router