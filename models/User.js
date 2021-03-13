const Sequelize = require('sequelize')
const db = require('../config/database')
const bcrypt = require('bcrypt')
const saltRounds = 10;
const jwt = require('jsonwebtoken');


const User = db.define('user',{
    name:{
        type:Sequelize.STRING
    },
    email:{
        type:Sequelize.STRING
    },
    password:{
        type:Sequelize.STRING
    },
    role:{
        type:Sequelize.INTEGER,
        default:0
    },
    image:Sequelize.STRING,
    token:{
        type:Sequelize.STRING
    },
    tokenExp:{
        type:Sequelize.INTEGER
    }

})




module.exports = User