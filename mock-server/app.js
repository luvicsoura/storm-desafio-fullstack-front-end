const { response } = require('express')
const express = require('express')
const app = express()
const port = 3000

const users = require('./data/users.json')

app.get('/', (_, response) => {

  response.send('Ops! Caminho inválido. Por favor tente "/users"')
})

app.get('/users', (request, response) => {

  const users = getUsers(parseInt(request.query.offset), parseInt(request.query.limit))
  response.status(200).json(users)
})

function getUsers(offset = 0, limit = users.length) {

  const queriedUsers = []

  console.log(offset, limit, offset + limit)
  for(let i = offset; isRowValid(i, offset + limit); i++) {

    queriedUsers.push(users[i])
  }

  return queriedUsers
}

function isRowValid(row, utmostRowQueried) {
  return row < users.length && row < utmostRowQueried
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})