const express = require('express')
const router = express.Router()
const db = require('../config/database')
const Blog = require('../models/Blog')

router.get('/',(req,res)=>{
    Blog.findAll()
    .then(blogs=>{
        console.log(blogs)
        res.sendStatus(200)
    })
    .catch(err=>console.log(err))
})

router.get('/add', (req,res)=>{
    const data ={
        title:"Mr jay",
        description:"The SQL statement above would insert a new record into the table. The  column would be assigned a unique value. The column would be set to  and the column would be set to Monsen"
    }

    let {title,description} = data
    Blog.create({
        title,
        description
    })
    .then(blogs => res.redirect('/blog'))
    .catch(err => console.log(err))
})

module.exports = router