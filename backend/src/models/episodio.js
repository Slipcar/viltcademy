const mongoose = require('mongoose')

const Episodio = mongoose.model('Episodio', {
    filme_id: { type: mongoose.Types.ObjectId, ref: 'Temporada' },
    titulo: String,
    descricao: String,
    numero: Number,
    capa: String
})

module.exports = Episodio