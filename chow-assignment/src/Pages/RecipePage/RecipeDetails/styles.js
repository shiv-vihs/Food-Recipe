import styled from "styled-components"

export const CardContainer= styled.div`
width:100%;
height:auto;
background-color:#f2f2f2;
`
export const DishTitle= styled.div`
width:100%;
font-family:Arvo;
font-size:30px;
font-weight:500;
line-height:36px;
color:rgb(96,96,96);
padding-left:50px;
padding-top:20px;
padding-bottom:5px;
padding-right:50px;
`
export const FoodDetails= styled.div`
display:flex;
padding-left:50px;
padding-right:50px;
background-color:#f2f2f2;
@media only screen and (max-width:480px){
flex-wrap:wrap;
}
`
export const Detail= styled.div`
padding: 20px 15px;
font-family:OpenSans;
font-size:14px;
font-weight:600;
line-height:18px;
color: rgb(12,112,112);
`

export const RecipeContainer=styled.div`
width:72%;
height:auto;
margin-right:3%;
@media only screen and (max-width: 767px){
    width:100%;
    margin-right:0;
    margin-bottom:2%;
}
`

export const Description=styled.p`
font-family:OpenSans;
font-size:14px;
line-height:24px;
font-weight:400;
color:rgb(128,128,128);
`

export const IngredientsHeading=styled.p`
font-family:OpenSans;
font-size:22px;
line-height:34px;
font-weight:500;
color:rgb(96,96,96);
`

export const IngredientsUl= styled.ul`
background-color:#fff;
border:1px solid #e9e9e9;
padding: 39px 0;
position:relative;
margin: 12px 0 35px 0;
list-style: none outside;

&:before{
    
    content:"";
    width: 1px;
    height:100%;
    background-color: #ffd4d4;
    position:absolute;
    top:0;
    left:60px;
}
    &:after{
        
    content:"";
    width: 1px;
    height:100%;
    background-color: #ffd4d4;
    position:absolute;
    top:0;
    left:64px;

}
`
export const IngredientsLi= styled.li`
line-height:18px;
border-bottom:1px solid #e9e9e9;
padding: 10px 0 10px 0;
padding-left: 140px;
padding-right:24px;
position:relative;
`

export const Input= styled.input`
height:19px;width:19px;
margin-right:10px;
position:absolute;
top:6px;
left:112px;
margin-bottom:0;
`
export const Label= styled.label`
position: relative;
cursor:pointer;
font-size:14px;
font-family:OpenSans;
line-height:18px;
color: rgb(128,128,128);
&:before{
    content:"";
    display:inline-block;
    position:absolute;
    left:-24px;
    top:-1px;
    height:19px;width:19px;
    border: 2px solid #d0d0d0;

}
`

export const DirectionsOl= styled.ol`
list-style-type:none;
margin:15px 0 0 34px;
padding:0;
counter-reset:li-counter;

`
export const DirectionsLi= styled.li`
position: relative;
font-size:14px;
font-family:OpenSans;
line-height:24px;
font-weight:400;
color:rgb(128,128,128);
margin-bottom:15px;
padding:8px 14px;
&:before{
    position:absolute;
    top:3px;
    left:-34px;
    width:34px;
    height:34px;
    text-align:center;
    line-height:32px;
    background-color:#f4f4f4;
    color:#999;
    font-weight:700;
    font-size:16px;
    content: counter(li-counter);
    counter-increment: li-counter;
    cursor:default;
}
`
export const YellowStar=styled.div`
color:#FFC741;
`
export const Stars=styled.div`
display:flex;
padding-left:50px;
padding-right:50px;
padding-bottom:20px;
`