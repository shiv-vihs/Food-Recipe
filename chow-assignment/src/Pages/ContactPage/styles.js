import styled from "styled-components"

export const Heading=styled.div`
width:100%;
height:100px;
background-color:rgb(246,246,246);
display:flex;
align-items:center;
`

export const Contact=styled.div`
width:960px;
display:flex;
justify-content:flex-start;
margin: 0 auto;
font-family:OpenSans;
font-size:24px;
font-weight:500;
line-height:30px;
color:rgb(96,96,96);
@media only screen and (max-width:960px){
  width:768px;
}
@media only screen and (max-width:767px){
  width:480px;
}
`

export const ImageDiv = styled.div`
max-width:960px;
height:200px;
margin:40px auto;
display:flex;
align-items:center;
background-attachment: scroll;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
background-image: url(${({ background }) => background});
@media only screen and (max-width:960px){
  max-width:768px;
}
@media only screen and (max-width:767px){
  max-width:480px;
}
`
export const OuterContainer=styled.div`
max-width:960px;
margin:0 auto;
display:flex;
justify-content: space-between;
height:auto;
@media only screen and (max-width:960px){
  max-width:768px;
}
@media only screen and (max-width:767px){
  flex-wrap:wrap;
  max-width:480px;
}
`
export const LeftContainer=styled.div`
width:73%;
height:auto;
//height:100px;
//background-color:purple;
@media only screen and (max-width:767px){
  width:100%;
}
`
export const RightContainer=styled.div`
width:23%;
height:auto;
//height:100px;
//background-color:green;
@media only screen and (max-width:767px){
  width:100%;
  margin-bottom:20px;
}
`

export const SpanHeading=styled.div`
   width: 100%; 
   border-bottom: 1px solid #e8e8e8; 
   line-height: 0.1em;
   margin-bottom:30px;
   `

export const FormHeading=styled.span`
font-size:20px;
font-family:OpenSans;
background-color:white; 
color: rgb(96,96,96);
padding-right:10px; 
`
export const FieldHeading=styled.div`
font-size:14px;
margin-bottom:5px;
font-family:OpenSans;
width:100%;
color:#808080;
`
export const StyledSearch = styled.input`
width:45%;
height: 44px;
padding:12px 15px;
outline:none;
margin:0;
margin-bottom:15px;
font-size:13px;
display:block;
color: #808080;
background-color:white;
border: 1px solid #e8e8e8;
font-weight:600;
::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color:#808080;
  font-family:OpenSans;
}




`

export const ShareContainer = styled.div`
display:flex;
height:auto;
width:100%;
flex-wrap:wrap;
@media only screen and (max-width:767px){
  margin-top:20px;
  width:100%;
}


`
export const Facebook = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:80px;
height:80px;
font-size:28px;
font-weight:400;
line-height:18px;
background-color: #3B5998;
text-decoration:none;
color:white;
margin-right:10px;
margin-bottom:10px;
cursor:pointer;
`
export const Twitter = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:80px;
height:80px;
font-size:28px;
font-weight:400;
line-height:18px;
background-color: #33BCF3;
color:white;
text-decoration:none;
margin-right:10px;
margin-bottom:10px;
cursor:pointer;
`

export const GooglePlus = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:80px;
height:80px;
background-color: #DD4B39;
font-size:28px;
font-weight:400;
line-height:18px;
color: white;
text-decoration:none;
margin-right:10px;
margin-bottom:10px;
cursor:pointer;
`
export const StyledButton = styled.button`
padding: 10px 14px;
margin:0;
background-color: ${props=>props.theme.color};
margin-bottom:15px;
color:white;
box-shadow:0;
cursor:pointer;
border:none;
font-family:OpenSans;
font-weight:700;
font-size:13px;
`