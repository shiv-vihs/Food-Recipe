import axios from 'axios';
import React, { Component } from 'react'
import { SubmitRecipeHeading, HeadingPara, SubmitRecipeHeadingWrapper, SubmitRecipeBody, SubHeadingTitle, FormInput, SubmitButton } from "./styles"
import {connect} from "react-redux"
class SubmitRecipe extends Component {
    state = {
        recipeName: null,
        prepTime: null,
        cookTime: null,
        recipeTag: null,
        servings: null,
        calories: null,
        chef: null,
        ratings: null,
        descrip: null,
        errors: {},
        success:null
       
    }
    componentDidMount() {
        
        window.scrollTo({top:0,left:0, behavior:'smooth'});
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
        let errors = {};
        let formIsValid = true;
        //recipeName
        if(!this.state.recipeName){
            
            formIsValid = false;
            errors["recipeName"] = "Field cannot be empty";
         }
 
         
        //prepTime
        if(!this.state.prepTime){
            
            formIsValid = false;
            errors["prepTime"] = "Field cannot be empty";
         }
 
         
        //CookTime
        if(!this.state.cookTime){
            
            formIsValid = false;
            errors["cookTime"] = "Field cannot be empty";
         }
 
         
        //recipeTag
        if(!this.state.recipeTag){
            
            formIsValid = false;
            errors["recipeTag"] = "Field cannot be empty";
         }
 
          
        //servings
        if(!this.state.servings){
            
            formIsValid = false;
            errors["servings"] = "Field cannot be empty";
         }
 
         
        //calories
        if(!this.state.calories){
            
            formIsValid = false;
            errors["calories"] = "Field cannot be empty";
         }
 
         
        //chef
        if(!this.state.chef){
            
            formIsValid = false;
            errors["chef"] = "Field cannot be empty";
         }
 
        
        //ratings
        if(!this.state.ratings){
            
            formIsValid = false;
            errors["ratings"] = "Field cannot be empty";
         }
 
         
        //descrip
        if(!this.state.descrip){
            
            formIsValid = false;
            errors["descrip"] = "Field cannot be empty";
         }
 
         
        this.setState({errors: errors});
       console.log(formIsValid)
       if(formIsValid){ 

         let count=0;
         for(let key in this.props.RecList){
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
                this.setState({success:"Successfully Submitted! Click Home to view the recipe added"});
                window.scrollTo({top:0,left:0, behavior:'smooth'});
                }
            });
        }
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
                <p style={{color:"green"}}>{this.state.success}</p>
                    <SubHeadingTitle >Recipe Name</SubHeadingTitle>
                    <span style={{color: "red"}}>{this.state.errors["recipeName"]}</span>
                    <FormInput onChange={(event) => this.recipename(event)} />
                    <SubHeadingTitle>Preparation Time</SubHeadingTitle>
                    <span style={{color: "red"}}>{this.state.errors["prepTime"]}</span>
                    <FormInput onChange={(event) => this.preptime(event)} />
                    <SubHeadingTitle>Cooking Time</SubHeadingTitle>
                    <span style={{color: "red"}}>{this.state.errors["cookTime"]}</span>
                    <FormInput onChange={(event) => this.cooktime(event)} />
                    <SubHeadingTitle>Recipe Category</SubHeadingTitle>
                    <span style={{color: "red"}}>{this.state.errors["recipeTag"]}</span>
                    <FormInput onChange={(event) => this.tag(event)} />
                    <SubHeadingTitle>Servings</SubHeadingTitle>
                    <span style={{color: "red"}}>{this.state.errors["servings"]}</span>
                    <FormInput onChange={(event) => this.recipeservings(event)} />
                    <SubHeadingTitle>Calories</SubHeadingTitle>
                    <span style={{color: "red"}}>{this.state.errors["calories"]}</span>
                    <FormInput onChange={(event) => this.recipecalories(event)} />
                    <SubHeadingTitle>Chef</SubHeadingTitle>
                    <span style={{color: "red"}}>{this.state.errors["chef"]}</span>
                    <FormInput onChange={(event) => this.chefname(event)} />
                    <SubHeadingTitle>Ratings</SubHeadingTitle>
                    <span style={{color: "red"}}>{this.state.errors["ratings"]}</span>
                    <FormInput onChange={(event) => this.reciperatings(event)} />
                    <SubHeadingTitle>Description</SubHeadingTitle>
                    <span style={{color: "red"}}>{this.state.errors["descrip"]}</span>
                    <FormInput onChange={(event) => this.recipedescription(event)} />
                    <SubmitButton onClick={this.submitRecipeHandler}>Submit Recipe</SubmitButton>                  
                </SubmitRecipeBody>
            </div>
        )
    }
}
const mapStateToProps= state =>{
    return{
        RecList:state.RecipeList
    };
};
export default connect(mapStateToProps)(SubmitRecipe);