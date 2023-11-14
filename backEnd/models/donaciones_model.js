// Se define el modelo o tabla SQL donaciones con Sequelize
module.exports = ( sequelize, type ) =>{
    return sequelize.define('donaciones', {
        id_donacion:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_proyecto: type.INTEGER,
        id_donatario: type.INTEGER,
        id_donador: type.INTEGER,
        monto: type.DECIMAL(10,2),
        fecha: type.DATEONLY
        
    })
}