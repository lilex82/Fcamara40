import { useEffect, useState } from 'react'
import { getOffices } from '../services/api'
import S from './style'

export default function OfficeButton({ onSelect, selected }) {
    const [offices, setOffices] = useState([])

    useEffect(async () => {
        const data = await getOffices()
        setOffices(data)
    }, [])

    const selectOffice = (office) => {
        onSelect(office)
    }

    return (
        <S.ButtonGroup>
            {offices.map((office, key) => {
                return (
                    <S.Button key={key}
                    onClick={() => selectOffice(office)}
                    active={selected.id === office.id}>
                        {office.name}
                    </S.Button>
                )
            })
            }
        </S.ButtonGroup>
    )
}
