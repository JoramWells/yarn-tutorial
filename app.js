const express = require('express')
const path = require('path')
const db = require('./config/database')

const app = express()



db.authenticate()
.then(()=>console.log('Connected succesfully...'))
.catch(err=>console.log(err))

app.get('/', (req,res) =>{
    res.sendStatus(204)
})

//blog routes
app.use('/blog', require('./routes/blogs'))

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`App running on http://localhost:${PORT}`)
})