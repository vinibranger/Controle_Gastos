const fastify = require('fastify');
const db = require("./database")

const app = fastify({ logger: true });

module.exports = app; 

app.get("/hello", (request, reply)=>{
    reply.send({message:"HELLO WORD!!"})
})

