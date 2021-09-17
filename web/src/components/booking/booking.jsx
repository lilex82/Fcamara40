import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
    BoxContainer,
    FormContainer,
    Input,
    SubmitButton,
  } from "../accountBox/common";
import { Marginer } from "../marginer";
import * as S from "./index";


export default function ConfirmInformation(props) {
    //let date = new URLSearchParams(window.location.search).get('date')
    const { office } = useParams();
    const { date } = useParams();
    const { time } = useParams();
    const { name } = useParams();
    const { lastName } = useParams();
    const { email } = useParams();
    const history = useHistory();
    const goBack = () => {
      history.goBack()
    }

    function confirm() {
      //Integração com api/banco de dados
      //axios.post

      history.push('bookinginformation'); 
    }

    return (
        <S.AppContainer>
          <S.BoxContainer>
            <S.TopContainer>
              <S.BackDrop />
              <S.HeaderContainer>
                <S.HeaderText>Confirme seus dados</S.HeaderText>
              </S.HeaderContainer>
            </S.TopContainer>
            <S.InnerContainer>
              <BoxContainer>
                <S.InformationContainer>
                  <S.InformationColumn>
                    <S.SmallText>Escritório</S.SmallText>
                    <S.SmallText>Data</S.SmallText>
                    <S.SmallText>Horário</S.SmallText>
                    <S.SmallText>Estação</S.SmallText>
                    <S.SmallText>Nome</S.SmallText>
                    <S.SmallText>E-mail</S.SmallText>
                  </S.InformationColumn>
                  <S.InformationColumn>
                    <S.SmallText>{office}</S.SmallText>
                    <S.SmallText>{date}</S.SmallText>
                    <S.SmallText>{time}</S.SmallText>
                    <S.SmallText>MESA</S.SmallText>
                    <S.SmallText>{`${name} ${lastName}`}</S.SmallText>
                    <S.SmallText>{email}</S.SmallText>
                  </S.InformationColumn>
                </S.InformationContainer>
                <S.AlertContainer>
                  <S.SmallText>Cuidados</S.SmallText>
                  <S.SmallText>O uso de máscara é obrigatório</S.SmallText>
                  <S.SmallText>Mantenha o distanciamento social (2m)</S.SmallText>
                </S.AlertContainer>
                <S.GoForwardButton type="submit" onClick={confirm}>Continuar</S.GoForwardButton>
                <S.GoBackButton type="submit" onClick={goBack}>Voltar</S.GoBackButton>
              </BoxContainer>
            </S.InnerContainer>
          </S.BoxContainer>
        </S.AppContainer>
    );
}