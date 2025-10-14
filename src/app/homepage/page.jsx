import React from 'react'
import Section from '../components/Section'
import Photo from '../components/Photo'
import AboutMe from '../components/AboutMe'
import GradientMenu from '../components/ui/GradientMenu'

export default function Homepage() {
    return (
        <>
            <GradientMenu />

            <div id="homepage">
                <Section />
            </div>
            <div id="about-me">
                <AboutMe />
            </div>
            <div id="photo">
                <Photo />
            </div>



        </>
    )
}
