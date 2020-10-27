import React, { Component } from 'react'
import { SliderImage } from '../../Pages/Body/styles'
import { AlphaWrapper,ViewRecipe, NavLink ,FoodContent, DishHeading, DishTag, SubHeading, SubheadingSpan } from "./style"

export default class Banner extends Component {
    render() {
        return (
            <>

                <SliderImage background={this.props.background}>
                    <AlphaWrapper>
                        <FoodContent>
                        
                            <DishTag>{this.props.attributes.tag}</DishTag>
                            <DishHeading>{this.props.attributes.name}</DishHeading>
                            <SubHeading>
                                <SubheadingSpan><i class="fa fa-cutlery" aria-hidden="true"></i> {this.props.attributes.servings} SERVINGS</SubheadingSpan>
                                <SubheadingSpan><i class="fa fa-clock-o" aria-hidden="true"></i> {this.props.attributes.time}</SubheadingSpan>
                                <SubheadingSpan>BY <i class="fa fa-user" aria-hidden="true"></i> {this.props.attributes.chef}</SubheadingSpan>
                                
                            </SubHeading>
                            
                            <NavLink to={"/"+ this.props.index}><ViewRecipe>VIEW RECIPE</ViewRecipe></NavLink>
                        </FoodContent>
                    

                        </AlphaWrapper>
                </SliderImage>
            </>
        )
    }
}
