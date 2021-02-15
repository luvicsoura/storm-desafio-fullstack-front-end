const express = require('express')
const cors = require('cors')
const app = express()
app.disable('x-powered-by')
const port = 3001

const userEntries = require('./data/users.json')

const TOTAL_COUNT_HEADER = "x-total-items-count"

app.use(cors({
  exposedHeaders: [TOTAL_COUNT_HEADER]
}))
app.get('/', (_, response) => {

  response.send('Ops! Caminho inválido. Por favor tente "/users"')
})

app.get('/users', (request, response) => {

  const users = getUsers(request.query.offset, request.query.limit)
  response.status(200).header({[TOTAL_COUNT_HEADER]: userEntries.length}).json(users)
})

function getUsers(inputOffset = 0, inputLimit = userEntries.length) {

  const queriedUsers = []
  const offset = parseInt(inputOffset)
  const limit = parseInt(inputLimit)

  for(let i = offset; isRowValid(i, offset + limit); i++) {

    queriedUsers.push(userEntries[i])
  }

  return queriedUsers
}

function isRowValid(row, utmostRowQueried) {
  return row < userEntries.length && row < utmostRowQueried
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})