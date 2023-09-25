import express from 'express'
import http from 'http'
//import socketio from 'socket.io'

const app = express()
const server = http.createServer(app)

app.use(express.static('public'))



app.get('/',(req, res) => {
    res.send('Hello world')
})



server.listen(3000, ()=>{
    console.log('O server esta rodando na porta 3000')
})