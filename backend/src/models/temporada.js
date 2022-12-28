const mongoose = require('mongoose')

const Temporada = mongoose.model('Temporada', {
    filme_id: { type: mongoose.Types.ObjectId, ref: 'Filme' },
    titulo: String,
    numero_temporada: Number,
    episodios_temporada: Number
})

module.exports = Temporada