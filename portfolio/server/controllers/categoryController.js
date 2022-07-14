const {Category} = require("../models/models");
const path = require('path')

class CategoryController{
    async create (req, res, next) {
        const {name} = req.body
        const category = await Category.create({name})
        return res.json(category)
    }
    async getAll (req, res) {
        const categories = await Category.findAll()
        return res.json(categories)
    }
}

module.exports = new CategoryController()