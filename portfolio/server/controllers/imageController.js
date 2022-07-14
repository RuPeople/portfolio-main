const uuid = require('uuid')
const path = require('path')
const {Work} = require("../models/models");
const ApiError = require('../error/ApiError')

class  ImageController {
    async create (req, res, next) {
        try{
            const {img} = req.files
            let fileName = uuid.v4() + ".png"
            await img.mv(path.resolve(__dirname, '..', 'static', fileName))

            const image = await Work.create({img:fileName})
            return res.json(image)
        }
        catch (e) {
            next(ApiError.badRequest())
        }
    }
    async getAll (req, res) {
        let {limit, page} = req.query
        page = page || 1
        limit = limit || 10
        let offset = page * limit-limit
        let works;

        works = await Work.findAndCountAll({limit, offset})

        return res.json(works)
    }
    async getOne (req, res, next) {
        const {id} = req.params
        const work = await Work.findOne(
            {
                where: {id},
            }
        )
        return res.json(work)
    }
    async delete (req, res) {

    }
}
module.exports = new ImageController()