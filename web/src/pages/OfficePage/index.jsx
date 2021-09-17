import { useEffect, useState } from 'react'
import DateInput from '../../components/Form/DateInput';
import OfficeButton from '../../components/OfficeButton';
import { getInstructionFromCurrentState } from './helpers';
import S from './style'

export default function OfficePage() {
    const [currentState, setCurrentState] = useState({
        office: {},
        date: undefined
    })

    const [pageText, setPageText] = useState(
        getInstructionFromCurrentState(currentState)
    );

    useEffect(() => {
        setPageText(getInstructionFromCurrentState(currentState))
    }, [currentState])

    const handleSelectedOffice = (office) => {
        // criado um novo objeto chamado currentState alterando propriedade office ln. 8
        setCurrentState((state) => ({
            ...state,
            office
        }))
    }

    const handleSelectedDate =(date) =>{
        setCurrentState((state) => ({
            ...state,
            date
        }))
    }

    return (
        <S.Page>
            <S.PageHeader>
                <S.Logo />
                <S.HeaderTitle>{pageText.title}</S.HeaderTitle>
                <S.HeaderInstruction>{pageText.instruction}</S.HeaderInstruction>
                <OfficeButton onSelect={handleSelectedOffice} selected={currentState.office} />
            </S.PageHeader>
            <S.PageBody>
                <DateInput onSelect ={handleSelectedDate} />
            </S.PageBody>
        </S.Page>
    )
}