import React, { Component } from 'react'
import { FooterTop, Content, Column, FooterBottom, CopyRight, ColumnHeading, Span, FooterText, InputWrapper, StyledInput, StyledButton, StyledUl, StyledLi, StyledFooter } from "./styles"
import '../../App.css'
export default class Footer extends Component {
    render() {
        return (
            <StyledFooter>
                <FooterTop>
                    <Content>
                        <Column>

                            <Span><ColumnHeading>About</ColumnHeading></Span>
                            
                            <FooterText>Cras at ultrices erat, sed vulputate eros. Nunc at augue gravida est fermentum vulputate. Pellentesque et ipsum in dui malesuada tempus.</FooterText>

                        </Column>
                        <Column><Span><ColumnHeading>Archives</ColumnHeading></Span>
                            
                            <FooterText>
                                <StyledUl>
                                    <StyledLi>June 2016</StyledLi>
                                    <StyledLi>July 2016</StyledLi>
                                    <StyledLi>August 2016</StyledLi>
                                    <StyledLi>September 2016</StyledLi>
                                    <StyledLi>November 2016</StyledLi>
                                </StyledUl>

                            </FooterText>
                        </Column>
                        <Column><Span><ColumnHeading>Recipes</ColumnHeading></Span>
                            
                            <FooterText>
                            <StyledUl>
                                    <StyledLi>Browse Recipe</StyledLi>
                                    <StyledLi>Recipe Page</StyledLi>
                                    <StyledLi>Submit Recipe</StyledLi>
                                </StyledUl>
                            </FooterText>
                        </Column>
                        <Column><Span><ColumnHeading>Newsletter</ColumnHeading></Span>
                            <FooterText>
                                <div>Sign up to receive email updates on new product announcements, gift ideas, sales and more</div>
                                <InputWrapper>
                                    <StyledInput></StyledInput>
                                    <StyledButton>SUBSCRIBE</StyledButton>
                                </InputWrapper>
                            </FooterText>
                        </Column>
                    </Content>
                </FooterTop>
                <FooterBottom>
                    <Content>
                        <CopyRight>&copy; Copyright 2014 by Chow. All Rights Reserved.</CopyRight>
                    </Content>
                </FooterBottom>
            </StyledFooter>
        )
    }
}
