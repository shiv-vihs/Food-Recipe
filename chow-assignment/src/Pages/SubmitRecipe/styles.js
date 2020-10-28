import styled from "styled-components"
export const SubmitRecipeHeading = styled.div`
width:100%;
height:100px;
background-color:#F6F6F6;
`  
export const SubmitRecipeHeadingWrapper = styled.div`
max-width:960px;
margin: 0 auto;
display:flex;
align-items:center;
@media only screen and (max-width:960px){
    max-width:768px;
}
@media only screen and (max-width:768px){
    max-width:480px;
}
@media only screen and (max-width:480px){
    max-width:320px;
}
` 
export const HeadingPara = styled.p`
font-family:OpenSans;
font-size:24px;
font-weight: 500;
color: rgb(96,96,96);
` 
export const SubmitRecipeBody= styled.div`
max-width:960px;
margin:0 auto;
height: auto;
padding: 32px 0;
@media only screen and (max-width:960px){
    max-width:768px;
}
@media only screen and (max-width:768px){
    max-width:480px;
}
@media only screen and (max-width:480px){
    max-width:320px;
}
`
export const SubHeadingTitle= styled.p`
font-family:OpenSans;
font-weight:500;
font-size:18px;
line-height:30px;
color: rgb(96,96,96);
`
export const FormInput = styled.input`
width:100%;
border:none;
border: 1px solid rgb(221, 221, 221);
padding: 14px 15px 12px;
`
export const SubmitButton = styled.button`
border: none;
background-color: ${props=>props.theme.color};
color: #fff;
cursor:pointer;
padding: 10px 18px;
margin-top:32px;
font-family:OpenSans;
font-size:14px;
`