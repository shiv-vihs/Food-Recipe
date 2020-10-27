import React, { Component } from 'react'
import { SliderButton, SelectedSliderButton } from "./styles"
export default class Button extends Component {

    render() {
        let renderButton;
        if (this.props.SelectedIndex === this.props.ind)

            renderButton = <SelectedSliderButton onClick={() => { this.props.clicked(this.props.ind) }}>{this.props.buttonname}</SelectedSliderButton>

        else {
            renderButton = <SliderButton onClick={() => { this.props.clicked(this.props.ind) }}>{this.props.buttonname}</SliderButton>
        }
        return (
            <>
                {renderButton}
            </>
        )
    }
}
