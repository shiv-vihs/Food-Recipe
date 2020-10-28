import styled from "styled-components"

export const FeaturedSlide=styled.div`
width:100%;
height:100px;
//display:flex;
//align-items:center;
background-attachment: scroll;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
background-image: url(${({ background }) => background});
padding:20px;
margin-top:5px;
margin-bottom:5px;
`
export const StyledP=styled.p`
width: 80%;
color: white;
font-family:OpenSans;
margin:0;
font-size:14px;
font-weight:700px;
line-height:18px;
`