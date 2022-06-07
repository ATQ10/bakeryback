const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const fs = require('fs')
const { promisify } = require('util')

const unlinkAsync = promisify(fs.unlink)

exports.signup = async (req, res) => {
    const user = new User({
      userName: req.body.username,
      fullName: req.body.fullName,
      email: req.body.email,
      role: req.body.role,
      password: bcrypt.hashSync(req.body.password, 8),
      position: req.body.position,
      plant: req.body.plant
    });

    if(req.file){
      const {filename} = req.file
      user.setImgUrl(filename)
    }else{
      user.setImgUrl('avatar.png')
    }

    user.save(async (err, user) => {
      if (err) {
         // Delete the file like normal
          await unlinkAsync(req.file.path)
          res.status(500)
            .send({
              message: err
            });
          return;
      } else {
        res.status(200)
          .send({
            message: "User Registered successfully"
          })
      }
    });
  };
  
  exports.signin = (req, res) => {
    User.findOne({
        $or:[{email: req.body.email},{userName:req.body.username}]
      })
      .exec((err, user) => {
        if (err) {
          res.status(500)
            .send({
              message: err
            });
          return;
        }
        if (!user) {
          return res.status(404)
            .send({
              message: "User Not found."
            });
        }
  
        //comparing passwords
        var passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.password
        );
        // checking if password was valid and send response accordingly
        if (!passwordIsValid) {
          return res.status(401)
            .send({
              accessToken: null,
              message: "Invalid Password!"
            });
        }
        //signing token with user id
        var token = jwt.sign({
          id: user.id
        }, process.env.API_SECRET, {
          expiresIn: 86400
        });
  
        //responding to client request with user profile success message and  access token .
        res.status(200)
          .send({
            user: {
              id: user._id,
              email: user.email,
              fullName: user.fullName,
            },
            message: "Login successfull",
            accessToken: token,
          });
      });
  };