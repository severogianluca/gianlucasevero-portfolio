import React from 'react'
import Header from '../components/Header'
import Section from '../components/Section'
import Photo from '../components/Photo'
import AboutMe from '../components/AboutMe'
import GradientMenu from '../components/ui/GradientMenu'
// import { FullPage, Section } from '../components/Section'

export default function Homepage() {
    return (
        <>
            <GradientMenu />

            <div id="homepage">
                <Section />
            </div>

            {/* <Header /> */}
            <div id="photo">
                <Photo />
            </div>

            <div id="about-me">
                <AboutMe />
            </div>

        </>
    )
}
