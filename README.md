#SQUAD 40 Projeto: Data 2021-09-16 ate as 23.59Horas
- Situação atual = inacabado
- Backend funcional, puxando dados do banco de dados
- Front-end 1 ('./booking') parcialmente responsivo com codigos de seleção inativos.
- Front-end 2 ('./Pages,./OfficeButton, ./PeriodInput, ./Form, ./DateInput) Integração front e back acabado ate nova pasta './PeriodInput', responsivo - não.


Projeto final do Hackathon do Programa de Formação Season 2 do grupo FCamara.
(https://digital.fcamara.com.br/)

Aplicação web, onde o consultor realiza o agendamento, com dia e horário, para poder ir ao escritório.

## Estrutura do projeto
Dentro da pasta o projeto temos 2 pastas:
- Web: React.JS application.
- API: Express.JS application.
 Cada pasta contem seu proprio `package.json` definindo as respectivas dependencias com autonomia integra de publicar novas versões do package tanto no npm ou yarn.
```
|- package.json => pasta raiz do projeto
|------ web
|-------- package.json  => Express.JS project
|------ api
|-------- package.json => React APP
```

## Como instalar e executar
- Para usar este repositório, você precisa instalar:
1. Clonar o repositorio no local:
```
git clone https://github.com/lilex82/Fcamara.git
```
2. Instalar as dependencias na pasta raiz
-  `$npm install`
-  `$npm install react-calendar `
-  `$npm install react-scripts`
-  `$npm react-router-dom`
-  `$npm install axios`

1. Rodar a aplicação
-   `npm start`

localhost:xxxx
Abrir [http://localhost:3000](http://localhost:3000)

## Tecnologias

- [Express]("https://expressjs.com")
- [Sequelize ORM]("https://sequelize.org/master/")
- [PostgreSQL]("https://www.postgresql.org/")
- [React]("https://reactjs.org/")

## Fluxo do usuário
- Escolher oficina ( São Paulo, Santos)
- Escolher data e horario
- Inserir o e-mail


## Membros

<a href="https://github.com/maisawr">Maisa Wolff</a>

<a href="https://github.com/lilex82">Lila An</a>