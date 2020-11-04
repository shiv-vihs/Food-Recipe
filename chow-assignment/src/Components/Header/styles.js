import styled from "styled-components"
import {Link} from "react-router-dom"
export const Container= styled.div`
max-width:960px;
margin: 0 auto;
`

export const StyledOptions=styled.div`
height:100%;
display:flex;
text-align:center;
align-items:center;
text-decoration:none;
padding: 0 16px;
font-family: OpenSans;
font-size:14px;
color:rgb(80,80,80);
font-weight: 600;
&:hover{
    border-bottom:3px solid ${props=>props.theme.color};
}
`
export const NavLink=styled(Link)`
text-decoration:none;
display:inline-block;
position:relative;
&:visited{
    text-decoration:none;
}
`
export const HeaderDiv = styled(Container)`
height:74px;
display:flex;
justify-content:space-between;
//visibility:visible;
@media only screen and (max-width:960px){
    display:none;
}
`
export const Left= styled.div`
display:flex;
align-items:center;
`

export const Right= styled.div`
display:flex;
`
export const Dropdown= styled.div`
top:71px;
left:0;
height:auto;
min-width:150px;
background-color:#333;
position:absolute;
z-index:99;
border-top: 3px solid ${props=>props.theme.color};
`
export const PagesDropdown=styled(Dropdown)`
display:none;

`
export const RecipesDropdown=styled(Dropdown)`
display:none;
`
export const DemosDropdown=styled(Dropdown)`
display:none;
`

export const StyledOptionsPages=styled(StyledOptions)`

&:hover ${PagesDropdown} {
    display:block;
}


`
export const StyledOptionsDemos=styled(StyledOptions)`
&:hover ${DemosDropdown} {
    display:block;
}

`
export const StyledOptionsRecipes=styled(StyledOptions)`
&:hover ${RecipesDropdown} {
    display:block;
}

`

export const DropdownItem=styled.div`
display:flex;
padding:10px 16px;
font-family:OpenSans;
font-size:13px;
font-weight:500;
line-height:18px;
color: #9c9c9c;
border-bottom:0.5px solid #9c9c9c;
&:hover{
    background-color:rgba(255,255,255, 0.2);
    color:white;
    
}

`

export const MobileHeader=styled.div`
max-width:960px;
margin: 20px auto;
min-height:74px;
display: none;
position:relative;
@media only screen and (max-width:960px){
    display:block;
    max-width:768px;
}
@media only screen and (max-width: 767px){
    display:block;
    max-width:480px;
}
@media only screen and (max-width: 480px){
    max-width:320px;
    display:block;
}
`

export const MobileDiv=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
padding:6px 20px;
width:100%;
height:45px;
display:flex;
align-items:flex-start;
background-color: #f2f2f2;
`

export const MenuSpan=styled.span`
font-family:OpenSans;
margin-top:6px;
color:  rgb(128, 128, 128);
font-size:14px;
font-weight:700;
`
export const Button= styled.button`
cursor:pointer;
padding:0;
outline:none;
border:none;`

export const SelectedMobileDiv=styled.div`
display:flex;
justify-content:space-between;
align-items:center;
padding:6px 20px;
width:100%;
height:45px;
display:flex;
align-items:flex-start;
background-color: #8DC63F;
`

export const DropDownContainer=styled.div`
position:absolute;
z-index:100;
width:100%;

`
export const Heading=styled(Link)`
width:100%;
font-family:OpenSans;
text-decoration:none;
font-weight:600;
padding:12px 20px;
display:block;
background-color:#f0f0f0;
color:#808080;
transition-duration:300ms;
&:hover{
    color: white;
    background-color: #c0c0c0;
}

`

export const SubHeading=styled.div`
width:100%;
font-family:OpenSans;
text-decoration:none;
padding:12px 20px 12px 30px;
font-weight:600;
display:block;
background-color:#f8f8f8;
color:#808080;
&:hover{
    color: white;
    background-color: #c0c0c0;
}
`
export const StyledLogout= styled.a`
width:100%;
font-family:OpenSans;
text-decoration:none;
font-weight:600;
padding:12px 20px;
display:block;
cursor: pointer;
background-color:#f0f0f0;
color:#808080;
&:hover{
    color: white;
    background-color: #c0c0c0;
}`