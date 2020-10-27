import styled from "styled-components"

export const LoginLeft = styled.div`
width:55%;
height:auto;
`
export const LoginRight = styled.div`
width:45%;
height:auto;
padding:20px;

`
export const LoginContainer = styled.div`
display:flex;
`
export const StyledSignup = styled.p`
font-size:39px;
color:rgb(51,51,51);
font-weight:500;

`
export const FieldHeading = styled.p`
font-size:18px;
color:rgb(153, 153, 153);
font-weight:700;
`

export const StyledTextField = styled.input`
width:100%;
height:44px;
padding: 15px 0;
border:none;
outline:none;
font-size:16px;
border-bottom: 1px solid rgb(141, 198, 63);
`

export const LoginPageButtons = styled.div`
width:100%;
display:flex;
justify-content:space-between;
margin-top: 50px;
`
export const Selected = styled.a`
width:100px;
padding:10px ;
font-family:Arial;
font-size:15px;
font-weight:600;
color:white;
background-color:rgb(141, 198, 63);
border-radius:15px;
border:none;
cursor:pointer;
display:flex;
justify-content:center;
`
export const Unselected = styled.a`
display:flex;
justify-content:center;
cursor:pointer;
width:100px;
padding:10px ;
font-family:Arial;
font-size:15px;
font-weight:600;
color: rgb(153,153,153);
border-radius:15px;
border:none;
&:hover{
    color:white;
    background-color:rgb(141, 198, 63);
}
`

export const Error=styled.p`
color:red;
font-size:18px;
font-weight:500;
`