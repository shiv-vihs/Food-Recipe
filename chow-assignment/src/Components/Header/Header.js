import React, { Component } from "react";
import "../../App.css";
import {
  StyledLogout,
  SelectedMobileDiv,
  Heading,
  SubHeading,
  DropDownContainer,
  Button,
  MenuSpan,
  MobileDiv,
  MobileHeader,
  HeaderDiv,
  DropdownItem,
  StyledOptions,
  Left,
  Right,
  StyledOptionsDemos,
  StyledOptionsPages,
  StyledOptionsRecipes,
  DemosDropdown,
  RecipesDropdown,
  PagesDropdown,
} from "./styles";
import { connect } from "react-redux";
import logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
import { NavLink } from "./styles";
class header extends Component {
  render() {
    let dropDown;
    let mobileDiv;
    if (this.props.clked === true) {
      mobileDiv = (
        <>
          <SelectedMobileDiv>
            <MenuSpan style={{ color: "white" }}>MENU</MenuSpan>
            <Button onClick={this.props.dropDownState}>
              <MenuSpan style={{ backgroundColor: "#8DC63F" }}>
                <i
                  class="fa fa-times"
                  aria-hidden="true"
                  style={{
                    backgroundColor: "#8DC63F",
                    color: "white",
                    fontSize: "200%",
                  }}
                ></i>
              </MenuSpan>
            </Button>
          </SelectedMobileDiv>
        </>
      );
      dropDown = (
        <>
          <DropDownContainer>
            <Heading onClick={this.props.dropDownState} to="/home">
              Home
            </Heading>
            <Heading onClick={this.props.dropDownState}>Recipes</Heading>
            <Link
              onClick={this.props.dropDownState}
              style={{ textDecoration: "none" }}
              to={"/0"}
            >
              <SubHeading>Browse Recipes</SubHeading>
            </Link>
            <Link
              onClick={this.props.dropDownState}
              style={{ textDecoration: "none" }}
              to={"/0"}
            >
              <SubHeading>Recipe Page #1</SubHeading>
            </Link>
            <Heading onClick={this.props.dropDownState} to="/contact-page">
              Contact Us
            </Heading>
            <Heading onClick={this.props.dropDownState} to="/submit-recipe">
              Submit Recipe
            </Heading>
            <StyledLogout onClick={this.props.logoutHandler}>
              Logout
            </StyledLogout>
          </DropDownContainer>
        </>
      );
    } else
      mobileDiv = (
        <>
          <MobileDiv>
            <MenuSpan>MENU</MenuSpan>
            <Button onClick={this.props.dropDownState}>
              <MenuSpan>
                <i
                  class="fa fa-bars"
                  aria-hidden="true"
                  style={{ fontSize: "200%" }}
                ></i>
              </MenuSpan>
            </Button>
          </MobileDiv>
        </>
      );

    return (
      <>
        <MobileHeader>
          <Link to={"/home"}>
            <div>
              <img src={logo} height="" alt="logo" />
            </div>
          </Link>
          {mobileDiv}
          {dropDown}
        </MobileHeader>
        <HeaderDiv>
          <Left>
            <Link to={"/home"}>
              <img src={logo} height="" alt="logo" />
            </Link>
          </Left>
          <Right>
            <NavLink to="/home">
              <StyledOptions className="Home">
                <span>Home</span>
              </StyledOptions>
            </NavLink>

            <NavLink>
              <StyledOptionsRecipes className="Recipes">
                <span>Recipes</span>
                <RecipesDropdown>
                  <Link style={{ textDecoration: "none" }} to={"/0"}>
                    <DropdownItem>Browse Recipes</DropdownItem>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to={"/0"}>
                    <DropdownItem>Recipe Page #1</DropdownItem>
                  </Link>
                </RecipesDropdown>
              </StyledOptionsRecipes>
            </NavLink>

            <NavLink to="/contact-page">
              <StyledOptions>
                <span>Contact Us</span>
              </StyledOptions>
            </NavLink>

            <NavLink to="/submit-recipe">
              <StyledOptions>
                <span>Submit Recipe</span>
              </StyledOptions>
            </NavLink>
            <a style={{ cursor: "pointer" }} onClick={this.props.logoutHandler}>
              <StyledOptions>
                <span>Logout</span>
              </StyledOptions>
            </a>
          </Right>
        </HeaderDiv>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    clked: state.clicked,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    dropDownState: () => dispatch({ type: "DROP_DOWN_STATE" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(header);
