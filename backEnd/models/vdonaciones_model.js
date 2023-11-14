// Se define el modelo o vista SQL vdonaciones con Sequelize
module.exports = (sequelize, DataTypes) => {
    return sequelize.define('vdonaciones', {
        //  NO SE CREA LA TABLA, SE UA UNAS VISTA
    }, {
      treatAsView: true,
      viewDefinition: 
      `CREATE OR REPLACE VIEW vdonaciones as 
      select proyectos.id_proyecto,    proyectos.nombre PROYECTO, 
             donatarios.id_donatario,  donatarios.nombre DONATARIO, 
             donadores.id_donador,  donadores.nombre  DONADOR,
             donaciones.monto MONTO, donaciones.FECHA FECHA
      from donaciones inner join proyectos
           on donaciones.id_proyecto=proyectos.id_proyecto
           inner join donatarios
           on donaciones.id_donatario=donatarios.id_donatario
           inner join donadores
           on donaciones.id_donador=donadores.id_donador`
    });
   
  };
