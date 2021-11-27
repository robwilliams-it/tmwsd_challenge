var express = require('express')
var router = express.Router()
const db = require('../database');

router.get('/', function (req, res) {
  // send 
  // link for the new message form
  // links for all existing messages
  db.getMessages()
  .then((messageData)=> {
    res.render('messages/index', { adjective: 'amazing', messages: messageData });
  })
  .catch((error)=>{
    res.statusCode = 500;
    res.end(error);
  })
})

router.post('/message', function (req, res) {
  // store message
  const message = req.body.null;
  if (message.length < 1) {
    db.getMessages()
    .then((messageData)=> {
      res.render('messages/index', { adjective: 'Nothing submitted', messages: messageData})
    })
    .catch((error)=>{
      console.error(error);
      res.statusCode = 500;
      res.end(error);
    })
  } else {
    db.setMessage(message)
    .then((dbResponse)=> {
      return db.getMessages();
    })
    .then((messageData)=>{
      res.render('messages/index', { adjective: 'Submitted', messages: messageData})
    })
    .catch((error)=>{
      console.error(error);
      res.statusCode = 500;
      res.end(error);
    })
  }
})

router.get('/message/*', function (req, res) {
  // send message by id
  const messageID = req.url.slice(req.url.lastIndexOf('/') + 1);
  db.getMessageByID(messageID)
  .then((messageData)=> {
    res.render('messages/singleMessage', { message: messageData[0] });
    return (messageData[0].message_id)
  })
  .then((id)=>{
    db.deleteMessageByID(messageID);
  })
  .catch((error)=>{
    res.statusCode = 500;
    res.end(error);
  })
})

module.exports = router
