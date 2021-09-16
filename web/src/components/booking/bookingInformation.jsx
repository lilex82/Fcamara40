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

export default function ShowInformation(props) {

  //Integração com api/banco de dados
  //axios.get

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
              <S.SmallText>Seu agendamento foi realizado com sucesso</S.SmallText>
              <S.SmallText>Escritório</S.SmallText>
                    <S.SmallText>Data</S.SmallText>
                    <S.SmallText>Horário</S.SmallText>
                    <S.SmallText>Estação</S.SmallText>
                    <S.SmallText>Nome</S.SmallText>
                    <S.SmallText>E-mail</S.SmallText>
                <S.AlertContainer>
                  <S.SmallText>Cuidados</S.SmallText>
                  <S.SmallText>O uso de máscara é obrigatório</S.SmallText>
                  <S.SmallText>Mantenha o distanciamento social (2m)</S.SmallText>
                </S.AlertContainer>
              </BoxContainer>
            </S.InnerContainer>
          </S.BoxContainer>
        </S.AppContainer>
    );
}