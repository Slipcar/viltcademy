const { response } = require('express')
const express = require('express')
const router = express.Router()
const Temporada = require('../models/temporada')
const Episodio = require('../models/episodio')

// RETORNA TEMPORADA
router.get('/temporada/:temporada', async (req, res) => {
    try {
       const temporada_id = req.params.temporada
       const episodios = await Episodio.find({
        temporada_id
       })

       res.json({ error: false, episodios })
    } catch (error) {
        res.json({ error: true, message: error.message }) 
    }
})

module.exports = router