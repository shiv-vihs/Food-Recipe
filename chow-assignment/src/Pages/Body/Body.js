import React, { Component } from 'react'
import Card from "../../Components/Card/Card"
import Featured from "../../Components/Featured/Featured"
import AuthorPhoto from "../../Assets/author-photo.png"
import Button from "../../Components/Button/Button"
import Banner from "../../Components/Banner/Banner"
import axios from 'axios'

import {
    OuterContainer,
    LeftContainer,
    RightContainer,
    // StyledSearchButton,
    StyledSearch,
    StyledSearchWrapper,
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
    SelectionButtonWrapper,
    LatestRecipesHeadingWrapper
} from "./styles"
import Featured01 from "../../Assets/featuredRecipe-01.jpg"
import Featured02 from "../../Assets/featuredRecipe-02.jpg"
import Featured03 from "../../Assets/featuredRecipe-03.jpg"
import Slider01 from "../../Assets/sliderA_01.jpg"
import Slider02 from "../../Assets/sliderA_02.jpg"
import Slider03 from "../../Assets/sliderA_03.jpg"
import Slider04 from "../../Assets/sliderA_04.jpg"
export default class Body extends Component {
    componentDidMount() {
        
        axios.get('https://foodrecipejson.firebaseio.com/.json')
            .then(response => {
                const transformedData = response.data.RecipeList;
                this.setState({ RecipeList: transformedData });

                console.log(this.state.RecipeList);
                //console.log(response.data);
            });
    }
    state = {
        RecipeList: {},
        searchcontent:null,
        popular: [Featured01, Featured02, Featured03],
        covers: [{
            name: "Mexican Grilled Corn Recipe",
            source: Slider01,
            chef: "Sandra Fortin",
            index: "0",
            time: "20 MINS",
            servings: "4",
            tag: "BAKING"
        },
        {
            name: "Roast Chicken With Lemon Gravy",
            source: Slider02,
            chef: "Sandra Fortin",
            index: "1",
            time: "2 HRS",
            servings: "4",
            tag: "CURRY"
        },
        {
            name: "Avacado Melon Salad With Lime Vinaigrette",
            source: Slider03,
            chef: "Sandra Fortin",
            index: "2",
            time: "20 MINS",
            servings: "4",
            tag: "SALAD"
        },
        {
            name: "Chunky Beef Stew",
            source: Slider04,
            chef: "Sandra Fortin",
            index: "3",
            time: "2 HRS 30 MINS",
            servings: "4",
            tag: "STEW"

        }],
        selected: "0"
        

    };

    clickHandler = (index) => {

        this.setState({ selected: index });
    }
    searchOnChange=(event)=>{
        this.setState({searchcontent:event.target.value});
    }
    
    render() {
        const isSelected = this.state.selected;
        let renderImage;
        let cardDisplay;
        if(this.state.searchcontent){
            // for(let key in this.state.RecipeList){
            //     if(this.state.RecipeList[key].name.includes(this.state.searchcontent)){
            //         console.log(this.state.RecipeList[key].name)
            //     }
            // }
           cardDisplay= Object.keys(this.state.RecipeList).filter((keyname) => this.state.RecipeList[keyname].name.toLowerCase().includes(this.state.searchcontent.toLowerCase()) ).map((filteredIndex)=>{
            return <Card source={this.state.RecipeList[filteredIndex].image}
                selectedrecipe={this.state.RecipeList[filteredIndex]} keyselected={filteredIndex}
                 />;
        })



        }
        else{
            cardDisplay= Object.keys(this.state.RecipeList).map((keyname) => {
                console.log(keyname);
                return <Card source={this.state.RecipeList[keyname].image}
                    selectedrecipe={this.state.RecipeList[keyname]} keyselected={keyname}
                     />;
            });
        }
        if (isSelected) {

            renderImage = <Banner index={isSelected} background={this.state.covers[isSelected].source} attributes={this.state.covers[isSelected]} />;
        }
        else {
            renderImage = <Banner index={isSelected} background={this.state.covers[0].source} attributes={this.state.covers[0]} />;
        }
        let leftContainer;
        
            leftContainer = <LeftContainer>
                <LatestRecipesHeadingWrapper>
                <SpanHeading><PopularRecipesHeading>Latest Recipes</PopularRecipesHeading></SpanHeading>
                </LatestRecipesHeadingWrapper>
                 {cardDisplay}
            </LeftContainer>;
        
        

        return (

            <div>
                {renderImage}
                <SelectionButtonWrapper>
                    {this.state.covers.map((cover) => {

                        return <Button SelectedIndex={this.state.selected} buttonname={cover.name} ind={cover.index} clicked={this.clickHandler} />
                    })
                    }

                </SelectionButtonWrapper>
                <ContainerWrapper>

                    <OuterContainer>
                         {leftContainer} 
                        <RightContainer>
                            <StyledSearchWrapper>
                                <StyledSearch onChange={(event)=>this.searchOnChange(event)} placeholder="Search for recipes" />
                            </StyledSearchWrapper>
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

                                <Facebook ><i class="fa fa-facebook" aria-hidden="true"></i></Facebook>
                                <Twitter ><i class="fa fa-twitter" aria-hidden="true"></i></Twitter>
                                <GooglePlus ><i class="fa fa-google-plus" aria-hidden="true"></i></GooglePlus>
                            </ShareContainer>
                        </RightContainer>
                    </OuterContainer>
                </ContainerWrapper>
            </div>
        )
    }
}
