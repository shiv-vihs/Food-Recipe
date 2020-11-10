import React, { Component } from "react";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./App.css";
import { Wrapper } from "./AppStyle";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import LoginSignup from "./Pages/LoginSignup/LoginSignup";
import SubmitRecipe from "./Pages/SubmitRecipe/SubmitRecipe";
import RecipePage from "./Pages/RecipePage/RecipePage";
import { Route, Switch } from "react-router-dom";
import ContactPage from "./Pages/ContactPage/ContactPage";
import ColorSwitcher from "./Components/ColorSwitcher/ColorSwitcher";
import { ThemeProvider } from "styled-components";
import { theme } from "./Themes";
import { withRouter } from "react-router-dom";
import MyProvider from "./Context/context";

export class App extends Component {
  state = {
    isLoggedIn: false,
    themeSelected: theme.colors.chowDefault,
  };
  loginCheck = (em, email) => {
    this.setState({ isLoggedIn: em });
  };

  themeChange = (newTheme) => {
    this.setState({ themeSelected: newTheme });
  };
  logoutHandler = () => {
    this.setState({ isLoggedIn: false });
    localStorage.removeItem("activeId");
  };
  render() {
    let screen;
    if (!localStorage.getItem("activeId"))
      screen = <LoginSignup loginCheck={this.loginCheck} />;
    else if (localStorage.getItem("activeId"))
      screen = (
        <>
          <Header logoutHandler={this.logoutHandler} />

          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/home" exact component={Home} />
            <Route path="/submit-recipe" exact component={SubmitRecipe} />
            <Route path="/contact-page" exact component={ContactPage} />
            <Route path="/:id" exact component={RecipePage} />
          </Switch>

          <Footer />
        </>
      );
    return (
      <MyProvider>
        <ThemeProvider theme={this.state.themeSelected}>
          <Wrapper>
            <ColorSwitcher themeSelector={this.themeChange} />
            {screen}
          </Wrapper>
        </ThemeProvider>
      </MyProvider>
    );
  }
}
export default withRouter(App);
