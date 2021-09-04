//Formulario de login 

import React from "react";
import {
    BoxContainer,
    FormContainer,
    Input,
    MutedLink,
    SubmitButton,
  } from "./common";
import { Marginer } from "../marginer";



export function LoginForm(props) {
    return <BoxContainer>
        <FormContainer>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Senha" />
        <Marginer direction="vertical" margin={5} />
        </FormContainer>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">Esqueceu a senha?</MutedLink>
      <Marginer direction="vertical" margin="1,5em" />
      <SubmitButton type="submit">Cadastrar</SubmitButton>
    </BoxContainer>
}