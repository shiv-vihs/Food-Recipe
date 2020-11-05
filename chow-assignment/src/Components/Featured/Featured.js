import React from "react";
import { FeaturedSlide, StyledP } from "./styles";
import { Stars, YellowStar } from "../Card/styles";
import { Link } from "react-router-dom";
export default function Featured(props) {
  var starrender;
  let stars = props.source.rating;

  //setting stars
  let starsArray = [];
  for (let i = 0; i < stars; i++) {
    starsArray.push(
      <YellowStar className="fa fa-star" aria-hidden="true"></YellowStar>
    );
  }
  for (let i = 0; i < 5 - stars; i++) {
    starsArray.push(
      <i
        style={{ color: "#ccc" }}
        className="fa fa-star"
        aria-hidden="true"
      ></i>
    );
  }

  starrender = starsArray.map((element) => {
    return element;
  });
  return (
    <>
      <Link style={{ textDecoration: "none" }} to={"/" + props.source.key}>
        <FeaturedSlide background={props.source.picture}>
          <StyledP>
            <b>{props.source.name}</b>
          </StyledP>
          <Stars>{starrender}</Stars>
        </FeaturedSlide>
      </Link>
    </>
  );
}
