const Pagamento = require("./pagamento")

class PagamentoSevices{
    constructor (repository){
        this.repository = repository
    }
    
    findAllPagamentos(){
        return this.repository.findAllPagamentos()
    }

    createPagamento({tipo, data, descricao, valor, categoria, formaPagamneto}){
        const newPagamento = new Pagamento(tipo, data, descricao, valor, categoria, formaPagamneto);

        this.repository.create(newPagamento)
        return newPagamento
    }
    
}


module.exports = PagamentoSevices