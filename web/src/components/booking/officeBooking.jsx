//Maisa 210905: Tela para escolha da localidade do escritório: São Paulo ou Santos

import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
    BoxContainer,
    FormContainer,
    Input,
    SubmitButton,
  } from "../accountBox/common";
import { Marginer } from "../marginer";
import * as S from "./index";

//lila0915 - fazer o import getOffice
//lila0915 - await no getOffice porque ele retorna uma promise

export default function OfficeBooking(props) {
    const history = useHistory();

    const goSantos = () => history.push('santosbooking')
    const goSaoPaulo = () => history.push('saopaulobooking')

    return (
      <>
            <S.TopContainer>
              <S.HeaderContainer>
                <S.BackDrop>
                <S.TitleContainer>
                <S.HeaderText>Olá!</S.HeaderText>
                <S.InstructionText>Selecione o escritório para seu agendamento.</S.InstructionText>
                </S.TitleContainer>
                <S.OfficeButtonContainer>
                <S.OfficeButton type="button" onClick={goSaoPaulo}>São Paulo</S.OfficeButton>
                <S.OfficeButton type="button" onClick={goSantos}>Santos</S.OfficeButton>
                </S.OfficeButtonContainer> 
                </S.BackDrop>      
              </S.HeaderContainer>
            </S.TopContainer>
            <S.InnerContainer>
              <S.BoxContainer>
                <S.DateContainer>
                <S.SubtitleText>Data</S.SubtitleText>  
                <S.SmallText>DD/MM/AA</S.SmallText> 
                </S.DateContainer>
                <S.TimeContainer>
                <S.SubtitleText>Horários</S.SubtitleText>
                <S.SmallText>Dia todo (8h até 18h)</S.SmallText>
                <S.SmallText>Manhã (8h até 12h)</S.SmallText> 
                <S.SmallText>Tarde (12h até 18h)</S.SmallText> 
                </S.TimeContainer>
              </S.BoxContainer>
              <S.GoButtonContainer>
                <S.GoForwardButton>Continuar</S.GoForwardButton>
              </S.GoButtonContainer>
              
            </S.InnerContainer>
      </>
    );
}