'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Section from '../components/Section';
import GradientMenu from '../components/ui/GradientMenu';
import { Footer } from '../components/Footer';
import Project from '../components/Project';
import DownloadCV from '../components/DownloadCV';
import Image from 'next/image';

// --- COMPONENTE AboutMe ---
const defaultContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const defaultItemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const presetVariants = {
  fade: { container: defaultContainerVariants, item: defaultItemVariants },
  slide: { container: defaultContainerVariants, item: { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } } },
  scale: { container: defaultContainerVariants, item: { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } } },
  zoom: { container: defaultContainerVariants, item: { hidden: { opacity: 0, scale: 0.5 }, visible: { opacity: 1, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 20 } } } },
};

function AboutMe({ children, className, variants, preset = 'fade' }) {
  const selectedVariants = presetVariants[preset] || { container: defaultContainerVariants, item: defaultItemVariants };
  const containerVariants = variants?.container || selectedVariants.container;
  const itemVariants = variants?.item || selectedVariants.item;

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={cn(className, 'grid grid-cols-1 md:grid-cols-3 gap-8 mx-auto')}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants} className="w-full">
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}

// --- DATI DELLE IMMAGINI ---
const aboutMeData = [
  { 
    src: "/gianluca-severo.jpg", 
    alt: "gianluca-severo-foto", 
    name: "Gianluca Severo", 
    designation: "Junior full-stack",
    quote: "Sono un ragazzo da sempre affascinato dal mondo della tecnologia 💻 e da tutto ciò che riguarda l'ambito IT. Mi piacerebbe farne la mia professione, così da poter accrescere continuamente le mie conoscenze. Inoltre, amo i videogiochi 🎮, lo sport ⚽️ e la palestra 🏋️‍♂️."
  },
  { 
    src: "/attestato-boolean.png", 
    alt: "certificato-boolean", 
    name: "Certificato Boolean", 
    designation: "Java, Spring, HTML, CSS, Javascript, React, Node.js",
    quote: "A gennaio 2025 ho deciso di iscrivermi all'Academy di Boolean, dove, oltre a imparare i linguaggi di programmazione, ho incontrato persone fantastiche. È stato un percorso bellissimo ma anche impegnativo; grazie alla perseveranza, sono riuscito a raggiungere il mio obiettivo. Superando l'esame finale, ho ottenuto il mio primo certificato da Full-Stack Web Developer con specializzazione in Java."
  },
  { 
    src: "/gianluca-bartender.png", 
    alt: "gianluca-bartender", 
    name: "Ero un bartender", 
    designation: "European Bartender School",
    quote: "Prima di intraprendere questo percorso, lavoravo come bartender. Ho iniziato questa professione nel 2019, ottenendo un certificato alla European Bartender School di Barcellona, dove ho vissuto per quasi un anno per acquisire esperienza e, soprattutto, portarmi a casa un ricordo indimenticabile🍸."
  },
];

// --- HOMEPAGE ---
export default function Homepage() {
  return (
    <>
      <GradientMenu />

      <div id="homepage">
        <Section />
      </div>

      {/* --- SEZIONE ABOUT ME CON CARD PIÙ ALTE --- */}
      <div id="about-me" className="pt-20 pb-20 flex justify-center items-center">
        <AboutMe preset="slide" className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto p-4">
          {aboutMeData.map((item, index) => (
            <div
              key={index}
              className="relative bg-white shadow-lg rounded-xl overflow-hidden border border-gray-100 group cursor-pointer"
            >
              {/* Immagine full card più alta con effetto hover */}
              <div className="relative w-full h-96 md:h-[28rem] lg:h-[32rem]">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-all duration-500 group-hover:blur-sm group-hover:scale-105"
                  priority={index === 0}
                />
                
                {/* Overlay scuro al hover */}
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-75 transition-opacity duration-500" />
              </div>

              {/* Contenuto sotto sempre visibile */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
                {item.designation && (
                  <p className="text-xs text-indigo-600 mb-4">{item.designation}</p>
                )}
              </div>

              {/* Quote che appare al hover sopra l'immagine */}
              <div className="absolute inset-0 flex flex-col justify-center items-center p-6 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-white text-base leading-relaxed">{item.quote}</p>
              </div>
            </div>
          ))}
        </AboutMe>
      </div>

      {/* --- SEZIONE PROJECT --- */}
      <div id="project" className="container mx-auto px-4 flex justify-center items-center bg-transparent">
        <Project />
      </div>

      {/* --- SEZIONE CV --- */}
      <div id="cv">
        <DownloadCV />
      </div>

      <Footer />
    </>
  );
}