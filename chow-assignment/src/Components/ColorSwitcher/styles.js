import styled from "styled-components"

export const Container= styled.a`
display:block;
width:150px;
height:100px;
background-color:#333;
position:fixed;
top:80px;
left:-150px;
visibility:visibility;
&:hover {
    left:0;
}
@media only screen and (max-width:960px){
    visibility:hidden;
}

`

export const StyleSwitcher= styled.span`
margin-left:3px;
font-family:OpenSans;
font-size:14px;
font-weight:700;
color: white;
margin-left:25px;
line-height:30px;
`

export const SwitcherIcon=styled.button`
width:auto;
height:auto;
position:absolute;
cursor:pointer;
outline:none;
border:none;
right:-35px;
padding-top:2px;
padding-bottom:2px;
top:0;
background-color:#333;
`
export const ColorContainer=styled.div`
width:150px;
`

export const ColorShade=styled.button`
text-decoration:none;
margin-right:3px;
margin-bottom:5px;
margin-left:3px;
cursor:pointer;
outline:none;
width: 17px;
height:17px;
border: none;
background-color: ${props=>props.bgc};
`

export const ResetButton= styled.button`
text-decoration:none;
cursor:pointer;
color: white;
margin:10px 35px;
outline: none;
background-color: ${props=>props.theme.color};
border: none;
padding: 5px 10px;
`