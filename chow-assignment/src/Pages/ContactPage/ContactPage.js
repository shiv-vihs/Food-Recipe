import React, { Component } from 'react'

import { StyledButton, ShareContainer,Facebook,Twitter,GooglePlus, StyledSearch, FieldHeading, FormHeading, SpanHeading, Heading, Contact, ImageDiv, OuterContainer, LeftContainer, RightContainer } from "./styles"
import ContactPhoto from "../../Assets/contact.jpg"
export default class ContactPage extends Component {
    render() {
        return (
            <>
                <Heading>
                    <Contact>Contact Page</Contact>
                </Heading>

                <ImageDiv background={ContactPhoto}></ImageDiv>
                <OuterContainer>
                    <LeftContainer>
                        <SpanHeading><FormHeading>Contact Form</FormHeading></SpanHeading>
                        <FieldHeading>Name:</FieldHeading>
                        <StyledSearch />
                        <FieldHeading>Email:</FieldHeading>
                        <StyledSearch />
                        <FieldHeading>Message:</FieldHeading>
                        <StyledSearch />
                        <StyledButton>SEND MESSAGE</StyledButton>
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
