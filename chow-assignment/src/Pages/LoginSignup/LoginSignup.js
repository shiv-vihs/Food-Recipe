import React, { Component } from "react";
import { connect } from "react-redux";
import LoginBackground from "../../Assets/Login.jpeg";
import Login from "../../Components/Login/Login";
import Signup from "../../Components/Signup/Signup";
import { LoginLeft, LoginRight, LoginContainer } from "./styles";
class LoginSignup extends Component {
  render() {
    let displayOutput;
    if (this.props.sgnup === true) {
      displayOutput = <Signup changeToL={this.props.changeToLogIn} />;
    } else {
      displayOutput = (
        <Login
          Check={this.props.loginCheck}
          changeToS={this.props.changeToSignUp}
        />
      );
    }
    return (
      <>
        <LoginContainer>
          <LoginLeft>
            <img src={LoginBackground} width="100%" />
          </LoginLeft>
          <LoginRight>{displayOutput}</LoginRight>
        </LoginContainer>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    sgnup: state.signup,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    changeToLogIn: () => dispatch({ type: "CHANGE_TO_LOGIN" }),
    changeToSignUp: () => dispatch({ type: "CHANGE_TO_SIGNUP" }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginSignup);
