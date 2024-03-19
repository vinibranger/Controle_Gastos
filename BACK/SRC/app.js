const fastify = require('fastify');
/*const db = require("./database");*/
const PagamentoRepository = require('./Movimentos/pagamentoRepository');
const PagamentoSevices = require('./Movimentos/pagamentosService');

const app = fastify({ logger: true });

const pagamentoRepository = new PagamentoRepository()
const pagamentoSevices = new PagamentoSevices(PagamentoRepository);

app.get("/hello", (request, reply)=>{
    reply.send({message:"HELLO WORD!!"})
})

app.post("/api/movimento", (request, reply) =>{
    const pagamento = pagamentoSevices.createPagamento({tipo, data, descricao, valor, categoria, formaPagamneto})
    reply.code(201).send({message:"movimento salvo com sucesso.", pagamento})

})


module.exports = app; 