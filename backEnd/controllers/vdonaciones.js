const router = require('express').Router();

// punto de acceso a la Consulta de donaciones registradas
const { vDonaciones } = require( '../db' );
 
 // Operaciones de consulta y call-back a las peticiones cliente 
router.get( '/',  async ( req, res ) => {
    const vdonaciones = await vDonaciones.findAll({
        attributes: [ 'id_proyecto','PROYECTO','DONATARIO', 'DONADOR', 'MONTO']}); 
    res.json( vdonaciones );
});


module.exports = router;



