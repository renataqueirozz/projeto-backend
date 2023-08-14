const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Simaria Conceição',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'Desenvolvedora e Instrutora'
    },
    {

        nome: 'Iana Chan',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'Fundadora da Programaria'
    
    },
    {

        nome: 'Nina da Hora',
        imagem: 'https://github.com/simaraconceicao.png',
        minibio: 'Hacker Antirracista'
    }
]

function mostraMulheres(request, response) {
    response.json(mulheres)


}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)