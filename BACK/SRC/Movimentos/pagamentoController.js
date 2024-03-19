class PagamentoController{
    constructor (service) {
        this.service = service
    }

    index(request){
        const pagamentos = this.service.findAllPagamentos()
        return {code : 200, body:{pagamentos}}
    }

    save(request){
        const {tipo, data, descricao, valor, categoria, formaPagamento} = request.body
        if(!tipo || !descricao || !data || !valor || !categoria || !formaPagamento){
            return {code: 400 , body:{message:"Campos obrigatorios faltando"}}
        }
        
        const pagamento = this.service.createPagamento({tipo, data, descricao, valor, categoria, formaPagamento})
        return { code: 201, body:{message:"movimento salvo com sucesso.", pagamento}}
    }
}

module.exports = PagamentoController