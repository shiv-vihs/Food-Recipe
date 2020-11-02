import React from 'react'
import { ViewRecipe,CardImageWrapper, CardContainer, Details, Delimiter, DishName, Time,Stars, YellowStar } from "./styles"

import {NavLink} from "./styles"

export default function Card(props) {
    let photo= require('../../Assets/'+props.source+'.jpg');
    var starrender;
     let stars=props.selectedrecipe.rating;
    
         if(stars === "1")
         starrender=<><div><YellowStar className="fa fa-star" aria-hidden="true"></YellowStar><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i></div></>;
         if(stars === "2")
         starrender=<><div><YellowStar className="fa fa-star" aria-hidden="true"></YellowStar> <YellowStar className="fa fa-star" aria-hidden="true"></YellowStar><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i></div></>;
         if(stars === "3")
         starrender=<><div><YellowStar className="fa fa-star" aria-hidden="true"></YellowStar><YellowStar className="fa fa-star" aria-hidden="true"></YellowStar><YellowStar className="fa fa-star" aria-hidden="true"></YellowStar><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i></div></>;
         if(stars === "4")
         starrender=<><div><YellowStar className="fa fa-star" aria-hidden="true"></YellowStar><YellowStar className="fa fa-star" aria-hidden="true"></YellowStar><YellowStar className="fa fa-star" aria-hidden="true"></YellowStar><YellowStar className="fa fa-star" aria-hidden="true"></YellowStar><i className="fa fa-star" aria-hidden="true"></i></div></>;
         if(stars === "5")
         starrender=<><div><YellowStar className="fa fa-star" aria-hidden="true"></YellowStar><YellowStar className="fa fa-star" aria-hidden="true"></YellowStar><YellowStar className="fa fa-star" aria-hidden="true"></YellowStar><YellowStar className="fa fa-star" aria-hidden="true"></YellowStar><YellowStar className="fa fa-star" aria-hidden="true"></YellowStar></div></>;
    
    return (
        <>
            <CardContainer>
                <CardImageWrapper background={photo}>
                <NavLink to={"/"+props.keyselected}><ViewRecipe>View Recipe</ViewRecipe></NavLink>
                </CardImageWrapper>
                <Details>
                    <NavLink to={"/"+props.keyselected}><DishName>{props.selectedrecipe.name}</DishName></NavLink>
                    <Delimiter></Delimiter>
                    
                    <Time><Stars>{starrender}</Stars><div><i class="fa fa-clock-o" aria-hidden="true"></i> {props.selectedrecipe.min}</div></Time>
                </Details>

            </CardContainer>
        </>
    )
}
