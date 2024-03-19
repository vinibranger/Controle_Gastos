class PagamentoRepository{
    constructor(){
        this.pagamentos =[]
    }

    findAll(){
       return this.pagamentos
    }


    create(pagamento){
        this.pagamentos.push(pagamento)
        
    }
}

module.exports = PagamentoRepository