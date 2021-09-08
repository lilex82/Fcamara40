//Lila 210904:Formulario de login 

import React, { useState } from "react";
import {
    BoxContainer,
    FormContainer,
    Input,
    MutedLink,
    SubmitButton,
  } from "./common";
import { Marginer } from "../marginer";
import * as S from "./index";
import axios from "axios";


export function LoginForm(props) {

  //Maisa 210905: Função para pesquisar o email do usuário na API
  const [ email, setEmail ] = useState('');
  const [ password, setPassword] = useState();

  function handleLogIn(e) { 
    axios.get("#")
    .then(response => {

    });

    /* .catch((error) => {
      setErro(true);
      alert('Usuário não existe');
    }); */
  }

  return (
    <S.AppContainer>
      <S.BoxContainer>
        <S.TopContainer>
          <S.BackDrop />
          <S.HeaderContainer>
            <S.HeaderText>Bemvind@!</S.HeaderText>
            <S.HeaderText>a FCamara</S.HeaderText>
            <S.SmallText>Fazer cadastro</S.SmallText>
          </S.HeaderContainer>
        </S.TopContainer>
        <S.InnerContainer>
          <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                <Input type="password" placeholder="Senha" secureTextEntry={true} value={password} onChange={e => setPassword(e.target.value)}/>
                <Marginer direction="vertical" margin={5} />
            </FormContainer>
            <Marginer direction="vertical" margin="1em" />
            <MutedLink href="#">Esqueceu a senha?</MutedLink>
            <Marginer direction="vertical" margin="1,5em" />
            <SubmitButton type="submit" onClick={handleLogIn}>Cadastrar</SubmitButton>
          </BoxContainer>
        </S.InnerContainer>
      </S.BoxContainer>
    </S.AppContainer>
    );
}