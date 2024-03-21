const {v4:uuidV4} = require ("uuid")

class User{
    constructor({ id, nome, email, password}){
        this.id = id ?? uuidV4();
        this.nome = nome;
        this.email = email;
        this.password = password;
    }
}

module.exports = User; 