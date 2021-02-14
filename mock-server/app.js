const express = require('express')
const cors = require('cors')
const app = express()
const port = 3001

const users = require('./data/users.json')

app.use(cors())
app.get('/', (_, response) => {

  response.send('Ops! Caminho inválido. Por favor tente "/users"')
})

app.get('/users', (request, response) => {

  const users = getUsers(request.query.offset, request.query.limit)
  response.status(200).json(users)
})

function getUsers(inputOffset = 0, inputLimit = users.length) {

  const queriedUsers = []
  const offset = parseInt(inputOffset)
  const limit = parseInt(inputLimit)

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