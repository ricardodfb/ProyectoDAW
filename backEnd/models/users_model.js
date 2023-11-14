
// Se define el modelo o tabla SQL proyectos con Sequelize
module.exports = ( sequelize, type ) =>{
  return sequelize.define('usuarios', {
      id_usuario:{
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false
      },
      nombre: type.STRING(70),
      email: type.STRING(100),
      password: type.STRING(250),
      
  })
}