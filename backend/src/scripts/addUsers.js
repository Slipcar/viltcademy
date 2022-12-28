const database = require('../services/database')

const Usuario = require('../models/usuario')
const usuariosJson = require('../data/usuarios.json')

const addUsers = async () => {
    try {
        for (let usuario of usuariosJson) {
            console.log(`Inserindo ${usuario.nome}`)
            await new Usuario(usuario).save()
        }
        console.log('Final do script')
    } catch (error) {
        console.log(error.message)
    }
}

addUsers()