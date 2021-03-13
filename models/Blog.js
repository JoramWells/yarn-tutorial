const Sequelize = require('sequelize')
const db = require('../config/database')

const Blog = db.define('blog',{
    title:{
        type:Sequelize.STRING
    },
    description:{
        type:Sequelize.STRING
    },

})

module.exports = Blog