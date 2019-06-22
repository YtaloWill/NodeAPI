const express = require('express')
// importa o express(microframework)
// serve para usar rotas (endereços de url onde o usuario pode acessar)
// tbm serve para usar views (opcoes visuais)

const cors = require('cors')

const mongoose = require('mongoose')
// basicamente serve pra usar javascript em vez de sql

const requireDir = require('require-dir')

const app = express()
app.use(express.json())
// joga no app a função do express para usar as rotas

mongoose.connect('mongodb://localhost:27017/nodeapi', {useNewUrlParser: true})
// conecta com o banco

requireDir('./src/models')

app.use('/api', require('./src/routes'))
// quando o usuario acessa a rota
// a barra serve para que seja especificada a rota raiz (seria como um caminho de diretorio)
// req significa a requisição do servidor informações da requisição (ip, usuario, endereço, tudo)
// res resposta da requisição
app.use(cors())

app.listen(3001)