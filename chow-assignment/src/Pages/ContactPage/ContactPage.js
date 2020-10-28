import React, { Component } from 'react'

import { StyledButton, ShareContainer,Facebook,Twitter,GooglePlus, StyledSearch, FieldHeading, FormHeading, SpanHeading, Heading, Contact, ImageDiv, OuterContainer, LeftContainer, RightContainer } from "./styles"
import ContactPhoto from "../../Assets/contact.jpg"
export default class ContactPage extends Component {
    state = {
        fields: {},
        errors: {},
        success:null
    }

   handleChangeName=(event)=>{
    let fields = this.state.fields;
        fields["name"] = event.target.value;        
        this.setState({fields});
   }

   handleChangeEmail=(event)=>{
    let fields = this.state.fields;
        fields["email"] = event.target.value;        
        this.setState({fields});
    }
    clickHandler=()=>{
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        //Name
        if(!fields["name"]){
            console.log("inside");
           formIsValid = false;
           errors["name"] = "Field cannot be empty";
        }

        if(typeof fields["name"] !== "undefined"){
           if(!fields["name"].match(/^[a-zA-Z]+$/)){
              formIsValid = false;
              errors["name"] = "Name must contain only Letters";
           }        
        }

        //Email
        if(!fields["email"]){
           formIsValid = false;
           errors["email"] = "Field cannot be empty";
        }

        if(typeof fields["email"] !== "undefined"){
           let lastAtPos = fields["email"].lastIndexOf('@');
           let lastDotPos = fields["email"].lastIndexOf('.');

           if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') == -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
              formIsValid = false;
              errors["email"] = "Email entered is not valid";
            }
       }  

       this.setState({errors: errors});
       if(formIsValid){
           this.setState({success:"Successfully submitted details"});
       }

    }
    render() {
        
        return (
            <>
                <Heading>
                    <Contact><span>Contact Page</span></Contact>
                </Heading>

                <ImageDiv background={ContactPhoto}></ImageDiv>
                <OuterContainer>
                    <LeftContainer>
                        <SpanHeading><FormHeading>Contact Form</FormHeading></SpanHeading>
                        <FieldHeading>Name:</FieldHeading>
                        <span style={{color: "red"}}>{this.state.errors["name"]}</span>
                        <StyledSearch onChange={(event)=>this.handleChangeName(event)}/>
                        
                        <FieldHeading>Email:</FieldHeading>
                        <span style={{color: "red"}}>{this.state.errors["email"]}</span>
                        <StyledSearch onChange={(event)=>this.handleChangeEmail(event)} />
                        
                        <FieldHeading>Message:</FieldHeading>
                        <StyledSearch />
                        <StyledButton onClick={this.clickHandler}>SEND MESSAGE</StyledButton>
                        <p style={{color:"green"}}>{this.state.success}</p>
                    </LeftContainer>
                    <RightContainer>
                        <ShareContainer>
                        <SpanHeading><FormHeading>Share</FormHeading></SpanHeading>
                        <Facebook ><i class="fa fa-facebook" aria-hidden="true"></i></Facebook>
                        <Twitter ><i class="fa fa-twitter" aria-hidden="true"></i></Twitter>
                        <GooglePlus><i class="fa fa-google-plus" aria-hidden="true"></i></GooglePlus>
                        </ShareContainer>
                    </RightContainer>
                </OuterContainer>
            </>
        )
    }
}
