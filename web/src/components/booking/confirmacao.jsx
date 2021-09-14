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

export default function ConfirmacaoReserva(props) {

    return (
        <S.AppContainer>
          <S.BoxContainer>
            <S.TopContainer>
              <S.BackDrop />
              <S.HeaderContainer>
                <S.HeaderText>Sistema de</S.HeaderText>
                <S.HeaderText>Agendamento</S.HeaderText>
                <S.SmallText>Seu agendamento foi realizado com sucesso</S.SmallText>
              </S.HeaderContainer>
            </S.TopContainer>
            <S.InnerContainer>
              <BoxContainer>
                <table>
                    <tr>Data </tr>
                    <tr>Horário </tr>
                    <tr>Estação de trabalho</tr>
                </table>
                <Marginer direction="vertical" margin="1em" />
                <Marginer direction="vertical" margin="1,5em" />
                <table>
                    <thead>Cuidados</thead>
                    <tr>O uso de máscara é obrigatório</tr>
                    <tr>Leve seu álcool em gel</tr>
                    <tr>Mantenha o distanciamento social</tr>
                </table>
              </BoxContainer>
            </S.InnerContainer>
          </S.BoxContainer>
        </S.AppContainer>
    );
}