const express = require('express')
const mongoose = require('mongoose')

const app = express()

const url = 'mongodb+srv://admin:password@cluster0.dse5t.mongodb.net/materials?retryWrites=true&w=majority'


mongoose.connect(url,{useNewUrlParser: true})
const con = mongoose.connection

con.on('open',function(){
    console.log('Connected')
})

const matRouter = require('./Routers/materials')
app.use('/materials',matRouter)
app.listen(9000,()=>{
    console.log('Server started')
}
)
