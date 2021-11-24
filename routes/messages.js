var express = require('express')
var router = express.Router()

router.get('/', function (req, res) {
  res.render('messages/index', { adjective: 'here' })
})

router.get('/a', function (req, res) {
  res.render('components/newMessageForm', { adjective: 'here' })
})

module.exports = router
