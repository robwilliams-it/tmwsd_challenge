const express = require('express')
const app = express()
const port = 3000

const messagesRoute = require('./routes/messages')

var bodyParser = require('body-parser');
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', messagesRoute)
app.set('view engine', 'pug')

app.listen(port, () => {
  console.log(`TMWSD is listening at http://localhost:${port}`)
})
