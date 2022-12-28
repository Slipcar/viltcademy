const database = require('../services/database')

const Filme = require('../models/filme')
const filmesJson = require('../data/filmes.json')

const addFilmes = async () => {
    try {
        for (let filme of filmesJson) {
            console.log(`Inserindo ${filme.titulo}`)
            await new Filme(filme).save()
        }
        console.log('Final do script')
    } catch (error) {
        console.log(error.message)
    }
}

addFilmes()