const index = require(".");

require('dotenv').config({path:'variables.env'});

index.set('port',process.env.port);
const server = index.listen(index.get('port'),()=>{
    //console.log(process.env.nome+" teste")
    console.log ("servidor rodando na porta: "+server.address().port);
    console.log("[SERVER ONLINE] clique para abrir: http://localhost:3000");
});

 
