const router = require('express').Router();

// se crea el punto de acceso a la tabla usuarios
const { Usuario } = require( '../db' );

router.post('/', async (req, res) => {
  const { nombre, email, password } = req.body;

  const alreadyExistsUser = await Usuario.findOne({ where: { email } }).catch(
    (err) => {
      console.log('Error: ', err);
    }
  );

  if (alreadyExistsUser) {
    return res.status(409).json({ message: 'User with email already exists!' });
  }

  const newUser = new Usuario({ nombre, email, password });
  const savedUser = await newUser.save().catch((err) => {
    console.log('Error: ', err);
    res.status(500).json({ error: 'Cannot register user at the moment!' });
  });

  if (savedUser) res.json({ message: 'Thanks for registering' });
});

module.exports = router;