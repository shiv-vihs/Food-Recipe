import React from 'react'
import {FeaturedSlide} from "./styles"
export default function Featured(props) {
    return (
        <>
            <FeaturedSlide href="#home">
            <img src={props.source} width="100%"/>
                
            </FeaturedSlide>
        </>
    )
}
