const { Pool } = require('pg');
const ip = '127.0.0.1';
const pool = new Pool({
    host: '127.0.0.1',
    database: 'messages',
    port: 5432,
    user: 'test',
    idleTimeoutMillis: 1,
  });

  const getMessages = async () => {
    return (
        pool
        .query('SELECT * FROM usermessages')
        .then(messageData => {
            return (messageData.rows);
        })
        .catch(error => { 
            return (error);
        })
    )
  }


  const getMessageByID = async (messageID) => {
    return (
        pool
        .query(`SELECT * FROM usermessages WHERE message_id = ${messageID}`)
        .then(messageData => {
            return (messageData.rows);
        })
        .catch(error => { 
            return (error);
        })
    )
  }

  const setMessage = async ( text ) => {
    const q = 'INSERT INTO usermessages ( body ) VALUES ( $1 )';
    const value = [ text ]
    return (
      pool
      .query(q, value)
        .then(postResponse => {
            return (postResponse);
        })
        .catch(error => {
            return (error);
        })
    );
  }
  
  const deleteMessageByID = async ( id ) => {
    const q = `DELETE FROM usermessages WHERE message_id = ${id}`;
    return (
      pool
      .query(q)
        .then(postResponse => {
            return (postResponse);
        })
        .catch(error => {
            return (error);
        })
    );
  }

  
  

  module.exports = {
    getMessages,
    getMessageByID,
    setMessage,
    deleteMessageByID
  }

  