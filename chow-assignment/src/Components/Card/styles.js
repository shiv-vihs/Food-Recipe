import styled from "styled-components"
import {Link} from "react-router-dom"
export const CardContainer=styled.div`
width:30.33%;
height: auto;
//background-color:purple;
margin-right:3%;
margin-bottom:3%;

@media only screen and (max-width: 990px){
    width:48%;
    margin-right:2%;
    margin-bottom:2%;
}
@media only screen and (max-width: 767px){
    width:96%;
    margin-right:2%;
    margin-bottom:2%;
}

`

export const Details=styled.div`
padding:20px 25px;
background-color:#F8F8F8;
`

export const Delimiter=styled.span`
border-bottom: 1px solid #ebebeb;
display:inline-block;
width:100%;
height: 1px;
margin-top:20px;
margin-bottom: 20px;
border-color: #e8e8e8;
`
export const DishName=styled.span`
font-size:19px;
font-weight:500;
line-height:26px;
text-decoration:none;
cursor:pointer;
font-family:Arvo;
color:rgb(96, 96, 96);
`
export const Time=styled.div`
width:100%;
display:flex;
justify-content:space-between;
font-family:OpenSans;
font-size:12px;
font-weight:700;
color: rgb(144, 144, 144);
`
export const NavLink=styled(Link)`
text-decoration:none;
`
export const YellowStar=styled.div`
color:#FFC741;
`
export const Stars=styled.div`
display:flex;
`

export const ViewRecipe = styled.div`
border: 3px solid white;
background-color:rgba(51,51,51,0.5);
display:inline-block;
color:white;
font-size:14px;
margin-top:18px;
font-weight:700;
padding:10px 10px;
font-family:OpenSans;
visibility:hidden;
`
export const CardImageWrapper=styled.div`
width:100%;
height:200px;
display:flex;
justify-content:center;
align-items:center;
background-attachment: scroll;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
background-image: url(${({background}) => background});
cursor:pointer;
&:hover ${ViewRecipe}{
    visibility:visible;
}
`