import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Calendar from 'react-calendar';
import {
    BoxContainer,
    FormContainer,
    Input,
    SubmitButton,
} from "../accountBox/common";
import { Marginer } from "../marginer";
import * as S from "./index";
import 'react-calendar/dist/Calendar.css';

//Lila 0915 fazer o import checkAvailability que vai importar do './src/components/services/api.js'
//Lila 0915 checkAvailability roda no back e banco de dados para verificar que tem disponibilidade 


export default function AgendamentoSaoPaulo(props) {
    const [value, setValue] = useState(new Date());
    const [horarioReserva, setHorarioReserva] = useState('');
    const escritorio = "São Paulo";
    const history = useHistory();

    //react-calendar

    function onChange(nextValue) {
        setValue(nextValue);

        //Integração com o back/banco de dados para saber se tem vagas


    }

    //Transformar data no formato "dd/mm/yyyy" - alterar para "yyyy/mm/dd"
    let optionsDate = {
        dateStyle: ('short')
    }
    let date = value.toLocaleDateString('pt-br', optionsDate);

    //Variavéis horário
    const periodoManha = "8h às 12h";
    const periodoTarde = "14h às 18h";
    const periodoIntegral = "Integral";



    function confirmacao() {
        var reserva = {
            escritorio: escritorio,
            data: date,
            periodo: horarioReserva
        }

        let minhasReservas = [];
        minhasReservas.push(reserva);

        console.log(reserva)
        console.log(minhasReservas)

        if (date !== '' && horarioReserva !== '') {
            history.push('confirmacaoreserva');
        } else {
            alert("Necessário escolher data e horário");
        }
    }

    return (
        <S.AppContainer>
            <S.BoxContainer>
                <S.TopContainer>
                    <S.BackDrop />
                    <S.HeaderContainer>
                        <S.HeaderText>Agendamento</S.HeaderText>
                        <S.HeaderText>Escritório {escritorio}</S.HeaderText>
                        <S.SmallText>Escolha a data e o período desejados</S.SmallText>
                    </S.HeaderContainer>
                </S.TopContainer>
                <S.InnerContainer>
                    <BoxContainer>
                        <Calendar
                            onChange={onChange}
                            value={value}
                            minDate={new Date()}
                        />

                        <div>
                            <button value={periodoManha} onClick={e => setHorarioReserva(e.target.value)}>{periodoManha}</button>
                            <button value={periodoTarde} onClick={e => setHorarioReserva(e.target.value)}>{periodoTarde}</button>
                            <button value={periodoIntegral} onClick={e => setHorarioReserva(e.target.value)}>{periodoIntegral}</button>
                        </div>
                        <Marginer direction="vertical" margin="1em" />
                        <Marginer direction="vertical" margin="1,5em" />
                        <SubmitButton type="submit" onClick={confirmacao}>Agendar</SubmitButton>
                    </BoxContainer>
                </S.InnerContainer>
            </S.BoxContainer>
        </S.AppContainer>
    );
}
