import React, { Component } from 'react'
import {Error} from "../../Pages/LoginSignup/styles"
import { StyledSignup, FieldHeading, StyledTextField, LoginPageButtons, Selected, Unselected } from "../../Pages/LoginSignup/styles"
import axios from "axios"
export default class Login extends Component {
    state = {
        email: null,
        pass: null,
        UserData: {},
        errlogin: null
    }
    
    onChangeEmail = (e) => {
        this.setState({ email: e.target.value });
    }
    onChangePass = (e) => {
        this.setState({ pass: e.target.value });
    }
    equalCheck = () => {
        let postData={email: this.state.email, password:this.state.pass,returnSecureToken:true};
        axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBBTcBYXnaAmM1YEg6QLpggdBscZJXVJfk', postData)
            .then(response => {
                this.setState({UserData:response});
                console.log(response);
                if(response.status == 200){
                    alert("User Logged In Successfully! Click Login Again");
                }
            }).catch((error)=>{
            
                //console.log({error});
                this.setState({errlogin: error.response.data.error.message});
                
            });
         let isSuccessful = false;
         if(this.state.UserData.status === 200){
             isSuccessful= true;
         }
        this.props.Check(isSuccessful);
        
    }
    render() {
        
        return (
            <>
                <StyledSignup>Log In</StyledSignup>
        <Error>{this.state.errlogin}</Error>
                <FieldHeading >E-mail</FieldHeading>
                <StyledTextField onChange={(event) => { this.onChangeEmail(event) }} placeholder="E-mail" />

                <FieldHeading >Password</FieldHeading>
                <StyledTextField type="password" onChange={(event) => { this.onChangePass(event) }} placeholder="Password" />
                <LoginPageButtons>
                    <Selected onClick={this.equalCheck} >Log In</Selected>
                    <Unselected onClick={() => this.props.changeToS()}>Sign Up</Unselected>
                </LoginPageButtons>
            </>
        )
    }
}
