const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    username: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    role: {type: DataTypes.STRING, defaultValue: "USER"},
})

const Work = sequelize.define('work',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
    category: {type: DataTypes.STRING},
    smallDescription: {type: DataTypes.STRING},
    thumbnail: {type: DataTypes.STRING},
    bigDescription: {type: DataTypes.STRING},
    website: {type: DataTypes.STRING},
    stack: {type: DataTypes.STRING},
    year: {type: DataTypes.INTEGER}
})


module.exports = {
    User,
    Work
}

