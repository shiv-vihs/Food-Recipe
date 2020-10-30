import styled from "styled-components"

export const RecipeBackground=styled.div`
width:100%;
height:200px;
background-attachment: scroll;
background-position: center;
background-repeat: no-repeat;
background-size: cover;
margin-bottom:50px;
background-image: url(${({ background }) => background});
@media only screen and (max-width:767px){
    display:none;
}
`
export const Wrapper =styled.div`
width:100%;
height:200px;
background-color:rgba(51,51,51,0.5);
`