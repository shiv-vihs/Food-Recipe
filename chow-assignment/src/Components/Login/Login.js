import React, { Component } from 'react'
import {Error} from "../../Pages/LoginSignup/styles"
import { StyledSignup, FieldHeading, StyledTextField, LoginPageButtons, Selected, Unselected } from "../../Pages/LoginSignup/styles"
import axios from "axios"
export default class Login extends Component {
    state = {
        email: null,
        pass: null,
        UserData: {},
        errlogin: null,
        errors: {},
        success:null
    }
    componentDidMount(){
        window.scrollTo(0,0);
    }
    onChangeEmail = (e) => {
        this.setState({ email: e.target.value });
    }
    onChangePass = (e) => {
        this.setState({ pass: e.target.value });
    }
    equalCheck = () => {
        let errors = {};
        let formIsValid = true;


        //Email
        if(!this.state.email){
            
           formIsValid = false;
           errors["email"] = "Field cannot be empty";
        }

        else{
            console.log("Inside");
           let lastAtPos = this.state.email.lastIndexOf('@');
           let lastDotPos = this.state.email.lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && this.state.email.indexOf('@@') == -1 && lastDotPos > 2 && (this.state.email.length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Email entered is not valid";
            }
       }  

       this.setState({errors: errors});
       console.log(formIsValid)
       if(formIsValid){
           
       

        let postData={email: this.state.email, password:this.state.pass,returnSecureToken:true};
        axios.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBBTcBYXnaAmM1YEg6QLpggdBscZJXVJfk', postData)
            .then(response => {
                this.setState({UserData:response});
                console.log(response);
                if(response.status == 200){
                    this.setState({success:"Successfully Logged In. Press Log In button again to continue"});
                    this.setState({errlogin:null});
                }
            }).catch((error)=>{
            
                this.setState({errlogin:"Check Email and Password for correctness"})
                
            });
         let isSuccessful = false;
         if(this.state.UserData.status === 200){
             isSuccessful= true;
         }
        this.props.Check(isSuccessful);
       }
    }
    render() {
        
        return (
            <>
                <StyledSignup>Log In</StyledSignup>
                <span style={{color: "red"}}>{this.state.errlogin}</span>
                <p style={{color:"green"}}>{this.state.success}</p>
                <FieldHeading >E-mail</FieldHeading>
                <span style={{color: "red"}}>{this.state.errors["email"]}</span>
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
