import styled from "styled-components"
import {Link} from "react-router-dom"

export const FoodContent=styled.div`
width:960px;
margin: 0 auto;
height:auto;
@media only screen and (max-width:960px){
    //max-width:768px;
    max-width:786px;
}
@media only screen and (max-width:786px){
    //max-width:768px;
    max-width:480px;
    
}
@media only screen and (max-width:480px){
    //max-width:768px;
    max-width:320px;  
}
`
export const DishHeading= styled.p`
font-family:Arvo;
font-size:48px;
color:white;
width:50%;
margin:0;
margin-top:24px;
@media only screen and (max-width:786px){
    //max-width:768px;
    width:100%;
    font-size:32px;
}
`
export const DishTag= styled.span`
font-family:OpenSans;
font-size:13px;
color:white;
background-color:${props=>props.theme.color};
padding: 5px;
`

export const SubHeading= styled.div`
display:flex;
width: 50%;
margin-top:24px;
`
export const SubheadingSpan= styled.span`
font-size:13px;
font-family:OpenSans;
margin-right:30px;
line-height:18px;
font-weight:700;
color:white;
`
export const NavLink=styled(Link)`
text-decoration:none;
margin-top:32px;

`
export const ViewRecipe=styled.div`
border: 3px solid white;
background-color:rgba(255,255,255,0.2);
display:inline-block;
color:white;
font-size:14px;
margin-top:18px;
font-weight:700;
padding:10px 10px;
font-family:OpenSans;
//opacity:50%;
`

export const AlphaWrapper=styled.div`
width:100%;
height:400px;
display:flex;
align-items:center;
background-color:rgba(51,51,51,0.5);
`