import styled from "styled-components";


export const SliderButton = styled.a`
display:flex;
justify-content:center;
align-items:center;
text-align:center;
background-color:#f2f2f2;
font-family:OpenSans;
line-height:18px;
font-size:14px;
min-width:25%;
border: none;
padding:15px 35px;
color:#808080;
font-weight:700;
border: 1px solid #e3e3e3;
cursor: pointer;
` 
export const SelectedSliderButton = styled.button`
display:flex;
align-items:center;
justify-content:center;
text-align:center;
background-color:${props=>props.theme.color};
transition-duration:500ms;
font-family:OpenSans;
line-height:18px;
font-size:14px;
min-width:25%;
border: none;
padding:15px 35px;
color:white;
font-weight:700;
border: 1px solid #e3e3e3;
cursor: pointer;

` 