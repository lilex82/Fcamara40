# api

## Login:
[POST] /login
```json
{
  email: "user@mail.com",
  password: "123456"
}
```
 
## Cadastro:
[POST] /register
```json
{
  name: "Lila An",
  email: "user@mail.com",
  password: "123456"
}
```
 
## Lista de escritórios
[GET] /offices
```javascript
// response para seleção de um dos escritorios
[
  {
    id: 1,
    name: "SP",
    max_capacity: 240
  },
 
  {
    id: 2,
    name: "SANTOS",
    max_capacity: 40
  }
]
```
 
## Verificar disponibilidade
[GET] /offices/officeId/availability?date=2021-09-14&officeId=1
 
```javascript
// response
[ 'manha', 'tarde', 'integral' ]
```
 
## Agendar periodo
[POST] /offices/:officeId/book
```javascript
// body
{
  "date": '2021-09-14',
  "periodo":"string", 
  "email" : "user@email.com"
}
 
// success - status code: 200 - agendamento realizado
// error - status code: 400 - periodo não disponivel, por favor tente outro dia ou horário
//https://sequelize.org/master/manual/model-querying-finders.html
```

# entities

## Office
```javascript
{
  id: "number", 
  name: "string",
  max_capacity: "number"
}
```
## Book
```javascript
{
  date:   "date",
  time: "string", // 'manha' || 'tarde' || 'integral'
  email: "string"
}

```
## Availability
```javascript

```


### Criação da entidade Office
```bash
npx sequelize-cli model:generate --name Office --attributes name:string,max_capacity:integer
```
### Gerar seed de Office (create-offices)
```bash
npx sequelize-cli seed:generate --name create-offices
```

### Criação da entidade Book
```bash
npx sequelize-cli model:generate --name Book --attributes date:date,time:string,email:string
```

## Proximos passos
Gerar sorteio de mesa vai ficar para o projeto futuro: 
(Pending) Models/table