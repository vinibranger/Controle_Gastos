const Pagamento = require("./pagamento")

class PagamentoSevices{
    constructor (repository){
        this.repository = repository
    }
    
    findAllPagamentos(){
        return this.repository.findAll()
    }

    createPagamento({tipo, data, descricao, valor, categoria, formaPagamento}){
        const newPagamento = new Pagamento(tipo, data, descricao, valor, categoria, formaPagamento);

        this.repository.create(newPagamento)
        return newPagamento
    }
    
}


module.exports = PagamentoSevices