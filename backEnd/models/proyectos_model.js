// Se define el modelo o tabla SQL proyectos con Sequelize
module.exports = ( sequelize, type ) =>{
    return sequelize.define('proyectos', {
        id_proyecto:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre: type.STRING(100),
        descripcion: type.STRING(250),
        imagen: type.STRING
        
    })
}