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



export default function BookingSantos(props) {
    const [value, setValue] = useState(new Date());
    const [time, setTime] = useState('');
    const office = "Santos";

    const history = useHistory();
    const goBack = () => {
        history.goBack()
    }



    const [calendar, setCalendar] = useState(false);
    //react-calendar

    function onChange(nextValue) {
        setValue(nextValue);

        //Integração com o back/banco de dados para saber se tem vagas


    }

    let date = (value.getDate() + "-" + (value.getMonth() + 1) + "-" + value.getFullYear());

    //Variavéis horário
    const morning = "8h às 12h";
    const afternoon = "14h às 18h";
    const fullTime = "Integral";


    function confirm() {
        var booking = {
            office: office,
            date: date,
            time: time
        }

        let minhasReservas = [];
        minhasReservas.push(booking);

        console.log(booking)
        console.log(minhasReservas)

        if (date !== '' && time !== '') {
            history.push(`user/${booking.office}&${booking.date}&${booking.time}`);
        } else {
            alert("Necessário escolher data e horário");
        }
    }

    return (
        <>
            <S.TopContainer>
                <S.HeaderContainer>
                    <S.BackDrop>
                        <S.TitleContainer>
                            <S.HeaderText>Vamos lá..</S.HeaderText>
                            <S.InstructionText>Agora, selecione a data.</S.InstructionText>
                        </S.TitleContainer>
                    </S.BackDrop>
                </S.HeaderContainer>
            </S.TopContainer>
            <S.InnerContainer>
                <S.DateContainer>
                    <S.SubtitleText>Data</S.SubtitleText>
                    <S.SmallText type="button" onClick={() => setCalendar(!calendar)}>AA/MM/DD</S.SmallText>
                    {calendar ? <Calendar
                        onChange={onChange}
                        value={value}
                        minDate={new Date()}
                    /> : <S.TimeContainer>
                        <S.SubtitleText>Horários</S.SubtitleText>
                        <S.SmallText type="button" button value={fullTime} onClick={e => setTime(e.target.value)}>{fullTime}</S.SmallText>
                        <S.SmallText type="button" value={morning} onClick={e => setTime(e.target.value)}>{morning}</S.SmallText>
                        <S.SmallText type="button" button value={afternoon} onClick={e => setTime(e.target.value)}>{afternoon}</S.SmallText>
                    </S.TimeContainer>}
                </S.DateContainer>
                <S.GoButtonContainer>
                    <S.GoForwardButton type="submit" onClick={confirm}>Continuar</S.GoForwardButton>
                    <S.GoBackButton type="submit" onClick={goBack}>Voltar</S.GoBackButton>
                </S.GoButtonContainer>
            </S.InnerContainer>
        </>
    );
}

