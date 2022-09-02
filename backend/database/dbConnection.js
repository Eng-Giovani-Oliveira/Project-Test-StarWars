const mongoose = require("mongoose")

const uri = "mongodb://localhost:27017/starwars"

async function main(){
    await mongoose.connect(uri)
    console.log("Foi conectado no banco")
}

main()
    .catch("Erro ao conectar ao banco de dados")