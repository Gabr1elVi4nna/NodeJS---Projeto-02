# NodeJS---Projeto-02
Projeto 02 Aulas Técnicas de programação 

Para iniciar o servidor localhost digite no terminal:
  npm run start

Desafio do servidor localhost

O grupo deve desenvolver um sistema completo em node.js no qual contenha dois diretórios:
./recursos
./views
- O usuário (cliente do servidor) deve adicionar todo o projeto de website (formato .html, etc) no diretório
“./views” e arquivos no diretório “./recursos” . A fim de teste, vão conter seis tipos de arquivos com nome e
extensão: arquivo.docx, arquivo.jpeg, arquivo.mp3, arquivo.mp4, arquivo.json e arquivo.md. dentro do
diretório “./recursos”
- O sistema de back-end deve direcionar a abertura dos arquivos via navegador através dos caminhos (rotas)
de serviço:
http://localhost:3000/abertura/tipoDocx Abrir arquivo arquivo.docx
http://localhost:3000/abertura/tipoJpeg Abrir arquivo arquivo.jpeg
http://localhost:3000/abertura/tipoMp3 Abrir arquivo arquivo.mp3
http://localhost:3000/abertura/tipoMp4 Abrir arquivo arquivo.mp4
http://localhost:3000/abertura/tipoJson Abrir arquivo arquivo.json
http://localhost:3000/abertura/tipoMd Abrir arquivo arquivo.md
- Caso não encontre o caminho digitado, o sistema deve enviar um site chamado “404.html” com informações
que o caminho não foi encontrado.
- Conforme o usuário entrar nos caminhos GET via URL (descritos abaixo) o sistema deve abrir os seguintes
sites (arquivos html):
http://localhost:3000/ Abrir site index.html
http://localhost:3000/contatos Abrir site contato.html
http://localhost:3000/produtos Abrir site produto.html
http://localhost:3000/catalogos Abrir site catalogo.html
- Cada grupo deve montar os arquivos htmls, rotas e logica mencionada.
- No arquivo index.html o grupo deve descrever o projeto e apresentar o grupo
