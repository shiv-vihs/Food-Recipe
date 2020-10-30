import styled from "styled-components"

export const FooterTop = styled.div`
width:100%;
height:auto;
//display:flex;
padding: 35px 0;
background-color:rgb(51,51,51);
color: white;
`
export const Content = styled.div`
max-width:960px;
margin:0 auto;
height:auto;
display:flex;
justify-content:space-between;
@media only screen and (max-width:767px){
    flex-wrap:wrap;
    max-width:480px;
    //align-items:flex-start;
}
@media only screen and (max-width:480px){
    flex-wrap:wrap;
    max-width:320px;
    //align-items:flex-start;
}
`

export const Column = styled.div`
padding:10px;
font-family: OpenSans;
width:25%;
@media only screen and (max-width:768px){
    width:100%;
}

`

export const Span = styled.div`
width: 97%; 
   border-bottom: 1px solid #484848; 
   line-height: 0.1em;
   margin-bottom:30px;
`
export const ColumnHeading = styled.span`
font-size:16px;
font-family:OpenSans;
background-color:#333333; 
color: white;
padding-right:10px;
`
export const FooterBottom = styled.div`
padding: 18px 0;
background-color:#2A2A2A;
color: white;
height:auto;
`

export const CopyRight = styled.div`
font-family:OpenSans;
font-size:14px;
`

export const FooterText = styled.div`
font-size:14px;
color: rgb(184, 184, 184);
line-height: 24px;
`

export const InputWrapper = styled.div`
margin-top:15px;
height: 44px;
width:100%;
display:flex;
`
export const StyledInput = styled.input`
width:65%;
height: 100%;
padding:0;
outline:none;
margin:0;
color: #808080;
background-color:#3a3a3a;
border: 1px solid #474747;
`

export const StyledButton = styled.button`
width:35%;
margin:0;
height: 100%;
background-color: ${props=>props.theme.color};
color:white;
box-shadow:0;
padding:3px;
border:none;
font-family:OpenSans;
font-weight:700;
font-size:11px;
@media only screen and (max-width:767px){
    font-size:14px;
}
`

export const StyledUl=styled.ul`
margin:0;
padding:0 20px;
`
export const StyledLi=styled.li`
padding-bottom:8px;
`

export const StyledFooter= styled.div`
`