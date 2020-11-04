import React, { Component } from "react";
import {
  ResetButton,
  Container,
  StyleSwitcher,
  SwitcherIcon,
  ColorContainer,
  ColorShade,
} from "./styles";
import Switcher from "../../Assets/switcher.png";
import { theme } from "../../Themes";
export default class ColorSwitcher extends Component {
  render() {
    return (
      <>
        <Container>
          <StyleSwitcher>
            Style Switcher
            <SwitcherIcon>
              <img src={Switcher} />
            </SwitcherIcon>
          </StyleSwitcher>
          <ColorContainer>
            {Object.keys(theme.colors).map((selectedTheme) => {
              return (
                <ColorShade
                  bgc={theme.colors[selectedTheme].color}
                  onClick={() =>
                    this.props.themeSelector(theme.colors[selectedTheme])
                  }
                ></ColorShade>
              );
            })}

            <ResetButton
              bgc={theme.colors.chowDefault.color}
              onClick={() => this.props.themeSelector(theme.colors.chowDefault)}
            >
              RESET
            </ResetButton>
          </ColorContainer>
        </Container>
      </>
    );
  }
}
