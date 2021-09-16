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

export default function BookingSaoPaulo(props) {
    const [value, setValue] = useState(new Date());
    const [ time, setTime ] = useState('');
    const office = "São Paulo";

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
    const morning = "Dia todo (8h até 18h)";
    const afternoon = "Manhã (8h até 12h)";
    const fullTime = "Tarde (12h até 18h)";
    

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
                <S.BackDrop />
                <S.HeaderContainer>
                <S.TitleContainer>
                    <S.HeaderText>Vamos lá..</S.HeaderText>
                    <S.InstructionText>Agora, selecione a data.</S.InstructionText>
                </S.TitleContainer>
                </S.HeaderContainer>
                </S.TopContainer>
                <S.InnerContainer>
                    <BoxContainer>
                    <div>
                    <S.SubtitleText>Data</S.SubtitleText>  
                    <S.SmallText type="button" onClick={() => setCalendar(!calendar)}>DD/MM/AA</S.SmallText>
                        {calendar ? <Calendar
                            onChange={onChange}
                            value={value}
                            minDate={new Date()}
                        /> : <div>
                        <S.SubtitleText>Horários</S.SubtitleText>
                        <S.SmallText type="button" button value={fullTime} onClick={e => setTime(e.target.value)}>{fullTime}</S.SmallText>
                        <S.SmallText type="button" value={morning} onClick={e => setTime(e.target.value)}>{morning}</S.SmallText>
                        <S.SmallText type="button" button value={afternoon} onClick={e => setTime(e.target.value)}>{afternoon}</S.SmallText> 
                        </div>   }
                    </div>             
                   
                        <S.GoForwardButton type="submit" onClick={confirm}>Continuar</S.GoForwardButton>
                        <S.GoBackButton type="submit" onClick={goBack}>Voltar</S.GoBackButton>
                    </BoxContainer>
                </S.InnerContainer>
        </>        

    );
}
