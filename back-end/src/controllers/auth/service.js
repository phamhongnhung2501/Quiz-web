const jwt = require('jsonwebtoken');
const Users = require('./models/users');

async function signup (req,res) {
    if (!req.body.username || !req.body.password) {
        res.status(400).send({msg: 'Please pass username and password.'})
    } else {
        Users.findOne({
          where: {
            username: req.body.username
          }
        })
        .then((user) => {
          if (user) {
            return res.status(401).send({
              msg: 'Username is invalid',
            });
          } else {
              Users.create({
                username: req.body.username,
                password: req.body.password
              })
              .then((user) => res.status(201).send(user))
              .catch((error) => {
                  res.status(400).send(error);
              });
          }
        })
    }
}

async function login (req, res) {
  Users.findOne({
    where: {
      username: req.body.username
    }
  })
  .then((user) => {
    if (!user) {
      return res.status(401).send({
        message: 'Authentication failed. User not found.',
      });
    }
    user.comparePassword(req.body.password, (err, isMatch) => {
      if(isMatch && !err) {
        let token = jwt.sign(JSON.parse(JSON.stringify(user)), 'nodeauthsecret', {expiresIn: 300});
        jwt.verify(token, 'nodeauthsecret', function(err, data){
          console.log(err, data);
        });
        res.json({success: true, token: 'JWT ' + token});
      } else {
        res.status(401).send({success: false, msg: 'Authentication failed. Wrong password.'});
      }
    })
  })
  .catch((error) => res.status(400).send(error));
}

// async function getToken (headers) {
//     if (headers && headers.authorization) {
//       var parted = headers.authorization.split(' ');
//       if (parted.length === 2) {
//         return parted[1];
//       } else {
//         return null;
//       }
//     } else {
//       return null;
//     }
//   };

module.exports = {
    signup,
    login
};