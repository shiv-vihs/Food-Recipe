import React, { Component } from 'react'
import "../../App.css"
import { SelectedMobileDiv, Heading, SubHeading, DropDownContainer, Button, MenuSpan, MobileDiv, MobileHeader, HeaderDiv, DropdownItem, StyledOptions, Left, Right, StyledOptionsDemos, StyledOptionsPages, StyledOptionsRecipes, DemosDropdown, RecipesDropdown, PagesDropdown } from "./styles"
import {connect} from "react-redux"
import logo from "../../Assets/logo.png"
// import {Link} from "react-router-dom"
import { NavLink } from "./styles"
class header extends Component {
    render() {
        let dropDown;
        let mobileDiv;
        if (this.props.clked === true){
            mobileDiv =
                <>
                    <SelectedMobileDiv>
                        <MenuSpan style={{ color: "white" }}>MENU</MenuSpan>
                        <Button onClick={this.props.dropDownState}><MenuSpan style={{ backgroundColor: "#8DC63F" }}><i class="fa fa-times" aria-hidden="true" style={{ backgroundColor: "#8DC63F", color: "white", fontSize: "200%" }}></i></MenuSpan></Button>
                    </SelectedMobileDiv>
                </>;
                dropDown =
                <>
                    <DropDownContainer>
                        <Heading to="/home">Home</Heading>
                        <Heading >Demos</Heading>
                        <SubHeading>Grid Homepage</SubHeading>
                        <SubHeading>List Homepage</SubHeading>
                        <SubHeading>Boxed Version</SubHeading>
                        <Heading >Recipes</Heading>
                        <SubHeading>Browse Recipes</SubHeading>
                        <SubHeading>Recipe Page #1</SubHeading>
                        <SubHeading>Recipe Page #2</SubHeading>
                        <Heading >Pages</Heading>
                        <SubHeading>Shortcodes</SubHeading>
                        <SubHeading>Typography</SubHeading>
                        <Heading to="/contact-page" >Contact</Heading>
                        <Heading to="/submit-recipe" >Submit Recipe</Heading>
    
    
                    </DropDownContainer>
                </>;
        }
        else
            mobileDiv =
                <>
                    <MobileDiv>
                        <MenuSpan>MENU</MenuSpan>
                        <Button onClick={this.props.dropDownState}><MenuSpan><i class="fa fa-bars" aria-hidden="true" style={{ fontSize: "200%" }}></i></MenuSpan></Button>
                    </MobileDiv>
                </>
        

        return (
            <>
                <MobileHeader>
                    <div><img src={logo} height="" alt="logo" /></div>
                    {mobileDiv}
                    {dropDown}
                </MobileHeader>
                <HeaderDiv>
                    <Left>
                        <img src={logo} height="" alt="logo" />
                    </Left>
                    <Right>
                        <NavLink to="/home"><StyledOptions className="Home" ><span>Home</span></StyledOptions></NavLink>

                        <NavLink><StyledOptionsDemos className="Demos"><span>Demos</span>
                            <DemosDropdown>
                                <DropdownItem>Grid HomePage</DropdownItem>
                                <DropdownItem>List HomePage</DropdownItem>
                                <DropdownItem>Box Version</DropdownItem>
                            </DemosDropdown></StyledOptionsDemos></NavLink>

                        <NavLink><StyledOptionsRecipes className="Recipes" ><span>Recipes</span>
                            <RecipesDropdown>
                                <DropdownItem>Browse Recipes</DropdownItem>
                                <DropdownItem>Recipe Page #1</DropdownItem>
                                <DropdownItem>Recipe Page #2</DropdownItem>
                            </RecipesDropdown></StyledOptionsRecipes></NavLink>


                        <NavLink><StyledOptionsPages className="Pages" ><span>Pages</span>
                            <PagesDropdown>
                                <DropdownItem>Shortcodes</DropdownItem>
                                <DropdownItem>Typography</DropdownItem>
                            </PagesDropdown></StyledOptionsPages></NavLink>

                        <NavLink to="/contact-page"><StyledOptions ><span>Contact Us</span></StyledOptions></NavLink>

                        <NavLink to="/submit-recipe"><StyledOptions ><span>Submit Recipe</span></StyledOptions></NavLink>
                        <a style={{cursor:"pointer"}} onClick={this.props.logoutHandler}><StyledOptions><span>Logout</span></StyledOptions></a>
                    </Right>
                </HeaderDiv>
            </>
        )
    }
}
const mapStateToProps= state =>{
    return{
        clked:state.clicked
    };
};
const mapDispatchToProps = dispatch =>{
    return{
        dropDownState: ()=> dispatch({type:'DROP_DOWN_STATE'}),
        
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(header);