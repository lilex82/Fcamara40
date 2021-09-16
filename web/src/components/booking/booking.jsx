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
                <S.HeaderText>Sistema de</S.HeaderText>
                <S.HeaderText>Agendamento</S.HeaderText>
              </S.HeaderContainer>
            </S.TopContainer>
            <S.InnerContainer>
              <BoxContainer>
              <S.SmallText>Confirme seus dados</S.SmallText>
                <S.InformationContainer>
                  <S.InformationColumn>
                    <small>Escritório</small>
                    <small>Data</small>
                    <small>Horário</small>
                    <small>Estação</small>
                    <small>Nome</small>
                    <small>E-mail</small>
                  </S.InformationColumn>
                  <S.InformationColumn>
                    <small>{office}</small>
                    <small>{date}</small>
                    <small>{time}</small>
                    <small>MESA</small>
                    <small>{`${name} ${lastName}`}</small>
                    <small>{email}</small>
                  </S.InformationColumn>
                </S.InformationContainer>
                <Marginer direction="vertical" margin="1em" />
                <Marginer direction="vertical" margin="1,5em" />
                <div>
                  <small>Cuidados</small>
                  <small>O uso de máscara é obrigatório</small>
                  <small>Mantenha o distanciamento social (2m)</small>
                </div>
                <SubmitButton type="submit" onClick={confirm}>Continuar</SubmitButton>
                <SubmitButton type="submit" onClick={goBack}>Voltar</SubmitButton>
              </BoxContainer>
            </S.InnerContainer>
          </S.BoxContainer>
        </S.AppContainer>
    );
}