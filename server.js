const express = require('express')
//import http from 'http'
//import socketio from 'socket.io'

const app = express()
app.get('/',(req, res) => {
    res.send('Hello world')
})



app.listen(3000, ()=>{
    console.log('O server esta rodando na porta 3000')
})