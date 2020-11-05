import React from "react";
import {
  ViewRecipe,
  CardImageWrapper,
  CardContainer,
  Details,
  Delimiter,
  DishName,
  Time,
  Stars,
  YellowStar,
} from "./styles";

import { NavLink } from "./styles";

export default function Card(props) {
  let photo = require("../../Assets/" + props.source + ".jpg");
  var starrender;
  let stars = props.selectedrecipe.rating;

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
      <CardContainer>
        <CardImageWrapper background={photo}>
          <NavLink to={"/" + props.keyselected}>
            <ViewRecipe>View Recipe</ViewRecipe>
          </NavLink>
        </CardImageWrapper>
        <Details>
          <NavLink to={"/" + props.keyselected}>
            <DishName>{props.selectedrecipe.name}</DishName>
          </NavLink>
          <Delimiter></Delimiter>

          <Time>
            <Stars>{starrender}</Stars>
            <div>
              <i class="fa fa-clock-o" aria-hidden="true"></i>{" "}
              {props.selectedrecipe.cooking}
            </div>
          </Time>
        </Details>
      </CardContainer>
    </>
  );
}
