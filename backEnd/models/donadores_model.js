// Se define el modelo o tabla SQL donadores con Sequelize
module.exports = ( sequelize, type ) =>{
    return sequelize.define('donadores', {
        id_donador:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        nombre: type.STRING(100),
        rfc: type.STRING(20),
        imagen: type.STRING
        
    })
}