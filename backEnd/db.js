// const Sequelize = require('sequelize');
// se usa esta libreria para permitirla gestion de vistas en la base de datos
 const Sequelize = require('sequelize-views-support');
// Instanciamos los modelos o tablas para poder usarlos con sequelize
const ProyectoModel     = require('./models/proyectos_model');
const DonatarioModel    = require('./models/donatarios_model');
const DonadorModel      = require('./models/donadores_model');
const DonacionModel     = require('./models/donaciones_model');
const UsersModel        = require('./models/users_model');
const vDonacionesModel  = require('./models/vdonaciones_model');
// se crea un punto de acceso a la base de datos
const sequelize = new Sequelize( process.env.DB_NAME,  process.env.DB_USER, process.env.DB_PASS, {
    host: 'localhost',
    dialect: 'mysql'
} );
// utilizamos el framwork ORM Sequelize para gestionar el acceso a las tablas y vistas SQL
const Proyecto    = ProyectoModel ( sequelize, Sequelize );
const Donatario   = DonatarioModel( sequelize, Sequelize );
const Donador     = DonadorModel  ( sequelize, Sequelize );
const Donacion    = DonacionModel ( sequelize, Sequelize );
const Usuario        = UsersModel    ( sequelize, Sequelize );
const vDonaciones = vDonacionesModel ( sequelize, Sequelize );

// Sincronizamos las tablas y vistas al arancar, para que si no existen en la bd, se creen
sequelize.sync({ force: false })
.then(() =>{
    console.log('Tablas sincronizadas')
})

// Se exporta el punto de acceso a las tablas de la base de datos
module.exports = {
    Proyecto,
    Donatario,
    Donador,
    Donacion,
    Usuario,
    vDonaciones
}

