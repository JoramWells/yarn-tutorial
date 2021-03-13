const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const db = require('./config/database')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname, 'public')))

db.authenticate()
.then(()=>console.log('Connected succesfully...'))
.catch(err=>console.log(err))


//blog routes
app.use('/blog', require('./routes/blogs'))

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`App running on http://localhost:${PORT}`)
})