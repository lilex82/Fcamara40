import styled from "styled-components";

const ButtonGroup = styled.div`
display : flex;
justify-content: center;
`;


const Button = styled.button`
background: ${({active})=>active ?"#FE6026": "none"};
border-radius: 5px;
border: 2px solid;
border-color:${({active})=>active ?"#FE6026": "#303033"};
color:${({active})=>active ?"#FFFFF": "#303033"};
min-width: 265px;
min-height: 55px;
font-size: 20px;
margin: 0 5px;
`;

export default {
    Button,
    ButtonGroup
}

