const router = require('express').Router();

//Controlador de registro de proyectos
const apiProyectosRouter    = require('../controllers/proyectos');
router.use('/proyectos', apiProyectosRouter );
//Controlador de consulta de Proyectos registrados
const itemsProyectosRouter  = require('../controllers/items_proyectos');
router.use('/items_proyectos', itemsProyectosRouter );

//Controlador de registro donatarios
const apiDonatariosRouter = require('../controllers/donatarios');
router.use('/donatarios', apiDonatariosRouter );

//Controlador de registro donadores
const apiDonadoresRouter = require('../controllers/donadores');
router.use('/donadores', apiDonadoresRouter );

//Controlador de registro de donaciones
const apiDonacionesRouter = require('../controllers/donaciones');
router.use('/donaciones', apiDonacionesRouter );

//Controlador de registro de usuarios
const apiUsuariosRouter = require('../controllers/register');
router.use('/register', apiUsuariosRouter );

//Controlador de registro de login
const apiLoginRouter = require('../controllers/login');
router.use('/login', apiLoginRouter );

//Controlador de consulta de donaciones
const apivDonacionesRouter = require('../controllers/vdonaciones');
router.use('/vdonaciones', apivDonacionesRouter );

module.exports = router;