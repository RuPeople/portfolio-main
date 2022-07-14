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
    smallDescription: {type: DataTypes.STRING},
    thumbnail: {type: DataTypes.STRING},
    bigDescription: {type: DataTypes.STRING},
    website: {type: DataTypes.STRING},
    stack: {type: DataTypes.STRING},
    year: {type: DataTypes.INTEGER}
})

const Image = sequelize.define('image',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    img: {type: DataTypes.STRING},
})

const Category = sequelize.define('category', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING}
})

Work.hasMany(Image)
Image.belongsTo(Work)

Category.hasMany(Work)
Work.belongsTo(Category)

module.exports = {
    User,
    Image,
    Work,
    Category
}

