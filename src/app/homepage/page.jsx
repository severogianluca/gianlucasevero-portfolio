import React from 'react'
import Section from '../components/Section'
import AboutMe from '../components/AboutMe'
import GradientMenu from '../components/ui/GradientMenu'
import { Footer } from '../components/Footer'
import Project from '../components/Project'

export default function Homepage() {
    return (
        <>
            <div>
                <GradientMenu />

                <div id="homepage">
                    <Section />
                </div>
                <div id="about-me" className="pt-16 pb-10 flex justify-center items-center pt-40 pb-40">
                    <AboutMe
                        testimonials={[
                            {
                                name: "Gianluca Severo",
                                designation: "Junior full-stack",
                                quote: "Sono un ragazzo da sempre affascinato dal mondo della tecnologia 💻 e da tutto ciò che riguarda l’ambito IT. Mi piacerebbe farne la mia professione, così da poter accrescere continuamente le mie conoscenze. Inoltre, amo i videogiochi 🎮, lo sport ⚽️ e la palestra 🏋️‍♂️.",
                                src: "/thumbnail_f36eea25-d57b-40d0-aa1e-6e5dc8ecc157.jpg",
                                alt: "gianluca-severo-foto",
                            },
                            {
                                name: "Certificato Boolean",
                                designation: "Java, Spring, HTML, CSS, Javascript, React, Node.js",
                                quote: "A gennaio 2025 ho deciso di iscrivermi all’Academy di Boolean, dove, oltre a imparare i linguaggi di programmazione, ho incontrato persone fantastiche. È stato un percorso bellissimo ma anche impegnativo; grazie alla perseveranza, sono riuscito a raggiungere il mio obiettivo. Superando l’esame finale, ho ottenuto il mio primo certificato da Full-Stack Web Developer con specializzazione in Java.",
                                src: "/attestato-boolean.png",
                            },
                            {
                                name: "Ero un bartender",

                                quote: "Prima di intraprendere questo percorso, lavoravo come bartender. Ho iniziato questa professione nel 2019, ottenendo un certificato alla European Bartender School di Barcellona, dove ho vissuto per quasi un anno per acquisire esperienza e, soprattutto, portarmi a casa un ricordo indimenticabile🍸.",
                                src: "/gianluca-bartender.png",
                            },
                        ]} />
                </div>
                <div id="project" className="container mx-auto px-4 flex justify-center items-center bg-transparent">
                    <Project />
                </div>

                <Footer />
            </div>




        </>
    )
}
