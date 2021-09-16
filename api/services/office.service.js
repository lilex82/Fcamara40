const { Op } = require("sequelize");
const { Book, Office } = require("../db/models");


async function getAvailableTime(officeId, date) {

    const office = await Office.findByPk(officeId)
    const maxCapacity = office.max_capacity

    const d = new Date(date)
    const date1 = d.toISOString()  // pegando o ISO  date zerado, hora usada para salvar no banco de dados
    const data = { officeId, date: date1 }



    const totalMorning = await Book.count({
        where: {
            [Op.or]: [
                { ...data, time: 'manha' },
                { ...data, time: 'integral' }
            ] //spread operator
        }
    })
    console.log(totalMorning)

    const totalAfternoon = await Book.count({
        where: {
            [Op.or]: [
                { ...data, time: 'tarde' },
                { ...data, time: 'integral' }
            ] //spread operator
        }
    })

    const periods = []

    if (totalMorning < maxCapacity) {
        periods.push('manha')
    }

    if (totalAfternoon < maxCapacity) {
        periods.push('tarde')
    }

    if (periods.includes('manha') && periods.includes('tarde')) {
        periods.push('integral')
    }

    return periods
}


module.exports = { getAvailableTime }