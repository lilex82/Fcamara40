
import styled from "styled-components";

//Container
export const AppContainer= styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 0;
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

export const HeaderContainer = styled.div`
width: 350px;
height: 238px;
display:flex;
flex-direction: column;
justify-content: center;
`;

export const TitleContainer= styled.div`
width: 264px;
height: 154px;
display: flex;
flex-direction: column;
`;

export const OfficeButtonContainer= styled.div`
width: 345px;
height: 40px;
display: flex;
justify-content: space-between;
margin-top: 44px;
padding: 0px;
`;

export const BoxContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column; 
align-items: flex-start;
margin-top:10px;
`;

export const CalendarContainer = styled.div`
width: 100%;
display: flex;
align-items: flex-start;
`;

export const GoButtonContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`;

export const AlertContainer = styled.div`
width: 100%;
display:flex;
flex-direction:column;
align-items: center;
`;

export const BackDrop = styled.div`
position: absolute;
width: 414px;
height: 325px;
left: -3px;
top: 0px;
background: rgba(254, 68, 0, 0.5);
opacity: 0.3;
border-radius: 0px 0px 99px 0px;
`;

export const HeaderText =styled.h2`
font-family: 'Montserrat', sans-serif;
font-size: 24px;
font-weight: 600;
line-height: 29px;
color: #303033;
margin-top: 38px;
`;

export const InstructionText = styled.h3`
font-family: 'Montserrat', sans-serif;
font-style: normal;
font-size: 16px;
font-weight: 400;
line-height: 20px;
color: #303033;
margin: 7px 0px 0px 0px;
`;

export const SubtitleText = styled.h3`
font-family: 'Montserrat', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
color: #303033;
margin: 0px 0px 12px 0px;
`;

export const SmallText = styled.h5`
font-family: 'Montserrat', sans-serif;
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 17px;
color: #303033;
margin: 0px 0px 16px 0px;
`; 

export const ErrorText = styled.h3`
font-family: 'Montserrat', sans-serif;
font-style: normal;
font-size: 16px;
font-weight: 400;
line-height: 20px;
color: #D93A00;
margin: 7px 0px 0px 0px;
`;

export const InnerContainer = styled.div`
width:100%;
display:flex;
flex-direction: column;
padding:0 1.8em;
`;

export const OfficeButton = styled.button`
  width: 172px;
  height: 40px;
  color: #303033;
  font-size: 14px;
  font-weight: 400;
  text-align: center;
  border: 1px solid #303033;
  border-radius: 4px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: #fff;
  &:hover {
    filter: brightness(1.03);
  }
`;

export const InformationContainer = styled.div`
display: flex;
justify-content: space-between;
`;

export const InformationColumn = styled.div `
display: flex;
flex-direction: column;
justify-content: space-between;
margin: 1px;
`;

export const GoForwardButton = styled.button`
  width: 272px;
  height: 42px;
  color: #FCFCFC;
  padding: 10px;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: #FE6026;
  &:hover {
    filter: brightness(1.03);
  }
`;

export const GoBackButton = styled.button`
  width: 272px;
  height: 42px;
  color: #FE4400;
  padding: 10px;
  margin-top: 11px;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 400;
  text-align: center;
  border: 1px solid #FE4400;
  border-radius: 5px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: #FCFCFC;
  &:hover {
    filter: brightness(1.03);
  }
`;

