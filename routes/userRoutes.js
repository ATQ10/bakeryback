const express = require('express'),
    router = express.Router(),
    {
        signup,
        signin
    } = require('../controllers/authController');
const upload = require('../middlewares/uploadMiddleware');

    router.post('/register',upload.single('image') ,signup, (req, res)=>{

    });

    router.post('/login', signin, (req, res)=>{

    });

    module.exports = router;