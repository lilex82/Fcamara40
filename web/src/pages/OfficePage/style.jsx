import styled from "styled-components";

const Page = styled.div`

`;

const PageHeader = styled.header`
background:rgba(254, 68, 0, 0.3);
border-radius: 0px 0px 99px 0px;
height: 415px;
width: 100%;
max-width: 100%;
padding-top: 46px;
padding-left: 135px;
box-sizing: border-box;
color: #303033;
display: flex;
flex-direction: column;
justify-content: space-around;
justify-content: space-between;
padding-bottom: 46px;
`;

const SLogo = styled.img`
max-width: 273px;
height: 59px;
`;

const Logo = () => <SLogo src='/img/grupo-fcamara-laranja.png' />

const HeaderTitle = styled.h2`
`;

const HeaderInstruction = styled.h4`
`;

const PageBody = styled.div`
width: 100%;
max-width: 100%;
padding-top: 46px;
padding-left: 135px;
box-sizing: border-box;
color: #303033;
`;

export default {
    Page,
    PageHeader,
    Logo,
    HeaderTitle,
    HeaderInstruction,
    PageBody
}

