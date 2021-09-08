//Lila 210904: Aqui ficam todos o CSS para os contenedores//

/* import React from 'react'; */
import styled from "styled-components";
/* import { LoginForm } from "./loginForm"; */

export const BoxContainer = styled.div`
  width: 280px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(32, 32, 32, 0.28);
  position: relative;
  overflow: hidden;
`;

export const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

export const BackDrop = styled.div`
width: 160%;
height:550px;
position: absolute;
display: flex;
flex-direction: column;
border-radius: 50%;
transform: rotate(60deg);
top: -290px;
left: -70px;
background:RGB(254 68 0);
background:linear-gradient(
    58deg, 
    RGB(254 68 0) 20%,
    RGB(254 68 0) 100%
);
`;

export const HeaderContainer = styled.div`
width: 100%;
display:flex;
flex-direction:column;
`;

export const HeaderText =styled.h2`
font-size: 30px;
font-weight: 600;
line-height: 1.20;
color: #fff;
z-index:10;
margin:0;
`;

export const SmallText = styled.h5`
color: RGB(254 68 0);
font-weight: 500;
font-size: 11px;
z-index: 10;
margin: 0;
margin-top:7px;
`; 

export const InnerContainer = styled.div`
width:100%;
display:flex;
flex-direction: column;
padding:0 1.8em;
`;

//Maisa 210905: Retirado o CSS do AppContainer do arquivo App.js e incluído neste arquivo
export const AppContainer= styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

//Maisa 210905: Comentei esta parte do código pois incluí diretamente nos arquivos loginForm.jsx e signupForm.jsx

/* export function AccountBox(props) {
  return <BoxContainer>
    <TopContainer>
      <BackDrop />
      <HeaderContainer>
        <HeaderText>Bemvind@!</HeaderText>
        <HeaderText>a FCamara</HeaderText>
        <SmallText>Fazer login</SmallText>
      </HeaderContainer>
    </TopContainer>
    <InnerContainer>
      <LoginForm/>
    </InnerContainer>
  </BoxContainer>
} */

