const Sequelize = require('sequelize')

const sequelize = new Sequelize('socialnetwork', 'root','',
                 {
                     host:'localhost', 
                     dialect:'mysql',
                     operatoAliases:false
                    })

module.exports = sequelize