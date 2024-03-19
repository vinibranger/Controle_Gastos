const {v4:uuidV4} = require ("uuid")


class Recebidos{
    constructor(tipo, data, descricao, valor, categoria, formaPagamento){
        this.idMov = uuidV4()
        this.tipo = tipo
        this.data = data
        this.descricao = descricao
        this.valor = valor
        this.categoria = categoria
        this.formaPagamento = formaPagamento
    }
}