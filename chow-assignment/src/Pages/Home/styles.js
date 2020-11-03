import styled from "styled-components"



export const OuterContainer = styled.div`
max-width:960px;
margin:0 auto;
//background-color:blue;
height:auto;
display:flex;
@media only screen and (max-width: 767px){
    flex-wrap:wrap;
    max-width:480px;
}
@media only screen and (max-width: 480px){
    max-width:320px;
}
`
export const ContainerWrapper = styled.div`
max-width:960px;
margin:0 auto;
//background-color:blue;
height:auto;
@media only screen and (max-width:960px){
    max-width:768px;
}
`

export const RightContainer = styled.div`
width:25%;
height:auto;
//background-color:green;
@media only screen and (max-width: 767px){
    width:100%;
    
}
`
export const LeftContainer = styled.div`
width:75%;
height:100%;
//background-color:orange;
display: flex;
flex-wrap:wrap;
justify-content: flex-start;
align-items:flex-start;
@media only screen and (max-width: 767px){
    width:100%;
    
}
`
export const StyledSearch = styled.input`
width:100%;
height: 44px;
padding:12px 15px;
outline:none;
margin:0;
font-size:13px;
color: #808080;
background-color:white;
border: 1px solid #e8e8e8;
font-weight:600;
::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color:#808080;
  font-family:OpenSans;
}
`
export const StyledSearchButton = styled.button`
width:20%;
margin:0;
height: 44px;
background-color: #8dc63f;
color:white;
box-shadow:0;
border:none;
font-family:OpenSans;
font-weight:700;
font-size:13px;
`

export const StyledSearchWrapper = styled.div`
display:flex;

`
export const AuthorContainer = styled.div`
width:100%;
height:auto;
//background-color:yellow;
border:1px solid #e8e8e8;
padding: 28px 25px;
margin-top:50px;
margin-bottom:50px;
`

export const LeftHeading = styled.div`
width:50%;
height:auto;
`
export const RightHeading = styled.div`
width:64px;
height:auto;

`
export const SpanTitle = styled.div`
font-size:13px;
color: ${props=>props.theme.color};
font-family:OpenSans;
font-weight:600;

`
export const SpanName = styled.div`
font-size:20px;
color: #606060;
font-family:OpenSans;
font-weight:700;
`
export const AuthorImage = styled.img`
border-radius:50%;
`
export const AuthorEmail = styled.a`
text-decoration:none;
font-family:OpenSans;
color: #a0a0a0;
font-size:14px;
margin-top:5px;
`
export const TopHeading = styled.div`
display:flex;
justify-content:space-between;`

export const AuthorContent = styled.p`
font-size:14px;
color:#808080;
margin-top:10px;
line-height:24px;
`

export const PopularRecipesHeading = styled.span`
font-size:20px;
font-family:OpenSans;
background-color:white; 
color: rgb(96,96,96);
padding-right:10px; 
`
export const SpanHeading = styled.div`
   width: 97%; 
   border-bottom: 1px solid #e8e8e8; 
   line-height: 0.1em;
   margin-bottom:30px;
   
   `

export const ShareContainer = styled.div`
display:flex;
height:auto;
width:100%;
flex-wrap:wrap;
margin-top:50px;
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
export const SliderImage = styled.div`
width:100%;
height:400px;
display:flex;
align-items:center;

background-attachment: scroll;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
background-image: url(${({ background }) => background});

@media only screen and (max-width:767px){
    margin-bottom:20px;
}
`
export const Button = styled.button`

`
export const SelectionButtonWrapper = styled.div`
max-width:960px;
margin: 0 auto;
display:flex;
margin-bottom:50px;
margin-top:0px;
//visibility:visible;

@media only screen and (max-width:767px){
    display:none;
}
`
export const LatestRecipesHeadingWrapper = styled.div`
width:100%;
`
