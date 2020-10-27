import React, { Component } from 'react'
import {ResetButton, Container, StyleSwitcher, SwitcherIcon, ColorContainer, ColorShade} from "./styles"
import Switcher from "../../Assets/switcher.png"
import {theme} from "../../Themes"
export default class ColorSwitcher extends Component {
    render() {
        return (
            <>
                <Container>
                    <StyleSwitcher>
                        Style Switcher
                        <SwitcherIcon><img src={Switcher} /></SwitcherIcon>
                    </StyleSwitcher>
                    <ColorContainer>
                    <ColorShade bgc={theme.colors.chowDefault.color} onClick={()=>this.props.themeSelector(theme.colors.chowDefault)}></ColorShade>
                    <ColorShade bgc={theme.colors.orange.color} onClick={()=>this.props.themeSelector(theme.colors.orange)}></ColorShade>
                    <ColorShade bgc={theme.colors.green.color} onClick={()=>this.props.themeSelector(theme.colors.green)}></ColorShade>
                    <ColorShade bgc={theme.colors.cyan.color} onClick={()=>this.props.themeSelector(theme.colors.cyan)}></ColorShade>
                    <ColorShade bgc={theme.colors.purple.color} onClick={()=>this.props.themeSelector(theme.colors.purple)}></ColorShade>
                    <ColorShade bgc={theme.colors.pink.color} onClick={()=>this.props.themeSelector(theme.colors.pink)}></ColorShade>
                    <ResetButton bgc={theme.colors.chowDefault.color} onClick={()=>this.props.themeSelector(theme.colors.chowDefault)}>RESET</ResetButton>
                    </ColorContainer>
                </Container>
            </>
        )
    }
}
