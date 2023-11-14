const router = require('express').Router();
const passport = require('passport');

// punto de acceso a la Consulta de proyectos registrados
const { Proyecto } = require( '../db' );
 
 // Operaciones de consulta y call-back a las peticiones cliente 
router.get( '/',  
            passport.authenticate('jwt', { session: false }),
            async ( req, res ) => {
            const itemsproyectos = await Proyecto
                                            .findAll({ attributes: [ 'id_proyecto','nombre']}); 
            res.json( itemsproyectos );
});


module.exports = router;