const { Office } = require ('../db/models')

class OfficeController {
    static async findAll(req, res) {
        console.log('ola')
        const offices = await Office.findAll()
        res.json(offices)
    }
}

module.exports= OfficeController