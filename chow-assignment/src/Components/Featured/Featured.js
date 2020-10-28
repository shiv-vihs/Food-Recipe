import React from 'react'
import {FeaturedSlide, StyledP} from "./styles"
import {Stars, YellowStar} from "../Card/styles"
import {Link} from "react-router-dom"
export default function Featured(props) {
    var starrender;
     let stars=props.source.rating;
    
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
            <Link style={{textDecoration:"none"}} to={"/"+props.source.key}>        
            <FeaturedSlide background={props.source.picture}>
            
            <StyledP><b>{props.source.name}</b></StyledP>
            <Stars>{starrender}</Stars>
            </FeaturedSlide>
            </Link>
        </>
    )
}
