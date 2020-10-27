import axios from 'axios';
import React, { Component } from 'react'
import { SubmitRecipeHeading, HeadingPara, SubmitRecipeHeadingWrapper, SubmitRecipeBody, SubHeadingTitle, FormInput, SubmitButton } from "./styles"

export default class SubmitRecipe extends Component {
    state = {
        RecipeList:{},
        recipeName: null,
        prepTime: null,
        cookTime: null,
        recipeTag: null,
        servings: null,
        calories: null,
        chef: null,
        ratings: null,
        descrip: null,
       
    }
    componentDidMount() {
        
        axios.get('https://foodrecipejson.firebaseio.com/.json')
            .then(response => {
                const transformedData = response.data.RecipeList;
                this.setState({ RecipeList: transformedData });

                console.log(this.state.RecipeList);
                
                //console.log(count);
                
            });
    }
    recipename = (event) => {
        this.setState({ recipeName: event.target.value });
    }
    preptime = (event) => {
        this.setState({ prepTime: event.target.value });
    }
    cooktime = (event) => {
        this.setState({ cookTime: event.target.value });
    }
    tag = (event) => {
        this.setState({ recipeTag: event.target.value });
    }
    recipeservings = (event) => {
        this.setState({ servings: event.target.value });
    }
    recipecalories = (event) => {
        this.setState({ calories: event.target.value });
    }
    chefname = (event) => {
        this.setState({ chef: event.target.value });
    }
    reciperatings = (event) => {
        this.setState({ ratings: event.target.value });
    }
    recipedescription = (event) => {
        this.setState({ descrip: event.target.value });
    }
    submitRecipeHandler = () => {
         let count=0;
         for(let key in this.state.RecipeList){
             ++count;
         }
         count=count+1;
        const postData = {
            bannerimage:"sliderA_02",
            calories:this.state.calories,
            chef: this.state.chef,
            cooking: this.state.cookTime,
            description: this.state.descrip,
            image: "recipeThumb-01",
            index:count,
            min: this.state.prepTime,
            name: this.state.recipeName,
            rating: this.state.ratings,
            servings: this.state.servings,
            tag: this.state.recipeTag
        };
        axios.post("https://foodrecipejson.firebaseio.com/RecipeList.json", postData).then
            (response => {
                console.log(response);
                if(response.status==200){
                    alert("Recipe Submitted Successfully");
                }
            });
    }
    render() {
        return (
            <div>
                <SubmitRecipeHeading>
                    <SubmitRecipeHeadingWrapper>
                        <HeadingPara>Submit Recipe</HeadingPara>
                    </SubmitRecipeHeadingWrapper>
                </SubmitRecipeHeading>
                <SubmitRecipeBody>
                    <SubHeadingTitle >Recipe Name</SubHeadingTitle>
                    <FormInput onChange={(event) => this.recipename(event)} />
                    <SubHeadingTitle>Preparation Time</SubHeadingTitle>
                    <FormInput onChange={(event) => this.preptime(event)} />
                    <SubHeadingTitle>Cooking Time</SubHeadingTitle>
                    <FormInput onChange={(event) => this.cooktime(event)} />
                    <SubHeadingTitle>Recipe Category</SubHeadingTitle>
                    <FormInput onChange={(event) => this.tag(event)} />
                    <SubHeadingTitle>Servings</SubHeadingTitle>
                    <FormInput onChange={(event) => this.recipeservings(event)} />
                    <SubHeadingTitle>Calories</SubHeadingTitle>
                    <FormInput onChange={(event) => this.recipecalories(event)} />
                    <SubHeadingTitle>Chef</SubHeadingTitle>
                    <FormInput onChange={(event) => this.chefname(event)} />
                    <SubHeadingTitle>Ratings</SubHeadingTitle>
                    <FormInput onChange={(event) => this.reciperatings(event)} />
                    <SubHeadingTitle>Description</SubHeadingTitle>
                    <FormInput onChange={(event) => this.recipedescription(event)} />
                    <SubmitButton onClick={this.submitRecipeHandler}>Submit Recipe</SubmitButton>
                </SubmitRecipeBody>
            </div>
        )
    }
}
