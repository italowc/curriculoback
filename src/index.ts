import cors from 'cors'
import express, { Request, Response } from 'express'
const app = express()
app.use(express.json())
app.use(cors())


const comentariosCurriculo = [
    {
        nome: 'Juca',
        comentario: 'Comentario do juca curriculo'
    },
    {
        nome: 'Ana',
        comentario: 'Comentario da ana curriculo'
    },
]

app.get('/comentariosCurriculo', (request: Request, response: Response) => {
    return response.status(200).json({
        mensagem: "Todos os comentariosCurriculo",
        comentariosCurriculo
    })
})

app.post('/comentariosCurriculo', (request: Request, response: Response) => {
    const { nome, comentario } = request.body

    const novoItem = {
        nome,
        comentario
    }
    
    comentariosCurriculo.push(novoItem)

    return response.status(201).json({
        mensagem: "Adicionado",
        comentariosCurriculo
    })
})


const comentariosSobre = [
    {
        nome: 'Guilherme',
        comentario: 'Comentario do Guilherme sobre'
    },
    {
        nome: 'Marcia',
        comentario: 'Comentario da Marcia sobre'
    },
]

app.get('/comentariosSobre', (request: Request, response: Response) => {
    return response.status(200).json({
        mensagem: "Todos os comentariosSobre",
        comentariosSobre
    })
})

app.post('/comentariosSobre', (request: Request, response: Response) => {
    const { nome, comentario } = request.body

    const novoItem = {
        nome,
        comentario
    }
    
    comentariosSobre.push(novoItem)

    return response.status(201).json({
        mensagem: "Adicionado",
        comentariosSobre
    })
})



const comentariosContato = [
    {
        nome: 'Guilherme',
        celular: '99999999',
        email: "email@email.com"
    },
    {
        nome: 'Marcia',
        celular: '88888888',
        email: "email@email.com2"
    },
]


app.get('/comentariosContato', (request: Request, response: Response) => {
    return response.status(200).json({
        mensagem: "Todos os Contatos",
        comentariosContato
    })
})

app.post('/comentariosContato', (request: Request, response: Response) => {
    const { nome, celular, email } = request.body

    const novoItem = {
        nome,
        celular,
        email
    }
    
    comentariosContato.push(novoItem)

    return response.status(201).json({
        mensagem: "Adicionado",
        comentariosContato
    })
})


app.listen(3333, () => {
    console.log('servidor rodando')
})

