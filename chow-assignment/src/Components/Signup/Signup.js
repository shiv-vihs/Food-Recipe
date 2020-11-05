import React, { Component } from "react";
import axios from "axios";
import {
  StyledSignup,
  FieldHeading,
  StyledTextField,
  LoginPageButtons,
  Selected,
  Unselected,
} from "../../Pages/LoginSignup/styles";
export default class Signup extends Component {
  state = {
    email: null,
    name: null,
    userName: null,
    password: null,
    repeatPassword: null,
    errormsg: null,
    errors: {},
    success: null,
  };
  nameChange = (event) => {
    this.setState({ name: event.target.value });
  };
  userNameChange = (event) => {
    this.setState({ userName: event.target.value });
  };
  repeatPasswordChange = (event) => {
    this.setState({ repeatPassword: event.target.value });
  };
  emailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  passwordChange = (event) => {
    this.setState({ password: event.target.value });
  };
  onSubmitHandler = () => {
    let errors = {};
    let formIsValid = true;

    //Email
    if (!this.state.email) {
      formIsValid = false;
      errors["email"] = "Field cannot be empty";
    } else {
      console.log("Inside");
      let lastAtPos = this.state.email.lastIndexOf("@");
      let lastDotPos = this.state.email.lastIndexOf(".");

      if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          lastDotPos > 2 &&
          this.state.email.length - lastDotPos > 2
        )
      ) {
        formIsValid = false;
        errors["email"] = "Email entered is not valid";
      }
    }

    if (this.state.password != this.state.repeatPassword) {
      formIsValid = false;
      errors["password"] = "Check if Password and Repeat Password are equal";
      // this.setState({errormsg: "Check if Password and Repeat Password are equal"});
    }

    this.setState({ errors: errors });
    console.log(formIsValid);
    if (formIsValid) {
      const postData = {
        email: this.state.email,
        password: this.state.password,
        returnSecureToken: true,
      };
      axios
        .post(
          "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBBTcBYXnaAmM1YEg6QLpggdBscZJXVJfk",
          postData
        )
        .then((response) => {
          if (response.status == 200) {
            this.setState({
              success: "Successfully Signed Up. Click Login to Sign In",
            });
            this.setState({ errormsg: null });
          }
          console.log(response);
        })
        .catch((error) => {
          //console.log({error});
          this.setState({
            errormsg:
              "Check if Password and Repeat Password are minimum of length 6",
          });
        });
    }
  };
  render() {
    return (
      <>
        <StyledSignup>SignUp</StyledSignup>
        <p style={{ color: "green" }}>{this.state.success}</p>
        <span style={{ color: "red" }}>{this.state.errormsg}</span>
        <FieldHeading>Name</FieldHeading>
        <StyledTextField
          onChange={(event) => this.nameChange(event)}
          placeholder="Name"
        />
        <FieldHeading>E-mail</FieldHeading>
        <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
        <StyledTextField
          onChange={(event) => this.emailChange(event)}
          placeholder="E-mail"
        />
        <FieldHeading>Username</FieldHeading>
        <StyledTextField
          onChange={(event) => this.userNameChange(event)}
          placeholder="Username"
        />
        <FieldHeading>Password</FieldHeading>
        <span style={{ color: "red" }}>{this.state.errors["password"]}</span>
        <StyledTextField
          type="password"
          onChange={(event) => this.passwordChange(event)}
          placeholder="Password"
        />
        <FieldHeading>Repeat Password</FieldHeading>
        <StyledTextField
          type="password"
          onChange={(event) => this.repeatPasswordChange(event)}
          placeholder="Repeat Password"
        />
        <LoginPageButtons>
          <Selected onClick={this.onSubmitHandler}>Sign Up</Selected>
          <Unselected onClick={() => this.props.changeToL()}>
            Sign In
          </Unselected>
        </LoginPageButtons>
      </>
    );
  }
}
