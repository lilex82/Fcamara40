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


export default function UserForm(props) {
    const history = useHistory();
    const goBack = () => {
        history.goBack()
    }

    const [ name, setName ] = useState('');
    const [ lastName, setlastName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ errorMsg, setErrorMsg ] = useState('');

    const { date } = useParams();
    const { time } = useParams();
    const { office } = useParams();

    function HandleUser(e) {
        e.preventDefault();
        
        const values = [name, lastName, email];
        let errorMsg = '';

        const allFieldsFilled = values.every((field) => {
        const value = `${field}`.trim();
        return value !== '';
        });

        if (allFieldsFilled) {
            history.push(`booking/${office}&${date}&${time}&${name}&${lastName}&${email}`); 
        } else {
            errorMsg = 'Por favor, preencha todos os campos.';
        }
        setErrorMsg(errorMsg);        
    }

    return (
        <S.AppContainer>
        <S.BoxContainer>
            <S.TopContainer>
            <S.BackDrop />
            <S.HeaderContainer>
                <S.HeaderText>Adicione seus dados</S.HeaderText>                
            </S.HeaderContainer>
            </S.TopContainer>
            <S.InnerContainer>
            <BoxContainer>
                <FormContainer>
                    <Input type="name" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
                    <Input type="lastName" placeholder="Sobrenome" value={lastName} onChange={e => setlastName(e.target.value)} />
                    <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)}/>
                    <Marginer direction="vertical" margin={5} />
                </FormContainer>
                <Marginer direction="vertical" margin="1em" />
                <Marginer direction="vertical" margin="1,5em" />
                <S.GoForwardButton type="submit" onClick={HandleUser}>Continuar</S.GoForwardButton>
                <S.GoBackButton type="submit" onClick={goBack}>Voltar</S.GoBackButton>
                {errorMsg && <S.SmallText className="errorMsg">{errorMsg}</S.SmallText> }
            </BoxContainer>
            </S.InnerContainer>
        </S.BoxContainer>
        </S.AppContainer>
    );
}