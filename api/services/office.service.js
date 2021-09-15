const { Op } = require("sequelize");
const { Book, Office } = require("../db/models");


async function getAvailableTime(officeId, date) {

    const office = await Office.findByPk(officeId)
    const maxCapacity = office.max_capacity

    const d = new Date(date)
    const date1 = d.toISOString()  // pegando o ISO  date zerado, hora usada para salvar no banco de dados
    const data = { officeId, date: date1 }



    const totalManha = await Book.count({
        where: {
            [Op.or]: [
                { ...data, time: 'manha' },
                { ...data, time: 'integral' }
            ] //spread operator
        }
    })
    console.log(totalManha)

    const totalTarde = await Book.count({
        where: {
            [Op.or]: [
                { ...data, time: 'tarde' },
                { ...data, time: 'integral' }
            ] //spread operator
        }
    })

    const periodos = []

    if (totalManha < maxCapacity) {
        periodos.push('manha')
    }

    if (totalTarde < maxCapacity) {
        periodos.push('tarde')
    }

    if (periodos.includes('manha') && periodos.includes('tarde')) {
        periodos.push('integral')
    }

    return periodos
}


module.exports = { getAvailableTime }