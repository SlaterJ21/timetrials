'use strict'

require('dotenv').config()

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use(express.static('public'))

app.get('/api', (req,res,next){
  res.status(200).send("hello from api")
})

app.get('/public/', (req,res,next){
  res.sendStatus(200)
})

app.get('/public/:id', (req,res,next){
  res.status(200).send(req.params.id)
})

app.post('/public', (req,res,next){
  res.status(200).send(req.body)
})

app.patch('/public/:id', (req,res,next){
  let result = { id:req.params.id, name:req.body.name}
  res.status(200).send(req.params.id)
})

app.delete('/public/:id', (req,res,next){
  res.status(200).send(req.params.id)
})

app.use((req,res,next) => {
  res.status(404).send({error: {message: "404 Not Found"}})
})

app.listen(port, function(){
  console.log(`Listening on port ${port}`)
})

module.exports = app
