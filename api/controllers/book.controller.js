const { Book } = require('../db/models')
const { getAvailableTime } = require('../services/office.service')

class BookController {
    static async create(req, res) {
        //pegar os dados
        const bookingData = {
            date: req.body.date,
            time: req.body.time,
            officeId: req.body.officeId,
            email: req.body.email, 
            firstName: req.body.firstName
        }
        const availableTime = await getAvailableTime(bookingData.officeId, bookingData.date)
        if (!availableTime.includes(bookingData.time)) {
            res.status(400) 
            return res.send('Periodo indisponivel para este dia')
        }
        //criar o booking
        const book = await Book.create(bookingData)

        //retornar of book feito
        res.json(book)
    }
    


    
}

module.exports = BookController