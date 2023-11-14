const router = require('express').Router();

const jwt = require('jsonwebtoken');

const { Usuario } = require('../db');

router.post('/', async (req, res) => {
  const { email, password } = req.body;

  const userWithEmail = await Usuario.findOne({ where: { email } }).catch(
    (err) => {
      console.log('Error: ', err);
    }
  );

  if (!userWithEmail)
    return res
      .status(400)
      .json({ message: 'Email or password does not match!' });

  if (userWithEmail.password !== password)
    return res
      .status(400)
      .json({ message: 'Email or password does not match!' });

  const jwtToken = jwt.sign(
    { id: userWithEmail.id_usuario, email: userWithEmail.email },
    process.env.JWT_SECRET
  );
  console.log( userWithEmail );
  res.json({ message: 'Welcome Back!', token: jwtToken });
});

module.exports = router;