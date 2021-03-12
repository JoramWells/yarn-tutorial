const express = require('express')
const path = require('path')
const router = express.Router()
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'pug')
app.set('views', path.resolve('./src/views'))

//Body parsing
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

//create express router
app.use(router)

const routePath = path.resolve('./dist')
app.use(express.static(routePath))

//DB Connection
require('./SRC/database/connection')


router.use((err, req, res, next) =>{
    if(err){
        return res.send(err.message)
    }
})


app.listen(3000, ()=>{
    console.log('App running on http://localhost:3000')
})