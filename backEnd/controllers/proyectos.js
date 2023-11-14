const router = require('express').Router();
const passport = require('passport');

// se crea el punto de acceso a la tabla proyectos
const { Proyecto } = require( '../db' );


 // Operaciones CRUD para los proyectos y call-backs a las peticiones cliente 
 router.post( '/', 
              //passport.authenticate('jwt', { session: false }), 
              async (req, res) => {
              const proyecto = await Proyecto.create( req.body );
              res.json(proyecto);
});

router.get( '/',  
          // passport.authenticate('jwt', { session: false }),
           async ( req, res ) => {
           const proyectos = await Proyecto.findAll(); 
           res.json( proyectos );
});

router.put('/:id_Proyecto', async (req, res) => {
    await Proyecto.update( req.body, {
        where: { id_proyecto: req.params.id_Proyecto }
    });
    res.json( { success: 'Proyecto Modificado'} );
});

router.delete('/:id_Proyecto', async (req, res) => {
    await Proyecto.destroy( {
        where: { id_proyecto: req.params.id_Proyecto }
    });
    res.json( { success: 'Proyecto Eliminado'} );
});


module.exports = router;