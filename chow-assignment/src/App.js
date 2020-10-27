import React, { Component } from 'react'
import "../node_modules/font-awesome/css/font-awesome.min.css"
import './App.css';
import { Wrapper } from "./AppStyle"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import Body from "./Pages/Body/Body"
import LoginSignup from "./Pages/LoginSignup/LoginSignup"
import SubmitRecipe from "./Pages/SubmitRecipe/SubmitRecipe"
import RecipePage from "./Pages/RecipePage/RecipePage"
import { Route, Switch } from "react-router-dom"
import ContactPage from "./Pages/ContactPage/ContactPage"
import ColorSwitcher from "./Components/ColorSwitcher/ColorSwitcher"
import { ThemeProvider } from "styled-components"
import { theme } from "./Themes"
export default class App extends Component {
  state = {
    isLoggedIn: false,
    themeSelected: theme.colors.chowDefault
  }
  loginCheck = (em) => {
    this.setState({ isLoggedIn: em });
  }

  themeChange = (newTheme) => {
    this.setState({ themeSelected: newTheme });
  }
  render() {

    let screen;
     if (this.state.isLoggedIn === false)
       screen = <LoginSignup loginCheck={this.loginCheck} />
     else
    screen =
      <>
        <Header />
        <Switch>
          <Route path="/" exact component={Body} />
          <Route path="/home" exact component={Body} />
          <Route path="/submit-recipe" exact component={SubmitRecipe} />
          <Route path="/contact-page" exact component={ContactPage} />
          <Route path="/:id" exact component={RecipePage} />

        </Switch>
        <Footer />
      </>
    return (
      <>
        <ThemeProvider theme={this.state.themeSelected}>
          <Wrapper>
            <ColorSwitcher themeSelector={this.themeChange} />
            {screen}
          </Wrapper>
        </ThemeProvider>

      </>
    )
  }
}

