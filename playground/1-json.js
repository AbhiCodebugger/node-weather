const fs = require('fs')

const dataBuffer = fs.readFileSync('./1-json.json')
const jsonData = dataBuffer.toString()
const user = JSON.parse(jsonData)
user.name = 'DoDo'
user.age = 8
const stringData = JSON.stringify(user)
const userJson = fs.writeFileSync('./1-json.json', stringData)
