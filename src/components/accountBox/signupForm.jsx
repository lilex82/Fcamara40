// Formulario para of cadastro so seguir o "loginForm" dentro da pasta accountBox
// Maisa 210904: Formulario de cadastro

import React, { useState } from "react";
import {
    BoxContainer,
    FormContainer,
    Input,
    SubmitButton,
  } from "./common";
import { Marginer } from "../marginer";
import * as S from "./index";

export default function SignUpForm(props) {
  /* const history = useHistory(); */
  const [ name, setName ] = useState('');
  const [ lastName, setlastName ] = useState('');
  const [ CPF, setCPF ] = useState();
  const [ email, setEmail ] = useState('');
  const [ password, setPassword] = useState();

  //Maisa 210905: Alerta para informar que o cadastro foi realizado com sucesso

  function handleSignUp(e) {
      alert('Cadastro realizado com sucesso!');
      e.preventDefault();
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
                <Input type="name" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
                <Input type="lastName" placeholder="Sobrenome" value={lastName} onChange={e => setlastName(e.target.value)} />
                <Input type="cpf" placeholder="CPF" value={CPF} onChange={e => setCPF(e.target.value)} />
                <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                <Input type="password" placeholder="Senha" secureTextEntry={true} value={password} onChange={e => setPassword(e.target.value)}/>
                <Marginer direction="vertical" margin={5} />
            </FormContainer>
            <Marginer direction="vertical" margin="1em" />
            <Marginer direction="vertical" margin="1,5em" />
            <SubmitButton type="submit" onClick={handleSignUp}>Cadastrar</SubmitButton>
          </BoxContainer>
        </S.InnerContainer>
      </S.BoxContainer>
    </S.AppContainer>
  );
}