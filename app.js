const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

const user = require('./src/js/user')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true
  })
)

app.use(static.path(__dirname, '/dist'))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'))
  // res.sendFile('../index.html')
})

app.get('/test', (req, res) => {
  res.send('test')
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})
