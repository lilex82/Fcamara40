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
        <S.AppContainer>
          <S.BoxContainer>
            <S.TopContainer>
              <S.BackDrop />
              <S.HeaderContainer>
                <S.HeaderText>Sistema de</S.HeaderText>
                <S.HeaderText>Agendamento</S.HeaderText>
                <S.SmallText>Escolha o escritório</S.SmallText>
              </S.HeaderContainer>
            </S.TopContainer>
            <S.InnerContainer>
              <BoxContainer>
                <S.OfficeButton type="button" onClick={goSaoPaulo}>São Paulo</S.OfficeButton>
                <Marginer direction="vertical" margin="1em" />
                <Marginer direction="vertical" margin="1,5em" />
                <S.OfficeButton type="button" onClick={goSantos}>Santos</S.OfficeButton>
              </BoxContainer>
            </S.InnerContainer>
          </S.BoxContainer>
        </S.AppContainer>
    );

}