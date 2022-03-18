"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const comentariosCurriculo = [
    {
        nome: 'Juca',
        comentario: 'Comentario do juca curriculo'
    },
    {
        nome: 'Ana',
        comentario: 'Comentario da ana curriculo'
    },
];
app.get('/comentariosCurriculo', (request, response) => {
    return response.status(200).json({
        mensagem: "Todos os comentariosCurriculo",
        comentariosCurriculo
    });
});
app.post('/comentariosCurriculo', (request, response) => {
    const { nome, comentario } = request.body;
    const novoItem = {
        nome,
        comentario
    };
    comentariosCurriculo.push(novoItem);
    return response.status(201).json({
        mensagem: "Adicionado",
        comentariosCurriculo
    });
});
const comentariosSobre = [
    {
        nome: 'Guilherme',
        comentario: 'Comentario do Guilherme sobre'
    },
    {
        nome: 'Marcia',
        comentario: 'Comentario da Marcia sobre'
    },
];
app.get('/comentariosSobre', (request, response) => {
    return response.status(200).json({
        mensagem: "Todos os comentariosSobre",
        comentariosSobre
    });
});
app.post('/comentariosSobre', (request, response) => {
    const { nome, comentario } = request.body;
    const novoItem = {
        nome,
        comentario
    };
    comentariosSobre.push(novoItem);
    return response.status(201).json({
        mensagem: "Adicionado",
        comentariosSobre
    });
});
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
];
app.get('/comentariosContato', (request, response) => {
    return response.status(200).json({
        mensagem: "Todos os Contatos",
        comentariosContato
    });
});
app.post('/comentariosContato', (request, response) => {
    const { nome, celular, email } = request.body;
    const novoItem = {
        nome,
        celular,
        email
    };
    comentariosContato.push(novoItem);
    return response.status(201).json({
        mensagem: "Adicionado",
        comentariosContato
    });
});
app.listen(process.env.PORT || 3333, () => {
    console.log('servidor rodando');
});
