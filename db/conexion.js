require('dotenv').config();
const mongoose =require('mongoose');

//URL de la base de datos
//const dbURL = 'mongodb://localhost:27017/curso';

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
    console.log('Error de conexion a la base de datos: ${error}');
});

db.once('open', () => {
    console.log('Conexion exitosa a la base de datos');
});

module.exports = db;