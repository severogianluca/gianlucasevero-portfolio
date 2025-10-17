'use client';

import { useState } from 'react';
import { GlowCard } from "./ui/GlowCard";

function Project() {
  const [modalContent, setModalContent] = useState(null); // { type: 'image' | 'video', src: string }

  const projectsSX = [
    {
      title: "La mia pizzeria",
      description: "Applicazione MVC per la gestione di una pizzeria, sviluppata con Spring Boot e Spring Security. Include un backoffice CRUD RESTful per pizze, ingredienti e offerte, con viste responsive in Thymeleaf e Bootstrap.",
      image: "/pizzeria.png"
    },
    {
      title: "Spotify",
      description: "Questa è una copia statica dell’interfaccia di Spotify, creata con HTML e CSS per fare pratica. Non è interattiva, lo scopo era riprodurre l’aspetto grafico.",
      image: "/spotify.png"
    },
  ];

  const projectsDX = [
    {
      title: "AI Chat Bot",
      description: "Assistente virtuale con intelligenza artificiale avanzata",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop"
    },
    {
      title: "E-commerce Manga",
      description: "Primo progetto di gruppo sviluppato con React (frontend) e Node.js (backend), basato su API REST. Include visualizzazione a griglia dei prodotti, pagina dettaglio e carrello interattivo.",
      videoUrl: "/manga-e-commerce.mp4"
    },
  ];

  const handleOpenModal = (project) => {
    if (project.videoUrl) {
      setModalContent({ type: 'video', src: project.videoUrl });
    } else if (project.image) {
      setModalContent({ type: 'image', src: project.image });
    }
  };

  return (
    <div className="w-full min-h-screen relative flex justify-center items-center py-20 px-4">
      {/* Titolo */}
      <h1 className="absolute top-10 left-1/2 -translate-x-1/2 text-white text-6xl font-bold z-20">
        Progetti personali
      </h1>

      {/* Robot centrale full-screen */}
      <div className="absolute inset-0 flex justify-center items-center pt-28">
        <iframe
          src="https://my.spline.design/robotfollowcursorforlandingpage-gcwpnQXFG4kNK7waVtORkpDl/"
          frameBorder="0"
          width="100%"
          height="100%"
          style={{ border: "none" }}
        />
      </div>

      {/* Colonna Sinistra */}
      <div className="absolute left-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-8 z-10">
        {projectsSX.map((project, index) => (
          <GlowCard
            key={index}
            width="450px"
            height="250px"
          >
            <div
              className="relative w-full h-full group cursor-pointer"
              onClick={() => handleOpenModal(project)}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{ backgroundImage: `url(${project.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="relative h-full flex flex-col justify-end p-6">
                <h2 className="text-white font-bold text-2xl mb-2 transform group-hover:translate-y-[-4px] transition-transform duration-300">
                  {project.title}
                </h2>
                <p className="text-gray-300 text-base opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {project.description}
                </p>
              </div>
            </div>
          </GlowCard>
        ))}
      </div>

      {/* Colonna Destra */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-8 z-10">
        {projectsDX.map((project, index) => (
          <GlowCard
            key={index + projectsDX.length}
            width="450px"
            height="250px"
          >
            <div
              className="relative w-full h-full group cursor-pointer"
              onClick={() => handleOpenModal(project)}
            >
              {project.videoUrl ? (
                <video
                  src={project.videoUrl}
                  className="absolute inset-0 w-full h-full object-cover rounded-xl"
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{ backgroundImage: `url(${project.image})` }}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="relative h-full flex flex-col justify-end p-6">
                <h2 className="text-white font-bold text-2xl mb-2 transform group-hover:translate-y-[-4px] transition-transform duration-300">
                  {project.title}
                </h2>
                <p className="text-gray-300 text-base opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  {project.description}
                </p>
              </div>
            </div>
          </GlowCard>
        ))}
      </div>

      {/* Modal immagine/video */}
      {modalContent && (
        <div
          className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 cursor-zoom-out"
          onClick={() => setModalContent(null)}
        >
          {modalContent.type === 'image' ? (
            <img
              src={modalContent.src}
              alt="Contenuto ingrandito"
              className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
            />
          ) : (
            <video
              src={modalContent.src}
              controls
              autoPlay
              className="max-w-[90%] max-h-[90%] rounded-xl shadow-2xl"
            />
          )}
        </div>
      )}
    </div>
  );
}

export default Project;
