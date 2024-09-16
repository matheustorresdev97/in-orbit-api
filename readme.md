<h1 align="center">
  <a href="#">
    In Orbit API
  </a>
</h1>

<p align="center">
Backend do projeto In Orbit gerenciador de metas</p>


<p align="center">
  <a href="#%EF%B8%8F-frontend">Frontend</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-deploy">Deploy</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p><br>


## 🖼️ Frontend

O frontend desta aplicação encontra-se no repositório: 
- Em Construção

## 🦾 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:


- NODE.JS
- FASTIFY
- DRIZZLE-ORM
- ZOD
- TYPESCRIPT


## 🚀 Deploy

1. Faça o clone do projeto em uma pasta local 
2. Acesse a pasta onde foi feito a cópia:
3. Instale as dependencias do projeto:
```bash
npm install
```
4. Configure as variáveis de ambiente criando o arquivo `.env` (use o arquivo `.env.example` como modelo)
5. Execute as `migrations`
```bash
npx drizzle-kit generate
```
6. execute as `seeds`
```bash
npm run seed
```
7. Execute o servidor backend da aplicação:
```bash
npm run dev
```

## 💻 Projeto

```
POST http://localhost:3333/goals
Content-Type: application/json

{
  "title": "My New Goal",
  "desiredWeeklyFrequency": 3
}

###

POST http://localhost:3333/completions
Content-Type: application/json

{
  "goalId": "aqfg79yjqgmbjpgt5r6ywp48"
}

### 

GET http://localhost:3333/pending-goals

###

GET http://localhost:3333/summary

### 
DELETE http://localhost:3333/goal
Content-Type: application/json

{
  "goalId": "12345"
}


###
DELETE http://localhost:3000/completion
Content-Type: application/json

{
  "completionId": "67890"
}
```

