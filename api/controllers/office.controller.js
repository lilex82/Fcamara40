const { Office } = require('../db/models')
const { getAvailableTime } = require('../services/office.service')

class OfficeController {
    static async findAll(req, res) {
        const offices = await Office.findAll()
        res.json(offices)
    }
    //criar uma nova função checkAvailability
    static async checkAvailability(req, res) {
        const officeId = +req.params.officeId // o + para receber id
        const date = req.query.date
        const availableTime = await getAvailableTime(officeId, date)
        res.json(availableTime) 

    }
}

module.exports = OfficeController