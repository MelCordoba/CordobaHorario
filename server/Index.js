const express = require('express');
const morgan = require('morgan');
const app = express();

// para llamar la conexion que hicimos de base de datos
const {mongoose} = require('./database')

//Settings
// Se configura para utilizar un puerto disponible, si no utiliza el puerto 300
app.set('port', process.env.PORT || 3000);

//Middleware
//para ver la informacion que devuelve el servidor usamos morgan
app.use(morgan('dev'));
// para entender el codigo que viene en formato Json
app.use(express.json());

//Routes
app.use('/api/horarios', require('./routes/CordobaHorarioRuta'));

//Para iniciar el servidor
app.listen(app.get('port'), () => {
    console.log('Server en el puerto ', app.get('port'));
});