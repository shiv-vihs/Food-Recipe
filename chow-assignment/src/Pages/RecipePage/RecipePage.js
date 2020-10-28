import React, { Component } from 'react'
import Featured from "../../Components/Featured/Featured"
import RecipeDetails from "./RecipeDetails/RecipeDetails"
import axios from 'axios'
import AuthorPhoto from "../../Assets/author-photo.png"
import Featured01 from "../../Assets/featuredRecipe-01.jpg"
import Featured02 from "../../Assets/featuredRecipe-02.jpg"
import Featured03 from "../../Assets/featuredRecipe-03.jpg"
import {
    OuterContainer,
    RightContainer,
    // StyledSearchButton,
    // StyledSearch,
    // StyledSearchWrapper,
    AuthorContainer,
    LeftHeading, SpanName,
    SpanTitle,
    RightHeading,
    AuthorImage,
    AuthorEmail,
    TopHeading,
    AuthorContent,
    PopularRecipesHeading,
    SpanHeading,
    ShareContainer,
    Facebook,
    Twitter, GooglePlus,
    ContainerWrapper,
} from "../Body/styles"
export default class RecipePage extends Component {
    componentDidMount() {
        axios.get('https://foodrecipejson.firebaseio.com/.json')
            .then(response => {
                const transformedData = response.data.RecipeList;
                this.setState({ RecipeList: transformedData });

                 //console.log(this.state.RecipeList);
                //console.log(response.data);
            });
            window.scrollTo(0,0);
    }
    state={
        RecipeList: {},
        popular: [{picture:Featured01,name:"Chocolate Cake And Green Tea Cream", rating:"5",key:5}, {picture:Featured02,name:"Mexican Grilled Corn Recipe", rating:"5",key:0}, {picture:Featured03, name:"Pollo Barracho With Homemade Tortillas",rating:"5", key:7}]
    };
    render() {
        let leftContainer;
        leftContainer = <RecipeDetails recipelist={this.state.RecipeList} cardselected={this.props.match.params.id}></RecipeDetails>

        //console.log("Inside recipe page");
        return (
            <ContainerWrapper>

                    <OuterContainer>
                        {leftContainer}
                        <RightContainer>
                            {/* <StyledSearchWrapper>
                                <StyledSearch placeholder="Search for recipes" />
                                <StyledSearchButton></StyledSearchButton>
                            </StyledSearchWrapper> */}
                            <AuthorContainer>
                                <TopHeading>
                                    <LeftHeading>
                                        <SpanTitle>Author <br></br></SpanTitle>
                                        <SpanName>Sandra <br></br>Fortin</SpanName>
                                    </LeftHeading>
                                    <RightHeading>
                                        <AuthorImage src={AuthorPhoto} height="64px" width="64px" />
                                    </RightHeading>
                                </TopHeading>
                                <AuthorEmail href="#Email">sandra@chow.com</AuthorEmail>
                                <AuthorContent>
                                    I'm Sandra and this is where I share my stuff. I am madly in love with food. You will find a balance of healthy recipes, comfort food and indulgent desserts.
                            </AuthorContent>
                            </AuthorContainer>


                            <SpanHeading><PopularRecipesHeading>Popular Recipes</PopularRecipesHeading></SpanHeading>
                            {
                                this.state.popular.map((featured) => {
                                    return <Featured source={featured} />;

                                })}
                            <ShareContainer>
                                <SpanHeading><PopularRecipesHeading>Share</PopularRecipesHeading></SpanHeading>

                                <Facebook href="#Facebook"><i class="fa fa-facebook" aria-hidden="true"></i></Facebook>
                                <Twitter href="#Twitter"><i class="fa fa-twitter" aria-hidden="true"></i></Twitter>
                                <GooglePlus href="#GooglePlus"><i class="fa fa-google-plus" aria-hidden="true"></i></GooglePlus>
                            </ShareContainer>
                        </RightContainer>
                    </OuterContainer>
                </ContainerWrapper>
        )
    }
}
