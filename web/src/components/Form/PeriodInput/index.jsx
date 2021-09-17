import { useEffect, useState } from "react"
import { checkAvailability } from "../../services/api"

// criar onSelect e add no office page

export default function PeriodInput({ date, office,onSelect }) {
    const [availablePeriod, setAvailability] = useState([])

    useEffect(async () => {
        if (office.id && date) {
            const data = await checkAvailability(office.id, date)
            setAvailability(data)
        }
    }, [date, office])

    const selectPeriod = (e)=> {
        onSelect(e.currentTarget.value)
    }
    return (
        <div>
            {availablePeriod.includes('integral') ? (
                <label>
                    <input name='period' type='radio' value='integral' onChange={selectPeriod}/>
                    <span>Dia todo (8h até 18h)</span>
                </label>
            ) : null}
            {availablePeriod.includes('tarde') ? (
                <label>
                    <input name='period' type='radio' value='tarde' onChange={selectPeriod}/>
                    <span>Tarde (12h até 18h)</span>
                </label>

            ) : null}
            {availablePeriod.includes('manha') ? (
                <label>
                    <input name='period' type='radio' value='manha' onChange={selectPeriod} />
                    <span>Manhã (8h até 12h)</span>
                </label>
            ) : null}
        </div>
    )
}
