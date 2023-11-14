const router = require('express').Router();

// se crea el punto de acceso a la tabla donatarios
const { Donatario } = require( '../db' );
 
 // Operaciones CRUD para los donatarios y call-backs a las peticiones cliente 
 router.post( '/', async (req, res) => {
    const donatario = await Donatario.create( req.body );
    res.json(donatario);
});

router.get( '/',  async ( req, res ) => {
    const donatarios = await Donatario.findAll(); 
    res.json( donatarios );
});

router.put('/:id_Donatario', async (req, res) => {
    await Donatario.update( req.body, {
        where: { id_donatario: req.params.id_Donatario }
    });
    res.json( { success: 'Donatario Modificado'} );
});

router.delete('/:id_Donatario', async (req, res) => {
    await Donatario.destroy( {
        where: { id_donatario: req.params.id_Donatario }
    });
    res.json( { success: 'Donatario Eliminado'} );
});


module.exports = router;