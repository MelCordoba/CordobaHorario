const mongoose = require('mongoose');

//con esto si la base no existe mongo automaticamente lo crea
const URI = 'mongodb://localhost/CordobaHorarioBD';

mongoose.connect(URI)
    .then(db => console.log('La base de datos esta conectada'))
    .catch(err => console.error(err));

module.exports = mongoose;