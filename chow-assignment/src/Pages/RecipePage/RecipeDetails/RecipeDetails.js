import React, { Component } from 'react'
import { YellowStar, Stars, CardContainer, DishTitle, FoodDetails, Detail, RecipeContainer, DirectionsOl, DirectionsLi, Description, Label, IngredientsHeading, IngredientsLi, Input, IngredientsUl } from "./styles"
import { SliderImage } from '../../Body/styles'
import RecipePhoto from "../../../Assets/recipePhoto-01.jpg"

export default class RecipeDetails extends Component {
    render() {
        //console.log("in recipe det");
        //console.log(this.props.recipelist);
        let temp;
        for (let key in this.props.recipelist) {
            //console.log(key);
            if (key == this.props.cardselected) {

                var starrender;
                let stars = this.props.recipelist[key].rating;

                if (stars === "1")
                    starrender = <><div><YellowStar className="fa fa-star" aria-hidden="true"></YellowStar><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i></div></>;
                if (stars === "2")
                    starrender = <><div><YellowStar className="fa fa-star" aria-hidden="true"></YellowStar> <YellowStar className="fa fa-star" aria-hidden="true"></YellowStar><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i></div></>;
                if (stars === "3")
                    starrender = <><div><YellowStar className="fa fa-star" aria-hidden="true"></YellowStar><YellowStar className="fa fa-star" aria-hidden="true"></YellowStar><YellowStar className="fa fa-star" aria-hidden="true"></YellowStar><i className="fa fa-star" aria-hidden="true"></i><i className="fa fa-star" aria-hidden="true"></i></div></>;
                if (stars === "4")
                    starrender = <><div><YellowStar className="fa fa-star" aria-hidden="true"></YellowStar><YellowStar className="fa fa-star" aria-hidden="true"></YellowStar><YellowStar className="fa fa-star" aria-hidden="true"></YellowStar><YellowStar className="fa fa-star" aria-hidden="true"></YellowStar><i className="fa fa-star" aria-hidden="true"></i></div></>;
                if (stars === "5")
                    starrender = <><div><YellowStar className="fa fa-star" aria-hidden="true"></YellowStar><YellowStar className="fa fa-star" aria-hidden="true"></YellowStar><YellowStar className="fa fa-star" aria-hidden="true"></YellowStar><YellowStar className="fa fa-star" aria-hidden="true"></YellowStar><YellowStar className="fa fa-star" aria-hidden="true"></YellowStar></div></>;
                temp =
                    <RecipeContainer>
                        
                        <CardContainer>
                            <DishTitle>{this.props.recipelist[key].name}</DishTitle>
                            <Stars>{starrender}</Stars>
                            <SliderImage background={RecipePhoto}></SliderImage>
                            <FoodDetails>
                                <Detail><span style={{ fontWeight: 400 }}>Servings:</span><br></br>{this.props.recipelist[key].servings}</Detail>
                                <Detail><span style={{ fontWeight: 400 }}>Prep Time:</span><br></br>{this.props.recipelist[key].min}</Detail>
                                <Detail><span style={{ fontWeight: 400 }}>Cooking:</span><br></br> {this.props.recipelist[key].cooking}</Detail>
                                <Detail><span style={{ fontWeight: 400 }}>Calories:</span><br></br> {this.props.recipelist[key].calories}</Detail>
                            </FoodDetails>
                        </CardContainer>
                       
                        <Description>{this.props.recipelist[key].description}</Description>
                        <IngredientsHeading>Ingredients</IngredientsHeading>
                        <IngredientsUl>
                            <IngredientsLi>
                                <Input id="ing1" type="checkbox" />
                                <Label for="ing1">2 pounds cubed beef stew meat</Label>
                            </IngredientsLi>
                            <IngredientsLi>
                                <Input id="ing2" type="checkbox" />
                                <Label for="ing2">3 tablespoons vegetable oil</Label>
                            </IngredientsLi>
                            <IngredientsLi>
                                <Input id="ing3" type="checkbox" />
                                <Label for="ing3">4 cubes beef bouillon, crumbled</Label>
                            </IngredientsLi>
                            <IngredientsLi>
                                <Input id="ing4" type="checkbox" />
                                <Label for="ing4">1 large onion, chopped</Label>
                            </IngredientsLi>
                            <IngredientsLi>
                                <Input id="ing5" type="checkbox" />
                                <Label for="ing5">1 teaspoon dried rosemary</Label>
                            </IngredientsLi>
                            <IngredientsLi>
                                <Input id="ing6" type="checkbox" />
                                <Label for="ing6">1/2 teaspoon ground black pepper</Label>
                            </IngredientsLi>
                            <IngredientsLi>
                                <Input id="ing7" type="checkbox" />
                                <Label for="ing7">3 large potatoes, peeled and cubed </Label>
                            </IngredientsLi>
                            <IngredientsLi>
                                <Input id="ing8" type="checkbox" />
                                <Label for="ing8">4 carrots, cut into 1 inch pieces</Label>
                            </IngredientsLi>
                            <IngredientsLi>
                                <Input id="ing9" type="checkbox" />
                                <Label for="ing9">4 stalks celery, cut into 1 inch pieces</Label>
                            </IngredientsLi>
                        </IngredientsUl>
                        <IngredientsHeading>Directions</IngredientsHeading>
                        <DirectionsOl>
                            <DirectionsLi>
                                In a Dutch oven, heat oil over medium heat until hot, but not smoking. Pat the meat dry with paper towels and brown in batches, transferring the meat with a slotted spoon to a bowl as they are done.
                            </DirectionsLi>
                            <DirectionsLi>In the fat remaining in the pot, cook the onions until softened, about 5 minutes.
                            </DirectionsLi>
                            <DirectionsLi>
                                Return meat to the pot with any juices in the bowl and add the tomatoes with juice, chiles, beer, beef broth, oregano, cumin, and Worcestershire sauce. Season with salt and pepper to taste.
                            </DirectionsLi>
                            <DirectionsLi>
                                Bring to a boil and reduce heat. Simmer, partially covered, for 2 1/2 hours or until meat is tender.
                            </DirectionsLi>
                        </DirectionsOl>
                        
                    </RecipeContainer>

            }
        }
        return (
            <>
                {temp}
            </>
        )
    }
}
