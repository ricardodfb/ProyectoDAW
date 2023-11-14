const router = require('express').Router();

// se crea el punto de acceso a la tabla donaciones
const { Donacion } = require( '../db' );
 
// Operaciones CRUD para las donacines y call-backs a las peticiones cliente
router.post( '/', async (req, res) => {
    const donacion = await Donacion.create( req.body );
    res.json(donacion);
});

router.get( '/',  async ( req, res ) => {
    const donaciones = await Donacion.findAll(); 
    res.json( donaciones );
});

router.put('/:id_Donacion', async (req, res) => {
    await Donacion.update( req.body, {
        where: { id_donacion: req.params.id_Donacion }
    });
    res.json( { success: 'Donacion Modificada'} );
});

router.delete('/:id_Donacion', async (req, res) => {
    await Donacion.destroy( {
        where: { id_donacion: req.params.id_Donacion }
    });
    res.json( { success: 'Donacion Eliminado'} );
});


module.exports = router;