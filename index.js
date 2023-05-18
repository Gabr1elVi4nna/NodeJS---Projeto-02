//import do frame work express

const express = require("express"); //commonjs
const res = require("express/lib/response");
const path = require("path");

//import express from "express"; //module js

//criando rota

const router = express.Router();




//pagina index.html
router.get('/',(req,res)=> { 

    res.sendFile(path.join(__dirname,"./views/index.html")); 
    
    //res.status(404).send("Pagina não encontrada ou inexistente. ");

});

router.get('/index',(req,res)=> { 

    res.sendFile(path.join(__dirname,"./views/index.html")); 
    
    //res.status(404).send("Pagina não encontrada ou inexistente. ");

});

router.get('/index.html',(req,res)=> { 

    res.sendFile(path.join(__dirname,"./views/index.html")); 
    
    //res.status(404).send("Pagina não encontrada ou inexistente. ");

});


//Pagina contato

router.get('/contato',(req,res)=> { 

    res.sendFile(path.join(__dirname,"./views/contato.html")); 
    
    //res.status(404).send("Pagina não encontrada ou inexistente. ");

}); 

router.get('/contato.html',(req,res)=> { 

    res.sendFile(path.join(__dirname,"./views/contato.html")); 
    
    //res.status(404).send("Pagina não encontrada ou inexistente. ");
 
});

//pagina produto
router.get('/produto',(req,res)=> { 

    res.sendFile(path.join(__dirname,"./views/produto.html")); 
    
    //res.status(404).send("Pagina não encontrada ou inexistente. ");
 
});

router.get('/produto.html',(req,res)=> { 

    res.sendFile(path.join(__dirname,"./views/produto.html")); 
    
    //res.status(404).send("Pagina não encontrada ou inexistente. ");
 
});


//pagina catalogo
router.get('/catalogo',(req,res)=> { 

    res.sendFile(path.join(__dirname,"./views/catalogo.html")); 
    
    //res.status(404).send("Pagina não encontrada ou inexistente. ");
 
});

router.get('/catalogo.html',(req,res)=> { 

    res.sendFile(path.join(__dirname,"./views/catalogo.html")); 
    
    //res.status(404).send("Pagina não encontrada ou inexistente. ");
 
});





//arquivo word
router.get('/abertura/tipoDocx',(req,res)=>{
    res.sendFile(path.join(__dirname,"./recursos/arquivo.docx")); 

});

router.get('/tipoDocx',(req,res)=>{
    res.sendFile(path.join(__dirname,"./recursos/arquivo.docx")); 

});

router.get('/arquivo.dockx',(req,res)=>{
    res.sendFile(path.join(__dirname,"./recursos/arquivo.docx")); 

});

router.get('/arquivodockx',(req,res)=>{
    res.sendFile(path.join(__dirname,"./recursos/arquivo.docx")); 

});





//arquivo jpeg
router.get('/abertura/tipoJpeg',(req,res)=>{
    res.sendFile(path.join(__dirname,"./recursos/arquivo.jpeg")); 

});

router.get('/tipoJpeg',(req,res)=>{
    res.sendFile(path.join(__dirname,"./recursos/arquivo.jpeg")); 

});

router.get('/arquivo.jpeg',(req,res)=>{
    res.sendFile(path.join(__dirname,"./recursos/arquivo.jpeg")); 

});

router.get('/arquivojpeg',(req,res)=>{
    res.sendFile(path.join(__dirname,"./recursos/arquivo.jpeg")); 

});




//arquvi json
router.get('/abertura/tipoJson',(req,res)=>{
    res.sendFile(path.join(__dirname,"./recursos/arquivo.json")); 

});

router.get('/tipoJson',(req,res)=>{
    res.sendFile(path.join(__dirname,"./recursos/arquivo.json")); 

});

router.get('/arquivo.Json',(req,res)=>{
    res.sendFile(path.join(__dirname,"./recursos/arquivo.json")); 

});

router.get('/arquivoJson',(req,res)=>{
    res.sendFile(path.join(__dirname,"./recursos/arquivo.json")); 

});




//arquivo md
router.get('/abertura/tipoMd',(req,res)=>{
    res.sendFile(path.join(__dirname,"./recursos/arquivo.md")); 

});

router.get('/tipoMd',(req,res)=>{
    res.sendFile(path.join(__dirname,"./recursos/arquivo.md")); 

});

router.get('/arquivo.Md',(req,res)=>{
    res.sendFile(path.join(__dirname,"./recursos/arquivo.md")); 

});

router.get('/arquivoMd',(req,res)=>{
    res.sendFile(path.join(__dirname,"./recursos/arquivo.md")); 

});



//arquivo mp3
router.get('/abertura/tipoMp3',(req,res)=>{
    res.sendFile(path.join(__dirname,"./recursos/arquivo.mp3")); 

});

router.get('/tipoMp3',(req,res)=>{
    res.sendFile(path.join(__dirname,"./recursos/arquivo.mp3")); 

});

router.get('/arquivo.Mp3',(req,res)=>{
    res.sendFile(path.join(__dirname,"./recursos/arquivo.mp3")); 

});

router.get('/arquivoMp3',(req,res)=>{
    res.sendFile(path.join(__dirname,"./recursos/arquivo.mp3")); 

});




//arquivo mp4
router.get('/abertura/tipoMp4',(req,res)=>{
    res.sendFile(path.join(__dirname,"./recursos/arquivo.mp4")); 

});

router.get('/tipoMp4',(req,res)=>{
    res.sendFile(path.join(__dirname,"./recursos/arquivo.mp4")); 

});

router.get('/arquivo.Mp4',(req,res)=>{
    res.sendFile(path.join(__dirname,"./recursos/arquivo.mp4")); 

});

router.get('/arquivoMp4',(req,res)=>{
    res.sendFile(path.join(__dirname,"./recursos/arquivo.mp4")); 

});




//arquivo pdf
router.get('/abertura/tipoPdf',(req,res)=>{
    res.sendFile(path.join(__dirname,"./recursos/arquivo.pdf")); 

});

router.get('/tipoPdf',(req,res)=>{
    res.sendFile(path.join(__dirname,"./recursos/arquivo.pdf")); 

});

router.get('/arquivo.Pdf',(req,res)=>{
    res.sendFile(path.join(__dirname,"./recursos/arquivo.pdf")); 

});

router.get('/arquivoPdf',(req,res)=>{
    res.sendFile(path.join(__dirname,"./recursos/arquivo.pdf")); 

});




//erro 404
router.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, './views/404.html'));
  });


//configuração para exportação

const index = express();

index.use('/', router);
module.exports = index;




