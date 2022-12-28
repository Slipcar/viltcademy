const express = require('express')
const router = express.Router()
const Filme = require('../models/filme')
const Temporada = require('../models/temporada')
const _ = require('underscore')

// RETORNA HOME
router.get('/home', async (req, res) => {
    try {
        // recuperando todos os filmes
        let filmes = await Filme.find({})
        let finalFilmes = []

        // Recuperando temporadas
        for (let filme of filmes) {
            const temporadas = await Temporada.find({
                filme_id: filme._id
            })

            const newFilme = {...filme._doc, temporadas}
            finalFilmes.push(newFilme)
        }

        // Misturar reultados aleatoriamente
        finalFilmes = _.shuffle(finalFilmes)

        // Filme principal
        const principal = finalFilmes[0]
        
        // Separar por seções
        const secoes = _.chunk(finalFilmes, 5)

        res.json({ error: false, principal, secoes })


    } catch (error) {
        res.json({ error: true, message: error.message }) 
    }
})

//RETORNA TODOS OS REGISTROS
router.get('/',async (req, res) => {
    try{
        const filmes = await Filme.find({})
        res.json({ error: false, filmes }) 
    } catch (error) {
        res.json({ error: true, message: error.message }) 
    }
})

//RETORNA REGISTRO VIA ID
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const filme = await Filme.findById(id)
        res.json({ error: false, filme })
    } catch (error) {
        res.json({ error: true, message: error.message })
    }
})

//CRIA NOVO REGISTRO
router.post('/', async (req, res) => {
    try {
        const filme = req.body
        const response = await new Filme(filme).save()
        res.json({ error: false, filme: response })
    } catch (error) {
        res.json({ error: true, message: error.message })
    }
})

//ALTERA REGISTRO VIA ID
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const novo_filme = req.body

        const filme = await Filme.findByIdAndUpdate(id, novo_filme, {new: true})
        res.json({ error: false, filme })
    } catch (error) {
        res.json({ error: true, message: error.message })
        
    }
})

//DELETA REGISTRO VIA ID
router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const filme_deletado = await Filme.findByIdAndDelete(id)
        res.json({ error: true })
    } catch (error) {
        res.json({ error: true, message: error.message })
    }
})

module.exports = router