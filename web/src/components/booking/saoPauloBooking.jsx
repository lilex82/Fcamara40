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

    //Transformar data no formato "dd/mm/yyyy" - alterar para "yyyy/mm/dd"
    
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
        <S.AppContainer>
            <S.BoxContainer>
                <S.TopContainer>
                <S.BackDrop />
                <S.HeaderContainer>
                    <S.HeaderText>Agendamento</S.HeaderText>
                    <S.HeaderText>Escritório {office}</S.HeaderText>
                    <S.SmallText>Escolha a data e o período desejados</S.SmallText>
                </S.HeaderContainer>
                </S.TopContainer>
                <S.InnerContainer>
                <button onClick={() => setCalendar(!calendar)}>Click</button>
                    
                    <BoxContainer>
                        {calendar ? <Calendar
                            onChange={onChange}
                            value={value}
                            minDate={new Date()}
                        /> : <div>
                            <button value={morning} onClick={e => setTime(e.target.value)}>{morning}</button>
                            <button value={afternoon} onClick={e => setTime(e.target.value)}>{afternoon}</button>
                            <button value={fullTime} onClick={e => setTime(e.target.value)}>{fullTime}</button>
                        </div>   }
                                  
                        <Marginer direction="vertical" margin="1em" />
                        <Marginer direction="vertical" margin="1,5em" />
                        <SubmitButton type="submit" onClick={confirm}>Continuar</SubmitButton>
                        <SubmitButton type="submit" onClick={goBack}>Voltar</SubmitButton>
                    </BoxContainer>
                </S.InnerContainer>
            </S.BoxContainer>
        </S.AppContainer>
    );
}
