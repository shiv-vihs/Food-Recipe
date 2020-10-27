import React, { Component } from 'react'
import axios from "axios"
import {Error,StyledSignup, FieldHeading, StyledTextField, LoginPageButtons,Selected, Unselected} from "../../Pages/LoginSignup/styles"
export default class Signup extends Component {

    state={
        email:null,
        name:null,
        userName:null,
        password:null,
        repeatPassword:null,
        errormsg:null
    }
    nameChange=(event)=>{
        this.setState({name: event.target.value});
    }
    userNameChange=(event)=>{
        this.setState({userName: event.target.value});
    }
    repeatPasswordChange=(event)=>{
        this.setState({repeatPassword: event.target.value});
    }
    emailChange=(event)=>{
        this.setState({email: event.target.value});
    }
    passwordChange=(event)=>{
        this.setState({password: event.target.value});
    }
    onSubmitHandler=()=>{
        const postData={email: this.state.email, password: this.state.password, returnSecureToken: true};
        axios.post("https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBBTcBYXnaAmM1YEg6QLpggdBscZJXVJfk",postData).then
        (response=>{
            if(response.status == 200){
                alert("User Signed up Successfully! Please Log In");
            }
                console.log(response);
            }
        ).catch((error)=>{
            
            //console.log({error});
            this.setState({errormsg: error.response.data.error.message});
            
        })
    }
    render() {
        return (
            <>
            <StyledSignup>SignUp</StyledSignup>
            <Error>{this.state.errormsg}</Error>
            <FieldHeading >Name</FieldHeading>
            <StyledTextField onChange={(event)=>this.nameChange(event)} placeholder="Name"/>
            <FieldHeading >E-mail</FieldHeading>
            <StyledTextField onChange={(event)=>this.emailChange(event)} placeholder="E-mail"/>
            <FieldHeading>Username</FieldHeading>
            <StyledTextField onChange={(event)=>this.userNameChange(event)} placeholder="Username"/>
            <FieldHeading>Password</FieldHeading>
            <StyledTextField type="password" onChange={(event)=>this.passwordChange(event)} placeholder="Password"/>
            <FieldHeading>Repeat Password</FieldHeading>
            <StyledTextField type="password" onChange={(event)=>this.repeatPasswordChange(event)} placeholder="Repeat Password"/>
            <LoginPageButtons>
                <Selected onClick={this.onSubmitHandler}>Sign Up</Selected>
                <Unselected onClick={()=>this.props.changeToL()}>Sign In</Unselected>
            </LoginPageButtons>
            </>
        )
    }
}
