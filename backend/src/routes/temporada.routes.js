const { response } = require('express')
const express = require('express')
const router = express.Router()
const Temporada = require('../models/temporada')
const Episodio = require('../models/episodio')

//RETORNA TODOS OS REGISTROS
router.get('/',async (req, res) => {
    try{
        const temporada = await Temporada.find({})
        res.json({ error: false, temporada }) 
    } catch (error) {
        res.json({ error: true, message: error.message }) 
    }
})

// RETORNA TEMPORADA
router.get('/:temporada', async (req, res) => {
    try {
       const temporada_id = req.params.temporada
       const episodios = await Temporada.find({
        temporada_id
       })

       res.json({ error: false, episodios })
    } catch (error) {
        res.json({ error: true, message: error.message }) 
    }
})
//ADICIONA TEMPORADA
router.post('/add', async (req, res) => {
    try {
        const temporada = req.body
        const response = await new Temporada(temporada).save()
        res.json({ error: false, temporada: response })
    } catch (error) {
        res.json({ error: true, message: error.message })
    }
})

//ADICIONA EPISÓDIO
router.post('/episodio', async (req, res) => {
    try {
        const episodio = req.body
        const response = await new Episodio(episodio).save()
        res.json({ error: false, episodio: response })
    } catch (error) {
        res.json({ error: true, message: error.message })
    }
})

module.exports = router