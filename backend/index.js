const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const database = require('./src/services/database')
const cors = require('cors')
const app = express()

const filmeRoutes = require('./src/routes/filmes.routes')
const usuarioRoutes = require('./src/routes/usuarios.routes')
const episodiosRoutes = require('./src/routes/episodios.routes')
const temporadaRoutes = require('./src/routes/temporada.routes')

// Middlewares
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())

// Routes
app.use('/', filmeRoutes)
app.use('/usuario', usuarioRoutes)
app.use('/episodio', episodiosRoutes)
app.use('/temporada', temporadaRoutes)

app.listen(8000, () =>{
    console.log('Meu servidor está funcionando')
})