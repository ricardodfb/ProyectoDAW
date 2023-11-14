const router = require('express').Router();

// se crea el punto de acceso a la tabla donadores
const { Donador } = require( '../db' );

 // Operaciones CRUD para los donadores y call-backs a las peticiones cliente 
 router.post( '/', async (req, res) => {
    const donador = await Donador.create( req.body );
    res.json(donador);
});

router.get( '/',  async ( req, res ) => {
    const donadores = await Donador.findAll(); 
    res.json( donadores );
});

router.put('/:id_Donador', async (req, res) => {
    await Donador.update( req.body, {
        where: { id_Donador: req.params.id_Donador }
    });
    res.json( { success: 'Donador Modificado'} );
});

router.delete('/:id_Donador', async (req, res) => {
    await Donador.destroy( {
        where: { id_Donador: req.params.id_Donador }
    });
    res.json( { success: 'Donador Eliminado'} );
});


module.exports = router;