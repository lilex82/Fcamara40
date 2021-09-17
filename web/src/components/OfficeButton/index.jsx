import { useEffect, useState } from 'react'
import { getOffices } from '../services/api'
import S from './style'

//tag <OfficeButton onSelect={(office)=>{}} selected={{vazio ou id}}/> prop/variavel de um objeto = selected
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
