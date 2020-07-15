const mongoose = require('mongoose');
const {Schema} = mongoose;

const CordobaHorarioSchema = new Schema({
    fecha: {type: Date, requiere: true},
    horarios: {type: TimeRanges, requiere: true},
    sustituye: {type: String, requiere: true},
    servicio: {type: String, requiere: true},
    diaPagado: {type: String, requiere: true}    
});

module.exports = mongoose.model('CordobaHorario', CordobaHorarioSchema);