// Se define el modelo o tabla SQL donatarios con Sequelize
module.exports = ( sequelize, type ) =>{
    return sequelize.define('donatarios', {
        id_donatario:{
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