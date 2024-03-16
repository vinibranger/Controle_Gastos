// idMov,tipo, data, descricao, valor, categoria, formaPagamneto
const {v4:uuidV4} = require ("uuid")


class Pagamentos{
    constructor(tipo, data, descricao, valor, categoria, formaPagamneto){
        this.idMov = uuidV4()
        this.tipo = tipo
        this.data = data
        this.descricao = descricao
        this.valor = valor
        this.categoria = categoria
        this.formaPagamneto = formaPagamneto
    }
}
module.exports = Pagamentos