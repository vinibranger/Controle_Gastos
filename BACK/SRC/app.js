const fastify = require('fastify');
/*const db = require("./database");*/
const PagamentoRepository = require('./Movimentos/pagamentoRepository');
const PagamentoSevices = require('./Movimentos/pagamentosService');
const PagamentoController = require('./Movimentos/pagamentoController');

const app = fastify({ logger: true });

const pagamentoRepository = new PagamentoRepository()
const pagamentoServices = new PagamentoSevices(pagamentoRepository);
const pagamentoController = new PagamentoController(pagamentoServices)

app.get("/hello", (request, reply)=>{
    reply.send({message:"HELLO WORD!!"})
})

app.get("/api/movimento", (request, reply)=>{
    const {code, body } = pagamentoController.index(request)
    reply.code(code).send(body)
})


app.post("/api/movimento", (request, reply) =>{
    const {code, body } = pagamentoController.save(request)
     reply.code(code).send(body)

})
module.exports = app; 